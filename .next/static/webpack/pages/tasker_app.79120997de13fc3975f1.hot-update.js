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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/settingsReducer */ \"./reducers/settingsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__.cardsReducer, {\n    1: allCardsData\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var _useReducer3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__.settingsReducer, {}),\n      settings = _useReducer3[0],\n      settingsDispatch = _useReducer3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //setting states from localStore\n    var tabsData = JSON.parse(localStorage.getItem('tabs'));\n    var tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'));\n    var cardsData = JSON.parse(localStorage.getItem('cards'));\n    var settingsData = JSON.parse(localStorage.getItem('settings'));\n    console.log(settingsData);\n\n    if (tabsData) {\n      dispatch({\n        type: 'setTabs',\n        payload: {\n          tabs: tabsData,\n          currentTabIdx: tabIdxData\n        }\n      });\n      cardsDispatch({\n        type: 'setCards',\n        payload: {\n          cards: cardsData\n        }\n      }); //fix card persistence \n\n      settingsDispatch({\n        type: 'setSettings',\n        payload: {\n          settings: settingsData\n        }\n      });\n    }\n  }, []);\n  var firstRunTabs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring tabs data\n    if (firstRunTabs.current) {\n      firstRunTabs.current = false;\n      return;\n    }\n\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  var firstRunCards = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring card data\n    if (firstRunCards.current) {\n      firstRunCards.current = false;\n      return;\n    }\n\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]);\n  var firstRunSettings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (firstRunSettings.current) {\n      firstRunSettings.current = false;\n      return;\n    }\n\n    console.log('stored settings');\n    localStorage.setItem('settings', JSON.stringify(settings));\n  }, [settings]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var darkMode = settings.darkMode;\n\n  var toggleDarkMode = function toggleDarkMode() {\n    settingsDispatch({\n      type: 'toggleDarkMode'\n    });\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        ref: firstRunTabs,\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: firstRunSettings,\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: settings.layout,\n          setLayoutSetting: function setLayoutSetting(layout) {\n            settingsDispatch({\n              type: 'setLayout',\n              payload: {\n                layout: layout\n              }\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: firstRunCards,\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cards),\n          style: {\n            columnCount: settings.layout\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: settings.layout,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 127,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"mgbqvikjveCqPCH7yeF4vjIcJBk=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery];\n});\n\n_c = Tasker_app;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJzZXR0aW5nc1JlZHVjZXIiLCJzZXR0aW5ncyIsInNldHRpbmdzRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0YWJzRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0YWJJZHhEYXRhIiwiY2FyZHNEYXRhIiwic2V0dGluZ3NEYXRhIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiY2FyZHMiLCJmaXJzdFJ1blRhYnMiLCJ1c2VSZWYiLCJjdXJyZW50Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZpcnN0UnVuQ2FyZHMiLCJmaXJzdFJ1blNldHRpbmdzIiwiY3VycmVudFRhYklkIiwiaWQiLCJ1c2VTdGF0ZSIsInNob3dTZXR0aW5ncyIsInNldFNob3dTZXR0aW5ncyIsInRvZ2dsZVNob3dTZXR0aW5ncyIsImRhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJpc0Rlc2t0b3AiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3R5bGVzIiwiam9pbiIsImJrZ0NvbnRhaW5lciIsImxheW91dCIsInRhYmlkIiwiY29sdW1uQ291bnQiLCJtYXAiLCJjYXJkIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWtCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxX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QUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhBO0FBQUEsa0JBREo7QUFzQ0gsQ0F6R0Q7O0dBQU1yQyxVO1VBZ0VnQjZDLDhEOzs7S0FoRWhCN0MsVTs7QUEyR04sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy90YXNrZXJfYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAvdGFza2VyX2FwcC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFRhYk5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9DYXJkLmpzeCdcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvU2V0dGluZ3MuanN4J1xuaW1wb3J0IHsgZ2V0VGFic0RhdGEgfSBmcm9tICcuLi9saWIvdGFicyc7XG5pbXBvcnQgeyBnZXRDYXJkc0RhdGEgfSBmcm9tICcuLi9saWIvY2FyZHMnO1xuaW1wb3J0IHsgdGFic1JlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy90YWJzUmVkdWNlcic7XG5pbXBvcnQgeyBjYXJkc1JlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJkc1JlZHVjZXInO1xuaW1wb3J0IHsgc2V0dGluZ3NSZWR1Y2VyIH0gZnJvbSAnLi4vcmVkdWNlcnMvc2V0dGluZ3NSZWR1Y2VyJztcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9TaWRlTmF2JztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICcuLi9saWIvdXNlTWVkaWFRdWVyeSdcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBhbGxUYWJzRGF0YSA9IGdldFRhYnNEYXRhKClcbiAgICBjb25zdCBhbGxDYXJkc0RhdGEgPSBnZXRDYXJkc0RhdGEoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFsbFRhYnNEYXRhLFxuICAgICAgICBhbGxDYXJkc0RhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbmNvbnN0IFRhc2tlcl9hcHAgPSAoeyBhbGxUYWJzRGF0YSwgYWxsQ2FyZHNEYXRhIH0pID0+IHtcbiAgICBjb25zdCBbdGFic1N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRhYnNSZWR1Y2VyLCB7IHRhYnM6IGFsbFRhYnNEYXRhLCBjdXJyZW50VGFiSWR4OiAwICB9KVxuICAgIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7MTogYWxsQ2FyZHNEYXRhfSlcbiAgICBjb25zdCBbc2V0dGluZ3MsIHNldHRpbmdzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzZXR0aW5nc1JlZHVjZXIsIHt9KVxuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vc2V0dGluZyBzdGF0ZXMgZnJvbSBsb2NhbFN0b3JlXG4gICAgICAgIGNvbnN0IHRhYnNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFicycpKVxuICAgICAgICBjb25zdCB0YWJJZHhEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFic0lkeCcpKVxuICAgICAgICBjb25zdCBjYXJkc0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkcycpKVxuICAgICAgICBjb25zdCBzZXR0aW5nc0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXR0aW5ncycpKVxuICAgICAgICBjb25zb2xlLmxvZyhzZXR0aW5nc0RhdGEpXG4gICAgICAgIGlmICh0YWJzRGF0YSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdzZXRUYWJzJywgcGF5bG9hZDoge3RhYnM6IHRhYnNEYXRhLCBjdXJyZW50VGFiSWR4OiB0YWJJZHhEYXRhfX0pXG4gICAgICAgICAgICBjYXJkc0Rpc3BhdGNoKHt0eXBlOiAnc2V0Q2FyZHMnLCBwYXlsb2FkOiB7Y2FyZHM6IGNhcmRzRGF0YX19KSAvL2ZpeCBjYXJkIHBlcnNpc3RlbmNlIFxuICAgICAgICAgICAgc2V0dGluZ3NEaXNwYXRjaCh7dHlwZTogJ3NldFNldHRpbmdzJywgcGF5bG9hZDoge3NldHRpbmdzOiBzZXR0aW5nc0RhdGF9fSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIFxuXG4gICAgY29uc3QgZmlyc3RSdW5UYWJzID0gdXNlUmVmKHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9sb2NhbHN0b3JpbmcgdGFicyBkYXRhXG4gICAgICAgIGlmIChmaXJzdFJ1blRhYnMuY3VycmVudCkge1xuICAgICAgICAgICAgZmlyc3RSdW5UYWJzLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhYnMnLCBKU09OLnN0cmluZ2lmeSh0YWJzU3RhdGUudGFicykpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJzSWR4JywgdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgpXG5cbiAgICB9LCBbdGFic1N0YXRlXSlcblxuICAgIGNvbnN0IGZpcnN0UnVuQ2FyZHMgPSB1c2VSZWYodHJ1ZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL2xvY2Fsc3RvcmluZyBjYXJkIGRhdGFcbiAgICAgICAgaWYgKGZpcnN0UnVuQ2FyZHMuY3VycmVudCkge1xuICAgICAgICAgICAgZmlyc3RSdW5DYXJkcy5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkcycsIEpTT04uc3RyaW5naWZ5KGNhcmRzU3RhdGUpKVxuICAgIH0sIFtjYXJkc1N0YXRlXSlcbiAgICBcbiAgICBjb25zdCBmaXJzdFJ1blNldHRpbmdzID0gdXNlUmVmKHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGZpcnN0UnVuU2V0dGluZ3MuY3VycmVudCkge1xuICAgICAgICAgICAgZmlyc3RSdW5TZXR0aW5ncy5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZWQgc2V0dGluZ3MnKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpXG4gICAgfSwgW3NldHRpbmdzXSlcblxuXG5cbiAgICBjb25zdCBjdXJyZW50VGFiSWQgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWRcblxuICAgIC8vdWkgc3RhdGVcbiAgICBjb25zdCBbc2hvd1NldHRpbmdzLCBzZXRTaG93U2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NldHRpbmdzID0gKCkgPT4geyBzZXRTaG93U2V0dGluZ3MoIXNob3dTZXR0aW5ncykgfVxuXG5cblxuICAgIGNvbnN0IGRhcmtNb2RlID0gc2V0dGluZ3MuZGFya01vZGVcbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHsgc2V0dGluZ3NEaXNwYXRjaCh7dHlwZTogJ3RvZ2dsZURhcmtNb2RlJ30pIH1cblxuICAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDc2OXB4JylcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RhcmtNb2RlID8gW3N0eWxlcy5ia2dDb250YWluZXIsIHN0eWxlcy5kYXJrTW9kZV0uam9pbihcIiBcIikgOiBzdHlsZXMuYmtnQ29udGFpbmVyfT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxuYXYgcmVmPXtmaXJzdFJ1blRhYnN9IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxuICAgICAgICAgICAgICAgIDxUYWJOYXYgZGFya01vZGU9e2RhcmtNb2RlfSB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVOYXZXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8U2lkZU5hdiBkYXJrTW9kZT17ZGFya01vZGV9IC8+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzV3JhcH0gb25DbGljaz17dG9nZ2xlU2hvd1NldHRpbmdzfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvc2V0dGluZ3Muc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiByZWY9e2ZpcnN0UnVuU2V0dGluZ3N9IGNsYXNzTmFtZT17c2hvd1NldHRpbmdzID8gc3R5bGVzLnNldHRpbmdzUGFuZWxXcmFwcGVyIDogc3R5bGVzLmhpZGVTZXR0aW5nc1BhbmVsfT5cbiAgICAgICAgICAgICAgICB7IDxTZXR0aW5ncyB0b2dnbGVEYXJrTW9kZT17dG9nZ2xlRGFya01vZGV9IGRhcmtNb2RlPXtkYXJrTW9kZX0gbGF5b3V0U2V0dGluZz17c2V0dGluZ3MubGF5b3V0fSBzZXRMYXlvdXRTZXR0aW5nPXsobGF5b3V0KSA9PiB7c2V0dGluZ3NEaXNwYXRjaCh7dHlwZTogJ3NldExheW91dCcsIHBheWxvYWQ6IHtsYXlvdXQ6IGxheW91dH19KX0gfSAvPiB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDYXJkV3JhcH0gb25DbGljaz17KCkgPT4gY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdhZGROZXdDYXJkJywgcGF5bG9hZDogeyB0YWJpZDogY3VycmVudFRhYklkIH0gfSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9uZXctY2FyZC5zdmdcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHVsIHJlZj17Zmlyc3RSdW5DYXJkc30gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9IHN0eWxlPXt7Y29sdW1uQ291bnQ6IHNldHRpbmdzLmxheW91dH19PiBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRdICYmIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXS5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXJkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT4gPENhcmQgZGFya01vZGU9e2RhcmtNb2RlfSBjYXJkPXtjYXJkfSBsYXlvdXRTZXR0aW5nPXtzZXR0aW5ncy5sYXlvdXR9IGNhcmRpZHg9e2luZGV4fSBjYXJkc1N0YXRlPXtjYXJkc1N0YXRlfSBjYXJkc0Rpc3BhdGNoPXtjYXJkc0Rpc3BhdGNofSB0YWJpZD17Y3VycmVudFRhYklkfS8+IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza2VyX2FwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});