var printSquare = function printSquare(num) {
    for (var y = 1; y <= num; y++) {
        var row = ""
        for (var x = 1; x <= num; x++) {
          row += "*";
        }
        console.log(row);
    }
  };

  exports.printSquare = printSquare;