hours = 0;
mins = 0;
while (hours < 23) {
	mins = 0;
	console.log(hours + ':' + mins);
	hours = hours + 1;
	while(mins < 60) {
	console.log(hours + ':' + mins);
		mins = mins +1;
	}
}