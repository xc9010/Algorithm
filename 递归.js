// 如何求1+2+3+4+...+n的和？

// for循环

function sum(n) {
    var total = 0;
    for(var i = 1; i <= n; i ++) {
        total = total + i
    }
    return total
}

console.log(sum(10))

console.log(sum(10) === sum(9) + 10)
console.log(sum(9) === sum(8) + 9)


console.log(sum(2) === sum(1) + 2)

console.log(sum(1) === 1)

// 1，写出递归公式
function sum1(n) {
    return sum1(n-1) + n
}

// 2，找出终止条件
// sum(1) = 1

function newSum(n) {
    if (n === 1) return 1;
    return newSum(n-1) + n;
}

console.log(newSum(1000))


/**
 * 思考题
 * 楼梯问题：假如楼梯有n个台阶，每次可以走1个或2个台阶，请问走完n个台阶有多少种走法？
 */
