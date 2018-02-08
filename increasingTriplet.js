const input=[5,5, 1, 4, 2, 3];

function increasingTriplet(arr){
    if(!arr || arr.length < 3){
        return false;
    }

    var min= Number.MAX_SAFE_INTEGER;
    var secondMin=Number.MAX_SAFE_INTEGER;
    for(var i=0;i< arr.length; i++){
        if(arr[i] <= min){
            min = arr[i];
        }else if(arr[i] <= secondMin){
            secondMin =arr[i]
        } else{
            // both min and secondMin are set, and we have found an try greater than 2nd Min
            debugger;
            return true;
        }
    }
    return false;

}

console.log(increasingTriplet(input));