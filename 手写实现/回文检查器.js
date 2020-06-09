function palindromeChecker(str) {
    if (str === null || str === undefined || (str !== null && str.length === 0)) {
        return false;
    }
    return str.split('').reverse().join('') === str;
}

let a = 'abcba'
let b = '-abcba'

console.log(palindromeChecker(a))
console.log(palindromeChecker(b))

