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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/settingsReducer */ \"./reducers/settingsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__.cardsReducer, {\n    1: allCardsData\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var _useReducer3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__.settingsReducer, {\n    darkMode: false,\n    layout: 2\n  }),\n      settings = _useReducer3[0],\n      settingsDispatch = _useReducer3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //setting states from localStore\n    var tabsData = JSON.parse(localStorage.getItem('tabs'));\n    var tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'));\n    var cardsData = JSON.parse(localStorage.getItem('cards'));\n    var settingsData = JSON.parse(localStorage.getItem('settings'));\n    var localData = getLocalStorage();\n    console.log(\"pre dispatch settings: \".concat(localData.settingsData));\n\n    if (tabsData && settingsData) {\n      dispatch({\n        type: 'setTabs',\n        payload: {\n          tabs: tabsData,\n          currentTabIdx: tabIdxData\n        }\n      });\n      cardsDispatch({\n        type: 'setCards',\n        payload: {\n          cards: cardsData\n        }\n      }); //fix card persistence \n\n      settingsDispatch({\n        type: 'setSettings',\n        payload: {\n          settings: settingsData\n        }\n      });\n    }\n  }, []);\n  var firstRunTabs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring tabs data\n    if (firstRunTabs.current) {\n      firstRunTabs.current = false;\n      return;\n    }\n\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  var firstRunCards = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring card data\n    if (firstRunCards.current) {\n      firstRunCards.current = false;\n      return;\n    }\n\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]);\n  var firstRunSettings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (firstRunSettings.current) {\n      firstRunSettings.current = false;\n      console.log('avoided first settings run');\n      return;\n    }\n\n    console.log('stored settings');\n    localStorage.setItem('settings', JSON.stringify(settings));\n  }, [settings]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var darkMode = settings.darkMode;\n\n  var toggleDarkMode = function toggleDarkMode() {\n    settingsDispatch({\n      type: 'toggleDarkMode'\n    });\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        ref: firstRunTabs,\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: firstRunSettings,\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: settings.layout,\n          setLayoutSetting: function setLayoutSetting(layout) {\n            settingsDispatch({\n              type: 'setLayout',\n              payload: {\n                layout: layout\n              }\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: firstRunCards,\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cards),\n          style: {\n            columnCount: settings.layout\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: settings.layout,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 128,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"TsbTrNWWKDLuUSf4tveR1RMPo/Q=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery];\n});\n\n_c = Tasker_app;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJzZXR0aW5nc1JlZHVjZXIiLCJkYXJrTW9kZSIsImxheW91dCIsInNldHRpbmdzIiwic2V0dGluZ3NEaXNwYXRjaCIsInVzZUVmZmVjdCIsInRhYnNEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRhYklkeERhdGEiLCJjYXJkc0RhdGEiLCJzZXR0aW5nc0RhdGEiLCJsb2NhbERhdGEiLCJnZXRMb2NhbFN0b3JhZ2UiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJjYXJkcyIsImZpcnN0UnVuVGFicyIsInVzZVJlZiIsImN1cnJlbnQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlyc3RSdW5DYXJkcyIsImZpcnN0UnVuU2V0dGluZ3MiLCJjdXJyZW50VGFiSWQiLCJpZCIsInVzZVN0YXRlIiwic2hvd1NldHRpbmdzIiwic2V0U2hvd1NldHRpbmdzIiwidG9nZ2xlU2hvd1NldHRpbmdzIiwidG9nZ2xlRGFya01vZGUiLCJpc0Rlc2t0b3AiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3R5bGVzIiwiam9pbiIsImJrZ0NvbnRhaW5lciIsInRhYmlkIiwiY29sdW1uQ291bnQiLCJtYXAiLCJjYXJkIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEs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QUFBc0YsMEJBQVUsRUFBRTlDLFVBQWxHO0FBQThHLDZCQUFhLEVBQUVDLGFBQTdIO0FBQTRJLHFCQUFLLEVBQUU2QjtBQUFuSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUEzQztBQUFBLGVBQVNlLElBQUksQ0FBQ2QsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBR0gsV0FKMkI7QUFGcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEE7QUFBQSxrQkFESjtBQXNDSCxDQTNHRDs7R0FBTXpDLFU7VUFrRWdCZ0QsOEQ7OztLQWxFaEJoRCxVOztBQTZHTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rhc2tlcl9hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC90YXNrZXJfYXBwLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgVGFiTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9UYWJOYXYuanN4J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4J1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9TZXR0aW5ncy5qc3gnXG5pbXBvcnQgeyBnZXRUYWJzRGF0YSB9IGZyb20gJy4uL2xpYi90YWJzJztcbmltcG9ydCB7IGdldENhcmRzRGF0YSB9IGZyb20gJy4uL2xpYi9jYXJkcyc7XG5pbXBvcnQgeyB0YWJzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL3RhYnNSZWR1Y2VyJztcbmltcG9ydCB7IGNhcmRzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcmRzUmVkdWNlcic7XG5pbXBvcnQgeyBzZXR0aW5nc1JlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy9zZXR0aW5nc1JlZHVjZXInO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1NpZGVOYXYnO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJy4uL2xpYi91c2VNZWRpYVF1ZXJ5J1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IGFsbFRhYnNEYXRhID0gZ2V0VGFic0RhdGEoKVxuICAgIGNvbnN0IGFsbENhcmRzRGF0YSA9IGdldENhcmRzRGF0YSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYWxsVGFic0RhdGEsXG4gICAgICAgIGFsbENhcmRzRGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbmNvbnN0IFRhc2tlcl9hcHAgPSAoeyBhbGxUYWJzRGF0YSwgYWxsQ2FyZHNEYXRhIH0pID0+IHtcbiAgICBjb25zdCBbdGFic1N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRhYnNSZWR1Y2VyLCB7IHRhYnM6IGFsbFRhYnNEYXRhLCBjdXJyZW50VGFiSWR4OiAwICB9KVxuICAgIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7MTogYWxsQ2FyZHNEYXRhfSlcbiAgICBjb25zdCBbc2V0dGluZ3MsIHNldHRpbmdzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzZXR0aW5nc1JlZHVjZXIsIHsgZGFya01vZGU6IGZhbHNlLCBsYXlvdXQ6IDIgfSApXG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9zZXR0aW5nIHN0YXRlcyBmcm9tIGxvY2FsU3RvcmVcbiAgICAgICAgY29uc3QgdGFic0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJzJykpXG4gICAgICAgIGNvbnN0IHRhYklkeERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJzSWR4JykpXG4gICAgICAgIGNvbnN0IGNhcmRzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRzJykpXG4gICAgICAgIGNvbnN0IHNldHRpbmdzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHRpbmdzJykpXG4gICAgICAgIGNvbnN0IGxvY2FsRGF0YSA9IGdldExvY2FsU3RvcmFnZSgpXG4gICAgICAgIGNvbnNvbGUubG9nKGBwcmUgZGlzcGF0Y2ggc2V0dGluZ3M6ICR7bG9jYWxEYXRhLnNldHRpbmdzRGF0YX1gKVxuICAgICAgICBpZiAodGFic0RhdGEgJiYgc2V0dGluZ3NEYXRhKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ3NldFRhYnMnLCBwYXlsb2FkOiB7dGFiczogdGFic0RhdGEsIGN1cnJlbnRUYWJJZHg6IHRhYklkeERhdGF9fSlcbiAgICAgICAgICAgIGNhcmRzRGlzcGF0Y2goe3R5cGU6ICdzZXRDYXJkcycsIHBheWxvYWQ6IHtjYXJkczogY2FyZHNEYXRhfX0pIC8vZml4IGNhcmQgcGVyc2lzdGVuY2UgXG4gICAgICAgICAgICBzZXR0aW5nc0Rpc3BhdGNoKHt0eXBlOiAnc2V0U2V0dGluZ3MnLCBwYXlsb2FkOiB7c2V0dGluZ3M6IHNldHRpbmdzRGF0YX19KVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgXG5cbiAgICBjb25zdCBmaXJzdFJ1blRhYnMgPSB1c2VSZWYodHJ1ZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL2xvY2Fsc3RvcmluZyB0YWJzIGRhdGFcbiAgICAgICAgaWYgKGZpcnN0UnVuVGFicy5jdXJyZW50KSB7XG4gICAgICAgICAgICBmaXJzdFJ1blRhYnMuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFicycsIEpTT04uc3RyaW5naWZ5KHRhYnNTdGF0ZS50YWJzKSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhYnNJZHgnLCB0YWJzU3RhdGUuY3VycmVudFRhYklkeClcblxuICAgIH0sIFt0YWJzU3RhdGVdKVxuXG4gICAgY29uc3QgZmlyc3RSdW5DYXJkcyA9IHVzZVJlZih0cnVlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vbG9jYWxzdG9yaW5nIGNhcmQgZGF0YVxuICAgICAgICBpZiAoZmlyc3RSdW5DYXJkcy5jdXJyZW50KSB7XG4gICAgICAgICAgICBmaXJzdFJ1bkNhcmRzLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcmRzJywgSlNPTi5zdHJpbmdpZnkoY2FyZHNTdGF0ZSkpXG4gICAgfSwgW2NhcmRzU3RhdGVdKVxuICAgIFxuICAgIGNvbnN0IGZpcnN0UnVuU2V0dGluZ3MgPSB1c2VSZWYodHJ1ZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZmlyc3RSdW5TZXR0aW5ncy5jdXJyZW50KSB7XG4gICAgICAgICAgICBmaXJzdFJ1blNldHRpbmdzLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F2b2lkZWQgZmlyc3Qgc2V0dGluZ3MgcnVuJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZWQgc2V0dGluZ3MnKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpXG4gICAgfSwgW3NldHRpbmdzXSlcblxuXG5cbiAgICBjb25zdCBjdXJyZW50VGFiSWQgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWRcblxuICAgIC8vdWkgc3RhdGVcbiAgICBjb25zdCBbc2hvd1NldHRpbmdzLCBzZXRTaG93U2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgdG9nZ2xlU2hvd1NldHRpbmdzID0gKCkgPT4geyBzZXRTaG93U2V0dGluZ3MoIXNob3dTZXR0aW5ncykgfVxuXG5cblxuICAgIGNvbnN0IGRhcmtNb2RlID0gc2V0dGluZ3MuZGFya01vZGVcbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHsgc2V0dGluZ3NEaXNwYXRjaCh7dHlwZTogJ3RvZ2dsZURhcmtNb2RlJ30pIH1cblxuICAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6IDc2OXB4JylcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RhcmtNb2RlID8gW3N0eWxlcy5ia2dDb250YWluZXIsIHN0eWxlcy5kYXJrTW9kZV0uam9pbihcIiBcIikgOiBzdHlsZXMuYmtnQ29udGFpbmVyfT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxuYXYgcmVmPXtmaXJzdFJ1blRhYnN9IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxuICAgICAgICAgICAgICAgIDxUYWJOYXYgZGFya01vZGU9e2RhcmtNb2RlfSB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVOYXZXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8U2lkZU5hdiBkYXJrTW9kZT17ZGFya01vZGV9IC8+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzV3JhcH0gb25DbGljaz17dG9nZ2xlU2hvd1NldHRpbmdzfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvc2V0dGluZ3Muc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiByZWY9e2ZpcnN0UnVuU2V0dGluZ3N9IGNsYXNzTmFtZT17c2hvd1NldHRpbmdzID8gc3R5bGVzLnNldHRpbmdzUGFuZWxXcmFwcGVyIDogc3R5bGVzLmhpZGVTZXR0aW5nc1BhbmVsfT5cbiAgICAgICAgICAgICAgICB7IDxTZXR0aW5ncyB0b2dnbGVEYXJrTW9kZT17dG9nZ2xlRGFya01vZGV9IGRhcmtNb2RlPXtkYXJrTW9kZX0gbGF5b3V0U2V0dGluZz17c2V0dGluZ3MubGF5b3V0fSBzZXRMYXlvdXRTZXR0aW5nPXsobGF5b3V0KSA9PiB7c2V0dGluZ3NEaXNwYXRjaCh7dHlwZTogJ3NldExheW91dCcsIHBheWxvYWQ6IHtsYXlvdXQ6IGxheW91dH19KX0gfSAvPiB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDYXJkV3JhcH0gb25DbGljaz17KCkgPT4gY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdhZGROZXdDYXJkJywgcGF5bG9hZDogeyB0YWJpZDogY3VycmVudFRhYklkIH0gfSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9uZXctY2FyZC5zdmdcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHVsIHJlZj17Zmlyc3RSdW5DYXJkc30gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9IHN0eWxlPXt7Y29sdW1uQ291bnQ6IHNldHRpbmdzLmxheW91dH19PiBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRdICYmIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXS5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXJkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT4gPENhcmQgZGFya01vZGU9e2RhcmtNb2RlfSBjYXJkPXtjYXJkfSBsYXlvdXRTZXR0aW5nPXtzZXR0aW5ncy5sYXlvdXR9IGNhcmRpZHg9e2luZGV4fSBjYXJkc1N0YXRlPXtjYXJkc1N0YXRlfSBjYXJkc0Rpc3BhdGNoPXtjYXJkc0Rpc3BhdGNofSB0YWJpZD17Y3VycmVudFRhYklkfS8+IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza2VyX2FwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});