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

//  First attempt: 
//   var printBox = function (width, height) {
//     var totalBox = ""
//       for (var y = 1; y <= height; y++) {
//           if (y === 1 || y === height) {
//               var topRow = ""
//               for (var x = 1; x <= width; x++) {
//                   topRow += "*"; 
//               };
//               totalBox += topRow + "\n";
//           } else {
//           var row = "*"
//           for (var x = 1; x <= width - 2; x++) {
//                   row += " ";
//           };
//           row += "*";
//           totalBox += row + "\n";
//           };
//       };
//       console.log(totalBox);
//   };
  
//   printBox(5, 4)


// Secon attempt: 
var printBox = function (width, height) {
  for (var x = 0; x < width; x++) {
    var star = "";
    for (var j = 0; j < height; 1) {
            if (x === 0 || x === width - 1) {
                star += "*";
            } else if (j === 0 || j === height - 1) { 
                star += "*";
            } else {
                star += " ";
            };
    console.log(star);
    };
  };
};
printBox(5, 4)