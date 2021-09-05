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
exports.id = "pages/api_test";
exports.ids = ["pages/api_test"];
exports.modules = {

/***/ "./pages/api_test.jsx":
/*!****************************!*\
  !*** ./pages/api_test.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/api_test.jsx\";\n\n\nconst fetchTabsRequest = async id => {\n  try {\n    const response = await fetch(`/api/tasker_app/tab/${id}`);\n    console.log('sent fetch');\n    const {\n      tabs: tabsData\n    } = await response.json();\n    console.log(tabsData);\n    return await tabsData;\n  } catch (error) {\n    console.log(`failed fetching tabs: ${error}`);\n  }\n};\n\nconst api_test = () => {\n  const {\n    0: tabs,\n    1: setTabs\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{\n    id: 1,\n    name: 'loading...'\n  }, {\n    id: 2,\n    name: 'loading...'\n  }]); // setTabs(fetchTabsRequest(1))\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"hello world\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api_test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGlfdGVzdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUdBLE1BQU1FLGdCQUFnQixHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNuQyxNQUFJO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSx1QkFBc0JGLEVBQUcsRUFBM0IsQ0FBNUI7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUVBLFVBQU07QUFBRUMsTUFBQUEsSUFBSSxFQUFFQztBQUFSLFFBQXFCLE1BQU1MLFFBQVEsQ0FBQ00sSUFBVCxFQUFqQztBQUNBSixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsUUFBWjtBQUNBLFdBQU8sTUFBTUEsUUFBYjtBQUNILEdBUEQsQ0FPRSxPQUFNRSxLQUFOLEVBQWE7QUFDWEwsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEseUJBQXdCSSxLQUFNLEVBQTNDO0FBQ0g7QUFDSixDQVhEOztBQWNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ25CLFFBQU07QUFBQSxPQUFDSixJQUFEO0FBQUEsT0FBT0s7QUFBUCxNQUFrQlosK0NBQVEsQ0FBQyxDQUFDO0FBQUVFLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNXLElBQUFBLElBQUksRUFBRTtBQUFmLEdBQUQsRUFBZ0M7QUFBRVgsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU1csSUFBQUEsSUFBSSxFQUFFO0FBQWYsR0FBaEMsQ0FBRCxDQUFoQyxDQURtQixDQUluQjs7QUFNQSxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBaUJILENBM0JEOztBQTZCQSxpRUFBZUYsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpX3Rlc3QuanN4PzQyNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IGZldGNoVGFic1JlcXVlc3QgPSBhc3luYyAoaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Rhc2tlcl9hcHAvdGFiLyR7aWR9YClcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbnQgZmV0Y2gnKVxuXG4gICAgICAgIGNvbnN0IHsgdGFiczogdGFic0RhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyh0YWJzRGF0YSlcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRhYnNEYXRhXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgZmFpbGVkIGZldGNoaW5nIHRhYnM6ICR7ZXJyb3J9YClcbiAgICB9XG59XG5cblxuY29uc3QgYXBpX3Rlc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RhYnMsIHNldFRhYnNdID0gdXNlU3RhdGUoW3sgaWQ6IDEsIG5hbWU6ICdsb2FkaW5nLi4uJyB9LCB7IGlkOiAyLCBuYW1lOiAnbG9hZGluZy4uLicgfV0pXG5cbiAgICBcbiAgICAvLyBzZXRUYWJzKGZldGNoVGFic1JlcXVlc3QoMSkpXG5cbiAgICBcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgaGVsbG8gd29ybGRcbiAgICAgICAgICAgIHsvKiA8dWw+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhYnMubWFwKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt0YWIuaWR9Pnt0YWIubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RhYnMgPSBhd2FpdCBmZXRjaFRhYnNSZXF1ZXN0KDEpXG4gICAgICAgICAgICAgICAgc2V0VGFicyhuZXdUYWJzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfT5GZXRjaCB0YWJzPC9idXR0b24+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlfdGVzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZldGNoVGFic1JlcXVlc3QiLCJpZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwidGFicyIsInRhYnNEYXRhIiwianNvbiIsImVycm9yIiwiYXBpX3Rlc3QiLCJzZXRUYWJzIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api_test.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api_test.jsx"));
module.exports = __webpack_exports__;

})();