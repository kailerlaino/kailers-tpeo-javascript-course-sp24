/**
 * prints out powers of three up to 3^9 or 19683
 * My favorite number is 3^7 or 2187
 */
function powersOfThree() {
    for (var num = 1; num <= 19683; num *= 3) {
        console.log(num);
        if (num == 7) {
            console.log("This is my favorite power of three!");
        }
    }
}

powersOfThree(); // we expect to print 1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683
/**
 * prints out "Hello World!" to the terminal every 10 seconds for a total of 2 minutes
 * 
 */
function everyTenSeconds() {
    var intervalId = setInterval(console.log, 10000, "Hello World!");
    setTimeout(clearInterval, 130000, intervalId);
}

everyTenSeconds(); // we expect Hello World! to be printed 12 times in 2 minutes