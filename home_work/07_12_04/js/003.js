var age = 22;
var yob = 0;
function yearOfBirth(a, b) {
	b = new Date().getFullYear() - a;
	console.log(b)
}
// age = 25 yob = nothing
yearOfBirth(age, yob);