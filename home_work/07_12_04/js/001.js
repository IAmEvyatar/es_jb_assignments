var someVar = 1;

function myIncrement(a) {
	return a + 1;
}
// someVar = 1
console.log(someVar);

someVar = myIncrement(someVar);
// someVar = 2
console.log(someVar);

myIncrement(someVar);
// someVar = 2
console.log(someVar)

someVar = myIncrement(someVar);
// someVar = 3
console.log(someVar)