const reverseString = function(string) {

    let newString = ""

    for(i = string.length - 1; i >= 0; i--){
        newString += string[i];
        console.log(string[i])
    }

    return newString
    
};

console.log(reverseString("hello world"));

// Do not edit below this line
module.exports = reverseString;
