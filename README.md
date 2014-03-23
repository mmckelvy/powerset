A module for working with the power set (all subsets of a given set).

# Installation
Clone the repo and include via script tags if used on the client side and "require" if used on the server. I haven't uploaded to npm or bower yet.

# Tests
Open "runner.html" in your browser and view the dev tools console. JS source file is tests/tests.js.  I've structured the tests in such a way that you can quickly see the relevant tests.js line number for each test and audit accordingly.

# Overview
The power set is the mathematical term for all the subsets of a given set. For example, the power set of [1, 2, 3] would be:
+ [ ],
+ [3],
+ [2],
+ [2, 3],
+ [1],
+ [1, 3],
+ [1, 2],
+ [1, 2, 3]

In a programming context, you can think about "sets" as arrays.  Thus the power set of a given set will be an array of arrays (e.g. [ [0, 1], [1, 2] ], which is how it is represented in this module.    

This module includes three core functions, two helper functions, and a series of tests.  The included functions are as follows:

#### Core functions

1. **listPowerSet**: Lists all the sub arrays of a given array.
1. **sumPowerSet**: Calculates the sum of the power set of a given array.
1. **checkLargest**: Checks to see if the sum of any combination of values in an array is equivalent to the array's largest value.

#### Helper functions
1. **repeatString**: Repeats a string a given number of times.
1. **compareArrays**: Checks for equality of two arrays.

For more detailed descriptions including syntax, parameters, and methodologies, see the API below.

# API

