var printBox = function printBox(width, height) {
    for (var x = 0; x < width; x++) {
      var star = "";
      for (var j = 0; j < height; j++) {
              if (x === 0 || x === width - 1) {
                  star += "*";
              } else if (j === 0 || j === height - 1) { 
                  star += "*";
              } else {
                  star += " ";
              };
      };
      console.log(star);
    };
  };

  exports.printBox = printBox;