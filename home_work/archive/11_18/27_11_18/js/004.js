input = prompt('enter your message');
if (isNaN(input)) {
	console.log('i like ' + input + '!');
} else {
	input = Number(input) + 5;
	console.log(input);
}