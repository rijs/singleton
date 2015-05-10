(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"utilise/log":2,"utilise/owner":8}],2:[function(require,module,exports){
module.exports = require('log')
},{"log":3}],3:[function(require,module,exports){
var is = require('is')
  , to = require('to')

module.exports = function log(prefix){
  return function(d){
    is.arr(arguments[2]) && (arguments[2] = arguments[2].length)
    var args = to.arr(arguments)
    args.unshift(''.grey ? prefix.grey : prefix)
    return console.log.apply(console, args), d
  }
}
},{"is":4,"to":5}],4:[function(require,module,exports){
module.exports = { 
  fn     : isFunction
, str    : isString
, num    : isNumber
, obj    : isObject
, truthy : isTruthy
, falsy  : isFalsy
, arr    : isArray
, null   : isNull
, def    : isDef
, in     : isIn
}

function isFunction(d) {
  return typeof d == 'function'
}

function isString(d) {
  return typeof d == 'string'
}

function isNumber(d) {
  return typeof d == 'number'
}

function isObject(d) {
  return typeof d == 'object'
}

function isTruthy(d) {
  return !!d == true
}

function isFalsy(d) {
  return !!d == false
}

function isArray(d) {
  return d instanceof Array
}

function isNull(d) {
  return d === null
}

function isDef(d) {
  return typeof d !== 'undefined'
}

function isIn(set) {
  return function(d){
    return ~set.indexOf(d)
  }
}
},{}],5:[function(require,module,exports){
module.exports = { 
  arr : toArray
}

function toArray(d){
  return Array.prototype.slice.call(d, 0)
}
},{}],6:[function(require,module,exports){
(function (global){
module.exports = require('client') ? window : global
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"client":7}],7:[function(require,module,exports){
module.exports = typeof window != 'undefined'
},{}],8:[function(require,module,exports){
module.exports = require('owner')
},{"owner":6}]},{},[1]);
