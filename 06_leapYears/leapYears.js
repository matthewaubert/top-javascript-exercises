const leapYears = function(year) {
    // if divisible by 4
    if (year % 4 === 0) {
        // if divisible by 100
        if (year % 100 === 0) {
            // if divisible by 400
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
