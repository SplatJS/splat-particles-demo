"use strict";
var particles = require("splat-ecs/lib/particles");

var bubbles = new particles.Config("bubble");
bubbles.angle = -Math.PI / 2;
bubbles.arcWidth = Math.PI / 8;
bubbles.lifeSpanMin = 600;
bubbles.lifeSpanMax = 800;
bubbles.qtyMin = 1;
bubbles.qtyMax = 10;
bubbles.sizeMin = 0.01;
bubbles.sizeMax = 0.8;
bubbles.velocityMin = 0.2;
bubbles.velocityMax = 0.4;

module.exports = function(entity, game) {  // eslint-disable-line no-unused-vars
  var position = game.entities.get(entity, "position");
  bubbles.origin.x = position.x;
  bubbles.origin.y = position.y;
  particles.create(game, bubbles);
  particles.create(game, bubbles);
};
