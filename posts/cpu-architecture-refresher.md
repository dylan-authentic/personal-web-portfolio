---
title: 'Technical Refresher: CPU Architecture'
date: '2024-04-20'
tag: Engineering
---

This post contains refresher notes for of fundamental computer concepts aimed at highlighting foundational concepts of computing.

##### CENTRAL PROCESSING UNIT – CPU
- The lowest level of a processor is a **TRANSISTOR**.
- The transistor allows for the flow of electricity in physical hardware.
- The flow of electricity - on or off - allows for the representation of two states - true or false.
- These states become capable of being programmed using **binary digits** - 0s and 1s, and the hardware can then be designed to represent logical statements using **BOOLEAN ALGEBRA** and **LOGIC GATES**.

###### Storing and Representing Numerical Data using Binary
- By combining binary digits into chunks, larger pieces of information can be represented, such as numbers and letters.
- A single binary digit is called a **bit**
- A CPU will have a predefined amount of bits that represent a single piece of information (i.e., 8 bits, 16 bits, 32, bits, 64 bits, etc). The chunk of bits sets the amount of values available for the CPU to work with (2^N where N is the number of bits that can be set in a single grouping). The larger the group of available bits, the more values and date a computer can work with.
- 8 bits is a **BYTE**

###### Computation - Manipulating numbers using the ALU
- Arithmetic & Logic Unit is the mathematical brain of a computer.
- Arithmetic Unit - Responsible for handling all numerical operations in a computer – i.e., addition and subtraction
- Circuits (Logic Gates) are physically implemented on the CPU to handle numerical operations
- Logic Unit - Responsible for handling all logical operations, like And, Or, and Not. Also performs simple numerical tests like negative or greater than.

###### Memory - Random Access vs Persistent
- Circuits are used to create And-Or Latches to remember 0s and 1s
- Gated Latches are circuits used to store a single bit and can be controlled to explicitly enable writing a value to the latch
- 8 Gated Latches grouped together can be used to store 8 bits of information. This is called a REGISTER
- A register holds a single piece of data, and the number of bits in a register is called it’s width
- Latch Matrices are used to increase the amount of bits available in memory and allows for granular bit access (i.e., 256 bit memory)
- A memory module is scaled up by having multiple 256 bit memory units that store a single bit of data at the same memory address in each memory unit. >>> This is how RAM works - it has a specific number of addresses and can store a specific width of data
- As the number of memory locations grow, the number of addresses grow. 1GB requires 32 bit addresses
- Any memory location can be accessed at any time and in a random order, which is why its called RANDOM ACCESS MEMORY
- Since we can access data in RAM instantly using addresses, reading and writing data to/from memory happens in constant time (very fast)
- RAM is short-term or working memory
- Types of RAM: SRAM, DRAM, Flash Memory, NVRAM
- 32 squares of memory with 4 smaller blocks with 128 x 64 bits (8,192 bits). 32 squares have 4 matrices (32,768 bits) with 32 squares total = >1M bits of memory on a chip. 8 chips = 8M bits or 1MB. >>>> 1980s SRAM. Today, RAM can have 1GB or more of memory with billions of bytes of memory

###### Processing - Putting it all together
- The job of a CPU is to execute programs
- Programs are made up of instructions that tell the computer what to do
- Components: RAM, CPU Registers with addresses, Instruction Table with OPCodes, Instruction Address Register (stores memory address of current instruction), Instruction Register (stores the current instruction), Control Unit, ALU, CPU Clock

###### CPU Phases
- **Fetch Phase** - retrieves next instruction from RAM and copies it into the Instruction Register
- **Decode Phase** - the control unit circuits interprets the instruction opcode
- **Execute Phase** - Output of decode phase is used in combination with ram or register address from the fetch phase to execute the instruction
- **Clock speed** - speed at which the CPU can carry out each phase, measured in Hertz. 1Hz means 1 cycle per second. 1MHz = 1,000,000 cycles per second. GHZ is billions of cycles per second

###### Instructions and Programming Languages
- Programs are loaded into RAM and executed by the CPU
- Programs are written in Assembly Language and then compiled to Machine Code which the CPU executes
- Instructions are based on the hardware implementation of the CPU, meaning the circuits and logic gates determine which instructions can be used in programs
- High Level Languages are COMPILED into Assembly Language and Assembly Language is ASSEMBLED into machine code
- Examples of High Level Languages: Arithmetic Version 0 (Grace Hopper), FORTRAN, COBOL (Business), AGOL, LISP, BASIC, PASCAL, C, SMALLTALK, C++, Objective-C, PERL, Python, Ruby, Java, Swift, C#, Go, Rust, Etc. 
- High level languages make it easier for more people to write code.
- Programming languages are just programs themselves!

###### Advanced CPU Designs
- CPU capabilities are dependent on their hardware designs
- The Bus - wires that connect RAM to the CPU and allows the data to travel back and forth
- It takes time for RAM to lookup address, retrieve data, and configure output. This takes clock cycles and makes the CPU sit idle
- RAM Cache can sit on the CPU to store values closer to the processing unit and allow it to work faster. 
- RAM may send a block of data when a retrieval is made for a specific piece of data, which then makes it faster on following instruction requests. This can happen on a single clock cycle. 
- Cache has a Dirty Bit to allow for data synchronization when data is updated in cache but not in RAM. If Cache is full and CPU requests new block of data, check dirty bit, if dirty, write cache block back to RAM, then load new block
- Instruction Pipelining - Parallelizing operations by starting the next CPU phase while the current one is in progress. This can be done because each phase uses different parts of the CPU, increasing throughput (this introduces potential issues if CPU fetches a value that is about to be modified in an execute)
- This can be handled using lookaheads and stalls for dependencies or dynamic Out of Order Execution
- Modern CPUs have multiple cores capable of processing/running multiple threads in parallel, in which multiple threads are scheduled and managed by the operating system
