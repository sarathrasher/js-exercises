var factor = function factor(number) {
    var factors = [];
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
};

exports.factor = factor;