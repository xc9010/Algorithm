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

const arr = new Stack();

console.log(arr.isEmpty())

arr.push(2)
arr.push(12)
arr.push(22)
arr.push(32)

console.log(JSON.stringify(arr))

arr.pop();

console.log(JSON.stringify(arr))
console.log(arr.size())
console.log(arr.isEmpty())

console.log(arr.peek())

arr.clear();

console.log(JSON.stringify(arr))

