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
