'use strict';

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
module.exports = function singleton(ripple) {
  log('creating');
  if (!owner.ripple) owner.ripple = ripple;
  return ripple;
};

var owner = require('utilise/owner'),
    log = require('utilise/log')('[ri/singleton]');