var rl = require('readline');
var fs = require('fs');
// var readFile = util.promisify(fs.readFile);

var ask = function (question, callback) {
    var readlineInterface = rl.createInterface ({
        input: process.stdin,
        output: process.stdout  
    });
    readlineInterface.question(question + '\n', function(fileName) {
        readlineInterface.close();
        callback(null, fileName);
    });
};

ask('Input file: ', function (err, inputFile) {
    if (err) {
        "Please enter a valid file."
    } else {
        fs.readFile(inputFile, 'utf8', function (err, contents) {
            if (err) {
                "Please enter a valid file name."
            } else {
                var uppercaseContent = contents.toUpperCase();
                ask('Output file: ', function (err, outputFile) {
                    if (err) {
                        'Please enter a valid file.';
                    } else {
                        console.log(uppercaseContent);
                        fs.writeFile(outputFile, uppercaseContent, function (err) {
                            if (err) {
                                "Please enter a valid file name."
                            } else {
                                console.log('This file has been saved.');
                            }
                        });
                    }
                });
            }
        });
    }
});





