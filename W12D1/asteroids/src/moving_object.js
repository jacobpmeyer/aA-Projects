function MovingObject(pos, vel, radius, color, game) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
  this.game = game;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color
  ctx.beginPath();
  ctx.arc (
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function (){
  this.game.wrap(this.pos)
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  debugger
  const dist = this.collisionHelper(this.pos, otherObject.pos)
  return (dist < this.radius + otherObject.radius)
}

MovingObject.prototype.collisionHelper = function (pos1, pos2) {
  a = Math.pow(pos1[0] - pos2[0], 2) 
  b = Math.pow(pos1[1] - pos2[1], 2)
  return Math.sqrt(a + b)

}

MovingObject.prototype.collideWith = function (otherObject) {
  this.game.remove(otherObject);
  this.game.remove(this);
};

module.exports = MovingObject;