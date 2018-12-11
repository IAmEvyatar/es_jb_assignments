var myCalc = {
	add:function(a,b) {
		var sum;
		sum = a + b;
		return sum;
	},
	multiply:function(a,b) {
		var sum;
		sum = a * b;
		return sum;
	},
	subtract:function(a,b) {
		var sum;
		sum = a - b;
		return sum;
	},
	divide:function(a,b) {
		var sum;
		sum = a / b;
		return sum;
	},
};
i = myCalc.add(10,5);
j = myCalc.multiply(10,5);
k = myCalc.subtract(10,5);
l = myCalc.divide(10,5);
console.log(i,j,k,l);
