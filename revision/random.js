function firstDuplicate(a) {
    let record = {};

    for (let i = 0; i < a.length; i++) {
        record[a[i]] = (record[a[i]] || 0) + 1;
        if (record[a[i]] > 1) return a[i];
    }
    return -1;

}

// console.log(firstDuplicate([2, 4, 3, 5, 1]));

function firstNotRepeatingCharacter(s) {
    let record = {};

    for (let i = 0; i < s.length; i++) {
        record[s[i]] = (record[s[i]] || 0) + 1;
    }

    for (let key in record) {
        if (record[key] == 1) return key;
    }

}
console.log(firstNotRepeatingCharacter("abacabad"));