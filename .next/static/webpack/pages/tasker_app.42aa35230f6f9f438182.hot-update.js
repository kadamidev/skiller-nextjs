/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./components/tasker_app/TabNav.jsx":
/*!******************************************!*\
  !*** ./components/tasker_app/TabNav.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar TabNav = function TabNav(_ref) {\n  _s();\n\n  var tabsState = _ref.tabsState,\n      dispatch = _ref.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTabMenu = _useState2[0],\n      setShowTabMenu = _useState2[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().homeWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/menu\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/home.svg\",\n              width: 30,\n              height: 30\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 39\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 36\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tab),\n        children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: currentTab.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().edit),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16,\n              onClick: toggleTabEdit\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 50\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tabInput),\n          type: \"text\",\n          value: currentTab.name,\n          onChange: function onChange(event) {\n            return dispatch({\n              type: 'changeTabName',\n              payload: {\n                tabId: currentTab.id,\n                name: event.target.value\n              }\n            });\n          },\n          onBlur: toggleTabEdit\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tabsWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/tabs.svg\",\n          width: 30,\n          height: 30,\n          onClick: toggleTabMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"kDoQOzCjFSsTUFxSr/fOmjfZGRM=\");\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3g/NDBlZCJdLCJuYW1lcyI6WyJUYWJOYXYiLCJ0YWJzU3RhdGUiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwidGFiRWRpdCIsInNldFRhYkVkaXQiLCJ0b2dnbGVUYWJFZGl0Iiwic2hvd1RhYk1lbnUiLCJzZXRTaG93VGFiTWVudSIsInRvZ2dsZVRhYk1lbnUiLCJjdXJyZW50VGFiIiwidGFicyIsImN1cnJlbnRUYWJJZHgiLCJzdHlsZXMiLCJuYW1lIiwiZXZlbnQiLCJ0eXBlIiwicGF5bG9hZCIsInRhYklkIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTJCO0FBQUE7O0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxrQkFFUkMsK0NBQVEsQ0FBQyxLQUFELENBRkE7QUFBQSxNQUUvQkMsT0FGK0I7QUFBQSxNQUV0QkMsVUFGc0I7O0FBS3RDLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFFRCxjQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQXNCLEdBQXBEOztBQUxzQyxtQkFPQUQsK0NBQVEsQ0FBQyxLQUFELENBUFI7QUFBQSxNQU8vQkksV0FQK0I7QUFBQSxNQU9sQkMsY0FQa0I7O0FBUXRDLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxXQUFNRCxjQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFwQjtBQUFBLEdBQXRCOztBQUVBLE1BQU1HLFVBQVUsR0FBR1QsU0FBUyxDQUFDVSxJQUFWLENBQWVWLFNBQVMsQ0FBQ1csYUFBekIsQ0FBbkI7QUFFQSxzQkFDSTtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFFQyxpRkFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLGdGQUFoQjtBQUFBLCtCQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLE9BQVg7QUFBQSxpQ0FBbUI7QUFBQSxtQ0FBRyw4REFBQyxtREFBRDtBQUFPLGlCQUFHLEVBQUMsbUJBQVg7QUFBK0IsbUJBQUssRUFBRSxFQUF0QztBQUEwQyxvQkFBTSxFQUFFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSTtBQUFLLGlCQUFTLEVBQUVBLDJFQUFoQjtBQUFBLGtCQUNNLENBQUNULE9BQUQsZ0JBQ0U7QUFBQSxrQ0FDQTtBQUFBLHNCQUFPTSxVQUFVLENBQUNJO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFLLHFCQUFTLEVBQUVELDRFQUFoQjtBQUFBLG1DQUE2Qiw4REFBQyxtREFBRDtBQUFPLGlCQUFHLEVBQUMsbUJBQVg7QUFBK0Isb0JBQU0sRUFBRSxFQUF2QztBQUEyQyxtQkFBSyxFQUFFLEVBQWxEO0FBQXNELHFCQUFPLEVBQUVQO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBLHdCQURGLGdCQU1FO0FBQU8sbUJBQVMsRUFBRU8sZ0ZBQWxCO0FBQW1DLGNBQUksRUFBQyxNQUF4QztBQUErQyxlQUFLLEVBQUVILFVBQVUsQ0FBQ0ksSUFBakU7QUFBdUUsa0JBQVEsRUFBRyxrQkFBQ0MsS0FBRDtBQUFBLG1CQUFXYixRQUFRLENBQUM7QUFBQ2Msa0JBQUksRUFBRSxlQUFQO0FBQXdCQyxxQkFBTyxFQUFFO0FBQUVDLHFCQUFLLEVBQUVSLFVBQVUsQ0FBQ1MsRUFBcEI7QUFBd0JMLG9CQUFJLEVBQUVDLEtBQUssQ0FBQ0ssTUFBTixDQUFhQztBQUEzQztBQUFqQyxhQUFELENBQW5CO0FBQUEsV0FBbEY7QUFBOEwsZ0JBQU0sRUFBRWY7QUFBdE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSixlQWlCSTtBQUFLLGlCQUFTLEVBQUVPLGdGQUFoQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLG1CQUFYO0FBQStCLGVBQUssRUFBRSxFQUF0QztBQUEwQyxnQkFBTSxFQUFFLEVBQWxEO0FBQXNELGlCQUFPLEVBQUVKO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBdUJBO0FBQUssZUFBUyxFQUFFRixXQUFXLEdBQUdNLG1GQUFILEdBQXdCQSxtRkFBbkQ7QUFBQSw2QkFDSSw4REFBQyw4Q0FBRDtBQUFVLGlCQUFTLEVBQUVaLFNBQXJCO0FBQWdDLGdCQUFRLEVBQUVDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJBO0FBQUEsa0JBREo7QUE4QkgsQ0ExQ0Q7O0dBQU1GLE07O0tBQUFBLE07QUE0Q04sK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2FwcC9UYWJOYXYubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBUYWJzTWVudSBmcm9tICcuL1RhYnNNZW51JztcblxuY29uc3QgVGFiTmF2ID0gKHt0YWJzU3RhdGUsIGRpc3BhdGNofSkgPT4ge1xuXG4gICAgY29uc3QgW3RhYkVkaXQsIHNldFRhYkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBcbiAgICBjb25zdCB0b2dnbGVUYWJFZGl0ID0gKCkgPT4geyBzZXRUYWJFZGl0KCF0YWJFZGl0KSB9XG4gICAgXG4gICAgY29uc3QgW3Nob3dUYWJNZW51LCBzZXRTaG93VGFiTWVudV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB0b2dnbGVUYWJNZW51ID0gKCkgPT4gc2V0U2hvd1RhYk1lbnUoIXNob3dUYWJNZW51KVxuXG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZVdyYXB9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZW51Jz48YT48SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvaG9tZS5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9Lz48L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+ICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJ9PlxuICAgICAgICAgICAgICAgIHsgIXRhYkVkaXQgP1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y3VycmVudFRhYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fT48SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSBvbkNsaWNrPXt0b2dnbGVUYWJFZGl0fSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGFiSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2N1cnJlbnRUYWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIuaWQsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e3RvZ2dsZVRhYkVkaXR9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0+PEltYWdlIHNyYz0nL2ltZy9hcHAvZWRpdC5zdmcnIGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gb25DbGljaz17dG9nZ2xlVGFiRWRpdH0gLz48L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzV3JhcH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3RhYnMuc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBvbkNsaWNrPXt0b2dnbGVUYWJNZW51fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9uYXY+ICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dUYWJNZW51ID8gc3R5bGVzLnNob3dUYWJNZW51IDogc3R5bGVzLmhpZGVUYWJNZW51fT5cbiAgICAgICAgICAgIDxUYWJzTWVudSB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogeyBzaG93VGFiTWVudSAmJiA8VGFic01lbnUgLz4gfSAqL31cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});