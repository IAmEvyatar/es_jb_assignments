
function isNumberPositive(x) {
	var bul;
	x > 0 ? bul = true : bul = false;
	return bul;
}

function absoluteValue(x) {
	var bul = isNumberPositive(x);
	if (!bul) {
		x *= -1;
	}	
	return x;
}

x = absoluteValue(-11);
console.log(x);
x = absoluteValue(-131);
console.log(x);
x = absoluteValue(141);
console.log(x);
