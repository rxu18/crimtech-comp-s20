B. Programming in JavaScript:

var x = 42;
console.log(x);
x += 378;
console.log(x);
y = "Eric"
console.log(y + x);

function square(x) {
    console.log(x*x);
}

What happens when you call square(2.5)?
6.25

Or square("hello")?
NaN

What happens when you change the variable i to x?
Nothing

function square(x) {
    if (typeof(x) != "number") {
        return -1;
    }
    return (x*x);
}

function numberString(x) {
    if (typeof(x) != "number" || x < 1) {
        return -1;
    }
    if (x == 1) {
        return "1";
    } else {
        return numberString(x-1) + x.toString();
    }
}
