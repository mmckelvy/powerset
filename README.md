A module for working with the power set (all subsets of a given set).

# Installation
Clone the repo and include via script tags if used on the client side and 'require' if used on the server. I haven't uploaded to npm or bower yet.

# Tests
Open 'runner.html' and view the console. JS source file is tests/tests.js.  I've structured the tests in such a way that you can quickly see the relevant tests.js line number for each test and audit accordingly.

# A brief word on the power set
The power set is the mathematical term for all the subsets of a given set. For example, the power set of [1, 2, 3] would be:
+ [ ],
+ [3],
+ [2],
+ [2, 3],
+ [1],
+ [1, 3],
+ [1, 2],
+ [1, 2, 3]

In a programming context, the power set translates into all the sub arrays of a given array.

# API

