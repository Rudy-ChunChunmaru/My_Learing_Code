/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../\u0000#\u0000#_Latihan/understading_typescript/13/src/app.ts":
/*!*******************************************************************!*\
  !*** ../../../ # #_Latihan/understading_typescript/13/src/app.ts ***!
  \*******************************************************************/
/***/ (() => {

eval("\nconst form = document.querySelector(\"form\");\nconst addressInput = document.getElementById(\"address\");\nfunction searchAddressHandler(event) {\n    event.preventDefault();\n    const coordinates = { lat: 40.41, lng: -73.99 };\n    document.getElementById(\"map\").innerHTML = \"\";\n    new ol.Map({\n        target: \"map\",\n        layers: [\n            new ol.layer.Tile({\n                source: new ol.source.OSM(),\n            }),\n        ],\n        view: new ol.View({\n            center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),\n            zoom: 16,\n        }),\n    });\n}\nform.addEventListener(\"submit\", searchAddressHandler);\n\n\n//# sourceURL=webpack://12/../../../%00#%00#_Latihan/understading_typescript/13/src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../../\u0000#\u0000#_Latihan/understading_typescript/13/src/app.ts"]();
/******/ 	
/******/ })()
;