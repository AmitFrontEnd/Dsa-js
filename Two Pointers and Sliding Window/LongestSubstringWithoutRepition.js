// My Brute Approach

const lengthOfLongestSubstring = str=> {
    const subStrs = []
    for (let i = 0; i < str.length; i++) {
        let s = ""
        for (let j = i; j < str.length; j++) {
            s += str[j]
            subStrs.push(s)
        }
    }
    let maxLength = 0;
    for (let i = 0; i < subStrs.length; i++) {
        if (subStrs[i].length === 1) {
            maxLength = Math.max(maxLength, subStrs[i].length)
            continue
        }
        let isFound = false
        for (let j = 0; j < subStrs[i].length; j++) {
            for (let k = j + 1; k < subStrs[i].length; k++) {
                if (subStrs[i][j] === subStrs[i][k]) {
                    isFound = true
                    break
                }
            }
            if (isFound) break
        }
        if (!isFound)
            maxLength = Math.max(maxLength, subStrs[i].length)

    }
    return maxLength
};

console.log(lengthOfLongestSubstring("ecdffbffcfaafdeeaabadabaaebafdeffcbafeefebdbdbbedcdcdbcfdceddebaefcdeeabfccafccbbacfcbccafbeedcdecacdebadabcfceedbcfddfbfedbeedbcccecbeabeedefdfccfadaacaaedaccdbafedbbebdadedafdcfbcbeeaaccbfaedeaffbdfddaffafaddadbccfcfddeabbcabeeaabaeacaabebbeecbbaffbdcfbdecdfcaeefbadabafccfdbdfbcdcddfbebadbdbdacbcadcecdfaccbaefcfeabacffaccddabbcdffedacdfbaedeaacedaabaeebdcadcabdaffefecebabfeaafebffcaeeaaeaacafecfcfbdadcbadcfdabbfdfeadcedcaefafceeefcaeebdfcbebdbbbababfdebdecaefaafeafbbaffbabdfceaceadfbabcaadabdcceeddfecbcadcfaacccececfabcedebefdfecaffdcdccbebbebeeeadcecebabddbccfcdecccdeddcfbdebcdfbdbbacdfbacfbcbfcbdbafececcbbdedcafbeffbadfcebbeaebbcbdfabbbcdfcacefbdbdbefcdcabafeefdcddaeaedfdadcffedbfaebfcacfafabaecebdbddacdededcccefcedfabcbaeaceafedeeaaffffadcbabbddbecceadebbdecbbebebdbbdeadacedecbfaacefadaabdfdafdabededeaaaccaafbebafcdfaaacbadafbbdefafdccbcafbfbfdbabcbbdfdfbfcbacaacdcadffee"))