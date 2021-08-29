"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tasker_app/tab";
exports.ids = ["pages/api/tasker_app/tab"];
exports.modules = {

/***/ "./pages/api/tasker_app/tab/index.ts":
/*!*******************************************!*\
  !*** ./pages/api/tasker_app/tab/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const tabs = await prisma.tab.findMany();\n    res.status(200);\n    res.json({\n      tabs\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFHQSw2QkFBZSwwQ0FBZ0JDLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUN0RSxRQUFNQyxNQUFNLEdBQUcsSUFBSUgsd0RBQUosQ0FBaUI7QUFBRUksSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLEdBQWpCLENBQWY7O0FBRUEsTUFBSTtBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNRixNQUFNLENBQUNHLEdBQVAsQ0FBV0MsUUFBWCxFQUFuQjtBQUNBTCxJQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYO0FBQ0FOLElBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUVKLE1BQUFBO0FBQUYsS0FBVDtBQUNILEdBSkQsQ0FJRSxPQUFNSyxDQUFOLEVBQVM7QUFDUFIsSUFBQUEsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWDtBQUNBTixJQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBUztBQUFFRSxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFUO0FBQ0gsR0FQRCxTQU9VO0FBQ04sVUFBTVIsTUFBTSxDQUFDUyxXQUFiO0FBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3Rhc2tlcl9hcHAvdGFiL2luZGV4LnRzP2VmMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFicyA9IGF3YWl0IHByaXNtYS50YWIuZmluZE1hbnkoKVxuICAgICAgICByZXMuc3RhdHVzKDIwMClcbiAgICAgICAgcmVzLmpzb24oeyB0YWJzIH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7IGVycm9yOiBcIlVuYWJsZSB0byBmZXRjaCB0YWJzXCIgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3RcbiAgICB9XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsInByaXNtYSIsImxvZyIsInRhYnMiLCJ0YWIiLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/index.ts"));
module.exports = __webpack_exports__;

})();