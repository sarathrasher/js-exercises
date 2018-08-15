var printNumbers = function printNumbers(start, end) {
    var i;
    for (i = start; i <= end; i++) {
        console.log(i);
    };
};

printNumbers(1, 10);

var printSquare = function printSquare(num) {
    for (var y = 1; y <= num; y++) {
        var row = ""
        for (var x = 1; x <= num; x++) {
          row += "*";
        }
        console.log(row);
    }
  };
  
  printSquare(5)

//  First attempt: 
//   var printBox = function (width, height) {
//     var totalBox = ""
//       for (var y = 1; y <= height; y++) {
//           if (y === 1 || y === height) {
//               var topRow = ""
//               for (var x = 1; x <= width; x++) {
//                   topRow += "*"; 
//               };
//               totalBox += topRow + "\n";
//           } else {
//           var row = "*"
//           for (var x = 1; x <= width - 2; x++) {
//                   row += " ";
//           };
//           row += "*";
//           totalBox += row + "\n";
//           };
//       };
//       console.log(totalBox);
//   };
  
//   printBox(5, 4)


// Second attempt: 
var printBox = function printBox(width, height) {
  for (var x = 0; x < width; x++) {
    var star = "";
    for (var j = 0; j < height; j++) {
            if (x === 0 || x === width - 1) {
                star += "*";
            } else if (j === 0 || j === height - 1) { 
                star += "*";
            } else {
                star += " ";
            };
    };
    console.log(star);
  };
};
printBox(5, 4)

// Print a banner
var printBanner = function printBanner(message) {
    for (var j = 0; j < 3; j++) {
        var row = "";
        if (j === 0 || j === 2) {
            for (var i = 0; i < message.length + 4; i++){
                row += "*";
            };
        } else {
            row += `* ${message} *`;
        }
        console.log(row)
    }
};

printBanner("Hi There")

// Factor a number 

var factor = function factor(number) {
    var factors = [];
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
};

console.log(factor(12));

// Caeser Cipher
var message = 'you must unlearn what you have learned'
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var decodedString = ''

var Cipher = function caesarCipher(cipherString, offset) {
    for (var i = 0; i < cipherString.length; i++) {
        var isLetter = false;
        var isUpper = false;
        var decodeIndex = 0;
        for (var j = 0; j < lowercase.length; j++) {
            if (cipherString[i] === lowercase[j] || cipherString[i] === uppercase[j]) {
                isLetter = true;
                var letterIndex = j;
                decodeIndex = (letterIndex + offset) % 26;
            }
            if (cipherString[i] === uppercase[j]) {
                isUpper = true;
            }
        }
        if (isLetter) {
            if (isUpper) {
                decodedString += uppercase[decodeIndex];
            } else {
                decodedString += lowercase[decodeIndex];
            }  
        } else {
            decodedString += cipherString[i];
        }
    }
    return decodedString;
};
console.log(caeserCipher(message, 13));

var decipher = function decipher(cipherString, offset) {
    for (var i = 0; i < cipherString.length; i++) {
        var isLetter = false;
        var isUpper = false;
        var decodeIndex = 0
        for (var j = 0; j < lowercase.length; j++) {
            if (cipherString[i] === lowercase[j] || cipherString[i] === uppercase[j]) {
                isLetter = true;
                var letterIndex = j;
                if (letterIndex >= offset) {
                    decodeIndex = (letterIndex - offset) % 26;
                } else {
                    decodeIndex = (26 - (letterIndex - offset)) % 26;
                }
            }
            if (cipherString[i] === uppercase[j]) {
                isUpper = true;
            }
        }
        if (isLetter) {
            if (isUpper) {
                decodedString += uppercase[decodeIndex];
            } else {
                decodedString += lowercase[decodeIndex];
            }  
        } else {
            decodedString += cipherString[i];
        }
    }
    return decodedString;
};
console.log(decipher(message, 13));

// Leet Speak Conversion
var string = "Leet"
var leetString = ""
var lowerString = ''
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var letters = ['a', 'e', 'g', 'i', 'o', 's', 't'] 
var leet = ['4', '3', '6', '1', '0', '5', '7']

var replaceLetter = function replaceLetter(string, list1, list2) {
    var newString = ''
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        for (j = 0; j < list1.length; j++) {
            if (string[i] === list1[j]) {
                char = list2[j];
            } else if (string[i] === list2[j]) {
                char = string[i];  
            }
        }
        newString += char;
    }
    return newString;
};
 
var leetSpeak = function leetSpeak(string) {
    lowerString = replaceLetter(string, uppercase, lowercase);
    leetString = replaceLetter(lowerString, letters, leet)
    return leetString;
};
    
console.log(leetSpeak("Leet"));

// Long Long Vowels

var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
var string = "booleans rock socks"
var newString = ''

var longVowels = function longVowels(string, vowelLength) {
    for (i = 0; i < string.length; i++) {
        if (string[i] === string[i - 1]) {
            for (j = 0; j < vowelLength - 1; j++) {
                newString += string[i];
            } 
        } else {
            newString += string[i];
        }
    }
    return newString
};

console.log(longVowels(string, 5));


// Sum the numbers

var sumNumbers = function sumNumbers(numArray) {
    sum = 0
    for (i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
};
   
numbers = [1, 4, 8]

console.log(sumNumbers(numbers));

// Print just positives

var positiveNumbers = function positiveNumbers(numArray) {
    posArray = []
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            posArray.push(numArray[i]);
        }
    }
    return posArray;
}

numbers = [1, -3, 5, -3, 0]

console.log(positiveNumbers(numbers));

// Matrix Addition

var matrix1 = [[2, 4], 
                [3, 4]];
var matrix2 = [[5, 2], 
                [3, 1]];


var addMatrix = function addMatrix(mat1, mat2) {
    var matrixSum = [];
    var height = mat1.length;
    var width = mat1[0].length;
    for (i = 0; i < height; i++) {
        matrixSum.push([]);
        for (j = 0; j < width; j++) {
            var total = (mat1[i][j] + mat2[i][j]);
            matrixSum[i].push(total);
        }
    }
    return matrixSum
};
   

console.log(addMatrix(matrix1, matrix2));


//  Matrix Multiplication
var matrix1 = [ [2, 4,],
                [3,4] ]
var matrix2 = [[5,2],
                [3,1] ]

var multMatrix = function multMatrix(mat1, mat2) {
    var matProduct = [];
    var height = mat1.length;
    var width = mat2[0].length;

    for (var i = 0; i < height; i++) {
        matProduct.push([]);
        for (var j = 0; j < width; j++) {
            matProduct[i].push(0);
            for (var k = 0; k < mat1[0].length; k++) {
                var product = matrix1[i][k] * matrix2[k][j];
                matProduct[i][j] += product;
            }   
        }  
    }
    return matProduct
};

console.log(multMatrix(matrix1, matrix2));

// Rock Paper Scissors

var rockPaperScissors = function rockPaperScissors(input1, input2) {
    w
        }



};
