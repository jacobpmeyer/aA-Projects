console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js")
const GameView = require("./game_view.js")

window.MovingObject = MovingObject;
window.Util = Util

let canvasEl;
window.addEventListener("DOMContentLoaded", function (event) {
  canvasEl = document.getElementById("game-canvas")
  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx)
  const gameView = new GameView(game, ctx)
  gameView.start();
  window.game = game;
//   const mo = new MovingObject([5,5], 1, 10, "red")
//   mo.draw(ctx);
//   window.ctx = ctx;
//   window.hello = "hello";

//   const a = new Asteroid({pos: [70, 70]})
//   a.draw(ctx);
})