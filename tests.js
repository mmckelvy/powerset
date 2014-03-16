// TEST SUITE


var assertArraysEqual = function (expected, actual) {
	if (expected !== actual) {
		console.error("Expected", expected, "but received", actual);
	}
	else {
		console.log("PASSED", expected, "equals", actual);
	}
};


// TESTS
var firstArray = [1, 2, 3];
var firstExpected = [
	[],
	[3],
	[2],
	[2, 3],
	[1],
	[1, 3],
	[1, 2],
	[1, 2, 3]
];
var firstActual = powerSetModule.listPowerSet(firstArray);
assertArraysEqual(firstExpected, firstActual);

for (var i = 0; i < 8; i++) {
	console.log(firstActual[i]);

}

console.log(firstExpected[7]);
