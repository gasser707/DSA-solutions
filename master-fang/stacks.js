

function validateParethesis(str){

let stack = [] 

let map = {
    "{": "}",
    "[":"]",
    "(":")"
}

for(let i = 0; i< str.length; i++){
    let char = str[i]

    if(char == "(" || char == "[" || char == "{" ){
        stack.push(char)
    }
    else if (char == ")" || char == "]" || char == "}" ){
        let p = stack.pop()
        if(map[p]!==char) return false

    } else return false

}

return stack.length === 0

}

// console.log(validateParethesis("([]{}())"))

function validBracketString(str){

    let strArr= str.split("")
    let stack = []
    
    for( let i=0; i<strArr.length; i++){
        let char = strArr[i]
        if(char == "(" ){
            stack.push(i)
        }  else if (char == ")" ){
            let p = stack.pop()
            if(strArr[p]!=="("){
                strArr[i]=""
            }
        }
    }

    if (stack.length===0 ) return strArr.join("")
    while(stack.length){

        let current = stack.pop()
        strArr[current]= ""
    }
    return strArr.join("")
}

console.log(validBracketString("(ab(c))d"))
console.log(validBracketString("))(("))