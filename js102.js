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
        };
    console.log(row);
    };
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
    var box = "";
    for (var j = 0; j < 3; j++) {
        if (j === 0 || j === 2) {
            for (var i = 0; i < message.length + 4; i++){
                box += "*";
            };
        } else {
            box += `\n* ${message} * \n`;
        };
    };
  console.log(box)
};

printBanner("Hi There")

// Factor a number 

var factor = function factor(number) {
    var factors = [];
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            factors.push(i);
        };
    };
    console.log(factors);
};

factor(12);

// Caeser Cipher
var message = 'lbh zhfg hayrnea jung lbh unir yrnearq'
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var decodedString = ''

var caeserCipher = function caesarCipher(cipherString, offset) {
    for (var i = 0; i < cipherString.length; i++) {
        var isLetter = false;
        var isUpper = false;
        var decodeIndex = 0
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