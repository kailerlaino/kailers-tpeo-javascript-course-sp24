function countUpwardsByThree() {
    for (let i = 0; i <= 30; i += 3) {
        console.log(i);
    }
}

countUpwardsByThree(); // 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30

function guessMyFavoriteNumber(guess) {
    if (guess == 2005) {
        console.log("You got it!");
    } else {
        console.log("Try again!");
    }
}

guessMyFavoriteNumber(0); // Try again!
guessMyFavoriteNumber(7); // Try again!
guessMyFavoriteNumber(1337); // Try again!
guessMyFavoriteNumber(2005); // You got it!

function convertNumberToDay(number) {
    switch (number) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Not a valid day");
    }
}

convertNumberToDay(0); // Sunday
convertNumberToDay(1); // Monday
convertNumberToDay(2); // Tuesday
convertNumberToDay(3); // Wednesday
convertNumberToDay(4); // Thursday
convertNumberToDay(5); // Friday
convertNumberToDay(6); // Saturday