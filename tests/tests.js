var testModule = (function () {
	
	/*******************
	Helper functions
	********************/
	
	/*
	function: compareArrays.
	description: Compare two arrays, check for equality.  Works for any array with the exception of arrays of objects.
	param: testArray is the baseline / correct array value.
	param: actualArray is any array that you want to check.
	returns: a boolean value.
	example: compareArrays([1, 2, 3], [1, 2, 3]) --> 'true'
	*/

	var compareArrays = function (testArray, actualArray) {
		// Check to ensure the actualArray is not a falsey value.
		if (!actualArray)
			return false;

		// Ensure that the arrays have the same length
		if (testArray.length !== actualArray.length)
			return false;

		// Check each element in the respective arrays to ensure equality
		for (var i = 0, len = testArray.length; i < len; i++) {
			// Check for nested arrays
			if (testArray[i] instanceof Array && actualArray[i] instanceof Array) {
				// Nested array recursion
				if ( !(compareArrays(testArray[i], actualArray[i])) ) {
					return false;
				}
			}
			// Base case - check individual array elements.
			else if (testArray[i] !== actualArray[i]) {
				return false;
			}
		}
		return true;
	};

	// Provide pass / fail confirmation messages.
	var expects = function (expected, actual) {
		passMsg = 'Test passed. Expected ' + expected + ' and received the correct value.';
		failMsg = 'Test failed. Expected ' + expected + ' and received ' + actual + '.';
		if (expected === actual) {
			return passMsg;
		}

		else {
			return failMsg;
		}
	};

	/**************************
	Tests

	functions tested:
	(1) compareArrays (this module)
	(2) listPowerSet (powerSet module)
	(3) sumPowerSet (powerSet module)
	(4) checkLargest (powerSet module)
	***************************/
	
	// ---- compareArrays tests ----
	console.log('--- compareArrays tests ---');

	// Should return 'true' when all elements in both arrays are the same.
	var caTestArray1 = [1, 2, 3, 4];
	var caActualArray1 = [1, 2, 3, 4];
	
	var testResult1 = expects( true, compareArrays(caTestArray1, caActualArray1) );
	console.log(testResult1);

	// Should return 'true' when elements in nested arrays are the same.
	var caTestArray2 = [
		[0, 1],
		[1, 3],
		[1, 3],
		[2, 3]
		[3, 4]
	];
	var caActualArray2 = [
		[0, 1],
		[1, 3],
		[1, 3],
		[2, 3]
		[3, 4]
	];
	
	var testResult2 = expects( true, compareArrays(caTestArray2, caActualArray2) );
	console.log(testResult2);

	// Should return 'true' when all elements are the same regardless of data type.
	var caTestArray3 = [ 'apple', 'orange', 1, 3, [2, 3] ];
	var caActualArray3 = [ 'apple', 'orange', 1, 3, [2, 3] ];

	var testResult3 = expects( true, compareArrays(caTestArray3, caActualArray3) );
	console.log(testResult3);

	// Should return 'false' when array elements are different.
	var caTestArray4 = [1, 7, 8, 4];
	var caActualArray4 = [1, 2, 3, 4];

	var testResult4 = expects( false, compareArrays(caTestArray4, caActualArray4) );
	console.log(testResult4);

	// Should return 'false' when elements in nested arrays are different.
	var caTestArray5 = [
		[0, 1],
		[1, 3, 3],
		[1, 3, 9, 5],
		[2, 3],
		[0, 4]
	];
	var caActualArray5 = [
		[0, 1],
		[1, 3],
		[1, 3],
		[2, 3],
		[3, 4]
	];
	
	var testResult5 = expects( false, compareArrays(caTestArray5, caActualArray5) );
	console.log(testResult5);
	
	// Should return 'false' when array elements are different regardless of data type. 
	var caTestArray6 = [ 'banana', 'orange', 7, 5, [8, 3] ];
	var caActualArray6 = [ 'apple', 'orange', 1, 3, [2, 3] ];
	
	var testResult6 = expects( false, compareArrays(caTestArray6, caActualArray6) );
	console.log(testResult6);

	// Should return false given a falsey value for the actualArray.
	var caTestArray7 = [ 'banana', 'orange', 7, 5, [8, 3] ];
	var caActualArray7 = null;

	var testResult7 = expects( false, compareArrays(caTestArray7, caActualArray7) );
	console.log(testResult7);

	// Should return true even with a falsey value inside the array, as long as the arrays are equal.
	var caTestArray8 = [1, 2, null];
	var caActualArray8 = [1, 2, null];

	var testResult8 = expects( true, compareArrays(caTestArray8, caActualArray8) );
	console.log(testResult8);
	
	// ---- listPowerSet tests ----
	console.log('--- listPowerSet tests ---');
	
	// Should list all the correct subsets of a given array.
	var baseArray1 = [1, 2, 3];

	var lpTestArray1 = [
		[],
		[3],
		[2],
		[2, 3],
		[1],
		[1, 3],
		[1, 2],
		[1, 2, 3]
	];

	var lpActualArray1 = powerSetModule.listPowerSet(baseArray1);

	var testResult9 = expects( true, compareArrays(lpTestArray1, lpActualArray1) );
	console.log(testResult9);

	// Should contain 2^array.length elements.
	var baseArray2 = [1, 3, 4, 8, 9, 3, 7];
	lpTestLength = 128;
	lpActualLength = powerSetModule.listPowerSet(baseArray2).length;

	var testResult10 = expects(lpTestLength, lpActualLength);
	console.log(testResult10);

	// Should list all the correct subsets for all data types.

	var baseArray3 = [1, 'apple', 'orange'];
	var lpTestArray2 = [
		[],
		['orange'],
		['apple'],
		['apple', 'orange'],
		[1],
		[1, 'orange'],
		[1, 'apple'],
		[1, 'apple', 'orange']
	];

	lpActualArray2 = powerSetModule.listPowerSet(baseArray3);
	var testResult11 = expects( true, compareArrays(lpTestArray2, lpActualArray2) );
	console.log(testResult11);

	// Should work on nested arrays.
	var baseArray3 = [1, [2, 3], 4];
	var lpTestArray3 = [
		[],
		[4],
		[ [2, 3] ],
		[ [2, 3], 4],
		[1],
		[1, 4],
		[1, [2, 3] ],
		[1, [2, 3], 4]
	];

	lpActualArray3 = powerSetModule.listPowerSet(baseArray3);
	var testResult12 = expects( true, compareArrays(lpTestArray3, lpActualArray3) );
	console.log(testResult12);

	// ---- sumPowerSet tests ----
	console.log('--- sumPowerSet tests ---');

	// Should return the correct sum of all the subsets of a given set.
	var spTestVal1 = 24; // Using baseArray1.
	var spActualVal1 = powerSetModule.sumPowerSet(baseArray1);
	var testResult13 = expects(spTestVal1, spActualVal1);
	console.log(testResult13);

	// Should return the correct sum of all the subsets of a given set, with different numbers.
	var baseArray4 = [2, 3, 4, 5];
	var spTestVal2 = 112; // Using baseArray4.
	var spActualVal2 = powerSetModule.sumPowerSet(baseArray4);
	var testResult14 = expects(spTestVal2, spActualVal2);
	console.log(testResult14);	

	// --- checkLargest tests ---
	console.log('--- checkLargest tests ---');	
	
	// Should return 'true' when the other elements in the set add up to the largest number.
	var baseArray5 = [20, 5, 5, 5, 5]; // 5 + 5 + 5 + 5 === 20.
	var clActualVal1 = powerSetModule.checkLargest(baseArray5);
	var testResult15 = expects(true, clActualVal1);
	console.log(testResult15);

	// Should return 'false' when the other elements in the set do not add up to the largest number.
	var baseArray6 = [29, 6, 4, 1, 12]; // No combination of 6, 4, 1, 12 === 29.
	var clActualVal2 = powerSetModule.checkLargest(baseArray6);
	var testResult16 = expects(false, clActualVal2);
	console.log(testResult16);

})();



