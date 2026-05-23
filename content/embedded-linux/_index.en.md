+++
title = "Embedded Linux"
description = "Boot flow, driver debugging, system build, cross-compilation, and board-level practice."

[menu.main]
  name = "嵌入式 Linux | Embedded Linux"
  weight = 20

  [menu.main.params]
    icon = "cpu"

[[subtopics]]
id = "boot-system"
title = "Boot & System Build"
description = "Boot ROM, U-Boot, Kernel, rootfs, cross-compilation, and image building."
url = "/embedded-linux/boot-system/"

[[subtopics]]
id = "drivers-dts"
title = "Drivers & Device Tree"
description = "Device tree, driver probe, pinctrl, clock, reset, interrupts, and peripheral bring-up."
url = "/embedded-linux/drivers-dts/"

[[subtopics]]
id = "debug-performance"
title = "Debugging & Performance"
description = "Serial logs, kernel panic, boot time, system resources, and on-site troubleshooting."
url = "/embedded-linux/debug-performance/"
+++

Organizing Embedded Linux content, covering the full chain from chip power-on to application runtime: Bootloader, Kernel, Device Tree, drivers, rootfs, cross-compilation, system trimming, and field debugging.

The goal isn't command dumping — it's writing down the problem context, diagnostic approach, key evidence, and review conclusions clearly.
