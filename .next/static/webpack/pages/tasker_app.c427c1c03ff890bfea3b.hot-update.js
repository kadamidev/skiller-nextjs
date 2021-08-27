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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__.cardsReducer, {}),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1]; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 1: allCardsData })\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //setting states from localStore\n    var tabsData = JSON.parse(localStorage.getItem('tabs'));\n    var tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'));\n    var cardsData = JSON.parse(localStorage.getItem('cards'));\n\n    if (tabsData && cardsData) {\n      dispatch({\n        type: 'setTabs',\n        payload: {\n          tabs: tabsData,\n          currentTabIdx: tabIdxData\n        }\n      });\n      cardsDispatch({\n        type: 'setCards',\n        payload: {\n          cards: cardsData\n        }\n      }); //fix card persistence \n    }\n  }, []);\n  var isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (isFirstRun.current) isFirstRun.current = false;\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring tabs data\n    console.log(isFirstRun);\n    console.log(isFirstRun.current);\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring card data\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2),\n      layoutSetting = _useState2[0],\n      setLayoutSetting = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      darkMode = _useState3[0],\n      setDarkMode = _useState3[1];\n\n  var toggleDarkMode = function toggleDarkMode() {\n    setDarkMode(!darkMode);\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_8__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: layoutSetting,\n          setLayoutSetting: setLayoutSetting\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().cards),\n          style: {\n            columnCount: layoutSetting\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: layoutSetting,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 111,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"KUsWfGMYsHRHx1cvW+P6OetJxNM=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery];\n});\n\n_c = Tasker_app;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0YWJzRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0YWJJZHhEYXRhIiwiY2FyZHNEYXRhIiwidHlwZSIsInBheWxvYWQiLCJjYXJkcyIsImlzRmlyc3RSdW4iLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjdXJyZW50VGFiSWQiLCJpZCIsInVzZVN0YXRlIiwic2hvd1NldHRpbmdzIiwic2V0U2hvd1NldHRpbmdzIiwidG9nZ2xlU2hvd1NldHRpbmdzIiwibGF5b3V0U2V0dGluZyIsInNldExheW91dFNldHRpbmciLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJpc0Rlc2t0b3AiLCJ1c2VNZWRpYVF1ZXJ5Iiwic3R5bGVzIiwiam9pbiIsImJrZ0NvbnRhaW5lciIsInRhYmlkIiwiY29sdW1uQ291bnQiLCJtYXAiLCJjYXJkIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQWtCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUFBLG9CQUNwQkMsaURB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SUFBSSxDQUFDbEIsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBR0gsV0FKMkI7QUFGcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEE7QUFBQSxrQkFESjtBQXNDSCxDQTFGRDs7R0FBTS9CLFU7VUFpRGdCMEMsNkQ7OztLQWpEaEIxQyxVOztBQTRGTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rhc2tlcl9hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC90YXNrZXJfYXBwLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgVGFiTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9UYWJOYXYuanN4J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4J1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9TZXR0aW5ncy5qc3gnXG5pbXBvcnQgeyBnZXRUYWJzRGF0YSB9IGZyb20gJy4uL2xpYi90YWJzJztcbmltcG9ydCB7IGdldENhcmRzRGF0YSB9IGZyb20gJy4uL2xpYi9jYXJkcyc7XG5pbXBvcnQgeyB0YWJzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL3RhYnNSZWR1Y2VyJztcbmltcG9ydCB7IGNhcmRzUmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcmRzUmVkdWNlcic7XG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvU2lkZU5hdic7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbGliL3VzZU1lZGlhUXVlcnknXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgYWxsVGFic0RhdGEgPSBnZXRUYWJzRGF0YSgpXG4gICAgY29uc3QgYWxsQ2FyZHNEYXRhID0gZ2V0Q2FyZHNEYXRhKClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhbGxUYWJzRGF0YSxcbiAgICAgICAgYWxsQ2FyZHNEYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG5jb25zdCBUYXNrZXJfYXBwID0gKHsgYWxsVGFic0RhdGEsIGFsbENhcmRzRGF0YSB9KSA9PiB7XG4gICAgY29uc3QgW3RhYnNTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0YWJzUmVkdWNlciwgeyB0YWJzOiBhbGxUYWJzRGF0YSwgY3VycmVudFRhYklkeDogMCAgfSlcbiAgICBjb25zdCBbY2FyZHNTdGF0ZSwgY2FyZHNEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhcmRzUmVkdWNlciwge30pXG4gICAgLy8gY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsgMTogYWxsQ2FyZHNEYXRhIH0pXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vc2V0dGluZyBzdGF0ZXMgZnJvbSBsb2NhbFN0b3JlXG4gICAgICAgIGNvbnN0IHRhYnNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFicycpKVxuICAgICAgICBjb25zdCB0YWJJZHhEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFic0lkeCcpKVxuICAgICAgICBjb25zdCBjYXJkc0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJkcycpKVxuXG4gICAgICAgIGlmICh0YWJzRGF0YSAmJiBjYXJkc0RhdGEpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnc2V0VGFicycsIHBheWxvYWQ6IHt0YWJzOiB0YWJzRGF0YSwgY3VycmVudFRhYklkeDogdGFiSWR4RGF0YX19KVxuICAgICAgICAgICAgY2FyZHNEaXNwYXRjaCh7dHlwZTogJ3NldENhcmRzJywgcGF5bG9hZDoge2NhcmRzOiBjYXJkc0RhdGF9fSkgLy9maXggY2FyZCBwZXJzaXN0ZW5jZSBcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IGlzRmlyc3RSdW4gPSB1c2VSZWYodHJ1ZSlcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgaWYgKGlzRmlyc3RSdW4uY3VycmVudClcbiAgICAgICAgICAgIGlzRmlyc3RSdW4uY3VycmVudCA9IGZhbHNlXG4gICAgfSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vbG9jYWxzdG9yaW5nIHRhYnMgZGF0YVxuICAgICAgICBjb25zb2xlLmxvZyhpc0ZpcnN0UnVuKVxuICAgICAgICBjb25zb2xlLmxvZyhpc0ZpcnN0UnVuLmN1cnJlbnQpXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhYnMnLCBKU09OLnN0cmluZ2lmeSh0YWJzU3RhdGUudGFicykpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJzSWR4JywgdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgpXG5cbiAgICB9LCBbdGFic1N0YXRlXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vbG9jYWxzdG9yaW5nIGNhcmQgZGF0YVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZHMnLCBKU09OLnN0cmluZ2lmeShjYXJkc1N0YXRlKSlcbiAgICB9LCBbY2FyZHNTdGF0ZV0pXG4gICAgXG5cbiAgICBjb25zdCBjdXJyZW50VGFiSWQgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWRcblxuXG5cbiAgICAvL3VpIHN0YXRlXG4gICAgY29uc3QgW3Nob3dTZXR0aW5ncywgc2V0U2hvd1NldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHRvZ2dsZVNob3dTZXR0aW5ncyA9ICgpID0+IHsgc2V0U2hvd1NldHRpbmdzKCFzaG93U2V0dGluZ3MpIH1cbiAgICBjb25zdCBbbGF5b3V0U2V0dGluZywgc2V0TGF5b3V0U2V0dGluZ10gPSB1c2VTdGF0ZSgyKVxuXG4gICAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHsgc2V0RGFya01vZGUoIWRhcmtNb2RlKSB9XG5cbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA3NjlweCcpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrTW9kZSA/IFtzdHlsZXMuYmtnQ29udGFpbmVyLCBzdHlsZXMuZGFya01vZGVdLmpvaW4oXCIgXCIpIDogc3R5bGVzLmJrZ0NvbnRhaW5lcn0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxuICAgICAgICAgICAgICAgIDxUYWJOYXYgZGFya01vZGU9e2RhcmtNb2RlfSB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVOYXZXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8U2lkZU5hdiBkYXJrTW9kZT17ZGFya01vZGV9IC8+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzV3JhcH0gb25DbGljaz17dG9nZ2xlU2hvd1NldHRpbmdzfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvc2V0dGluZ3Muc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dTZXR0aW5ncyA/IHN0eWxlcy5zZXR0aW5nc1BhbmVsV3JhcHBlciA6IHN0eWxlcy5oaWRlU2V0dGluZ3NQYW5lbH0+XG4gICAgICAgICAgICAgICAgeyA8U2V0dGluZ3MgdG9nZ2xlRGFya01vZGU9e3RvZ2dsZURhcmtNb2RlfSBkYXJrTW9kZT17ZGFya01vZGV9IGxheW91dFNldHRpbmc9e2xheW91dFNldHRpbmd9IHNldExheW91dFNldHRpbmc9e3NldExheW91dFNldHRpbmd9IC8+IH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld0NhcmRXcmFwfSBvbkNsaWNrPXsoKSA9PiBjYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2FkZE5ld0NhcmQnLCBwYXlsb2FkOiB7IHRhYmlkOiBjdXJyZW50VGFiSWQgfSB9KX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL25ldy1jYXJkLnN2Z1wiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9IHN0eWxlPXt7Y29sdW1uQ291bnQ6IGxheW91dFNldHRpbmd9fT4gXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXSAmJiBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZF0ubWFwKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2FyZC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+IDxDYXJkIGRhcmtNb2RlPXtkYXJrTW9kZX0gY2FyZD17Y2FyZH0gbGF5b3V0U2V0dGluZz17bGF5b3V0U2V0dGluZ30gY2FyZGlkeD17aW5kZXh9IGNhcmRzU3RhdGU9e2NhcmRzU3RhdGV9IGNhcmRzRGlzcGF0Y2g9e2NhcmRzRGlzcGF0Y2h9IHRhYmlkPXtjdXJyZW50VGFiSWR9Lz4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrZXJfYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});