N = Number(prompt('Enter your number'));

function loopDown(N) {
	for (N; N >= 0; N -= 1) {
		console.log(N)
	}
}
function loopUp(N) {
	for (i = 0; i <= N; i++) {
		console.log(i)
	}
}
N % 2 == 0 ? loopDown(N) : loopUp(N);
