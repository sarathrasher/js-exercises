var sumNumbers = function sumNumbers(numArray) {
    sum = 0
    for (i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
};

exports.sumNumbers = sumNumbers;