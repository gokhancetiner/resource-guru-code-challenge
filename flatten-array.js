const assert = require("assert");

function flatten(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = [...result, ...flatten(arr[i])]
        } else {
            result.push(arr[i])
        }
    }
    return result
}

let sampleArr = [1, [2, [3]], 4]
const resultArr = flatten(sampleArr)

assert.deepEqual(resultArr, [1, 2, 3, 4])