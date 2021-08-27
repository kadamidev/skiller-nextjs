/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./pages/tasker_app.jsx":
/*!******************************!*\
  !*** ./pages/tasker_app.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_7__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_8__.cardsReducer, {}),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1]; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 1: allCardsData })\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    //setting states from localStore\n    var tabsData = JSON.parse(localStorage.getItem('tabs'));\n    var tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'));\n    var cardsData = JSON.parse(localStorage.getItem('cards'));\n    if (Object.keys(cardsData).length == 0) // load card preset if empty\n      cardsData = ((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)(\"cardsData\"), allCardsData);\n\n    if (tabsData && cardsData) {\n      dispatch({\n        type: 'setTabs',\n        payload: {\n          tabs: tabsData,\n          currentTabIdx: tabIdxData\n        }\n      });\n      cardsDispatch({\n        type: 'setCards',\n        payload: {\n          cards: cardsData\n        }\n      }); //fix card persistence \n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    //localstoring tabs data\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    //localstoring card data\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2),\n      layoutSetting = _useState2[0],\n      setLayoutSetting = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      darkMode = _useState3[0],\n      setDarkMode = _useState3[1];\n\n  var toggleDarkMode = function toggleDarkMode() {\n    setDarkMode(!darkMode);\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: layoutSetting,\n          setLayoutSetting: setLayoutSetting\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cards),\n          style: {\n            columnCount: layoutSetting\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: layoutSetting,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"ZgMAtQBgPMyLwmlYiEqghRjZ40A=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery];\n});\n\n_c = Tasker_app;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0YWJzRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0YWJJZHhEYXRhIiwiY2FyZHNEYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInR5cGUiLCJwYXlsb2FkIiwiY2FyZHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY3VycmVudFRhYklkIiwiaWQiLCJ1c2VTdGF0ZSIsInNob3dTZXR0aW5ncyIsInNldFNob3dTZXR0aW5ncyIsInRvZ2dsZVNob3dTZXR0aW5ncyIsImxheW91dFNldHRpbmciLCJzZXRMYXlvdXRTZXR0aW5nIiwiZGFya01vZGUiLCJzZXREYXJrTW9kZSIsInRvZ2dsZURhcmtNb2RlIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsInN0eWxlcyIsImpvaW4iLCJia2dDb250YWluZXIiLCJ0YWJpZCIsImNvbHVtbkNvdW50IiwibWFwIiwiY2FyZCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQWtCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUFBLG9CQUNwQkMsaURBQVUsQ0FBQ0MsOERBQUQsRUFBYztB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QUFBLGtCQURKO0FBc0NILENBcEZEOztHQUFNN0IsVTtVQTJDZ0J3Qyw4RDs7O0tBM0NoQnhDLFU7O0FBc0ZOLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGFza2VyX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC90YXNrZXJfYXBwLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgVGFiTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9UYWJOYXYuanN4J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4J1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9TZXR0aW5ncy5qc3gnXG5pbXBvcnQgeyBnZXRUYWJzRGF0YSB9IGZyb20gJy4uL2xpYi90YWJzJztcbmltcG9ydCB7IGdldENhcmRzRGF0YSB9IGZyb20gJy4uL2xpYi9jYXJkcyc7XG5pbXBvcnQgeyB0YWJzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL3RhYnNSZWR1Y2VyJztcbmltcG9ydCB7IGNhcmRzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcmRzUmVkdWNlcic7XG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvU2lkZU5hdic7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbGliL3VzZU1lZGlhUXVlcnknXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgYWxsVGFic0RhdGEgPSBnZXRUYWJzRGF0YSgpXG4gICAgY29uc3QgYWxsQ2FyZHNEYXRhID0gZ2V0Q2FyZHNEYXRhKClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhbGxUYWJzRGF0YSxcbiAgICAgICAgYWxsQ2FyZHNEYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG5jb25zdCBUYXNrZXJfYXBwID0gKHsgYWxsVGFic0RhdGEsIGFsbENhcmRzRGF0YSB9KSA9PiB7XG4gICAgY29uc3QgW3RhYnNTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0YWJzUmVkdWNlciwgeyB0YWJzOiBhbGxUYWJzRGF0YSwgY3VycmVudFRhYklkeDogMCAgfSlcbiAgICBjb25zdCBbY2FyZHNTdGF0ZSwgY2FyZHNEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhcmRzUmVkdWNlciwge30pXG4gICAgLy8gY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsgMTogYWxsQ2FyZHNEYXRhIH0pXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vc2V0dGluZyBzdGF0ZXMgZnJvbSBsb2NhbFN0b3JlXG4gICAgICAgIGNvbnN0IHRhYnNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFicycpKVxuICAgICAgICBjb25zdCB0YWJJZHhEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFic0lkeCcpKVxuICAgICAgICBjb25zdCBjYXJkc0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkcycpKVxuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNhcmRzRGF0YSkubGVuZ3RoID09IDApIC8vIGxvYWQgY2FyZCBwcmVzZXQgaWYgZW1wdHlcbiAgICAgICAgICAgIGNhcmRzRGF0YSA9IGFsbENhcmRzRGF0YVxuXG4gICAgICAgIGlmICh0YWJzRGF0YSAmJiBjYXJkc0RhdGEpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnc2V0VGFicycsIHBheWxvYWQ6IHt0YWJzOiB0YWJzRGF0YSwgY3VycmVudFRhYklkeDogdGFiSWR4RGF0YX19KVxuICAgICAgICAgICAgY2FyZHNEaXNwYXRjaCh7dHlwZTogJ3NldENhcmRzJywgcGF5bG9hZDoge2NhcmRzOiBjYXJkc0RhdGF9fSkgLy9maXggY2FyZCBwZXJzaXN0ZW5jZSBcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vbG9jYWxzdG9yaW5nIHRhYnMgZGF0YVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFicycsIEpTT04uc3RyaW5naWZ5KHRhYnNTdGF0ZS50YWJzKSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhYnNJZHgnLCB0YWJzU3RhdGUuY3VycmVudFRhYklkeClcblxuICAgIH0sIFt0YWJzU3RhdGVdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9sb2NhbHN0b3JpbmcgY2FyZCBkYXRhXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkcycsIEpTT04uc3RyaW5naWZ5KGNhcmRzU3RhdGUpKVxuICAgIH0sIFtjYXJkc1N0YXRlXSlcbiAgICBcblxuICAgIGNvbnN0IGN1cnJlbnRUYWJJZCA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZFxuXG5cblxuICAgIC8vdWkgc3RhdGVcbiAgICBjb25zdCBbc2hvd1NldHRpbmdzLCBzZXRTaG93U2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NldHRpbmdzID0gKCkgPT4geyBzZXRTaG93U2V0dGluZ3MoIXNob3dTZXR0aW5ncykgfVxuICAgIGNvbnN0IFtsYXlvdXRTZXR0aW5nLCBzZXRMYXlvdXRTZXR0aW5nXSA9IHVzZVN0YXRlKDIpXG5cbiAgICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4geyBzZXREYXJrTW9kZSghZGFya01vZGUpIH1cblxuICAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDc2OXB4JylcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RhcmtNb2RlID8gW3N0eWxlcy5ia2dDb250YWluZXIsIHN0eWxlcy5kYXJrTW9kZV0uam9pbihcIiBcIikgOiBzdHlsZXMuYmtnQ29udGFpbmVyfT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMudGFic30+XG4gICAgICAgICAgICAgICAgPFRhYk5hdiBkYXJrTW9kZT17ZGFya01vZGV9IHRhYnNTdGF0ZT17dGFic1N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdldyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxTaWRlTmF2IGRhcmtNb2RlPXtkYXJrTW9kZX0gLz5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NXcmFwfSBvbkNsaWNrPXt0b2dnbGVTaG93U2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9zZXR0aW5ncy5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9IGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1NldHRpbmdzID8gc3R5bGVzLnNldHRpbmdzUGFuZWxXcmFwcGVyIDogc3R5bGVzLmhpZGVTZXR0aW5nc1BhbmVsfT5cbiAgICAgICAgICAgICAgICB7IDxTZXR0aW5ncyB0b2dnbGVEYXJrTW9kZT17dG9nZ2xlRGFya01vZGV9IGRhcmtNb2RlPXtkYXJrTW9kZX0gbGF5b3V0U2V0dGluZz17bGF5b3V0U2V0dGluZ30gc2V0TGF5b3V0U2V0dGluZz17c2V0TGF5b3V0U2V0dGluZ30gLz4gfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3Q2FyZFdyYXB9IG9uQ2xpY2s9eygpID0+IGNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnYWRkTmV3Q2FyZCcsIHBheWxvYWQ6IHsgdGFiaWQ6IGN1cnJlbnRUYWJJZCB9IH0pfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvbmV3LWNhcmQuc3ZnXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30gc3R5bGU9e3tjb2x1bW5Db3VudDogbGF5b3V0U2V0dGluZ319PiBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRdICYmIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXS5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXJkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT4gPENhcmQgZGFya01vZGU9e2RhcmtNb2RlfSBjYXJkPXtjYXJkfSBsYXlvdXRTZXR0aW5nPXtsYXlvdXRTZXR0aW5nfSBjYXJkaWR4PXtpbmRleH0gY2FyZHNTdGF0ZT17Y2FyZHNTdGF0ZX0gY2FyZHNEaXNwYXRjaD17Y2FyZHNEaXNwYXRjaH0gdGFiaWQ9e2N1cnJlbnRUYWJJZH0vPiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tlcl9hcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});