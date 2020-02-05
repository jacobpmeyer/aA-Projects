// Array.prototype.myUniq = function() {
//   const newArr = []

//   this.forEach (function(el) {
//     if (!newArr.includes(el)) {
//       console.log(newArr)
//         newArr.push(el);
//     }
//   })
//   return newArr;
// }

// [1, 2, 3, 3].myUniq();
debugger;
const sayHello = function() {
  debugger;
  let s = "test"
  const r = "stop"
  console.log("hello");
}

sayHello();

// Array.prototype.twoSum = function(){
//     for (let i = 0; i < this.length - 1; i++) {
//         const par1 = this[i];
        
//         for (let ii = i+1; ii < this.length; ii++) {
//             const pair2 = this[ii];
//             if (par1 + pair2 === 0) {
//                 return [i, ii]
//             }
//         }
//     }
// }

// Array.prototype.transpose = function() {
//     const transposed = Array.from(new Array(this.length), () => new Array())
//     for (let i = 0; i < this.length; i++) {
//         const subArray = this[i]
//         for (let subi = 0; subi < subArray.length; subi++) {
//             transposed[subi][i] = subArray[subi] //array
//         }
        
//     }
//     return transposed;
// }
// x = [[1, 1, 1], [2, 2, 2], [3, 3, 3]].transpose();

// Array.prototype.myeach = function(cb) {

//   for(let i = 0; i < this.length; i++ ) {
//     cb(this[i])
//   }

// }

// // [1, 2, 3].myeach(function(el) {
// //   console.log(el)
// // })


// Array.prototype.myMap = function(cb) {
//     mapped = []
//     // function(elm) { ... }
//     // elm => mapped.push(cb(elm))
//     // elm => {
//     //     mapped.push(cb(elm))
//     // })
//     this.myeach(elm => {
//         mapped.push(cb(elm))
//     })
//     return mapped
// }
// x = [1, 2, 3].myMap(function(el) {
//     return el * 2
// })
// console.log(x)


// Array.prototype.myReduce = function(cb, val) {
//   let newArray = this
//   if (val === undefined) {
//     val = newArray[0]
//     newArray = this.slice(1)
//   }
//   let sum = val;
//   newArray.myeach(elm => sum = cb(sum, elm))
//   return sum;
// }

// // without initialValue
// console.log([1, 2, 3].myReduce(function (acc, el) {
//   return acc + el;
// })) // => 6

// // with initialValue
// x = [1, 2, 3].myReduce(function (acc, el) {
//   return acc + el;
// }, 25); // => 31

// console.log(x)

Array.prototype.bubbleSort = function() {
    sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < this.length -1; i++) {
            if (this[i] > this[i +1]){
                el = this[i]
                el2 = this[i + 1]
                el, el2 = el2, el
                sorted = false
            }
        }
    }
}
