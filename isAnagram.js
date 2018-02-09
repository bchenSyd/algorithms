var isAnagram = function(s, t) {
    if((!s && t ) || (s && !t)){
        return false;
    }
    if(s.length !== t.length){
        return false;
    }
    
    // [] === [] returns false becuase [] is reference type
    // 'a' === 'a' returns true because string is a special reference type
    var s_sorted = s.split('').sort( (c1, c2)=> c1 > c2 ? 1: -1).join('');
    var t_sorted = t.split('').sort( (c1, c2)=> c1 > c2 ? 1: -1).join('');
    return s_sorted === t_sorted;
    
};