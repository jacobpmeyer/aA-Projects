const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");


const DEFAULTS = { COLOR: "orange", RADIUS: 30, SPEED: 4 };

function Asteroid (obj, game){
//   args = Array.from(arguments);
  this.color = DEFAULTS.COLOR;
  this.radius = DEFAULTS.RADIUS;
  this.vel = Util.randomVec(DEFAULTS.SPEED);
  this.pos = obj.pos;
  this.game = game
//   MovingObject.call(this, obj.pos);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid