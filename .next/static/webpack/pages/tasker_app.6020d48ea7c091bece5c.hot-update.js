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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(tabsState.tabs), [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          name: 'Untitled'\n        }]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n}; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 0: cardsPreset })\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'addNewCard':\n      console.log(cardsState);\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = new Array();\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newCards[action.payload.tabid]), [{\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n        header: 'New Card',\n        items: [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          checked: false,\n          text: 'New Item'\n        }]\n      }]);\n      return newCards;\n\n    case 'newCardItem':\n      console.log(cardsState);\n\n      var updatedCards = _objectSpread({}, cardsState);\n\n      for (var i = 0; i < updatedCards[action.payload.tabid].length; i++) {\n        //finding the card idx\n        if (updatedCards[action.payload.tabid][i].id == action.payload.id) {\n          updatedCards[action.payload.tabid][i]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedCards[action.payload.tabid][i]['items']), [{\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n            checked: false,\n            text: ''\n          }]);\n          break;\n        }\n      }\n\n      return updatedCards;\n    // case 'removeCardItem':\n    //     const removedCards = {...cardsState}\n    //     for (let i = 0; i < removedCards[action.payload.tabid].length; i++) {\n    //         if (removedCards[action.payload.tabid][i].id == action.payload.cardid) {\n    //             removedCards[action.payload.tabid][i]['items'] = removedCards[action.payload.tabid][i]['items'].filter((item) => item.id != action.payload.itemid)\n    //             return removedCards\n    //         }\n    //     }\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState);\n\n      console.log(\"card id:\".concat(action.payload.cardid, \" tabid:\").concat(action.payload.tabid, \" itemidx:\").concat(action.payload.idx));\n\n      for (var _i = 0; _i < toggledCards[action.payload.tabid].length; _i++) {\n        //find correct card\n        if (toggledCards[action.payload.tabid][_i].id == action.payload.cardid) {\n          var currentToggle = toggledCards[action.payload.tabid][_i]['items'][action.payload.idx]['checked'];\n          toggledCards[action.payload.tabid][_i]['items'][action.payload.idx]['checked'] = !currentToggle;\n          return toggledCards;\n        }\n      }\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\nvar Tasker_app = function Tasker_app() {\n  _s();\n\n  var tabPreset = [{\n    id: 1,\n    name: 'School',\n    current: false\n  }, {\n    id: 2,\n    name: 'Work',\n    current: false\n  }, {\n    id: 3,\n    name: 'Daily',\n    current: true\n  }, {\n    id: 4,\n    name: 'Exams',\n    current: false\n  }, {\n    id: 5,\n    name: 'Gym',\n    current: false\n  }];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(tabsReducer, {\n    tabs: tabPreset,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var cardItems1 = [{\n    id: 1,\n    checked: false,\n    text: 'add cross off'\n  }, {\n    id: 2,\n    checked: true,\n    text: 'New item 2'\n  }, {\n    id: 3,\n    checked: true,\n    text: 'fix item length overflow'\n  }, {\n    id: 4,\n    checked: false,\n    text: 'fix header length overflow'\n  }];\n  var cardItems2 = [{\n    id: 5,\n    checked: true,\n    text: 'Homework'\n  }, {\n    id: 6,\n    checked: false,\n    text: 'Exercise'\n  }, {\n    id: 7,\n    checked: false,\n    text: 'Walk dog'\n  }];\n  var cardsPreset = [{\n    id: 111,\n    header: 'Shopping List',\n    items: cardItems1\n  }, {\n    id: 222,\n    header: 'Tasks',\n    items: cardItems2\n  }];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(cardsReducer, {\n    1: cardsPreset\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id;\n  var currentTabIdStr = \"\".concat(tabsState.tabs[tabsState.currentTabIdx].id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 161,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().settingsWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cards),\n          children: cardsState[currentTabIdStr] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n                card: card,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 178,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 178,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 174,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Tasker_app, \"8WZo0mXBqjmzjvdjNeuMBSUzB3M=\");\n\n_c = Tasker_app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0YWJzIiwiaWQiLCJ1dWlkdjQiLCJuYW1lIiwiY3VycmVudFRhYklkeCIsImxlbmd0aCIsImN1cnJlbnRUYWJJZCIsIm5ld0FyciIsImZpbHRlciIsInRhYiIsInBheWxvYWQiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc1JlZHVjZXIiLCJjYXJkc1N0YXRlIiwibmV3Q2FyZHMiLCJ0YWJpZCIsIkFycmF5IiwiaGVhZGVyIiwiaXRlbXMiLCJjaGVja2VkIiwidGV4dCIsInVwZGF0ZWRDYXJkcyIsImkiLCJ0b2dnbGVkQ2FyZHMiLCJjYXJkaWQiLCJjdXJyZW50VG9nZ2xlIiwiVGFza2VyX2FwcCIsInRhYlByZXNldCIsImN1cnJlbnQiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJjYXJkSXRlbXMxIiwiY2FyZEl0ZW1zMiIsImNhcmRzUHJlc2V0IiwiY2FyZHNEaXNwYXRjaCIsImN1cnJlbnRUYWJJZFN0ciIsInN0eWxlcyIsImNhcmQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQVlDLE1BQVosRUFBdUI7QUFDdkMsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxXQUFMO0FBQ0ksYUFBTztBQUFDQyxZQUFJLDhKQUFNSCxTQUFTLENBQUNHLElBQWhCLElBQXNCO0FBQUVDLFlBQUUsRUFBRUMsd0NBQU0sRUFBWjtBQUFnQkMsY0FBSSxFQUFFO0FBQXRCLFNBQXRCLEVBQUw7QUFDQ0MscUJBQWEsRUFBRVAsU0FBUyxDQUFDTztB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O0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBR0gsV0FKOEI7QUFGdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQThCSCxDQWhFRDs7R0FBTThCLFU7O0tBQUFBLFU7QUFrRU4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy90YXNrZXJfYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwL3Rhc2tlcl9hcHAubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBUYWJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3gnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvQ2FyZC5qc3gnXG5pbXBvcnQgIHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5jb25zdCB0YWJzUmVkdWNlciA9ICh0YWJzU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdhZGROZXdUYWInOlxuICAgICAgICAgICAgcmV0dXJuIHt0YWJzOiBbLi4udGFic1N0YXRlLnRhYnMsIHsgaWQ6IHV1aWR2NCgpLCBuYW1lOiAnVW50aXRsZWQnfV0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4fVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnZGVsZXRlVGFiJzpcbiAgICAgICAgICAgIGlmICh0YWJzU3RhdGUudGFicy5sZW5ndGggPD0gMSkgIC8vY2FuJ3QgZGVsZXRlIGEgdGFiIGlmIGl0J3MgdGhlIG9ubHkgb25lXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCwgdGFiczogdGFic1N0YXRlLnRhYnN9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYWJJZCA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZCAvL2NhcHR1cmUgaWQgb2YgY3VycmVudFRhYlxuICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGFic1N0YXRlLnRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuaWQgIT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICAgICAgICAvLyBtYWludGFpbmluZyBjdXJyZW50IHRhYiBwb2ludGVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWQgPT0gY3VycmVudFRhYklkKSB7IC8vaWYgdGhlIGRlbGV0ZWQgdGFiIGlzIHRoZSBjdXJyZW50VGFiXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiAwIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkeCA8IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4KSB7IC8vY2hlY2sgZm9yIGN1cnJlbnRUYWIgcG9pbnRlciBzaGlmdFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHRhYnNTdGF0ZS50YWJzLmxlbmd0aDsgaWR4KyspIHsgLy91cGRhdGUgcG9pbnRlclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3QXJyW2lkeF0uaWQgPT0gY3VycmVudFRhYklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiBpZHggfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCB9XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnY2hhbmdlVGFiTmFtZSc6XG4gICAgICAgICAgICBjb25zdCBuYW1lQ2hhbmdlZFRhYnMgPSB0YWJzU3RhdGUudGFicy5tYXAodGFiID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFiLmlkID09IGFjdGlvbi5wYXlsb2FkLnRhYklkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogdGFiLmlkLCBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCwgdGFiczogbmFtZUNoYW5nZWRUYWJzIH1cblxuICAgICAgICBjYXNlICdjaGFuZ2VDdXJyZW50VGFiJzpcbiAgICAgICAgICAgIHJldHVybiB7Y3VycmVudFRhYklkeDogYWN0aW9uLnBheWxvYWQuaWR4LCB0YWJzOiB0YWJzU3RhdGUudGFic31cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgaGl0JylcbiAgICAgICAgICAgIHJldHVybiB0YWJzU3RhdGVcbiAgICB9XG59XG5cbi8vIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7IDA6IGNhcmRzUHJlc2V0IH0pXG5cbmNvbnN0IGNhcmRzUmVkdWNlciA9IChjYXJkc1N0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYWRkTmV3Q2FyZCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkc1N0YXRlKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgaWYgKCFuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0pIHtcbiAgICAgICAgICAgICAgICBuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0gPSBuZXcgQXJyYXlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gWy4uLm5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSwge1xuICAgICAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6ICdOZXcgQ2FyZCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6J05ldyBJdGVtJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIHJldHVybiBuZXdDYXJkc1xuXG4gICAgICAgIGNhc2UgJ25ld0NhcmRJdGVtJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRzU3RhdGUpXG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0ubGVuZ3RoOyBpKyspIHsgICAgLy9maW5kaW5nIHRoZSBjYXJkIGlkeFxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldLmlkID09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10gPSBbLi4udXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXSxcbiAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6JydcbiAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkQ2FyZHNcblxuICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgIC8vIGNhc2UgJ3JlbW92ZUNhcmRJdGVtJzpcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlbW92ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV0uaWQgPT0gYWN0aW9uLnBheWxvYWQuY2FyZGlkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10gPSByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pdGVtaWQpXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiByZW1vdmVkQ2FyZHNcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgY2FzZSAndG9nZ2xlQ2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY2FyZCBpZDoke2FjdGlvbi5wYXlsb2FkLmNhcmRpZH0gdGFiaWQ6JHthY3Rpb24ucGF5bG9hZC50YWJpZH0gaXRlbWlkeDoke2FjdGlvbi5wYXlsb2FkLmlkeH1gKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLmxlbmd0aDsgaSsrKSB7IC8vZmluZCBjb3JyZWN0IGNhcmRcbiAgICAgICAgICAgICAgICBpZiAodG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5jYXJkaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUb2dnbGUgPSB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ2NoZWNrZWQnXVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWydjaGVja2VkJ10gPSAhY3VycmVudFRvZ2dsZVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2dnbGVkQ2FyZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0JylcblxuICAgICAgICAgICAgcmV0dXJuIGNhcmRzU3RhdGVcbiAgICB9XG59XG5cbmNvbnN0IFRhc2tlcl9hcHAgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB0YWJQcmVzZXQgPSBbXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdTY2hvb2wnLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnV29yaycsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdEYWlseScsIGN1cnJlbnQ6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogJ0V4YW1zJywgY3VycmVudDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogJ0d5bScsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgXVxuXG4gICAgY29uc3QgW3RhYnNTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0YWJzUmVkdWNlciwgeyB0YWJzOiB0YWJQcmVzZXQsIGN1cnJlbnRUYWJJZHg6IDAgIH0pXG5cbiAgICBjb25zdCBjYXJkSXRlbXMxID0gW1xuICAgICAgICB7IGlkOiAxLCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ2FkZCBjcm9zcyBvZmYnfSxcbiAgICAgICAgeyBpZDogMiwgY2hlY2tlZDogdHJ1ZSwgdGV4dDogJ05ldyBpdGVtIDInfSxcbiAgICAgICAgeyBpZDogMywgY2hlY2tlZDogdHJ1ZSwgdGV4dDogJ2ZpeCBpdGVtIGxlbmd0aCBvdmVyZmxvdyd9LFxuICAgICAgICB7IGlkOiA0LCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ2ZpeCBoZWFkZXIgbGVuZ3RoIG92ZXJmbG93J30sXG4gICAgXVxuICAgIFxuICAgIGNvbnN0IGNhcmRJdGVtczIgPSBbXG4gICAgICAgIHsgaWQ6IDUsIGNoZWNrZWQ6IHRydWUsIHRleHQ6ICdIb21ld29yayd9LFxuICAgICAgICB7IGlkOiA2LCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ0V4ZXJjaXNlJ30sXG4gICAgICAgIHsgaWQ6IDcsIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OiAnV2FsayBkb2cnfSxcbiAgICBdXG5cbiAgICBjb25zdCBjYXJkc1ByZXNldCA9IFtcbiAgICAgICAgeyBpZDogMTExLCBoZWFkZXI6ICdTaG9wcGluZyBMaXN0JywgaXRlbXM6IGNhcmRJdGVtczF9LFxuICAgICAgICB7IGlkOiAyMjIsIGhlYWRlcjogJ1Rhc2tzJywgaXRlbXM6IGNhcmRJdGVtczJ9LFxuICAgIF1cblxuXG4gICAgY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsgMTogY2FyZHNQcmVzZXQgfSlcbiAgICBjb25zdCBjdXJyZW50VGFiSWQgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWRcbiAgICBjb25zdCBjdXJyZW50VGFiSWRTdHIgPSBgJHt0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWR9YFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMudGFic30+XG4gICAgICAgICAgICAgICAgPFRhYk5hdiB0YWJzU3RhdGU9e3RhYnNTdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc1dyYXB9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9zZXR0aW5ncy5zdmdcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld0NhcmRXcmFwfSBvbkNsaWNrPXsoKSA9PiBjYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2FkZE5ld0NhcmQnLCBwYXlsb2FkOiB7IHRhYmlkOiBjdXJyZW50VGFiSWQgfSB9KX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL25ldy1jYXJkLnN2Z1wiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZFN0cl0gJiYgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRdLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhcmQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PiA8Q2FyZCBjYXJkPXtjYXJkfSBjYXJkc1N0YXRlPXtjYXJkc1N0YXRlfSBjYXJkc0Rpc3BhdGNoPXtjYXJkc0Rpc3BhdGNofSB0YWJpZD17Y3VycmVudFRhYklkfS8+IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrZXJfYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});