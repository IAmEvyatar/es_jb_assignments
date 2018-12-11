function runAnotherFunction(a) {
	a();
}
function sayHi() {
	console.log('hi');
}
runAnotherFunction(sayHi);
