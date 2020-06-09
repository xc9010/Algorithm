
function myInstanceof(left, right) {
    let prototype = right.prototype
    left = left.__proto__
    while (true) {
      if (left === null || left === undefined)
        return false
      if (prototype === left)
        return true
      left = left.__proto__
    }
  }

function person () {
    console.log(1)
}

let obj = new person();

console.log(myInstanceof(obj, person))