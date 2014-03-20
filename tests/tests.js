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

	/*
	Tests (add some text here).
	*/
	
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



