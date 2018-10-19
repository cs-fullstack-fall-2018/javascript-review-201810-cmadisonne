//October JavaScript Review Exercises

function main() {
    // range();
    // multiply();
    calc();
}

//Integer Numbers Range
function range() {
    var x1 = 11;
    var x2 = -5;
    for (x = x2 + 1; x < x1; x++) {
        console.log(x)
    }
}

//Multiplications Table
function multiply() {
    for (a = 0; a < 11; a++) {

    }

}

//Multiplication On Demand

//Calculation
function calc() {
    for (var x=0; x<500;x++ ) {
        var result =x % 23;
        if (result === 0) {
            console.log(x);
            var sum = 0;
            sum += x;
        }
    }
    console.log("Sum: ", sum)
}


main();