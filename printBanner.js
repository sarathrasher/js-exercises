var printBanner = function printBanner(message) {
    for (var j = 0; j < 3; j++) {
        var row = "";
        if (j === 0 || j === 2) {
            for (var i = 0; i < message.length + 4; i++){
                row += "*";
            };
        } else {
            row += `* ${message} *`;
        }
        console.log(row)
    }
};

exports.printBanner = printBanner;