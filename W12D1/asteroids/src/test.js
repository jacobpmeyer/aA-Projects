function Car (color, size) {
  this.color = color
  this.size = size
}

function Sedan (color, size) {
  Car.call(this, color, size)
}

function Surrogate () {}
Surrogate.prototype = Car.prototype
Sedan.prototype = new Surrogate()
Sedan.prototype.contsructor = Sedan

sedan = new Sedan ("red", "medium")