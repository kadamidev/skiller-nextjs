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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar TabNav = function TabNav(_ref) {\n  _s();\n\n  var darkMode = _ref.darkMode,\n      tabsState = _ref.tabsState,\n      dispatch = _ref.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTabMenu = _useState2[0],\n      setShowTabMenu = _useState2[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(min-width: 769px)');\n\n  function handleEditClick(e) {\n    e.stopPropagation();\n    toggleTabEdit();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [!isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homeWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/home.svg\",\n                width: 30,\n                height: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 39\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tab),\n          children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: currentTab.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/edit.svg\",\n                height: 16,\n                width: 16,\n                onClick: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 50\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n            type: \"text\",\n            value: currentTab.name,\n            onChange: function onChange(event) {\n              return dispatch({\n                type: 'changeTabName',\n                payload: {\n                  tabId: currentTab.id,\n                  name: event.target.value\n                }\n              });\n            },\n            onBlur: toggleTabEdit\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/tabs.svg\",\n            width: 30,\n            height: 30,\n            onClick: toggleTabMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsList),\n          children: tabsState.tabs.map(function (tab, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: tabsState.currentTabIdx == index ? [(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab), (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopCurrent)].join(\" \") : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab),\n              onClick: function onClick() {\n                return dispatch({\n                  type: 'changeCurrentTab',\n                  payload: {\n                    id: tab.id,\n                    idx: index\n                  }\n                });\n              },\n              children: [!tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: tab.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 25\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n                type: \"text\",\n                value: currentTab.name,\n                onChange: function onChange(event) {\n                  return dispatch({\n                    type: 'changeTabName',\n                    payload: {\n                      tabId: currentTab.id,\n                      name: event.target.value\n                    }\n                  });\n                },\n                onBlur: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabButtons),\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().deleteTabWrapper),\n                  onClick: function onClick(e) {\n                    e.stopPropagation;\n                    dispatch({\n                      type: 'deleteTab',\n                      payload: {\n                        id: tab.id,\n                        idx: index\n                      }\n                    });\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/app/circled-x.svg\",\n                    height: 20,\n                    width: 20\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 29\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/app/edit.svg\",\n                    height: 20,\n                    width: 20,\n                    onClick: handleEditClick\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 69,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 68,\n                  columnNumber: 29\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 25\n              }, _this)]\n            }, tab.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newTabWrapper),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/new-tab.svg\",\n            height: 30,\n            width: 30,\n            onClick: function onClick() {\n              return dispatch({\n                type: 'addNewTab'\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {\n        darkMode: darkMode,\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"iVMMr9VQuSQhQph1j4deoEsX1mc=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];\n});\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3g/NDBlZCJdLCJuYW1lcyI6WyJUYWJOYXYiLCJkYXJrTW9kZSIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJ0YWJFZGl0Iiwic2V0VGFiRWRpdCIsInRvZ2dsZVRhYkVkaXQiLCJzaG93VGFiTWVudSIsInNldFNob3dUYWJNZW51IiwidG9nZ2xlVGFiTWVudSIsImN1cnJlbnRUYWIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJoYW5kbGVFZGl0Q2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic3R5bGVzIiwibmFtZSIsImV2ZW50IiwidHlwZSIsInBheWxvYWQiLCJ0YWJJZCIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ0YWIiLCJpbmRleCIsImpvaW4iLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxQztBQUFBOztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUVsQkMsK0NBQVEsQ0FBQyxLQUFELENBRlU7QUFBQSxNQUV6Q0MsT0FGeUM7QUFBQSxNQUVoQ0MsVUFGZ0M7O0FBS2hELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFFRCxjQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQXNCLEdBQXBEOztBQUxnRCxtQkFPVkQsK0NBQVEsQ0FBQyxLQUFELENBUEU7QUFBQSxNQU96Q0ksV0FQeUM7QUFBQSxNQU81QkMsY0FQNEI7O0FBUWhELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7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LGtCQURKO0FBNERILENBL0VEOztHQUFNSCxNO1VBWWdCZSw2RDs7O0tBWmhCZixNO0FBaUZOLCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvVGFiTmF2Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVGFic01lbnUgZnJvbSAnLi9UYWJzTWVudSc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vLi4vbGliL3VzZU1lZGlhUXVlcnknO1xuXG5jb25zdCBUYWJOYXYgPSAoe2RhcmtNb2RlLCB0YWJzU3RhdGUsIGRpc3BhdGNofSkgPT4ge1xuXG4gICAgY29uc3QgW3RhYkVkaXQsIHNldFRhYkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBcbiAgICBjb25zdCB0b2dnbGVUYWJFZGl0ID0gKCkgPT4geyBzZXRUYWJFZGl0KCF0YWJFZGl0KSB9XG4gICAgXG4gICAgY29uc3QgW3Nob3dUYWJNZW51LCBzZXRTaG93VGFiTWVudV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB0b2dnbGVUYWJNZW51ID0gKCkgPT4gc2V0U2hvd1RhYk1lbnUoIXNob3dUYWJNZW51KVxuXG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XVxuXG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDogNzY5cHgpJylcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVkaXRDbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdG9nZ2xlVGFiRWRpdCgpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1vYmlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XG4gICAgICAgICAgICB7ICFpc0Rlc2t0b3AgJiYgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZVdyYXB9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZW51Jz48YT48SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvaG9tZS5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9Lz48L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cbiAgICAgICAgICAgICAgICB7ICF0YWJFZGl0ID9cbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRUYWIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0+PEltYWdlIHNyYz0nL2ltZy9hcHAvZWRpdC5zdmcnIGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gb25DbGljaz17dG9nZ2xlVGFiRWRpdH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnRhYklucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtjdXJyZW50VGFiLm5hbWV9IG9uQ2hhbmdlPXsgKGV2ZW50KSA9PiBkaXNwYXRjaCh7dHlwZTogJ2NoYW5nZVRhYk5hbWUnLCBwYXlsb2FkOiB7IHRhYklkOiBjdXJyZW50VGFiLmlkLCBuYW1lOiBldmVudC50YXJnZXQudmFsdWV9IH0pIH0gb25CbHVyPXt0b2dnbGVUYWJFZGl0fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFic1dyYXB9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC90YWJzLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gb25DbGljaz17dG9nZ2xlVGFiTWVudX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+IH1cbiAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERlc2t0b3AgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxuICAgICAgICAgICAgeyBpc0Rlc2t0b3AgJiYgPD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy50YWJzTGlzdH0+XG4gICAgICAgICAgICAgICAge3RhYnNTdGF0ZS50YWJzLm1hcCggKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dGFiLmlkfSBjbGFzc05hbWU9eyh0YWJzU3RhdGUuY3VycmVudFRhYklkeCA9PSBpbmRleCkgPyBbc3R5bGVzLmRlc2t0b3BUYWIsIHN0eWxlcy5kZXNrdG9wQ3VycmVudF0uam9pbihcIiBcIikgOiBzdHlsZXMuZGVza3RvcFRhYiB9IG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ2NoYW5nZUN1cnJlbnRUYWInLCBwYXlsb2FkOiB7aWQ6IHRhYi5pZCwgaWR4OiBpbmRleH0gfSkgfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICF0YWJFZGl0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YWIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGFiSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2N1cnJlbnRUYWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIuaWQsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e3RvZ2dsZVRhYkVkaXR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFiQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVUYWJXcmFwcGVyfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkZWxldGVUYWInLCBwYXlsb2FkOiB7aWQ6IHRhYi5pZCwgaWR4OiBpbmRleH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvY2lyY2xlZC14LnN2ZycgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSBvbkNsaWNrPXtoYW5kbGVFZGl0Q2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3VGFiV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvbmV3LXRhYi5zdmcnIGhlaWdodD17MzB9IHdpZHRoPXszMH0gb25DbGljaz17ICgpID0+IGRpc3BhdGNoKHt0eXBlOiAnYWRkTmV3VGFiJ30pIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+fVxuXG4gICAgICAgIDwvbmF2PiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93VGFiTWVudSA/IHN0eWxlcy5zaG93VGFiTWVudSA6IHN0eWxlcy5oaWRlVGFiTWVudX0+XG4gICAgICAgICAgICA8VGFic01lbnUgZGFya01vZGU9e2RhcmtNb2RlfSB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});