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

/***/ "./components/LoadingOverlay.jsx":
/*!***************************************!*\
  !*** ./components/LoadingOverlay.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_LoadingOverlay_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app/LoadingOverlay.module.scss */ \"./styles/app/LoadingOverlay.module.scss\");\n/* harmony import */ var _styles_app_LoadingOverlay_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_LoadingOverlay_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ \"./components/Loader.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/LoadingOverlay.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar LoadingOverlay = function LoadingOverlay(props) {\n  var containerClass = props.show ? (_styles_app_LoadingOverlay_module_scss__WEBPACK_IMPORTED_MODULE_3___default().overlayContainer) : (_styles_app_LoadingOverlay_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loaderHide);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: props.darkMode ? [containerClass, (_styles_app_LoadingOverlay_module_scss__WEBPACK_IMPORTED_MODULE_3___default().darkMode)].join(\" \") : containerClass,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_LoadingOverlay_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loaderWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = LoadingOverlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingOverlay);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoadingOverlay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmdPdmVybGF5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUM5QixNQUFNQyxjQUFjLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixHQUFhTCxnR0FBYixHQUF1Q0EsMEZBQTlEO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUcsS0FBSyxDQUFDSyxRQUFOLEdBQWlCLENBQUNKLGNBQUQsRUFBaUJKLHdGQUFqQixFQUFrQ1MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBakIsR0FBK0RMLGNBQS9FO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFSiw2RkFBaEI7QUFBQSwrQkFDSSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQVhEOztLQUFNRTtBQWFOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9hZGluZ092ZXJsYXkuanN4Pzk1NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC9Mb2FkaW5nT3ZlcmxheS5tb2R1bGUuc2NzcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xuXG5jb25zdCBMb2FkaW5nT3ZlcmxheSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzID0gcHJvcHMuc2hvdyA/IHN0eWxlcy5vdmVybGF5Q29udGFpbmVyIDogc3R5bGVzLmxvYWRlckhpZGVcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmRhcmtNb2RlID8gW2NvbnRhaW5lckNsYXNzLCBzdHlsZXMuZGFya01vZGVdLmpvaW4oXCIgXCIpIDogY29udGFpbmVyQ2xhc3N9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdPdmVybGF5O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiTG9hZGVyIiwiTG9hZGluZ092ZXJsYXkiLCJwcm9wcyIsImNvbnRhaW5lckNsYXNzIiwic2hvdyIsIm92ZXJsYXlDb250YWluZXIiLCJsb2FkZXJIaWRlIiwiZGFya01vZGUiLCJqb2luIiwibG9hZGVyV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoadingOverlay.jsx\n");

/***/ })

});