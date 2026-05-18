+++
title = "嵌入式 Linux 启动流程速记"
date = 2026-05-18T10:00:00+08:00
draft = false
description = "从上电、Boot ROM、U-Boot、Kernel 到根文件系统，梳理嵌入式 Linux 的启动主线。"
tags = ["Embedded Linux", "U-Boot", "Kernel", "启动流程"]
categories = ["嵌入式 Linux"]
series = ["嵌入式 Linux 基础"]
slug = "linux-boot-flow"
aliases = ["/embedded-linux/linux-boot-flow/"]
toc = true
+++

## 启动主线

嵌入式 Linux 的启动过程可以先抓住一条主线：硬件上电后，Boot ROM 找到第一阶段启动程序，随后加载 U-Boot，再由 U-Boot 加载 Linux Kernel、设备树和根文件系统。

完整路径通常是：

```txt
Power On -> Boot ROM -> SPL/TPL -> U-Boot -> Kernel -> init -> user space
```

不同芯片的细节会变化，但定位问题时先把当前卡在哪一段确认清楚，排查效率会高很多。

## Boot ROM

Boot ROM 是芯片内部固化代码，负责根据启动引脚或熔丝配置选择启动介质，例如 eMMC、SD 卡、SPI NOR、NAND 或 USB 下载模式。

这一阶段常见问题包括启动介质不可读、镜像偏移不对、签名校验失败、供电和时钟没有满足芯片要求。

## U-Boot

U-Boot 负责初始化更多硬件，并准备 Kernel 运行环境。常见动作包括初始化 DRAM、加载镜像、传递启动参数、加载设备树和设置 `bootargs`。

调试时优先确认：

- 串口是否有输出
- DRAM 大小是否识别正确
- Kernel、DTB、rootfs 地址是否正确
- `bootcmd` 和 `bootargs` 是否符合当前启动介质

## Kernel

Kernel 接管后会解压、初始化内核子系统、解析设备树、挂载根文件系统并启动第一个用户态进程。

如果 Kernel 已经打印日志但最终 panic，重点看 panic 前的最后几行。根文件系统挂载失败时，常见原因是驱动缺失、设备节点不匹配、文件系统类型不支持或 `root=` 参数错误。

## 小结

启动问题不要一开始就陷入全部日志。先判断卡在 Boot ROM、U-Boot、Kernel 还是用户态，再按阶段收集证据，问题会清楚很多。
