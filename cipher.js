
var Cipher = function (cipherString, offset) {
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var decodedString = ''
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


exports.cipher = Cipher;