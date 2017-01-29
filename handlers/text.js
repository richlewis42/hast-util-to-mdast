'use strict';

module.exports = text;

var u = require('unist-builder');
var trimLines = require('trim-lines');

function text(h, node) {
  if (node.value.match(/(\n+)/g)) {
    return null;
  }

  return h.augment(node, u('text', trimLines(node.value)));
}
