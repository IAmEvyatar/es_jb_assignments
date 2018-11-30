input = prompt('enter your number');
input = Number(input);
top = 0;
while (input > 0) {
	
if (isNaN(input)){
	console.log(top);
	break;
} else {
	input = prompt('Enter Your number') ;
	if (input > top) {
		top = input;
	}
} }
console.log(top);