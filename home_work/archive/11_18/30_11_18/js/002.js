m = prompt('Enter length');
n = prompt('Enter width');
rows = 0;
column = 0;
brush = "*";
output = ""
while ( rows < m ) {
	while ( column < n ){
		output = output + brush;
		column = column + 1;
	}
	console.log(output);
	rows = rows + 1;
}
