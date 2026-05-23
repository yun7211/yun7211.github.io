+++
title = "嵌入式 Linux"
description = "记录嵌入式 Linux 的启动流程、驱动调试、系统构建、交叉编译和板级实践。"

[menu.main]
  name = "嵌入式 Linux | Embedded Linux"
  weight = 20

  [menu.main.params]
    icon = "cpu"

[[subtopics]]
id = "boot-system"
title = "启动与系统构建"
description = "Boot ROM、U-Boot、Kernel、根文件系统、交叉编译和镜像构建。"
url = "/embedded-linux/boot-system/"

[[subtopics]]
id = "drivers-dts"
title = "驱动与设备树"
description = "设备树、驱动 probe、pinctrl、clock、reset、中断和外设 bring-up。"
url = "/embedded-linux/drivers-dts/"

[[subtopics]]
id = "debug-performance"
title = "调试与性能"
description = "串口日志、内核 panic、启动耗时、系统资源和现场问题定位。"
url = "/embedded-linux/debug-performance/"
+++

这里整理嵌入式 Linux 相关内容，关注从芯片上电到应用运行之间的完整链路：Bootloader、Kernel、设备树、驱动、根文件系统、交叉编译、系统裁剪和现场调试。

目标不是堆命令，而是把问题背景、定位思路、关键证据和复盘结论写清楚。
