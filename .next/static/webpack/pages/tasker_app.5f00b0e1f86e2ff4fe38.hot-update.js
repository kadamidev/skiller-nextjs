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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var _components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/Settings.jsx */ \"./components/tasker_app/Settings.jsx\");\n/* harmony import */ var _reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/tabsReducer */ \"./reducers/tabsReducer.js\");\n/* harmony import */ var _reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/cardsReducer */ \"./reducers/cardsReducer.js\");\n/* harmony import */ var _components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tasker_app/SideNav */ \"./components/tasker_app/SideNav.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Tasker_app = function Tasker_app(_ref) {\n  _s();\n\n  var allTabsData = _ref.allTabsData,\n      allCardsData = _ref.allCardsData;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_tabsReducer__WEBPACK_IMPORTED_MODULE_6__.tabsReducer, {\n    tabs: allTabsData,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_cardsReducer__WEBPACK_IMPORTED_MODULE_7__.cardsReducer, {}),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1]; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 1: allCardsData })\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //setting states from localStore\n    var tabsData = JSON.parse(localStorage.getItem('tabs'));\n    var tabIdxData = JSON.parse(localStorage.getItem('tabsIdx'));\n    var cardsData = JSON.parse(localStorage.getItem('cards')); // if (Object.keys(cardsData).length == 0) cardsData = allCardsData\n\n    if (tabsData && cardsData) {\n      if (Object.keys(cardsData).length == 0) cardsData = {\n        allCardsData: allCardsData\n      }; // console.log('empty')\n\n      dispatch({\n        type: 'setTabs',\n        payload: {\n          tabs: tabsData,\n          currentTabIdx: tabIdxData\n        }\n      });\n      cardsDispatch({\n        type: 'setCards',\n        payload: {\n          cards: cardsData\n        }\n      }); //fix card persistence \n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring tabs data\n    localStorage.setItem('tabs', JSON.stringify(tabsState.tabs));\n    localStorage.setItem('tabsIdx', tabsState.currentTabIdx);\n  }, [tabsState]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //localstoring card data\n    localStorage.setItem('cards', JSON.stringify(cardsState));\n  }, [cardsState]);\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //ui state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showSettings = _useState[0],\n      setShowSettings = _useState[1];\n\n  var toggleShowSettings = function toggleShowSettings() {\n    setShowSettings(!showSettings);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2),\n      layoutSetting = _useState2[0],\n      setLayoutSetting = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      darkMode = _useState3[0],\n      setDarkMode = _useState3[1];\n\n  var toggleDarkMode = function toggleDarkMode() {\n    setDarkMode(!darkMode);\n  };\n\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)('(min-width: 769px');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: darkMode ? [(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bkgContainer), (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().darkMode)].join(\" \") : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bkgContainer)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          darkMode: darkMode,\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sideNavWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_SideNav__WEBPACK_IMPORTED_MODULE_8__.default, {\n          darkMode: darkMode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().settingsWrap),\n        onClick: toggleShowSettings,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: showSettings ? (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().settingsPanelWrapper) : (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().hideSettingsPanel),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Settings_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          toggleDarkMode: toggleDarkMode,\n          darkMode: darkMode,\n          layoutSetting: layoutSetting,\n          setLayoutSetting: setLayoutSetting\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 19\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().cards),\n          style: {\n            columnCount: layoutSetting\n          },\n          children: cardsState[currentTabId] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n                darkMode: darkMode,\n                card: card,\n                layoutSetting: layoutSetting,\n                cardidx: index,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 108,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tasker_app, \"ZgMAtQBgPMyLwmlYiEqghRjZ40A=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery];\n});\n\n_c = Tasker_app;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJUYXNrZXJfYXBwIiwiYWxsVGFic0RhdGEiLCJhbGxDYXJkc0RhdGEiLCJ1c2VSZWR1Y2VyIiwidGFic1JlZHVjZXIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImNhcmRzRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0YWJzRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0YWJJZHhEYXRhIiwiY2FyZHNEYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInR5cGUiLCJwYXlsb2FkIiwiY2FyZHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY3VycmVudFRhYklkIiwiaWQiLCJ1c2VTdGF0ZSIsInNob3dTZXR0aW5ncyIsInNldFNob3dTZXR0aW5ncyIsInRvZ2dsZVNob3dTZXR0aW5ncyIsImxheW91dFNldHRpbmciLCJzZXRMYXlvdXRTZXR0aW5nIiwiZGFya01vZGUiLCJzZXREYXJrTW9kZSIsInRvZ2dsZURhcmtNb2RlIiwiaXNEZXNrdG9wIiwidXNlTWVkaWFRdWVyeSIsInN0eWxlcyIsImpvaW4iLCJia2dDb250YWluZXIiLCJ0YWJpZCIsImNvbHVtbkNvdW50IiwibWFwIiwiY2FyZCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFrQkEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsV0FBZ0MsUUFBaENBLFdBQWdDO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxvQkFDcEJDLGlEQUFVLENBQUNDLDhEQUFELEVBQWM7QUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEE7QUFBQSxrQkFESjtBQXNDSCxDQXZGRDs7R0FBTTdCLFU7VUE4Q2dCd0MsNkQ7OztLQTlDaEJ4QyxVOztBQXlGTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rhc2tlcl9hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAvdGFza2VyX2FwcC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFRhYk5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9DYXJkLmpzeCdcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvU2V0dGluZ3MuanN4J1xuaW1wb3J0IHsgZ2V0VGFic0RhdGEgfSBmcm9tICcuLi9saWIvdGFicyc7XG5pbXBvcnQgeyBnZXRDYXJkc0RhdGEgfSBmcm9tICcuLi9saWIvY2FyZHMnO1xuaW1wb3J0IHsgdGFic1JlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy90YWJzUmVkdWNlcic7XG5pbXBvcnQgeyBjYXJkc1JlZHVjZXIgfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJkc1JlZHVjZXInO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1NpZGVOYXYnO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJy4uL2xpYi91c2VNZWRpYVF1ZXJ5J1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IGFsbFRhYnNEYXRhID0gZ2V0VGFic0RhdGEoKVxuICAgIGNvbnN0IGFsbENhcmRzRGF0YSA9IGdldENhcmRzRGF0YSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYWxsVGFic0RhdGEsXG4gICAgICAgIGFsbENhcmRzRGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuY29uc3QgVGFza2VyX2FwcCA9ICh7IGFsbFRhYnNEYXRhLCBhbGxDYXJkc0RhdGEgfSkgPT4ge1xuICAgIGNvbnN0IFt0YWJzU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodGFic1JlZHVjZXIsIHsgdGFiczogYWxsVGFic0RhdGEsIGN1cnJlbnRUYWJJZHg6IDAgIH0pXG4gICAgY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHt9KVxuICAgIC8vIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7IDE6IGFsbENhcmRzRGF0YSB9KVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL3NldHRpbmcgc3RhdGVzIGZyb20gbG9jYWxTdG9yZVxuICAgICAgICBjb25zdCB0YWJzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYnMnKSlcbiAgICAgICAgY29uc3QgdGFiSWR4RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYnNJZHgnKSlcbiAgICAgICAgbGV0IGNhcmRzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRzJykpXG5cbiAgICAgICAgLy8gaWYgKE9iamVjdC5rZXlzKGNhcmRzRGF0YSkubGVuZ3RoID09IDApIGNhcmRzRGF0YSA9IGFsbENhcmRzRGF0YVxuXG4gICAgICAgIGlmICh0YWJzRGF0YSAmJiBjYXJkc0RhdGEpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjYXJkc0RhdGEpLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIGNhcmRzRGF0YSA9IHthbGxDYXJkc0RhdGF9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VtcHR5JylcblxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdzZXRUYWJzJywgcGF5bG9hZDoge3RhYnM6IHRhYnNEYXRhLCBjdXJyZW50VGFiSWR4OiB0YWJJZHhEYXRhfX0pXG4gICAgICAgICAgICBjYXJkc0Rpc3BhdGNoKHt0eXBlOiAnc2V0Q2FyZHMnLCBwYXlsb2FkOiB7Y2FyZHM6IGNhcmRzRGF0YX19KSAvL2ZpeCBjYXJkIHBlcnNpc3RlbmNlIFxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy9sb2NhbHN0b3JpbmcgdGFicyBkYXRhXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJzJywgSlNPTi5zdHJpbmdpZnkodGFic1N0YXRlLnRhYnMpKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFic0lkeCcsIHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4KVxuXG4gICAgfSwgW3RhYnNTdGF0ZV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL2xvY2Fsc3RvcmluZyBjYXJkIGRhdGFcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcmRzJywgSlNPTi5zdHJpbmdpZnkoY2FyZHNTdGF0ZSkpXG4gICAgfSwgW2NhcmRzU3RhdGVdKVxuICAgIFxuXG4gICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkXG5cblxuXG4gICAgLy91aSBzdGF0ZVxuICAgIGNvbnN0IFtzaG93U2V0dGluZ3MsIHNldFNob3dTZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB0b2dnbGVTaG93U2V0dGluZ3MgPSAoKSA9PiB7IHNldFNob3dTZXR0aW5ncyghc2hvd1NldHRpbmdzKSB9XG4gICAgY29uc3QgW2xheW91dFNldHRpbmcsIHNldExheW91dFNldHRpbmddID0gdXNlU3RhdGUoMilcblxuICAgIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7IHNldERhcmtNb2RlKCFkYXJrTW9kZSkgfVxuXG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDogNzY5cHgnKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFya01vZGUgPyBbc3R5bGVzLmJrZ0NvbnRhaW5lciwgc3R5bGVzLmRhcmtNb2RlXS5qb2luKFwiIFwiKSA6IHN0eWxlcy5ia2dDb250YWluZXJ9PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzfT5cbiAgICAgICAgICAgICAgICA8VGFiTmF2IGRhcmtNb2RlPXtkYXJrTW9kZX0gdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlTmF2V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFNpZGVOYXYgZGFya01vZGU9e2RhcmtNb2RlfSAvPlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc1dyYXB9IG9uQ2xpY2s9e3RvZ2dsZVNob3dTZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3NldHRpbmdzLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U2V0dGluZ3MgPyBzdHlsZXMuc2V0dGluZ3NQYW5lbFdyYXBwZXIgOiBzdHlsZXMuaGlkZVNldHRpbmdzUGFuZWx9PlxuICAgICAgICAgICAgICAgIHsgPFNldHRpbmdzIHRvZ2dsZURhcmtNb2RlPXt0b2dnbGVEYXJrTW9kZX0gZGFya01vZGU9e2RhcmtNb2RlfSBsYXlvdXRTZXR0aW5nPXtsYXlvdXRTZXR0aW5nfSBzZXRMYXlvdXRTZXR0aW5nPXtzZXRMYXlvdXRTZXR0aW5nfSAvPiB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDYXJkV3JhcH0gb25DbGljaz17KCkgPT4gY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdhZGROZXdDYXJkJywgcGF5bG9hZDogeyB0YWJpZDogY3VycmVudFRhYklkIH0gfSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9uZXctY2FyZC5zdmdcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfSBzdHlsZT17e2NvbHVtbkNvdW50OiBsYXlvdXRTZXR0aW5nfX0+IFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZF0gJiYgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRdLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhcmQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PiA8Q2FyZCBkYXJrTW9kZT17ZGFya01vZGV9IGNhcmQ9e2NhcmR9IGxheW91dFNldHRpbmc9e2xheW91dFNldHRpbmd9IGNhcmRpZHg9e2luZGV4fSBjYXJkc1N0YXRlPXtjYXJkc1N0YXRlfSBjYXJkc0Rpc3BhdGNoPXtjYXJkc0Rpc3BhdGNofSB0YWJpZD17Y3VycmVudFRhYklkfS8+IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza2VyX2FwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});