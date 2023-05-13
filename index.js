function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
    
}
let x=reverseWords("double  spaces")

console.log(x)
