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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(tabsState.tabs), [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          name: 'Untitled'\n        }]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n}; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 0: cardsPreset })\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'addNewCard':\n      console.log(cardsState);\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = new Array();\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newCards[action.payload.tabid]), [{\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n        header: 'New Card',\n        items: [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          checked: false,\n          text: 'New Item'\n        }]\n      }]);\n      return newCards;\n\n    case 'newCardItem':\n      console.log(cardsState);\n\n      var updatedCards = _objectSpread({}, cardsState);\n\n      for (var i = 0; i < updatedCards[action.payload.tabid].length; i++) {\n        //finding the card idx\n        if (updatedCards[action.payload.tabid][i].id == action.payload.id) {\n          updatedCards[action.payload.tabid][i]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedCards[action.payload.tabid][i]['items']), [{\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n            checked: false,\n            text: ''\n          }]);\n          break;\n        }\n      }\n\n      return updatedCards;\n    // case 'removeCardItem':\n    //     const removedCards = {...cardsState}\n    //     for (let i = 0; i < removedCards[action.payload.tabid].length; i++) {\n    //         if (removedCards[action.payload.tabid][i].id == action.payload.cardid) {\n    //             removedCards[action.payload.tabid][i]['items'] = removedCards[action.payload.tabid][i]['items'].filter((item) => item.id != action.payload.itemid)\n    //             return removedCards\n    //         }\n    //     }\n    // case 'toggleCardItem':\n    //     const toggledCards = {...cardsState}\n    //     for (let i = 0; i < toggledCards[action.payload.tabid].length; i++) { //find correct card\n    //         if (toggledCards[action.payload.tabid][i].id == action.payload.cardid) {\n    //             let currentToggle = toggledCards[action.payload.tabid][i]['items'][action.payload.idx]['checked']\n    //             toggledCards[action.payload.tabid][i]['items'][action.payload.idx]['checked'] = !currentToggle\n    //             return toggledCards\n    //         }\n    //     }\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\nvar Tasker_app = function Tasker_app() {\n  _s();\n\n  var tabPreset = [{\n    id: 1,\n    name: 'School',\n    current: false\n  }, {\n    id: 2,\n    name: 'Work',\n    current: false\n  }, {\n    id: 3,\n    name: 'Daily',\n    current: true\n  }, {\n    id: 4,\n    name: 'Exams',\n    current: false\n  }, {\n    id: 5,\n    name: 'Gym',\n    current: false\n  }];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(tabsReducer, {\n    tabs: tabPreset,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var cardItems1 = [{\n    id: 1,\n    checked: false,\n    text: 'add cross off'\n  }, {\n    id: 2,\n    checked: true,\n    text: 'New item 2'\n  }, {\n    id: 3,\n    checked: true,\n    text: 'fix item length overflow'\n  }, {\n    id: 4,\n    checked: false,\n    text: 'fix header length overflow'\n  }];\n  var cardItems2 = [{\n    id: 5,\n    checked: true,\n    text: 'Homework'\n  }, {\n    id: 6,\n    checked: false,\n    text: 'Exercise'\n  }, {\n    id: 7,\n    checked: false,\n    text: 'Walk dog'\n  }];\n  var cardsPreset = [{\n    id: 111,\n    header: 'Shopping List',\n    items: cardItems1\n  }, {\n    id: 222,\n    header: 'Tasks',\n    items: cardItems2\n  }];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(cardsReducer, {\n    1: cardsPreset\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id;\n  var currentTabIdStr = \"\".concat(tabsState.tabs[tabsState.currentTabIdx].id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 161,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().settingsWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 165,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 164,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 169,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cards),\n          children: cardsState[currentTabIdStr] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n                card: card,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 177,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 177,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 173,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 172,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Tasker_app, \"8WZo0mXBqjmzjvdjNeuMBSUzB3M=\");\n\n_c = Tasker_app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0YWJzIiwiaWQiLCJ1dWlkdjQiLCJuYW1lIiwiY3VycmVudFRhYklkeCIsImxlbmd0aCIsImN1cnJlbnRUYWJJZCIsIm5ld0FyciIsImZpbHRlciIsInRhYiIsInBheWxvYWQiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc1JlZHVjZXIiLCJjYXJkc1N0YXRlIiwibmV3Q2FyZHMiLCJ0YWJpZCIsIkFycmF5IiwiaGVhZGVyIiwiaXRlbXMiLCJjaGVja2VkIiwidGV4dCIsInVwZGF0ZWRDYXJkcyIsImkiLCJUYXNrZXJfYXBwIiwidGFiUHJlc2V0IiwiY3VycmVudCIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsImNhcmRJdGVtczEiLCJjYXJkSXRlbXMyIiwiY2FyZHNQcmVzZXQiLCJjYXJkc0Rpc3BhdGNoIiwiY3VycmVudFRhYklkU3RyIiwic3R5bGVzIiwiY2FyZCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBWUMsTUFBWixFQUF1QjtBQUN2QyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFdBQUw7QUFDSSxhQUFPO0FBQUNDLFlBQUksOEpBQU1ILFNBQVMsQ0FBQ0csSUFBaEIsSUFBc0I7QUFBRUMsWUFBRSxFQUFFQyx3Q0FBTSxFQUFaO0FBQWdCQyxjQUFJLEVBQUU7QUFBdEIsU0FBdEIsRUFBTDtBQUNDQyxxQkFBYSxFQUFFUCxTQUFTLENBQUNPO0FBRDFCLE9BQVA7O0FBR0osU0FBSyxXQUFMO0FBQ0ksVUFBSVAsU0FB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QUFrQiwwQkFBVSxFQUFFckIsVUFBOUI7QUFBMEMsNkJBQWEsRUFBRWtCLGFBQXpEO0FBQXdFLHFCQUFLLEVBQUU5QjtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUEzQztBQUFBLGVBQVNpQyxJQUFJLENBQUN0QyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREE7QUFHSCxXQUo4QjtBQUZ2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBOEJILENBaEVEOztHQUFNMkIsVTs7S0FBQUEsVTtBQWtFTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rhc2tlcl9hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAvdGFza2VyX2FwcC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFRhYk5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9DYXJkLmpzeCdcbmltcG9ydCAge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmNvbnN0IHRhYnNSZWR1Y2VyID0gKHRhYnNTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FkZE5ld1RhYic6XG4gICAgICAgICAgICByZXR1cm4ge3RhYnM6IFsuLi50YWJzU3RhdGUudGFicywgeyBpZDogdXVpZHY0KCksIG5hbWU6ICdVbnRpdGxlZCd9XSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHh9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdkZWxldGVUYWInOlxuICAgICAgICAgICAgaWYgKHRhYnNTdGF0ZS50YWJzLmxlbmd0aCA8PSAxKSAgLy9jYW4ndCBkZWxldGUgYSB0YWIgaWYgaXQncyB0aGUgb25seSBvbmVcbiAgICAgICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4LCB0YWJzOiB0YWJzU3RhdGUudGFic31cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkIC8vY2FwdHVyZSBpZCBvZiBjdXJyZW50VGFiXG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0YWJzU3RhdGUudGFicy5maWx0ZXIodGFiID0+IHRhYi5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgICAgIC8vIG1haW50YWluaW5nIGN1cnJlbnQgdGFiIHBvaW50ZXJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pZCA9PSBjdXJyZW50VGFiSWQpIHsgLy9pZiB0aGUgZGVsZXRlZCB0YWIgaXMgdGhlIGN1cnJlbnRUYWJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IDAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWR4IDwgdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgpIHsgLy9jaGVjayBmb3IgY3VycmVudFRhYiBwb2ludGVyIHNoaWZ0XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgdGFic1N0YXRlLnRhYnMubGVuZ3RoOyBpZHgrKykgeyAvL3VwZGF0ZSBwb2ludGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdBcnJbaWR4XS5pZCA9PSBjdXJyZW50VGFiSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IGlkeCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4IH1cbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdjaGFuZ2VUYWJOYW1lJzpcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDaGFuZ2VkVGFicyA9IHRhYnNTdGF0ZS50YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWIuaWQgPT0gYWN0aW9uLnBheWxvYWQudGFiSWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiB0YWIuaWQsIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWUgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YWJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4LCB0YWJzOiBuYW1lQ2hhbmdlZFRhYnMgfVxuXG4gICAgICAgIGNhc2UgJ2NoYW5nZUN1cnJlbnRUYWInOlxuICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiBhY3Rpb24ucGF5bG9hZC5pZHgsIHRhYnM6IHRhYnNTdGF0ZS50YWJzfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBoaXQnKVxuICAgICAgICAgICAgcmV0dXJuIHRhYnNTdGF0ZVxuICAgIH1cbn1cblxuLy8gY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsgMDogY2FyZHNQcmVzZXQgfSlcblxuY29uc3QgY2FyZHNSZWR1Y2VyID0gKGNhcmRzU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdhZGROZXdDYXJkJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRzU3RhdGUpXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0NhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBpZiAoIW5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSkge1xuICAgICAgICAgICAgICAgIG5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSA9IG5ldyBBcnJheVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0gPSBbLi4ubmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLCB7XG4gICAgICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgICAgIGhlYWRlcjogJ05ldyBDYXJkJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDonTmV3IEl0ZW0nIFxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgcmV0dXJuIG5ld0NhcmRzXG5cbiAgICAgICAgY2FzZSAnbmV3Q2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZHNTdGF0ZSlcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5sZW5ndGg7IGkrKykgeyAgICAvL2ZpbmRpbmcgdGhlIGNhcmQgaWR4XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV0uaWQgPT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXSA9IFsuLi51cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddLFxuICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDonJ1xuICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRDYXJkc1xuXG4gICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgLy8gY2FzZSAncmVtb3ZlQ2FyZEl0ZW0nOlxuICAgICAgICAvLyAgICAgY29uc3QgcmVtb3ZlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAocmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5jYXJkaWQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXSA9IHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IGFjdGlvbi5wYXlsb2FkLml0ZW1pZClcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWRDYXJkc1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyBjYXNlICd0b2dnbGVDYXJkSXRlbSc6XG4gICAgICAgIC8vICAgICBjb25zdCB0b2dnbGVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5sZW5ndGg7IGkrKykgeyAvL2ZpbmQgY29ycmVjdCBjYXJkXG4gICAgICAgIC8vICAgICAgICAgaWYgKHRvZ2dsZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV0uaWQgPT0gYWN0aW9uLnBheWxvYWQuY2FyZGlkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBjdXJyZW50VG9nZ2xlID0gdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWydjaGVja2VkJ11cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgICAgIHRvZ2dsZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ11bYWN0aW9uLnBheWxvYWQuaWR4XVsnY2hlY2tlZCddID0gIWN1cnJlbnRUb2dnbGVcblxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gdG9nZ2xlZENhcmRzXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcpXG5cbiAgICAgICAgICAgIHJldHVybiBjYXJkc1N0YXRlXG4gICAgfVxufVxuXG5jb25zdCBUYXNrZXJfYXBwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdGFiUHJlc2V0ID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnU2Nob29sJywgY3VycmVudDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogJ1dvcmsnLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiAnRGFpbHknLCBjdXJyZW50OiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdFeGFtcycsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IDUsIG5hbWU6ICdHeW0nLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgIF1cblxuICAgIGNvbnN0IFt0YWJzU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodGFic1JlZHVjZXIsIHsgdGFiczogdGFiUHJlc2V0LCBjdXJyZW50VGFiSWR4OiAwICB9KVxuXG4gICAgY29uc3QgY2FyZEl0ZW1zMSA9IFtcbiAgICAgICAgeyBpZDogMSwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdhZGQgY3Jvc3Mgb2ZmJ30sXG4gICAgICAgIHsgaWQ6IDIsIGNoZWNrZWQ6IHRydWUsIHRleHQ6ICdOZXcgaXRlbSAyJ30sXG4gICAgICAgIHsgaWQ6IDMsIGNoZWNrZWQ6IHRydWUsIHRleHQ6ICdmaXggaXRlbSBsZW5ndGggb3ZlcmZsb3cnfSxcbiAgICAgICAgeyBpZDogNCwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdmaXggaGVhZGVyIGxlbmd0aCBvdmVyZmxvdyd9LFxuICAgIF1cbiAgICBcbiAgICBjb25zdCBjYXJkSXRlbXMyID0gW1xuICAgICAgICB7IGlkOiA1LCBjaGVja2VkOiB0cnVlLCB0ZXh0OiAnSG9tZXdvcmsnfSxcbiAgICAgICAgeyBpZDogNiwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdFeGVyY2lzZSd9LFxuICAgICAgICB7IGlkOiA3LCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ1dhbGsgZG9nJ30sXG4gICAgXVxuXG4gICAgY29uc3QgY2FyZHNQcmVzZXQgPSBbXG4gICAgICAgIHsgaWQ6IDExMSwgaGVhZGVyOiAnU2hvcHBpbmcgTGlzdCcsIGl0ZW1zOiBjYXJkSXRlbXMxfSxcbiAgICAgICAgeyBpZDogMjIyLCBoZWFkZXI6ICdUYXNrcycsIGl0ZW1zOiBjYXJkSXRlbXMyfSxcbiAgICBdXG5cblxuICAgIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7IDE6IGNhcmRzUHJlc2V0IH0pXG4gICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkXG4gICAgY29uc3QgY3VycmVudFRhYklkU3RyID0gYCR7dGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkfWBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxuICAgICAgICAgICAgICAgIDxUYWJOYXYgdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NXcmFwfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvc2V0dGluZ3Muc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDYXJkV3JhcH0gb25DbGljaz17KCkgPT4gY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdhZGROZXdDYXJkJywgcGF5bG9hZDogeyB0YWJpZDogY3VycmVudFRhYklkIH0gfSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9uZXctY2FyZC5zdmdcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRTdHJdICYmIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXS5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXJkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT4gPENhcmQgY2FyZD17Y2FyZH0gY2FyZHNTdGF0ZT17Y2FyZHNTdGF0ZX0gY2FyZHNEaXNwYXRjaD17Y2FyZHNEaXNwYXRjaH0gdGFiaWQ9e2N1cnJlbnRUYWJJZH0vPiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza2VyX2FwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});