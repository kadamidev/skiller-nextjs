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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar TabNav = function TabNav(_ref) {\n  _s();\n\n  var darkMode = _ref.darkMode,\n      tabsState = _ref.tabsState,\n      dispatch = _ref.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTabMenu = _useState2[0],\n      setShowTabMenu = _useState2[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(min-width: 769px)');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [!isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homeWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/home.svg\",\n                width: 30,\n                height: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 39\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tab),\n          children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: currentTab.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/edit.svg\",\n                height: 16,\n                width: 16,\n                onClick: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 50\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n            type: \"text\",\n            value: currentTab.name,\n            onChange: function onChange(event) {\n              return dispatch({\n                type: 'changeTabName',\n                payload: {\n                  tabId: currentTab.id,\n                  name: event.target.value\n                }\n              });\n            },\n            onBlur: toggleTabEdit\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/tabs.svg\",\n            width: 30,\n            height: 30,\n            onClick: toggleTabMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsList),\n          children: tabsState.tabs.map(function (tab, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabClickBox)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: tabsState.currentTabIdx == index ? [(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab), (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopCurrent)].join(\" \") : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab),\n                onClick: function onClick() {\n                  return dispatch({\n                    type: 'changeCurrentTab',\n                    payload: {\n                      id: tab.id,\n                      idx: index\n                    }\n                  });\n                },\n                children: [!tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  children: tab.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 25\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n                  type: \"text\",\n                  value: currentTab.name,\n                  onChange: function onChange(event) {\n                    return dispatch({\n                      type: 'changeTabName',\n                      payload: {\n                        tabId: currentTab.id,\n                        name: event.target.value\n                      }\n                    });\n                  },\n                  onBlur: toggleTabEdit\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabButtons),\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().deleteTabWrapper),\n                    onClick: function onClick() {\n                      return dispatch({\n                        type: 'deleteTab',\n                        payload: {\n                          id: tab.id,\n                          idx: index\n                        }\n                      });\n                    },\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                      src: \"/img/app/circled-x.svg\",\n                      height: 20,\n                      width: 20\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 59,\n                      columnNumber: 33\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 58,\n                    columnNumber: 29\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                      src: \"/img/app/edit.svg\",\n                      height: 20,\n                      width: 20,\n                      onClick: toggleTabEdit\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 62,\n                      columnNumber: 33\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 61,\n                    columnNumber: 29\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 25\n                }, _this)]\n              }, tab.id, true, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newTabWrapper),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/new-tab.svg\",\n            height: 30,\n            width: 30,\n            onClick: function onClick() {\n              return dispatch({\n                type: 'addNewTab'\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {\n        darkMode: darkMode,\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"iVMMr9VQuSQhQph1j4deoEsX1mc=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];\n});\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3g/NDBlZCJdLCJuYW1lcyI6WyJUYWJOYXYiLCJkYXJrTW9kZSIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJ0YWJFZGl0Iiwic2V0VGFiRWRpdCIsInRvZ2dsZVRhYkVkaXQiLCJzaG93VGFiTWVudSIsInNldFNob3dUYWJNZW51IiwidG9nZ2xlVGFiTWVudSIsImN1cnJlbnRUYWIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJzdHlsZXMiLCJuYW1lIiwiZXZlbnQiLCJ0eXBlIiwicGF5bG9hZCIsInRhYklkIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInRhYiIsImluZGV4IiwidGFiQ2xpY2tCb3giLCJqb2luIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBcUM7QUFBQTs7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxrQkFFbEJDLCtDQUFRLENBQUMsS0FBRCxDQUZVO0FBQUEsTUFFekNDLE9BRnlDO0FBQUEsTUFFaENDLFVBRmdDOztBQUtoRCxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBRUQsY0FBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUFzQixHQUFwRDs7QUFMZ0QsbUJBT1ZELCtDQUFRLENBQUMsS0FBRCxDQVBFO0FBQUEsTUFPekNJLFdBUHlDO0FBQUEsTUFPNUJDLGNBUDRCOztBQVFoRCxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsV0FBTUQsY0FBYyxDQUFDLENBQUNE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QSxNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvVGFiTmF2Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVGFic01lbnUgZnJvbSAnLi9UYWJzTWVudSc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vLi4vbGliL3VzZU1lZGlhUXVlcnknO1xuXG5jb25zdCBUYWJOYXYgPSAoe2RhcmtNb2RlLCB0YWJzU3RhdGUsIGRpc3BhdGNofSkgPT4ge1xuXG4gICAgY29uc3QgW3RhYkVkaXQsIHNldFRhYkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBcbiAgICBjb25zdCB0b2dnbGVUYWJFZGl0ID0gKCkgPT4geyBzZXRUYWJFZGl0KCF0YWJFZGl0KSB9XG4gICAgXG4gICAgY29uc3QgW3Nob3dUYWJNZW51LCBzZXRTaG93VGFiTWVudV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB0b2dnbGVUYWJNZW51ID0gKCkgPT4gc2V0U2hvd1RhYk1lbnUoIXNob3dUYWJNZW51KVxuXG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XVxuXG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDogNzY5cHgpJylcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtb2JpbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxuICAgICAgICAgICAgeyAhaXNEZXNrdG9wICYmIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVXcmFwfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbWVudSc+PGE+PEltYWdlIHNyYz1cIi9pbWcvYXBwL2hvbWUuc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfS8+PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XG4gICAgICAgICAgICAgICAgeyAhdGFiRWRpdCA/XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGFiLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IG9uQ2xpY2s9e3RvZ2dsZVRhYkVkaXR9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy50YWJJbnB1dH0gdHlwZT1cInRleHRcIiB2YWx1ZT17Y3VycmVudFRhYi5uYW1lfSBvbkNoYW5nZT17IChldmVudCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdjaGFuZ2VUYWJOYW1lJywgcGF5bG9hZDogeyB0YWJJZDogY3VycmVudFRhYi5pZCwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17dG9nZ2xlVGFiRWRpdH0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnNXcmFwfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvdGFicy5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9IG9uQ2xpY2s9e3RvZ2dsZVRhYk1lbnV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPiB9XG4gICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEZXNrdG9wIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgICAgIHsgaXNEZXNrdG9wICYmIDw+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGFic0xpc3R9PlxuICAgICAgICAgICAgICAgIHt0YWJzU3RhdGUudGFicy5tYXAoICh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJDbGlja0JveH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RhYi5pZH0gY2xhc3NOYW1lPXsodGFic1N0YXRlLmN1cnJlbnRUYWJJZHggPT0gaW5kZXgpID8gW3N0eWxlcy5kZXNrdG9wVGFiLCBzdHlsZXMuZGVza3RvcEN1cnJlbnRdLmpvaW4oXCIgXCIpIDogc3R5bGVzLmRlc2t0b3BUYWIgfSBvbkNsaWNrPXsgKCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdjaGFuZ2VDdXJyZW50VGFiJywgcGF5bG9hZDoge2lkOiB0YWIuaWQsIGlkeDogaW5kZXh9IH0pIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICF0YWJFZGl0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YWIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGFiSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2N1cnJlbnRUYWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIuaWQsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e3RvZ2dsZVRhYkVkaXR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFiQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVUYWJXcmFwcGVyfSBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdkZWxldGVUYWInLCBwYXlsb2FkOiB7aWQ6IHRhYi5pZCwgaWR4OiBpbmRleH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9jaXJjbGVkLXguc3ZnJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IG9uQ2xpY2s9e3RvZ2dsZVRhYkVkaXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC8+KVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3VGFiV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvbmV3LXRhYi5zdmcnIGhlaWdodD17MzB9IHdpZHRoPXszMH0gb25DbGljaz17ICgpID0+IGRpc3BhdGNoKHt0eXBlOiAnYWRkTmV3VGFiJ30pIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+fVxuXG4gICAgICAgIDwvbmF2PiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93VGFiTWVudSA/IHN0eWxlcy5zaG93VGFiTWVudSA6IHN0eWxlcy5oaWRlVGFiTWVudX0+XG4gICAgICAgICAgICA8VGFic01lbnUgZGFya01vZGU9e2RhcmtNb2RlfSB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});