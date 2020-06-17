/**
 * 
 * let names = ["iPhone X", "iPhone XS"]
 * let colors = ["黑色", "白色"]
 * let storages = ["64g", "256g"]
 * 
 * [
 *  ["iPhone X", "黑色", "64g"],
 *  ["iPhone X", "黑色", "256g"],
 *  ["iPhone X", "白色", "64g"],
 *  ["iPhone X", "白色", "256g"],
 *  ["iPhone XS", "黑色", "64g"],
 *  ["iPhone XS", "黑色", "256g"],
 *  ["iPhone XS", "白色", "64g"],
 *  ["iPhone XS", "白色", "256g"],
 * ]
 * 
 */

let names = ["iPhone X", "iPhone XS"]
let colors = ["黑色", "白色"]
let storages = ["64g", "256g"]

let combine = function (...chunks) {
    let res = [];
    let help = function (chunksIndex, prev) {
        let chunk = chunks[chunksIndex];
        let isLast = chunksIndex === chunks.length - 1;
        for(let val of chunk) {
            let cur = prev.concat(val)
            if(isLast) {
                res.push(cur)
            } else {
                help(chunksIndex + 1, cur)
            }
        }
    }

    // 初始化操作
    help(0, [])

    return res;
}

console.log(combine(names, colors, storages));
console.log(JSON.stringify(combine(names, colors, storages)));