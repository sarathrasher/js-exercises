var positiveNumbers = function positiveNumbers(numArray) {
    posArray = []
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            posArray.push(numArray[i]);
        }
    }
    return posArray;
}

exports.positiveNumbers = positiveNumbers;