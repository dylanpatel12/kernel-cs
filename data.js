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
  }

};
