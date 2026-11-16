const checkInclusion = (s1, s2) => {
    let stringHash = new Array(26).fill(0)
    let windowHash = new Array(26).fill(0)
    for (let i = 0; i < s1.length; i++) {
        stringHash[s1.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < s1.length; i++) {
        windowHash[s2.charCodeAt(i) - 97]++
    }
    let i = 0, j = s1.length - 1
    while (i <= s2.length - s1.length) {
        if (ValidWindow(stringHash, windowHash)) {
            return true
        }
        else {
            windowHash[s2.charCodeAt(i) - 97]--
            i++
            j++
            windowHash[s2.charCodeAt(j) - 97]++
        }
    }
    return false
};

function ValidWindow(stringHash, windowHash) {
    for (let i = 0; i < 26; i++) {
        if (stringHash[i] !== windowHash[i]) return false
    }
    return true
}

console.log(checkInclusion("ab", "eidbaooo"))