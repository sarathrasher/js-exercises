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


  var printBox = function (width, height) {
    var totalBox = ""
      for (var y = 1; y <= height; y++) {
          if (y === 1 || y === height) {
              var topRow = ""
              for (var x = 1; x <= width; x++) {
                  topRow += "*"; 
              };
              totalBox += topRow + "\n";
          } else {
          var row = "*"
          for (var x = 1; x <= width - 2; x++) {
                  row += " ";
          };
          row += "*";
          totalBox += row + "\n";
          };
      };
      console.log(totalBox);
  };
  
  printBox(5, 4)


