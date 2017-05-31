
var a = prompt('first number');
var b = prompt('second number');

//działanie
value = (a * a) + (2 * a * b) - (b * b);
console.log('result of operation ' + value);

//instrukcja warunkowa
if (value > 0) {
 console.log('result positive');
}
else if (value < 0) {
    console.log('result negative');
}
else {
    console.log('result zero');
    alert('result zero!');
}
