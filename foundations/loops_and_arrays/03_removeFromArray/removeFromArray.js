const removeFromArray = function(arr, value) {
    
    const newArray = arr.filter(item => item !== value)
    return newArray;

};

console.log(removeFromArray([1, 2, 3, 4, 5], 2))
console.log(removeFromArray(["a","b","c"],"c"))

// Do not edit below this line
module.exports = removeFromArray;
