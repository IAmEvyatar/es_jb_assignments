n = prompt('Enter your number');
n = Number(n);
leftOver = n % 9;
switch(leftOver) {
	case 1:
	case 4:
	case 6:
		console.log(n * 8);
		break;
	case 2:
		console.log(n / 5);
		break;
	case 5: console.log(n + 20);
		break;
	default:
		console.log('Try again');
}