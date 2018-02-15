const input = [1,1,2,3,3,5, 10]

/**
 * two pointers, or sliding window
 * @param { number []} arr 
 */
function removeDuplicate(arr){
    if(arr.length === 0){
        return arr;
    }
    var i=0; //slow runner;
    var j=1; //fast runner;
    while(j< arr.length){
        if(arr[i] !== arr[j]){
            if(j-i > 1){
                arr[i+1] = arr[j];
            }
            i++;
        }
        j++;
    }
    return arr;
}

console.log(removeDuplicate(input))