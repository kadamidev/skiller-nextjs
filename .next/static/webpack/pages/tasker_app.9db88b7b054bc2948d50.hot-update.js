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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(tabsState.tabs), [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          name: 'Untitled'\n        }]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n}; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 0: cardsPreset })\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'addNewCard':\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = new Array();\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newCards[action.payload.tabid]), [{\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n        header: 'New Card',\n        items: [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          checked: false,\n          text: 'New Item'\n        }]\n      }]);\n      return newCards;\n\n    case 'newCardItem':\n      var updatedCards = _objectSpread({}, cardsState);\n\n      console.log(updatedCards);\n\n      for (var i = 0; i < updatedCards[action.payload.tabid].length; i++) {\n        //finding the card idx\n        if (updatedCards[action.payload.tabid][i].id == action.payload.id) {\n          updatedCards[action.payload.tabid][i]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedCards[action.payload.tabid][i]['items']), [{\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n            checked: false,\n            text: ''\n          }]);\n          console.log(updatedCards);\n          return updatedCards;\n        }\n      }\n\n    // case 'removeCardItem':\n    //     const removedCards = {...cardsState}\n    //     for (let i = 0; i < removedCards[action.payload.tabid].length; i++) {\n    //         if (removedCards[action.payload.tabid][i].id == action.payload.cardid) {\n    //             removedCards[action.payload.tabid][i]['items'] = removedCards[action.payload.tabid][i]['items'].filter((item) => item.id != action.payload.itemid)\n    //             return removedCards\n    //         }\n    //     }\n    // case 'toggleCardItem':\n    //     const toggledCards = {...cardsState}\n    //     for (let i = 0; i < toggledCards[action.payload.tabid].length; i++) { //find correct card\n    //         if (toggledCards[action.payload.tabid][i].id == action.payload.cardid) {\n    //             let currentToggle = toggledCards[action.payload.tabid][i]['items'][action.payload.idx]['checked']\n    //             toggledCards[action.payload.tabid][i]['items'][action.payload.idx]['checked'] = !currentToggle\n    //             return toggledCards\n    //         }\n    //     }\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\nvar Tasker_app = function Tasker_app() {\n  _s();\n\n  var tabPreset = [{\n    id: 1,\n    name: 'School',\n    current: false\n  }, {\n    id: 2,\n    name: 'Work',\n    current: false\n  }, {\n    id: 3,\n    name: 'Daily',\n    current: true\n  }, {\n    id: 4,\n    name: 'Exams',\n    current: false\n  }, {\n    id: 5,\n    name: 'Gym',\n    current: false\n  }];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(tabsReducer, {\n    tabs: tabPreset,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var cardItems1 = [{\n    id: 1,\n    checked: false,\n    text: 'add cross off'\n  }, {\n    id: 2,\n    checked: true,\n    text: 'New item 2'\n  }, {\n    id: 3,\n    checked: true,\n    text: 'fix item length overflow'\n  }, {\n    id: 4,\n    checked: false,\n    text: 'fix header length overflow'\n  }];\n  var cardItems2 = [{\n    id: 5,\n    checked: true,\n    text: 'Homework'\n  }, {\n    id: 6,\n    checked: false,\n    text: 'Exercise'\n  }, {\n    id: 7,\n    checked: false,\n    text: 'Walk dog'\n  }];\n  var cardsPreset = [{\n    id: 111,\n    header: 'Shopping List',\n    items: cardItems1\n  }, {\n    id: 222,\n    header: 'Tasks',\n    items: cardItems2\n  }];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(cardsReducer, {\n    1: cardsPreset\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id;\n  var currentTabIdStr = \"\".concat(tabsState.tabs[tabsState.currentTabIdx].id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().settingsWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cards),\n          children: cardsState[currentTabIdStr] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n                card: card,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 171,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 171,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Tasker_app, \"8WZo0mXBqjmzjvdjNeuMBSUzB3M=\");\n\n_c = Tasker_app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0YWJzIiwiaWQiLCJ1dWlkdjQiLCJuYW1lIiwiY3VycmVudFRhYklkeCIsImxlbmd0aCIsImN1cnJlbnRUYWJJZCIsIm5ld0FyciIsImZpbHRlciIsInRhYiIsInBheWxvYWQiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc1JlZHVjZXIiLCJjYXJkc1N0YXRlIiwibmV3Q2FyZHMiLCJ0YWJpZCIsIkFycmF5IiwiaGVhZGVyIiwiaXRlbXMiLCJjaGVja2VkIiwidGV4dCIsInVwZGF0ZWRDYXJkcyIsImkiLCJUYXNrZXJfYXBwIiwidGFiUHJlc2V0IiwiY3VycmVudCIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsImNhcmRJdGVtczEiLCJjYXJkSXRlbXMyIiwiY2FyZHNQcmVzZXQiLCJjYXJkc0Rpc3BhdGNoIiwiY3VycmVudFRhYklkU3RyIiwic3R5bGVzIiwiY2FyZCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBWUMsTUFBWixFQUF1QjtBQUN2QyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFdBQUw7QUFDSSxhQUFPO0FBQUNDLFlBQUksOEpBQU1ILFNBQVMsQ0FBQ0csSUFBaEIsSUFBc0I7QUFBRUMsWUFBRSxFQUFFQyx3Q0FBTSxFQUFaO0FBQWdCQyxjQUFJLEVBQUU7QUFBdEIsU0FBdEIsRUFBTDtBQUNDQyxxQkFBYSxFQUFFUCxTQUFTLENBQUNPO0FBRDFCLE9BQVA7O0FBR0osU0FBSyxXQUFMO0FBQ0ksVUFBSVAsU0FB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QVo7QUFBa0IsMEJBQVUsRUFBRXJCLFVBQTlCO0FBQTBDLDZCQUFhLEVBQUVrQixhQUF6RDtBQUF3RSxxQkFBSyxFQUFFOUI7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBM0M7QUFBQSxlQUFTaUMsSUFBSSxDQUFDdEMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBR0gsV0FKOEI7QUFGdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQThCSCxDQWhFRDs7R0FBTTJCLFU7O0tBQUFBLFU7QUFrRU4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy90YXNrZXJfYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwL3Rhc2tlcl9hcHAubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBUYWJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3gnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvQ2FyZC5qc3gnXG5pbXBvcnQgIHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5jb25zdCB0YWJzUmVkdWNlciA9ICh0YWJzU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdhZGROZXdUYWInOlxuICAgICAgICAgICAgcmV0dXJuIHt0YWJzOiBbLi4udGFic1N0YXRlLnRhYnMsIHsgaWQ6IHV1aWR2NCgpLCBuYW1lOiAnVW50aXRsZWQnfV0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4fVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnZGVsZXRlVGFiJzpcbiAgICAgICAgICAgIGlmICh0YWJzU3RhdGUudGFicy5sZW5ndGggPD0gMSkgIC8vY2FuJ3QgZGVsZXRlIGEgdGFiIGlmIGl0J3MgdGhlIG9ubHkgb25lXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCwgdGFiczogdGFic1N0YXRlLnRhYnN9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYWJJZCA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZCAvL2NhcHR1cmUgaWQgb2YgY3VycmVudFRhYlxuICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGFic1N0YXRlLnRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuaWQgIT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICAgICAgICAvLyBtYWludGFpbmluZyBjdXJyZW50IHRhYiBwb2ludGVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWQgPT0gY3VycmVudFRhYklkKSB7IC8vaWYgdGhlIGRlbGV0ZWQgdGFiIGlzIHRoZSBjdXJyZW50VGFiXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiAwIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkeCA8IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4KSB7IC8vY2hlY2sgZm9yIGN1cnJlbnRUYWIgcG9pbnRlciBzaGlmdFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHRhYnNTdGF0ZS50YWJzLmxlbmd0aDsgaWR4KyspIHsgLy91cGRhdGUgcG9pbnRlclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3QXJyW2lkeF0uaWQgPT0gY3VycmVudFRhYklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiBpZHggfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCB9XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnY2hhbmdlVGFiTmFtZSc6XG4gICAgICAgICAgICBjb25zdCBuYW1lQ2hhbmdlZFRhYnMgPSB0YWJzU3RhdGUudGFicy5tYXAodGFiID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFiLmlkID09IGFjdGlvbi5wYXlsb2FkLnRhYklkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogdGFiLmlkLCBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCwgdGFiczogbmFtZUNoYW5nZWRUYWJzIH1cblxuICAgICAgICBjYXNlICdjaGFuZ2VDdXJyZW50VGFiJzpcbiAgICAgICAgICAgIHJldHVybiB7Y3VycmVudFRhYklkeDogYWN0aW9uLnBheWxvYWQuaWR4LCB0YWJzOiB0YWJzU3RhdGUudGFic31cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgaGl0JylcbiAgICAgICAgICAgIHJldHVybiB0YWJzU3RhdGVcbiAgICB9XG59XG5cbi8vIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7IDA6IGNhcmRzUHJlc2V0IH0pXG5cbmNvbnN0IGNhcmRzUmVkdWNlciA9IChjYXJkc1N0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYWRkTmV3Q2FyZCc6XG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgaWYgKCFuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0pIHtcbiAgICAgICAgICAgICAgICBuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0gPSBuZXcgQXJyYXlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gWy4uLm5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSwge1xuICAgICAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6ICdOZXcgQ2FyZCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6J05ldyBJdGVtJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIHJldHVybiBuZXdDYXJkc1xuXG4gICAgICAgIGNhc2UgJ25ld0NhcmRJdGVtJzpcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlZENhcmRzKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0ubGVuZ3RoOyBpKyspIHsgICAgLy9maW5kaW5nIHRoZSBjYXJkIGlkeFxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldLmlkID09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10gPSBbLi4udXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXSwgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDonJ1xuICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRDYXJkcylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRDYXJkc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIC8vIGNhc2UgJ3JlbW92ZUNhcmRJdGVtJzpcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlbW92ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV0uaWQgPT0gYWN0aW9uLnBheWxvYWQuY2FyZGlkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10gPSByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pdGVtaWQpXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiByZW1vdmVkQ2FyZHNcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gY2FzZSAndG9nZ2xlQ2FyZEl0ZW0nOlxuICAgICAgICAvLyAgICAgY29uc3QgdG9nZ2xlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZ2dsZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0ubGVuZ3RoOyBpKyspIHsgLy9maW5kIGNvcnJlY3QgY2FyZFxuICAgICAgICAvLyAgICAgICAgIGlmICh0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldLmlkID09IGFjdGlvbi5wYXlsb2FkLmNhcmRpZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgY3VycmVudFRvZ2dsZSA9IHRvZ2dsZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ11bYWN0aW9uLnBheWxvYWQuaWR4XVsnY2hlY2tlZCddXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgICAgICB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ2NoZWNrZWQnXSA9ICFjdXJyZW50VG9nZ2xlXG5cbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZWRDYXJkc1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnKVxuXG4gICAgICAgICAgICByZXR1cm4gY2FyZHNTdGF0ZVxuICAgIH1cbn1cblxuY29uc3QgVGFza2VyX2FwcCA9ICgpID0+IHtcblxuICAgIGNvbnN0IHRhYlByZXNldCA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogJ1NjaG9vbCcsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdXb3JrJywgY3VycmVudDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ0RhaWx5JywgY3VycmVudDogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiAnRXhhbXMnLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiAnR3ltJywgY3VycmVudDogZmFsc2UgfSxcbiAgICBdXG5cbiAgICBjb25zdCBbdGFic1N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRhYnNSZWR1Y2VyLCB7IHRhYnM6IHRhYlByZXNldCwgY3VycmVudFRhYklkeDogMCAgfSlcblxuICAgIGNvbnN0IGNhcmRJdGVtczEgPSBbXG4gICAgICAgIHsgaWQ6IDEsIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OiAnYWRkIGNyb3NzIG9mZid9LFxuICAgICAgICB7IGlkOiAyLCBjaGVja2VkOiB0cnVlLCB0ZXh0OiAnTmV3IGl0ZW0gMid9LFxuICAgICAgICB7IGlkOiAzLCBjaGVja2VkOiB0cnVlLCB0ZXh0OiAnZml4IGl0ZW0gbGVuZ3RoIG92ZXJmbG93J30sXG4gICAgICAgIHsgaWQ6IDQsIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OiAnZml4IGhlYWRlciBsZW5ndGggb3ZlcmZsb3cnfSxcbiAgICBdXG4gICAgXG4gICAgY29uc3QgY2FyZEl0ZW1zMiA9IFtcbiAgICAgICAgeyBpZDogNSwgY2hlY2tlZDogdHJ1ZSwgdGV4dDogJ0hvbWV3b3JrJ30sXG4gICAgICAgIHsgaWQ6IDYsIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OiAnRXhlcmNpc2UnfSxcbiAgICAgICAgeyBpZDogNywgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdXYWxrIGRvZyd9LFxuICAgIF1cblxuICAgIGNvbnN0IGNhcmRzUHJlc2V0ID0gW1xuICAgICAgICB7IGlkOiAxMTEsIGhlYWRlcjogJ1Nob3BwaW5nIExpc3QnLCBpdGVtczogY2FyZEl0ZW1zMX0sXG4gICAgICAgIHsgaWQ6IDIyMiwgaGVhZGVyOiAnVGFza3MnLCBpdGVtczogY2FyZEl0ZW1zMn0sXG4gICAgXVxuXG5cbiAgICBjb25zdCBbY2FyZHNTdGF0ZSwgY2FyZHNEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhcmRzUmVkdWNlciwgeyAxOiBjYXJkc1ByZXNldCB9KVxuICAgIGNvbnN0IGN1cnJlbnRUYWJJZCA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZFxuICAgIGNvbnN0IGN1cnJlbnRUYWJJZFN0ciA9IGAke3RhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZH1gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzfT5cbiAgICAgICAgICAgICAgICA8VGFiTmF2IHRhYnNTdGF0ZT17dGFic1N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzV3JhcH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3NldHRpbmdzLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3Q2FyZFdyYXB9IG9uQ2xpY2s9eygpID0+IGNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnYWRkTmV3Q2FyZCcsIHBheWxvYWQ6IHsgdGFiaWQ6IGN1cnJlbnRUYWJJZCB9IH0pfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvbmV3LWNhcmQuc3ZnXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRzU3RhdGVbY3VycmVudFRhYklkU3RyXSAmJiBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZF0ubWFwKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2FyZC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+IDxDYXJkIGNhcmQ9e2NhcmR9IGNhcmRzU3RhdGU9e2NhcmRzU3RhdGV9IGNhcmRzRGlzcGF0Y2g9e2NhcmRzRGlzcGF0Y2h9IHRhYmlkPXtjdXJyZW50VGFiSWR9Lz4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tlcl9hcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});