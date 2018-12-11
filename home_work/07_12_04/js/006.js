function addNumberToArray(arr, numToAdd) {
	for(i = 0; i < arr.length; i++) {
		arr[i] += numToAdd;
	}
	return arr;
}
var myArr1 = [10, 11, 12, 13, 14, 15];
var myArr2 = addNumberToArray(myArr1, 5);
console.log(myArr2)