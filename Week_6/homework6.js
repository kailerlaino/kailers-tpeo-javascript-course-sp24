// Question 1: Write a function, reverse
function reverse(string) {
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

console.log(reverse("Hello World!")); // prints "!dlroW olleH"
console.log(reverse("Computer Science")); // prints "ecneicS retupmoC"
console.log(reverse("TPEO")); // prints "OEPT"

//Question 2: Write a function, numVowels, that accepts one parameter: string. 
function numVowels(string) {
    var numVowels = 0;
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        var currChar = string[i];
        if (currChar === 'a' || currChar === 'e' || currChar === 'i'
            || currChar === 'o' || currChar === 'u') {
            numVowels++;
        }
    }
    return numVowels;
}

console.log(numVowels("aeiou")); // prints 5
console.log(numVowels("supercalifragilisticexpialidocious")); // prints 16
console.log(numVowels("btyhjklpqw")); // prints 0

//Question 3: Write a function, numStringsShorterThanLength
function numStringsShorterThanLength(strings, length) {
    var numStringsShorterThanLength = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            numStringsShorterThanLength++;
        }
    }
    return numStringsShorterThanLength;
}
console.log(numStringsShorterThanLength(["computer", "science"], 2)); // 0
console.log(numStringsShorterThanLength(["java", "script", "TPEO"], 5)); // 2
console.log(numStringsShorterThanLength(["foo", "baz", "bar", "foobar"], 5)); // 3