function diceCreator() {
	return {
		roll:function() {
			var roll = Math.floor(Math.random() * 6) + 1;
			return this.lastRoll = roll;
		},
		
	}
}
var dice1 = diceCreator();
console.log(dice1.roll());
console.log(dice1.lastRoll);
console.log(dice1.roll());
console.log(dice1.lastRoll);





