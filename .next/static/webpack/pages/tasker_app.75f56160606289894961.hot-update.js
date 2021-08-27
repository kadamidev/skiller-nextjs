/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./components/tasker_app/Settings.jsx":
/*!********************************************!*\
  !*** ./components/tasker_app/Settings.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/app/Settings.module.scss */ \"./styles/app/Settings.module.scss\");\n/* harmony import */ var _styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Settings.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Settings = function Settings(props) {\n  _s();\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)('(min-width: 769px)');\n\n  var handleLayoutClick = function handleLayoutClick(e) {\n    props.setLayoutSetting(e.currentTarget.attributes.mode.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: props.darkMode ? [(_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().settingsContainer), (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().darkMode)].join(\" \") : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().settingsContainer),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().optionsList),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().darkModeOption),\n          children: [!props.darkMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/unchecked.svg\",\n            width: 16,\n            height: 16,\n            onClick: props.toggleDarkMode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/checked.svg\",\n            width: 16,\n            height: 16,\n            onClick: props.toggleDarkMode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Dark Mode\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSettingContainer),\n          children: isDesktop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              htmlFor: \"column-selector\",\n              children: \"Card Columns\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n              id: \"column-selector\",\n              name: \"layout\",\n              children: (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(10)).map(function (e, i) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                  value: i,\n                  children: i\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 41\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: \"Layout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 27\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutModes),\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 1 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 1,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Single.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 2 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 2,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Double.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 3 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 3,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Tripple.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Settings, \"OwvWUQgjrMnuU8GZKzxgeJ0yhK4=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery];\n});\n\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c;\n\n$RefreshReg$(_c, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1NldHRpbmdzLmpzeD84NTAxIl0sIm5hbWVzIjpbIlNldHRpbmdzIiwicHJvcHMiLCJpc0Rlc2t0b3AiLCJ1c2VNZWRpYVF1ZXJ5IiwiaGFuZGxlTGF5b3V0Q2xpY2siLCJlIiwic2V0TGF5b3V0U2V0dGluZyIsImN1cnJlbnRUYXJnZXQiLCJhdHRyaWJ1dGVzIiwibW9kZSIsInZhbHVlIiwiZGFya01vZGUiLCJzdHlsZXMiLCJqb2luIiwidG9nZ2xlRGFya01vZGUiLCJBcnJheSIsIm1hcCIsImkiLCJsYXlvdXRTZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV4QixNQUFNQyxTQUFTLEdBQUdDLGlFQUFhLENBQUMsb0JBQUQsQ0FBL0I7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFELEVBQU87QUFDN0JKLFNBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUJELENBQUMsQ0FBQ0UsYUFBRixDQUFnQkMsVUFBaEIsQ0FBMkJDLElBQTNCLENBQWdDQyxLQUF2RDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRVQsS0FBSyxDQUFDVSxRQUFOLEdBQWlCLENBQUNDLDJGQUFELEVBQTJCQSxrRkFBM0IsRUFBNENDLElBQTVDLENBQWlELEdBQWpELENBQWpCLEdBQXlFRCwyRkFBekY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUVBLHFGQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFFQSx3RkFBZjtBQUFBLHFCQUNNLENBQUNYLEtBQUssQ0FBQ1UsUUFBUCxnQkFDRiw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyx3QkFBWDtBQUFvQyxpQkFBSyxFQUFFLEVB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bGUiOiIuL2NvbXBvbmVudHMvdGFza2VyX2FwcC9TZXR0aW5ncy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYXBwL1NldHRpbmdzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vLi4vbGliL3VzZU1lZGlhUXVlcnknO1xuXG5jb25zdCBTZXR0aW5ncyA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDogNzY5cHgpJylcbiAgICBcbiAgICBjb25zdCBoYW5kbGVMYXlvdXRDbGljayA9IChlKSA9PiB7XG4gICAgICAgIHByb3BzLnNldExheW91dFNldHRpbmcoZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMubW9kZS52YWx1ZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5kYXJrTW9kZSA/IFtzdHlsZXMuc2V0dGluZ3NDb250YWluZXIsIHN0eWxlcy5kYXJrTW9kZV0uam9pbihcIiBcIikgOiBzdHlsZXMuc2V0dGluZ3NDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zTGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kYXJrTW9kZU9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICFwcm9wcy5kYXJrTW9kZSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3VuY2hlY2tlZC5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZURhcmtNb2RlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvY2hlY2tlZC5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZURhcmtNb2RlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXJrIE1vZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxheW91dFNldHRpbmdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpc0Rlc2t0b3AgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NvbHVtbi1zZWxlY3Rvcic+Q2FyZCBDb2x1bW5zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9J2NvbHVtbi1zZWxlY3RvcicgbmFtZT1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLkFycmF5KDEwKV0ubWFwKChlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9PntpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8PjxzcGFuPkxheW91dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRNb2Rlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KHByb3BzLmxheW91dFNldHRpbmcgPT0gMSkgPyBzdHlsZXMuY3VycmVudExheW91dCA6IHN0eWxlcy5sYXlvdXRTdmdXcmFwfSBtb2RlPXsxfSBvbkNsaWNrPXtoYW5kbGVMYXlvdXRDbGlja30+PEltYWdlIHNyYz1cIi9pbWcvYXBwL1NpbmdsZS5zdmdcIiB3aWR0aD17MzJ9IGhlaWdodD17Mjh9Lz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhwcm9wcy5sYXlvdXRTZXR0aW5nID09IDIpID8gc3R5bGVzLmN1cnJlbnRMYXlvdXQgOiBzdHlsZXMubGF5b3V0U3ZnV3JhcH0gbW9kZT17Mn0gb25DbGljaz17aGFuZGxlTGF5b3V0Q2xpY2t9PjxJbWFnZSBzcmM9XCIvaW1nL2FwcC9Eb3VibGUuc3ZnXCIgd2lkdGg9ezMyfSBoZWlnaHQ9ezI4fS8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsocHJvcHMubGF5b3V0U2V0dGluZyA9PSAzKSA/IHN0eWxlcy5jdXJyZW50TGF5b3V0IDogc3R5bGVzLmxheW91dFN2Z1dyYXB9IG1vZGU9ezN9IG9uQ2xpY2s9e2hhbmRsZUxheW91dENsaWNrfT48SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvVHJpcHBsZS5zdmdcIiB3aWR0aD17MzJ9IGhlaWdodD17Mjh9Lz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuXG5cblxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tasker_app/Settings.jsx\n");

/***/ })

});