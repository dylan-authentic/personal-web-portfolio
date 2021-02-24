---
title: 'Adding Extremely Large Numbers in JavaScript'
date: '2021-01-07'
tag: Engineering
---

### JavaScript: Adding Extremely Large Numbers

###### Number.MAX_SAFE_INTEGER
In JavaScript, the maximum number of bits available to store an integer is 53. In other words, we can only store an integer in JavaScript that can be represented by 53 bits in memory. 

Because of this, JavaScript implements a `MAX_SAFE_INTEGER` value on the `Number` object that stores the largest value available to be used in a program. The term safe refers to the ability for the JavaScript language to hold a one-to-one mapping of an integer value to it's underlying representation. The opposite of this is an unsafe integer, in which the JavaScript language will map two or more integer values to the same underlying representation in memory. In other words, when a value is considered safe, you will constantly have direct access to that value. When a value is unsafe, you will receive the wrong number that you want to use because JavaScript isn't able to correctly hold that value in memory.

**Example**
`Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2`
This statement will return true, which is mathematically incorrect

###### Factorial
A factorial calculation is just the given number multiplied by all the numbers belows it down to 1. 
> I.e: 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 5040

- To be able to multiply large numbers, we must be able to add large numbers in code.
- Since JavaScript can't safely store large numbers, we store them as strings instead

###### Addition in Javascript using Strings
- To implement addition in JavaScript using string values, we simply use the old school way of adding numbers - [see here](https://miro.medium.com/max/714/1*UoHnsUXW3difVD0cdkFGKw.png)
- When using this method, we do a few things:
    1. Determine which value being added has the longest length, this ensures we add all numbers without skipping any
    2. Because this method of addition requires us to add numbers from right to left, we start iteration from the right most value - aka the last value in the string (instead of the left most value - aka the first value in the string)
    3. Iterate over the string from right to left by subtracting `i` from `str.length - 1` - as iteration increases the value of `i`, subtracting that value from `str.length - 1` will allow us to iterate from right to left
- To actually complete the addition process, we:
    1. Get the ith number from str1 and get the ith number from str2
    2. Add those two numbers together with the carry digit and store the sum into a temp variable
    3. Get the right most digit from the temp variable and store it into a singleDigitSum variable
    4. Get the left most digit from the temp variable and update the carry variable with that number
    5. If we've reached the last iteration of str1, append the current temp value to sum
    6. If not, append the current singleDigitSum value to sum 
- Edge Cases:
    1. In adding two numbers, one number may have a different total number of values than the other (i.e. 534 + 22 - In this case, 532 has 3 value and 22 has 2). To solve for this edge case, we first get the value with the longest length and set that as our topNumberLength. This is the length we use to for iteration. Then, when getting the ith number from bottomNumber, we check to make sure a value exists. If a value doesn't exist, we set the value to 0.
    2. The same concept exists with the carry value. Because we know that each iteration will only add two numbers between 0-9, we know that the sum of each iteration will be at most a two digit value (i.e. 9+9 = 18). However, we could also add two numbers in a single iteration that equal to a one digit value (i.e. 3+5 = 8). In this case, when we set our carry variable, the value will be null. To solve this, we check to see if the carry value exists. If it does, we leave the carry value as is. If it doesn't, we set the carry value to 0.