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

/***/ "./components/tasker_app/TabNav.jsx":
/*!******************************************!*\
  !*** ./components/tasker_app/TabNav.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // import { useQuery, useMutation, queryCache } from 'react-query'\n\nvar fetchTabsRequest = /*#__PURE__*/function () {\n  var _ref = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var response, data, _tabs;\n\n    return _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch('/api/tasker_app/tab');\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            data = _context.sent;\n            _tabs = data.tabs;\n            return _context.abrupt(\"return\", _tabs);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(\"failed fetching tabs: \".concat(_context.t0));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function fetchTabsRequest() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar TabNav = function TabNav(_ref2) {\n  _s();\n\n  var darkMode = _ref2.darkMode,\n      tabsState = _ref2.tabsState,\n      dispatch = _ref2.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      editableTabIdx = _useState2[0],\n      setEditableTabIdx = _useState2[1];\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      showTabMenu = _useState3[0],\n      setShowTabMenu = _useState3[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)('(min-width: 769px)');\n  var editNode = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      editNodeVisible = _useState4[0],\n      setEditNodeVisible = _useState4[1]; // const {data: tabs, error, status} = useQuery('userId', fetchTabsRequest)\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (!editNodeVisible) return;\n    editNode.current.focus();\n  }, [editNodeVisible]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: [!isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().homeWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/img/app/home.svg\",\n                width: 30,\n                height: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 39\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tab),\n          children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: currentTab.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().edit),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/img/app/edit.svg\",\n                height: 16,\n                width: 16,\n                onClick: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 50\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabInput),\n            type: \"text\",\n            value: currentTab.name,\n            onChange: function onChange(event) {\n              return dispatch({\n                type: 'changeTabName',\n                payload: {\n                  tabId: currentTab.id,\n                  name: event.target.value\n                }\n              });\n            },\n            onBlur: toggleTabEdit\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabsWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/img/app/tabs.svg\",\n            width: 30,\n            height: 30,\n            onClick: toggleTabMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabsList),\n          children: tabs.map(function (tab, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: tabsState.currentTabIdx == index ? [(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().desktopTab), (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().desktopCurrent)].join(\" \") : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().desktopTab),\n              onClick: function onClick() {\n                return dispatch({\n                  type: 'changeCurrentTab',\n                  payload: {\n                    id: tab.id,\n                    idx: index\n                  }\n                });\n              },\n              children: [tabEdit && editableTabIdx == index ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: function ref(el) {\n                  editNode.current = el;\n                  setEditNodeVisible(!!el);\n                },\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabInput),\n                type: \"text\",\n                value: tab.name,\n                onChange: function onChange(event) {\n                  return dispatch({\n                    type: 'changeTabName',\n                    payload: {\n                      tabId: tab.id,\n                      name: event.target.value\n                    }\n                  });\n                },\n                onBlur: toggleTabEdit,\n                onClick: function onClick(e) {\n                  e.stopPropagation();\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 25\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: tab.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabButtons),\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().deleteTabWrapper),\n                  onClick: function onClick(e) {\n                    e.stopPropagation();\n                    dispatch({\n                      type: 'deleteTab',\n                      payload: {\n                        id: tab.id,\n                        idx: index\n                      }\n                    });\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: \"/img/app/circled-x.svg\",\n                    height: 20,\n                    width: 20\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 87,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 29\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().edit),\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: \"/img/app/edit.svg\",\n                    height: 20,\n                    width: 20,\n                    onClick: function onClick(e) {\n                      e.stopPropagation();\n                      toggleTabEdit();\n                      setEditableTabIdx(index);\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 90,\n                    columnNumber: 33\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 29\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 25\n              }, _this)]\n            }, tab.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().newTabWrapper),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/img/app/new-tab.svg\",\n            height: 30,\n            width: 30,\n            onClick: function onClick() {\n              return dispatch({\n                type: 'addNewTab'\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_8___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_6__.default, {\n        darkMode: darkMode,\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"CA/H2kqxQjhzjoAYtVWe01NmNYE=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery];\n});\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNUyxnQkFBZ0I7QUFBQSwrU0FBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVNQyxLQUFLLENBQUMscUJBQUQsQ0FGWDs7QUFBQTtBQUVYQyxZQUFBQSxRQUZXO0FBQUE7QUFBQSxtQkFHRUEsUUFBUSxDQUFDQyxJQUFULEVBSEY7O0FBQUE7QUFHWEMsWUFBQUEsSUFIVztBQUlUQyxZQUFBQSxLQUpTLEdBSUFELElBSkEsQ0FJVEMsSUFKUztBQUFBLDZDQUtWQSxLQUxVOztBQUFBO0FBQUE7QUFBQTtBQU9qQkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSOztBQVBpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQlAsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQVdBLElBQU1RLE1BQU0sR0FBRyxTQUFUQSxNQUFTLFFBQXFDO0FBQUE7O0FBQUEsTUFBbkNDLFFBQW1DLFNBQW5DQSxRQUFtQztBQUFBLE1BQXpCQyxTQUF5QixTQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxRQUFjLFNBQWRBLFFBQWM7O0FBQUEsa0JBRWxCbkIsK0NBQVEsQ0FBQyxLQUFELENBRlU7QUFBQSxNQUV6Q29CLE9BRnlDO0FBQUEsTUFFaENDLFVBRmdDOztBQUFBLG1CQUdKckIsK0NBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUd6Q3NCLGNBSHlDO0FBQUEsTUFHekJDLGlCQUh5Qjs7QUFLaEQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUVILElBQUFBLFVBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFBc0IsR0FBcEQ7O0FBTGdELG1CQU9WcEIsK0NBQVEsQ0FBQyxLQUFELENB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QUFBQSxpQkFBaUIsQ0FBQzZCLEtBQUQsQ0FBakI7QUFDSDtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOSjtBQUFBLGVBQVNkLEdBQUcsQ0FBQ1EsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBd0JILFdBekJBO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZSxlQStCZjtBQUFLLG1CQUFTLEVBQUUzQyxxRkFBaEI7QUFBQSxpQ0FDSSw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyxzQkFBWDtBQUFrQyxrQkFBTSxFQUFFLEVBQTFDO0FBQThDLGlCQUFLLEVBQUUsRUFBckQ7QUFBeUQsbUJBQU8sRUFBRztBQUFBLHFCQUFNZ0IsUUFBUSxDQUFDO0FBQUN3QixnQkFBQUEsSUFBSSxFQUFFO0FBQVAsZUFBRCxDQUFkO0FBQUE7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JlO0FBQUEsc0JBdEJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQTREQTtBQUFLLGVBQVMsRUFBRWxCLFdBQVcsR0FBR3RCLG1GQUFILEdBQXdCQSxtRkFBbkQ7QUFBQSw2QkFDSSw4REFBQyw4Q0FBRDtBQUFVLGdCQUFRLEVBQUVjLFFBQXBCO0FBQThCLGlCQUFTLEVBQUVDLFNBQXpDO0FBQW9ELGdCQUFRLEVBQUVDO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNURBO0FBQUEsa0JBREo7QUFrRUgsQ0E1RkQ7O0dBQU1IO1VBWWdCVDs7O0tBWmhCUztBQThGTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeD80MGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvVGFiTmF2Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVGFic01lbnUgZnJvbSAnLi9UYWJzTWVudSc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vLi4vbGliL3VzZU1lZGlhUXVlcnknO1xuLy8gaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uLCBxdWVyeUNhY2hlIH0gZnJvbSAncmVhY3QtcXVlcnknXG5cbmNvbnN0IGZldGNoVGFic1JlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90YXNrZXJfYXBwL3RhYicpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc3QgeyB0YWJzIH0gPSBkYXRhXG4gICAgICAgIHJldHVybiB0YWJzXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgZmFpbGVkIGZldGNoaW5nIHRhYnM6ICR7ZXJyb3J9YClcbiAgICB9XG59XG5cbmNvbnN0IFRhYk5hdiA9ICh7ZGFya01vZGUsIHRhYnNTdGF0ZSwgZGlzcGF0Y2h9KSA9PiB7XG5cbiAgICBjb25zdCBbdGFiRWRpdCwgc2V0VGFiRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZWRpdGFibGVUYWJJZHgsIHNldEVkaXRhYmxlVGFiSWR4XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgIGNvbnN0IHRvZ2dsZVRhYkVkaXQgPSAoKSA9PiB7IHNldFRhYkVkaXQoIXRhYkVkaXQpIH1cbiAgICBcbiAgICBjb25zdCBbc2hvd1RhYk1lbnUsIHNldFNob3dUYWJNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHRvZ2dsZVRhYk1lbnUgPSAoKSA9PiBzZXRTaG93VGFiTWVudSghc2hvd1RhYk1lbnUpXG4gICAgXG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XVxuICAgIFxuICAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDc2OXB4KScpXG4gICAgXG4gICAgY29uc3QgZWRpdE5vZGUgPSB1c2VSZWYobnVsbClcbiAgICBjb25zdCBbZWRpdE5vZGVWaXNpYmxlLCBzZXRFZGl0Tm9kZVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICAvLyBjb25zdCB7ZGF0YTogdGFicywgZXJyb3IsIHN0YXR1c30gPSB1c2VRdWVyeSgndXNlcklkJywgZmV0Y2hUYWJzUmVxdWVzdClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghZWRpdE5vZGVWaXNpYmxlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIGVkaXROb2RlLmN1cnJlbnQuZm9jdXMoKVxuICAgICAgfSwgW2VkaXROb2RlVmlzaWJsZV0pO1xuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbW9iaWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgICAgIHsgIWlzRGVza3RvcCAmJiA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lV3JhcH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lbnUnPjxhPjxJbWFnZSBzcmM9XCIvaW1nL2FwcC9ob21lLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0vPjwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJ9PlxuICAgICAgICAgICAgICAgIHsgIXRhYkVkaXQgP1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y3VycmVudFRhYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fT48SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSBvbkNsaWNrPXt0b2dnbGVUYWJFZGl0fSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGFiSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2N1cnJlbnRUYWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIuaWQsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e3RvZ2dsZVRhYkVkaXR9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzV3JhcH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3RhYnMuc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBvbkNsaWNrPXt0b2dnbGVUYWJNZW51fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4gfVxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRGVza3RvcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XG4gICAgICAgICAgICB7IGlzRGVza3RvcCAmJiA8PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnRhYnNMaXN0fT5cbiAgICAgICAgICAgICAgICB7Lyoge3RhYnNTdGF0ZS50YWJzLm1hcCggKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgIHt0YWJzLm1hcCggKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dGFiLmlkfSBjbGFzc05hbWU9eyh0YWJzU3RhdGUuY3VycmVudFRhYklkeCA9PSBpbmRleCkgPyBbc3R5bGVzLmRlc2t0b3BUYWIsIHN0eWxlcy5kZXNrdG9wQ3VycmVudF0uam9pbihcIiBcIikgOiBzdHlsZXMuZGVza3RvcFRhYiB9IG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ2NoYW5nZUN1cnJlbnRUYWInLCBwYXlsb2FkOiB7aWQ6IHRhYi5pZCwgaWR4OiBpbmRleH0gfSkgfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICh0YWJFZGl0ICYmIGVkaXRhYmxlVGFiSWR4ID09IGluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtlbCA9PiB7IGVkaXROb2RlLmN1cnJlbnQgPSBlbDsgc2V0RWRpdE5vZGVWaXNpYmxlKCEhZWwpO319IGNsYXNzTmFtZT17c3R5bGVzLnRhYklucHV0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXt0YWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IHRhYi5pZCwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17dG9nZ2xlVGFiRWRpdH0gb25DbGljaz17KGUpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RhYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFiQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVUYWJXcmFwcGVyfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2RlbGV0ZVRhYicsIHBheWxvYWQ6IHtpZDogdGFiLmlkLCBpZHg6IGluZGV4fSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9jaXJjbGVkLXguc3ZnJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUYWJFZGl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRhYmxlVGFiSWR4KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld1RhYldyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL25ldy10YWIuc3ZnJyBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ2FkZE5ld1RhYid9KSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPn1cblxuICAgICAgICA8L25hdj4gICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1RhYk1lbnUgPyBzdHlsZXMuc2hvd1RhYk1lbnUgOiBzdHlsZXMuaGlkZVRhYk1lbnV9PlxuICAgICAgICAgICAgPFRhYnNNZW51IGRhcmtNb2RlPXtkYXJrTW9kZX0gdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJJbWFnZSIsIkxpbmsiLCJUYWJzTWVudSIsInVzZU1lZGlhUXVlcnkiLCJmZXRjaFRhYnNSZXF1ZXN0IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGFicyIsImNvbnNvbGUiLCJsb2ciLCJUYWJOYXYiLCJkYXJrTW9kZSIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwidGFiRWRpdCIsInNldFRhYkVkaXQiLCJlZGl0YWJsZVRhYklkeCIsInNldEVkaXRhYmxlVGFiSWR4IiwidG9nZ2xlVGFiRWRpdCIsInNob3dUYWJNZW51Iiwic2V0U2hvd1RhYk1lbnUiLCJ0b2dnbGVUYWJNZW51IiwiY3VycmVudFRhYiIsImN1cnJlbnRUYWJJZHgiLCJpc0Rlc2t0b3AiLCJlZGl0Tm9kZSIsImVkaXROb2RlVmlzaWJsZSIsInNldEVkaXROb2RlVmlzaWJsZSIsImN1cnJlbnQiLCJmb2N1cyIsImNvbnRhaW5lciIsImhvbWVXcmFwIiwidGFiIiwibmFtZSIsImVkaXQiLCJ0YWJJbnB1dCIsImV2ZW50IiwidHlwZSIsInBheWxvYWQiLCJ0YWJJZCIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJ0YWJzV3JhcCIsInRhYnNMaXN0IiwibWFwIiwiaW5kZXgiLCJkZXNrdG9wVGFiIiwiZGVza3RvcEN1cnJlbnQiLCJqb2luIiwiaWR4IiwiZWwiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidGFiQnV0dG9ucyIsImRlbGV0ZVRhYldyYXBwZXIiLCJuZXdUYWJXcmFwcGVyIiwiaGlkZVRhYk1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});