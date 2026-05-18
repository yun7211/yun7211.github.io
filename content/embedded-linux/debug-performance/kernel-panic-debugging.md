+++
title = "Kernel panic 排查记录模板"
date = 2026-05-18T11:30:00+08:00
draft = false
description = "整理嵌入式 Linux 中 Kernel panic 的信息采集、定位路径和复盘模板。"
tags = ["Kernel", "panic", "调试", "嵌入式 Linux"]
categories = ["嵌入式 Linux"]
series = ["嵌入式 Linux 调试"]
slug = "kernel-panic-debugging"
toc = true
+++

## 先保留现场

Kernel panic 出现时，第一件事不是立刻改代码，而是把现场保存下来。串口完整日志、内核版本、设备树版本、启动参数、复现步骤和最近改动都应该保留。

最小记录清单：

- panic 完整日志
- `bootargs`
- Kernel commit 或版本号
- DTB 来源
- 根文件系统版本
- 外设连接状态

## 看最后一个有效栈

panic 日志里最有价值的是调用栈和触发点。先找到 `Call trace`，再判断是空指针、非法地址、BUG_ON、oops 还是 watchdog。

如果地址已经符号化，可以直接看函数名；如果没有符号，需要保留未裁剪的 `vmlinux`，配合 `addr2line` 定位源码行。

## 区分必现和偶现

必现问题优先缩小配置和输入。偶现问题要关注并发、时序、内存越界、栈溢出和硬件状态。

对于偶现问题，日志要尽量包含时间戳，并在关键路径加轻量日志，避免日志本身改变时序太多。

## 复盘问题来源

定位后还要记录根因类型：

- 设备树配置错误
- 驱动资源申请失败后清理不完整
- 中断上下文误用阻塞接口
- DMA buffer 或 cache 同步问题
- 用户态输入触发内核边界缺陷

## 小结

Kernel panic 排查的关键是保留证据、定位栈、区分复现类型，再把根因沉淀成可检查的清单。

