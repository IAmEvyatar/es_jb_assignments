var game = {
	dice: 0,
	play:function() {
		game.dice += (Math.floor(Math.random() * 6) + 1)*2;
		return game.didPlayerWin()
	},
	didPlayerWin:function() {
	var print;
	game.dice >= 7 ? print = 'you win!' : print = 'you lost, try again!';
	console.log(print, 'Your score is:', game.dice);
	},
}
game.play();


