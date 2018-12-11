	myArr = ['Hi', 6, 'string', 2, (45 + 2), 55, 'Yo'];
	myArr2 = ['Yo', 0, 'Wazzup', 13, 14, 15, 16, 17];
	arrName = prompt('Name of array to copy from');
	sta = Number(prompt('Strarting number'));
	end = Number(prompt('Ending number (optional)'));
function mySlice(a, b, c) {
	a = eval(a);
	if(!c || c > a.length) {
		c = a.length;
	}
	var newArr = [];
	for(i = 0, b -= 1; b < c; b++, i++){
		newArr[i] = a[b];
	}
	return newArr;
}
newArr = mySlice(arrName,sta,end);
console.log(newArr)