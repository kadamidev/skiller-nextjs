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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/settingsReducer */ \"./reducers/settingsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__.cardsReducer, {\n    1: allCardsData\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var _useReducer3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__.settingsReducer, {}),\n      settings = _useReducer3[0],\n      settingsDispatch = _useReducer3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //setting states from localStore\n    var tabsData = JSON.parse(localStorage.getItem('tabs'));\n    var tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'));\n    var cardsData = JSON.parse(localStorage.getItem('cards'));\n    var settingsData = JSON.parse(localStorage.getItem('settings')) || {\n      no: 'data'\n    };\n\n    if (tabsData && settingsData) {\n      dispatch({\n        type: 'setTabs',\n        payload: {\n          tabs: tabsData,\n          currentTabIdx: tabIdxData\n        }\n      });\n      cardsDispatch({\n        type: 'setCards',\n        payload: {\n          cards: cardsData\n        }\n      }); //fix card persistence \n\n      settingsDispatch({\n        type: 'setSettings',\n        payload: {\n          settings: settingsData\n        }\n      });\n    }\n  }, []);\n  var firstRunTabs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring tabs data\n    if (firstRunTabs.current) {\n      firstRunTabs.current = false;\n      return;\n    }\n\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  var firstRunCards = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring card data\n    if (firstRunCards.current) {\n      firstRunCards.current = false;\n      return;\n    }\n\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]); // const firstRunSettings = useRef(true)\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // if (firstRunSettings.current) {\n    //     firstRunSettings.current = false\n    //     return\n    // }\n    console.log('stored settings');\n    localStorage.setItem('settings', JSON.stringify(settings));\n  }, [settings]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var darkMode = settings.darkMode;\n\n  var toggleDarkMode = function toggleDarkMode() {\n    settingsDispatch({\n      type: 'toggleDarkMode'\n    });\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        ref: firstRunTabs,\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: settings.layout,\n          setLayoutSetting: function setLayoutSetting(layout) {\n            settingsDispatch({\n              type: 'setLayout',\n              payload: {\n                layout: layout\n              }\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: firstRunCards,\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cards),\n          style: {\n            columnCount: settings.layout\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: settings.layout,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 127,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"GlrvLtdlkBkugF2f0hwmBCzlLME=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery];\n});\n\n_c = Tasker_app;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJzZXR0aW5nc1JlZHVjZXIiLCJzZXR0aW5ncyIsInNldHRpbmdzRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0YWJzRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0YWJJZHhEYXRhIiwiY2FyZHNEYXRhIiwic2V0dGluZ3NEYXRhIiwibm8iLCJ0eXBlIiwicGF5bG9hZCIsImNhcmRzIiwiZmlyc3RSdW5UYWJzIiwidXNlUmVmIiwiY3VycmVudCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaXJzdFJ1bkNhcmRzIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYWJJZCIsImlkIiwidXNlU3RhdGUiLCJzaG93U2V0dGluZ3MiLCJzZXRTaG93U2V0dGluZ3MiLCJ0b2dnbGVTaG93U2V0dGluZ3MiLCJkYXJrTW9kZSIsInRvZ2dsZURhcmtNb2RlIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsInN0eWxlcyIsImpvaW4iLCJia2dDb250YWluZXIiLCJsYXlvdXQiLCJ0YWJpZCIsImNvbHVtbkNvdW50IiwibWFwIiwiY2FyZCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFrQkEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsV0FBZ0MsUUFBaENBLFdB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OztBQTJHTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rhc2tlcl9hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC90YXNrZXJfYXBwLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgVGFiTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9UYWJOYXYuanN4J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4J1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9TZXR0aW5ncy5qc3gnXG5pbXBvcnQgeyBnZXRUYWJzRGF0YSB9IGZyb20gJy4uL2xpYi90YWJzJztcbmltcG9ydCB7IGdldENhcmRzRGF0YSB9IGZyb20gJy4uL2xpYi9jYXJkcyc7XG5pbXBvcnQgeyB0YWJzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL3RhYnNSZWR1Y2VyJztcbmltcG9ydCB7IGNhcmRzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcmRzUmVkdWNlcic7XG5pbXBvcnQgeyBzZXR0aW5nc1JlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy9zZXR0aW5nc1JlZHVjZXInO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1NpZGVOYXYnO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJy4uL2xpYi91c2VNZWRpYVF1ZXJ5J1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IGFsbFRhYnNEYXRhID0gZ2V0VGFic0RhdGEoKVxuICAgIGNvbnN0IGFsbENhcmRzRGF0YSA9IGdldENhcmRzRGF0YSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYWxsVGFic0RhdGEsXG4gICAgICAgIGFsbENhcmRzRGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuY29uc3QgVGFza2VyX2FwcCA9ICh7IGFsbFRhYnNEYXRhLCBhbGxDYXJkc0RhdGEgfSkgPT4ge1xuICAgIGNvbnN0IFt0YWJzU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodGFic1JlZHVjZXIsIHsgdGFiczogYWxsVGFic0RhdGEsIGN1cnJlbnRUYWJJZHg6IDAgIH0pXG4gICAgY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsxOiBhbGxDYXJkc0RhdGF9KVxuICAgIGNvbnN0IFtzZXR0aW5ncywgc2V0dGluZ3NEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNldHRpbmdzUmVkdWNlciwge30pXG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9zZXR0aW5nIHN0YXRlcyBmcm9tIGxvY2FsU3RvcmVcbiAgICAgICAgY29uc3QgdGFic0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJzJykpXG4gICAgICAgIGNvbnN0IHRhYklkeERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJzSWR4JykpXG4gICAgICAgIGNvbnN0IGNhcmRzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRzJykpXG4gICAgICAgIGNvbnN0IHNldHRpbmdzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHRpbmdzJykpIHx8IHtubzogJ2RhdGEnfVxuXG4gICAgICAgIGlmICh0YWJzRGF0YSAmJiBzZXR0aW5nc0RhdGEpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnc2V0VGFicycsIHBheWxvYWQ6IHt0YWJzOiB0YWJzRGF0YSwgY3VycmVudFRhYklkeDogdGFiSWR4RGF0YX19KVxuICAgICAgICAgICAgY2FyZHNEaXNwYXRjaCh7dHlwZTogJ3NldENhcmRzJywgcGF5bG9hZDoge2NhcmRzOiBjYXJkc0RhdGF9fSkgLy9maXggY2FyZCBwZXJzaXN0ZW5jZSBcbiAgICAgICAgICAgIHNldHRpbmdzRGlzcGF0Y2goe3R5cGU6ICdzZXRTZXR0aW5ncycsIHBheWxvYWQ6IHtzZXR0aW5nczogc2V0dGluZ3NEYXRhfX0pXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICBcblxuICAgIGNvbnN0IGZpcnN0UnVuVGFicyA9IHVzZVJlZih0cnVlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vbG9jYWxzdG9yaW5nIHRhYnMgZGF0YVxuICAgICAgICBpZiAoZmlyc3RSdW5UYWJzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGZpcnN0UnVuVGFicy5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJzJywgSlNPTi5zdHJpbmdpZnkodGFic1N0YXRlLnRhYnMpKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFic0lkeCcsIHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4KVxuXG4gICAgfSwgW3RhYnNTdGF0ZV0pXG5cbiAgICBjb25zdCBmaXJzdFJ1bkNhcmRzID0gdXNlUmVmKHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9sb2NhbHN0b3JpbmcgY2FyZCBkYXRhXG4gICAgICAgIGlmIChmaXJzdFJ1bkNhcmRzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGZpcnN0UnVuQ2FyZHMuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZHMnLCBKU09OLnN0cmluZ2lmeShjYXJkc1N0YXRlKSlcbiAgICB9LCBbY2FyZHNTdGF0ZV0pXG4gICAgXG4gICAgLy8gY29uc3QgZmlyc3RSdW5TZXR0aW5ncyA9IHVzZVJlZih0cnVlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGlmIChmaXJzdFJ1blNldHRpbmdzLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gICAgIGZpcnN0UnVuU2V0dGluZ3MuY3VycmVudCA9IGZhbHNlXG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zb2xlLmxvZygnc3RvcmVkIHNldHRpbmdzJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKVxuICAgIH0sIFtzZXR0aW5nc10pXG5cblxuXG4gICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkXG5cbiAgICAvL3VpIHN0YXRlXG4gICAgY29uc3QgW3Nob3dTZXR0aW5ncywgc2V0U2hvd1NldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHRvZ2dsZVNob3dTZXR0aW5ncyA9ICgpID0+IHsgc2V0U2hvd1NldHRpbmdzKCFzaG93U2V0dGluZ3MpIH1cblxuXG5cbiAgICBjb25zdCBkYXJrTW9kZSA9IHNldHRpbmdzLmRhcmtNb2RlXG4gICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7IHNldHRpbmdzRGlzcGF0Y2goe3R5cGU6ICd0b2dnbGVEYXJrTW9kZSd9KSB9XG5cbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA3NjlweCcpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrTW9kZSA/IFtzdHlsZXMuYmtnQ29udGFpbmVyLCBzdHlsZXMuZGFya01vZGVdLmpvaW4oXCIgXCIpIDogc3R5bGVzLmJrZ0NvbnRhaW5lcn0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8bmF2IHJlZj17Zmlyc3RSdW5UYWJzfSBjbGFzc05hbWU9e3N0eWxlcy50YWJzfT5cbiAgICAgICAgICAgICAgICA8VGFiTmF2IGRhcmtNb2RlPXtkYXJrTW9kZX0gdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlTmF2V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFNpZGVOYXYgZGFya01vZGU9e2RhcmtNb2RlfSAvPlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc1dyYXB9IG9uQ2xpY2s9e3RvZ2dsZVNob3dTZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3NldHRpbmdzLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U2V0dGluZ3MgPyBzdHlsZXMuc2V0dGluZ3NQYW5lbFdyYXBwZXIgOiBzdHlsZXMuaGlkZVNldHRpbmdzUGFuZWx9PlxuICAgICAgICAgICAgICAgIHsgPFNldHRpbmdzIHRvZ2dsZURhcmtNb2RlPXt0b2dnbGVEYXJrTW9kZX0gZGFya01vZGU9e2RhcmtNb2RlfSBsYXlvdXRTZXR0aW5nPXtzZXR0aW5ncy5sYXlvdXR9IHNldExheW91dFNldHRpbmc9eyhsYXlvdXQpID0+IHtzZXR0aW5nc0Rpc3BhdGNoKHt0eXBlOiAnc2V0TGF5b3V0JywgcGF5bG9hZDoge2xheW91dDogbGF5b3V0fX0pfSB9IC8+IH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld0NhcmRXcmFwfSBvbkNsaWNrPXsoKSA9PiBjYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2FkZE5ld0NhcmQnLCBwYXlsb2FkOiB7IHRhYmlkOiBjdXJyZW50VGFiSWQgfSB9KX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL25ldy1jYXJkLnN2Z1wiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8dWwgcmVmPXtmaXJzdFJ1bkNhcmRzfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30gc3R5bGU9e3tjb2x1bW5Db3VudDogc2V0dGluZ3MubGF5b3V0fX0+IFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZF0gJiYgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRdLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhcmQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PiA8Q2FyZCBkYXJrTW9kZT17ZGFya01vZGV9IGNhcmQ9e2NhcmR9IGxheW91dFNldHRpbmc9e3NldHRpbmdzLmxheW91dH0gY2FyZGlkeD17aW5kZXh9IGNhcmRzU3RhdGU9e2NhcmRzU3RhdGV9IGNhcmRzRGlzcGF0Y2g9e2NhcmRzRGlzcGF0Y2h9IHRhYmlkPXtjdXJyZW50VGFiSWR9Lz4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrZXJfYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});