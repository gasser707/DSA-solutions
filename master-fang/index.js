const twoSum = (arr, value) => {
    arr = arr.sort((a, b) => a - b);
    //check if array isnt empty
    // two pointers one at the start, one at the end
    // at them and if sum is bigger move right pointer if not move left one, until they cross
    if (arr.length === 0) return false;

    let pt1 = 0,
        pt2 = arr.length - 1;
    let sum = arr[pt1] + arr[pt2];

    while (pt1 <= pt2) {
        if (sum > value) pt2--;
        else if (sum < value) pt1++;
        else if (sum === value) return true;
        sum = arr[pt1] + arr[pt2];
    }
    return false;
};

// console.log(twoSum([1,2,8,3,4,5], 5))

// const waterTrap = arr =>{
//     if (!arr.length) return 0

//     let basePtr = 1
//     let scoutPtr=1

//     let zero1Ptr = -1

//     let zero2Ptr = -1

//     let count = 0

//     let zeroFound = false
//     while( basePtr<arr.length && scoutPtr < arr.length ){
//         if (arr[scoutPtr]===0 && zero1Ptr <0 ){
//             parseSection(basePtr, scoutPtr)
//             basePtr = scoutPtr-1
//             scoutPtr
//         }
//         if (arr[scoutPtr]===0 && !zeroFound){
//             zeroFound = true
//         }
//         scoutPtr++
//     }

//     let parseSection = (start, end) =>{

//     }
// }

const typedOut = (s, t) => {
    let i = s.length - 1;
    let j = t.length - 1;

    let iSkip = 0;
    let jSkip = 0;

    let compare;

    while (i >= 0 || j >= 0) {
        compare = true;

        if (s[i] === "#") {
            compare = false;
            iSkip++;
            i--;
        }

        if (t[j] === "#") {
            compare = false;
            jSkip++;
            j--;
        }

        if (!compare) continue;

        if (iSkip > 0) {
            i = i - iSkip;
            iSkip = 0;
        }

        if (jSkip > 0) {
            j = j - jSkip;
            jSkip = 0;
        }

        if (compare && s[i] !== t[j]) return false;
        i--;
        j--;
    }

    return true;
};

// console.log(typedOut("abcc##z", "abz"))

const longestUniqueSubstring = (str) => {
    let record = {};
    let longestStartIdx = 0;
    let longestEndIdx = 0;
    let tempStartIdx = 0;
    let tempLongestIdx = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (record[char] !== undefined && record[char] >= tempStartIdx) {
            if (tempLongestIdx - tempStartIdx > longestEndIdx - longestStartIdx) {
                longestStartIdx = tempStartIdx;
                longestEndIdx = tempLongestIdx;
            }
            tempStartIdx = record[char] + 1;
            record[char] = i;
        } else {
            record[char] = i;
        }
        tempLongestIdx++
    }
    return longestEndIdx - longestStartIdx > tempLongestIdx - tempStartIdx
        ? str.slice(longestStartIdx, longestEndIdx)
        : str.slice(tempStartIdx, tempLongestIdx);
};
// console.log(longestUniqueSubstring("thisisawesome"));

const isPalindrome = (str, left, right) => {

    left = left || 0

    right = right || str.length - 1

    if (!str.length) return 0

    for (let i = left, j = right; i <= j; i++, j--) {

        if (str[i] !== str[j]) return false
    }

    return true

}

// console.log(isPalindrome("caabbaac"))

const almostPalindrome = str => {

    if (!str.length) return 0

    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {

        if (str[i] !== str[j]) {
            return (isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1))
        }
    }

    return true
}

// console.log(almostPalindrome("caabbaac"))



var isRobotBounded = function (instructions) {

    if (instructions.length == 2 && instructions[0] !== instructions[1]) return true;

    let startPos = [0, 0];

    let dir = "NORTH";

    let map = {
        "NORTH": { "L": "WEST", "R": "EAST" },
        "SOUTH": { "L": "EAST", "R": "WEST" },
        "EAST": { "L": "NORTH", "R": "SOUTH" },
        "WEST": { "L": "SOUTH", "R": "NORTH" },
    }

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "G") {

            switch (dir) {
                case "NORTH":
                    startPos[1] = startPos[1] + 1
                    break;
                case "SOUTH":
                    startPos[1] = startPos[1] - 1;
                    break;
                case "EAST":
                    startPos[0] = startPos[0] + 1;
                    break;
                case "WEST":
                    startPos[0] = startPos[0] - 1;
                    break;
            }

        } else {
            dir = map[dir][instructions[i]]
        }
    }

    return startPos[0] === 0 && startPos[1] === 0 || dir !== "NORTH"

};

// console.log(isRobotBounded("LLGRL"))



