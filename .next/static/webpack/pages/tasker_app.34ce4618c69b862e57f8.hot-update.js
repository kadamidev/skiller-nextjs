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

/***/ "./components/tasker_app/Settings.jsx":
/*!********************************************!*\
  !*** ./components/tasker_app/Settings.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/app/Settings.module.scss */ \"./styles/app/Settings.module.scss\");\n/* harmony import */ var _styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Settings.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Settings = function Settings(props) {\n  _s();\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)('(min-width: 769px)');\n\n  var handleLayoutClick = function handleLayoutClick(e) {\n    props.setLayoutSetting(e.currentTarget.attributes.mode.value);\n  };\n\n  var handleDropdownChange = function handleDropdownChange(e) {\n    props.setLayoutSetting(e.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: props.darkMode ? [(_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().settingsContainer), (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().darkMode)].join(\" \") : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().settingsContainer),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().optionsList),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().darkModeOption),\n          children: [!props.darkMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/unchecked.svg\",\n            width: 16,\n            height: 16,\n            onClick: props.toggleDarkMode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 25\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/checked.svg\",\n            width: 16,\n            height: 16,\n            onClick: props.toggleDarkMode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Dark Mode\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().darkModeOption),\n          children: [!props.darkMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/unchecked.svg\",\n            width: 16,\n            height: 16,\n            onClick: props.toggleDarkMode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/checked.svg\",\n            width: 16,\n            height: 16,\n            onClick: props.toggleDarkMode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Dark Mode\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSettingContainer),\n          children: isDesktop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              htmlFor: \"column-selector\",\n              children: \"Card Columns\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n              id: \"column-selector\",\n              name: \"layout\",\n              onChange: handleDropdownChange,\n              value: props.layoutSetting,\n              children: (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(12)).map(function (e, i) {\n                var val = i + 1;\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                  mode: val,\n                  value: val,\n                  children: val\n                }, i, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 41\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: \"Layout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 27\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutModes),\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 1 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 1,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Single.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 2 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 2,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Double.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 3 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 3,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Tripple.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Settings, \"OwvWUQgjrMnuU8GZKzxgeJ0yhK4=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery];\n});\n\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c;\n\n$RefreshReg$(_c, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBR0YsS0FBSyxDQUFDa0IsYUFBTixJQUF1QixDQUF4QixHQUE2QnRCLHVGQUE3QixHQUFvREEsdUZBQW5FO0FBQXlGLG9CQUFJLEVBQUUsQ0FBL0Y7QUFBa0csdUJBQU8sRUFBRU0saUJBQTNHO0FBQUEsdUNBQThILDhEQUFDLG1EQUFEO0FBQU8scUJBQUcsRUFBQyxzQkFBWDtBQUFrQyx1QkFBSyxFQUFFLEVBQXpDO0FBQTZDLHdCQUFNLEVBQUU7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQTtBQUFBO0FBZko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFESCxDQWpFRDs7R0FBTUg7VUFFZ0JEOzs7S0FGaEJDO0FBbUVOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9TZXR0aW5ncy5qc3g/ODUwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYXBwL1NldHRpbmdzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vLi4vbGliL3VzZU1lZGlhUXVlcnknO1xuXG5jb25zdCBTZXR0aW5ncyA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDogNzY5cHgpJylcbiAgICBcbiAgICBjb25zdCBoYW5kbGVMYXlvdXRDbGljayA9IChlKSA9PiB7XG4gICAgICAgIHByb3BzLnNldExheW91dFNldHRpbmcoZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMubW9kZS52YWx1ZSlcbiAgICB9XG4gICAgICAgIFxuICAgIGNvbnN0IGhhbmRsZURyb3Bkb3duQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgcHJvcHMuc2V0TGF5b3V0U2V0dGluZyhlLnRhcmdldC52YWx1ZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5kYXJrTW9kZSA/IFtzdHlsZXMuc2V0dGluZ3NDb250YWluZXIsIHN0eWxlcy5kYXJrTW9kZV0uam9pbihcIiBcIikgOiBzdHlsZXMuc2V0dGluZ3NDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zTGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kYXJrTW9kZU9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICFwcm9wcy5kYXJrTW9kZSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3VuY2hlY2tlZC5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZURhcmtNb2RlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvY2hlY2tlZC5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZURhcmtNb2RlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXJrIE1vZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZGFya01vZGVPcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhcHJvcHMuZGFya01vZGUgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC91bmNoZWNrZWQuc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBvbkNsaWNrPXtwcm9wcy50b2dnbGVEYXJrTW9kZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL2NoZWNrZWQuc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBvbkNsaWNrPXtwcm9wcy50b2dnbGVEYXJrTW9kZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGFyayBNb2RlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRTZXR0aW5nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaXNEZXNrdG9wID8gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdjb2x1bW4tc2VsZWN0b3InPkNhcmQgQ29sdW1uczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPSdjb2x1bW4tc2VsZWN0b3InIG5hbWU9XCJsYXlvdXRcIiBvbkNoYW5nZT17aGFuZGxlRHJvcGRvd25DaGFuZ2V9IHZhbHVlPXtwcm9wcy5sYXlvdXRTZXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsuLi5BcnJheSgxMildLm1hcCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbCA9IGkgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSBtb2RlPXt2YWx9IHZhbHVlPXt2YWx9ID57dmFsfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8PjxzcGFuPkxheW91dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRNb2Rlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KHByb3BzLmxheW91dFNldHRpbmcgPT0gMSkgPyBzdHlsZXMuY3VycmVudExheW91dCA6IHN0eWxlcy5sYXlvdXRTdmdXcmFwfSBtb2RlPXsxfSBvbkNsaWNrPXtoYW5kbGVMYXlvdXRDbGlja30+PEltYWdlIHNyYz1cIi9pbWcvYXBwL1NpbmdsZS5zdmdcIiB3aWR0aD17MzJ9IGhlaWdodD17Mjh9Lz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhwcm9wcy5sYXlvdXRTZXR0aW5nID09IDIpID8gc3R5bGVzLmN1cnJlbnRMYXlvdXQgOiBzdHlsZXMubGF5b3V0U3ZnV3JhcH0gbW9kZT17Mn0gb25DbGljaz17aGFuZGxlTGF5b3V0Q2xpY2t9PjxJbWFnZSBzcmM9XCIvaW1nL2FwcC9Eb3VibGUuc3ZnXCIgd2lkdGg9ezMyfSBoZWlnaHQ9ezI4fS8+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsocHJvcHMubGF5b3V0U2V0dGluZyA9PSAzKSA/IHN0eWxlcy5jdXJyZW50TGF5b3V0IDogc3R5bGVzLmxheW91dFN2Z1dyYXB9IG1vZGU9ezN9IG9uQ2xpY2s9e2hhbmRsZUxheW91dENsaWNrfT48SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvVHJpcHBsZS5zdmdcIiB3aWR0aD17MzJ9IGhlaWdodD17Mjh9Lz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuXG5cblxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsInVzZU1lZGlhUXVlcnkiLCJTZXR0aW5ncyIsInByb3BzIiwiaXNEZXNrdG9wIiwiaGFuZGxlTGF5b3V0Q2xpY2siLCJlIiwic2V0TGF5b3V0U2V0dGluZyIsImN1cnJlbnRUYXJnZXQiLCJhdHRyaWJ1dGVzIiwibW9kZSIsInZhbHVlIiwiaGFuZGxlRHJvcGRvd25DaGFuZ2UiLCJ0YXJnZXQiLCJkYXJrTW9kZSIsInNldHRpbmdzQ29udGFpbmVyIiwiam9pbiIsIm9wdGlvbnNMaXN0IiwiZGFya01vZGVPcHRpb24iLCJ0b2dnbGVEYXJrTW9kZSIsImxheW91dFNldHRpbmdDb250YWluZXIiLCJsYXlvdXRTZXR0aW5nIiwiQXJyYXkiLCJtYXAiLCJpIiwidmFsIiwibGF5b3V0TW9kZXMiLCJjdXJyZW50TGF5b3V0IiwibGF5b3V0U3ZnV3JhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/Settings.jsx\n");

/***/ })

});