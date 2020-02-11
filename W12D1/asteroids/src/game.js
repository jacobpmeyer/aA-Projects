const Asteroid = require("./asteroid.js");

function Game (ctx){
    Game.DIM_X = 400;
    Game.DIM_Y = 400;
    Game.NUM_ASTEROIDS = 4;    
    this.asteroids = [];

    this.addAsteroids (ctx);
}

Game.prototype.addAsteroids = function (ctx) {
 while (this.asteroids.length < Game.NUM_ASTEROIDS) {
     let x = Math.floor(Math.random() * Game.DIM_X)
     let y = Math.floor(Math.random() * Game.DIM_Y)
     this.asteroids.push(new Asteroid({ pos: [x, y]}, this))
 };
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect (0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = "teal"
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach (function (ast) {
    ast.draw(ctx)
  })
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(function (ast) {
    ast.move();
  })
}

Game.prototype.wrap = function (pos){ 
    // const wrapped = function () {
      if (pos[0] > Game.DIM_X) {
        pos[0] = 0;
        }
      if (pos[1] > Game.DIM_Y) {
          pos[1] = 0;
      }
      if (pos[0] < 0) {
          pos[0] = Game.DIM_X;
      }
      if (pos[1] < 0) pos[1] = Game.DIM_Y;
    // }
    
    // return wrapped();
};

Game.prototype.checkCollisions = function () {
  for (let i = 0; i < this.asteroids.length; i++) {
  for (let j = i + 1; j < this.asteroids.length; j++) {
      let ast1 = this.asteroids[i], ast2 = this.asteroids[j]
      if (ast1.isCollidedWith(ast2)) {
        ast1.collideWith(ast2);
      }
    }
  }
}

Game.prototype.step = function () {
  this.moveObjects()
  this.checkCollisions()
}

Game.prototype.remove = function (asteroid) {
    for (let i = 0; i < this.asteroids.length; i++) {
        if (this.asteroids[i] === asteroid) {
            delete this.asteroids[i];
        }
    }
};

module.exports = Game;