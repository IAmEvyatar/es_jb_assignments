input = prompt('enter number');
input = Number(input);
spacerLoop = input;
brush = "*";
space = "";
counter = 0;
if(input % 2 == 0) {
	outPut = "**";
} else {
	outPut = "*";
}
for(i = 0; i <= input; i = i + 2) {
	for(spacerLoop; spacerLoop >= 0; spacerLoop = spacerLoop - 1) {
		space = space + " ";
	}
	counter = counter + 1
	spacerLoop = input - counter;
	console.log(space, outPut)
	outPut = outPut + "**"
	space = "";
   }
		

	