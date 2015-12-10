var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case
    if(n === 0) {
        return 1;
    }
    if(n < 0) {
        return 1 / (power(x, -n));
    }
    if(isOdd(n)) {
        return x * power(x, n - 1);
    }

    if(isEven(n)) {
        var i = power(x, n / 2);
        return i * i;
    }


};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
Program.assertEqual(power(3, 0), 1);
