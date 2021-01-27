---
title: 'Practicing Permutations'
date: '2021-01-14'
tag: Study Notes
---

# Permutations
A permutation is a function that re-arranges the order of items in a sequence
> What are the number of ways we can arrange things?

- To get the permutations between two available spaces, you multiply the total options available that can go in each space.
- Given a total number of available options and a given number of spaces to fill, this tells you how many different arrangements can be created out of those options

- Determining permutations is about determining for a given amount of "spaces", how many options are available to sit in a specific space.
    - Given 1 spaces and 5 options, there are 5 different permutations 
    - Given 2 spaces and 5 options, there are 5 different options for the first space and for those 5 different options, there are 4 different options available for the second space
    `5 x 4 = 20 permutations`

- For every additional space available, your increasing the total number of permutations times the number of available options left because each individual permutation already created is being increased by the number of available options left

__Additional handwritten notes are not shown, but notes are referenced from Khan Academy__