var printNumbers = function (start, end) {
    var i;
    for (i = start; i <= end; i++) {
        console.log(i);
    };
};

printNumbers(1, 10);

var printSquare = function (num) {
    for (var i = 1; i <= num, i++) {
        console.log("*" * num);
    };
};