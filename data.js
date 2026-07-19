// Kernel — content store
// To add a new subtopic: add a new key here (e.g. "1.2.1") following the same shape.
// notes: array of {heading, points: [...]}
// flashcards: array of {front, back}
// questions: array of {q, options: [4 strings], correct: index, explain}

window.KERNEL_DATA = {

  "1.1.1": {
    title: "Structure and function of the processor",
    section: "1.1 Characteristics of contemporary processors",
    notes: [
      {
        heading: "Von Neumann architecture",
        points: [
          "Instructions and data share the same memory and the same bus system.",
          "The CPU can only fetch one instruction or one piece of data at a time — this is known as the Von Neumann bottleneck.",
          "Core components: CPU, main memory (RAM), and the bus system connecting them."
        ]
      },
      {
        heading: "Key registers",
        points: [
          "PC (Program Counter) — holds the address of the next instruction to fetch.",
          "MAR (Memory Address Register) — holds the address currently being read from or written to.",
          "MDR (Memory Data Register) — holds the data being transferred to or from memory.",
          "CIR (Current Instruction Register) — holds the instruction currently being decoded/executed.",
          "ACC (Accumulator) — holds the result of arithmetic/logic operations."
        ]
      },
      {
        heading: "The fetch-decode-execute cycle",
        points: [
          "Fetch: the address in the PC is copied to the MAR, the instruction at that address is copied into the MDR then the CIR, and the PC is incremented.",
          "Decode: the control unit interprets the instruction in the CIR.",
          "Execute: the instruction is carried out — this may involve the ALU, registers, or memory."
        ]
      },
      {
        heading: "Buses",
        points: [
          "Address bus — unidirectional, carries memory addresses from the CPU to memory.",
          "Data bus — bidirectional, carries actual data or instructions.",
          "Control bus — carries control signals such as read/write and clock timing."
        ]
      },
      {
        heading: "Factors affecting performance",
        points: [
          "Clock speed — more cycles per second generally means more instructions processed per second.",
          "Number of cores — allows genuinely parallel execution, but not all software can use extra cores.",
          "Cache size — larger cache reduces how often the CPU has to wait on slower main memory.",
          "Pipelining — overlaps the fetch, decode and execute stages of successive instructions to improve throughput."
        ]
      }
    ],
    flashcards: [
      { front: "PC", back: "Program Counter — holds the address of the next instruction to be fetched." },
      { front: "MAR", back: "Memory Address Register — holds the address currently being accessed in memory." },
      { front: "MDR", back: "Memory Data Register — holds data being read from or written to memory." },
      { front: "CIR", back: "Current Instruction Register — holds the instruction currently being decoded or executed." },
      { front: "Von Neumann bottleneck", back: "The limit on speed caused by instructions and data sharing one bus, allowing only one to be fetched at a time." },
      { front: "Pipelining", back: "Overlapping the fetch, decode and execute stages of multiple instructions to increase throughput." },
      { front: "Address bus", back: "Unidirectional bus carrying memory addresses from the CPU to memory." },
      { front: "Clock speed", back: "The number of fetch-execute cycles a CPU can perform per second, measured in Hz." }
    ],
    questions: [
      { q: "In the Von Neumann architecture, what does the Program Counter (PC) hold during the fetch stage?", options: ["The instruction currently being executed","The address of the next instruction to be fetched","The result of the last calculation","The address of a data operand"], correct: 1, explain: "The PC holds the memory address of the next instruction, not the instruction itself. It's incremented automatically after each fetch (unless a jump or branch changes it)." },
      { q: "Which register temporarily holds a value that has just been fetched from memory, before it is decoded?", options: ["MAR","MDR","CIR","ACC"], correct: 1, explain: "The Memory Data Register (MDR) holds data being transferred to or from memory. The Memory Address Register (MAR) holds where that data is located, and the CIR holds the instruction once decoded." },
      { q: "What does the address bus carry?", options: ["Data values between the CPU and memory","Control signals such as read/write","The memory location that a value should be read from or written to","The system clock signal"], correct: 2, explain: "The address bus is unidirectional and carries only memory locations, sent from the CPU to memory. Data itself travels on the (bidirectional) data bus." },
      { q: "A CPU's clock speed rises from 3.0GHz to 3.6GHz with no other changes. What's the most likely effect on performance?", options: ["Performance falls, because more heat is generated","Performance rises, because more fetch-execute cycles occur per second","Performance is unaffected, since cache size hasn't changed","Performance only rises if word length also increases"], correct: 1, explain: "More clock cycles per second generally means more instructions processed per second. In practice heat and power draw do rise too, which is why clock speed alone isn't pushed indefinitely — but for this question, other factors are held constant." },
      { q: "What problem does pipelining mainly aim to solve?", options: ["Reducing the number of registers the CPU needs","Increasing instruction throughput by overlapping fetch, decode and execute stages","Reducing the width of the data bus","Preventing cache misses"], correct: 1, explain: "Pipelining lets the fetch, decode and execute stages of different instructions happen at the same time, so more instructions complete per second — though a branch can force the pipeline to be flushed and restarted." }
    ]
  },

  "1.1.2": {
    title: "Types of processor",
    section: "1.1 Characteristics of contemporary processors",
    notes: [
      {
        heading: "CISC vs RISC",
        points: [
          "CISC (Complex Instruction Set Computer) — fewer, more complex instructions, often taking multiple clock cycles each, relying heavily on microcode.",
          "RISC (Reduced Instruction Set Computer) — a small set of simple instructions, each usually completing in one clock cycle, relying more on the compiler and more general-purpose registers."
        ]
      },
      {
        heading: "Multicore and parallel processing",
        points: [
          "A multicore processor has several independent cores on one chip, each able to execute instructions.",
          "Performance gains depend on how much of a task can actually run in parallel — sequential portions limit the speed-up (related to Amdahl's Law).",
          "Symmetric multiprocessing (SMP) uses identical processors sharing the same memory under one operating system."
        ]
      },
      {
        heading: "GPUs",
        points: [
          "GPUs contain very large numbers of simple cores designed to apply the same operation to many data points at once (a SIMD-style approach).",
          "This makes them well suited to graphics rendering and to data-parallel workloads like training neural networks, but poorly suited to tasks that are mostly sequential."
        ]
      }
    ],
    flashcards: [
      { front: "RISC", back: "Reduced Instruction Set Computer — small set of simple instructions, usually one clock cycle each." },
      { front: "CISC", back: "Complex Instruction Set Computer — fewer, more complex instructions, often multiple cycles each, uses microcode." },
      { front: "SMP", back: "Symmetric multiprocessing — identical processors sharing the same memory under one operating system." },
      { front: "Why GPUs suit parallel tasks", back: "They have many simple cores that apply the same instruction to lots of data simultaneously (SIMD-style)." },
      { front: "Amdahl's Law (concept)", back: "The speed-up from parallelising a task is limited by the portion of the task that must remain sequential." }
    ],
    questions: [
      { q: "Which best describes a key difference between CISC and RISC processors?", options: ["RISC processors use a smaller set of simpler instructions that each execute in fewer clock cycles","CISC processors always run faster than RISC processors","RISC processors cannot use pipelining","CISC processors have no microcode"], correct: 0, explain: "RISC (Reduced Instruction Set Computer) favours a small set of simple, fast instructions and relies more on the compiler, while CISC packs more complex operations into single instructions using microcode." },
      { q: "Why might adding more cores to a processor not double its performance?", options: ["Cores cannot share a clock signal","Cores share memory bandwidth, and not every task can be split into independent parallel parts","Multicore processors cannot use cache","Only RISC processors can be multicore"], correct: 1, explain: "Extra cores compete for the same memory bus, and any part of a task that must run sequentially limits how much speed-up is possible — this is often summarised by Amdahl's Law." },
      { q: "What makes a GPU well suited to tasks like graphics rendering or training neural networks?", options: ["It has a single very fast core","It contains many simpler cores that can apply the same operation to lots of data at once","It uses a larger word length than any CPU","It removes the need for RAM"], correct: 1, explain: "GPUs use large numbers of simple cores running the same instruction across many data points in parallel (a SIMD-style approach), which suits tasks like pixel shading or matrix maths." },
      { q: "In symmetric multiprocessing (SMP), what's true of the processors involved?", options: ["Each processor runs a separate operating system","All processors are identical and share access to the same main memory","One processor always acts as a controller for the rest","Only one processor may access memory at a time"], correct: 1, explain: "SMP systems use identical processors under a single operating system, all sharing the same memory space — as opposed to asymmetric setups where roles differ." }
    ]
  },

  "1.1.3": {
    title: "Input, output and storage",
    section: "1.1 Characteristics of contemporary processors",
    notes: [
      {
        heading: "Magnetic vs optical vs solid-state storage",
        points: [
          "Magnetic storage (e.g. hard disks) uses a spinning platter and a moving read/write head — cheap per gigabyte but slower and more fragile due to moving parts.",
          "Optical storage (CD/DVD/Blu-ray) uses a laser to detect reflectivity differences between pits and lands on the disc surface.",
          "Solid-state storage (SSDs) has no moving parts, giving faster access and better durability, at a higher cost per gigabyte and a finite number of write cycles."
        ]
      },
      {
        heading: "Device drivers",
        points: [
          "A driver translates general operating system or application instructions into the specific signals a piece of hardware understands.",
          "This means the OS doesn't need built-in knowledge of every possible device model."
        ]
      },
      {
        heading: "Virtual storage",
        points: [
          "Virtual memory lets a computer run programs larger than physical RAM by using disk space as an extension of memory (paging).",
          "It trades some speed for the ability to run more or larger programs than RAM alone would allow."
        ]
      },
      {
        heading: "RAID",
        points: [
          "RAID combines multiple physical drives to improve performance, fault tolerance, or both, depending on the RAID level used.",
          "Some RAID levels duplicate data for redundancy; others split data across drives to increase speed."
        ]
      }
    ],
    flashcards: [
      { front: "SSD advantage", back: "No moving parts — faster access times and better durability than magnetic storage." },
      { front: "How optical discs are read", back: "A laser detects differences in reflectivity between pits and lands on the disc surface." },
      { front: "Device driver", back: "Software that translates general OS instructions into signals a specific piece of hardware understands." },
      { front: "Virtual memory", back: "Uses disk space as extra RAM (via paging) so programs larger than physical memory can run." },
      { front: "RAID", back: "Combines multiple physical drives for improved performance and/or fault tolerance." },
      { front: "ROM", back: "Non-volatile memory that typically stores the bootstrap/startup instructions." }
    ],
    questions: [
      { q: "What's the main advantage of solid-state storage over magnetic storage?", options: ["It's always cheaper per gigabyte","It has no moving parts, giving faster access times and better durability","It has unlimited write cycles","It needs no error correction"], correct: 1, explain: "SSDs store data electronically with no mechanical read/write head, so access is faster and they're more shock-resistant — though flash memory does have a finite number of write cycles." },
      { q: "What's the role of a device driver?", options: ["It physically powers a peripheral device","It translates general OS/application instructions into signals the specific device understands","It stores data permanently for a device","It increases a device's clock speed"], correct: 1, explain: "A driver acts as a translator between the general-purpose operating system and the specific hardware, so the OS doesn't need to know the details of every device model." },
      { q: "How does an optical disc read data?", options: ["A read head detects changes in magnetic polarity","A laser detects differences in reflectivity on the disc surface","Electrical charge is read from a floating gate","Physical grooves are read mechanically, like vinyl"], correct: 1, explain: "CDs, DVDs and Blu-rays use a laser to detect the reflectivity difference between pits and lands (flat areas) on the disc surface, which encodes binary data." },
      { q: "What is virtual storage (virtual memory) primarily used for?", options: ["Storing data permanently when the power is off","Letting a computer run programs larger than physical RAM by using disk space as extra memory","Increasing processor clock speed","Automatically backing up files to the cloud"], correct: 1, explain: "Virtual memory extends apparent RAM by paging data between RAM and secondary storage, letting programs run that wouldn't otherwise fit — at the cost of speed compared to real RAM." },
      { q: "Why might a system use a RAID configuration across multiple drives?", options: ["To reduce total capacity in exchange for better looks","To combine multiple physical drives for improved performance and/or fault tolerance","To convert magnetic storage into optical storage","To remove the need for a device driver"], correct: 1, explain: "RAID spreads or duplicates data across several drives. Depending on the RAID level chosen, this can boost read/write speed, add redundancy against drive failure, or trade off some usable capacity for both." },
      { q: "Which statement about ROM is correct?", options: ["It's volatile and loses its contents when powered off","It typically stores the bootstrap/startup instructions and is non-volatile","It can be freely rewritten by any application","It has faster access speed than CPU registers"], correct: 1, explain: "ROM holds firmware such as the bootstrap loader and keeps its contents without power. It's not meant to be rewritten during normal operation, unlike RAM." }
    ]
  },

  "1.2.1": {
    title: "Systems software",
    section: "1.2 Software and software development",
    notes: [
      {
        heading: "Operating system functions",
        points: [
          "Memory management — allocating RAM to running processes and reclaiming it when they finish.",
          "Peripheral/hardware management — coordinating input, output and storage devices, often via device drivers.",
          "Interrupt handling — responding to signals from hardware or software that need urgent attention.",
          "Providing a user interface, managing multitasking/scheduling, providing security (user accounts, permissions), and providing a platform for other software to run on."
        ]
      },
      {
        heading: "Paging and segmentation",
        points: [
          "Paging splits a process into fixed-length pages. When RAM is full, unused pages are moved out to a reserved area of disk called virtual memory, freeing space for the pages currently needed.",
          "Segmentation is an alternative that divides memory into variable-sized segments, sized according to how much data each part actually needs.",
          "Virtual memory lets more (or larger) programs run than would fit in physical RAM alone, at the cost of speed when pages have to be swapped in and out."
        ]
      },
      {
        heading: "Interrupts and scheduling",
        points: [
          "An interrupt signals the CPU that something needs urgent attention. The current task's register contents are saved to a stack, and the PC is pointed to the interrupt service routine (ISR); once the ISR finishes, the stack is popped and the original task resumes.",
          "If more than one interrupt is waiting, the one with the highest priority is handled first.",
          "Scheduling decides which task runs next. Round robin gives each process a fixed time slice; first come first served runs processes in arrival order; shortest job first (and shortest remaining time) prioritise short tasks; multi-level feedback queues give more processor time to higher-priority queues."
        ]
      },
      {
        heading: "Types of operating system",
        points: [
          "Multi-tasking — runs several processes seemingly at once by rapidly switching between them.",
          "Multi-user — allows several users to log in and run programs on the same central machine at the same time, each with their own display/keyboard.",
          "Distributed — spreads a task across multiple networked computers so it completes faster.",
          "Real-time — guarantees a response within a fixed time frame; used where delay could be dangerous, e.g. aircraft or reactor control.",
          "Embedded — a stripped-down OS built into a device with limited hardware resources, e.g. a washing machine controller."
        ]
      },
      {
        heading: "BIOS, device drivers and virtual machines",
        points: [
          "The BIOS runs first when a computer starts, checking hardware is present and working before handing control to the operating system.",
          "A device driver translates general operating system or application instructions into the specific signals a particular piece of hardware understands, so the OS doesn't need built-in knowledge of every device.",
          "A virtual machine emulates a computer system, allowing one operating system (or program requiring one) to run inside another — useful for testing software across different platforms and for sandboxing, though it uses up the host's RAM/storage and can't perfectly replicate real hardware."
        ]
      }
    ],
    flashcards: [
      { front: "Paging", back: "Splitting a process into fixed-length pages, some of which can be swapped out to virtual memory on disk when RAM is full." },
      { front: "Segmentation", back: "Dividing memory into variable-sized blocks, sized according to how much data each part needs." },
      { front: "Real-time operating system", back: "Guarantees a response within a fixed time frame — used in safety-critical control systems like aircraft or reactor control." },
      { front: "Distributed operating system", back: "Coordinates multiple networked computers so they can work together on a single task." },
      { front: "Device driver", back: "Software that translates general OS instructions into the specific signals a piece of hardware understands." },
      { front: "Virtual machine", back: "Software that emulates a computer system, letting one OS or program run inside another." },
      { front: "Interrupt service routine (ISR)", back: "The code that runs to handle an interrupt once the CPU has saved the current task's state to a stack." }
    ],
    questions: [
      { q: "An operating system uses paging for memory management. What does this involve?", options: ["Dividing memory into variable-sized blocks based on how much data each part needs", "Splitting processes into fixed-length pages, moving unused ones out to virtual memory on disk when RAM is full", "Running every process in its own separate physical memory chip", "Compressing all data in RAM to save space"], correct: 1, explain: "Paging divides a process into fixed-length pages. When RAM fills up, pages not currently needed are moved to a reserved area of disk (virtual memory) so other pages can be loaded in." },
      { q: "When a high-priority interrupt occurs during the fetch-decode-execute cycle, what happens first?", options: ["The interrupt is ignored until the next program runs", "The contents of the current task's registers are saved to a stack, and the PC is pointed to the interrupt service routine", "The CPU immediately restarts from address zero", "The operating system is reinstalled"], correct: 1, explain: "The CPU checks for interrupts at the start of each fetch-decode-execute cycle. If one needs handling, the current task's state is pushed onto a stack so it can be resumed later, and control passes to the interrupt service routine." },
      { q: "A round robin scheduling algorithm is used on a busy server. What's its main characteristic?", options: ["Every process is given the exact same fixed time slice before moving to the back of the queue", "Only the shortest job is ever run", "Processes are only run in the order they were created and never interrupted", "Higher priority tasks always run to completion before any other task starts"], correct: 0, explain: "Round robin gives each process a fixed amount of CPU time; if it isn't finished it re-joins the back of the queue. This is fair, but doesn't account for how urgent a task actually is — unlike a multi-level feedback queue." },
      { q: "A nuclear power station needs a computer system to control its reactor control rods. Which type of operating system is most appropriate, and why?", options: ["A multi-user OS, because many staff need to log in at once", "A real-time OS, because it guarantees a response within a fixed time frame, which matters if the reactor needs an urgent shutdown", "An embedded OS, because reactors have very little processing power available", "A distributed OS, because the task needs to be spread across many computers"], correct: 1, explain: "Real-time operating systems guarantee that critical tasks are completed within a strict time limit — essential where a delayed response (like a reactor emergency shutdown) could be dangerous." },
      { q: "What's the role of a device driver when a new printer is connected to a computer?", options: ["It permanently increases the computer's clock speed", "It allows the operating system and other software to communicate with the specific hardware", "It stores print jobs permanently even after the printer is disconnected", "It replaces the need for an operating system"], correct: 1, explain: "A device driver acts as a translator between the general-purpose operating system and a specific piece of hardware, so the OS doesn't need built-in knowledge of every possible printer model." },
      { q: "A developer wants to test their game on several different operating systems using virtual machines on one physical computer. What's a genuine disadvantage of this approach?", options: ["Virtual machines cannot run any software at all", "The simulated hardware may not be an exact replication of real hardware, so some bugs might not be caught, and host resources like RAM are shared out to each VM", "Virtual machines make it impossible to change settings like RAM allocation", "Using a virtual machine will always corrupt the host operating system"], correct: 1, explain: "VMs are convenient for testing across operating systems and can be reset easily, but they compete with the host for RAM/storage, and imperfect hardware emulation means some real-hardware bugs might not surface during testing." }
    ]
  },

  "1.2.2": {
    title: "Applications generation",
    section: "1.2 Software and software development",
    notes: [
      {
        heading: "Translators: assemblers, compilers, interpreters",
        points: [
          "A translator converts source code into another language, usually machine code, so a computer can run it.",
          "An assembler converts assembly language into machine code with a one-to-one relationship between each assembly instruction and the machine code generated.",
          "A compiler translates high-level source code into machine code all at once, ahead of time, producing an executable that can run without the original source code being present.",
          "An interpreter translates and executes a high-level program one line at a time, stopping immediately if it hits an error — this makes it well suited to cross-platform code like JavaScript, but slower than compiled code."
        ]
      },
      {
        heading: "Stages of compilation",
        points: [
          "Lexical analysis — removes whitespace/comments, converts the code into tokens, and builds a symbol table of identifiers.",
          "Syntax analysis — checks tokens against the language's grammar rules (reporting syntax errors) and builds an abstract syntax tree (AST).",
          "Code generation — converts the syntax tree into machine code, applying optimisations for speed or size.",
          "Linking and loading — a linker combines the program's object code with any library code it references into one executable file; a loader then loads the program and libraries into memory to run."
        ]
      },
      {
        heading: "Utility software and application software",
        points: [
          "Utility software helps maintain a computer, e.g. defragmentation software (rearranges fragmented files into contiguous blocks to speed up access), disk clean-up, file management, and anti-virus software (compares files against known virus signatures).",
          "Application software lets a user carry out a specific task, e.g. word processors, database software, or a web browser."
        ]
      },
      {
        heading: "Open source vs closed source",
        points: [
          "Open source software is distributed with its source code, usually free, and can be modified — but support is often an extra cost, and protecting intellectual property is harder.",
          "Closed source software keeps its source code confidential and is usually paid for, protecting the developer's intellectual property, but the software cannot legally be altered by users."
        ]
      }
    ],
    flashcards: [
      { front: "Compiler", back: "Translates the whole of a high-level program into machine code ahead of time, producing an executable that runs without the source code." },
      { front: "Interpreter", back: "Translates and runs a high-level program one line at a time; stops immediately on hitting an error." },
      { front: "Assembler", back: "Converts assembly language into machine code, with each instruction mapping one-to-one onto a machine code instruction." },
      { front: "Lexical analysis", back: "The first stage of compilation — removes comments/whitespace, creates tokens, and builds a symbol table." },
      { front: "Linker", back: "Combines a program's object code with any referenced library code into a single executable file." },
      { front: "Defragmentation software", back: "A utility that rearranges a fragmented file's data into one contiguous block to speed up read times." },
      { front: "Open source software", back: "Software distributed with its source code, usually free to use and modify, but typically without paid support." }
    ],
    questions: [
      { q: "A device driver is written in assembly language. Which type of translator is needed to convert it into a form the public can run?", options: ["An interpreter", "An assembler", "A compiler for a high-level language", "A linker"], correct: 1, explain: "Assembly language is translated into machine code by an assembler, which maps each assembly instruction directly onto a machine code instruction." },
      { q: "Why might a compiled game run faster than the equivalent interpreted code?", options: ["Compiled code is translated into machine code once, ahead of time, whereas interpreted code is translated line by line every time it runs", "Interpreters always use less memory than compilers", "Compilers cannot produce errors", "Interpreted languages don't use variables"], correct: 0, explain: "Compilation happens once, before the program runs, producing machine code that executes directly. An interpreter re-translates each line every time the program runs, which adds overhead." },
      { q: "During lexical analysis, what does a compiler typically do?", options: ["It converts the abstract syntax tree into optimised machine code", "It removes comments and whitespace, converts the code into tokens, and builds a symbol table of identifiers", "It links the program to external library code", "It loads the finished executable into memory"], correct: 1, explain: "Lexical analysis is the first stage of compilation: unnecessary characters are stripped out, meaningful chunks of code become tokens, and a symbol table tracks identifiers such as variable and subroutine names." },
      { q: "What's the role of a linker when creating an executable file?", options: ["It checks the code's syntax against the rules of the language", "It combines a program's object code with any library code it references, producing a single runnable executable", "It converts machine code back into source code", "It removes bugs from a program automatically"], correct: 1, explain: "If a program's source code references external libraries, the linker combines the compiled object code with that library code (and loader code) to create one complete executable file." },
      { q: "A company chooses to use an open-source operating system for a new research project. What's a genuine benefit of this choice?", options: ["They must always pay a licence fee per device", "They can view and modify the source code to suit their needs, generally without a licence cost", "The source code is guaranteed to be bug-free", "Nobody else can see how the software works"], correct: 1, explain: "Open-source software is distributed with its source code and is usually free to use, so an organisation can inspect and adapt it — though ongoing support usually costs extra and intellectual property is less protected." },
      { q: "A hard disk has become fragmented after many files were added and deleted. What does defragmentation software do to help?", options: ["It permanently deletes old files to free up space", "It rearranges each file's data into one contiguous block, reducing the read/write head's movement and improving read speed", "It compresses every file on the disk", "It converts the disk from magnetic to solid-state storage"], correct: 1, explain: "When files are scattered across non-contiguous free space, a magnetic drive's head has to move more to read them. Defragmentation groups each file's data together, improving performance." }
    ]
  },

  "1.2.3": {
    title: "Software development",
    section: "1.2 Software and software development",
    notes: [
      {
        heading: "Waterfall lifecycle model",
        points: [
          "A sequence of stages — analysis, design, implementation, testing, installation, evaluation, maintenance — where each stage must be completed before the next begins.",
          "Well suited to large, well-understood projects where requirements aren't expected to change; identifies design issues early.",
          "Poorly suited when requirements change, since revisiting an earlier stage once later stages are underway is difficult and costly."
        ]
      },
      {
        heading: "Rapid Application Development (RAD)",
        points: [
          "A prototype is built quickly, evaluated with the client, and improved through repeated iterations until the final prototype becomes the finished product.",
          "Encourages close collaboration between client and developers, making it more likely the software meets their real needs.",
          "Less suited to large projects — requirements can keep shifting, and the overall design may end up poorly planned."
        ]
      },
      {
        heading: "Spiral model",
        points: [
          "Similar to RAD in that a prototype is evaluated and refined, but each pass round the 'spiral' also includes explicit risk analysis before the next iteration is planned.",
          "Suits projects with constantly changing requirements or evolving feature sets, but makes it hard to give a client a fixed cost or timescale."
        ]
      },
      {
        heading: "Extreme programming (XP / agile)",
        points: [
          "An agile methodology that embraces changing requirements through short, reviewed development iterations.",
          "Uses pair programming (two developers working together at one workstation) to help produce high-quality, well-tested code.",
          "Requires a client representative to work closely with the development team throughout, so needs may drift without strong upfront planning."
        ]
      }
    ],
    flashcards: [
      { front: "Waterfall model", back: "Sequential stages (analysis, design, implementation, testing, installation, evaluation, maintenance), each completed before the next starts." },
      { front: "Rapid Application Development", back: "Quickly builds and evaluates a prototype through repeated iterations until it becomes the final product." },
      { front: "Spiral model", back: "Iterative prototyping combined with explicit risk analysis at each pass, spiralling towards a final solution." },
      { front: "Extreme programming (XP)", back: "An agile methodology using pair programming and short, reviewed iterations to handle changing requirements." },
      { front: "Pair programming", back: "Two developers work together at one workstation, which tends to produce higher-quality code." }
    ],
    questions: [
      { q: "A team is building software with clear, fixed requirements for a large organisation and wants design issues caught early. Which methodology best fits this scenario?", options: ["Waterfall lifecycle model", "Extreme programming", "Rapid Application Development", "None of these are ever suitable for large projects"], correct: 0, explain: "Waterfall suits large-scale, well-understood projects since each stage — including design — is completed and checked before moving on, though it copes badly with changing requirements." },
      { q: "A restaurant chain wants regular hands-on feedback while its ordering system is built, and is happy for the design to evolve. Which methodology is most appropriate, and why?", options: ["Waterfall, because it never requires the client to be involved", "Rapid Application Development, because prototypes are built quickly and refined with client feedback at every iteration", "Extreme programming, because it doesn't need a client representative", "None — all software must use spiral development"], correct: 1, explain: "RAD is built around fast prototyping cycles with heavy client collaboration, which suits scenarios where regular feedback and evolving requirements matter more than an upfront fixed design." },
      { q: "What's a key advantage of extreme programming (XP) over the waterfall model when building invoicing software that must be reliable?", options: ["XP guarantees the software will need no maintenance", "Pair programming and short reviewed iterations tend to produce higher-quality, more robust code and let requirements change", "XP always costs less than any other methodology", "XP removes the need for any testing"], correct: 1, explain: "XP's pair programming and frequent review cycles help catch bugs early and adapt to changing needs — valuable when the software (like invoicing) must be dependable and requirements might shift." },
      { q: "Which of these is a genuine disadvantage of Rapid Application Development for a very large, complex project?", options: ["It never involves the client in the process", "Objectives may keep changing and the overall design can end up poorly planned, since there's little time spent on upfront design", "It cannot produce a working prototype", "It requires the source code to be compiled before every test"], correct: 1, explain: "RAD's speed and flexibility come at a cost: without much upfront planning, large projects can end up with a poorly structured overall design and constantly shifting objectives." },
      { q: "In the spiral model of software development, what happens at each iteration that isn't a core part of the waterfall model?", options: ["A full risk analysis is carried out before planning the next iteration", "The project is cancelled and restarted from scratch", "No client feedback is gathered at any point", "Testing is skipped entirely"], correct: 0, explain: "The spiral model combines iterative prototyping with an explicit risk-analysis step each time round, which is not a defining feature of the strictly sequential waterfall model." }
    ]
  },

  "1.2.4": {
    title: "Types of programming language",
    section: "1.2 Software and software development",
    notes: [
      {
        heading: "Programming paradigms",
        points: [
          "Low-level programming (assembly language) closely corresponds to machine code — each instruction has an opcode and operand, and the programmer must think in terms of the CPU's architecture.",
          "Procedural (imperative) programming runs high-level instructions one at a time, using sequence, selection (if statements) and iteration (loops), with subroutines (procedures/functions) for reusable code.",
          "Object-oriented programming (OOP) uses the same control structures as procedural programming, but organises code into classes and objects: variables become attributes, subroutines become methods."
        ]
      },
      {
        heading: "Object-oriented concepts",
        points: [
          "Encapsulation — an object's data (attributes) is manipulated only through its own methods, not altered directly from outside.",
          "Inheritance — a subclass inherits the attributes and methods of a parent class, and can add or override its own.",
          "Polymorphism — objects of different subclasses can respond to the same method call in their own way, e.g. two subclasses both having a talk() method that prints something different."
        ]
      },
      {
        heading: "Low-level programming and Little Man Computer (LMC)",
        points: [
          "LMC is a simplified model of a computer used to teach assembly-style programming, with instructions like LDA (load accumulator), STA (store accumulator), ADD, SUB, INP, OUT, BRA (branch always), BRP (branch if positive), BRZ (branch if zero) and HLT.",
          "Immediate addressing uses a constant directly in the instruction; direct addressing uses the value at a given memory address; indirect addressing uses the address stored in a register to find the value; indexed addressing calculates the address from a register plus an offset."
        ]
      }
    ],
    flashcards: [
      { front: "Procedural programming", back: "High-level instructions run one at a time using sequence, selection and iteration, with subroutines for reuse." },
      { front: "Encapsulation", back: "An object's data is only changed through its own methods, not altered directly from outside the object." },
      { front: "Inheritance", back: "A subclass takes on the attributes and methods of a parent class, and may add or override its own." },
      { front: "Polymorphism", back: "Objects of different subclasses can respond to the same method call in their own distinct way." },
      { front: "Immediate addressing", back: "A constant value is used directly within the instruction itself, e.g. MOV AX,5." },
      { front: "Indirect addressing", back: "The memory address to use is stored inside a register, which is followed to find the actual value." }
    ],
    questions: [
      { q: "A programmer is writing a small stopwatch program for a very low-power digital watch. Why might they choose a low-level (assembly) language over a procedural one?", options: ["Assembly language always includes built-in object-oriented features", "Assembly instructions map closely onto machine code, giving tighter control over limited hardware resources like memory and power", "Assembly language cannot produce syntax errors", "Procedural languages cannot be compiled"], correct: 1, explain: "Low-level programming gives fine control over exactly what the hardware does, which matters when a device (like an inexpensive digital watch) has very limited processing power and battery life." },
      { q: "In the Vehicle class example, the 'speed' attribute is private and can only be changed by calling an accelerate() method. What OOP concept does this demonstrate?", options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"], correct: 1, explain: "Encapsulation means an object's data is manipulated through its own methods rather than being changed directly from outside the object." },
      { q: "A Lion class inherits from an Animal class, adding a weight attribute and a changeWeight() method. What does this demonstrate?", options: ["Polymorphism, because Lion behaves differently to Animal", "Inheritance, because Lion automatically gains Animal's existing attributes and methods and can add its own", "Encapsulation, because weight is hidden from all methods", "Compilation, because Lion is translated into machine code"], correct: 1, explain: "Inheritance lets a subclass (Lion) reuse a parent class's (Animal's) attributes and methods while extending it with new ones of its own." },
      { q: "Two subclasses, Cat and Leopard, each have their own talk() method — Cat prints 'Meow' and Leopard (which overrides it) prints 'Roar'. This is an example of:", options: ["Encapsulation", "Polymorphism", "Procedural programming", "Direct addressing"], correct: 1, explain: "Polymorphism allows objects of different subclasses to respond to the same method call (talk()) in their own distinct way." },
      { q: "In assembly language, the instruction MOV AX,5 loads the constant 5 directly into register AX. What addressing mode is this?", options: ["Direct addressing", "Indirect addressing", "Immediate addressing", "Indexed addressing"], correct: 2, explain: "Immediate addressing uses a constant written directly into the instruction itself, rather than a value fetched from memory or a register." },
      { q: "What best distinguishes object-oriented programming from procedural programming?", options: ["OOP cannot use loops or selection", "OOP organises code into classes and objects, where variables become attributes and subroutines become methods, while still using the same underlying control structures", "Procedural programming cannot use subroutines", "OOP code cannot be compiled"], correct: 1, explain: "OOP builds on the same sequence/selection/iteration control structures as procedural programming, but wraps data and behaviour together into classes and objects (attributes and methods)." }
    ]
  },

  "1.3.1": {
    title: "Compression, encryption and hashing",
    section: "1.3 Exchanging data",
    notes: [
      {
        heading: "Lossy vs lossless compression",
        points: [
          "Lossless compression reduces file size without permanently discarding any data — essential for text, code, or anything where every bit matters (e.g. a DNA sequence).",
          "Lossy compression permanently removes some data, usually detail imperceptible to humans, to shrink the file further — appropriate for photos or audio where a little quality loss is acceptable."
        ]
      },
      {
        heading: "Lossless compression methods",
        points: [
          "Run length encoding (RLE) replaces runs of the same repeated value with the value plus a count, e.g. AAAA becomes A4 — effective when data has long repeated sequences.",
          "Dictionary-based compression stores commonly used sequences (e.g. whole words) once in a dictionary, then represents each occurrence with a much shorter pointer/code — though the dictionary itself must also be stored."
        ]
      },
      {
        heading: "Symmetric and asymmetric encryption",
        points: [
          "Symmetric encryption uses the same private key to both encrypt and decrypt — fast, but the key must somehow be shared securely between sender and receiver.",
          "Asymmetric encryption uses a public key to encrypt and a different, private key to decrypt — safer for sending data over an open network since the public key alone can't decrypt anything.",
          "A Caesar/shift cipher is a simple symmetric cipher: each letter is shifted a fixed number of places along the alphabet; decrypting applies the same shift in reverse."
        ]
      },
      {
        heading: "Hashing",
        points: [
          "Hashing is a one-way function: it converts data into a fixed hash value, and there's no way to reverse the hash back into the original data.",
          "Storing a password's hash (rather than the password itself, encrypted or not) is safer — when a user logs in, their entered password is hashed and compared to the stored hash, so the real password is never kept.",
          "Hashes are also used to check that two copies of a file are identical: even a tiny change to the data produces a very different hash value."
        ]
      }
    ],
    flashcards: [
      { front: "Lossless compression", back: "Reduces file size without permanently discarding any data — needed when every bit matters, e.g. text or DNA sequences." },
      { front: "Lossy compression", back: "Permanently discards some (usually imperceptible) data to shrink a file further, e.g. for photos or audio." },
      { front: "Run length encoding (RLE)", back: "Replaces runs of repeated values with the value plus a count, e.g. AAAA → A4." },
      { front: "Symmetric encryption", back: "The same private key is used to both encrypt and decrypt data." },
      { front: "Asymmetric encryption", back: "A public key encrypts the data; only the matching private key can decrypt it." },
      { front: "Hashing", back: "A one-way function that converts data into a fixed hash value that cannot be reversed back to the original." }
    ],
    questions: [
      { q: "A medical research company stores a sequenced DNA record as a text file. Why is lossy compression unsuitable here?", options: ["Lossy compression is always slower than lossless compression", "All of the data is meaningful, and lossy compression permanently discards some of it, which could change the record's meaning", "Lossy compression cannot be applied to text files at all", "Lossy compression makes files larger, not smaller"], correct: 1, explain: "In data like a DNA sequence or general text, every character matters. Lossy compression's permanent data loss risks corrupting or changing the meaning of the record, so lossless methods are needed." },
      { q: "Using run length encoding, how would the sequence GGGCCCCTTTCCCCAAAA most likely be compressed?", options: ["It cannot be compressed with RLE", "G3C4T3C4A4", "GGGCCCCTTTCCCCAAAA (unchanged)", "G1C1T1C1A1"], correct: 1, explain: "RLE replaces each run of repeated characters with the character followed by its count: three Gs become G3, four Cs become C4, and so on." },
      { q: "A shift cipher encrypts 'FEED' with a shift of +2 to give 'HGGF'. If the letter Z is shifted by +2 it wraps around to become B. Is this still symmetric encryption?", options: ["No, because wraparound makes it asymmetric", "Yes, because the same shift value (key) is used to both encrypt and decrypt the message", "No, because symmetric encryption cannot use letters", "Yes, but only because Z is a special case"], correct: 1, explain: "It remains symmetric encryption because encryption and decryption both use the identical shift value as the key — wraparound doesn't change which key is used." },
      { q: "Why is storing the hash of a user's password safer than storing an encrypted version of it?", options: ["Hashing takes up less storage space than encryption", "A hash is a one-way function, so even if a hacker steals the database, the original password cannot be recovered from the hash — whereas an encrypted password could potentially be decrypted", "Hashed passwords let customer service staff read the password back to a user over the phone", "Hashing makes passwords load faster when logging in"], correct: 1, explain: "Hashing cannot be reversed, unlike encryption which could theoretically be decrypted given the key. Comparing hash-to-hash at login means the real password never needs to be stored at all." },
      { q: "Why is asymmetric encryption generally considered more secure than symmetric encryption for transmitting data over the internet, such as during online banking?", options: ["Asymmetric encryption doesn't require any keys at all", "The public key used to encrypt data can't be used to decrypt it, so it can be shared openly without needing to secretly exchange a private key first", "Asymmetric encryption is always faster to compute", "Symmetric encryption cannot be used with binary data"], correct: 1, explain: "With asymmetric encryption, the public key can be sent openly since it can only encrypt, not decrypt — removing the risky need to securely share a single shared secret key, as symmetric encryption requires." },
      { q: "A company stores a hash of every document on its server. Two files have the same name and size. How could the hashes help check whether they contain identical data?", options: ["Hashes cannot be used to compare files, only to encrypt them", "If the hashes are identical, the files almost certainly contain the same data; even a tiny difference in content produces a very different hash", "Comparing hashes tells you exactly which bytes differ between the files", "Hashes only work for comparing image files"], correct: 1, explain: "Because hashing is deterministic and sensitive to any change, two files producing the same hash are extremely likely to contain identical data — a quick way to verify integrity without comparing every byte." }
    ]
  },

  "1.3.2": {
    title: "Databases",
    section: "1.3 Exchanging data",
    notes: [
      {
        heading: "Flat file vs relational databases",
        points: [
          "A flat file database stores all data in one table/file (e.g. a CSV) — simple, but prone to data redundancy.",
          "A relational database splits data across multiple linked tables, connected using primary and foreign keys, reducing redundancy.",
          "A primary key uniquely identifies each record in a table; a foreign key is a field that references a primary key in another table, linking the two; a candidate key is another field that could have been chosen as the primary key."
        ]
      },
      {
        heading: "Normalisation and referential integrity",
        points: [
          "Normalisation reduces redundant/duplicated data, making a database easier and safer to update.",
          "1NF — each field holds only one piece of data, and every record has a primary key.",
          "2NF — the table is in 1NF and every non-key field depends on the whole primary key (no partial dependencies).",
          "3NF — the table is in 2NF and no non-key field depends on another non-key field (no transitive dependencies).",
          "Referential integrity ensures a foreign key must always reference a record that actually exists, preventing 'orphaned' references if a linked record is deleted."
        ]
      },
      {
        heading: "SQL",
        points: [
          "SELECT fields FROM table WHERE condition — retrieves matching records.",
          "INSERT INTO table VALUES (...) — adds a new record.",
          "DELETE FROM table WHERE condition — removes matching records.",
          "JOIN combines records from two or more tables based on a related column, e.g. matching a foreign key to a primary key.",
          "AND / OR combine multiple conditions in a WHERE clause; LIKE matches a pattern within a text field."
        ]
      },
      {
        heading: "Transactions and ACID",
        points: [
          "A transaction is a single database operation, possibly made up of several smaller actions, that must either fully succeed or fully fail.",
          "Atomicity — all parts of a transaction complete, or none do. Consistency — the database's rules (validation, referential integrity) are always upheld. Isolation — concurrent transactions produce the same result as if run one at a time. Durability — once complete, a transaction survives even a power failure, because it's saved to secondary storage.",
          "Record locking prevents other transactions from altering a record that's currently being updated, helping to maintain isolation."
        ]
      }
    ],
    flashcards: [
      { front: "Primary key", back: "A field that uniquely identifies each individual record in a table." },
      { front: "Foreign key", back: "A field in one table that is the primary key of another table, used to link records between them." },
      { front: "Third normal form (3NF)", back: "The table is in 2NF and no non-key field depends on another non-key field (no transitive dependencies)." },
      { front: "Referential integrity", back: "Ensures a foreign key must reference a record that actually exists in the linked table." },
      { front: "Atomicity", back: "The ACID property requiring that an entire transaction completes, or none of it does." },
      { front: "Record locking", back: "Prevents a record being altered by another transaction until the current one has finished, helping maintain isolation." }
    ],
    questions: [
      { q: "A hotel's flat file table stores a guest's name and phone number on every booking row for that guest. What problem does this data redundancy cause?", options: ["The table becomes too small to store any data", "If the guest's details need updating, every row for that guest must be changed — missing one causes inconsistent data", "Flat files cannot store phone numbers", "It has no real downside, since storage is cheap"], correct: 1, explain: "Redundant/duplicated data risks inconsistency: if only some copies of a repeated value are updated, different records end up disagreeing about the same fact." },
      { q: "A sports day results table stores RaceID, Race, Year, Winner and Age in one table, where a winner's age is repeated on every row they appear in. Why is this table not in third normal form (3NF)?", options: ["Because it doesn't have a primary key", "Because Age is transitively dependent on the Winner rather than directly on the primary key RaceID", "Because it has too many columns", "Because RaceID isn't unique"], correct: 1, explain: "Age depends on who the Winner is, not directly on the RaceID primary key — this transitive dependency (a non-key field depending on another non-key field) breaks 3NF and risks inconsistent ages for the same winner." },
      { q: "What does referential integrity guarantee in a relational database?", options: ["That every table has exactly one column", "That a foreign key value must correspond to a record that actually exists in the referenced table", "That data can never be deleted", "That all fields must be text"], correct: 1, explain: "Referential integrity stops 'orphaned' foreign key references — for example, preventing a student's record from being deleted while race results still reference their StudentID." },
      { q: "Which SQL statement would return the ItemID and StockQty of items with fewer than 40 in stock that have a discount ticket?", options: ["SELECT ItemID, StockQty FROM Stock WHERE StockQty < 40 AND DiscountTicket = 'Yes'", "DELETE FROM Stock WHERE StockQty < 40", "INSERT INTO Stock VALUES (StockQty < 40)", "JOIN Stock ON StockQty < 40"], correct: 0, explain: "SELECT with a WHERE clause using AND is the correct way to filter by two conditions at once and return only the requested fields." },
      { q: "Two shop assistants both try to update the same stock quantity at the same time. How does record locking help maintain the ACID property of isolation here?", options: ["It deletes one of the two transactions automatically", "It prevents the second transaction from altering the record until the first transaction has finished, avoiding both updates reading the same stale value", "It merges both updates into an average value", "It stops any further sales for the rest of the day"], correct: 1, explain: "Without locking, both transactions could read the same starting value and each add their own change, losing one of the updates. Locking makes sure transactions affecting the same record are processed one at a time, preserving isolation." },
      { q: "What does the durability property of ACID guarantee about a completed transaction, such as a product sale being recorded?", options: ["That the transaction can be reversed at any time", "That the completed transaction will remain stored even if there's a power failure or hardware fault immediately afterwards", "That the transaction will run faster than usual", "That no other user can ever view the record again"], correct: 1, explain: "Durability means once a transaction has completed, its effects are permanently saved to secondary storage, so they survive a crash or power loss straight afterwards." }
    ]
  },

  "1.3.3": {
    title: "Networks",
    section: "1.3 Exchanging data",
    notes: [
      {
        heading: "Network hardware",
        points: [
          "A network interface card (NIC) connects a device to a network and converts data into a format that can be transmitted; every NIC has a unique MAC address.",
          "A hub sends incoming data to every connected device, which can cause collisions; a switch instead forwards data only to the correct destination port, avoiding collisions and improving security.",
          "A wireless access point (WAP) lets wireless devices like smartphones join a wired network."
        ]
      },
      {
        heading: "LANs, WANs and the TCP/IP stack",
        points: [
          "A local area network (LAN) covers one site; a wide area network (WAN) spans multiple sites or a large geographical area, e.g. connecting offices in different cities.",
          "The TCP/IP stack has four layers: Application (e.g. HTTP, SMTP), Transport (splits data into segments and manages ports), Internet (adds source/destination IP addresses so routers know where to send packets), and Link (transfers data between physically connected devices, e.g. Ethernet or Wi-Fi).",
          "Splitting responsibilities into layers means a new protocol only needs to worry about its own layer — the layers below already handle everything else."
        ]
      },
      {
        heading: "Packet switching, circuit switching and DNS",
        points: [
          "Packet switching splits data into packets that may each take a different route to their destination, being reassembled on arrival — this is how most internet traffic travels.",
          "Circuit switching establishes one dedicated connection for the whole duration of a communication, e.g. a traditional phone call.",
          "DNS (Domain Name System) converts a domain name typed into a browser into the IP address of the server hosting that website."
        ]
      },
      {
        heading: "Network security threats and protection",
        points: [
          "Threats include hackers, viruses, denial of service attacks, spyware, SQL injection, phishing and pharming.",
          "A firewall filters network traffic against set rules, blocking suspicious traffic; a hardware firewall protects every device behind it from one place, rather than needing software installed on each machine individually.",
          "A proxy server forwards requests on behalf of a client, hiding the client's identity/location, and can cache or filter content.",
          "SQL injection exploits unsanitised user input in a form to alter the meaning of a database query, potentially exposing or stealing data — validating and sanitising input helps prevent it."
        ]
      }
    ],
    flashcards: [
      { front: "Network interface card (NIC)", back: "Connects a device to a network and converts data into a transmittable format; has a unique MAC address." },
      { front: "Switch", back: "Forwards data only to the correct destination port on a network, avoiding the collisions a hub would cause." },
      { front: "Wide area network (WAN)", back: "A network spanning more than one site or a large geographical area." },
      { front: "DNS", back: "Converts a domain name into the IP address of the server hosting that website." },
      { front: "Packet switching", back: "Splits data into packets that may take different routes to their destination and are reassembled on arrival." },
      { front: "Proxy server", back: "Forwards requests on a client's behalf, hiding their identity/location and able to cache or filter content." },
      { front: "SQL injection", back: "An attack that exploits unsanitised user input to alter the meaning of a database query." }
    ],
    questions: [
      { q: "A company installs a device that converts digital signals into light signals for a new fibre optic internet connection. What's the main customer benefit of fibre over copper cable?", options: ["Fibre optic connections are always cheaper to install", "Fibre optic connections typically allow faster data transmission over longer distances with less signal degradation", "Fibre cables can carry electrical power to devices", "Copper cables cannot connect to a router"], correct: 1, explain: "Fibre optic cables carry data as light rather than electrical signals, which generally allows much higher speeds and less signal loss over distance compared to copper cabling." },
      { q: "Why does a switch generally improve network performance compared to a hub on the same local area network?", options: ["A switch broadcasts every packet to every device, keeping things simple", "A switch forwards data only to the port for its intended destination, avoiding the collisions that occur when a hub sends data to all devices at once", "Hubs use fibre optic cables while switches cannot", "Switches don't require a MAC address"], correct: 1, explain: "A hub blindly repeats incoming data to every device, risking collisions if two devices transmit simultaneously. A switch uses each device's MAC address to send data only to the correct port." },
      { q: "In the TCP/IP stack, which layer is responsible for adding the source and destination IP addresses to each packet?", options: ["Application layer", "Transport layer", "Internet layer", "Link layer"], correct: 2, explain: "The internet layer adds IP addressing information to each packet, which routers then use to work out where each packet needs to go next." },
      { q: "What's the main difference between packet switching and circuit switching?", options: ["Packet switching splits data into packets that can take different routes to their destination; circuit switching sets up one dedicated connection for the whole communication", "Circuit switching is only used for email", "Packet switching requires a WAN, while circuit switching only works on a LAN", "There is no real difference between the two"], correct: 0, explain: "Packet switching (used by most internet traffic) breaks data into independently routed packets, while circuit switching reserves a single dedicated path for the entire duration of the connection, as in a traditional phone call." },
      { q: "When a customer types a website's domain name into their browser, what role does a DNS server play?", options: ["It stores the website's actual HTML content", "It looks up the domain name and returns the corresponding IP address, so the browser knows where to send its request", "It encrypts the connection to the website", "It blocks access to inappropriate websites"], correct: 1, explain: "DNS servers hold a directory mapping domain names to IP addresses. The browser queries DNS first, then sends its actual web request to the IP address it receives back." },
      { q: "A website's login form doesn't sanitise user input before using it in a database query. How could an attacker exploit this using SQL injection?", options: ["By physically unplugging the web server", "By entering specially crafted text that changes the meaning of the underlying SQL query, potentially bypassing login checks or extracting data", "By guessing the administrator's password through trial and error only", "SQL injection cannot affect login forms"], correct: 1, explain: "If input isn't validated or sanitised, an attacker's entered text can become part of the actual SQL query executed against the database, letting them alter its logic to bypass authentication or steal data." }
    ]
  },

  "1.3.4": {
    title: "Web technologies",
    section: "1.3 Exchanging data",
    notes: [
      {
        heading: "HTML, CSS and JavaScript",
        points: [
          "HTML structures a web page's content using tags such as <h1>, <img>, <ul>/<li>, <a href=\"...\">, <form> and <input>.",
          "The width, height and alt attributes on an <img> tag reserve space before the image loads and provide alternative text for screen readers and search engines.",
          "CSS styles how HTML content looks — an external stylesheet lets one set of rules apply consistently across every page of a site and be updated in one place.",
          "JavaScript can manipulate the page after it has loaded, e.g. using document.getElementById() to select an element and change its content or style in response to user actions."
        ]
      },
      {
        heading: "Client-side vs server-side processing",
        points: [
          "Client-side processing (e.g. JavaScript form validation) runs in the user's browser, giving instant feedback without needing to contact the server.",
          "Server-side processing runs on the web server, needed when the task requires access to server-held data, such as looking up a customer's account details or a large database.",
          "Choosing client-side for tasks like simple validation avoids the delay of an HTTP request/response round trip."
        ]
      },
      {
        heading: "Search engines: indexing and PageRank",
        points: [
          "A web crawler (spider) visits pages, follows their links to find more pages, and records information such as text, metadata and word positions into an index.",
          "A robots.txt file gives instructions to crawlers about which parts of a site they should or shouldn't index.",
          "The PageRank algorithm ranks a page more highly the more (and the more highly ranked) pages link to it.",
          "The damping factor is a value between 0 and 1 representing the probability a user keeps following links rather than jumping to a random page — it stops the algorithm getting stuck at a page with no outgoing links."
        ]
      }
    ],
    flashcards: [
      { front: "alt attribute", back: "Alternative text for an image, used by screen readers and search engines when the image can't be shown or seen." },
      { front: "External CSS", back: "A separate stylesheet file that applies consistent styling across every page of a site from one place." },
      { front: "Client-side processing", back: "Code (e.g. JavaScript) that runs in the user's browser, giving instant feedback without contacting the server." },
      { front: "Server-side processing", back: "Code that runs on the web server, needed when a task requires server-held data such as a database." },
      { front: "Web crawler (spider)", back: "A program that visits web pages, follows their links, and records information about them into a search index." },
      { front: "Damping factor", back: "A value between 0 and 1 in PageRank representing the probability a user keeps following links rather than jumping randomly." }
    ],
    questions: [
      { q: "An <img> tag includes width, height and alt attributes. What's the purpose of the width and height attributes specifically?", options: ["They make the image load faster over a slow connection", "They let the browser reserve the correct space for the image before it has finished downloading", "They provide text for screen readers", "They compress the image file"], correct: 1, explain: "Specifying width and height lets the browser lay out the page correctly (leaving the right-sized gap) even before the image itself has downloaded, avoiding the page jumping around as it loads." },
      { q: "Why would a website's styles usually be kept in an external CSS file rather than written inline on every page?", options: ["Inline CSS runs faster in every browser", "An external stylesheet keeps styling consistent across the whole site, and updating one file changes every page that uses it", "External CSS files cannot be cached by browsers", "Inline CSS is required for JavaScript to work"], correct: 1, explain: "With one shared external stylesheet, a single style change automatically applies everywhere it's linked, which is far easier to maintain than editing inline styles on every individual page." },
      { q: "A charity's donation form checks in JavaScript, in the browser, whether the entered amount is between £1 and £100 before the form is submitted. What's the main benefit of doing this client-side rather than server-side?", options: ["It's more secure against all forms of attack", "It gives the user instant feedback without the delay of sending an HTTP request to the server and waiting for a response", "Server-side validation is impossible for numeric ranges", "It removes the need for a database"], correct: 1, explain: "Client-side validation happens immediately in the browser, so the user sees an error message right away rather than waiting for a round trip to the server and back." },
      { q: "Why might an online banking site choose to calculate a customer's account balance using server-side processing rather than client-side?", options: ["Server-side code cannot access sensitive data", "The data needed (the customer's records) is stored on the server, and processing it there avoids having to send the whole database to the client and keeps sensitive data more secure", "Client-side code runs faster for large databases", "JavaScript cannot perform arithmetic"], correct: 1, explain: "Sensitive or large datasets normally stay on the server. Processing there avoids exposing or transferring the full dataset to the client and keeps control over who can access it." },
      { q: "What does a web crawler (spider) do when indexing websites for a search engine?", options: ["It only records the title of each page and nothing else", "It visits pages, records their text and metadata, notes word positions, and follows links to discover further pages to index", "It deletes web pages that contain errors", "It only works on pages the user has already visited"], correct: 1, explain: "A crawler systematically visits pages (via a list or by following links), extracting text and metadata into a search index, then continues by following the links it finds on each page." },
      { q: "In the PageRank algorithm, what is the purpose of the damping factor?", options: ["It slows down the web crawler to avoid overloading servers", "It represents the probability a user keeps clicking links rather than jumping to a random page, preventing the algorithm getting stuck at a page with no outgoing links", "It removes duplicate pages from the index", "It encrypts search results"], correct: 1, explain: "Without a damping factor, the algorithm could get stuck endlessly at a 'sink' page with no outgoing links. The damping factor models a user occasionally jumping to a random page instead of always following a link." }
    ]
  },

  "1.4.1": {
    title: "Data types",
    section: "1.4 Data types, data structures and algorithms",
    notes: [
      {
        heading: "Primitive data types and casting",
        points: [
          "Common primitive types: integer (whole numbers), real/float (numbers with a decimal point), character (a single symbol), string (a sequence of characters) and Boolean (true/false).",
          "Casting converts a value from one data type to another, e.g. converting user input (a string) into an integer or float before using it in a calculation, or an integer into a string before concatenating it with text.",
          "Mixing incompatible types without casting — such as concatenating a string with an integer directly — causes a type mismatch/syntax error in many languages."
        ]
      },
      {
        heading: "Hexadecimal",
        points: [
          "Hexadecimal is base 16, using digits 0-9 and A-F (A=10 ... F=15). Each hex digit represents exactly 4 bits, so a byte can be written as two hex digits.",
          "Common uses: MAC addresses, IPv6 addresses, RGB colour codes, and memory addresses in assembly language — hex is easier for humans to read, write and copy accurately than long binary strings."
        ]
      },
      {
        heading: "Floating point representation",
        points: [
          "A floating point number is stored as a mantissa and an exponent — the exponent effectively says how far to shift the mantissa's binary point.",
          "A number is normalised when the mantissa's first two bits are 01 (for a positive number) or 10 (for a negative number) — this keeps the sign bit correct and maximises the precision available.",
          "To add two floating point numbers, their exponents must first be made equal by adjusting the smaller exponent's mantissa, before the mantissas themselves are added."
        ]
      },
      {
        heading: "Bitwise manipulation and masks",
        points: [
          "A left shift multiplies a binary number by 2 for each place shifted; a right shift divides by 2 for each place shifted (for unsigned numbers).",
          "An AND mask can force chosen bits to 0 while leaving others unchanged (a 0 in the mask always forces 0; a 1 preserves the original bit).",
          "An OR mask can force chosen bits to 1 while leaving others unchanged (a 1 in the mask always forces 1; a 0 preserves the original bit).",
          "An XOR mask flips (toggles) the bits marked with a 1 in the mask, and leaves bits marked 0 unchanged."
        ]
      },
      {
        heading: "Character sets: ASCII and Unicode",
        points: [
          "ASCII uses 7 bits per character (or 8 bits for extended ASCII), giving up to 128 (or 256) possible characters — enough for standard English text and symbols.",
          "Unicode uses 2 or 4 bytes per character, allowing it to represent a vastly larger range of characters, covering many languages, emoji and mathematical symbols.",
          "The first 128 characters of Unicode match ASCII exactly, so basic English text is interpreted identically in both — but characters outside that range will display incorrectly if a computer expects ASCII."
        ]
      }
    ],
    flashcards: [
      { front: "Casting", back: "Converting a value from one data type to another, e.g. a string typed by a user into an integer." },
      { front: "Normalised floating point number", back: "One where the mantissa begins 01 (positive) or 10 (negative), maximising precision." },
      { front: "Left shift", back: "Shifting binary digits left multiplies the number by 2 for each place shifted." },
      { front: "AND mask", back: "Forces chosen bits to 0 (mask bit 0) while leaving others unchanged (mask bit 1)." },
      { front: "XOR mask", back: "Flips the bits marked with a 1 in the mask, leaving bits marked 0 unchanged." },
      { front: "ASCII", back: "A 7-bit (or 8-bit extended) character set giving up to 128/256 characters, mainly for English text." },
      { front: "Unicode", back: "A 2- or 4-byte character set able to represent a huge range of languages, emoji and symbols." }
    ],
    questions: [
      { q: "A program reads a number as input() and later tries to concatenate it directly with a string using +. What error is most likely, and why?", options: ["No error — all languages allow this automatically", "A type mismatch, because the variable holds one data type (e.g. integer) while the code tries to combine it directly with a string", "A division by zero error", "An out-of-memory error"], correct: 1, explain: "Concatenating an integer directly with a string without first casting the integer to a string causes a type mismatch in many languages, since + expects both operands to be compatible types." },
      { q: "Why should the average of five integers be stored as a floating point (real) number rather than an integer?", options: ["Integers cannot be added together", "Dividing the total by 5 may produce a fractional result, which an integer type can't represent accurately", "Floating point numbers use less memory than integers", "Averages must always be negative"], correct: 1, explain: "Summing integers and dividing by 5 will often not give a whole number, so a floating point type is needed to store the fractional part accurately." },
      { q: "A MAC address is written as 00:00:5e:00:53:af. Why is hexadecimal used here rather than binary?", options: ["Hexadecimal takes up more storage than binary", "Hexadecimal needs far fewer digits to represent the same value, making it easier for humans to read, write and copy accurately", "MAC addresses cannot be represented in binary", "Hexadecimal is required by all networking hardware"], correct: 1, explain: "Each hex digit represents 4 bits, so a MAC address in hex is much shorter than its binary equivalent — reducing the chance of a human making a transcription mistake." },
      { q: "A floating point number's mantissa starts with the bits 11. Is this number normalised?", options: ["Yes, because 11 always represents zero", "No — a normalised mantissa must start with 01 for a positive number or 10 for a negative number", "Yes, all mantissas starting with 1 are normalised", "It cannot be determined without knowing the exponent"], correct: 1, explain: "For a normalised floating point number in this representation, the mantissa must begin 01 (positive) or 10 (negative). A mantissa starting 11 is not normalised." },
      { q: "What's the result of applying an AND mask of 11110000 to the byte 10101011?", options: ["11111111", "10100000", "00000000", "10101011"], correct: 1, explain: "ANDing each bit: where the mask has 1, the original bit is kept; where the mask has 0, the result is forced to 0. So 1010 (kept) 1011 AND 0000 (forced) gives 10100000." },
      { q: "Why might an app choose Unicode over ASCII if it needs to support many different languages?", options: ["Unicode always uses less storage than ASCII", "Unicode can represent a vastly larger range of characters, including scripts beyond English, whereas ASCII is limited to a much smaller character set", "ASCII cannot be used on the internet", "Unicode removes the need for casting"], correct: 1, explain: "ASCII's 128 (or 256 extended) characters are mostly limited to English text and symbols, while Unicode's larger character space can represent characters from many different languages, plus emoji and symbols — at the cost of using more storage per character." }
    ]
  },

  "1.4.2": {
    title: "Data structures",
    section: "1.4 Data types, data structures and algorithms",
    notes: [
      {
        heading: "Arrays, records and tuples",
        points: [
          "An array is a fixed-length, static structure where every element must be the same data type — good for storing many values of one type, like a set of temperature readings.",
          "A record groups several related fields, which may be of different data types, to represent one item (e.g. a student's first name, last name, email and age).",
          "A tuple is similar to a record but is immutable — its values can't be changed once it's been created. An array of records is often used to store many structured items together, e.g. one array element per point on a graph."
        ]
      },
      {
        heading: "Queues and stacks",
        points: [
          "A queue works on a First In First Out (FIFO) basis: enqueue() adds an item to the back (tail); dequeue() removes the item from the front (head).",
          "A stack works on a Last In First Out (LIFO) basis: push() adds an item to the top; pop() removes the item from the top. peek() looks at the top item without removing it.",
          "Both can be implemented using an array with pointers tracking the current front/back or top of the structure."
        ]
      },
      {
        heading: "Linked lists and hash tables",
        points: [
          "A linked list stores each item as a node containing its data and a pointer to the next node; the last node's pointer is NULL. Traversing means following each pointer from the head until NULL is reached.",
          "Inserting or deleting in a linked list just means updating pointers, without having to shift every other element — an advantage over arrays.",
          "A hash table applies a hash function to a key to calculate the array index where its data should be stored, giving very fast lookup.",
          "A collision happens when two different keys hash to the same index. Chaining resolves this by storing a linked list at that index; linear probing resolves it by moving along to the next free slot."
        ]
      },
      {
        heading: "Graphs and trees",
        points: [
          "A graph is a set of vertices (nodes) connected by edges. It's weighted if edges carry a value (e.g. a distance), and directed if edges can only be followed one way.",
          "A tree is a special type of graph with no cycles, that must be undirected, and where every node is connected — usually with one root node.",
          "A binary search tree (BST) is an ordered tree where each node has at most two children, with smaller values to the left and larger values to the right, making searching much faster than scanning a whole array."
        ]
      }
    ],
    flashcards: [
      { front: "Array", back: "A fixed-length, static structure where every element must be the same data type." },
      { front: "Tuple", back: "A record-like grouping of related values that is immutable once created." },
      { front: "Queue", back: "First In First Out (FIFO) — items are added at the back (enqueue) and removed from the front (dequeue)." },
      { front: "Stack", back: "Last In First Out (LIFO) — items are added and removed from the top (push/pop)." },
      { front: "Linked list", back: "A sequence of nodes, each holding data and a pointer to the next node, ending in a NULL pointer." },
      { front: "Hash table collision", back: "When two different keys hash to the same index — resolved by chaining or linear probing." },
      { front: "Binary search tree", back: "An ordered tree where each node has up to two children, smaller values to the left and larger to the right." }
    ],
    questions: [
      { q: "A researcher needs to store hourly temperature and rainfall readings for one day across 10 weather stations, all in one structure. Which data structure fits best?", options: ["A single Boolean variable", "A 3-D array — one dimension for reading type, one for hour, one for station", "A stack, because readings arrive in order", "A hash table, because station names are unique"], correct: 1, explain: "With three varying factors (reading type, hour, and station), a 3-D array can neatly hold every combination of temperature/rainfall, hour and station in one structure." },
      { q: "A teacher wants to store a student's first name, last name, email and age together. Why use a record rather than an array?", options: ["Records can only store numbers", "An array requires every element to be the same data type, but this data mixes strings and an integer, which a record can hold together", "Records are always faster than arrays", "Arrays cannot hold more than one value"], correct: 1, explain: "Arrays require all elements to share one data type. Since this data mixes strings (names, email) and an integer (age), a record — which can hold different data types in named fields — is the appropriate structure." },
      { q: "A restaurant's queue of waiting customers has Tony, Ivy, Ishaan, Diya (front to back), with Diya at the head. If dequeue() is called, which customer is removed?", options: ["Tony, because they were most recently added", "Diya, because a queue is First In First Out and removes from the front (head)", "The customer is chosen at random", "Ivy, because they are in the middle"], correct: 1, explain: "A queue is FIFO: dequeue() always removes the item currently at the front (head) of the queue, which is Diya in this case." },
      { q: "A web browser's page history is implemented as a stack, storing pages in the order visited. When the user presses 'back', which page is removed?", options: ["The very first page visited", "The most recently visited page, since a stack is Last In First Out and pop() removes the top item", "A page chosen at random from the stack", "The page in the middle of the stack"], correct: 1, explain: "A stack is LIFO — the last page pushed onto it is the first one popped off, matching how a browser's back button returns to the most recently visited page." },
      { q: "What's a key advantage of a linked list over an array when frequently inserting or deleting items in the middle of a list?", options: ["Linked lists automatically sort themselves", "Inserting or deleting in a linked list only requires updating a couple of pointers, rather than shifting every subsequent element as an array would", "Linked lists always use less memory than arrays", "Arrays cannot store more than 10 items"], correct: 1, explain: "Because linked list nodes are connected by pointers rather than stored contiguously, adding or removing a node just means re-pointing its neighbours — no need to shift every following element, unlike an array." },
      { q: "A media server hashes film titles into a table with 100 slots (using MOD 100). Why is it likely to experience hash collisions?", options: ["Because hash tables can never have collisions", "Because MOD 100 can only produce 100 possible index values, so once there are more than 100 films, some titles are guaranteed to share the same index", "Because film titles cannot be hashed", "Because collisions only happen with numeric keys"], correct: 1, explain: "With only 100 possible hash values (0-99) from the MOD 100 step, storing more than 100 films guarantees that at least two titles will hash to the same index — a collision." }
    ]
  },

  "1.4.3": {
    title: "Boolean algebra",
    section: "1.4 Data types, data structures and algorithms",
    notes: [
      {
        heading: "Logic gates and truth tables",
        points: [
          "AND (∧) outputs true only if both inputs are true. OR (∨) outputs true if at least one input is true. NOT (¬) inverts a single input.",
          "XOR (⊻) outputs true if exactly one input is true, but false if both inputs are true (unlike OR, which is also true when both are true).",
          "A truth table lists every possible combination of inputs alongside the resulting output(s), fully describing a logic expression's behaviour."
        ]
      },
      {
        heading: "Boolean algebra laws and Karnaugh maps",
        points: [
          "Common simplification rules: A∨A≡A and A∧A≡A (duplicates can be removed); A∨(A∧B)≡A (absorption); distribution lets A∧(B∨C) be expanded to (A∧B)∨(A∧C).",
          "Simplifying a Boolean expression reduces the number of logic gates needed to build the equivalent circuit, saving cost and space.",
          "A Karnaugh map arranges a truth table's outputs in a grid (using Gray code ordering) so that adjacent 1s can be grouped visually, making it easier to spot and eliminate redundant terms."
        ]
      },
      {
        heading: "Adders and flip-flops",
        points: [
          "A half adder adds two single binary digits, producing a Sum output (via XOR) and a Carry output (via AND) — but has no way to accept a carry-in.",
          "A full adder adds two binary digits plus a carry-in bit, producing a Sum and Carry-out — chaining full adders together lets multi-bit numbers be added, with each carry-out feeding the next adder's carry-in.",
          "A D-type flip-flop stores a single bit: the data input D is copied to output Q at the rising edge of the clock signal (CK); the output ¬Q is always the opposite of Q."
        ]
      }
    ],
    flashcards: [
      { front: "XOR gate", back: "Outputs true if exactly one input is true, but false if both inputs are true (unlike OR)." },
      { front: "Absorption law", back: "A∨(A∧B) ≡ A — a redundant term can be removed to simplify a Boolean expression." },
      { front: "Karnaugh map", back: "A grid arrangement of a truth table's outputs that makes it easier to spot and group terms for simplification." },
      { front: "Half adder", back: "Adds two single binary digits, producing a Sum (XOR) and Carry (AND) output, with no carry-in." },
      { front: "Full adder", back: "Adds two binary digits plus a carry-in, producing a Sum and Carry-out — used to chain multi-bit addition." },
      { front: "D-type flip-flop", back: "Stores one bit: output Q copies input D at the rising edge of the clock signal." }
    ],
    questions: [
      { q: "What's the key difference between an OR gate and an XOR gate?", options: ["OR is only true if both inputs are true; XOR is true if either input is true", "OR is true if either input is true (including both); XOR is true if exactly one input is true, but false if both are true", "There is no difference — they always produce the same output", "XOR requires three inputs, while OR only needs two"], correct: 1, explain: "OR outputs true whenever at least one input is true, including when both are true. XOR is only true when exactly one input is true — two true inputs give a false output." },
      { q: "Simplify the Boolean expression P ≡ C∧(C∨A) ∨ (B∧C) ∨ B∧(C∨A) using Boolean algebra laws.", options: ["P ≡ A∨B∨C (no simplification possible)", "P ≡ C ∨ (B∧A)", "P ≡ A∧B∧C", "P ≡ ¬C"], correct: 1, explain: "Distributing and removing duplicate/obsolete terms reduces the expression step by step down to P ≡ C ∨ (B∧A), which needs far fewer logic gates to build than the original." },
      { q: "What's the main benefit of using a Karnaugh map to simplify a Boolean expression with several inputs?", options: ["It automatically builds the physical circuit for you", "Arranging outputs in a grid with adjacent cells differing by only one variable makes it easier to visually spot groups of 1s and eliminate redundant terms", "It removes the need for a truth table entirely", "It only works for expressions with exactly two inputs"], correct: 1, explain: "A Karnaugh map's Gray-code ordering means adjacent cells differ by only one input, so grouping adjacent 1s visually reveals which variables can be eliminated to simplify the expression." },
      { q: "A half adder is used to add two single binary digits, A and B. What are its two outputs, and how are they produced?", options: ["Sum via AND, Carry via OR", "Sum via XOR (A⊻B), Carry via AND (A∧B)", "Sum via NOT, Carry via XOR", "Both outputs come from the same OR gate"], correct: 1, explain: "A half adder's Sum output comes from an XOR gate (true when exactly one input is 1), and its Carry output comes from an AND gate (true only when both inputs are 1, producing a carry)." },
      { q: "Why is a full adder needed rather than a half adder when adding two multi-bit binary numbers together?", options: ["A full adder is faster at adding single bits", "A full adder can accept a carry-in bit from the previous column's addition, which a half adder cannot handle", "A half adder can only add negative numbers", "Full adders don't need any logic gates"], correct: 1, explain: "When adding multi-bit numbers column by column, each column may need to add in a carry generated by the previous column — something only a full adder (with its extra carry-in input) can do." },
      { q: "In a D-type flip-flop, when does the output Q change to match the data input D?", options: ["Continuously, at every moment in time", "Only at the rising edge of the clock (CK) signal", "Only when the ¬Q output is manually reset", "Q never changes once set"], correct: 1, explain: "A D-type flip-flop only updates its stored value (Q) at the rising edge of the clock signal — at all other times, Q holds its previous value regardless of what D is doing." }
    ]
  },

  "1.5.1": {
    title: "Computing-related legislation",
    section: "1.5 Legal, moral, cultural and ethical issues",
    notes: [
      {
        heading: "The Data Protection Act",
        points: [
          "Covers personal data — information that could identify a living individual — and requires organisations to get consent before processing or storing it in most cases (anonymised data, where no individual can be identified, is not covered).",
          "'Special category' data (such as health or sexual health information) receives extra protection and generally needs explicit consent, even where an exemption like 'vital interests' might apply to ordinary personal data.",
          "Breaching the act can result in very large fines — significant enough to seriously damage or bankrupt a smaller organisation."
        ]
      },
      {
        heading: "The Computer Misuse Act (1990)",
        points: [
          "Makes it a criminal offence to gain unauthorised access to computer material, to gain unauthorised access with intent to commit further offences, or to make unauthorised modifications to computer material (e.g. spreading malware).",
          "Applies to employees as much as outside attackers — accessing systems or data beyond what your job authorises can be an offence."
        ]
      },
      {
        heading: "The Copyright, Designs and Patents Act (1988)",
        points: [
          "Protects the creators of original work — including video, music and software — from having it copied or distributed without permission.",
          "Platforms hosting user-uploaded video (such as streaming sites) risk enabling large-scale copyright breaches, since uploaded content may include copyrighted film, TV or music without permission — automated content-detection systems have been developed to help address this."
        ]
      },
      {
        heading: "The Regulation of Investigatory Powers Act (2000)",
        points: [
          "Allows certain authorities to intercept communications and require organisations to hand over data (including private messages or video) in specified circumstances, such as preventing serious crime.",
          "It's controversial: supporters point to its usefulness in preventing terrorism and serious crime, while critics raise concerns about privacy and oversight of how the powers are used."
        ]
      }
    ],
    flashcards: [
      { front: "Data Protection Act", back: "Requires consent before personal data is processed or stored; doesn't apply to properly anonymised data." },
      { front: "Special category data", back: "Especially sensitive personal data (e.g. health data) that receives extra legal protection." },
      { front: "Computer Misuse Act (1990)", back: "Makes unauthorised access to, or modification of, computer material a criminal offence." },
      { front: "Copyright, Designs and Patents Act (1988)", back: "Protects creators of original work such as video, music and software from unauthorised copying." },
      { front: "Regulation of Investigatory Powers Act (2000)", back: "Allows authorities to intercept communications and require data to be handed over in specified circumstances." }
    ],
    questions: [
      { q: "A video streaming platform lets the public upload their own video content, some of which turns out to include copyrighted film clips. Which piece of legislation is most directly relevant to this issue?", options: ["The Data Protection Act", "The Copyright, Designs and Patents Act (1988)", "The Computer Misuse Act (1990)", "The Regulation of Investigatory Powers Act (2000)"], correct: 1, explain: "The Copyright, Designs and Patents Act protects the creators of video and audio from having their work copied or distributed without permission — directly relevant when users upload copyrighted footage." },
      { q: "A medical centre wants to upload patient records to a university database for research, without directly asking patients for consent first. Which factor is most likely to make this a Data Protection Act concern?", options: ["The data is anonymised, so consent isn't required", "The records likely contain 'special category' data (such as health information), which needs a stronger legal basis and generally explicit consent, unlike ordinary personal data", "Universities are automatically exempt from the Data Protection Act", "Medical centres cannot legally hold any patient records"], correct: 1, explain: "Health information is classed as 'special category' data under the Data Protection Act, meaning it needs extra protection and typically explicit consent — bases like 'vital interests' that can apply to ordinary personal data don't extend to special category data in the same way." },
      { q: "An employee at a company accesses a colleague's private files without permission or a legitimate work reason. Which law have they most likely broken?", options: ["The Copyright, Designs and Patents Act", "The Computer Misuse Act (1990)", "The Regulation of Investigatory Powers Act", "None — internal company access is never restricted by law"], correct: 1, explain: "The Computer Misuse Act makes unauthorised access to computer material an offence, and this applies to employees exceeding their authorised access just as it applies to external attackers." },
      { q: "A video sharing website is required to hand over stored private messages and videos to law enforcement investigating a serious crime, even though the content was never made public. Which law allows this?", options: ["The Data Protection Act", "The Computer Misuse Act", "The Regulation of Investigatory Powers Act (2000)", "The Copyright, Designs and Patents Act"], correct: 2, explain: "RIPA (2000) allows certain authorities to require organisations to hand over communications data in specified circumstances, such as investigating serious crime — a power that remains controversial due to privacy concerns." },
      { q: "Why does the Data Protection Act generally not apply to a dataset that has been properly anonymised?", options: ["Anonymised data is automatically deleted after use", "The Act protects data from which a living individual can be identified — if no individual can be identified from the anonymised data, it falls outside that protection", "Anonymised data cannot legally be stored at all", "Anonymisation is illegal under the Act"], correct: 1, explain: "The Data Protection Act specifically covers personal data — information that could identify a living individual. If data has been properly anonymised so no one can be identified from it, it falls outside the Act's core protections." }
    ]
  },

  "1.5.2": {
    title: "Moral and ethical issues",
    section: "1.5 Legal, moral, cultural and ethical issues",
    notes: [
      {
        heading: "Topics to be aware of",
        points: [
          "Computers in the workforce and automated decision-making — the impact of automation and AI on jobs and on decisions that affect people's lives.",
          "Environmental effects of computing, and cultural/social effects such as changing how people communicate and access information.",
          "Censorship and monitoring behaviour online, analysis of personal information, piracy and offensive communications.",
          "Layout, colour and character set choices can themselves carry moral/cultural implications, e.g. accessibility for users with visual impairments, or supporting non-English character sets fairly."
        ]
      },
      {
        heading: "Approaching a 'discuss' style question",
        points: [
          "A strong answer shows accurate, detailed knowledge of relevant computer science concepts and, where appropriate, specific legislation.",
          "It applies that knowledge directly to the given context with specific, relevant examples rather than generic statements.",
          "It gives a balanced discussion covering both advantages/benefits and disadvantages/concerns of different viewpoints, not just one side.",
          "It reaches a clear, reasoned conclusion that follows logically from the points already made — examiners care less about which side you land on, and more about whether your reasoning supports it."
        ]
      },
      {
        heading: "Example issue: online censorship",
        points: [
          "Technical measures used to moderate content include human review against a company's policies, AI-based detection trained on examples of harmful content, user flagging/reporting, and partial restriction (e.g. reducing a post's visibility rather than removing it).",
          "Alternatives to outright removal include warning labels pointing to alternative information, and age verification/content classification rather than blanket blocking.",
          "Discussions often weigh freedom of speech against user safety, and note that some platforms have a near-monopoly on where certain public discussion happens."
        ]
      }
    ],
    flashcards: [
      { front: "Automated decision-making", back: "Using computer systems/algorithms to make decisions that affect people, raising questions of fairness and accountability." },
      { front: "AI content moderation", back: "Using a trained model to automatically detect and remove content that breaks a platform's policies." },
      { front: "Balanced discussion (exam technique)", back: "A strong 'discuss' answer presents both advantages and disadvantages before reaching a reasoned conclusion." },
      { front: "Digital divide", back: "The gap between people who have good access to computing/the internet and those who don't." }
    ],
    questions: [
      { q: "In a 'discuss' style essay question worth several marks, what typically distinguishes a top mark-band answer from a low one?", options: ["Using as many technical terms as possible, regardless of relevance", "Combining accurate, detailed knowledge with specific application to the context, a balanced discussion of both sides, and a well-reasoned conclusion", "Only presenting one side of the argument as strongly as possible", "Simply restating the question in different words"], correct: 1, explain: "Top-band answers show thorough, accurate knowledge applied specifically to the given scenario, weigh up both advantages and disadvantages, and reach a conclusion that follows logically from the discussion — rather than a one-sided or generic response." },
      { q: "A social media platform uses an AI system trained on examples of harmful content to automatically remove posts. What's a genuine ethical concern with this approach?", options: ["AI moderation is always 100% accurate and needs no human oversight", "The AI may make mistakes — wrongly removing legitimate content or missing harmful content — and decisions about what counts as 'harmful' still involve human judgement built into its training data", "AI moderation is illegal in all circumstances", "This approach removes all need for a content policy"], correct: 1, explain: "Automated moderation can make errors in both directions (false positives and false negatives), and the definitions of 'harmful' baked into its training reflect human choices — raising questions about fairness, transparency and who is accountable for mistakes." },
      { q: "Which of these is presented as an alternative to outright content removal when discussing online censorship?", options: ["Permanently banning every user who posts anything questionable", "Adding a warning label with alternative sources of information, or using age verification/content classification instead of blocking content outright", "Removing internet access from an entire country", "There are no realistic alternatives to removal"], correct: 1, explain: "Rather than simply deleting content, platforms can label it with context or alternative information, or restrict it by age/classification — approaches that balance safety concerns against freedom of expression." },
      { q: "A company increasingly automates decisions previously made by human staff, such as short-listing job applicants using an algorithm. What's a key ethical question this raises?", options: ["Whether the algorithm uses enough electricity", "Whether the automated decisions are fair, unbiased, and properly accountable, compared to human decision-making", "Whether the company's website uses HTTPS", "Whether the algorithm is written in a compiled or interpreted language"], correct: 1, explain: "Automated decision-making raises concerns about whether algorithms might encode unfair bias (e.g. from biased training data), and about who is responsible when an automated decision negatively affects someone." },
      { q: "When discussing whether online censorship is 'essential for keeping people safe', which consideration would help make the discussion balanced rather than one-sided?", options: ["Only listing reasons why censorship is good", "Weighing safety benefits against freedom of speech concerns, and considering that some platforms have a near-monopoly over where public discussion happens", "Ignoring freedom of speech entirely, since safety is more important", "Refusing to reach any conclusion at all"], correct: 1, explain: "A balanced answer considers both sides: the safety benefits censorship can provide, and the cost to freedom of expression — plus practical concerns like a platform's outsized influence over public discourse — before reaching a reasoned conclusion." }
    ]
  }

};
