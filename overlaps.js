var a =[1,3, 5, 7, 9, 12, 15,16];
var b =[2, 3, 4, 7, 12, 15, 18];

function findOverlaps(arr1, arr2){
    let i=0, j=0;
    const overlaps=[];
    while(i<arr1.length && j< arr2.length){
        if(arr1[i] === arr2[j]){
            overlaps.push(arr1[i]);
            i++;
            j++;
        }else{
            if(arr1[i] > arr2[j]){
                j++;
            }else{
                i++;
            }
        }
    }
    return overlaps;
}
console.log(findOverlaps(a,b))
