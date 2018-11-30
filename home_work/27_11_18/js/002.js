input = prompt('enter number');
input = Number(input);
sum = 0;
counter = 0;
while (counter < input) {
	counter = counter + 1;
	sum = sum + "," + counter;
}
console.log(sum);