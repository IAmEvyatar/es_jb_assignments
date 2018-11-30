input = prompt('enter message');
newInput = '';
while (newInput!='stop' && input !='stop') {
	newInput = prompt('enter message');
	input = input + ',' + newInput;
}
console.log(input);