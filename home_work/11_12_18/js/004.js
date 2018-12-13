var game = {
	dice: 0,
	play:function() {
		var roll = 0
		for(i = 0; i < 2; i++) {
			roll = Math.floor(Math.random() * 6) + 1;
			game.dice += roll;
		}
		return game.didPlayerWin()
	},
	didPlayerWin:function() {
	var print;
	game.dice >= 7 ? print = 'you win!' : print = 'you lost, try again!';
	console.log(print, 'Your score is:', game.dice);
	},
}
game.play();


