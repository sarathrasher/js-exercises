function hello(name) {
    console.log("Hello, " + name + "!");
}
hello("Mustache");

function hello(name) {
    if (name == null) {
        console.log("Hello, world!");
    } else {
        console.log("Hello, " + name + "!");
    }
}

hello();

function madlib(name, subject) {
    var string = name + "'s favorite subject is " + subject + ".";
    return string;
}

console.log(madlib("Sara", "math"));

function tipAmount(bill, serviceLevel) {
    var tipAmount = 0
    var tipPercent = 0
    if (serviceLevel == "good" || "Good") {
        tipPercent += 0.20;
    } else if (serviceLevel == "fair" || "Fair") {
        tipPercent += 0.15;
    } else if (serviceLevel == "bad" || "Bad") {
        tipPercent += 0.10;
    } else {
        return "Please enter either 'good', 'bad', or 'fair'.";
    }
    tipAmount += bill * tipPercent;
    return tipAmount;
}

console.log(tipAmount(100, 'good'));

function totalAmount(bill, serviceLevel) {
    var total = 0
    var tipPercent = 0
    if (serviceLevel == "good" || "Good") {
        tipPercent += 0.20;
    } else if (serviceLevel == "fair" || "Fair") {
        tipPercent += 0.15;
    } else if (serviceLevel == "bad" || "Bad") {
        tipPercent += 0.10;
    } else {
        return "Please enter either 'good', 'bad', or 'fair'.";
    }
    total += bill + bill * tipPercent;
    return total;
}

console.log(totalAmount(100, 'good'));

