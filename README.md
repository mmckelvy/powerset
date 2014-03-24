A simple module for working with the power set (all subsets of a given set).

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

The total number of subsets of any given set is equal to *2^n*, where *n* is the number of elements in the original set.  Thus a set with 3 elements will have 8 total subsets (2^3 = 8), including the empty set ("[ ]").  The fact that the number of subsets can be expressed as a power of 2 is particularly convenient, as it means you can map each subset to a binary number.  This is the approach I have taken.      

"Sets" are modeled as arrays in this module.  Thus the power set of a given set will be an array of arrays (e.g. `[ [0, 1], [1, 2] ]`).    

This module includes three core functions, three helper functions, and a series of tests.  The included functions are as follows:

#### Core functions

1. `listPowerSet` lists all the sub arrays of a given array.
1. `sumPowerSet` calculates the sum of the power set of a given array.
1. `checkLargest` checks to see if the sum of any combination of values in an array is equivalent to the array's largest value.

#### Helper functions
1. `repeatString` repeats a string a given number of times.
1. `compareArrays` checks for equality of two arrays.
1. `expects` provides pass / fail confirmation messages for the tests.

For more detailed descriptions including syntax, parameters, and methodologies, see the API below.

# API

The powerset module exposes the three core functions listed above through the `powerSetModule` object.

#### powerSetModule.listPowerSet(arr)

+ description: lists all the subarrays of a given array.  Accomplishes this by mapping each subset to a particular binary number.  No recursion is involved.
+ param: `arr` is any array (e.g. `[1, 23, 4]` ).  Any data type is permitted.  Nested arrays are permitted, but the nested arrays will be treated as a single element.    
+ returns: an array of arrays.

###### Example:
	
```
powerSetModule.listPowerSet( [1, 2, 3] );
//
[
	[ ],
	[3],
	[2],
	[2, 3],
	[1],
	[1, 3],
	[1, 2],
	[1, 2, 3]
]
```
#### powerSetModule.sumPowerSet(arr)

+ description: calculates the power set and then sums the results.
+ param: `arr` is any single level, numerical array (e.g. `[1, 3, 4, 8]` ).  Will not work on nested arrays or non-numerical values.
+ returns: a single number.

###### Example: 

```
powerSetModule.sumPowerSet( [1, 2, 3] );
// 24 

powerSetModule.sumPowerSet( [2, 3, 4, 5] );
// 112

```

#### powerSetModule.checkLargest(arr)

+ description: Checks to see if the sum of any combination of values in an array is equivalent to the array's largest value.
+ param: `arr` is any single level, numerical array (e.g. `[1, 3, 4, 8]` ).  Will not work on nested arrays or non-numerical values.
+ returns: a boolean value.

###### Example:

```
powerSetModule.checkLargest( [20, 5, 5, 5, 5] );
// true

powerSetModule.checkLargest( [29, 6, 4, 1, 12] );
// false

```



