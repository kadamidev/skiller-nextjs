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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/settingsReducer */ \"./reducers/settingsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__.cardsReducer, {\n    1: allCardsData\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var _useReducer3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__.settingsReducer, {\n    darkMode: false,\n    layout: 2\n  }),\n      settings = _useReducer3[0],\n      settingsDispatch = _useReducer3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //setting states from localStore\n    var tabsData = JSON.parse(localStorage.getItem('tabs'));\n    var tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'));\n    var cardsData = JSON.parse(localStorage.getItem('cards'));\n\n    if (tabsData) {\n      dispatch({\n        type: 'setTabs',\n        payload: {\n          tabs: tabsData,\n          currentTabIdx: tabIdxData\n        }\n      });\n      cardsDispatch({\n        type: 'setCards',\n        payload: {\n          cards: cardsData\n        }\n      }); //fix card persistence \n    }\n  }, []);\n  var firstRunTabs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring tabs data\n    if (firstRunTabs.current) {\n      firstRunTabs.current = false;\n      return;\n    }\n\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  var firstRunCards = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring card data\n    if (firstRunCards.current) {\n      firstRunCards.current = false;\n      return;\n    }\n\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var darkMode = settings.darkMode;\n\n  var toggleDarkMode = function toggleDarkMode() {\n    settingsDispatch({\n      type: 'toggleDarkMode'\n    });\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        ref: firstRunTabs,\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: settings.layout,\n          setLayoutSetting: function setLayoutSetting(layout) {\n            settingsDispatch({\n              type: 'setLayout',\n              payload: {\n                layout: layout\n              }\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: firstRunCards,\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cards),\n          style: {\n            columnCount: settings.layout\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: settings.layout,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"ZcVIAnYTotGaVBPLWKxIDTtZybY=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery];\n});\n\n_c = Tasker_app;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJzZXR0aW5nc1JlZHVjZXIiLCJkYXJrTW9kZSIsImxheW91dCIsInNldHRpbmdzIiwic2V0dGluZ3NEaXNwYXRjaCIsInVzZUVmZmVjdCIsInRhYnNEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRhYklkeERhdGEiLCJjYXJkc0RhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImNhcmRzIiwiZmlyc3RSdW5UYWJzIiwidXNlUmVmIiwiY3VycmVudCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaXJzdFJ1bkNhcmRzIiwiY3VycmVudFRhYklkIiwiaWQiLCJ1c2VTdGF0ZSIsInNob3dTZXR0aW5ncyIsInNldFNob3dTZXR0aW5ncyIsInRvZ2dsZVNob3dTZXR0aW5ncyIsInRvZ2dsZURhcmtNb2RlIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsInN0eWxlcyIsImpvaW4iLCJia2dDb250YWluZXIiLCJ0YWJpZCIsImNvbHVtbkNvdW50IiwibWFwIiwiY2FyZCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFrQkEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsV0FBZ0MsUUFBaENBLFdBQWdDO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7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O0FBQ3RFLGdDQUNBO0FBQWtCLHVCQUFTLEVBQUVQLGlGQUE3QjtBQUFBLDJDQUEyQyw4REFBQyxvRUFBRDtBQUFNLHdCQUFRLEVBQUU5QixRQUFoQjtBQUEwQixvQkFBSSxFQUFFb0MsSUFBaEM7QUFBc0MsNkJBQWEsRUFBRWxDLFFBQVEsQ0FBQ0QsTUFBOUQ7QUFBc0UsdUJBQU8sRUFBRW9DLEtBQS9FO0FBQXNGLDBCQUFVLEVBQUV4QyxVQUFsRztBQUE4Ryw2QkFBYSxFQUFFQyxhQUE3SDtBQUE0SSxxQkFBSyxFQUFFdUI7QUFBbko7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBM0M7QUFBQSxlQUFTZSxJQUFJLENBQUNkLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQTtBQUdILFdBSjJCO0FBRnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhBO0FBQUEsa0JBREo7QUFzQ0gsQ0EvRkQ7O0dBQU1uQyxVO1VBc0RnQjBDLDhEOzs7S0F0RGhCMUMsVTs7QUFpR04sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy90YXNrZXJfYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAvdGFza2VyX2FwcC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFRhYk5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9DYXJkLmpzeCdcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvU2V0dGluZ3MuanN4J1xuaW1wb3J0IHsgZ2V0VGFic0RhdGEgfSBmcm9tICcuLi9saWIvdGFicyc7XG5pbXBvcnQgeyBnZXRDYXJkc0RhdGEgfSBmcm9tICcuLi9saWIvY2FyZHMnO1xuaW1wb3J0IHsgdGFic1JlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy90YWJzUmVkdWNlcic7XG5pbXBvcnQgeyBjYXJkc1JlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJkc1JlZHVjZXInO1xuaW1wb3J0IHsgc2V0dGluZ3NSZWR1Y2VyIH0gZnJvbSAnLi4vcmVkdWNlcnMvc2V0dGluZ3NSZWR1Y2VyJztcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9TaWRlTmF2JztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICcuLi9saWIvdXNlTWVkaWFRdWVyeSdcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBhbGxUYWJzRGF0YSA9IGdldFRhYnNEYXRhKClcbiAgICBjb25zdCBhbGxDYXJkc0RhdGEgPSBnZXRDYXJkc0RhdGEoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFsbFRhYnNEYXRhLFxuICAgICAgICBhbGxDYXJkc0RhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbmNvbnN0IFRhc2tlcl9hcHAgPSAoeyBhbGxUYWJzRGF0YSwgYWxsQ2FyZHNEYXRhIH0pID0+IHtcbiAgICBjb25zdCBbdGFic1N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRhYnNSZWR1Y2VyLCB7IHRhYnM6IGFsbFRhYnNEYXRhLCBjdXJyZW50VGFiSWR4OiAwICB9KVxuICAgIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7MTogYWxsQ2FyZHNEYXRhfSlcbiAgICBjb25zdCBbc2V0dGluZ3MsIHNldHRpbmdzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzZXR0aW5nc1JlZHVjZXIsIHtkYXJrTW9kZTogZmFsc2UsIGxheW91dDogMn0pXG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9zZXR0aW5nIHN0YXRlcyBmcm9tIGxvY2FsU3RvcmVcbiAgICAgICAgY29uc3QgdGFic0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJzJykpXG4gICAgICAgIGNvbnN0IHRhYklkeERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJzSWR4JykpXG4gICAgICAgIGNvbnN0IGNhcmRzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRzJykpXG5cbiAgICAgICAgaWYgKHRhYnNEYXRhKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ3NldFRhYnMnLCBwYXlsb2FkOiB7dGFiczogdGFic0RhdGEsIGN1cnJlbnRUYWJJZHg6IHRhYklkeERhdGF9fSlcbiAgICAgICAgICAgIGNhcmRzRGlzcGF0Y2goe3R5cGU6ICdzZXRDYXJkcycsIHBheWxvYWQ6IHtjYXJkczogY2FyZHNEYXRhfX0pIC8vZml4IGNhcmQgcGVyc2lzdGVuY2UgXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICBcblxuICAgIGNvbnN0IGZpcnN0UnVuVGFicyA9IHVzZVJlZih0cnVlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vbG9jYWxzdG9yaW5nIHRhYnMgZGF0YVxuICAgICAgICBpZiAoZmlyc3RSdW5UYWJzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGZpcnN0UnVuVGFicy5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJzJywgSlNPTi5zdHJpbmdpZnkodGFic1N0YXRlLnRhYnMpKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFic0lkeCcsIHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4KVxuXG4gICAgfSwgW3RhYnNTdGF0ZV0pXG5cbiAgICBjb25zdCBmaXJzdFJ1bkNhcmRzID0gdXNlUmVmKHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9sb2NhbHN0b3JpbmcgY2FyZCBkYXRhXG4gICAgICAgIGlmIChmaXJzdFJ1bkNhcmRzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGZpcnN0UnVuQ2FyZHMuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZHMnLCBKU09OLnN0cmluZ2lmeShjYXJkc1N0YXRlKSlcbiAgICB9LCBbY2FyZHNTdGF0ZV0pXG4gICAgXG5cbiAgICBjb25zdCBjdXJyZW50VGFiSWQgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWRcblxuXG5cblxuICAgIC8vdWkgc3RhdGVcbiAgICBjb25zdCBbc2hvd1NldHRpbmdzLCBzZXRTaG93U2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NldHRpbmdzID0gKCkgPT4geyBzZXRTaG93U2V0dGluZ3MoIXNob3dTZXR0aW5ncykgfVxuXG5cblxuICAgIGNvbnN0IGRhcmtNb2RlID0gc2V0dGluZ3MuZGFya01vZGVcbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHsgc2V0dGluZ3NEaXNwYXRjaCh7dHlwZTogJ3RvZ2dsZURhcmtNb2RlJ30pIH1cblxuICAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDc2OXB4JylcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RhcmtNb2RlID8gW3N0eWxlcy5ia2dDb250YWluZXIsIHN0eWxlcy5kYXJrTW9kZV0uam9pbihcIiBcIikgOiBzdHlsZXMuYmtnQ29udGFpbmVyfT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxuYXYgcmVmPXtmaXJzdFJ1blRhYnN9IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxuICAgICAgICAgICAgICAgIDxUYWJOYXYgZGFya01vZGU9e2RhcmtNb2RlfSB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVOYXZXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8U2lkZU5hdiBkYXJrTW9kZT17ZGFya01vZGV9IC8+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzV3JhcH0gb25DbGljaz17dG9nZ2xlU2hvd1NldHRpbmdzfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvc2V0dGluZ3Muc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dTZXR0aW5ncyA/IHN0eWxlcy5zZXR0aW5nc1BhbmVsV3JhcHBlciA6IHN0eWxlcy5oaWRlU2V0dGluZ3NQYW5lbH0+XG4gICAgICAgICAgICAgICAgeyA8U2V0dGluZ3MgdG9nZ2xlRGFya01vZGU9e3RvZ2dsZURhcmtNb2RlfSBkYXJrTW9kZT17ZGFya01vZGV9IGxheW91dFNldHRpbmc9e3NldHRpbmdzLmxheW91dH0gc2V0TGF5b3V0U2V0dGluZz17KGxheW91dCkgPT4ge3NldHRpbmdzRGlzcGF0Y2goe3R5cGU6ICdzZXRMYXlvdXQnLCBwYXlsb2FkOiB7bGF5b3V0OiBsYXlvdXR9fSl9IH0gLz4gfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3Q2FyZFdyYXB9IG9uQ2xpY2s9eygpID0+IGNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnYWRkTmV3Q2FyZCcsIHBheWxvYWQ6IHsgdGFiaWQ6IGN1cnJlbnRUYWJJZCB9IH0pfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvbmV3LWNhcmQuc3ZnXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bCByZWY9e2ZpcnN0UnVuQ2FyZHN9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfSBzdHlsZT17e2NvbHVtbkNvdW50OiBzZXR0aW5ncy5sYXlvdXR9fT4gXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXSAmJiBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZF0ubWFwKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2FyZC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+IDxDYXJkIGRhcmtNb2RlPXtkYXJrTW9kZX0gY2FyZD17Y2FyZH0gbGF5b3V0U2V0dGluZz17c2V0dGluZ3MubGF5b3V0fSBjYXJkaWR4PXtpbmRleH0gY2FyZHNTdGF0ZT17Y2FyZHNTdGF0ZX0gY2FyZHNEaXNwYXRjaD17Y2FyZHNEaXNwYXRjaH0gdGFiaWQ9e2N1cnJlbnRUYWJJZH0vPiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tlcl9hcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});