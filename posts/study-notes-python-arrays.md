---
title: 'Building Python Arrays from Scratch'
date: '2021-01-08'
tag: Engineering
---

## Python: Arrays in Detail
When considering how arrays work under the hood, it's key to know how the computer stores information in memory.
- A **bit** is the **smallest unit of information** in a computer -- it is binary (either 0 or 1)
- Typically, the smallest size of data is 1 byte (8 bits)
- On most computers today, a collection of **4 bytes** or **32 bits** is called a **word**
- In many cases, **a single character**, or letter, takes up **1 byte**.
- An **integer**, or whole number, takes up **1 word**.

- Each piece of information stored in memory as bytes will have its own unique ID
- The storage and retrieval of this information will happen through this unique ID (index)

###### Python Arrays
> Python's array are mostly known as lists or tuples. A list is a typical array and a tuple is an array that can't be changed. 

> Python usually has 2 types of array -> Low Level Arrays and Referential Arrays

###### Low Level Arrays
> **Each byte of memory is associated with a unique number that serves as it's address**
> **Memory Addresses are typically coordinated with the physical layout of the hardware, so addresses are portrayed as sequential**
- An array is simply a group of related variable that are stored one after another in a portion of memory

> You have a block of memory on the physical hardware. That block of memory is split up into individual bytes. Each byte is referenced via a memory address (unique id). Those memory addresses tend to be sequential in ascending order. An array is just a collection of related variables that are stored one after another in memory. So when we create an array, we're designating a block of memory addresses to be reserved for the values that we want to store together in order.

- A string is stored as an ordered sequence of unicode characters in memory. We assume each unicode character requires 2 bytes in memory, so a string of 6 characters requires 12 bytes.
- Each location within an array is known as a cell, and each cell's location is described by an integer index from 0, 1, 2, 3. So when we reference an index in an array, the language translates that index into the correct memory address for retrieval and storage.
- In order for an array to access values in constant time, each cell must be the same size so the given the start address of the array in memory, you can use the formula (memory start address + (cell size * index)) to access a value in O(1)

###### Referential Arrays
- In python, each cell size of an array must be the same number of bytes.
- How do you represent an array where each cell value requires a different total number of bytes?
    _i.e - [’Rene’, ’Joseph’, ’Janet’, ’Jonas’ , ’Helen’, ’Virginia’]_
- Python uses an internal storage mechanism using references
- Instead of storing the actual values in the sequential block of memory, python stores the values somewhere else in memory and then stores those memory addresses in sequential order in memory to represent the array [See here](https://www.herevego.com/wp-content/uploads/2020/07/Screenshot-2020-07-26-at-11-compressed.jpg)
- Since the memory addresses are all the same number of bits, python can support constant-time access this way

- A single memory block list can store multiple references to the same object within the same sequence. (i.e. it won't create a new object and memory address with an object and memory address that has already been created). It will just store a reference to the single object however many times that object exists in the list
- Likewise, a single object can be referenced by multiple lists if that same object exists in multiple lists

- When you slice a list, you're creating a new list block in memory but each cell will have the same object refernces that the original list uses. It doesn't duplicate or create new objects & addresses for the new sliced list.

- The referenced object in a list is immutable, so when a cell in a list object changes, it just creates and references a new object instead of updating the current one
- you can use an array.extend() command to add one list to the end of another. The list you're extending receives references to the objects of the list you're adding

###### Compact Arrays
- When an array stores the bits that represent the primary data, this is called a compact array. This is possible when you the cell size of each piece of data is that same.
- A string is implemented as a collection block in memory (an array). Each character of a string is translated into it's unicode equivalent in bits and those bits are stored directly in sequence in memory.
- Benefits of compact arrays
    1. Overall memory usage will be much lower
    2. The primary data is stored consecutively in memory
- Integers can be stored in a compact array because each integer can be stored using the same amount of bits
- In python, a module named `array` provides support for compact arrays and a class also called `array` provides compact storage
```
>>> from array import array
>>> print ( array ( ’i ’ , [1 ,2 ,3 ,4 ,5]) )
```
[See type codes supported by the array module](https://www.w3resource.com/python/library/python_array_module.php)

###### Dynamic Arrays
- When you create an array in a program, you must explicitly specificy the exact number of cells that need to be allocated in memory in order for the system to properly allocate the right size memory block for the collection
- Because the collection block in memory is pre-allocated and the program may store other data next to the collection block in the front and back, you can't easily increase the size of an array by expanding into subsequent cells (Tuples or strings don't have this constraint)
- Python's list class provides an abstraction known as dynamic arrays
    - A dynamic array implementation is constructed with an explicit length, yet the implementation creates greater capacity (more cells than specified) in order to make it easier to append new elements to the list
    - When the capacity has been reached by filling up all available space, the class creates creates a new collection block in memory with added capacity and sets the values of the new array to the values of the filled array. Now you have a new array with all the original values plus extra capacity for adding new values as needed, and the old array gets released back to the system since it's no longer needed
    - A common rule is to increase the capacity of the new array to twice the length of the filled array

- Initialize an empty list
`list =[]`

- That creates the following representation in memory - an empty memory block with length of size 1
> v,v,v,[_],v,v,v,v

- Append value 
`list.append(a)`

- That turns the underlying representation to the following:
> v,v,v,[a],v,v,v,v

- We notice that the memory block for the array is full, so we create a new memory block with size length * 2
- We set the values of the old array to the values of the new array, and release the reference to the old array
> j,j,j,j,[a,_,],j,j,j