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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      tab: tabData\n    } = req.body;\n    const tabs = await prisma.tab.findMany({\n      where: {\n        user_id: tabData.user_id\n      }\n    });\n    res.status(200);\n    res.json({\n      tabs\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFHQSw2QkFBZSwwQ0FBZ0JDLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUN0RSxRQUFNQyxNQUFNLEdBQUcsSUFBSUgsd0RBQUosQ0FBaUI7QUFBRUksSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLEdBQWpCLENBQWY7O0FBRUEsTUFBSTtBQUNBLFVBQU07QUFBQ0MsTUFBQUEsR0FBRyxFQUFFQztBQUFOLFFBQWlCTCxHQUFHLENBQUNNLElBQTNCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXSSxRQUFYLENBQW9CO0FBQ25DQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsT0FBTyxFQUFFTCxPQUFPLENBQUNLO0FBRGQ7QUFENEIsS0FBcEIsQ0FBbkI7QUFLQVQsSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWDtBQUNBVixJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBUztBQUFFTCxNQUFBQTtBQUFGLEtBQVQ7QUFDSCxHQVRELENBU0UsT0FBTU0sQ0FBTixFQUFTO0FBQ1BaLElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVg7QUFDQVYsSUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVM7QUFBRUUsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBVDtBQUNILEdBWkQsU0FZVTtBQUNOLFVBQU1aLE1BQU0sQ0FBQ2EsV0FBYjtBQUNIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL3RhYi9pbmRleC50cz9lZjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7IGxvZzogW1wicXVlcnlcIl0gfSlcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHt0YWI6IHRhYkRhdGF9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgdGFicyA9IGF3YWl0IHByaXNtYS50YWIuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0YWJEYXRhLnVzZXJfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApXG4gICAgICAgIHJlcy5qc29uKHsgdGFicyB9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgcmVzLmpzb24oeyBlcnJvcjogXCJVbmFibGUgdG8gZmV0Y2ggdGFic1wiIH0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJsb2ciLCJ0YWIiLCJ0YWJEYXRhIiwiYm9keSIsInRhYnMiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcl9pZCIsInN0YXR1cyIsImpzb24iLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/index.ts\n");

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