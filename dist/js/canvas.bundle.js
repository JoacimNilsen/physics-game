/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./src/js/platform.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particle */ "./src/js/particle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    ground = Object(_platform__WEBPACK_IMPORTED_MODULE_0__["platform"])(innerHeight / 1.5, 0, 50, 1),
    goal = Object(_platform__WEBPACK_IMPORTED_MODULE_0__["platform"])(100, 500, 10),
    startingPosition = [100, ground.vectors[0][1] - 200],
    sling = new _particle__WEBPACK_IMPORTED_MODULE_1__["particle"]([50, 50]),
    gravity = 1;
var ball = new _particle__WEBPACK_IMPORTED_MODULE_1__["particle"](startingPosition),
    paths;
sling.mass = 15;
ball.mass = 1;
ball.radius = 5;
canvas.width = innerWidth;
canvas.height = innerHeight;

var renderPlatform = function renderPlatform(platform, width) {
  var path = new Path2D();
  platform.vectors.map(function (point, index) {
    var _point = _slicedToArray(point, 2),
        x = _point[0],
        y = _point[1];

    if (index === 0) {
      context.beginPath();
      path.moveTo(x, y);
      return;
    }

    var nextPoint = x + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["calculateWidth"])(width, platform.vectors.length, index);
    path.lineTo(nextPoint, y);
  });
  context.stroke(path);
  path.closePath();
  paths = path;
};

var renderObject = function renderObject(obj) {
  context.beginPath();
  context.arc(obj.position[0], obj.position[1], obj.radius, 0, Math.PI * 2, false);
  context.fill();
  context.closePath();
  context.stroke();
};

var detectCollision = function detectCollision(p) {
  console.log(context.isPointInPath(p.position[0], p.position[1], "nonzero"));
  ground.vectors.forEach(function (point) {
    var _p$velocity = _slicedToArray(p.velocity, 2),
        vx = _p$velocity[0],
        vy = _p$velocity[1]; // if(p.position[1]+p.radius*Math.PI > point[1]){
    //     vy = -gravity
    //     p = applyForce(p, p.mass, [vx, vy])
    //     return
    // } 


    if (p.position[1] === point[1]) {
      vy *= -1;
      p = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["applyForce"])(p, p.mass, [vx, vy]);
    }
  });
  return p;
}; //update the position of the object by adding the velocity to the current position


var updatePosition = function updatePosition(p, gravity) {
  p = detectCollision(p);
  context.clearRect(0, 0, canvas.width, canvas.height);

  var _ref = [p.position, p.velocity, p.accel],
      _ref$ = _slicedToArray(_ref[0], 2),
      px = _ref$[0],
      py = _ref$[1],
      _ref$2 = _slicedToArray(_ref[1], 2),
      vx = _ref$2[0],
      vy = _ref$2[1],
      _ref$3 = _slicedToArray(_ref[2], 2),
      ax = _ref$3[0],
      ay = _ref$3[1];

  vy = vy + ay + 1;
  vx = vx + ax;
  var position = [px + vx, py + vy],
      velocity = [vx, vy],
      accel = [0, 0];
  return _objectSpread(_objectSpread({}, p), {}, {
    position: position,
    velocity: velocity,
    accel: accel
  });
};

var animate = function animate(fn) {
  var cb = function cb() {
    requestAnimationFrame(cb);
    fn();
  };

  return cb;
};

renderPlatform(ground, canvas.width);
animate(function () {
  return ball = updatePosition(ball, ground.mass);
})(); // animate( () => renderPlatform(goal, 200))()

animate(function () {
  return renderObject(ball);
})();
animate(function () {
  return renderObject(sling);
})();

/***/ }),

/***/ "./src/js/particle.js":
/*!****************************!*\
  !*** ./src/js/particle.js ***!
  \****************************/
/*! exports provided: particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "particle", function() { return particle; });
var particle = function particle() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
  var velocity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];
  var accel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
  var mass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return {
    position: position,
    velocity: velocity,
    accel: accel,
    mass: mass
  };
};

/***/ }),

/***/ "./src/js/platform.js":
/*!****************************!*\
  !*** ./src/js/platform.js ***!
  \****************************/
/*! exports provided: platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return platform; });
var platform = function platform() {
  var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var points = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var mass = arguments.length > 3 ? arguments[3] : undefined;
  var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var vectors = Array(points).fill(true).map(function (point, index) {
    return [index + start, height - index];
  });
  return {
    vectors: vectors,
    mass: mass
  };
};

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: calculateDistance, calculateWidth, degToRad, radToDeg, magnitude, normalize, scale, dot, add, applyForce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDistance", function() { return calculateDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateWidth", function() { return calculateWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degToRad", function() { return degToRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radToDeg", function() { return radToDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magnitude", function() { return magnitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyForce", function() { return applyForce; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var calculateDistance = function calculateDistance(_ref, _ref2) {
  var _ref3 = _slicedToArray(_ref, 2),
      x1 = _ref3[0],
      y1 = _ref3[1];

  var _ref4 = _slicedToArray(_ref2, 2),
      x2 = _ref4[0],
      y2 = _ref4[1];

  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
},
    //to determine out how wide to make a platform made of x points, we take the required width / points * index+1
calculateWidth = function calculateWidth(width, sections, index) {
  return width / sections * (index + 1);
},
    //convert degrees to radians and the other way around
degToRad = function degToRad(deg) {
  return deg * Math.PI / 180;
},
    radToDeg = function radToDeg(rad) {
  return rad * 180 / Math.PI;
},
    //get the length of a vector
magnitude = function magnitude(_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      x = _ref6[0],
      y = _ref6[1];

  return Math.sqrt(x * x, y * y);
},
    //get the direction of a vector
normalize = function normalize(vector) {
  return scale(vector, 1 / magnitude(vector) || 1);
},
    scale = function scale(_ref7, n) {
  var _ref8 = _slicedToArray(_ref7, 2),
      x = _ref8[0],
      y = _ref8[1];

  return [n * x, n * y];
},
    dot = function dot(_ref9, _ref10) {
  var _ref11 = _slicedToArray(_ref9, 2),
      x1 = _ref11[0],
      y1 = _ref11[1];

  var _ref12 = _slicedToArray(_ref10, 2),
      x2 = _ref12[0],
      y2 = _ref12[1];

  return x1 * x2 + y1 * y2;
},
    add = function add() {
  for (var _len = arguments.length, vx = new Array(_len), _key = 0; _key < _len; _key++) {
    vx[_key] = arguments[_key];
  }

  return vx.reduce(function (a, v) {
    return [a[0] + v[0], a[1] + v[1]];
  }, [0, 0]);
},
    applyForce = function applyForce(obj, mass, force) {
  var accel = obj.accel;
  accel = add(scale(force, mass), accel);
  return _objectSpread(_objectSpread({}, obj), {}, {
    accel: accel
  });
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map