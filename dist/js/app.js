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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pers_enemy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pers_powerdot__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pers_player__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_render__ = __webpack_require__(4);





const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

const image = new Image()
image.src = 'img/pac.png'
image.onload = () => {
  window.addEventListener('resize', resizeCanvas, false)
  resizeCanvas()
}

const enemy = Object(__WEBPACK_IMPORTED_MODULE_0__pers_enemy__["a" /* default */])()

let data = {
    pscore: 0,
    gscore: 0
  }



const resizeCanvas = () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    data = Object(__WEBPACK_IMPORTED_MODULE_3__libs_render__["a" /* default */])(ctx, canvas, __WEBPACK_IMPORTED_MODULE_2__pers_player__["a" /* default */], enemy, __WEBPACK_IMPORTED_MODULE_1__pers_powerdot__["a" /* default */], data.pscore, data.gscore, image)
    requestAnimationFrame(resizeCanvas)
}

document.body.appendChild(canvas)

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((x = 110, y = 310, pacX = 0, pacY = 0, size = 32,  moving = 0, dirX = 0, dirY = 0, cutX = 32 , cutY = 32, speed = 5) => {
    return { x, y, pacX, pacY, size, moving, cutX, cutY, dirX, dirY, speed }
  });

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    x: 110,
    y: 310,
    powerup: false,
    pcountdoun: 0,
    ghostNum: 0,
    ghosteat: false
  });

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    x: 10,
    y: 30,
    pacX: 320, //пикселей до пакмана в спрайте 
    pacY: 0,
    cutX: 32,
    cutY: 32,
    size: 32, // размер иконки 
    speed: 5
  });

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((ctx, canvas,player, enemy, powerdot, pscore , gscore, image) => {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = '20px Verbana'
  
    ctx.fillStyle = 'white'
    ctx.fillText(`Человек: ${pscore} Сопливчик: ${gscore}`, 2, 20) 

    ctx.drawImage(image, player.pacX, player.pacY, player.cutX, player.cutY, player.x, player.y, player.size, player.size)
    ctx.drawImage(image, enemy.pacX, enemy.pacY, enemy.cutX, enemy.cutY, enemy.x, enemy.y, enemy.size, enemy.size)
});

/***/ })
/******/ ]);