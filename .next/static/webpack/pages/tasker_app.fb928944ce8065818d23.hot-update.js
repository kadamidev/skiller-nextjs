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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/settingsReducer */ \"./reducers/settingsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_8__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_9__.cardsReducer, {\n    1: allCardsData\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var _useReducer3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_10__.settingsReducer, {\n    darkMode: false,\n    layout: 2\n  }),\n      settings = _useReducer3[0],\n      settingsDispatch = _useReducer3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    //setting states from localStore\n    function getLocalData() {\n      return _getLocalData.apply(this, arguments);\n    }\n\n    function _getLocalData() {\n      _getLocalData = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var tabsData, tabIdxData, cardsData, settingsData;\n        return _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return JSON.parse(localStorage.getItem('tabs'));\n\n              case 2:\n                tabsData = _context.sent;\n                _context.next = 5;\n                return JSON.parse(localStorage.getItem('tabsIdx'));\n\n              case 5:\n                tabIdxData = _context.sent;\n                _context.next = 8;\n                return JSON.parse(localStorage.getItem('cards'));\n\n              case 8:\n                cardsData = _context.sent;\n                _context.next = 11;\n                return localStorage.getItem('settings');\n\n              case 11:\n                settingsData = _context.sent;\n                _context.next = 14;\n                return JSON.parse(settingsData);\n\n              case 14:\n                settingsData = _context.sent;\n                console.log(\"pre dispatch settings: \".concat(settingsData, \" tabs: \").concat(tabsData, \" cards: \").concat(cardsData));\n                dispatch({\n                  type: 'setTabs',\n                  payload: {\n                    tabs: tabsData,\n                    currentTabIdx: tabIdxData\n                  }\n                });\n                cardsDispatch({\n                  type: 'setCards',\n                  payload: {\n                    cards: cardsData\n                  }\n                }); //fix card persistence \n\n                settingsDispatch({\n                  type: 'setSettings',\n                  payload: {\n                    settings: settingsData\n                  }\n                });\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getLocalData.apply(this, arguments);\n    }\n\n    getLocalData();\n  }, []);\n  var firstRunTabs = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    //localstoring tabs data\n    if (firstRunTabs.current) {\n      firstRunTabs.current = false;\n      return;\n    }\n\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  var firstRunCards = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    //localstoring card data\n    if (firstRunCards.current) {\n      firstRunCards.current = false;\n      return;\n    }\n\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]);\n  var firstRunSettings = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (firstRunSettings.current) {\n      firstRunSettings.current = false;\n      console.log('avoided first settings run');\n      return;\n    }\n\n    console.log('stored settings');\n    localStorage.setItem('settings', JSON.stringify(settings));\n  }, [settings]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var darkMode = settings.darkMode;\n\n  var toggleDarkMode = function toggleDarkMode() {\n    settingsDispatch({\n      type: 'toggleDarkMode'\n    });\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        ref: firstRunTabs,\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_11__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: firstRunSettings,\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_7__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: settings.layout,\n          setLayoutSetting: function setLayoutSetting(layout) {\n            settingsDispatch({\n              type: 'setLayout',\n              payload: {\n                layout: layout\n              }\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: firstRunCards,\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cards),\n          style: {\n            columnCount: settings.layout\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_13___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: settings.layout,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 130,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 130,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"TsbTrNWWKDLuUSf4tveR1RMPo/Q=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery];\n});\n\n_c = Tasker_app;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJzZXR0aW5nc1JlZHVjZXIiLCJkYXJrTW9kZSIsImxheW91dCIsInNldHRpbmdzIiwic2V0dGluZ3NEaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldExvY2FsRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0YWJzRGF0YSIsInRhYklkeERhdGEiLCJjYXJkc0RhdGEiLCJzZXR0aW5nc0RhdGEiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJjYXJkcyIsImZpcnN0UnVuVGFicyIsInVzZVJlZiIsImN1cnJlbnQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlyc3RSdW5DYXJkcyIsImZpcnN0UnVuU2V0dGluZ3MiLCJjdXJyZW50VGFiSWQiLCJpZCIsInVzZVN0YXRlIiwic2hvd1NldHRpbmdzIiwic2V0U2hvd1NldHRpbmdzIiwidG9nZ2xlU2hvd1NldHRpbmdzIiwidG9nZ2xlRGFya01vZGUiLCJpc0Rlc2t0b3AiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3R5bGVzIiwiam9pbiIsImJrZ0NvbnRhaW5lciIsInRhYmlkIiwiY29sdW1uQ291bnQiLCJtYXAiLCJjYXJkIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaUJBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW1D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QUFpQjtBQUN0RSxnQ0FDQTtBQUFrQix1QkFBUyxFQUFFUCxpRkFBN0I7QUFBQSwyQ0FBMkMsOERBQUMsb0VBQUQ7QUFBTSx3QkFBUSxFQUFFbkMsUUFBaEI7QUFBMEIsb0JBQUksRUFBRXlDLElBQWhDO0FBQXNDLDZCQUFhLEVBQUV2QyxRQUFRLENBQUNELE1BQTlEO0FBQXNFLHVCQUFPLEVBQUV5QyxLQUEvRTtBQUFzRiwwQkFBVSxFQUFFN0MsVUFBbEc7QUFBOEcsNkJBQWEsRUFBRUMsYUFBN0g7QUFBNEkscUJBQUssRUFBRTRCO0FBQW5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTNDO0FBQUEsZUFBU2UsSUFBSSxDQUFDZCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREE7QUFHSCxXQUoyQjtBQUZwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIQTtBQUFBLGtCQURKO0FBc0NILENBN0dEOztHQUFNeEMsVTtVQW9FZ0IrQyw4RDs7O0tBcEVoQi9DLFU7O0FBK0dOLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGFza2VyX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwL3Rhc2tlcl9hcHAubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBUYWJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3gnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvQ2FyZC5qc3gnXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1NldHRpbmdzLmpzeCdcbmltcG9ydCB7IGdldFRhYnNEYXRhIH0gZnJvbSAnLi4vbGliL3RhYnMnO1xuaW1wb3J0IHsgZ2V0Q2FyZHNEYXRhIH0gZnJvbSAnLi4vbGliL2NhcmRzJztcbmltcG9ydCB7IHRhYnNSZWR1Y2VyIH0gZnJvbSAnLi4vcmVkdWNlcnMvdGFic1JlZHVjZXInO1xuaW1wb3J0IHsgY2FyZHNSZWR1Y2VyIH0gZnJvbSAnLi4vcmVkdWNlcnMvY2FyZHNSZWR1Y2VyJztcbmltcG9ydCB7IHNldHRpbmdzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL3NldHRpbmdzUmVkdWNlcic7XG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvU2lkZU5hdic7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbGliL3VzZU1lZGlhUXVlcnknXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgYWxsVGFic0RhdGEgPSBnZXRUYWJzRGF0YSgpXG4gICAgY29uc3QgYWxsQ2FyZHNEYXRhID0gZ2V0Q2FyZHNEYXRhKClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhbGxUYWJzRGF0YSxcbiAgICAgICAgYWxsQ2FyZHNEYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuY29uc3QgVGFza2VyX2FwcCA9ICh7IGFsbFRhYnNEYXRhLCBhbGxDYXJkc0RhdGEgfSkgPT4ge1xuICAgIGNvbnN0IFt0YWJzU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodGFic1JlZHVjZXIsIHsgdGFiczogYWxsVGFic0RhdGEsIGN1cnJlbnRUYWJJZHg6IDAgIH0pXG4gICAgY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsxOiBhbGxDYXJkc0RhdGF9KVxuICAgIGNvbnN0IFtzZXR0aW5ncywgc2V0dGluZ3NEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNldHRpbmdzUmVkdWNlciwgeyBkYXJrTW9kZTogZmFsc2UsIGxheW91dDogMiB9IClcblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL3NldHRpbmcgc3RhdGVzIGZyb20gbG9jYWxTdG9yZVxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRMb2NhbERhdGEoKSB7XG4gICAgICAgIGxldCB0YWJzRGF0YSA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYnMnKSlcbiAgICAgICAgbGV0IHRhYklkeERhdGEgPSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJzSWR4JykpXG4gICAgICAgIGxldCBjYXJkc0RhdGEgPSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkcycpKVxuICAgICAgICBsZXQgc2V0dGluZ3NEYXRhID0gYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHRpbmdzJylcbiAgICAgICAgc2V0dGluZ3NEYXRhID0gYXdhaXQgSlNPTi5wYXJzZShzZXR0aW5nc0RhdGEpXG5cbiAgICAgICAgY29uc29sZS5sb2coYHByZSBkaXNwYXRjaCBzZXR0aW5nczogJHtzZXR0aW5nc0RhdGF9IHRhYnM6ICR7dGFic0RhdGF9IGNhcmRzOiAke2NhcmRzRGF0YX1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ3NldFRhYnMnLCBwYXlsb2FkOiB7dGFiczogdGFic0RhdGEsIGN1cnJlbnRUYWJJZHg6IHRhYklkeERhdGF9fSlcbiAgICAgICAgY2FyZHNEaXNwYXRjaCh7dHlwZTogJ3NldENhcmRzJywgcGF5bG9hZDoge2NhcmRzOiBjYXJkc0RhdGF9fSkgLy9maXggY2FyZCBwZXJzaXN0ZW5jZSBcbiAgICAgICAgc2V0dGluZ3NEaXNwYXRjaCh7dHlwZTogJ3NldFNldHRpbmdzJywgcGF5bG9hZDoge3NldHRpbmdzOiBzZXR0aW5nc0RhdGF9fSlcbiAgICAgICAgfVxuICAgICAgICBnZXRMb2NhbERhdGEoKVxuICAgIH0sIFtdKVxuICAgIFxuXG4gICAgY29uc3QgZmlyc3RSdW5UYWJzID0gdXNlUmVmKHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9sb2NhbHN0b3JpbmcgdGFicyBkYXRhXG4gICAgICAgIGlmIChmaXJzdFJ1blRhYnMuY3VycmVudCkge1xuICAgICAgICAgICAgZmlyc3RSdW5UYWJzLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhYnMnLCBKU09OLnN0cmluZ2lmeSh0YWJzU3RhdGUudGFicykpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJzSWR4JywgdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgpXG5cbiAgICB9LCBbdGFic1N0YXRlXSlcblxuICAgIGNvbnN0IGZpcnN0UnVuQ2FyZHMgPSB1c2VSZWYodHJ1ZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL2xvY2Fsc3RvcmluZyBjYXJkIGRhdGFcbiAgICAgICAgaWYgKGZpcnN0UnVuQ2FyZHMuY3VycmVudCkge1xuICAgICAgICAgICAgZmlyc3RSdW5DYXJkcy5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkcycsIEpTT04uc3RyaW5naWZ5KGNhcmRzU3RhdGUpKVxuICAgIH0sIFtjYXJkc1N0YXRlXSlcbiAgICBcbiAgICBjb25zdCBmaXJzdFJ1blNldHRpbmdzID0gdXNlUmVmKHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGZpcnN0UnVuU2V0dGluZ3MuY3VycmVudCkge1xuICAgICAgICAgICAgZmlyc3RSdW5TZXR0aW5ncy5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdm9pZGVkIGZpcnN0IHNldHRpbmdzIHJ1bicpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnc3RvcmVkIHNldHRpbmdzJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKVxuICAgIH0sIFtzZXR0aW5nc10pXG5cblxuXG4gICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkXG5cbiAgICAvL3VpIHN0YXRlXG4gICAgY29uc3QgW3Nob3dTZXR0aW5ncywgc2V0U2hvd1NldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHRvZ2dsZVNob3dTZXR0aW5ncyA9ICgpID0+IHsgc2V0U2hvd1NldHRpbmdzKCFzaG93U2V0dGluZ3MpIH1cblxuXG5cbiAgICBjb25zdCBkYXJrTW9kZSA9IHNldHRpbmdzLmRhcmtNb2RlXG4gICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7IHNldHRpbmdzRGlzcGF0Y2goe3R5cGU6ICd0b2dnbGVEYXJrTW9kZSd9KSB9XG5cbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA3NjlweCcpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrTW9kZSA/IFtzdHlsZXMuYmtnQ29udGFpbmVyLCBzdHlsZXMuZGFya01vZGVdLmpvaW4oXCIgXCIpIDogc3R5bGVzLmJrZ0NvbnRhaW5lcn0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8bmF2IHJlZj17Zmlyc3RSdW5UYWJzfSBjbGFzc05hbWU9e3N0eWxlcy50YWJzfT5cbiAgICAgICAgICAgICAgICA8VGFiTmF2IGRhcmtNb2RlPXtkYXJrTW9kZX0gdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlTmF2V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFNpZGVOYXYgZGFya01vZGU9e2RhcmtNb2RlfSAvPlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc1dyYXB9IG9uQ2xpY2s9e3RvZ2dsZVNob3dTZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3NldHRpbmdzLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtmaXJzdFJ1blNldHRpbmdzfSBjbGFzc05hbWU9e3Nob3dTZXR0aW5ncyA/IHN0eWxlcy5zZXR0aW5nc1BhbmVsV3JhcHBlciA6IHN0eWxlcy5oaWRlU2V0dGluZ3NQYW5lbH0+XG4gICAgICAgICAgICAgICAgeyA8U2V0dGluZ3MgdG9nZ2xlRGFya01vZGU9e3RvZ2dsZURhcmtNb2RlfSBkYXJrTW9kZT17ZGFya01vZGV9IGxheW91dFNldHRpbmc9e3NldHRpbmdzLmxheW91dH0gc2V0TGF5b3V0U2V0dGluZz17KGxheW91dCkgPT4ge3NldHRpbmdzRGlzcGF0Y2goe3R5cGU6ICdzZXRMYXlvdXQnLCBwYXlsb2FkOiB7bGF5b3V0OiBsYXlvdXR9fSl9IH0gLz4gfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3Q2FyZFdyYXB9IG9uQ2xpY2s9eygpID0+IGNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnYWRkTmV3Q2FyZCcsIHBheWxvYWQ6IHsgdGFiaWQ6IGN1cnJlbnRUYWJJZCB9IH0pfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvbmV3LWNhcmQuc3ZnXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bCByZWY9e2ZpcnN0UnVuQ2FyZHN9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfSBzdHlsZT17e2NvbHVtbkNvdW50OiBzZXR0aW5ncy5sYXlvdXR9fT4gXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXSAmJiBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZF0ubWFwKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2FyZC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+IDxDYXJkIGRhcmtNb2RlPXtkYXJrTW9kZX0gY2FyZD17Y2FyZH0gbGF5b3V0U2V0dGluZz17c2V0dGluZ3MubGF5b3V0fSBjYXJkaWR4PXtpbmRleH0gY2FyZHNTdGF0ZT17Y2FyZHNTdGF0ZX0gY2FyZHNEaXNwYXRjaD17Y2FyZHNEaXNwYXRjaH0gdGFiaWQ9e2N1cnJlbnRUYWJJZH0vPiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tlcl9hcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});