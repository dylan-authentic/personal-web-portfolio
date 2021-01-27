---
title: 'Learning Numpy Basics'
date: '2021-01-13'
tag: Study Notes
---

# What is numpy?
- Numpy is a python library that contains multidimensional array and matrix data structures
- Numpy can be used to perform a wide variety of mathematical operations on arrays

###### Numpy Arrays vs Python Lists
- Numpy arrays are faster and consume less memory than standard lists in python
- **All of the elements in a numpy array should be the same**

Access the number of dimensions on a numpy array using `rank` and access the size of the array using `shape`
- shape returns a tuple that specifies the size of each dimension of the array for multi-dimensional arrays

**Initialize numpy arrays from python lists and use nested lists for 2d/3d arrays**
```
a = np.array([1, 2, 3, 4])
b = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9])
```

###### Multi-Dimensional Arrays in NumPy
- Ndarry is short for N-Dimensional Array
- A vector refers to a 1-dimensional array in which there's no difference between rows and columns
- A matrix refers to a 2-dimensional array with rows and columns
- A tensor refers to 3-dimensional arrays or higher

[Reference](https://numpy.org/devdocs/user/absolute_beginners.html#how-to-get-unique-items-and-counts)