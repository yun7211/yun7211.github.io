+++
title = "设备树调试的几个检查点"
date = 2026-05-18T10:10:00+08:00
draft = false
description = "整理设备树调试时最常见的检查点：compatible、reg、interrupt、pinctrl、clock 和 status。"
tags = ["Device Tree", "驱动调试", "Kernel"]
categories = ["嵌入式 Linux"]
series = ["嵌入式 Linux 基础"]
slug = "device-tree-debugging"
aliases = ["/embedded-linux/device-tree-debugging/"]
toc = true
+++

## 为什么设备树容易出问题

设备树描述硬件，但它本身不会证明硬件真的可用。一个节点看起来完整，也可能因为地址、时钟、中断、复位或引脚复用配置错误而导致驱动 probe 失败。

调试设备树时，可以先围绕几个高频字段检查。

## compatible

`compatible` 决定设备节点能否匹配到驱动。驱动侧通常通过 `of_device_id` 表匹配字符串。

如果驱动没有 probe，先检查：

- 字符串是否拼写一致
- 驱动是否编进内核或模块已加载
- 节点 `status` 是否为 `okay`

## reg 和 ranges

`reg` 描述寄存器地址和长度。地址单元数量受父节点的 `#address-cells` 和 `#size-cells` 影响。

如果寄存器读写异常，要确认物理地址、长度和父总线地址映射是否正确。

## pinctrl、clock 和 reset

很多外设 probe 成功但不能工作，问题往往在 pinctrl、clock 或 reset。

常见检查项：

- 引脚复用是否切到外设功能
- 上拉、下拉、驱动能力是否符合硬件
- 时钟是否被正确打开
- reset 是否释放

## interrupt

中断问题通常表现为驱动正常加载，但事件没有响应。需要确认中断号、触发方式和中断控制器引用是否正确。

## 小结

设备树调试要同时看 DTS、驱动匹配表、内核日志和硬件原理图。只看一个文件很容易误判。
