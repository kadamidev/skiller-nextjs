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
exports.id = "pages/api/tasker_app/tab/[id]";
exports.ids = ["pages/api/tasker_app/tab/[id]"];
exports.modules = {

/***/ "./pages/api/tasker_app/tab/[id].ts":
/*!******************************************!*\
  !*** ./pages/api/tasker_app/tab/[id].ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n  const {\n    userId\n  } = req.query;\n\n  try {\n    const tabs = await prisma.tab.findMany({\n      where: {\n        user_id: userId\n      }\n    });\n    res.status(200);\n    res.json({\n      tabs\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFpQjtBQUFFSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQVAsR0FBakIsQ0FBZjtBQUNBLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFhSixHQUFHLENBQUNLLEtBQXZCOztBQUNBLE1BQUk7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUosTUFBTSxDQUFDSyxHQUFQLENBQVdDLFFBQVgsQ0FBb0I7QUFDbkNDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxPQUFPLEVBQUVOO0FBRE47QUFENEIsS0FBcEIsQ0FBbkI7QUFLQUgsSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWDtBQUNBVixJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBUztBQUFFTixNQUFBQTtBQUFGLEtBQVQ7QUFDSCxHQVJELENBUUUsT0FBTU8sQ0FBTixFQUFTO0FBQ1BaLElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVg7QUFDQVYsSUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVM7QUFBRUUsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBVDtBQUNILEdBWEQsU0FXVTtBQUNOLFVBQU1aLE1BQU0sQ0FBQ2EsV0FBYjtBQUNIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL3RhYi9baWRdLnRzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KVxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEucXVlcnlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWJzID0gYXdhaXQgcHJpc21hLnRhYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMClcbiAgICAgICAgcmVzLmpzb24oeyB0YWJzIH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7IGVycm9yOiBcIlVuYWJsZSB0byBmZXRjaCB0YWJzXCIgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3RcbiAgICB9XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsInByaXNtYSIsImxvZyIsInVzZXJJZCIsInF1ZXJ5IiwidGFicyIsInRhYiIsImZpbmRNYW55Iiwid2hlcmUiLCJ1c2VyX2lkIiwic3RhdHVzIiwianNvbiIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/[id].ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/[id].ts"));
module.exports = __webpack_exports__;

})();