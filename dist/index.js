"use strict";

/* istanbul ignore next */
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
module.exports = singleton;

function singleton(ripple) {
  log("exposing global");
  owner.ripple = ripple;
  return ripple;
}

var owner = _interopRequire(require("utilise/owner"));

var log = _interopRequire(require("utilise/log"));

log = log("[ri/singleton]");