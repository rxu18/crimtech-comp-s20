Here are my responses:


The function above checks whether the string assigned to y contains the substring 'hello'

This function repeats the string assigned to y ten times and concatenates them together

function square(i) {
  return i * i;   // The function returns the product of p1 and p2
}

square() has no problem squaring non-integer 2.5, but returns an error NaN for having a string instead of a number
square(x)
When x is 420, square(x) returns 176400

function square(i){
if (typeof i != "number")
    return(-1);
else
    return(i * i);
}

Square() now returns -1 for non numeric i's

function numberString(i) {
    var start = 1;
    var x = "";
    if (i <1)
        return(-1);
    for (let k = start; k <= i; k++) {
        x = x + k + " ";
    }
console.log(x);
    }
