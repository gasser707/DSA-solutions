// good when data is almost sorted

function bubbleSort(array){
    let swapDone= true;

    while(swapDone){
        swapDone=false;

        for(let i=0; i<array.length-1;i++){
            if(array[i]>array[i+1]){
                let temp=array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                swapDone=true;
            }
        }


    }

    return array;

}

//only good thing is that its simple
function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i+1 ; j < array.length; j++) {

            if (array[min] > array[j]) {
                min = j;
            }
        }
            if(i!==min) {
                let temp = array[i];
                array[i] = array[min];
                array[min] = temp;

            }
    }

    return array;
}


// good when data is almost sorted
//good for live stream data

    function insertionSort(array) {
        for (let i = 1; i < array.length; i++) {
            var currentValue = array[i];

            for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {

                array[j + 1] = array[j]
            }

            array[j + 1] = currentValue
        }

        return array;

    }

    ///////////////////////////////////////////////////////Merge Sort///////////////////////////////////////////////////////
function merge(array1,array2){

    let big= new Array(array1.length+array2.length);
    let i=0;
    let j=0;
    let k=0;

    while(k<big.length) {
        if(i===array1.length){
            big[k]=array2[j];
            j++;
        }
        else if(j===array2.length){
            big[k]=array1[i];
            i++;
        }

        else if(array1[i]<array2[j]){
            big[k]=array1[i];
            i++
        }else{
            big[k]=array2[j];
            j++
        }
        k++;
    }
    return big;
}

function mergeSort(array){

    if (array.length<=1){
        return array;
    }

    let mid =Math.floor(array.length/2);
     let left=mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));

    return merge(left,right)

}
///////////////////////////////////////////////////////QUICK Sort///////////////////////////////////////////////////////

function pivot(arr, start=0, end=arr.length){
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for(var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(array, left=0 ,right=array.length){
    if(left<right){
        let pivotIndex = pivot(array,left, right);
        quickSort(array,left,pivotIndex-1);
        quickSort(array,pivotIndex+1,right);
    }
    return array;

}


