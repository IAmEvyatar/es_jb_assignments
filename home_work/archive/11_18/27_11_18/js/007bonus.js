hours = 0;
mins = 0;
zero = '0';
print = 0;
while (hours < 23) {
	mins = 0;
	while(mins < 60) {
		print = hours + ":" + mins;
		if ( hours <= 9 ) {
			print = zero + hours + ':' + mins;
		}
	   if(mins <= 9) {
			print = hours + ':' + zero + mins;
		}
		if (hours <= 9 && mins <= 9) {
			print = zero + hours + ':' + zero + mins;
		}    

		mins = mins + 1;
		console.log(print);
	}
    hours = hours + 1;
}
