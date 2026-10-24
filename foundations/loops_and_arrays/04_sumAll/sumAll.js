const sumAll = function(value1, value2) {
    let sum = 0;
    if(!Number.isInteger(value1) || !Number.isInteger(value2)) return "ERROR";
    if(value1 < 0 || value2 < 0) return "ERROR";
    /* else if(typeof value1 != "numnber" || typeof value2 != "numnber"){
        return "ERROR";
    } */
    else if(value1 < value2){
        for(i = value1; i <= value2; i++){
            sum += i;
        }
        return sum;
    }
    else{
        for(i = value1; i >= value2; i--){
            sum += i;
        }
        return sum;
    }
};

console.log(sumAll(1,7));

// Do not edit below this line
module.exports = sumAll;
