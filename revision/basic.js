function reverseStr(str) {
    let newStr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        newStr.push(str[i]);
    }
    newStr = newStr.join('');
    console.log(newStr);
}


// reverseStr('bal');


function countUnique(str) {
    let record = {};

    for (let i of str) {
        if (i === " " || i === ".") continue;
        record[i.toLowerCase()] ? record[i.toLowerCase()]++ : record[i.toLowerCase()] = 1;
    }

    console.log(record);
}

// countUnique("Da dd.")

function powerTwo(a1, a2) {
    if (a1.length !== a2.length) return false;
    let record = {};

    for (let i = 0; i < a1.length; i++) {
        record[a1[i]] ? record[a1[i]]++ : record[a1[i]] = 1;
    }

    for (let i of a2) {
        if (!record[Math.pow(i, 0.5)]) {
            return false;
        }
        record[Math.pow(i, 0.5)]--;
    }

    return true;
}
// console.log( powerTwo([1,2,3,2], [4,1,4, 9]))


function isAnagram(str1, str2) {

    let record1 = {};
    let record2 = {};

    for (let i of str1) {
        record1[i] ? record1[i]++ : record1[i] = 1;
    }
    for (let i of str2) {
        record2[i] ? record2[i]++ : record2[i] = 1;
    }

    for (let key in record1) {
        if (record1[key] !== record2[key]) return false;
    }

    return true;

}

// console.log(isAnagram("loblob","bolbol"))

function addsToZero(arr) {
    let pt1 = 0;
    let pt2 = arr.length - 1;

    while (pt1 < pt2) {
        sum = arr[pt1] + arr[pt2];
        if (sum === 0) {
            return true;
        } else if (sum > 0) {
            pt2--;
        } else {
            pt1++;
        }

    }
    return false;

}
// console.log(addsToZero([-4,-1,2,4,5,6]))

function countUniqueNums(arr) {

    let pt1 = 0;
    let pt2 = 1;
    let count = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[pt1] !== arr[pt2]) {
            count++;
        }
        pt2++;
        pt1++;
    }
    console.log(count);
}

// countUniqueNums([-1,1,2,4,9])

function longestUnique(str) {
    let record = {};
    let longest = [];
    let temp = [];
    let i = 0;
    let j = 0;
    while (i < str.length && j < str.length) {
        if (record[str[j]]) {
            if (temp.length > longest.length) {
                longest = [...temp];
            }
            temp = [];
            record = {};
            i++;
            j = i;
        }
        else {
            record[str[j]] = 1;
            temp.push(str[j]);
            j++;
        }
    }
    if (temp.length > longest.length) longest = [...temp];
    console.log(longest.join(''));
}

// longestUnique('aaaaaaaaeaaaaaaaa');

function longestSubstring(s1, s2) {
    if (s1.length === 0 || s2.length === 0) {
        return s1.length === 0 ? s1 : s2;
    }
    let longest = [];
    let temp = [];
    let big = s1.length > s2.length ? s1 : s2;
    let small = s1.length <= s2.length ? s1 : s2;
    console.log(big, small);
    for (let i = 0; i < big.length; i++) {
        for (let j = 0; j < small.length; j++) {
            console.log(big[i + j], small[j]);
            if (big[i + j] === small[j])
                temp.push(big[i + j]);
        }
        if (temp.length > longest.length)
            longest = [...temp];
        temp = [];
    }
    console.log(longest.join(''));
}
// longestSubstring('ABAZDC', 'BACBAD');

function maxSubArraySum(array, limit) {
    let temp = 0;
    let max = 0;
    for (let i = 0; i < limit; i++) {
        temp = temp + array[i];
    }
    max = temp;
    for (let i = 0; i < array.length - limit; i++) {
        temp = temp - array[i] + array[i + limit];
        if (temp > max) max = temp;
    }
    console.log(max);
}

// maxSubArraySum([1,2,5,2,8,1,5],2)

function sameFrequency(num1, num2) {
    let record1 = {};
    let record2 = {};

    for (let i of num1.toString()) {
        record1[i] ? record1[i]++ : record1[i] = 1;
    }

    for (let i of num2.toString()) {
        record2[i] ? record2[i]++ : record2[i] = 1;
    }

    for (let key in record1) {
        if (record1[key] !== record2[key]) {
            return false;
        }
    }
    return true;
}

function areThereDuplicates(...args) {
    let record = {};
    for (let num of args) {
        if (record[num])
            return true;

        record[num] = 1;
    }

    return false;
}

function averagePair(arr, target) {
    let pt1 = 0;
    let pt2 = arr.length - 1;

    const average = (num1, num2) => (num1 + num2) / 2;

    while (pt1 < pt2) {
        if (average(arr[pt1], arr[pt2]) === target) return true;

        else if (average(arr[pt1], arr[pt2]) > target) pt2--;

        else if (average(arr[pt1], arr[pt2]) < target) pt1++;
    }

    return false;
}

