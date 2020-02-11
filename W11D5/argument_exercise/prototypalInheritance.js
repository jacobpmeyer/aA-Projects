Function.prototype.inherits = function(parent) {

    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.contructor = this;

};

// Class === function
// Class.inherits(parent)

function MovingObject() {}
MovingObject.prototype.eat = function() { console.log("I can eat") }

function Ship() {}
Ship.prototype = Object.create(MovingObject.prototype)
Ship.prototype.constructor = Ship;
// Ship.inherits(MovingObject);
Ship.prototype.dance = function() { console.log("I can dance") }


function Asteroid() {}
Asteroid.prototype = Object.create(MovingObject.prototype)
Asteroid.prototype.constructor = Asteroid;
// Asteroid.inherits(MovingObject);
Asteroid.prototype.play = function() { console.log("I can play") }

const ship = new Ship()
ship.eat()
ship.dance()

const ast = new Asteroid()
ast.eat()
ast.play()