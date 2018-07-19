var printNumbers = function (start, end) {
    var i;
    for (i = start; i <= end; i++) {
        console.log(i);
    };
};

printNumbers(1, 10);

var printSquare = function (num) {
  
    for (var y = 1; y <= num; y++) {
      var row = ""
        for (var x = 1; x <= num; x++) {
          row += "*";
        };
      console.log(row);
    };
  };
  
  printSquare(5)

