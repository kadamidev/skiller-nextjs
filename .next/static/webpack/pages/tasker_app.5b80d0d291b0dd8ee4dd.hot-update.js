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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/app/Settings.module.scss */ \"./styles/app/Settings.module.scss\");\n/* harmony import */ var _styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Settings.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Settings = function Settings(props) {\n  _s();\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)('(min-width: 769px)');\n\n  var handleLayoutClick = function handleLayoutClick(e) {\n    var layout = e.currentTarget.attributes.mode.value;\n    props.settingsDispatch({\n      type: 'setLayout',\n      payload: {\n        layout: layout\n      }\n    });\n  };\n\n  var handleDropdownChange = function handleDropdownChange(e) {\n    props.setLayoutSetting(e.target.value);\n  };\n\n  var toggleProgressBars = function toggleProgressBars() {\n    props.settingsDispatch({\n      type: 'toggleProgressBars'\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: props.darkMode ? [(_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().settingsContainer), (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().darkMode)].join(\" \") : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().settingsContainer),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().optionsList),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().themedOptionButton),\n          children: [!props.darkMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/unchecked.svg\",\n            width: 16,\n            height: 16,\n            onClick: props.toggleDarkMode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 25\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/checked.svg\",\n            width: 16,\n            height: 16,\n            onClick: props.toggleDarkMode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Dark Mode\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().themedOptionButton),\n          children: [\"  \", props.settingsState.progress ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/checked.svg\",\n            width: 16,\n            height: 16,\n            onClick: toggleProgressBars\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/unchecked.svg\",\n            width: 16,\n            height: 16,\n            onClick: toggleProgressBars\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Progress Bars\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSettingContainer),\n          children: isDesktop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              htmlFor: \"column-selector\",\n              children: \"Card Columns\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n              id: \"column-selector\",\n              name: \"layout\",\n              onChange: handleDropdownChange,\n              value: props.settingsState.layout,\n              children: (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(12)).map(function (e, i) {\n                var val = i + 1;\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                  mode: val,\n                  value: val,\n                  children: val\n                }, i, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 41\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: \"Layout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 27\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              className: (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutModes),\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 1 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 1,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Single.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 2 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 2,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Double.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: props.layoutSetting == 3 ? (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().currentLayout) : (_styles_app_Settings_module_scss__WEBPACK_IMPORTED_MODULE_5___default().layoutSvgWrap),\n                mode: 3,\n                onClick: handleLayoutClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/Tripple.svg\",\n                  width: 32,\n                  height: 28\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 155\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Settings, \"OwvWUQgjrMnuU8GZKzxgeJ0yhK4=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery];\n});\n\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c;\n\n$RefreshReg$(_c, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvU2V0dGluZ3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXhCLE1BQU1DLFNBQVMsR0FBR0gsaUVBQWEsQ0FBQyxvQkFBRCxDQUEvQjs7QUFFQSxNQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBTztBQUM3QixRQUFNQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0UsYUFBRixDQUFnQkMsVUFBaEIsQ0FBMkJDLElBQTNCLENBQWdDQyxLQUEvQztBQUNBUixJQUFBQSxLQUFLLENBQUNTLGdCQUFOLENBQXVCO0FBQUNDLE1BQUFBLElBQUksRUFBRSxXQUFQO0FBQW9CQyxNQUFBQSxPQUFPLEVBQUU7QUFBQ1AsUUFBQUEsTUFBTSxFQUFFQTtBQUFUO0FBQTdCLEtBQXZCO0FBRUgsR0FKRDs7QUFNQSxNQUFNUSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNULENBQUQsRUFBTztBQUNoQ0gsSUFBQUEsS0FBSyxDQUFDYSxnQkFBTixDQUF1QlYsQ0FBQyxDQUFDVyxNQUFGLENBQVNOLEtBQWhDO0FBRUgsR0FIRDs7QUFLQSxNQUFNTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBRWYsSUFBQUEsS0FBSyxDQUFDUyxnQkFBTixDQUF1QjtBQUFDQyxNQUFBQSxJQUFJLEVBQUU7QUFBUCxLQUF2QjtBQUFzRCxHQUF6Rjs7QUFJQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFVixLQUFLLENBQUNnQixRQUFOLEdBQWlCLENBQUNwQiwyRkFBRCxFQUEyQkEsa0ZBQTNCLEVBQTRDc0IsSUFBNUMsQ0FBaUQsR0FBakQsQ0FBakIsR0FBeUV0QiwyRkFBekY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUVBLHFGQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFFQSw0RkFBZjtBQUFBLHFCQUNNLENBQUNJLEtBQUssQ0FBQ2dCLFFBQVAsZ0JBQ0YsOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsd0JBQVg7QUFBb0MsaUJBQUssRUFBRSxFQUEzQztBQUErQyxrQkFBTSxFQUFFLEVBQXZEO0FBQTJELG1CQUFPLEVBQUVoQixLQUFLLENBQUNxQjtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURFLGdCQUdGLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLHNCQUFYO0FBQWtDLGlCQUFLLEVBQUUsRUFBekM7QUFBNkMsa0JBQU0sRUFBRSxFQUFyRDtBQUF5RCxtQkFBTyxFQUFFckIsS0FBSyxDQUFDcUI7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVVJO0FBQUksbUJBQVMsRUFBRXpCLDRGQUFmO0FBQUEsMkJBQ01JLEtBQUssQ0FBQ3NCLGFBQU4sQ0FBb0JDLFFBQXBCLGdCQUNGLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLHNCQUFYO0FBQWtDLGlCQUFLLEVBQUUsRUFBekM7QUFBNkMsa0JBQU0sRUFBRSxFQUFyRDtBQUF5RCxtQkFBTyxFQUFFUjtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURFLGdCQUdGLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLHdCQUFYO0FBQW9DLGlCQUFLLEVBQUUsRUFBM0M7QUFBK0Msa0JBQU0sRUFBRSxFQUF2RDtBQUEyRCxtQkFBTyxFQUFFQTtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLGVBbUJJO0FBQUksbUJBQVMsRUFBRW5CLGdHQUFmO0FBQUEsb0JBQ01LLFNBQVMsZ0JBQUc7QUFBQSxvQ0FDZDtBQUFPLHFCQUFPLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGMsZUFFZDtBQUFRLGdCQUFFLEVBQUMsaUJBQVg7QUFBNkIsa0JBQUksRUFBQyxRQUFsQztBQUEyQyxzQkFBUSxFQUFFVyxvQkFBckQ7QUFBMkUsbUJBQUssRUFBRVosS0FBSyxDQUFDc0IsYUFBTixDQUFvQmxCLE1BQXRHO0FBQUEsd0JBRVEsa0pBQUlxQixLQUFLLENBQUMsRUFBRCxDQUFULEVBQWVDLEdBQWYsQ0FBbUIsVUFBQ3ZCLENBQUQsRUFBSXdCLENBQUosRUFBVTtBQUN6QixvQkFBSUMsR0FBRyxHQUFHRCxDQUFDLEdBQUcsQ0FBZDtBQUNBLG9DQUNJO0FBQWdCLHNCQUFJLEVBQUVDLEdBQXRCO0FBQTJCLHVCQUFLLEVBQUVBLEdBQWxDO0FBQUEsNEJBQXlDQTtBQUF6QyxtQkFBYUQsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBR0gsZUFMRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRmM7QUFBQSwwQkFBSCxnQkFjWDtBQUFBLG9DQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFGLGVBQ0E7QUFBSSx1QkFBUyxFQUFFL0IscUZBQWY7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUdJLEtBQUssQ0FBQzhCLGFBQU4sSUFBdUIsQ0FBeEIsR0FBNkJsQyx1RkFBN0IsR0FBb0RBLHVGQUFuRTtBQUF5RixvQkFBSSxFQUFFLENBQS9GO0FBQWtHLHVCQUFPLEVBQUVNLGlCQUEzRztBQUFBLHVDQUE4SCw4REFBQyxtREFBRDtBQUFPLHFCQUFHLEVBQUMscUJBQVg7QUFBaUMsdUJBQUssRUFBRSxFQUF4QztBQUE0Qyx3QkFBTSxFQUFFO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUkseUJBQVMsRUFBR0YsS0FBSyxDQUFDOEIsYUFBTixJQUF1QixDQUF4QixHQUE2QmxDLHVGQUE3QixHQUFvREEsdUZBQW5FO0FBQXlGLG9CQUFJLEVBQUUsQ0FBL0Y7QUFBa0csdUJBQU8sRUFBRU0saUJBQTNHO0FBQUEsdUNBQThILDhEQUFDLG1EQUFEO0FBQU8scUJBQUcsRUFBQyxxQkFBWDtBQUFpQyx1QkFBSyxFQUFFLEVBQXhDO0FBQTRDLHdCQUFNLEVBQUU7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBSSx5QkFBUyxFQUFHRixLQUFLLENBQUM4QixhQUFOLElBQXVCLENBQXhCLEdBQTZCbEMsdUZBQTdCLEdBQW9EQSx1RkFBbkU7QUFBeUYsb0JBQUksRUFBRSxDQUEvRjtBQUFrRyx1QkFBTyxFQUFFTSxpQkFBM0c7QUFBQSx1Q0FBOEgsOERBQUMsbURBQUQ7QUFBTyxxQkFBRyxFQUFDLHNCQUFYO0FBQWtDLHVCQUFLLEVBQUUsRUFBekM7QUFBNkMsd0JBQU0sRUFBRTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBQUE7QUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcURILENBeEVEOztHQUFNSDtVQUVnQkQ7OztLQUZoQkM7QUEwRU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1NldHRpbmdzLmpzeD84NTAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvU2V0dGluZ3MubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICcuLi8uLi9saWIvdXNlTWVkaWFRdWVyeSc7XG5cbmNvbnN0IFNldHRpbmdzID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA3NjlweCknKVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZUxheW91dENsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMubW9kZS52YWx1ZVxuICAgICAgICBwcm9wcy5zZXR0aW5nc0Rpc3BhdGNoKHt0eXBlOiAnc2V0TGF5b3V0JywgcGF5bG9hZDoge2xheW91dDogbGF5b3V0fX0pXG5cbiAgICB9XG4gICAgICAgIFxuICAgIGNvbnN0IGhhbmRsZURyb3Bkb3duQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgcHJvcHMuc2V0TGF5b3V0U2V0dGluZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlUHJvZ3Jlc3NCYXJzID0gKCkgPT4geyBwcm9wcy5zZXR0aW5nc0Rpc3BhdGNoKHt0eXBlOiAndG9nZ2xlUHJvZ3Jlc3NCYXJzJ30pIH1cblxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5kYXJrTW9kZSA/IFtzdHlsZXMuc2V0dGluZ3NDb250YWluZXIsIHN0eWxlcy5kYXJrTW9kZV0uam9pbihcIiBcIikgOiBzdHlsZXMuc2V0dGluZ3NDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zTGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy50aGVtZWRPcHRpb25CdXR0b259PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAhcHJvcHMuZGFya01vZGUgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC91bmNoZWNrZWQuc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBvbkNsaWNrPXtwcm9wcy50b2dnbGVEYXJrTW9kZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL2NoZWNrZWQuc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBvbkNsaWNrPXtwcm9wcy50b2dnbGVEYXJrTW9kZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGFyayBNb2RlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy50aGVtZWRPcHRpb25CdXR0b259PiAgey8qIHByb2dyZXNzIGJhcnMgb3B0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5zZXR0aW5nc1N0YXRlLnByb2dyZXNzID8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvY2hlY2tlZC5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IG9uQ2xpY2s9e3RvZ2dsZVByb2dyZXNzQmFyc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3VuY2hlY2tlZC5zdmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IG9uQ2xpY2s9e3RvZ2dsZVByb2dyZXNzQmFyc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJvZ3Jlc3MgQmFyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0U2V0dGluZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlzRGVza3RvcCA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY29sdW1uLXNlbGVjdG9yJz5DYXJkIENvbHVtbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD0nY29sdW1uLXNlbGVjdG9yJyBuYW1lPVwibGF5b3V0XCIgb25DaGFuZ2U9e2hhbmRsZURyb3Bkb3duQ2hhbmdlfSB2YWx1ZT17cHJvcHMuc2V0dGluZ3NTdGF0ZS5sYXlvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLkFycmF5KDEyKV0ubWFwKChlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gaSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IG1vZGU9e3ZhbH0gdmFsdWU9e3ZhbH0gPnt2YWx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+PHNwYW4+TGF5b3V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxheW91dE1vZGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsocHJvcHMubGF5b3V0U2V0dGluZyA9PSAxKSA/IHN0eWxlcy5jdXJyZW50TGF5b3V0IDogc3R5bGVzLmxheW91dFN2Z1dyYXB9IG1vZGU9ezF9IG9uQ2xpY2s9e2hhbmRsZUxheW91dENsaWNrfT48SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvU2luZ2xlLnN2Z1wiIHdpZHRoPXszMn0gaGVpZ2h0PXsyOH0vPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KHByb3BzLmxheW91dFNldHRpbmcgPT0gMikgPyBzdHlsZXMuY3VycmVudExheW91dCA6IHN0eWxlcy5sYXlvdXRTdmdXcmFwfSBtb2RlPXsyfSBvbkNsaWNrPXtoYW5kbGVMYXlvdXRDbGlja30+PEltYWdlIHNyYz1cIi9pbWcvYXBwL0RvdWJsZS5zdmdcIiB3aWR0aD17MzJ9IGhlaWdodD17Mjh9Lz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhwcm9wcy5sYXlvdXRTZXR0aW5nID09IDMpID8gc3R5bGVzLmN1cnJlbnRMYXlvdXQgOiBzdHlsZXMubGF5b3V0U3ZnV3JhcH0gbW9kZT17M30gb25DbGljaz17aGFuZGxlTGF5b3V0Q2xpY2t9PjxJbWFnZSBzcmM9XCIvaW1nL2FwcC9UcmlwcGxlLnN2Z1wiIHdpZHRoPXszMn0gaGVpZ2h0PXsyOH0vPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG5cblxuXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkltYWdlIiwidXNlTWVkaWFRdWVyeSIsIlNldHRpbmdzIiwicHJvcHMiLCJpc0Rlc2t0b3AiLCJoYW5kbGVMYXlvdXRDbGljayIsImUiLCJsYXlvdXQiLCJjdXJyZW50VGFyZ2V0IiwiYXR0cmlidXRlcyIsIm1vZGUiLCJ2YWx1ZSIsInNldHRpbmdzRGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZURyb3Bkb3duQ2hhbmdlIiwic2V0TGF5b3V0U2V0dGluZyIsInRhcmdldCIsInRvZ2dsZVByb2dyZXNzQmFycyIsImRhcmtNb2RlIiwic2V0dGluZ3NDb250YWluZXIiLCJqb2luIiwib3B0aW9uc0xpc3QiLCJ0aGVtZWRPcHRpb25CdXR0b24iLCJ0b2dnbGVEYXJrTW9kZSIsInNldHRpbmdzU3RhdGUiLCJwcm9ncmVzcyIsImxheW91dFNldHRpbmdDb250YWluZXIiLCJBcnJheSIsIm1hcCIsImkiLCJ2YWwiLCJsYXlvdXRNb2RlcyIsImxheW91dFNldHRpbmciLCJjdXJyZW50TGF5b3V0IiwibGF5b3V0U3ZnV3JhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/Settings.jsx\n");

/***/ })

});