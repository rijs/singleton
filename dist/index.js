"use strict";

/* istanbul ignore next */
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
module.exports = singleton;

function singleton(ripple) {
  log("exposing global");(client ? window : global).ripple = ripple;
  return ripple;
}

var client = _interopRequire(require("utilise/client"));

var log = _interopRequire(require("utilise/log"));

log = log("[ri/singleton]");