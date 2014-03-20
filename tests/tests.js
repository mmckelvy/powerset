var testModule = (function () {
	/*
	Helper functions
	*/
	
	// Compare two arrays
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
			else if (testArray[i] !== actualArray[i]) {
				return false;
			}
		}
		return true;
	};

	/**************************
	Tests (add some text here).
	***************************/
	
	// compareArrays tests.
	// All arrays to the next comment are the same (e.g. caTestArray1 === caActualArray1).
	var caTestArray1 = [1, 2, 3, 4];
	var caActualArray1 = [1, 2, 3, 4];
	
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
	
	var caTestArray3 = [ 'apple', 'orange', 1, 3, [2, 3] ];
	var caActualArray3 = [ 'apple', 'orange', 1, 3, [2, 3] ];
	// End first set of test / actual arrays.

	// All arrays to the next comment are different (e.g. caTestArray1 !== caActualArray1).
	var caTestArray4 = [1, 7, 8, 4];
	var caActualArray4 = [1, 2, 3, 4];
	
	var caTestArray5 = [
		[0, 1],
		[1, 3, 3],
		[1, 3, 9, 5],
		[2, 3]
		[0, 4]
	];
	var caActualArray5 = [
		[0, 1],
		[1, 3],
		[1, 3],
		[2, 3]
		[3, 4]
	];
	
	var caTestArray6 = [ 'banana', 'orange', 7, 5, [8, 3] ];
	var caActualArray6 = [ 'apple', 'orange', 1, 3, [2, 3] ];
	// End second set of test / actual arrays.


	// Actual tests.
	console.log( compareArrays(caTestArray1, caActualArray1) );  // Should return 'true'.
	console.log( compareArrays(caTestArray2, caActualArray2) );  // Should return 'true'.
	console.log( compareArrays(caTestArray3, caActualArray3) );  // Should return 'true'.
	console.log( compareArrays(caTestArray4, caActualArray4) );  // Should return 'false'.
	console.log( compareArrays(caTestArray5, caActualArray5) );  // Should return 'false'.
	console.log( compareArrays(caTestArray6, caActualArray6) );  // Should return 'false'.


	// Power set tests.
	var array1 = [1, 2, 3];
	// Correct power set for the above array.
	var psTestArr1 = [
		[],
		[3],
		[2],
		[2, 3],
		[1],
		[1, 3],
		[1, 2],
		[1, 2, 3]
	];
	// Power set from the function call.
	var functionArr1 = powerSetModule.listPowerSet(array1);
	console.log(compareArrays(psTestArr1, functionArr1));



})();



