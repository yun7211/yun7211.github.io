+++
title = "根文件系统构建笔记"
date = 2026-05-18T10:20:00+08:00
draft = false
description = "记录根文件系统构建时需要关注的 BusyBox、init、设备节点、动态库和挂载项。"
tags = ["RootFS", "BusyBox", "Buildroot", "系统构建"]
categories = ["嵌入式 Linux"]
series = ["嵌入式 Linux 基础"]
slug = "rootfs-build-notes"
aliases = ["/embedded-linux/rootfs-build-notes/"]
toc = true
+++

## 根文件系统承担什么

Kernel 启动后需要挂载根文件系统，并运行第一个用户态进程。根文件系统里至少要有基础目录、初始化程序、命令工具、动态库、配置文件和设备节点。

最小系统常见目录包括：

```txt
/bin
/sbin
/etc
/lib
/dev
/proc
/sys
/tmp
/var
```

## init

Kernel 默认会尝试运行 `/sbin/init`、`/etc/init`、`/bin/init` 或 `/bin/sh`。如果这些路径都不存在，系统会 panic。

调试时可以临时在 `bootargs` 里指定：

```txt
init=/bin/sh
```

这样能绕过复杂启动脚本，先确认根文件系统能否进入用户态。

## 动态库

如果应用或 BusyBox 是动态链接，需要把对应 C 运行库和动态加载器放进根文件系统。缺库时，常见现象是文件明明存在，却提示 `not found`。

可以用交叉工具链的 `readelf` 或 `ldd` 替代方案检查依赖。

## 虚拟文件系统

启动脚本通常需要挂载：

```sh
mount -t proc proc /proc
mount -t sysfs sysfs /sys
mount -t devtmpfs devtmpfs /dev
```

缺少这些挂载会影响进程信息、设备节点和驱动状态查看。

## 小结

根文件系统问题要从两个角度看：Kernel 是否成功挂载它，用户态程序是否能在里面正常运行。先确认最小 shell 可用，再逐步恢复完整启动脚本。
