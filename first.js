// function  drive(){
//
//     var age= Number(prompt("enter age"));
//     if (Number(age) < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
//
//
// function drive2(age) {
//     console.log("ur age is "+age);
//     if (age < 18) {
//         console.log("Sorry, you are too young to drive this car. Powering off");
//     } else if (age > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (age=== 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
//
//
// var list= ["hi","ko","lp","pok"];
//
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
//
//  array.shift();
// array.sort();
// array.push("Kiwi");
// array.shift();
// array.reverse();

// var user= [{
//     username: "Gasser",
//     password: "hi"
// }, {
//     username: "salma",
//     password: "yio"
// },{
//     username: "adham",
//     password: "777"
// }];
//
// var username=prompt("enter name");
// var pass= prompt("enter pass");
//
//
// function signIn(username,pass) {
//     for ( i = 0;i < user.length;i++)
//     {
//         if (username === user[i].username && pass === user[i].password) {
//             console.log("welcome " + username);
//             return;
//         }
//
//     }
//         console.log("Error no matching combination");
//     }
//
//     signIn(username,pass);
// for (x of user){
//     console.log(x);
// }
//
// var person={
//     name:"mee",
//     age:34
// };
//
// for(x in person){
//     console.log(person[x]);
// }

// function sameFrequency(num1,num2){
//     var result = true;
//     var list1 = seperator(num1);
//     var list2 = seperator(num2);
//
//     if (list1.length !== list2.length) {
//         return false;
//     }
//
//     for (i = 0; i < list1.length; i++) {
//         for (j = 0; j < list1.length; j++) {
//             if (list1[i] === list2[j]) {
//
//                 result = true;
//                 break;
//             } else {
//                 result = false;
//             }
//         }
//
//         if (result === false) {
//             return false;
//         }
//
//
//     }
//     return result;
// }
//
//
//
// function seperator(num) {
//     var myString=num.toString();
//     var list =[];
//
//     for (i of myString){
//         list.push(i);
//     }
//
//     return list;
// }

// var list=[1,2,34,5];
//
var  myOBj={
    name:"gasser",
    2:"5g",
    1:56,
    a:1
};
//
// console.log(myOBj["1"]);
//
// myOBj[3]="ko";

/////////////////////////////////////// FREQUENCY POINTERS /////////////////////////////////////////////////////////////
function countChars(aString){
   var obj={};

   for( var i of aString){
       if(i===" "||i==="."){
           continue;
       }
       obj[i.toLowerCase()]= (obj[i.toLowerCase()]||0)+1;
   }
   console.log(obj);
}


function powerTwo(array1,array2){

    if(array1.length!==array2.length){
        return false;
    }
    var obj1={};
    var obj2={};

    for(let i =0; i<array1.length; i++){
        obj1[array1[i]]=(obj1[array1[i]]||0)+1;
    }

    for(let i =0; i<array1.length; i++){
        obj2[Math.pow(array2[i],0.5)] =(obj2[Math.pow(array2[i],0.5)]||0)+1;
    }

    for(let key in obj1){
        if (obj1[key]!==obj2[key]) return  false
    }

    console.log(obj1);
    console.log(obj2);
    return  true
}

function powerTwoV2(array1,array2){

    if(array1.length!==array2.length){
        return false;
    }
    var obj1={};


    for(let i =0; i<array1.length; i++){
        obj1[array1[i]]=(obj1[array1[i]]||0)+1;
    }

    for(let i =0; i<array1.length; i++) {

        if( !(obj1[Math.pow(array2[i],0.5)] ) ) {
            return false
        }else{
            obj1[Math.pow(array2[i],0.5)]-=1;
        }
    }

    return true

}



function isAnagram(str1,str2) {

    if(str1.length!==str2.length){
        return false;
    }

    var obj1={};
    var obj2={};

    for (let i of str1){
        obj1[i]? obj1[i]++: obj1[i]=1
    }

    for (let i of str2){
        obj2[i]? obj2[i]++: obj2[i]=1
    }

    for(let key in obj1){
        if (obj1[key] !== obj2[key])return  false
    }

    return true;

}

function countUnique(array) {
    var obj={};

    for (var i of array){
        obj[i] ? obj[i]++: obj[i]=1;
    }

    return(Object.keys(obj).length)

}
/////////////////////////////////////// Multiple Pointers  /////////////////////////////////////////////////////////////

function countUniqueV2(array) {
    if(array.length===0){
        return 0;
    }

    var p1=0;
    var p2=0;
    var counter =1;

    for(let i=0;  i<array.length-1;i++){
        p1=array[i];
        p2=array[i+1];

        if (p1!==p2){
            counter++
        }
    }

    return counter;

}

function countUniqueV3(array) {
    var i=0;
    if(array.length===0){
        return 0;
    }

    for(let j=1; j<array.length;j++){
      if (array[i]!==array[j]) {
          i++;
          array[i]=array[j]
      }
    }
    return i+1;
}

function reverseString(str){

    var strList=[];
    for(let i=0; i<str.length;i++){
        strList[i]=str[i];
    }

    var temp="";
    var p1=0;
    var p2=strList.length-1;


    while(p1<p2){
       temp=strList[p1];
       strList[p1]=strList[p2];
       strList[p2]=temp;

       p1++;
       p2--;
    }

    var result= strList.join('');

    

    return result;
}

/////////////////////////////////////// Sliding Window/////////////////////////////////////////////////////////////


function SlidingWindow(array,num){
    var maxSum=0;
    var tempSum=0;

    for (let i =0; i<num;i++){
        maxSum+=array[i];
    }
    tempSum=maxSum;

    for( let i=num;  i<array.length;i++){
        tempSum= tempSum- array[i-num]+array[i];

        if (tempSum>maxSum){
            maxSum=tempSum;
        }
    }

    return maxSum;
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


// function isASubstring(str1,str2) {
//
//     let temp = str1.substr(0, str2.length);
//     let counter=0;
//
//     for (let i = 0; i < str1.length; i++) {
//         temp = temp.slice(1, temp.length) + str1[i];
//         console.log(temp)
//         if (temp === str2) {
//             counter++;
//         }
//
//
//     }
//
//    console.log(counter)
//
// }