const reverseString = function(string) {
    // initialize variable for reversed string
    let newString = "";
    // iterate over characters in string in reverse
    for (let i = string.length - 1; i >= 0; i--) {
        // add character to end of reversed string
        newString += string[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
