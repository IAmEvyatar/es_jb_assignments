hours = 0;
mins = 0;
while(hours < 24) {
	while(mins < 60) {
		console.log(hours, ':' , mins);
		mins = mins + 1;
	}
	mins = 0;
	hours = hours + 1
}  