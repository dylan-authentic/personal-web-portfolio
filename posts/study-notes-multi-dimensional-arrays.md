---
title: 'Understanding Multi-Dimensional Arrays'
date: '2021-01-11'
tag: Study Notes
---

# Multi-Dimensional Arrays

Before approaching multi-dimensional arrays, it's important to understand the concept of [matrices](https://en.wikipedia.org/wiki/Matrix_(mathematics)).
> A matrix is a contiguous collection of elements arranged in rows and columns. (Typically resembling a rectangular array) __Row = the elements that are aligned from side to side; Column = the elements that are aligned from top to bottom__
The following is an example of a 2 x 3 matrix (2 rows, 3 columns)
```
[[1   9   -13]
 [20  5   -6]]
 ```
 1. Typically, each matrix has the same number of rows and columns - thus two matrices can be added or subtracted element by element.
 2. In order to do matrix multiplication, the number of columns in the first matrix must be equal to the number of rows in the second matrix

## Memory Allocation for Multi-Dimensional Arrays 
###### Row-major vs Column-Major
- **Row-major** memory allocation **for 2D arrays** places the elements of the first row right after each other in a contiguous memory block, then the second, and so on...
- **Column-major** memory allocation **for 2D arrays** places the elements of the first column right after each other in a contiguous memory block, then the second column, and so on...

> In my own words, the row-major memory layout organizes the elements of a matrix by row into a sequential memory block, and the column-major memory layout organizes the elements of a matrix by column into a sequential memory block

[See Row Major Layout Visual](https://eli.thegreenplace.net/images/2015/row-major-2D.png)
[See Column Major Layout Visual](https://eli.thegreenplace.net/images/2015/column-major-2D.png)

__Note for programming purposes: In a row-major memory layout, the column indices change the fastest (vice versa for column-major)__

[Reference](https://eli.thegreenplace.net/2015/memory-layout-of-multi-dimensional-arrays)