function minSubArrayLen(array, num) {
    let minVals = [];
    let count = 0;
    let total = 0;
    let i = 0;
    let j = 0;
    while (i < array.length && j < array.length) {
        if (array[j] >= num) return 1;
        total = total + array[j];
        count++;
        if (total >= num) {
            minVals.push(count);
            count = 0;
            total = 0;
            i++;
            j = i;
        }
        else {
            j++;
        }
    }

    if (minVals.length === 0)
        return 0;

    let min = minVals[0];

    for (let k = 0; k < minVals.length; k++) {
        if (minVals[k] < min)
            min = minVals[k];
    }
    return min;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

function factorial(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum = sum * i;
    }

    return sum;
}

// console.log(factorial(4))

/////////////////////////////////////////////Recursion////////////////////////////////////////////////////////

function factorialRec(num) {
    if (num === 1) return 1;

    return num * factorialRec(num - 1);
}
// console.log(factorialRec(3))

function fib(num) {
    if (num === 2 || num === 1) return 1;

    return fib(num - 1) + fib(num - 2);
}

// console.log(fib(4))


function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

// console.log(power(4, 2));

function productOfArray(array) {
    if (array.length === 0) {
        return 1;
    }

    return array[0] * productOfArray(array.splice(1));
}

// console.log(productOfArray([1,2]))

function recursiveRange(num) {

    if (num === 1) return 1;

    return num + recursiveRange(num - 1);

}

// console.log(recursiveRange(3))

function recReverseStr(str) {
    let charArray = str.split('');
    let newStr = [];

    function helper(charArray) {
        if (charArray.length === 0) {
            newStr = newStr.join('');
            return;
        }

        newStr.push(charArray.pop());
        return helper(charArray);
    }

    helper(charArray);
    console.log(newStr);
}

// recReverseStr('bal')

function isPalindrome(inputStr) {

    if (inputStr.length === 0 || inputStr.length === 1) return true;

    if (inputStr[0] === inputStr[inputStr.length - 1]) {
        inputStr = inputStr.slice(1, inputStr.length - 1);
        return isPalindrome(inputStr);
    }
    return false;
}

// console.log(isPalindrome('tacocat'));

function someRecursive(array, callback) {

    if (array.length === 0) return false;

    if (callback(array[0])) return true;

    return someRecursive(array.slice(1), callback);

}

// console.log(someRecursive)

function flatten(array) {
    let final = [];

    let helper = (inputArray) => {
        for (let x of inputArray) {
            if (Array.isArray(x)) {
                helper(x);
            }
            else
                final.push(x);
        }
    };
    helper(array);
    return final;
}
// console.log(flatten([[1], [2], [3]]));

function capitalizeFirst(array) {
    let final = [];

    let helper = (inputArray) => {
        if (inputArray.length === 0) return;

        let temp = inputArray[0];
        let tempChar = temp[0];
        tempChar = tempChar.toUpperCase();
        temp = tempChar + temp.slice(1);
        final.push(temp);

        return helper(inputArray.slice(1));

    };

    helper(array);
    return final;
}

// console.log(capitalizeFirst(['cat','dog']))

function nestedEvenSum(obj) {
    let sum = 0;
    let helper = (inputObj) => {
        for (let x in inputObj) {
            if (typeof inputObj[x] === "object") {
                helper(inputObj[x]);
            }
            else {
                if (inputObj[x] % 2 === 0) sum = sum + inputObj[x];
            }

        }
    };

    helper(obj);
    return sum;
}

// console.log(nestedEvenSum({
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }))


function capitalizeWords(array) {

    let helper = (inputArray, index) => {
        if (index < 0) return;

        inputArray[index] = inputArray[index].toUpperCase();
        helper(inputArray, --index);
    };

    helper(array, array.length - 1);

    return array;
}

// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));

function stringifyNumbers(obj) {
    let newObj = {};
    Object.assign(newObj, obj);

    let helper = (inputObj) => {
        for (let x in inputObj) {
            if (typeof inputObj[x] === "object") {
                helper(inputObj[x]);
            }
            else if (typeof inputObj[x] === "number") {
                inputObj[x] = inputObj[x].toString();
            }
        }
    };

    helper(newObj);
    return newObj;
}

// console.log(stringifyNumbers({
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }
// ));

function collectStrings(obj) {
    let final = [];

    let helper = (inputObj) => {
        for (let x in inputObj) {
            if (typeof inputObj[x] === 'object') {
                helper(inputObj[x]);
            }
            else if (typeof inputObj[x] === 'string') {
                final.push(inputObj[x]);
            }
        }
    };

    helper(obj);
    return final;
}
// console.log(collectStrings({
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }))

