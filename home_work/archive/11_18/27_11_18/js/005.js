input = prompt('enter message');
newInput = '';
while (newInput!='stop' && input !='stop') {
	input = input + ' ' + newInput;
	newInput = prompt('enter message');
}
console.log(input);