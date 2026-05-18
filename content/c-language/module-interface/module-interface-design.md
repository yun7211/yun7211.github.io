+++
title = "C 模块接口设计的几个原则"
date = 2026-05-18T10:40:00+08:00
draft = false
description = "整理 C 项目里模块接口设计的几个实用原则：隐藏实现、成对资源管理、返回错误码和减少全局状态。"
tags = ["C", "模块化", "接口设计"]
categories = ["C 语言"]
series = ["C 语言工程实践"]
slug = "module-interface-design"
aliases = ["/c-language/module-interface-design/"]
toc = true
+++

## 模块边界

C 项目变大以后，真正难维护的往往不是语法，而是模块边界。好的模块接口应该让调用方知道能做什么，不需要知道内部怎么做。

常见做法是把结构体定义隐藏在 `.c` 文件里，只在头文件暴露不透明类型。

```c
struct logger;

struct logger *logger_create(const char *path);
void logger_destroy(struct logger *log);
int logger_write(struct logger *log, const char *message);
```

调用方不能直接访问内部字段，模块就有空间调整实现。

## 资源成对管理

创建和销毁函数要成对出现，命名保持一致。这样调用方一眼能看出资源生命周期。

```txt
init/deinit
create/destroy
open/close
alloc/free
```

不要让调用方猜一个对象应该用 `free`、`close` 还是自定义函数释放。

## 错误处理

C 语言没有异常，接口必须明确错误返回。常见方式是返回 `0` 表示成功，负数或非零表示错误。

更重要的是：失败时资源状态要可预测。函数要么完全成功，要么保持原状态，不能留下半初始化对象。

## 减少全局状态

全局变量会让测试、并发和复用都变困难。能通过上下文对象传递的状态，就尽量放进上下文对象。

## 小结

C 模块接口的目标是降低调用方心智负担。接口越稳定、语义越明确，后续维护成本越低。
