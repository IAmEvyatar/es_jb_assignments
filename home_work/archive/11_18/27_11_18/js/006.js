input = prompt('enter message');
newInput = '';
while (newInput!='stop' && input !='stop') {
	input = newInput + ' ' + input;
	newInput = prompt('enter message');
}
console.log(input);