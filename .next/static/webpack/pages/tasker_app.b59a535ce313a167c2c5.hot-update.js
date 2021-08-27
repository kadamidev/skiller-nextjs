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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar TabNav = function TabNav(_ref) {\n  _s();\n\n  var darkMode = _ref.darkMode,\n      tabsState = _ref.tabsState,\n      dispatch = _ref.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editableTabIdx = _useState2[0],\n      setEditableTabIdx = _useState2[1];\n\n  var editNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTabMenu = _useState3[0],\n      setShowTabMenu = _useState3[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(min-width: 769px)');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [!isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homeWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/home.svg\",\n                width: 30,\n                height: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 39\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tab),\n          children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: currentTab.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/edit.svg\",\n                height: 16,\n                width: 16,\n                onClick: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 50\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n            type: \"text\",\n            value: currentTab.name,\n            onChange: function onChange(event) {\n              return dispatch({\n                type: 'changeTabName',\n                payload: {\n                  tabId: currentTab.id,\n                  name: event.target.value\n                }\n              });\n            },\n            onBlur: toggleTabEdit\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/tabs.svg\",\n            width: 30,\n            height: 30,\n            onClick: toggleTabMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsList),\n          children: tabsState.tabs.map(function (tab, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: tabsState.currentTabIdx == index ? [(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab), (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopCurrent)].join(\" \") : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab),\n              onClick: function onClick() {\n                return dispatch({\n                  type: 'changeCurrentTab',\n                  payload: {\n                    id: tab.id,\n                    idx: index\n                  }\n                });\n              },\n              children: [tabEdit && editableTabIdx == index ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: editNode,\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n                type: \"text\",\n                value: tab.name,\n                onChange: function onChange(event) {\n                  return dispatch({\n                    type: 'changeTabName',\n                    payload: {\n                      tabId: tab.id,\n                      name: event.target.value\n                    }\n                  });\n                },\n                onBlur: toggleTabEdit,\n                onClick: function onClick(e) {\n                  e.stopPropagation();\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 25\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: tab.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabButtons),\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().deleteTabWrapper),\n                  onClick: function onClick(e) {\n                    e.stopPropagation();\n                    dispatch({\n                      type: 'deleteTab',\n                      payload: {\n                        id: tab.id,\n                        idx: index\n                      }\n                    });\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/app/circled-x.svg\",\n                    height: 20,\n                    width: 20\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 63,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 29\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/app/edit.svg\",\n                    height: 20,\n                    width: 20,\n                    onClick: function onClick(e) {\n                      e.stopPropagation();\n                      toggleTabEdit();\n                      setEditableTabIdx(index);\n                      editNode.current.focus();\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 29\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 25\n              }, _this)]\n            }, tab.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newTabWrapper),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/new-tab.svg\",\n            height: 30,\n            width: 30,\n            onClick: function onClick() {\n              return dispatch({\n                type: 'addNewTab'\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {\n        darkMode: darkMode,\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"25PLurALIbaeSbwn7rkWHTNqvOs=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];\n});\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3g/NDBlZCJdLCJuYW1lcyI6WyJUYWJOYXYiLCJkYXJrTW9kZSIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJ0YWJFZGl0Iiwic2V0VGFiRWRpdCIsImVkaXRhYmxlVGFiSWR4Iiwic2V0RWRpdGFibGVUYWJJZHgiLCJlZGl0Tm9kZSIsInVzZVJlZiIsInRvZ2dsZVRhYkVkaXQiLCJzaG93VGFiTWVudSIsInNldFNob3dUYWJNZW51IiwidG9nZ2xlVGFiTWVudSIsImN1cnJlbnRUYWIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJzdHlsZXMiLCJuYW1lIiwiZXZlbnQiLCJ0eXBlIiwicGF5bG9hZCIsInRhYklkIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInRhYiIsImluZGV4Iiwiam9pbiIsImlkeCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxQztBQUFBOztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUVsQkMsK0NBQVEsQ0FBQyxLQUFELENBRlU7QUFBQSxNQUV6Q0MsT0FGeUM7QUFBQSxNQUVoQ0MsVUFGZ0M7O0FBQUEsbUJBR0pGLCtDQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHekNHLGNBSHlDO0FBQUEsTUFHekJDLGlCQUh5Qjs7QUFJaEQsTUFBTUMsUUFBUSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUVMLGNBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFBc0IsR0FBcEQ7O0FBTmdELG1CQVFWRCwrQ0FBUSxDQUFDLEtBQUQsQ0FSRTtBQUFBLE1BUXpDUSxXQVJ5QztBQUFBLE1BUTVCQyxjQVI0Qjs7QUFTaEQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFdBQU1ELGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQXBCO0FBQUEsR0FBdEI7O0FBRUEsTUFBTUcsVUFBVSxHQUFHYixTQUFTLENBQUNjLElBQVYsQ0FBZWQsU0FBUyxDQUFDZSxhQUF6QixDQUFuQjtBQUVBLE1BQU1DLFNBQVMsR0FBR0MsaUVBQWEsQ0FBQyxvQkFBRCxDQUEvQjtBQUdBLHNCQUNJO0FBQUEsNEJBQ0E7QUFBSyxlQUFTLEVBQUVDLGlGQUFoQjtBQUFBLGlCQUVNLENBQUNGLFNBQUQsaUJBQWM7QUFBQSxnQ0FDaEI7QUFBSyxtQkFBUyxFQUFFRSxnRkFBaEI7QUFBQSxpQ0FDSSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsT0FBWDtBQUFBLG1DQUFtQjtBQUFBLHFDQUFHLDhEQUFDLG1EQUFEO0FBQU8sbUJBQUcsRUFBQyxtQkFBWDtBQUErQixxQkFBSyxFQUFFLEVBQXRDO0FBQTBDLHNCQUFNLEVBQUU7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCLGVBSWhCO0FBQUssbUJBQVMsRUFBRUEsMkVBQWhCO0FBQUEsb0JBQ00sQ0FBQ2YsT0FBRCxnQkFDRTtBQUFBLG9DQUNBO0FBQUEsd0JBQU9VLFVBQVUsQ0FBQ007QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQUVBO0FBQUssdUJBQVMsRUFBRUQsNEVBQWhCO0FBQUEscUNBQTZCLDhEQUFDLG1EQUFEO0FBQU8sbUJBQUcsRUFBQyxtQkFBWDtBQUErQixzQkFBTSxFQUFFLEVBQXZDO0FBQTJDLHFCQUFLLEVBQUUsRUFBbEQ7QUFBc0QsdUJBQU8sRUFBRVQ7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBO0FBQUEsMEJBREYsZ0JBTUU7QUFBTyxxQkFBUyxFQUFFUyxnRkFBbEI7QUFBbUMsZ0JBQUksRUFBQyxNQUF4QztBQUErQyxpQkFBSyxFQUFFTCxVQUFVLENBQUNNLElBQWpFO0FBQXVFLG9CQUFRLEVBQUcsa0JBQUNDLEtBQUQ7QUFBQSxxQkFBV25CLFFBQVEsQ0FBQztBQUFDb0Isb0JBQUksRUFBRSxlQUFQO0FBQXdCQyx1QkFBTyxFQUFFO0FBQUVDLHVCQUFLLEVBQUVWLFVBQVUsQ0FBQ1csRUFBcEI7QUFBd0JMLHNCQUFJLEVBQUVDLEtBQUssQ0FBQ0ssTUFBTixDQUFhQztBQUEzQztBQUFqQyxlQUFELENBQW5CO0FBQUEsYUFBbEY7QUFBOEwsa0JBQU0sRUFBRWpCO0FBQXRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpnQixlQWVoQjtBQUFLLG1CQUFTLEVBQUVTLGdGQUFoQjtBQUFBLGlDQUNJLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLG1CQUFYO0FBQStCLGlCQUFLLEVBQUUsRUFBdEM7QUFBMEMsa0JBQU0sRUFBRSxFQUFsRDtBQUFzRCxtQkFBTyxFQUFFTjtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmZ0I7QUFBQSxzQkFGcEIsRUFzQk1JLFNBQVMsaUJBQUk7QUFBQSxnQ0FDZjtBQUFJLG1CQUFTLEVBQUVFLGdGQUFmO0FBQUEsb0JBQ0tsQixTQUFTLENBQUNjLElBQVYsQ0FBZWEsR0FBZixDQUFvQixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDakMsZ0NBQ0E7QUFBaUIsdUJBQVMsRUFBRzdCLFNBQVMsQ0FBQ2UsYUFBVixJQUEyQmMsS0FBNUIsR0FBcUMsQ0FBQ1gsa0ZBQUQsRUFBb0JBLHNGQUFwQixFQUEyQ1ksSUFBM0MsQ0FBZ0QsR0FBaEQsQ0FBckMsR0FBNEZaLGtGQUF4SDtBQUE0SSxxQkFBTyxFQUFHO0FBQUEsdUJBQU1qQixRQUFRLENBQUM7QUFBQ29CLHNCQUFJLEVBQUUsa0JBQVA7QUFBMkJDLHlCQUFPLEVBQUU7QUFBQ0Usc0JBQUUsRUFBRUksR0FBRyxDQUFDSixFQUFUO0FBQWFPLHVCQUFHLEVBQUVGO0FBQWxCO0FBQXBDLGlCQUFELENBQWQ7QUFBQSxlQUF0SjtBQUFBLHlCQUNPMUIsT0FBTyxJQUFJRSxjQUFjLElBQUl3QixLQUE5QixnQkFDRjtBQUFPLG1CQUFHLEVBQUV0QixRQUFaO0FBQXNCLHlCQUFTLEVBQUVXLGdGQUFqQztBQUFrRCxvQkFBSSxFQUFDLE1BQXZEO0FBQThELHFCQUFLLEVBQUVVLEdBQUcsQ0FBQ1QsSUFBekU7QUFBK0Usd0JBQVEsRUFBRyxrQkFBQ0MsS0FBRDtBQUFBLHlCQUFXbkIsUUFBUSxDQUFDO0FBQUNvQix3QkFBSSxFQUFFLGVBQVA7QUFBd0JDLDJCQUFPLEVBQUU7QUFBRUMsMkJBQUssRUFBRUssR0FBRyxDQUFDSixFQUFiO0FBQWlCTCwwQkFBSSxFQUFFQyxLQUFLLENBQUNLLE1BQU4sQ0FBYUM7QUFBcEM7QUFBakMsbUJBQUQsQ0FBbkI7QUFBQSxpQkFBMUY7QUFBK0wsc0JBQU0sRUFBRWpCLGFBQXZNO0FBQXNOLHVCQUFPLEVBQUUsaUJBQUN1QixDQUFELEVBQU87QUFBQ0EsbUJBQUMsQ0FBQ0MsZUFBRjtBQUFvQjtBQUEzUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURFLGdCQUdGO0FBQUEsMEJBQU9MLEdBQUcsQ0FBQ1Q7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKLGVBTUk7QUFBSyx5QkFBUyxFQUFFRCxrRkFBaEI7QUFBQSx3Q0FDSTtBQUFLLDJCQUFTLEVBQUVBLHdGQUFoQjtBQUF5Qyx5QkFBTyxFQUFFLGlCQUFDYyxDQUFELEVBQU87QUFDckRBLHFCQUFDLENBQUNDLGVBQUY7QUFDQWhDLDRCQUFRLENBQUM7QUFBRW9CLDBCQUFJLEVBQUUsV0FBUjtBQUFxQkMsNkJBQU8sRUFBRTtBQUFDRSwwQkFBRSxFQUFFSSxHQUFHLENBQUNKLEVBQVQ7QUFBYU8sMkJBQUcsRUFBRUY7QUFBbEI7QUFBOUIscUJBQUQsQ0FBUjtBQUNILG1CQUhEO0FBQUEseUNBSUksOERBQUMsbURBQUQ7QUFBTyx1QkFBRyxFQUFDLHdCQUFYO0FBQW9DLDBCQUFNLEVBQUUsRUFBNUM7QUFBZ0QseUJBQUssRUFBRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQU9JO0FBQUssMkJBQVMsRUFBRVgsNEVBQWhCO0FBQUEseUNBQ0ksOERBQUMsbURBQUQ7QUFBTyx1QkFBRyxFQUFDLG1CQUFYO0FBQStCLDBCQUFNLEVBQUUsRUFBdkM7QUFBMkMseUJBQUssRUFBRSxFQUFsRDtBQUFzRCwyQkFBTyxFQUFFLGlCQUFDYyxDQUFELEVBQU87QUFDbEVBLHVCQUFDLENBQUNDLGVBQUY7QUFDQXhCLG1DQUFhO0FBQ2JILHVDQUFpQixDQUFDdUIsS0FBRCxDQUFqQjtBQUNBdEIsOEJBQVEsQ0FBQzJCLE9BQVQsQ0FBaUJDLEtBQWpCO0FBQ0g7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQSxlQUFTUCxHQUFHLENBQUNKLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQTtBQXlCSCxXQTFCQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGUsZUE4QmY7QUFBSyxtQkFBUyxFQUFFTixxRkFBaEI7QUFBQSxpQ0FDSSw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyxzQkFBWDtBQUFrQyxrQkFBTSxFQUFFLEVBQTFDO0FBQThDLGlCQUFLLEVBQUUsRUFBckQ7QUFBeUQsbUJBQU8sRUFBRztBQUFBLHFCQUFNakIsUUFBUSxDQUFDO0FBQUNvQixvQkFBSSxFQUFFO0FBQVAsZUFBRCxDQUFkO0FBQUE7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJlO0FBQUEsc0JBdEJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQTJEQTtBQUFLLGVBQVMsRUFBRVgsV0FBVyxHQUFHUSxtRkFBSCxHQUF3QkEsbUZBQW5EO0FBQUEsNkJBQ0ksOERBQUMsOENBQUQ7QUFBVSxnQkFBUSxFQUFFbkIsUUFBcEI7QUFBOEIsaUJBQVMsRUFBRUMsU0FBekM7QUFBb0QsZ0JBQVEsRUFBRUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzREE7QUFBQSxrQkFESjtBQWlFSCxDQWpGRDs7R0FBTUgsTTtVQWFnQm1CLDZEOzs7S0FiaEJuQixNO0FBbUZOLCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2FwcC9UYWJOYXYubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBUYWJzTWVudSBmcm9tICcuL1RhYnNNZW51JztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICcuLi8uLi9saWIvdXNlTWVkaWFRdWVyeSc7XG5cbmNvbnN0IFRhYk5hdiA9ICh7ZGFya01vZGUsIHRhYnNTdGF0ZSwgZGlzcGF0Y2h9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgW3RhYkVkaXQsIHNldFRhYkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2VkaXRhYmxlVGFiSWR4LCBzZXRFZGl0YWJsZVRhYklkeF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBlZGl0Tm9kZSA9IHVzZVJlZihudWxsKVxuICAgIFxuICAgIGNvbnN0IHRvZ2dsZVRhYkVkaXQgPSAoKSA9PiB7IHNldFRhYkVkaXQoIXRhYkVkaXQpIH1cbiAgICBcbiAgICBjb25zdCBbc2hvd1RhYk1lbnUsIHNldFNob3dUYWJNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHRvZ2dsZVRhYk1lbnUgPSAoKSA9PiBzZXRTaG93VGFiTWVudSghc2hvd1RhYk1lbnUpXG5cbiAgICBjb25zdCBjdXJyZW50VGFiID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdXG5cbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA3NjlweCknKVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbW9iaWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgICAgIHsgIWlzRGVza3RvcCAmJiA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lV3JhcH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lbnUnPjxhPjxJbWFnZSBzcmM9XCIvaW1nL2FwcC9ob21lLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0vPjwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJ9PlxuICAgICAgICAgICAgICAgIHsgIXRhYkVkaXQgP1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y3VycmVudFRhYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fT48SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSBvbkNsaWNrPXt0b2dnbGVUYWJFZGl0fSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGFiSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2N1cnJlbnRUYWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIuaWQsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e3RvZ2dsZVRhYkVkaXR9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzV3JhcH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3RhYnMuc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBvbkNsaWNrPXt0b2dnbGVUYWJNZW51fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4gfVxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRGVza3RvcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XG4gICAgICAgICAgICB7IGlzRGVza3RvcCAmJiA8PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnRhYnNMaXN0fT5cbiAgICAgICAgICAgICAgICB7dGFic1N0YXRlLnRhYnMubWFwKCAodGFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0YWIuaWR9IGNsYXNzTmFtZT17KHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4ID09IGluZGV4KSA/IFtzdHlsZXMuZGVza3RvcFRhYiwgc3R5bGVzLmRlc2t0b3BDdXJyZW50XS5qb2luKFwiIFwiKSA6IHN0eWxlcy5kZXNrdG9wVGFiIH0gb25DbGljaz17ICgpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlQ3VycmVudFRhYicsIHBheWxvYWQ6IHtpZDogdGFiLmlkLCBpZHg6IGluZGV4fSB9KSB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgKHRhYkVkaXQgJiYgZWRpdGFibGVUYWJJZHggPT0gaW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2VkaXROb2RlfSBjbGFzc05hbWU9e3N0eWxlcy50YWJJbnB1dH0gdHlwZT1cInRleHRcIiB2YWx1ZT17dGFiLm5hbWV9IG9uQ2hhbmdlPXsgKGV2ZW50KSA9PiBkaXNwYXRjaCh7dHlwZTogJ2NoYW5nZVRhYk5hbWUnLCBwYXlsb2FkOiB7IHRhYklkOiB0YWIuaWQsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e3RvZ2dsZVRhYkVkaXR9IG9uQ2xpY2s9eyhlKSA9PiB7ZS5zdG9wUHJvcGFnYXRpb24oKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YWIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYkJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlVGFiV3JhcHBlcn0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdkZWxldGVUYWInLCBwYXlsb2FkOiB7aWQ6IHRhYi5pZCwgaWR4OiBpbmRleH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvY2lyY2xlZC14LnN2ZycgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVGFiRWRpdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0YWJsZVRhYklkeChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXROb2RlLmN1cnJlbnQuZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld1RhYldyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL25ldy10YWIuc3ZnJyBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ2FkZE5ld1RhYid9KSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPn1cblxuICAgICAgICA8L25hdj4gICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1RhYk1lbnUgPyBzdHlsZXMuc2hvd1RhYk1lbnUgOiBzdHlsZXMuaGlkZVRhYk1lbnV9PlxuICAgICAgICAgICAgPFRhYnNNZW51IGRhcmtNb2RlPXtkYXJrTW9kZX0gdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});