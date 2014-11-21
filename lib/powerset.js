/* A module for working with the power set (all subsets of a given set). */

var powerSetModule = (function () {
	/*******************
	Helper functions
	********************/
	
	/*
	function: repeatString
	description: Repeat a given string a specified number of times.
	param: str is the string you want to repeat (e.g. 'a').
	param: num is the number of times you want to repeat the string (e.g. 4).
	returns: the repeated string.
	example: repeatString('a', 4) --> 'aaaa'
	*/

	var repeatString = function (str, num) {
		var strArr = [];
		for (var i = 0; i < num; i++) {
			strArr.push(str);
		}
		var reptStr = strArr.join('');

		return reptStr;
	};

	/*******************
	Main module functions
	********************/
	
	/*
	function: listPowerSet.
	description: Lists all the subsets of a given array.
	param: arr is any array (e.g. [1, 23, 4] ).
	returns: an array of arrays.
	example: listPowerSet([1, 2, 3]) -->
		[],
		[3],
		[2],
		[2, 3],
		[1],
		[1, 3],
		[1, 2],
		[1, 2, 3]
	*/

	var listPowerSet = function (arr) {
		
		var powerSet = []; // Initialize array to hold the power set.
		var binArr = []; // Initialize array to hold the binary map.
		var powerSetLength = Math.pow(2, arr.length); // Calculate the number of subsets in the array (2^n).
		var totalDigits = arr.length; // Get number of placeholders necessary to properly map the binary digits.

		// Loop from 1 to powerSet (2^n)
		for (var i = 0; i < powerSetLength; i++) {
			var count = i.toString(2); // Convert the count to binary (note that these values are strings).
			var leading = totalDigits - count.length; // Get the number of leading zeros necessary (total necessary - total digits in count).
			var zeros = repeatString("0", leading); // Create the necessary leading zeros.
			var binMap = zeros + count; // Add them to the count.
			var subSet = []; // Create an array to hold the subset according to the binMap.
			
			// Create subsets based on binary mapping.
			for (var j = 0; len = binMap.length, j < len; j++) {
				if (binMap[j] === "1") {
					subSet.push(arr[j]);	
				}
			}		
			// Push to the subsets to the power set array.
			powerSet.push(subSet);
		}
		
		return powerSet;
	};
	
	/*
	function: sumPowerSet
	description: Sums all the subsets of a given set.
	param: arr is any single level, numerical array (e.g. [1, 3, 4, 8] ).  Will not work on nested arrays or non-numerical values.
	returns: a single number.
	example: sumPowerSet([1, 2, 3]) --> 24
	*/

	var sumPowerSet = function (arr) {
		var powerSet = listPowerSet(arr);
		
		// Calculate all the sums for each subset.
		for (var k = 0; k < powerSet.length; k++) {
			
			// Set empty sets equal to 0.
			if (powerSet[k].length === 0) {
				powerSet[k] = 0;
			}
			
			// Sum the nested arrays.
			else {
				powerSet[k] = powerSet[k].reduce(function (a, b) {
					return a + b;
				});
			}
		}
		
		// Sum the main array.
		var summedSet = powerSet.reduce(function (a, b) {
			return a + b;
		});

		return {
			reduceSet: powerSet, // The results of reducing the nested arrays.  Needed for the checkLargest function.
			summedSet: summedSet
		};

	};

	/*
	function: checkLargest
	description: Checks to see if the sum of any combination of values in an array is equivalent to the array's largest value.
	param: arr is any single level, numerical array (e.g. [1, 3, 4, 8] ).  Will not work on nested arrays or non-numerical values.
	returns: a boolean value.
	example: checkLargest([20, 5, 5, 5, 5]) --> 'true' (5 + 5 + 5 + 5 === 20)
	*/

	var checkLargest = function (arr) {
		var largest = Math.max.apply(null, arr);
		var largestIndex = arr.indexOf(largest);

		arr.splice(largestIndex, 1); // Remove the largest number from the array.
		var sums = sumPowerSet(arr).reduceSet;
		
		// Check to see if largest number is in the array.
		if (sums.indexOf(largest) === -1) {
			return false;
		}

		else {
			return true;
		}
	};

	// Public
	return {
		listPowerSet: listPowerSet,
		sumPowerSet: sumPowerSet,
		checkLargest: checkLargest
	};

})();
