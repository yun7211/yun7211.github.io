+++
title = "C 语言"
description = "记录 C 语言的指针、内存、接口设计、模块化、调试和工程实践。"

[menu.main]
  name = "C 语言 | C Language"
  weight = 30

  [menu.main.params]
    icon = "code"

[[subtopics]]
id = "pointer-memory"
title = "指针与内存"
description = "所有权、生命周期、缓冲区边界、动态分配和资源释放。"
url = "/c-language/pointer-memory/"

[[subtopics]]
id = "module-interface"
title = "模块与接口"
description = "头文件边界、不透明结构体、错误码、上下文对象和模块解耦。"
url = "/c-language/module-interface/"

[[subtopics]]
id = "debug-quality"
title = "调试与质量"
description = "内存问题排查、日志设计、断言、单元测试和代码审查清单。"
url = "/c-language/debug-quality/"
+++

这里整理 C 语言相关内容，重点不是语法背诵，而是工程里的可维护代码：边界清晰的接口、可读的数据结构、可诊断的错误处理，以及对内存生命周期的稳定掌控。
