"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./lib/useQueuedDbCall.js":
/*!********************************!*\
  !*** ./lib/useQueuedDbCall.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useQueuedDbCall\": function() { return /* binding */ useQueuedDbCall; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction useQueuedDbCall(_x, _x2) {\n  return _useQueuedDbCall.apply(this, arguments);\n}\n\nfunction _useQueuedDbCall() {\n  var _s2 = $RefreshSig$();\n\n  _useQueuedDbCall = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)(_s2( /*#__PURE__*/_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(item, cb) {\n    var _s = $RefreshSig$();\n\n    var _len,\n        cbParams,\n        _key,\n        firstRun,\n        finished,\n        _args = arguments;\n\n    return _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _s2();\n\n            for (_len = _args.length, cbParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n              cbParams[_key - 2] = _args[_key];\n            }\n\n            console.log(\"queued db call enter, called on: \".concat(item, \", callback: \").concat(cb, \"(\").concat(cbParams, \")\"));\n\n            if (!(item.id[0] != 'T')) {\n              _context.next = 7;\n              break;\n            }\n\n            //if an items ID isn't a temporary set one denoted by T at the start\n            console.log(\"id: \".concat(item.id, \" doesn't start with T, calling the cb and exitting\"));\n            cb.apply(void 0, cbParams);\n            return _context.abrupt(\"return\");\n\n          case 7:\n            firstRun = true;\n            finished = false;\n            (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_s(function () {\n              _s();\n\n              if (firstRun) {\n                console.log(\"useEffect active and first run cancelled, waiting for change in item.id\");\n                firstRun = false;\n                return;\n              }\n\n              console.log(\"change in item.id triggered, calling hook again, id: \".concat(id));\n              useQueuedDbCall(item, cb, cbParams);\n              finished = true;\n              console.log(\"completed and now returning the function\");\n              return;\n            }, \"hIwsIovVM4gH1pm4wJoPUZjg6nI=\", false, function () {\n              return [useQueuedDbCall];\n            }), [item.id]);\n\n            if (!finished) {\n              _context.next = 12;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }), \"OD7bBpZva5O2jO+Puf00hKivP7c=\"));\n  return _useQueuedDbCall.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXNlUXVldWVkRGJDYWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBZUMsZUFBdEI7QUFBQTtBQUFBOzs7OzsyVEFBTyxpQkFBK0JDLElBQS9CLEVBQXFDQyxFQUFyQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHNDQUE0Q0MsUUFBNUM7QUFBNENBLGNBQUFBLFFBQTVDO0FBQUE7O0FBQ0hDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUiw0Q0FBZ0RKLElBQWhELHlCQUFtRUMsRUFBbkUsY0FBeUVDLFFBQXpFOztBQURHLGtCQUVDRixJQUFJLENBQUNLLEVBQUwsQ0FBUSxDQUFSLEtBQWMsR0FGZjtBQUFBO0FBQUE7QUFBQTs7QUFFc0I7QUFDckJGLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQkosSUFBSSxDQUFDSyxFQUF4QjtBQUNBSixZQUFBQSxFQUFFLE1BQUYsU0FBTUMsUUFBTjtBQUpEOztBQUFBO0FBUUNJLFlBQUFBLFFBUkQsR0FRWSxJQVJaO0FBU0NDLFlBQUFBLFFBVEQsR0FTWSxLQVRaO0FBVUhULFlBQUFBLGdEQUFTLElBQUMsWUFBTTtBQUFBOztBQUNaLGtCQUFJUSxRQUFKLEVBQWM7QUFDVkgsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBRSxnQkFBQUEsUUFBUSxHQUFHLEtBQVg7QUFDQTtBQUNIOztBQUVESCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0VBQW9FQyxFQUFwRTtBQUNBTixjQUFBQSxlQUFlLENBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFXQyxRQUFYLENBQWY7QUFDQUssY0FBQUEsUUFBUSxHQUFHLElBQVg7QUFDQUosY0FBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0E7QUFDSCxhQVpRO0FBQUEsc0JBUUxMLGVBUks7QUFBQSxnQkFZUCxDQUFDQyxJQUFJLENBQUNLLEVBQU4sQ0FaTyxDQUFUOztBQVZHLGlCQXdCQ0UsUUF4QkQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZVF1ZXVlZERiQ2FsbC5qcz8wNWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VRdWV1ZWREYkNhbGwoaXRlbSwgY2IsIC4uLmNiUGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2coYHF1ZXVlZCBkYiBjYWxsIGVudGVyLCBjYWxsZWQgb246ICR7aXRlbX0sIGNhbGxiYWNrOiAke2NifSgke2NiUGFyYW1zfSlgKVxuICAgIGlmIChpdGVtLmlkWzBdICE9ICdUJykgeyAvL2lmIGFuIGl0ZW1zIElEIGlzbid0IGEgdGVtcG9yYXJ5IHNldCBvbmUgZGVub3RlZCBieSBUIGF0IHRoZSBzdGFydFxuICAgICAgICBjb25zb2xlLmxvZyhgaWQ6ICR7aXRlbS5pZH0gZG9lc24ndCBzdGFydCB3aXRoIFQsIGNhbGxpbmcgdGhlIGNiIGFuZCBleGl0dGluZ2ApXG4gICAgICAgIGNiKC4uLmNiUGFyYW1zKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZmlyc3RSdW4gPSB0cnVlXG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2VcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZmlyc3RSdW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c2VFZmZlY3QgYWN0aXZlIGFuZCBmaXJzdCBydW4gY2FuY2VsbGVkLCB3YWl0aW5nIGZvciBjaGFuZ2UgaW4gaXRlbS5pZGApXG4gICAgICAgICAgICBmaXJzdFJ1biA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhgY2hhbmdlIGluIGl0ZW0uaWQgdHJpZ2dlcmVkLCBjYWxsaW5nIGhvb2sgYWdhaW4sIGlkOiAke2lkfWApXG4gICAgICAgIHVzZVF1ZXVlZERiQ2FsbChpdGVtLCBjYiwgY2JQYXJhbXMpXG4gICAgICAgIGZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICBjb25zb2xlLmxvZyhgY29tcGxldGVkIGFuZCBub3cgcmV0dXJuaW5nIHRoZSBmdW5jdGlvbmApXG4gICAgICAgIHJldHVyblxuICAgIH0sW2l0ZW0uaWRdKVxuXG4gICAgaWYgKGZpbmlzaGVkKSByZXR1cm5cbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUXVldWVkRGJDYWxsIiwiaXRlbSIsImNiIiwiY2JQYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJmaXJzdFJ1biIsImZpbmlzaGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useQueuedDbCall.js\n");

/***/ })

});