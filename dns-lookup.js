var dns = require('dns');
var rl = require('readline');

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

// var options = {
//     family: 6,
//     hint: dns.ADDRCONFIG | dns.V4MAPPED,
// };

ask('Enter a URL', function (err, answer) {
    if (err) {
        console.log('Please enter a valid URL.');
    } else {
        dns.lookup(answer, options, function(err, address, family) {
            if (err) {
                console.log('Please enter a vaild url');
            }
            console.log(`address: ${address} family: IPv${family}`);
        });
    } 
});