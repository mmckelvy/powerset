describe("listPowerSet", function() {
	var firstArray = [1, 2, 3];
	var fullPowerSet = [
		[],
		[3],
		[2],
		[2, 3],
		[1],
		[1, 3],
		[1, 2],
		[1, 2, 3]
	];
	
	it("should contain all of the possible subsets of a given set", function() {
		expect(powerSetModule.listPowerSet(firstArray)).toContain(fullPowerSet);
	});
});
