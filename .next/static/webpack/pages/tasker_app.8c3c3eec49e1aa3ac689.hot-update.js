/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./reducers/settingsReducer.js":
/*!*************************************!*\
  !*** ./reducers/settingsReducer.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settingsReducer\": function() { return /* binding */ settingsReducer; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar settingsReducer = function settingsReducer(settings, action) {\n  switch (action.type) {\n    case 'setSettings':\n      return settings;\n\n    case 'toggleDarkMode':\n      settings = Object.create(settings);\n      return settings;\n\n    case 'setLayout':\n      return settings;\n\n    default:\n      console.log('hit default');\n      return settings;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvc2V0dGluZ3NSZWR1Y2VyLmpzP2QxNzUiXSwibmFtZXMiOlsic2V0dGluZ3NSZWR1Y2VyIiwic2V0dGluZ3MiLCJhY3Rpb24iLCJ0eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxFQUFzQjtBQUNqRCxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLGFBQUw7QUFDSSxhQUFPRixRQUFQOztBQUNKLFNBQUssZ0JBQUw7QUFDSUEsY0FBUSxHQUFHRyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osUUFBZCxDQUFYO0FBRUEsYUFBT0EsUUFBUDs7QUFDSixTQUFLLFdBQUw7QUFDSSxhQUFPQSxRQUFQOztBQUNKO0FBQ0lLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQSxhQUFPTixRQUFQO0FBWFI7QUFhSCxDQWRNIiwiZmlsZSI6Ii4vcmVkdWNlcnMvc2V0dGluZ3NSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzUmVkdWNlciA9IChzZXR0aW5ncywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NldFNldHRpbmdzJzpcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5nc1xuICAgICAgICBjYXNlICd0b2dnbGVEYXJrTW9kZSc6XG4gICAgICAgICAgICBzZXR0aW5ncyA9IE9iamVjdC5jcmVhdGUoc2V0dGluZ3MpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5nc1xuICAgICAgICBjYXNlICdzZXRMYXlvdXQnOlxuICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IGRlZmF1bHQnKVxuICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/settingsReducer.js\n");

/***/ })

});