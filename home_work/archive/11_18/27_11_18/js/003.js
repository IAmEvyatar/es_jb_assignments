var x = NaN;
while (isNaN(x)) {
    x = prompt('please enter number');
    x = Number(x);
}
console.log(x);