function findKthLargest(nums, k) {

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function pivot(arr, start = 0, end = arr.length) {
        let swapIndex = start;
        for (let i = start + 1; i < end; i++) {
            if (arr[start] > arr[i]) {
                swapIndex++;
                swap(arr, i, swapIndex);
            }

        }

        swap(arr, start, swapIndex);
        return swapIndex;
    }

    let idx_to_find = nums.length - k

    function quickSelect(arr, start = 0, end = arr.length) {
        let pivotIndex = pivot(arr, start, end);
        if (pivotIndex === idx_to_find) {
            return pivotIndex
        }
        if (pivotIndex < idx_to_find) {
            return quickSelect(arr, pivotIndex + 1, end);
        }
        else {
            return quickSelect(arr, start, pivotIndex);
        }
    }

    return nums[quickSelect(nums)]
}

// console.log(findKthLargest( [3,2,3,1,2,4,5,5,6], 4))


function binarySearch(arr, val) {

    let helper = (start = 0, end = arr.length - 1) => {
        if (start > end) return -1
        let mid = Math.floor((end + start) / 2)
        if (arr[mid] === val) {
            return mid
        }
        else if (arr[mid] > val) {
            return helper(start, mid - 1)
        }
        else if (arr[mid] < val) {
            return helper(mid + 1, end)
        }
    }
    return helper()
}

// console.log(binarySearch([1,2,3,4,5,6], 4))


function dfs_2dArr(arr) {

    // let seen = {}
    let result = []

    let helper = (arr, i, j) => {
        result.push(arr[i][j])
        arr[i][j] = "x"
        // seen[i] ? seen[i][j] = true : seen[i]= {[j]: true}

        //going up
        if (i - 1 >= 0 && arr[i - 1][j] !== "x") {
            helper(arr, i - 1, j)
        }
        //going right
        else if (j + 1 < arr[0].length && arr[i][j + 1] !== "x") {
            helper(arr, i, j + 1)
        }
        //going down
        else if (i + 1 < arr.length && arr[i + 1][j] !== "x") {
            helper(arr, i + 1, j)
        }
        //going left
        else if (j - 1 >= 0 && arr[i][j - 1] !== "x") {
            helper(arr, i, j - 1)
        }
        else {
            return
        }
    }

    helper(arr, 0, 0)
    return result
}

// console.log(dfs_2dArr([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20]]))


function bfs_2dArr(arr, start) {

    // let seen = {}
    let [i, j] = start
    let result = [arr[i][j]]

    arr[i][j] = "x"
    let queue = [[i, j]]

    while (queue.length) {
        let [i, j] = queue.shift()

        //going up
        if (i - 1 >= 0 && arr[i - 1][j] !== "x") {
            queue.push([i - 1, j])
            result.push(arr[i - 1][j])
            arr[i - 1][j] = "x"
        }
        //going right
        if (j + 1 < arr[0].length && arr[i][j + 1] !== "x") {
            queue.push([i, j + 1])
            result.push(arr[i][j + 1])
            arr[i][j + 1] = "x"
        }
        //going down
        if (i + 1 < arr.length && arr[i + 1][j] !== "x") {
            queue.push([i + 1, j])
            result.push(arr[i + 1][j])
            arr[i + 1][j] = "x"
        }
        //going left
        if (j - 1 >= 0 && arr[i][j - 1] !== "x") {
            queue.push([i, j - 1])
            result.push(arr[i][j - 1])
            arr[i][j - 1] = "x"
        }

    }

    return result
}


// console.log(bfs_2dArr([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20]], [2,2]))


function countIslands(arr) {


    let count = 0

    let helper = (start) => {

        // let seen = {}
        let [i, j] = start
        let result = [arr[i][j]]

        arr[i][j] = "x"
        let queue = [[i, j]]

        while (queue.length) {
            let [i, j] = queue.shift()

            //going up
            if (i - 1 >= 0 && arr[i - 1][j] === 1 ) {
                queue.push([i - 1, j])
                result.push(arr[i - 1][j])
                arr[i - 1][j] = "x"
            }
            //going right
            if (j + 1 < arr[0].length && arr[i][j + 1] === 1) {
                queue.push([i, j + 1])
                result.push(arr[i][j + 1])
                arr[i][j + 1] = "x"
            }
            //going down
            if (i + 1 < arr.length && arr[i + 1][j] === 1 ) {
                queue.push([i + 1, j])
                result.push(arr[i + 1][j])
                arr[i + 1][j] = "x"
            }
            //going left
            if (j - 1 >= 0 && arr[i][j - 1] === 1) {
                queue.push([i, j - 1])
                result.push(arr[i][j - 1])
                arr[i][j - 1] = "x"
            }
        
        }
        count++
    }



    for (let i=0; i<arr.length; i++) {
       for(let j=0; j<arr[0].length; j++){
            if(arr[i][j]===1) helper([i,j])
       }

    }

    return count

}


// console.log(countIslands([[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 1], [0, 0, 0, 1, 1]]))
// console.log(countIslands([[0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0], [1, 0, 1, 0, 1]]))