var longVowels = function longVowels(string, vowelLength) {
    var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    var newString = ''
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

exports.longVowels = longVowels;