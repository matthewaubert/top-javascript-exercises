const removeFromArray = function(array) {
    // convert arguments into array
    let args = Array.from(arguments);
    // iterate over items in args, starting from 1
    for (let i = 1, n = args.length; i < n; i++) {
        // iterate over items in array (args[0])
        for (let j = 0, o = array.length; j < o; j++) {
            // if items are equal
            if (args[i] === array[j]) {
                // splice from array
                array.splice(j, 1);
            }
        }
    }
    return array
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
