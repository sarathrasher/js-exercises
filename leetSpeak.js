var string = "Leet"




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
    var leetString = ""
    var lowerString = ''
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var letters = ['a', 'e', 'g', 'i', 'o', 's', 't'] 
    var leet = ['4', '3', '6', '1', '0', '5', '7']
    lowerString = replaceLetter(string, uppercase, lowercase);
    leetString = replaceLetter(lowerString, letters, leet)
    return leetString;
};

module.exports = {
    replaceLetter: replaceLetter,
    leetSpeak: leetSpeak
};