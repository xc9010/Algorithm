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

function fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1
    };
    return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(30)


function debounce(fn, delay) {
    var timer = null
    //  清除上一次延时器
    return function () {
        clearTimeout(timer)
        //  重新设置一个新的延时器
        timer = setTimeout(() => {
            fn.call(this)
        }, delay);
    }
}


/*
    节流函数：fn:要被节流的函数，delay：规定的时间
*/
function throttle(fn, delay) {
    // 记录上一次函数出发的时间
    var lastTime = 0
    return function () {
        // 记录当前函数触发的时间
        var nowTime = new Date().getTime()
        // 当当前时间减去上一次执行时间大于这个指定间隔时间才让他触发这个函数
        if (nowTime - lastTime > delay) {
            // 绑定this指向
            fn.call(this)
            //同步时间
            lastTime = nowTime
        }
    }
}