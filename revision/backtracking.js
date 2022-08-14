function nQueens(size) {
    let board = Array.from({ length: size }, () => new Array(size));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = 'x';
        }
    }
    let count = 0;

    function validQueen(x, y, arr) {
        let size = arr.length;
        for (let i = 0; i < size; i++) {
            if (arr[i][y] === 'Q')
                return false;

            if (arr[x][i] === 'Q')
                return false;
        }

        for (let i = x, j = y; i >= 0 && j >= 0; i--, j--) {
            if (arr[i][j] === 'Q')
                return false;
        }

        for (let i = x, j = y; i < size && j < size; i++, j++) {
            if (arr[i][j] === 'Q')
                return false;
        }

        for (let i = x, j = y; i >= 0 && j < size; i--, j++) {
            if (arr[i][j] === 'Q')
                return false;
        }

        for (let i = x, j = y; i < size && j >= 0; i++, j--) {
            if (arr[i][j] === 'Q')
                return false;
        }

        return true;
    }

    let helper = (row) => {
        if (count == size) return true;
        for (let i = 0; i < board[row].length; i++) {
            if (validQueen(row, i, board)) {
                board[row][i] = 'Q';
                count++;
                if (helper(row + 1)) {
                    return true;
                }
                board[row][i] = 'x';
                count--;
            }
        }
        return false;
    };

    helper(0);
    console.log(board);
};
// nQueens(4);


function sudokuSolver(arr) {

    function findNext(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                if (arr[i][j] == 0) return [i, j];
            }
        }
        return false;
    }

    function isValidPlacement(x, y, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][y] === num) return false;
            if (arr[x][i] === num) return false;
        }
        let limit1 = x;
        let limit2 = y;

        for (let i = limit1 * 3; i < limit1 + 3; i++) {
            for (let j = limit2; j < limit2 + 3; j++) {
                if (arr[i][j] === num) return false;
            }
        }
        return true;
    }

    let helper = () => {
        let pos = findNext(arr);
        if (!pos) return true;

        for (let i = 1; i <= 9; i++) {
            if (isValidPlacement(pos[0], pos[1], i)) {
                arr[pos[0]][pos[1]] = i;
                if (helper()) {
                    return true;
                }
                arr[pos[0]][pos[1]] = 0;
            }
        }
        return false;
    };

    helper();
    console.table(arr);
}
let board = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7]
];
// sudokuSolver(board);

function permute(str) {
    char = str.split('');

    function swap(arr, i, j) {
        let newArr = [...arr];
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
        return newArr;
    }

    let helper = (arr, start = 0) => {
        if (start === str.length) {
            console.log(arr.join(''));
            return;
        }
        for (let i = start, j = i; j < str.length; j++) {
            let newArr = swap(arr, i, j);
            helper(newArr, i + 1);
        }

    };

    helper(char);
}

// permute('abc');

function permute_bt(str) {
    char = str.split('');

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function helper(arr, start = 0) {
        if (start === arr.length) {
            console.log(arr.join(''));
            return;
        }
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            helper(arr, start + 1);
            swap(arr, start, i);
        }
    }
    helper(char);
}
// permute_bt('abc');


function generateIp(str) {
    let arr = str.split("");
    let results = [];

    let isValidPlacement = (arr, start, count) => {
        let temp = [];
        for (let i = start; i >= 0; i--) {
            if (arr[i] === '.') break;
            temp.unshift(arr[i]);
        }
        if (temp.length == 0) return false;
        if (temp[0] === '0' && temp.length !== 1) {
            return false;
        }
        temp = +temp.join('');

        if (temp > 255) return false;

        if (count < 2) {
            return true;
        }

        temp = [];

        for (let i = start + 1; i < arr.length; i++) {
            temp.push(arr[i]);
        }
        if (temp[0] === '0' && temp.length !== 1) {
            return false;
        }
        temp = +temp.join('');
        if (temp > 255) {
            return false;
        }
        return true;
    };

    let helper = (arr, index, count) => {
        if (count == 3) {
            let answer = arr.join('');
            results.push(answer);
            return;
        }
        for (let i = index; i < arr.length - 1; i++) {
            if (arr[i] === '.') continue;
            if (isValidPlacement(arr, i, count)) {
                count++;
                arr.splice(i + 1, 0, '.');
                helper(arr, i + 2, count);
                count--;
                arr.splice(i + 1, 1);
            }
        };

    };
    helper(arr, 0, 0);

    console.log(results);


}
// generateIp('010010');

