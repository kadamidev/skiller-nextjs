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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(tabsState.tabs), [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          name: 'Untitled'\n        }]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n}; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 0: cardsPreset })\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'addNewCard':\n      console.log(cardsState);\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = new Array();\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newCards[action.payload.tabid]), [{\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n        header: 'New Card',\n        items: [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          checked: false,\n          text: 'New Item'\n        }]\n      }]);\n      return newCards;\n\n    case 'newCardItem':\n      console.log(cardsState);\n      var updatedCards = Object.create(cardsState);\n\n      for (var i = 0; i < updatedCards[action.payload.tabid].length; i++) {\n        //finding the card idx\n        if (updatedCards[action.payload.tabid][i].id == action.payload.id) {\n          updatedCards[action.payload.tabid][i]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedCards[action.payload.tabid][i]['items']), [{\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n            checked: false,\n            text: ''\n          }]);\n          break;\n        }\n      }\n\n      return updatedCards;\n    // case 'removeCardItem':\n    //     const removedCards = {...cardsState}\n    //     for (let i = 0; i < removedCards[action.payload.tabid].length; i++) {\n    //         if (removedCards[action.payload.tabid][i].id == action.payload.cardid) {\n    //             removedCards[action.payload.tabid][i]['items'] = removedCards[action.payload.tabid][i]['items'].filter((item) => item.id != action.payload.itemid)\n    //             return removedCards\n    //         }\n    //     }\n    // case 'toggleCardItem':\n    //     const toggledCards = {...cardsState}\n    //     for (let i = 0; i < toggledCards[action.payload.tabid].length; i++) { //find correct card\n    //         if (toggledCards[action.payload.tabid][i].id == action.payload.cardid) {\n    //             let currentToggle = toggledCards[action.payload.tabid][i]['items'][action.payload.idx]['checked']\n    //             toggledCards[action.payload.tabid][i]['items'][action.payload.idx]['checked'] = !currentToggle\n    //             return toggledCards\n    //         }\n    //     }\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\nvar Tasker_app = function Tasker_app() {\n  _s();\n\n  var tabPreset = [{\n    id: 1,\n    name: 'School',\n    current: false\n  }, {\n    id: 2,\n    name: 'Work',\n    current: false\n  }, {\n    id: 3,\n    name: 'Daily',\n    current: true\n  }, {\n    id: 4,\n    name: 'Exams',\n    current: false\n  }, {\n    id: 5,\n    name: 'Gym',\n    current: false\n  }];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(tabsReducer, {\n    tabs: tabPreset,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var cardItems1 = [{\n    id: 1,\n    checked: false,\n    text: 'add cross off'\n  }, {\n    id: 2,\n    checked: true,\n    text: 'New item 2'\n  }, {\n    id: 3,\n    checked: true,\n    text: 'fix item length overflow'\n  }, {\n    id: 4,\n    checked: false,\n    text: 'fix header length overflow'\n  }];\n  var cardItems2 = [{\n    id: 5,\n    checked: true,\n    text: 'Homework'\n  }, {\n    id: 6,\n    checked: false,\n    text: 'Exercise'\n  }, {\n    id: 7,\n    checked: false,\n    text: 'Walk dog'\n  }];\n  var cardsPreset = [{\n    id: 111,\n    header: 'Shopping List',\n    items: cardItems1\n  }, {\n    id: 222,\n    header: 'Tasks',\n    items: cardItems2\n  }];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(cardsReducer, {\n    1: cardsPreset\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id;\n  var currentTabIdStr = \"\".concat(tabsState.tabs[tabsState.currentTabIdx].id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 160,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().settingsWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cards),\n          children: cardsState[currentTabIdStr] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n                card: card,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 176,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 176,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 171,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Tasker_app, \"8WZo0mXBqjmzjvdjNeuMBSUzB3M=\");\n\n_c = Tasker_app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0YWJzIiwiaWQiLCJ1dWlkdjQiLCJuYW1lIiwiY3VycmVudFRhYklkeCIsImxlbmd0aCIsImN1cnJlbnRUYWJJZCIsIm5ld0FyciIsImZpbHRlciIsInRhYiIsInBheWxvYWQiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc1JlZHVjZXIiLCJjYXJkc1N0YXRlIiwibmV3Q2FyZHMiLCJ0YWJpZCIsIkFycmF5IiwiaGVhZGVyIiwiaXRlbXMiLCJjaGVja2VkIiwidGV4dCIsInVwZGF0ZWRDYXJkcyIsIk9iamVjdCIsImNyZWF0ZSIsImkiLCJUYXNrZXJfYXBwIiwidGFiUHJlc2V0IiwiY3VycmVudCIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsImNhcmRJdGVtczEiLCJjYXJkSXRlbXMyIiwiY2FyZHNQcmVzZXQiLCJjYXJkc0Rpc3BhdGNoIiwiY3VycmVudFRhYklkU3RyIiwic3R5bGVzIiwiY2FyZCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBWUMsTUFBWixFQUF1QjtBQUN2QyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFdBQUw7QUFDSSxhQUFPO0FBQUNDLFlBQUksOEpBQU1ILFNBQVMsQ0FBQ0csSUFBaEIsSUFBc0I7QUFBRUMsWUFBRSxFQUFFQyx3Q0FBTSxFQUFaO0FBQWdCQyxjQUFJLEVBQUU7QUFBdEIsU0FBdEIsRUFBTDtBQUNDQyxxQkFBYSxFQUFFUCxTQUFTLENBQUNPO0FBRDFCLE9BQVA7O0FBR0osU0FBSyxX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QUFBQSwyQ0FBMkMsOERBQUMsb0VBQUQ7QUFBTSxvQkFBSSxFQUFFQyxJQUFaO0FBQWtCLDBCQUFVLEVBQUV2QixVQUE5QjtBQUEwQyw2QkFBYSxFQUFFb0IsYUFBekQ7QUFBd0UscUJBQUssRUFBRWhDO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTNDO0FBQUEsZUFBU21DLElBQUksQ0FBQ3hDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQTtBQUdILFdBSjhCO0FBRnZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUE4QkgsQ0FoRUQ7O0dBQU02QixVOztLQUFBQSxVO0FBa0VOLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGFza2VyX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC90YXNrZXJfYXBwLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgVGFiTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9UYWJOYXYuanN4J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4J1xuaW1wb3J0ICB7djQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcblxuY29uc3QgdGFic1JlZHVjZXIgPSAodGFic1N0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYWRkTmV3VGFiJzpcbiAgICAgICAgICAgIHJldHVybiB7dGFiczogWy4uLnRhYnNTdGF0ZS50YWJzLCB7IGlkOiB1dWlkdjQoKSwgbmFtZTogJ1VudGl0bGVkJ31dLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2RlbGV0ZVRhYic6XG4gICAgICAgICAgICBpZiAodGFic1N0YXRlLnRhYnMubGVuZ3RoIDw9IDEpICAvL2Nhbid0IGRlbGV0ZSBhIHRhYiBpZiBpdCdzIHRoZSBvbmx5IG9uZVxuICAgICAgICAgICAgICAgIHJldHVybiB7Y3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgsIHRhYnM6IHRhYnNTdGF0ZS50YWJzfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFiSWQgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWQgLy9jYXB0dXJlIGlkIG9mIGN1cnJlbnRUYWJcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRhYnNTdGF0ZS50YWJzLmZpbHRlcih0YWIgPT4gdGFiLmlkICE9IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgICAgICAgLy8gbWFpbnRhaW5pbmcgY3VycmVudCB0YWIgcG9pbnRlclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkID09IGN1cnJlbnRUYWJJZCkgeyAvL2lmIHRoZSBkZWxldGVkIHRhYiBpcyB0aGUgY3VycmVudFRhYlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRhYnM6IG5ld0FyciwgY3VycmVudFRhYklkeDogMCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pZHggPCB0YWJzU3RhdGUuY3VycmVudFRhYklkeCkgeyAvL2NoZWNrIGZvciBjdXJyZW50VGFiIHBvaW50ZXIgc2hpZnRcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCB0YWJzU3RhdGUudGFicy5sZW5ndGg7IGlkeCsrKSB7IC8vdXBkYXRlIHBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0FycltpZHhdLmlkID09IGN1cnJlbnRUYWJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRhYnM6IG5ld0FyciwgY3VycmVudFRhYklkeDogaWR4IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7IHRhYnM6IG5ld0FyciwgY3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHggfVxuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2NoYW5nZVRhYk5hbWUnOlxuICAgICAgICAgICAgY29uc3QgbmFtZUNoYW5nZWRUYWJzID0gdGFic1N0YXRlLnRhYnMubWFwKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYi5pZCA9PSBhY3Rpb24ucGF5bG9hZC50YWJJZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IHRhYi5pZCwgbmFtZTogYWN0aW9uLnBheWxvYWQubmFtZSB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhYlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7Y3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgsIHRhYnM6IG5hbWVDaGFuZ2VkVGFicyB9XG5cbiAgICAgICAgY2FzZSAnY2hhbmdlQ3VycmVudFRhYic6XG4gICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IGFjdGlvbi5wYXlsb2FkLmlkeCwgdGFiczogdGFic1N0YXRlLnRhYnN9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGhpdCcpXG4gICAgICAgICAgICByZXR1cm4gdGFic1N0YXRlXG4gICAgfVxufVxuXG4vLyBjb25zdCBbY2FyZHNTdGF0ZSwgY2FyZHNEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhcmRzUmVkdWNlciwgeyAwOiBjYXJkc1ByZXNldCB9KVxuXG5jb25zdCBjYXJkc1JlZHVjZXIgPSAoY2FyZHNTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FkZE5ld0NhcmQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZHNTdGF0ZSlcblxuICAgICAgICAgICAgY29uc3QgbmV3Q2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGlmICghbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gbmV3IEFycmF5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSA9IFsuLi5uZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0sIHtcbiAgICAgICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICAgICAgaGVhZGVyOiAnTmV3IENhcmQnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OidOZXcgSXRlbScgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICByZXR1cm4gbmV3Q2FyZHNcblxuICAgICAgICBjYXNlICduZXdDYXJkSXRlbSc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkc1N0YXRlKVxuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2FyZHMgPSBPYmplY3QuY3JlYXRlKGNhcmRzU3RhdGUpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5sZW5ndGg7IGkrKykgeyAgICAvL2ZpbmRpbmcgdGhlIGNhcmQgaWR4XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV0uaWQgPT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXSA9IFsuLi51cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OicnXG4gICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZENhcmRzXG5cbiAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAvLyBjYXNlICdyZW1vdmVDYXJkSXRlbSc6XG4gICAgICAgIC8vICAgICBjb25zdCByZW1vdmVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChyZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldLmlkID09IGFjdGlvbi5wYXlsb2FkLmNhcmRpZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddID0gcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gYWN0aW9uLnBheWxvYWQuaXRlbWlkKVxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlZENhcmRzXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vIGNhc2UgJ3RvZ2dsZUNhcmRJdGVtJzpcbiAgICAgICAgLy8gICAgIGNvbnN0IHRvZ2dsZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLmxlbmd0aDsgaSsrKSB7IC8vZmluZCBjb3JyZWN0IGNhcmRcbiAgICAgICAgLy8gICAgICAgICBpZiAodG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5jYXJkaWQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGN1cnJlbnRUb2dnbGUgPSB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ2NoZWNrZWQnXVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICAgICAgdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWydjaGVja2VkJ10gPSAhY3VycmVudFRvZ2dsZVxuXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiB0b2dnbGVkQ2FyZHNcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0JylcblxuICAgICAgICAgICAgcmV0dXJuIGNhcmRzU3RhdGVcbiAgICB9XG59XG5cbmNvbnN0IFRhc2tlcl9hcHAgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB0YWJQcmVzZXQgPSBbXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdTY2hvb2wnLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnV29yaycsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdEYWlseScsIGN1cnJlbnQ6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogJ0V4YW1zJywgY3VycmVudDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogJ0d5bScsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgXVxuXG4gICAgY29uc3QgW3RhYnNTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0YWJzUmVkdWNlciwgeyB0YWJzOiB0YWJQcmVzZXQsIGN1cnJlbnRUYWJJZHg6IDAgIH0pXG5cbiAgICBjb25zdCBjYXJkSXRlbXMxID0gW1xuICAgICAgICB7IGlkOiAxLCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ2FkZCBjcm9zcyBvZmYnfSxcbiAgICAgICAgeyBpZDogMiwgY2hlY2tlZDogdHJ1ZSwgdGV4dDogJ05ldyBpdGVtIDInfSxcbiAgICAgICAgeyBpZDogMywgY2hlY2tlZDogdHJ1ZSwgdGV4dDogJ2ZpeCBpdGVtIGxlbmd0aCBvdmVyZmxvdyd9LFxuICAgICAgICB7IGlkOiA0LCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ2ZpeCBoZWFkZXIgbGVuZ3RoIG92ZXJmbG93J30sXG4gICAgXVxuICAgIFxuICAgIGNvbnN0IGNhcmRJdGVtczIgPSBbXG4gICAgICAgIHsgaWQ6IDUsIGNoZWNrZWQ6IHRydWUsIHRleHQ6ICdIb21ld29yayd9LFxuICAgICAgICB7IGlkOiA2LCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ0V4ZXJjaXNlJ30sXG4gICAgICAgIHsgaWQ6IDcsIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OiAnV2FsayBkb2cnfSxcbiAgICBdXG5cbiAgICBjb25zdCBjYXJkc1ByZXNldCA9IFtcbiAgICAgICAgeyBpZDogMTExLCBoZWFkZXI6ICdTaG9wcGluZyBMaXN0JywgaXRlbXM6IGNhcmRJdGVtczF9LFxuICAgICAgICB7IGlkOiAyMjIsIGhlYWRlcjogJ1Rhc2tzJywgaXRlbXM6IGNhcmRJdGVtczJ9LFxuICAgIF1cblxuXG4gICAgY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsgMTogY2FyZHNQcmVzZXQgfSlcbiAgICBjb25zdCBjdXJyZW50VGFiSWQgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWRcbiAgICBjb25zdCBjdXJyZW50VGFiSWRTdHIgPSBgJHt0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWR9YFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMudGFic30+XG4gICAgICAgICAgICAgICAgPFRhYk5hdiB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc1dyYXB9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9zZXR0aW5ncy5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld0NhcmRXcmFwfSBvbkNsaWNrPXsoKSA9PiBjYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2FkZE5ld0NhcmQnLCBwYXlsb2FkOiB7IHRhYmlkOiBjdXJyZW50VGFiSWQgfSB9KX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL25ldy1jYXJkLnN2Z1wiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZFN0cl0gJiYgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRdLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhcmQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PiA8Q2FyZCBjYXJkPXtjYXJkfSBjYXJkc1N0YXRlPXtjYXJkc1N0YXRlfSBjYXJkc0Rpc3BhdGNoPXtjYXJkc0Rpc3BhdGNofSB0YWJpZD17Y3VycmVudFRhYklkfS8+IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrZXJfYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});