/**
 * 算法
 * 十进制转二进制
 */

// 基于栈
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    // API

    // 插入元素
    push(el) {
        this.items[this.count] = el;
        this.count ++;
    }

    // 获取栈的大小
    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    // 栈中弹出元素
    pop() {
        if (this.isEmpty()) return undefined;
        this.count --;
        const res = this.items[this.count];
        delete this.items[this.count];
        return res;
    }
    // 访问栈顶的元素，需要先将length-1,然后保存这个值以便返回出来，再delete它

    // 返回栈顶的值
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

    // 清空栈
    clear() {
        this.items = [];
        this.count = 0;
    }
    
}

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let num = decNumber;
    let rem;
    let binaryString = '';

    while(num > 0) {
        rem = Math.floor(num % 2);
        remStack.push(rem);
        num = Math.floor(num / 2);
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString

}

const str = decimalToBinary(233);

console.log(str)
