---
title: 'Understanding Recursion from first principles'
date: '2021-01-15'
tag: Engineering
---

##### Recursion

__Function Invocation__
- Calling a function places an execution context onto the execution stack. 

##### Stack
A **Stack** is a "last thing that was pushed onto it is the first thing that gets popped off of it" data structure. Using a stack allows you to order operations for execution

##### Execution Context
An **Execution Context** is created when a function is called. This context has properties from the function including parameters passed, declared variables, and function declarations. (Pretty much everything that's relevant to that function call is included in the execution context). This execution context places itself onto the execution stack

- Every time a new context is placed onto the execution stack, we usually have everything we need to execute the code. __Usually__, because of recursion.

- With recursion, you're waiting for values to come in from other execution contexts that are higher up on the stack. When the current item on the stack finishes execution, it's return value get's passed down to the next execution context on the stack.

##### What is recursion?
1. A recursive function is a function that calls itself until a **base condition** is true and execution stops.
2. For a recursive function to work, there must be some requirement(s) that can be satisfied.
3. Until that requirement is satisfied, new execution contexts get created and placed onto the stack.
4. This may happen until we run out of memory to hold items in the stack - a stack overflow.

**A recursive function has at least two parts**
1. A base condition that stops all execution
2. At least one recursive case

**Because we break the problem down into smaller parts, recursion is a divide-and-conquer approach to solving problems.**

- Sub-problems are easier to solve than the original problem
- Solutions to sub-problems are combined to solve the original problem

“Divide-and-conquer” is most often used to traverse or search data structures such as binary search trees, graphs, and heaps. It also works for many sorting algorithms, like quicksort and heapsort.

##### Heap's Algorithm for Generating Permutations
Heap's algorithm is an algorithm for generating permutations by swapping element's in place
- Because of this, it uses little memory and could generate the next unique permutation from any permutation result

