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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar TabNav = function TabNav(_ref) {\n  _s();\n\n  var darkMode = _ref.darkMode,\n      tabsState = _ref.tabsState,\n      dispatch = _ref.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editableTabIdx = _useState2[0],\n      setEditableTabIdx = _useState2[1];\n\n  var editNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTabMenu = _useState3[0],\n      setShowTabMenu = _useState3[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(min-width: 769px)');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [!isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homeWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/home.svg\",\n                width: 30,\n                height: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 39\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tab),\n          children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: currentTab.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/edit.svg\",\n                height: 16,\n                width: 16,\n                onClick: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 50\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n            type: \"text\",\n            value: currentTab.name,\n            onChange: function onChange(event) {\n              return dispatch({\n                type: 'changeTabName',\n                payload: {\n                  tabId: currentTab.id,\n                  name: event.target.value\n                }\n              });\n            },\n            onBlur: toggleTabEdit\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/tabs.svg\",\n            width: 30,\n            height: 30,\n            onClick: toggleTabMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsList),\n          children: tabsState.tabs.map(function (tab, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: tabsState.currentTabIdx == index ? [(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab), (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopCurrent)].join(\" \") : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab),\n              onClick: function onClick() {\n                return dispatch({\n                  type: 'changeCurrentTab',\n                  payload: {\n                    id: tab.id,\n                    idx: index\n                  }\n                });\n              },\n              children: [tabEdit && editableTabIdx == index ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: editNode,\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n                type: \"text\",\n                value: tab.name,\n                onChange: function onChange(event) {\n                  return dispatch({\n                    type: 'changeTabName',\n                    payload: {\n                      tabId: tab.id,\n                      name: event.target.value\n                    }\n                  });\n                },\n                onBlur: toggleTabEdit,\n                onClick: function onClick(e) {\n                  e.stopPropagation();\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 25\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: tab.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabButtons),\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().deleteTabWrapper),\n                  onClick: function onClick(e) {\n                    e.stopPropagation();\n                    dispatch({\n                      type: 'deleteTab',\n                      payload: {\n                        id: tab.id,\n                        idx: index\n                      }\n                    });\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/app/circled-x.svg\",\n                    height: 20,\n                    width: 20\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 63,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 29\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/img/app/edit.svg\",\n                    height: 20,\n                    width: 20,\n                    onClick: function onClick(e) {\n                      e.stopPropagation();\n                      toggleTabEdit();\n                      setEditableTabIdx(index);\n                      console.log(editNode.target);\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 29\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 25\n              }, _this)]\n            }, tab.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newTabWrapper),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/new-tab.svg\",\n            height: 30,\n            width: 30,\n            onClick: function onClick() {\n              return dispatch({\n                type: 'addNewTab'\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {\n        darkMode: darkMode,\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"25PLurALIbaeSbwn7rkWHTNqvOs=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];\n});\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3g/NDBlZCJdLCJuYW1lcyI6WyJUYWJOYXYiLCJkYXJrTW9kZSIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJ0YWJFZGl0Iiwic2V0VGFiRWRpdCIsImVkaXRhYmxlVGFiSWR4Iiwic2V0RWRpdGFibGVUYWJJZHgiLCJlZGl0Tm9kZSIsInVzZVJlZiIsInRvZ2dsZVRhYkVkaXQiLCJzaG93VGFiTWVudSIsInNldFNob3dUYWJNZW51IiwidG9nZ2xlVGFiTWVudSIsImN1cnJlbnRUYWIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJzdHlsZXMiLCJuYW1lIiwiZXZlbnQiLCJ0eXBlIiwicGF5bG9hZCIsInRhYklkIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInRhYiIsImluZGV4Iiwiam9pbiIsImlkeCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBcUM7QUFBQTs7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxrQkFFbEJDLCtDQUFRLENBQUMsS0FBRCxDQUZVO0FBQUEsTUFFekNDLE9BRnlDO0FBQUEsTUFFaENDLFVBRmdDOztBQUFBLG1CQUdKRiwrQ0FBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BR3pDRyxjQUh5QztBQUFBLE1BR3pCQyxpQkFIeUI7O0FBSWhELE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXZCOztBQUVBLE1BQU1DLGFBQWEsR0FB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Q29CLG9CQUFJLEVBQUU7QUFBUCxlQUFELENBQWQ7QUFBQTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QmU7QUFBQSxzQkF0Qm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBMkRBO0FBQUssZUFBUyxFQUFFWCxXQUFXLEdBQUdRLG1GQUFILEdBQXdCQSxtRkFBbkQ7QUFBQSw2QkFDSSw4REFBQyw4Q0FBRDtBQUFVLGdCQUFRLEVBQUVuQixRQUFwQjtBQUE4QixpQkFBUyxFQUFFQyxTQUF6QztBQUFvRCxnQkFBUSxFQUFFQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNEQTtBQUFBLGtCQURKO0FBaUVILENBakZEOztHQUFNSCxNO1VBYWdCbUIsNkQ7OztLQWJoQm5CLE07QUFtRk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYXBwL1RhYk5hdi5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFRhYnNNZW51IGZyb20gJy4vVGFic01lbnUnO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJy4uLy4uL2xpYi91c2VNZWRpYVF1ZXJ5JztcblxuY29uc3QgVGFiTmF2ID0gKHtkYXJrTW9kZSwgdGFic1N0YXRlLCBkaXNwYXRjaH0pID0+IHtcbiAgICBcbiAgICBjb25zdCBbdGFiRWRpdCwgc2V0VGFiRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZWRpdGFibGVUYWJJZHgsIHNldEVkaXRhYmxlVGFiSWR4XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGVkaXROb2RlID0gdXNlUmVmKG51bGwpXG4gICAgXG4gICAgY29uc3QgdG9nZ2xlVGFiRWRpdCA9ICgpID0+IHsgc2V0VGFiRWRpdCghdGFiRWRpdCkgfVxuICAgIFxuICAgIGNvbnN0IFtzaG93VGFiTWVudSwgc2V0U2hvd1RhYk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgdG9nZ2xlVGFiTWVudSA9ICgpID0+IHNldFNob3dUYWJNZW51KCFzaG93VGFiTWVudSlcblxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF1cblxuICAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDc2OXB4KScpXG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtb2JpbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxuICAgICAgICAgICAgeyAhaXNEZXNrdG9wICYmIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVXcmFwfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbWVudSc+PGE+PEltYWdlIHNyYz1cIi9pbWcvYXBwL2hvbWUuc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfS8+PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XG4gICAgICAgICAgICAgICAgeyAhdGFiRWRpdCA/XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50VGFiLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IG9uQ2xpY2s9e3RvZ2dsZVRhYkVkaXR9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy50YWJJbnB1dH0gdHlwZT1cInRleHRcIiB2YWx1ZT17Y3VycmVudFRhYi5uYW1lfSBvbkNoYW5nZT17IChldmVudCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdjaGFuZ2VUYWJOYW1lJywgcGF5bG9hZDogeyB0YWJJZDogY3VycmVudFRhYi5pZCwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17dG9nZ2xlVGFiRWRpdH0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnNXcmFwfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvdGFicy5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9IG9uQ2xpY2s9e3RvZ2dsZVRhYk1lbnV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPiB9XG4gICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEZXNrdG9wIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgICAgIHsgaXNEZXNrdG9wICYmIDw+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGFic0xpc3R9PlxuICAgICAgICAgICAgICAgIHt0YWJzU3RhdGUudGFicy5tYXAoICh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RhYi5pZH0gY2xhc3NOYW1lPXsodGFic1N0YXRlLmN1cnJlbnRUYWJJZHggPT0gaW5kZXgpID8gW3N0eWxlcy5kZXNrdG9wVGFiLCBzdHlsZXMuZGVza3RvcEN1cnJlbnRdLmpvaW4oXCIgXCIpIDogc3R5bGVzLmRlc2t0b3BUYWIgfSBvbkNsaWNrPXsgKCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdjaGFuZ2VDdXJyZW50VGFiJywgcGF5bG9hZDoge2lkOiB0YWIuaWQsIGlkeDogaW5kZXh9IH0pIH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyAodGFiRWRpdCAmJiBlZGl0YWJsZVRhYklkeCA9PSBpbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17ZWRpdE5vZGV9IGNsYXNzTmFtZT17c3R5bGVzLnRhYklucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXt0YWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IHRhYi5pZCwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17dG9nZ2xlVGFiRWRpdH0gb25DbGljaz17KGUpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RhYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFiQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVUYWJXcmFwcGVyfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RlbGV0ZVRhYicsIHBheWxvYWQ6IHtpZDogdGFiLmlkLCBpZHg6IGluZGV4fSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9jaXJjbGVkLXguc3ZnJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUYWJFZGl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRhYmxlVGFiSWR4KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdE5vZGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld1RhYldyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL25ldy10YWIuc3ZnJyBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ2FkZE5ld1RhYid9KSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPn1cblxuICAgICAgICA8L25hdj4gICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1RhYk1lbnUgPyBzdHlsZXMuc2hvd1RhYk1lbnUgOiBzdHlsZXMuaGlkZVRhYk1lbnV9PlxuICAgICAgICAgICAgPFRhYnNNZW51IGRhcmtNb2RlPXtkYXJrTW9kZX0gdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});