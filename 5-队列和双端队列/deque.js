const jsonString = (el) => JSON.stringify(el);

// deque
// 双端队列

class deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.item = {};
    }


    // 1-前端添加元素

    addFront(ele) {
        if (this.isEmpty()) {
            this.addBack(ele);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.item[this.lowestCount] = ele;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.item[i] = this.item[i - 1]
            }
            this.count++;
            this.lowestCount = 0;
            this.item[0] = ele;
        }
    }

    // 2-后端添加元素
    addBack(ele) {
        this.item[this.count] = ele;
        this.count++;
    }

    // 3-前端移除第一个元素
    removeFront(ele) {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.item[this.lowestCount];
        delete this.item[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    // 4-删除末尾元素
    removeBack(ele) {
        delete this.item[this.count - 1];
        this.count -- ;
    }

    // 5-返回前端第一个元素
    peekFront() {
        return this.item[this.lowestCount];
    }

    // 6-返回后端第一个元素
    peekBack() {
        return this.item[this.count - 1];
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
        // return this.size() === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

}


const res = new deque();

console.log(res.isEmpty())

res.addBack('john')
res.addBack('jack')

console.log(jsonString(res))

res.addBack('white')

console.log(jsonString(res))

console.log(jsonString(res.size()))

console.log(jsonString(res.isEmpty()))

res.removeFront();

console.log(jsonString(res.size()))

console.log(jsonString(res))

res.removeBack();

console.log(jsonString(res))

res.addFront('john')

console.log(jsonString(res))
console.log(jsonString(res.size()))