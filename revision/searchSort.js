function stringSearch(str, bigStr) {
    let count = 0;
    for (let i = 0, j = 0; i <= bigStr.length - str.length; j++) {
        console.log(str[j], bigStr[i + j]);
        if (str[j] !== bigStr[i + j]) {
            i = i + j + 1;
            j = -1;
            continue;
        }
        if (j === str.length - 1) {
            console.log('found match at location ' + (i));
            if (str.length === 1) {
                i = i + j + 1;
            }
            else {
                if (str[0] === str[str.length - 1]) {
                    i = i + j;
                }
                else {
                    i = i + j + 1;
                }
            }
            count++;
            j = -1;
        }
    }

    console.log(count);
}

// stringSearch('bob', 'bobcatbob');
// stringSearch('AABA', 'AABAACAADAABAABA');
// stringSearch('g', 'ggga');
// stringSearch('aee', 'aaaaaaaaaaeeaaaaaaa')

console.log('**************************************');

function stringSearch2(str, bigStr) {
    for (let i = 0, j = 0; i <= bigStr.length - str.length; j++) {
        // console.log(str[j], bigStr[i + j]);
        if (str[j] !== bigStr[i + j]) {
            i++;
            j = -1;
            continue;
        }
        if (j === str.length - 1) {
            console.log('found match at location ' + (i));
            i++;
            j = -1;
        }
    }

}
// stringSearch2('bob', 'bobcatbob');
// stringSearch2('AABA', 'AABAACAADAABAABA');
// stringSearch2('g', 'ggga');
// stringSearch2('hello', 'hellhellhellhello');
// let start, end;
// start = Date.now();
// stringSearch2('AABA', 'AABAACAADAABAABA');
// end = Date.now();
// console.log(`this took ${end-start} ms`)

function stringSearch3(str, bigStr) {
    let indexes = [];
    for (let i = 0; i < bigStr.length; i++) {
        if (bigStr[i] === str[0]) indexes.push(i);
    }
    for (let i = 0, j = 0; i < indexes.length; j++) {
        if (bigStr[indexes[i] + j] !== str[j]) {
            i++;
            j = -1;
            continue;
        }
        if (j === str.length - 1) {
            console.log('found match at location ' + (indexes[i]));
            i++;
            j = -1;

        }
    }
}
// stringSearch3('bob', 'bobcatbob');
// stringSearch3('AABA', 'AABAACAADAABAABA');
// stringSearch3('g', 'ggga');
// stringSearch3('hello', 'hellhellhellhello')
// let start1, end1;
// start1 = Date.now();
// stringSearch3('AABA', 'AABAACAADAABAABA');
// end1 = Date.now();
// console.log(`this took ${end1-start1} ms`)

/*****************************************************************************************************************/

function binarySearch(arr, val) {
    if (arr.length === 0) return false;

    let middle = Math.floor(arr.length / 2);

    if (arr[middle] === val) return true;

    else if (arr[middle] > val) return binarySearch(arr.slice(0, middle), val);

    else if (arr[middle] < val) return binarySearch(arr.slice(middle + 1), val);

    else return false;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 4));

function binarySearchIter(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === val) return true;

        else if (arr[middle] > val) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }
    return false;
}

// console.log(binarySearchIter([1, 2, 3, 4, 5], 9));

function swap(arr, i, j) {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    let change = true;
    while (change) {
        change = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                change = true;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([29, 10, 14, 30, 37, 14, 18]));

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (i !== min) {
            swap(arr, i, min);
        }
    }
    return arr;
}
// console.log(selectionSort([29, 10, 14, 30, 37, 14, 18]));

function merge(arr1, arr2) {
    let finalArr = [];

    for (let k = 0, i = 0, j = 0; k < arr1.length + arr2.length; k++) {
        if (i === arr1.length) {
            finalArr[k] = arr2[j];
            j++;
        }
        else if (j === arr2.length) {
            finalArr[k] = arr1[i];
            i++;
        }
        else if (arr1[i] < arr2[j]) {
            finalArr[k] = arr1[i];
            i++;
        }
        else {
            finalArr[k] = arr2[j];
            j++;
        }

    }
    return finalArr;
}

// console.log(merge([0,2,4,6],[1,3,5,7,9]))

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid1 = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    let mid2 = mergeSort(arr.slice(Math.floor(arr.length / 2)));
    return merge(mid1, mid2);
}

// console.log(mergeSort([29, 10, 14, 30, 37, 14, 18]))

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

// console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));

function quickSort(arr, start = 0, end = arr.length) {
    if (end - start === 0) {
        return;
    }
    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
    return arr;
}

// console.log(quickSort([29, 10, 14, 30, 37, 14, 18]));
function findLength(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function getDigit(num, i) {
    return Math.floor(num % 10 ** (i + 1) / 10 ** (i));
}
function findLongest(arr) {
    let max = findLength(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        let temp = findLength(arr[i]);
        if (temp > max) max = temp;
    }
    return max;
}


function radixSort(arr) {
    let limit = findLongest(arr);

    for (let i = 0; i < limit; i++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            bucket[digit].push(arr[j]);
        }

        arr = [].concat(...bucket);
    }
    return arr;
}

// console.log(radixSort([29, 10, 14, 30, 37, 14, 18]));
