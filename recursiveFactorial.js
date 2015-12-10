var factorial = function(n) {
    // base case:
    if(n === 0) {
        return 1;
    }
    return n*factorial(n-1);

    // recursive case:
};

println("The value of 0! is " + factorial(0) + ".");
println("The value of 5! is " + factorial(5) + ".");
