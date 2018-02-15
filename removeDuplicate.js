const input = [1,1,2,3,3,5, 10]


/*
starting points:  var i=0, j=0 (uniq case) or  var i=0, j=1 (target number case)?  
i points to the last uniq number;
if(j -i > 1){
    arr[i+1] = arr[j]; //next spot filled;
    i++; 
}

*/



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