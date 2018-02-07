const input = 'abccabefffa';

function findMaxSubStrUniq(input){
    let i = 0, j = 0, max = 0, maxStr='';
    const found = {};
    while (i < input.length && j < input.length) {
        if (!found[input[j]]) {
            found[input[j++]] = true; // found[input[j]] = true; j++;
            if(j-i > max){ // j is already incremented, so not j-i+1
                max=j-i;
                maxStr= input.substr(i,j-i);
            }
        } else {
            delete found[input[i]];
            i++;
        }
    }
    return maxStr;
}

console.log(findMaxSubStrUniq(input))