function nMatchParenthesis(num) {
    let result = [];

    let helper = (strArr, open, closed) => {

        if (strArr.length == num * 2) {
            let answer = strArr.join('');
            result.push(answer);
            return;
        }

        if (open < num) {
            let newArr = [...strArr];
            newArr.push('(');
            helper(newArr, open + 1, closed);
        }
        if (closed < open) {
            let newArr = [...strArr];
            newArr.push(')');
            helper(newArr, open, closed + 1);
        }
    };

    helper([], 0, 0);
    console.log(result);

};
// nMatchParenthesis(3, 0);

function phoneCombination(str) {
    let results = [];
    let choices = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let helper = (start, newStr) => {
        if (start == str.length) {
            results.push(newStr);
            return;
        }
        for (let i = 0; i < choices[str[start]].length; i++) {
            let temp = newStr + choices[str[start]][i];
            helper(start + 1, temp);
        }
    };
    helper(0, '');
    console.log(results);
}
// phoneCombination('43');

function decode(str) {
    let results = [];
    let book = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        6: 'f',
        12: 'l',
        22: 'v',
        23: 'w',
        24: 'x',
        26: 'z'
    };

    let helper = (start, bank) => {
        if (start == str.length) {
            results.push(bank);
            return;
        }
        let temp;
        let temp2;
        if (start + 1 <= str.length) {
            temp = str.substring(start, start + 1);
        }
        if (start + 2 <= str.length) {
            temp2 = str.substring(start, start + 2);
        }
        if (book[temp]) {
            let bank1 = [...bank];
            bank1.push(temp);
            helper(start + 1, bank1);
        }

        if (book[temp2]) {
            let bank2 = [...bank];
            bank2.push(temp2);
            helper(start + 2, bank2);
        }

    };
    helper(0, []);
    console.log(results);
    console.log(results.length);
}

// decode('1263');

function longestCommonSub(str1, str2) {
    let char1 = str1.split('');
    let char2 = str2.split('');
    let count1 = 0;
    let count2 = 0;
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < char1.length; i++) {
        if (!obj1[char1[i]]) {
            obj1[char1[i]] = [];
            obj1[char1[i]].push(i);
            continue;
        }
        obj1[char1[i]].push(i);
    }

    for (let i = 0; i < char2.length; i++) {
        if (!obj2[char2[i]]) {
            obj2[char2[i]] = [];
            obj2[char2[i]].push(i);
            continue;
        }
        obj2[char2[i]].push(i);
    }


    for (let key in obj1) {
        if (!obj2[key]) {
            for (let x of obj1[key]) {
                char1.splice(x - count1, 1);
                count1++;
            }
        }
    }

    for (let key in obj2) {
        if (!obj1[key]) {
            for (let x of obj2[key]) {
                char2.splice(x - count2, 1);
                count2++;
            }
        }
    }
    let longer = char1.length > char2.length ? char1 : char2;
    let shorter = char1.length > char2.length ? char2 : char1;

    console.log(shorter);

    let i = 0, j = 0;
    for (i, j; i + j < longer.length; j++) {
        if (longer[i + j] !== shorter[j]) {
            i++;
            j = -1;
        }
    }
    console.log(j);
}

// longestCommonSub('AGGTAB', 'GXTXAYB');
// longestCommonSub('ABCDGH', 'AEDFHR');

