Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}

// [1, 2].myEach(function (el) {
//   console.log(el)
// })

Array.prototype.myMap = function (cb) {
  let mapped = []
  this.myEach(el => mapped.push(cb(el))
  return mapped
}

[1, 2].myMap(function(el) {
  return (el * 2);
})