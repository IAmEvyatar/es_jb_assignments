function myAverage(arr) {
	var sum = 0;
	var avg = 0;
	for (i=0; i < arr.length; i++) {
		sum = sum + arr[i];
		avg = sum / (i + 1);
	}
		console.log(avg);
}
var myArray1 = [10, 20];
myAverage(myArray1);
var myArray2 = [10, 20, 30];
myAverage(myArray2);