function sumSubsets(arr, num) {
    let results = [];
    let record = {};

    let helper = (start, sum, bank) => {
        if (sum == num) {
            if (!record[bank]) {
                results.push(bank);
                record[bank] = 1;
                return true;
            }

        }
        if (start == arr.length || sum > num) {
            return false;
        }
        for (let i = start; i < arr.length; i++) {
            sum = sum + arr[i];
            bank.push(arr[i]);
            if (!helper(i + 1, sum, [...bank])) {
                sum = sum - arr[i];
                bank.pop();
            };

        }
    };
    helper(0, 0, []);
    // console.log(record)
    return results;
}
// console.log(sumSubsets([1, 2, 3, 4, 5], 5));

function climbingStairs(num) {
    if (num == 0) return 0;

    let results = [];
    let arr = Array.from({ length: num }, () => 1);

    let helper = (start, sum, bank) => {
        if (sum == num) {
            results.push([...bank]);
            return;
        }
        if (start == arr.length) {
            return;
        }

        let sum1 = sum + arr[start];
        bank.push(arr[start]);
        helper(start + 1, sum1, bank);
        bank.pop();
        let sum2;
        if (arr[start + 1]) {
            sum2 = sum + arr[start] + arr[start + 1];
            bank.push(arr[start]+arr[start + 1])
            helper(start + 2, sum2, bank);
            bank.pop()

        }
    };

    helper(0, 0, []);
    return results;
}
// console.log(climbingStairs(3));

function diffBetweenTwoStrings(source, target) {
    let arr = source.split('');
    let results = [];
    let record = {};
    let minCount;
    let sumOfRemoveInd;

    let targetObj = {};
    for (let l of target) {
        targetObj[l] = (targetObj[l] || 0) + 1;
    }


    let helper = (startI, startJ, count, arr) => {

        if (startJ == target.length) {
            if (comparer(arr, target)) {
                if (!minCount) minCount = count;
                if (count <= minCount) {
                    if (!record[arr]) {
                        let temp = negIndCount(arr);
                        if (!sumOfRemoveInd) sumOfRemoveInd = temp;
                        if (sumOfRemoveInd >= temp) {
                            sumOfRemoveInd = temp;
                            minCount = count;
                            results = [...arr];
                            record[arr] = 1;
                        }
                    }

                }
            }
            return;
        }

        let i = startI;
        let j = startJ;

        if (arr[i] !== target[j] && !targetObj[arr[i]] && arr[i]) {
            arr[i] = `-${arr[i]}`;
            helper(startI + 1, startJ, count + 1, arr);
            arr[i] = arr[i].substring(1);
        }

        else if (arr[i] !== target[j]) {
            if (i >= arr.length) {
                arr.splice(i, 0, `+${target[j]}`);
                helper(startI + 1, startJ + 1, count + 1, arr);
                arr.splice(i, 1);
                return;
            }

            arr.splice(i, 0, `+${target[j]}`);
            helper(startI + 1, startJ + 1, count + 1, arr);
            arr.splice(i, 1);

            arr[i] = `-${arr[i]}`;
            helper(startI + 1, startJ, count + 1, arr);
            arr[i] = arr[i].substring(1);



        }
        else if (arr[i] === target[j]) {
            helper(startI + 1, startJ + 1, count, arr);
        }

    };

    let comparer = (arr, target) => {
        let newArr = [...arr];
        for (let i = 0, j = 0; i < arr.length; i++, j++) {
            if (newArr[i][0] === '-') {
                j--;
                continue;

            }
            if (newArr[i][0] === '+') {
                newArr[i] = newArr[i].substring(1);
            }
            if (newArr[i] !== target[j]) {
                return false;
            }
        }
        return true;
    };

    let negIndCount = (arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] === '-') {
                count = count + i;
            }
        }
        return count;
    };

    helper(0, 0, 0, arr);

    return results;
}

// console.log(diffBetweenTwoStrings("AABACC", "BABCAC"));
// console.log(diffBetweenTwoStrings("GHMXGHUGXL", "PPGGXHHULL"));
// console.log(diffBetweenTwoStrings("HMXPHHUM", "HLZPLUPH"));
// console.log(diffBetweenTwoStrings("GHMXG", "PPGGX"));


