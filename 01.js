var reverseVowels = function(s) {
    let map = ['a', 'e', 'i', 'o', 'u'];
    let index = [];
    for (let i = 0; i < s.length; i++) {
        if (map.indexOf(s[i]) >= 0) {
            index.push(i)
        }
    }
    if (index.length <= 1) {
        return s
    }
    let m = 0;
    let n = index.length - 1;
    let start = index[m];
    let end = index[n];
    s = s.split('');
    while (start < end) {
        let tmp = s[start];
        s[start] = s[end];
        s[end] = tmp;
        start = index[++m];
        end = index[--n];
    }
    return s.join('');
};

console.log(reverseVowels("ai"));