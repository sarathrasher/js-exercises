var hello = function hello(name) {
    console.log(`Hello, ${name}!`);
};
hello("Mustache");

var hello2 = function hello(name) {
    if (name ==== null) {
        console.log("Hello, world!");
    } else {
        console.log(`Hello, ${name} !`);
    }
};

hello();

var madlibfunction madlib(name, subject) {
    var string = name + "'s favorite subject is " + subject + ".";
    return string;
};

console.log(madlib("Sara", "math"));

var tipCalc1 = function tipAmount(bill, serviceLevel) {
    var tipTotal = 0
    var tipPercent = 0
    if (serviceLevel === "good" || "Good") {
        tipPercent += 0.20;
    } else if (serviceLevel === "fair" || "Fair") {
        tipPercent += 0.15;
    } else if (serviceLevel === "bad" || "Bad") {
        tipPercent += 0.10;
    } else {
        return "Please enter either 'good', 'bad', or 'fair'.";
    }
    tipTotal += bill * tipPercent;
    return tipTotal;
};

// tipCalc2 original:

// var tipCalc2 = function totalAmount(bill, serviceLevel) {
//     var total = 0
//     var tipPercent = 0
//     if (serviceLevel == "good" || "Good") {
//         tipPercent += 0.20;
//     } else if (serviceLevel == "fair" || "Fair") {
//         tipPercent += 0.15;
//     } else if (serviceLevel == "bad" || "Bad") {
//         tipPercent += 0.10;
//     } else {
//         return "Please enter either 'good', 'bad', or 'fair'.";
//     }
//     total += bill + bill * tipPercent;
//     return total;
// };


// tipCalc3 original:

// var tipCalc3 = function splitAmount(bill, serviceLevel, partySize) {
//     var total = 0
//     var tipPercent = 0
//     var splitAmount = 0
//     if (serviceLevel == "good" || "Good") {
//         tipPercent += 0.20;
//     } else if (serviceLevel == "fair" || "Fair") {
//         tipPercent += 0.15;
//     } else if (serviceLevel == "bad" || "Bad") {
//         tipPercent += 0.10;
//     } else {
//         return "Please enter either 'good', 'bad', or 'fair'.";
//     }
//     total += bill + bill * tipPercent;
//     splitAmount += total / partySize;
//     return splitAmount;
// };


// Tip Calcultor 2 rework

var tipCalc2 = function totalAmount(bill, serviceLevel) {
    var tipTotal = tipAmount(bill, serviceLevel);
    var total = bill + tipTotal;
    return total;
};
   
// tipCalc3 rework 

var tipCalc3 = function splitAmount(bill, serviceLevel, partySize) {
    var total = totalAmount(bill, serviceLevel);
    var splitTotal = total / partySize;
};

console.log(splitAmount(100, 'good', 5));