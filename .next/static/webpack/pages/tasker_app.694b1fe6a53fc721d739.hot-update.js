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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar TabNav = function TabNav(_ref) {\n  _s();\n\n  var darkMode = _ref.darkMode,\n      tabsState = _ref.tabsState,\n      dispatch = _ref.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTabMenu = _useState2[0],\n      setShowTabMenu = _useState2[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(min-width: 769px)');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [!isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homeWrap),\n          children: [\"w\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/home.svg\",\n                width: 30,\n                height: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 39\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tab),\n          children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: currentTab.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/edit.svg\",\n                height: 16,\n                width: 16,\n                onClick: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 50\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n            type: \"text\",\n            value: currentTab.name,\n            onChange: function onChange(event) {\n              return dispatch({\n                type: 'changeTabName',\n                payload: {\n                  tabId: currentTab.id,\n                  name: event.target.value\n                }\n              });\n            },\n            onBlur: toggleTabEdit\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/tabs.svg\",\n            width: 30,\n            height: 30,\n            onClick: toggleTabMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsList),\n          children: [tabsState.tabs.map(function (tab, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: tabsState.currentTabIdx == index ? [(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab), (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopCurrent)].join(\" \") : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: tab.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 25\n              }, _this)\n            }, tab.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 21\n            }, _this);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newTabWrapper),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/new-tab.svg\",\n              height: 35,\n              width: 35,\n              onClick: function onClick() {\n                return dispatch({\n                  type: 'addNewTab'\n                });\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {\n        darkMode: darkMode,\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"iVMMr9VQuSQhQph1j4deoEsX1mc=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];\n});\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3g/NDBlZCJdLCJuYW1lcyI6WyJUYWJOYXYiLCJkYXJrTW9kZSIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJ0YWJFZGl0Iiwic2V0VGFiRWRpdCIsInRvZ2dsZVRhYkVkaXQiLCJzaG93VGFiTWVudSIsInNldFNob3dUYWJNZW51IiwidG9nZ2xlVGFiTWVudSIsImN1cnJlbnRUYWIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJzdHlsZXMiLCJuYW1lIiwiZXZlbnQiLCJ0eXBlIiwicGF5bG9hZCIsInRhYklkIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInRhYiIsImluZGV4Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXFDO0FBQUE7O0FBQUEsTUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQUEsa0JBRWxCQywrQ0FBUSxDQUFDLEtBQUQsQ0FGVTtBQUFBLE1BRXpDQyxPQUZ5QztBQUFBLE1BRWhDQyxVQUZnQzs7QUFLaEQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUVELGNBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFBc0IsR0FBcEQ7O0FBTGdELG1CQU9WRCwrQ0FBUSxDQUFDLEtBQUQsQ0FQRTtBQUFBLE1BT3pDSSxXQVB5QztBQUFBLE1BTzVCQyxjQVA0Qjs7QUFRaEQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFdBQU1ELGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQXBCO0FBQUEsR0FB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RkFBaEI7QUFBQSxtQ0FDSSw4REFBQyxtREFBRDtBQUFPLGlCQUFHLEVBQUMsc0JBQVg7QUFBa0Msb0JBQU0sRUFBRSxFQUExQztBQUE4QyxtQkFBSyxFQUFFLEVBQXJEO0FBQXlELHFCQUFPLEVBQUc7QUFBQSx1QkFBTWIsUUFBUSxDQUFDO0FBQUNnQixzQkFBSSxFQUFFO0FBQVAsaUJBQUQsQ0FBZDtBQUFBO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURlLHVCQXRCbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUF3Q0E7QUFBSyxlQUFTLEVBQUVYLFdBQVcsR0FBR1EsbUZBQUgsR0FBd0JBLG1GQUFuRDtBQUFBLDZCQUNJLDhEQUFDLDhDQUFEO0FBQVUsZ0JBQVEsRUFBRWYsUUFBcEI7QUFBOEIsaUJBQVMsRUFBRUMsU0FBekM7QUFBb0QsZ0JBQVEsRUFBRUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4Q0E7QUFBQSxrQkFESjtBQThDSCxDQTVERDs7R0FBTUgsTTtVQVlnQmUsNkQ7OztLQVpoQmYsTTtBQThETiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGFza2VyX2FwcC9UYWJOYXYuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYXBwL1RhYk5hdi5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFRhYnNNZW51IGZyb20gJy4vVGFic01lbnUnO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJy4uLy4uL2xpYi91c2VNZWRpYVF1ZXJ5JztcblxuY29uc3QgVGFiTmF2ID0gKHtkYXJrTW9kZSwgdGFic1N0YXRlLCBkaXNwYXRjaH0pID0+IHtcblxuICAgIGNvbnN0IFt0YWJFZGl0LCBzZXRUYWJFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgXG4gICAgY29uc3QgdG9nZ2xlVGFiRWRpdCA9ICgpID0+IHsgc2V0VGFiRWRpdCghdGFiRWRpdCkgfVxuICAgIFxuICAgIGNvbnN0IFtzaG93VGFiTWVudSwgc2V0U2hvd1RhYk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgdG9nZ2xlVGFiTWVudSA9ICgpID0+IHNldFNob3dUYWJNZW51KCFzaG93VGFiTWVudSlcblxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF1cblxuICAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDc2OXB4KScpXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbW9iaWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgICAgIHsgIWlzRGVza3RvcCAmJiA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lV3JhcH0+d1xuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZW51Jz48YT48SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvaG9tZS5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9Lz48L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cbiAgICAgICAgICAgICAgICB7ICF0YWJFZGl0ID9cbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRUYWIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0+PEltYWdlIHNyYz0nL2ltZy9hcHAvZWRpdC5zdmcnIGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gb25DbGljaz17dG9nZ2xlVGFiRWRpdH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnRhYklucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtjdXJyZW50VGFiLm5hbWV9IG9uQ2hhbmdlPXsgKGV2ZW50KSA9PiBkaXNwYXRjaCh7dHlwZTogJ2NoYW5nZVRhYk5hbWUnLCBwYXlsb2FkOiB7IHRhYklkOiBjdXJyZW50VGFiLmlkLCBuYW1lOiBldmVudC50YXJnZXQudmFsdWV9IH0pIH0gb25CbHVyPXt0b2dnbGVUYWJFZGl0fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFic1dyYXB9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC90YWJzLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gb25DbGljaz17dG9nZ2xlVGFiTWVudX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+IH1cbiAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERlc2t0b3AgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxuICAgICAgICAgICAgeyBpc0Rlc2t0b3AgJiYgPD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy50YWJzTGlzdH0+XG4gICAgICAgICAgICAgICAge3RhYnNTdGF0ZS50YWJzLm1hcCggKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dGFiLmlkfSBjbGFzc05hbWU9eyh0YWJzU3RhdGUuY3VycmVudFRhYklkeCA9PSBpbmRleCkgPyBbc3R5bGVzLmRlc2t0b3BUYWIsIHN0eWxlcy5kZXNrdG9wQ3VycmVudF0uam9pbihcIiBcIikgOiBzdHlsZXMuZGVza3RvcFRhYiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RhYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3VGFiV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL25ldy10YWIuc3ZnJyBoZWlnaHQ9ezM1fSB3aWR0aD17MzV9IG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ2FkZE5ld1RhYid9KSB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8Lz59XG5cbiAgICAgICAgPC9uYXY+ICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dUYWJNZW51ID8gc3R5bGVzLnNob3dUYWJNZW51IDogc3R5bGVzLmhpZGVUYWJNZW51fT5cbiAgICAgICAgICAgIDxUYWJzTWVudSBkYXJrTW9kZT17ZGFya01vZGV9IHRhYnNTdGF0ZT17dGFic1N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYk5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});