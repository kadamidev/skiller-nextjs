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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"getLocalStorage\": function() { return /* binding */ getLocalStorage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/settingsReducer */ \"./reducers/settingsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction getLocalStorage() {\n  var tabsData = JSON.parse(localStorage.getItem('tabs'));\n  var tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'));\n  var cardsData = JSON.parse(localStorage.getItem('cards'));\n  var settingsData = JSON.parse(localStorage.getItem('settings'));\n  console.log('getting local sotores');\n  return {\n    tabsData: tabsData,\n    tabidxData: tabIdxData,\n    cardsData: cardsData,\n    settingsData: settingsData\n  };\n}\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__.cardsReducer, {\n    1: allCardsData\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var _useReducer3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_8__.settingsReducer, {\n    darkMode: false,\n    layout: 2\n  }),\n      settings = _useReducer3[0],\n      settingsDispatch = _useReducer3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //setting states from localStore\n    // const tabsData = JSON.parse(localStorage.getItem('tabs'))\n    // const tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'))\n    // const cardsData = JSON.parse(localStorage.getItem('cards'))\n    // const settingsData = JSON.parse(localStorage.getItem('settings'))\n    var localData = getLocalStorage();\n    console.log(\"pre dispatch settings: \".concat(localData.settingsData)); // if (tabsData && settingsData) {\n    //     dispatch({type: 'setTabs', payload: {tabs: tabsData, currentTabIdx: tabIdxData}})\n    //     cardsDispatch({type: 'setCards', payload: {cards: cardsData}}) //fix card persistence \n    //     settingsDispatch({type: 'setSettings', payload: {settings: settingsData}})\n    // }\n  }, []);\n  var firstRunTabs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring tabs data\n    if (firstRunTabs.current) {\n      firstRunTabs.current = false;\n      return;\n    }\n\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  var firstRunCards = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring card data\n    if (firstRunCards.current) {\n      firstRunCards.current = false;\n      return;\n    }\n\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]);\n  var firstRunSettings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (firstRunSettings.current) {\n      firstRunSettings.current = false;\n      console.log('avoided first settings run');\n      return;\n    }\n\n    console.log('stored settings');\n    localStorage.setItem('settings', JSON.stringify(settings));\n  }, [settings]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var darkMode = settings.darkMode;\n\n  var toggleDarkMode = function toggleDarkMode() {\n    settingsDispatch({\n      type: 'toggleDarkMode'\n    });\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        ref: firstRunTabs,\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_9__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: firstRunSettings,\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: settings.layout,\n          setLayoutSetting: function setLayoutSetting(layout) {\n            settingsDispatch({\n              type: 'setLayout',\n              payload: {\n                layout: layout\n              }\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: firstRunCards,\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cards),\n          style: {\n            columnCount: settings.layout\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: settings.layout,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"TsbTrNWWKDLuUSf4tveR1RMPo/Q=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery];\n});\n\n_c = Tasker_app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJnZXRMb2NhbFN0b3JhZ2UiLCJ0YWJzRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0YWJJZHhEYXRhIiwiY2FyZHNEYXRhIiwic2V0dGluZ3NEYXRhIiwiY29uc29sZSIsImxvZyIsInRhYmlkeERhdGEiLCJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJzZXR0aW5nc1JlZHVjZXIiLCJkYXJrTW9kZSIsImxheW91dCIsInNldHRpbmdzIiwic2V0dGluZ3NEaXNwYXRjaCIsInVzZUVmZmVjdCIsImxvY2FsRGF0YSIsImZpcnN0UnVuVGFicyIsInVzZVJlZiIsImN1cnJlbnQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlyc3RSdW5DYXJkcyIsImZpcnN0UnVuU2V0dGluZ3MiLCJjdXJyZW50VGFiSWQiLCJpZCIsInVzZVN0YXRlIiwic2hvd1NldHRpbmdzIiwic2V0U2hvd1NldHRpbmdzIiwidG9nZ2xlU2hvd1NldHRpbmdzIiwidG9nZ2xlRGFya01vZGUiLCJ0eXBlIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsInN0eWxlcyIsImpvaW4iLCJia2dDb250YWluZXIiLCJwYXlsb2FkIiwidGFiaWQiLCJjb2x1bW5Db3VudCIsIm1hcCIsImNhcmQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWdCUSxTQUFTQSxlQUFULEdBQTJC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QUFBQTtBQUFBLHFCQURBO0FBR0gsV0FKMkI7QUFGcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEE7QUFBQSxrQkFESjtBQXNDSCxDQTNHRDs7R0FBTTNCLFU7VUFrRWdCbUMsOEQ7OztLQWxFaEJuQyxVO0FBNkdOLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGFza2VyX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwL3Rhc2tlcl9hcHAubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBUYWJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3gnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvQ2FyZC5qc3gnXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1NldHRpbmdzLmpzeCdcbmltcG9ydCB7IGdldFRhYnNEYXRhIH0gZnJvbSAnLi4vbGliL3RhYnMnO1xuaW1wb3J0IHsgZ2V0Q2FyZHNEYXRhIH0gZnJvbSAnLi4vbGliL2NhcmRzJztcbmltcG9ydCB7IHRhYnNSZWR1Y2VyIH0gZnJvbSAnLi4vcmVkdWNlcnMvdGFic1JlZHVjZXInO1xuaW1wb3J0IHsgY2FyZHNSZWR1Y2VyIH0gZnJvbSAnLi4vcmVkdWNlcnMvY2FyZHNSZWR1Y2VyJztcbmltcG9ydCB7IHNldHRpbmdzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL3NldHRpbmdzUmVkdWNlcic7XG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvU2lkZU5hdic7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbGliL3VzZU1lZGlhUXVlcnknXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgYWxsVGFic0RhdGEgPSBnZXRUYWJzRGF0YSgpXG4gICAgY29uc3QgYWxsQ2FyZHNEYXRhID0gZ2V0Q2FyZHNEYXRhKClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhbGxUYWJzRGF0YSxcbiAgICAgICAgYWxsQ2FyZHNEYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG5cbmV4cG9ydCAgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHRhYnNEYXRhID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYnMnKSlcbiAgICBjb25zdCB0YWJJZHhEYXRhID0gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYnNJZHgnKSlcbiAgICBjb25zdCBjYXJkc0RhdGEgPSAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZHMnKSlcbiAgICBjb25zdCBzZXR0aW5nc0RhdGEgPSAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2V0dGluZ3MnKSlcbiAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBsb2NhbCBzb3RvcmVzJylcbiAgICByZXR1cm4ge3RhYnNEYXRhOiB0YWJzRGF0YSwgdGFiaWR4RGF0YTogdGFiSWR4RGF0YSwgY2FyZHNEYXRhOiBjYXJkc0RhdGEsIHNldHRpbmdzRGF0YTogc2V0dGluZ3NEYXRhfVxufVxuXG5cblxuY29uc3QgVGFza2VyX2FwcCA9ICh7IGFsbFRhYnNEYXRhLCBhbGxDYXJkc0RhdGEgfSkgPT4ge1xuICAgIGNvbnN0IFt0YWJzU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodGFic1JlZHVjZXIsIHsgdGFiczogYWxsVGFic0RhdGEsIGN1cnJlbnRUYWJJZHg6IDAgIH0pXG4gICAgY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsxOiBhbGxDYXJkc0RhdGF9KVxuICAgIGNvbnN0IFtzZXR0aW5ncywgc2V0dGluZ3NEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNldHRpbmdzUmVkdWNlciwgeyBkYXJrTW9kZTogZmFsc2UsIGxheW91dDogMiB9IClcblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL3NldHRpbmcgc3RhdGVzIGZyb20gbG9jYWxTdG9yZVxuICAgICAgICAvLyBjb25zdCB0YWJzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYnMnKSlcbiAgICAgICAgLy8gY29uc3QgdGFiSWR4RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYnNJZHgnKSlcbiAgICAgICAgLy8gY29uc3QgY2FyZHNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZHMnKSlcbiAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3NEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2V0dGluZ3MnKSlcbiAgICAgICAgY29uc3QgbG9jYWxEYXRhID0gZ2V0TG9jYWxTdG9yYWdlKClcbiAgICAgICAgY29uc29sZS5sb2coYHByZSBkaXNwYXRjaCBzZXR0aW5nczogJHtsb2NhbERhdGEuc2V0dGluZ3NEYXRhfWApXG4gICAgICAgIC8vIGlmICh0YWJzRGF0YSAmJiBzZXR0aW5nc0RhdGEpIHtcbiAgICAgICAgLy8gICAgIGRpc3BhdGNoKHt0eXBlOiAnc2V0VGFicycsIHBheWxvYWQ6IHt0YWJzOiB0YWJzRGF0YSwgY3VycmVudFRhYklkeDogdGFiSWR4RGF0YX19KVxuICAgICAgICAvLyAgICAgY2FyZHNEaXNwYXRjaCh7dHlwZTogJ3NldENhcmRzJywgcGF5bG9hZDoge2NhcmRzOiBjYXJkc0RhdGF9fSkgLy9maXggY2FyZCBwZXJzaXN0ZW5jZSBcbiAgICAgICAgLy8gICAgIHNldHRpbmdzRGlzcGF0Y2goe3R5cGU6ICdzZXRTZXR0aW5ncycsIHBheWxvYWQ6IHtzZXR0aW5nczogc2V0dGluZ3NEYXRhfX0pXG4gICAgICAgIC8vIH1cbiAgICB9LCBbXSlcbiAgICBcblxuICAgIGNvbnN0IGZpcnN0UnVuVGFicyA9IHVzZVJlZih0cnVlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vbG9jYWxzdG9yaW5nIHRhYnMgZGF0YVxuICAgICAgICBpZiAoZmlyc3RSdW5UYWJzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGZpcnN0UnVuVGFicy5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJzJywgSlNPTi5zdHJpbmdpZnkodGFic1N0YXRlLnRhYnMpKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFic0lkeCcsIHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4KVxuXG4gICAgfSwgW3RhYnNTdGF0ZV0pXG5cbiAgICBjb25zdCBmaXJzdFJ1bkNhcmRzID0gdXNlUmVmKHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9sb2NhbHN0b3JpbmcgY2FyZCBkYXRhXG4gICAgICAgIGlmIChmaXJzdFJ1bkNhcmRzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGZpcnN0UnVuQ2FyZHMuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZHMnLCBKU09OLnN0cmluZ2lmeShjYXJkc1N0YXRlKSlcbiAgICB9LCBbY2FyZHNTdGF0ZV0pXG4gICAgXG4gICAgY29uc3QgZmlyc3RSdW5TZXR0aW5ncyA9IHVzZVJlZih0cnVlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChmaXJzdFJ1blNldHRpbmdzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGZpcnN0UnVuU2V0dGluZ3MuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXZvaWRlZCBmaXJzdCBzZXR0aW5ncyBydW4nKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlZCBzZXR0aW5ncycpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSlcbiAgICB9LCBbc2V0dGluZ3NdKVxuXG5cblxuICAgIGNvbnN0IGN1cnJlbnRUYWJJZCA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZFxuXG4gICAgLy91aSBzdGF0ZVxuICAgIGNvbnN0IFtzaG93U2V0dGluZ3MsIHNldFNob3dTZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB0b2dnbGVTaG93U2V0dGluZ3MgPSAoKSA9PiB7IHNldFNob3dTZXR0aW5ncyghc2hvd1NldHRpbmdzKSB9XG5cblxuXG4gICAgY29uc3QgZGFya01vZGUgPSBzZXR0aW5ncy5kYXJrTW9kZVxuICAgIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4geyBzZXR0aW5nc0Rpc3BhdGNoKHt0eXBlOiAndG9nZ2xlRGFya01vZGUnfSkgfVxuXG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDogNzY5cHgnKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFya01vZGUgPyBbc3R5bGVzLmJrZ0NvbnRhaW5lciwgc3R5bGVzLmRhcmtNb2RlXS5qb2luKFwiIFwiKSA6IHN0eWxlcy5ia2dDb250YWluZXJ9PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPG5hdiByZWY9e2ZpcnN0UnVuVGFic30gY2xhc3NOYW1lPXtzdHlsZXMudGFic30+XG4gICAgICAgICAgICAgICAgPFRhYk5hdiBkYXJrTW9kZT17ZGFya01vZGV9IHRhYnNTdGF0ZT17dGFic1N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdldyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxTaWRlTmF2IGRhcmtNb2RlPXtkYXJrTW9kZX0gLz5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NXcmFwfSBvbkNsaWNrPXt0b2dnbGVTaG93U2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9zZXR0aW5ncy5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9IGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHJlZj17Zmlyc3RSdW5TZXR0aW5nc30gY2xhc3NOYW1lPXtzaG93U2V0dGluZ3MgPyBzdHlsZXMuc2V0dGluZ3NQYW5lbFdyYXBwZXIgOiBzdHlsZXMuaGlkZVNldHRpbmdzUGFuZWx9PlxuICAgICAgICAgICAgICAgIHsgPFNldHRpbmdzIHRvZ2dsZURhcmtNb2RlPXt0b2dnbGVEYXJrTW9kZX0gZGFya01vZGU9e2RhcmtNb2RlfSBsYXlvdXRTZXR0aW5nPXtzZXR0aW5ncy5sYXlvdXR9IHNldExheW91dFNldHRpbmc9eyhsYXlvdXQpID0+IHtzZXR0aW5nc0Rpc3BhdGNoKHt0eXBlOiAnc2V0TGF5b3V0JywgcGF5bG9hZDoge2xheW91dDogbGF5b3V0fX0pfSB9IC8+IH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld0NhcmRXcmFwfSBvbkNsaWNrPXsoKSA9PiBjYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2FkZE5ld0NhcmQnLCBwYXlsb2FkOiB7IHRhYmlkOiBjdXJyZW50VGFiSWQgfSB9KX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL25ldy1jYXJkLnN2Z1wiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8dWwgcmVmPXtmaXJzdFJ1bkNhcmRzfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30gc3R5bGU9e3tjb2x1bW5Db3VudDogc2V0dGluZ3MubGF5b3V0fX0+IFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZF0gJiYgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRdLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhcmQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PiA8Q2FyZCBkYXJrTW9kZT17ZGFya01vZGV9IGNhcmQ9e2NhcmR9IGxheW91dFNldHRpbmc9e3NldHRpbmdzLmxheW91dH0gY2FyZGlkeD17aW5kZXh9IGNhcmRzU3RhdGU9e2NhcmRzU3RhdGV9IGNhcmRzRGlzcGF0Y2g9e2NhcmRzRGlzcGF0Y2h9IHRhYmlkPXtjdXJyZW50VGFiSWR9Lz4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrZXJfYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});