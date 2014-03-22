var powerSetModule = (function () {
	// Repeat string function.  Necessary for leading zeros in binary mapping function.
	var repeatString = function (str, num) {
		strArr = [];
		for (var i = 0; i < num; i++) {
			strArr.push(str);
		}
		var reptStr = strArr.join('');

		return reptStr;
	};


	// Returns all subsets of an array (the power set).  Takes an array as an argument.
	var listPowerSet = function (arr) {
		// Initialize array to hold the power set.
		var powerSet = [];
		// Initialize array to hold the binary map.
		var binArr = [];
		// Calculate the number of subsets in the array (2^n).
		var powerSetLength = Math.pow(2, arr.length);
		// Get number of placeholders necessary to properly map the binary digits.
		var totalDigits = arr.length;

		// Loop from 1 to powerSet (2^n)
		for (var i = 0; i < powerSetLength; i++) {
			// Convert the count to binary
			var count = i.toString(2);
			// Get the number of leading zeros necessary (total necessary - total digits in count).
			var leading = totalDigits - count.length;
			// Create the necessary leading zeros.
			var zeros = repeatString("0", leading);
			// Add them to the count.
			var binMap = zeros + count;
			// Create an array to hold the subset according to the binMap.
			var subSet = [];
			// console.log(binMap);
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
		summedSet = powerSet.reduce(function (a, b) {
			return a + b;
		});

		return {
			reduceSet: powerSet, // The results of reducing the nested arrays.  Needed for the checkLargest function.
			summedSet: summedSet
		};

	};

	var checkLargest = function (arr) {
		var largest = Math.max.apply(null, arr);
		var largestIndex = arr.indexOf(largest);
		// Remove the largest number from the array.
		arr.splice(largestIndex, 1);
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
