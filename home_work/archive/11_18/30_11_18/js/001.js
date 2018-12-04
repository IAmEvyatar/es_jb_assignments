n = prompt('Enter your number');
rows = 0;
column = 0;
brush = "*";
output = ""

while ( rows < n ) {
	while ( column < n ){
		output = output + brush;
		column = column + 1;
	}
	console.log(output);
	rows = rows + 1;
}
