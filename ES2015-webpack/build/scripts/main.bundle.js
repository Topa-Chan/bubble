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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sitemapContainer = document.getElementById("sitemap");
var sitemap_ul = document.createElement("ul");
sitemapContainer.appendChild(sitemap_ul);

//Json
var sitemapData;
var request = new XMLHttpRequest();

loadData();

function loadData() {
  request.open('GET', 'scripts/sitemap.json');
  console.log("loading");
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
  console.log("In loadComplete");
  // console.log(request.responseText);
  sitemapData = JSON.parse(request.responseText);
  console.log("Completed sitemapData");
  createSiteMap();
}

//Create Sitemap
function createSiteMap() {
  console.log("In createSiteMap");
  console.log(sitemapData);
  console.log(sitemapData.pages);
  for (var i = 0; i < sitemapData.pages.length; i++) {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.textContent = sitemapData.pages[i].title;
    link.href = sitemapData.pages[i].href;
    li.appendChild(link);
    sitemap_ul.appendChild(li);
  }
  sitemapContainer.appendChild(sitemap_ul);
}

/***/ })
/******/ ]);