//////////////////////////////////////////BINARY SEARCH//////////////////////////////////////////////
/**
 * @return {number}
 */
function BinarySearch(array, value) {
    let start = 0;
    let end = array.length - 1;

    let middle = Math.floor((end + start) / 2);

    while (array[middle] !== value && start <= end) {

        if (array[middle] < value) {
            start = middle + 1;
        } else {
            end = middle - 1;

        }
        middle = Math.floor((end + start) / 2)

    }
    return array[middle] === value ? middle : -1
}


//////////////////////////////////////////NAIVE STRING SEARCH//////////////////////////////////////////////

function naive(str1, str2) {

    let counter = 0;

    for (let i = 0; i < str1.length; i++) {



        for (let j = 0; j < str2.length; j++) {
            if (str1[j+i] !== str2[j]) {

                break;
            }
            if(j===str2.length-1){
                counter++;
            }
        }


    }

    return counter;

}

function isASubstringV2(str1,str2) {
    let counter=0;
    let temp = str1.substr(0, str2.length);
    if (temp === str2) {
        console.log("found at location 0");
        counter++;
    }


    for (let i = 0; i < str1.length-str2.length; i++) {
        temp= temp.slice(1,temp.length)+ str1[i+str2.length];
        if (temp === str2) {
            console.log("found at location "+ (i+1));
            counter++;
        }


    }

    return counter

}


