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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settingsReducer\": function() { return /* binding */ settingsReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar settingsReducer = function settingsReducer(settings, action) {\n  switch (action.type) {\n    case 'setSettings':\n      console.log(\"set settings \".concat(action.payload.settings));\n      if (action.payload.settings) return action.payload.settings;\n      console.log('settings didnt exist, created default');\n      return {\n        darkMode: false,\n        layout: 2\n      };\n    //default if settings save doesn't exist \n\n    case 'toggleDarkMode':\n      var darkModeToggledSettings = _objectSpread({}, settings);\n\n      darkModeToggledSettings.darkMode = !settings.darkMode;\n      return darkModeToggledSettings;\n\n    case 'setLayout':\n      var layoutChangedSettings = _objectSpread({}, settings);\n\n      layoutChangedSettings.layout = action.payload.layout;\n      return layoutChangedSettings;\n\n    default:\n      console.log('hit default');\n      return settings;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvc2V0dGluZ3NSZWR1Y2VyLmpzP2QxNzUiXSwibmFtZXMiOlsic2V0dGluZ3NSZWR1Y2VyIiwic2V0dGluZ3MiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJkYXJrTW9kZSIsImxheW91dCIsImRhcmtNb2RlVG9nZ2xlZFNldHRpbmdzIiwibGF5b3V0Q2hhbmdlZFNldHRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxFQUFzQjtBQUNqRCxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLGFBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLHdCQUE0QkgsTUFBTSxDQUFDSSxPQUFQLENBQWVMLFFBQTNDO0FBQ0EsVUFBSUMsTUFBTSxDQUFDSSxPQUFQLENBQWVMLFFBQW5CLEVBQTZCLE9BQU9DLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTCxRQUF0QjtBQUM3QkcsYUFBTyxDQUFDQyxHQUFSLENBQVksdUNBQVo7QUFDQSxhQUFPO0FBQUNFLGdCQUFRLEVBQUUsS0FBWDtBQUFrQkMsY0FBTSxFQUFFO0FBQTFCLE9BQVA7QUFBb0M7O0FBQ3hDLFNBQUssZ0JBQUw7QUFDSSxVQUFNQyx1QkFBdUIscUJBQU9SLFFBQVAsQ0FBN0I7O0FBQ0FRLDZCQUF1QixDQUFDRixRQUF4QixHQUFtQyxDQUFDTixRQUFRLENBQUNNLFFBQTdDO0FBQ0EsYUFBT0UsdUJBQVA7O0FBRUosU0FBSyxXQUFMO0FBQ0ksVUFBTUMscUJBQXFCLHFCQUFPVCxRQUFQLENBQTNCOztBQUNBUywyQkFBcUIsQ0FBQ0YsTUFBdEIsR0FBK0JOLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRSxNQUE5QztBQUNBLGFBQU9FLHFCQUFQOztBQUVKO0FBQ0lOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQSxhQUFPSixRQUFQO0FBbEJSO0FBb0JILENBckJNIiwiZmlsZSI6Ii4vcmVkdWNlcnMvc2V0dGluZ3NSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzUmVkdWNlciA9IChzZXR0aW5ncywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NldFNldHRpbmdzJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZXQgc2V0dGluZ3MgJHthY3Rpb24ucGF5bG9hZC5zZXR0aW5nc31gKVxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLnNldHRpbmdzKSByZXR1cm4gYWN0aW9uLnBheWxvYWQuc2V0dGluZ3NcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5ncyBkaWRudCBleGlzdCwgY3JlYXRlZCBkZWZhdWx0JylcbiAgICAgICAgICAgIHJldHVybiB7ZGFya01vZGU6IGZhbHNlLCBsYXlvdXQ6IDJ9IC8vZGVmYXVsdCBpZiBzZXR0aW5ncyBzYXZlIGRvZXNuJ3QgZXhpc3QgXG4gICAgICAgIGNhc2UgJ3RvZ2dsZURhcmtNb2RlJzpcbiAgICAgICAgICAgIGNvbnN0IGRhcmtNb2RlVG9nZ2xlZFNldHRpbmdzID0gey4uLnNldHRpbmdzfVxuICAgICAgICAgICAgZGFya01vZGVUb2dnbGVkU2V0dGluZ3MuZGFya01vZGUgPSAhc2V0dGluZ3MuZGFya01vZGVcbiAgICAgICAgICAgIHJldHVybiBkYXJrTW9kZVRvZ2dsZWRTZXR0aW5nc1xuXG4gICAgICAgIGNhc2UgJ3NldExheW91dCc6XG4gICAgICAgICAgICBjb25zdCBsYXlvdXRDaGFuZ2VkU2V0dGluZ3MgPSB7Li4uc2V0dGluZ3N9XG4gICAgICAgICAgICBsYXlvdXRDaGFuZ2VkU2V0dGluZ3MubGF5b3V0ID0gYWN0aW9uLnBheWxvYWQubGF5b3V0XG4gICAgICAgICAgICByZXR1cm4gbGF5b3V0Q2hhbmdlZFNldHRpbmdzXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQgZGVmYXVsdCcpXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3NcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/settingsReducer.js\n");

/***/ })

});