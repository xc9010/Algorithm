// 模拟栈操作stack

function array() {
    this.items = [];
}

// 栈顶添加元素
array.prototype.push = function (el) {
    return this.items.push(el);
}

// 栈顶删除元素
array.prototype.pop = function () {
    return this.items.pop();
}

// 获取栈顶元素
array.prototype.peek = function () {
    return this.items[this.items.length - 1];
}

// 判断栈内存
array.prototype.isEmpty = function () {
    return this.items.length === 0;
}

// 清空栈
array.prototype.clear = function () {
    return this.items = [];
}

// 栈大小
array.prototype.size = function () {
    return this.items.length;
}

var arr = new array();


arr.push(1)
arr.push(11)
arr.push(55)
arr.push(88)

console.log(arr.size())

arr.pop()
arr.pop()

console.log(arr.size())
console.log(arr.isEmpty())
console.log(arr.peek())

arr.clear()


console.log(JSON.stringify(arr))

