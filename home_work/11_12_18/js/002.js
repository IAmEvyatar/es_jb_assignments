function printTime() {
	 console.log(new Date());
}
printTime()
// timeout date will appear as current date for that time which is 5 seconds later than first one
setTimeout(printTime, 5000);