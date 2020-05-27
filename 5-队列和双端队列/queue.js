
const jsonString = (el) => JSON.stringify(el);
// queue
// 队列

class Queue {
    constructor() {
        this.count = 0;         // 控制队列大小
        this.lowestCount = 0;   // 最终第一个元素
        this.items = {};        // 使用对象存储我们的元素
    }

    // 1-向队列添加元素
    enqueue(ele) {
        this.items[this.count] = ele;
        this.count++;
    }

    // 2-从队列移除元素
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];    // 取出该元素,暂存
        delete this.items[this.lowestCount];            // 队列中删除
        this.lowestCount++;
        return result;                                  // 返回元素
    }

    // 3-查看队列头元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    // 4-检查队列是否为空
    isEmpty() {
        return this.count - this.lowestCount === 0;
        // return this.size() === 0;
    }

    // 5-获取队列长度
    size() {
        return this.count - this.lowestCount;
    }

    // 6-清空队列
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }



    // 
    get() {
        console.log(jsonString(this.items))
    }

}


const res = new Queue()

res.enqueue(5)
res.enqueue(8)

console.log(jsonString(res))

res.dequeue()
console.log(jsonString(res))

console.log(jsonString(res.peek()))

console.log(jsonString(res.size()))

res.clear();

console.log(jsonString(res))



// res.get()