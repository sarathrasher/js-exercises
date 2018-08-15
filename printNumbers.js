var printNumbers = function printNumbers(start, end) {
    var i;
    for (i = start; i <= end; i++) {
        console.log(i);
    };
};

printNumbers(1, 10);

exports.printNumbers = printNumbers;