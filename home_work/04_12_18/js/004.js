end = 0;
arraya = ['Hi', 6, 'string', 2, (45 + 2), 55, 'Yo'];
arrName = prompt('Name of array to copy from');
ind = Number(prompt('Strarting number'));
end = Number(prompt('Ending number (optional)'));
function mySlice(arrName, ind, end) {
	newArr = [];
	if(end == 0 || end == NaN) {
		end = arrName.length;
	}
	
	for(ind; ind <= end && ind <= arrName.length; ind++) {
		arrName[ind] == undefined ? newArr[ind] == 'undefined' : console.log(arrName[ind]);
	}
	return newArr;
}
mySlice(arrName, ind, end);
console.log(newArr);