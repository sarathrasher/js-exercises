var addMatrix = require('./addMatrix');
var cipher = require('./cipher');
var decipher = require('./decipher');
var factor = require('./factor');
var leetSpeak = require('./leetSpeak');
var longVowels = require('./longVowels');
var multMatrix = require('./multMatrix');
var positiveNumbers = require('./positiveNumbers');
var printBanner = require('./printBanner');
var printBox = require('./printBox');
var printNumbers = require('./printNumbers');
var printSquare = require('./printSquare');
var sumNumbers = require('./sumNumbers');

var matrix1 = [[2, 4], 
              [3, 4]];
var matrix2 = [[5, 2], 
              [3, 1]];

var message = 'you must unlearn what you have learned'

var numbers = [1, -3, 5, -3, 0]

var numbers2 = [1, 4, 8]

var string = "booleans rock socks"
              
console.log(addMatrix.addMatrix(matrix1, matrix2));

console.log(cipher.cipher(message, 13));

console.log(decipher.decipher(message, 13));

console.log(factor.factor(12));

console.log(leetSpeak.leetSpeak("Leet"));

console.log(longVowels.longVowels(string, 5));

console.log(multMatrix.multMatrix(matrix1, matrix2));

console.log(positiveNumbers.positiveNumbers(numbers));

printBanner.printBanner("Hi There");

printBox.printBox(5, 4);

printNumbers.printNumbers(1, 10);

printSquare.printSquare(5);

console.log(sumNumbers.sumNumbers(numbers2));

