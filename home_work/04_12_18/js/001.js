myArray = ["", "String", 5, 0, (5>10), true, false, "what?"];
for ( i = 0; i < myArray.length; i++ ) {
myArray[i] ? console.log('-',myArray[i],'-', ' This value is truthy') : console.log('-',myArray[i],'-', ' This value is Falsy')
}