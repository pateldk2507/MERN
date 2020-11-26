module.exports.add = function(arr) {
    var sum=0;

    for (let index = 1; index < arr.length; index++) {
        sum = parseInt(sum) + parseInt(arr[index]);
        
    }

    return sum;
}

module.exports.sub = function(arr){

    if(arr.length > 3){
        return -1;
    }
    else{
        return arr[1] - arr[2];
    }

}

module.exports.mul = function(arr) {
    var mul=1;

    for (let index = 1; index < arr.length; index++) {
        mul = parseInt(mul) * parseInt(arr[index]);
        
    }

    return mul;
}

module.exports.div = function(arr){
    
    if(arr.length > 3){
        return -1;
    }
    else if (arr[2] == 0){
        return -2;
    }else{
        return arr[1] / arr[2];
    }
}

module.exports.mod = function(arr){
    if(arr.length > 3){
        return -1;
    }else if (arr[2] == 0){
        return -2;
    }else{
        return arr[1] % arr[2];
    }
}

module.exports.regex = function(arr){

    if(arr.length > 4){
        return "error";
    }else {
        var ans = ((parseInt(arr[1])+parseInt(arr[2])) * parseInt(arr[3]));
        return ans;
    }
    
    

}

