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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar TabNav = function TabNav(_ref) {\n  _s();\n\n  var darkMode = _ref.darkMode,\n      tabsState = _ref.tabsState,\n      dispatch = _ref.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editableTabIdx = _useState2[0],\n      setEditableTabIdx = _useState2[1];\n\n  var editNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTabMenu = _useState3[0],\n      setShowTabMenu = _useState3[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(min-width: 769px)');\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    console.log(editNode.currentTarget); // editNode.current.focus()\n  }, [editNode]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [!isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homeWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/home.svg\",\n                width: 30,\n                height: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 39\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tab),\n          children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: currentTab.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/edit.svg\",\n                height: 16,\n                width: 16,\n                onClick: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 50\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n            type: \"text\",\n            value: currentTab.name,\n            onChange: function onChange(event) {\n              return dispatch({\n                type: 'changeTabName',\n                payload: {\n                  tabId: currentTab.id,\n                  name: event.target.value\n                }\n              });\n            },\n            onBlur: toggleTabEdit\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/tabs.svg\",\n            width: 30,\n            height: 30,\n            onClick: toggleTabMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsList),\n          children: tabsState.tabs.map(function (tab, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: tabsState.currentTabIdx == index ? [(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab), (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopCurrent)].join(\" \") : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab),\n              onClick: function onClick() {\n                return dispatch({\n                  type: 'changeCurrentTab',\n                  payload: {\n                    id: tab.id,\n                    idx: index\n                  }\n                });\n              },\n              children: [tabEdit && editableTabIdx == index ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: editNode,\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n                type: \"text\",\n                value: tab.name,\n                onChange: function onChange(event) {\n                  return dispatch({\n                    type: 'changeTabName',\n                    payload: {\n                      tabId: tab.id,\n                      name: event.target.value\n                    }\n                  });\n                },\n                onBlur: toggleTabEdit,\n                onClick: function onClick(e) {\n                  e.stopPropagation();\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 25\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: tab.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabButtons),\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().deleteTabWrapper),\n                  onClick: function onClick(e) {\n                    e.stopPropagation();\n                    dispatch({\n                      type: 'deleteTab',\n                      payload: {\n                        id: tab.id,\n                        idx: index\n                      }\n                    });\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/app/circled-x.svg\",\n                    height: 20,\n                    width: 20\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 29\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/app/edit.svg\",\n                    height: 20,\n                    width: 20,\n                    onClick: function onClick(e) {\n                      e.stopPropagation();\n                      toggleTabEdit();\n                      setEditableTabIdx(index);\n                      console.log(editNode); // editNode.current.focus()\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 29\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 25\n              }, _this)]\n            }, tab.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newTabWrapper),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/new-tab.svg\",\n            height: 30,\n            width: 30,\n            onClick: function onClick() {\n              return dispatch({\n                type: 'addNewTab'\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {\n        darkMode: darkMode,\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"FAnkngmk/icXBasDjEdCNjlZR7U=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];\n});\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3g/NDBlZCJdLCJuYW1lcyI6WyJUYWJOYXYiLCJkYXJrTW9kZSIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJ0YWJFZGl0Iiwic2V0VGFiRWRpdCIsImVkaXRhYmxlVGFiSWR4Iiwic2V0RWRpdGFibGVUYWJJZHgiLCJlZGl0Tm9kZSIsInVzZVJlZiIsInRvZ2dsZVRhYkVkaXQiLCJzaG93VGFiTWVudSIsInNldFNob3dUYWJNZW51IiwidG9nZ2xlVGFiTWVudSIsImN1cnJlbnRUYWIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsInN0eWxlcyIsIm5hbWUiLCJldmVudCIsInR5cGUiLCJwYXlsb2FkIiwidGFiSWQiLCJpZCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidGFiIiwiaW5kZXgiLCJqb2luIiwiaWR4IiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXFDO0FBQUE7O0FBQUEsTUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQUEsa0JBRWxCQywrQ0FBUSxDQUFDLEtBQUQsQ0FGVTtBQUFBLE1BRXpDQyxPQUZ5QztBQUFBLE1BRWhDQyxVQUZnQzs7QUFBQSxtQkFHSkYsK0NBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUd6Q0csY0FIeUM7QUFBQSxNQUd6QkMsaUJBSHlCOztBQUloRCxNQUFNQyxRQUFRLEdBQUdDLDZDQUFNLENBQUMsSUFB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RU4scUZBQWhCO0FBQUEsaUNBQ0ksOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsc0JBQVg7QUFBa0Msa0JBQU0sRUFBRSxFQUExQztBQUE4QyxpQkFBSyxFQUFFLEVBQXJEO0FBQXlELG1CQUFPLEVBQUc7QUFBQSxxQkFBTXJCLFFBQVEsQ0FBQztBQUFDd0Isb0JBQUksRUFBRTtBQUFQLGVBQUQsQ0FBZDtBQUFBO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CZTtBQUFBLHNCQXRCbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUE0REE7QUFBSyxlQUFTLEVBQUVmLFdBQVcsR0FBR1ksbUZBQUgsR0FBd0JBLG1GQUFuRDtBQUFBLDZCQUNJLDhEQUFDLDhDQUFEO0FBQVUsZ0JBQVEsRUFBRXZCLFFBQXBCO0FBQThCLGlCQUFTLEVBQUVDLFNBQXpDO0FBQW9ELGdCQUFRLEVBQUVDO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNURBO0FBQUEsa0JBREo7QUFrRUgsQ0F2RkQ7O0dBQU1ILE07VUFhZ0JtQiw2RDs7O0tBYmhCbkIsTTtBQXlGTiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGFza2VyX2FwcC9UYWJOYXYuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2FwcC9UYWJOYXYubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBUYWJzTWVudSBmcm9tICcuL1RhYnNNZW51JztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICcuLi8uLi9saWIvdXNlTWVkaWFRdWVyeSc7XG5cbmNvbnN0IFRhYk5hdiA9ICh7ZGFya01vZGUsIHRhYnNTdGF0ZSwgZGlzcGF0Y2h9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgW3RhYkVkaXQsIHNldFRhYkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2VkaXRhYmxlVGFiSWR4LCBzZXRFZGl0YWJsZVRhYklkeF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBlZGl0Tm9kZSA9IHVzZVJlZihudWxsKVxuICAgIFxuICAgIGNvbnN0IHRvZ2dsZVRhYkVkaXQgPSAoKSA9PiB7IHNldFRhYkVkaXQoIXRhYkVkaXQpIH1cbiAgICBcbiAgICBjb25zdCBbc2hvd1RhYk1lbnUsIHNldFNob3dUYWJNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHRvZ2dsZVRhYk1lbnUgPSAoKSA9PiBzZXRTaG93VGFiTWVudSghc2hvd1RhYk1lbnUpXG5cbiAgICBjb25zdCBjdXJyZW50VGFiID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdXG5cbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA3NjlweCknKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWRpdE5vZGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIC8vIGVkaXROb2RlLmN1cnJlbnQuZm9jdXMoKVxuICAgICAgfSwgW2VkaXROb2RlXSk7XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtb2JpbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxuICAgICAgICAgICAgeyAhaXNEZXNrdG9wICYmIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVXcmFwfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbWVudSc+PGE+PEltYWdlIHNyYz1cIi9pbWcvYXBwL2hvbWUuc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfS8+PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XG4gICAgICAgICAgICAgICAgeyAhdGFiRWRpdCA/XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGFiLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IG9uQ2xpY2s9e3RvZ2dsZVRhYkVkaXR9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy50YWJJbnB1dH0gdHlwZT1cInRleHRcIiB2YWx1ZT17Y3VycmVudFRhYi5uYW1lfSBvbkNoYW5nZT17IChldmVudCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdjaGFuZ2VUYWJOYW1lJywgcGF5bG9hZDogeyB0YWJJZDogY3VycmVudFRhYi5pZCwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17dG9nZ2xlVGFiRWRpdH0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnNXcmFwfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvdGFicy5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9IG9uQ2xpY2s9e3RvZ2dsZVRhYk1lbnV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPiB9XG4gICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEZXNrdG9wIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgICAgIHsgaXNEZXNrdG9wICYmIDw+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGFic0xpc3R9PlxuICAgICAgICAgICAgICAgIHt0YWJzU3RhdGUudGFicy5tYXAoICh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RhYi5pZH0gY2xhc3NOYW1lPXsodGFic1N0YXRlLmN1cnJlbnRUYWJJZHggPT0gaW5kZXgpID8gW3N0eWxlcy5kZXNrdG9wVGFiLCBzdHlsZXMuZGVza3RvcEN1cnJlbnRdLmpvaW4oXCIgXCIpIDogc3R5bGVzLmRlc2t0b3BUYWIgfSBvbkNsaWNrPXsgKCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdjaGFuZ2VDdXJyZW50VGFiJywgcGF5bG9hZDoge2lkOiB0YWIuaWQsIGlkeDogaW5kZXh9IH0pIH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAodGFiRWRpdCAmJiBlZGl0YWJsZVRhYklkeCA9PSBpbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17ZWRpdE5vZGV9IGNsYXNzTmFtZT17c3R5bGVzLnRhYklucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXt0YWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IHRhYi5pZCwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17dG9nZ2xlVGFiRWRpdH0gb25DbGljaz17KGUpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RhYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFiQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVUYWJXcmFwcGVyfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RlbGV0ZVRhYicsIHBheWxvYWQ6IHtpZDogdGFiLmlkLCBpZHg6IGluZGV4fSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9jaXJjbGVkLXguc3ZnJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUYWJFZGl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRhYmxlVGFiSWR4KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlZGl0Tm9kZS5jdXJyZW50LmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdUYWJXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9uZXctdGFiLnN2ZycgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSBvbkNsaWNrPXsgKCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdhZGROZXdUYWInfSkgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz59XG5cbiAgICAgICAgPC9uYXY+ICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dUYWJNZW51ID8gc3R5bGVzLnNob3dUYWJNZW51IDogc3R5bGVzLmhpZGVUYWJNZW51fT5cbiAgICAgICAgICAgIDxUYWJzTWVudSBkYXJrTW9kZT17ZGFya01vZGV9IHRhYnNTdGF0ZT17dGFic1N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYk5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});