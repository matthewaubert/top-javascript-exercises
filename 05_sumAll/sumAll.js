const sumAll = function(num1, num2) {
    // if numbers negative or not numbers, return "ERROR"
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    
    // initialize sum variable to 0
    let sum = 0;
    let i = Math.min(num1, num2);
    let n = Math.max(num1, num2);

    // iterate between num1 and num2
    for (; i <= n; i++) {
        // add number to sum
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
