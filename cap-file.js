var rl = require('readline');
var fs = require('fs');
// var readFile = util.promisify(fs.readFile);


var ask = function (question, callback) {
    var readlineInterface = rl.createInterface ({
        input: process.stdin,
        output: process.stdout,  
    });
    readlineInterface.question(question + '\n', function(answer) {
        readlineInterface.close();
        callback(null, answer);
    });
};

ask('Enter a file name.', function (err, answer) {
    if (err) {
        "Please enter a valid file."
    } else {
        fs.readFile(answer, 'utf8', function (err, contents) {
            if (err) {
                console.log('Please enter a valid file name.');
            } else {
                var uppercaseContent = contents.toUpperCase();
                console.log(uppercaseContent);
            }
        });
    }
});



