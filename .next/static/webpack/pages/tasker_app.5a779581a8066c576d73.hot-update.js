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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(tabsState.tabs), [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          name: 'Untitled'\n        }]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n}; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 0: cardsPreset })\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'addNewCard':\n      console.log(cardsState);\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = new Array();\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newCards[action.payload.tabid]), [{\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n        header: 'New Card',\n        items: [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          checked: false,\n          text: 'New Item'\n        }]\n      }]);\n      return newCards;\n\n    case 'newCardItem':\n      console.log(cardsState);\n\n      var updatedCards = _objectSpread({}, cardsState);\n\n      for (var i = 0; i < updatedCards[action.payload.tabid].length; i++) {\n        //finding the card idx\n        if (updatedCards[action.payload.tabid][i].id == action.payload.id) {\n          updatedCards[action.payload.tabid][i]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedCards[action.payload.tabid][i]['items']), [{\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n            checked: false,\n            text: ''\n          }]);\n          break;\n        }\n      }\n\n      return updatedCards;\n\n    case 'removeCardItem':\n      var removedCards = _objectSpread({}, cardsState);\n\n      for (var _i = 0; _i < removedCards[action.payload.tabid].length; _i++) {\n        if (removedCards[action.payload.tabid][_i].id == action.payload.cardid) {\n          removedCards[action.payload.tabid][_i]['items'] = removedCards[action.payload.tabid][_i]['items'].filter(function (item) {\n            return item.id != action.payload.itemid;\n          });\n          return removedCards;\n        }\n      }\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState);\n\n      console.log(\"card id:\".concat(action.payload.cardid, \" tabid:\").concat(action.payload.tabid, \" itemidx:\").concat(action.payload.idx));\n\n      for (var _i2 = 0; _i2 < toggledCards[action.payload.tabid].length; _i2++) {\n        //find correct card\n        if (toggledCards[action.payload.tabid][_i2].id == action.payload.cardid) {\n          toggledCards[action.payload.tabid][_i2]['items'][action.payload.idx]['checked'] = !action.payload.checked;\n          return toggledCards;\n        }\n      }\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\nvar Tasker_app = function Tasker_app() {\n  _s();\n\n  var tabPreset = [{\n    id: 1,\n    name: 'School',\n    current: false\n  }, {\n    id: 2,\n    name: 'Work',\n    current: false\n  }, {\n    id: 3,\n    name: 'Daily',\n    current: true\n  }, {\n    id: 4,\n    name: 'Exams',\n    current: false\n  }, {\n    id: 5,\n    name: 'Gym',\n    current: false\n  }];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(tabsReducer, {\n    tabs: tabPreset,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var cardItems1 = [{\n    id: 1,\n    checked: false,\n    text: 'add cross off'\n  }, {\n    id: 2,\n    checked: true,\n    text: 'New item 2'\n  }, {\n    id: 3,\n    checked: true,\n    text: 'fix item length overflow'\n  }, {\n    id: 4,\n    checked: false,\n    text: 'fix header length overflow'\n  }];\n  var cardItems2 = [{\n    id: 5,\n    checked: true,\n    text: 'Homework'\n  }, {\n    id: 6,\n    checked: false,\n    text: 'Exercise'\n  }, {\n    id: 7,\n    checked: false,\n    text: 'Walk dog'\n  }];\n  var cardsPreset = [{\n    id: 111,\n    header: 'Shopping List',\n    items: cardItems1\n  }, {\n    id: 222,\n    header: 'Tasks',\n    items: cardItems2\n  }];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(cardsReducer, {\n    1: cardsPreset\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id;\n  var currentTabIdStr = \"\".concat(tabsState.tabs[tabsState.currentTabIdx].id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().settingsWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cards),\n          children: cardsState[currentTabIdStr] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n                card: card,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 175,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 175,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 170,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Tasker_app, \"8WZo0mXBqjmzjvdjNeuMBSUzB3M=\");\n\n_c = Tasker_app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0YWJzIiwiaWQiLCJ1dWlkdjQiLCJuYW1lIiwiY3VycmVudFRhYklkeCIsImxlbmd0aCIsImN1cnJlbnRUYWJJZCIsIm5ld0FyciIsImZpbHRlciIsInRhYiIsInBheWxvYWQiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc1JlZHVjZXIiLCJjYXJkc1N0YXRlIiwibmV3Q2FyZHMiLCJ0YWJpZCIsIkFycmF5IiwiaGVhZGVyIiwiaXRlbXMiLCJjaGVja2VkIiwidGV4dCIsInVwZGF0ZWRDYXJkcyIsImkiLCJyZW1vdmVkQ2FyZHMiLCJjYXJkaWQiLCJpdGVtIiwiaXRlbWlkIiwidG9nZ2xlZENhcmRzIiwiVGFza2VyX2FwcCIsInRhYlByZXNldCIsImN1cnJlbnQiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJjYXJkSXRlbXMxIiwiY2FyZEl0ZW1zMiIsImNhcmRzUHJlc2V0IiwiY2FyZHNEaXNwYXRjaCIsImN1cnJlbnRUYWJJZFN0ciIsInN0eWxlcyIsImNhcmQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQVlDLE1BQVosRUFBdUI7QUFDdkMsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxXQUFMO0FBQ0ksYUFBTztBQUFDQyxZQUFJLDhKQUFNSCxTQUFTLENBQUNHLElBQWhCLElBQXNCO0FBQUVDLFlBQUUsRUFBRUMsd0NBQU0sRUFBWjtBQUFnQkMsY0FBSSxFQUFFO0FBQXRCLFNBQXRCLEVBQUw7QUFDQ0MscUJBQWEsRUFB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LEVBQUU7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQWFJO0FBQUssaUJBQVMsRUFBRXFDLHlGQUFoQjtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBRUEsaUZBQWY7QUFBQSxvQkFFUXpCLFVBQVUsQ0FBQ3dCLGVBQUQsQ0FBVixJQUErQnhCLFVBQVUsQ0FBQ1osWUFBRCxDQUFWLENBQXlCTyxHQUF6QixDQUE2QixVQUFDK0IsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3pFLGdDQUNBO0FBQWtCLHVCQUFTLEVBQUVGLGdGQUE3QjtBQUFBLDJDQUEyQyw4REFBQyxvRUFBRDtBQUFNLG9CQUFJLEVBQUVDLElBQVo7QUFBa0IsMEJBQVUsRUFBRTFCLFVBQTlCO0FBQTBDLDZCQUFhLEVBQUV1QixhQUF6RDtBQUF3RSxxQkFBSyxFQUFFbkM7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBM0M7QUFBQSxlQUFTc0MsSUFBSSxDQUFDM0MsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBR0gsV0FKOEI7QUFGdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQThCSCxDQWhFRDs7R0FBTWdDLFU7O0tBQUFBLFU7QUFrRU4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy90YXNrZXJfYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwL3Rhc2tlcl9hcHAubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBUYWJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3gnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvQ2FyZC5qc3gnXG5pbXBvcnQgIHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5jb25zdCB0YWJzUmVkdWNlciA9ICh0YWJzU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdhZGROZXdUYWInOlxuICAgICAgICAgICAgcmV0dXJuIHt0YWJzOiBbLi4udGFic1N0YXRlLnRhYnMsIHsgaWQ6IHV1aWR2NCgpLCBuYW1lOiAnVW50aXRsZWQnfV0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4fVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnZGVsZXRlVGFiJzpcbiAgICAgICAgICAgIGlmICh0YWJzU3RhdGUudGFicy5sZW5ndGggPD0gMSkgIC8vY2FuJ3QgZGVsZXRlIGEgdGFiIGlmIGl0J3MgdGhlIG9ubHkgb25lXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCwgdGFiczogdGFic1N0YXRlLnRhYnN9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYWJJZCA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZCAvL2NhcHR1cmUgaWQgb2YgY3VycmVudFRhYlxuICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGFic1N0YXRlLnRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuaWQgIT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICAgICAgICAvLyBtYWludGFpbmluZyBjdXJyZW50IHRhYiBwb2ludGVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWQgPT0gY3VycmVudFRhYklkKSB7IC8vaWYgdGhlIGRlbGV0ZWQgdGFiIGlzIHRoZSBjdXJyZW50VGFiXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiAwIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkeCA8IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4KSB7IC8vY2hlY2sgZm9yIGN1cnJlbnRUYWIgcG9pbnRlciBzaGlmdFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHRhYnNTdGF0ZS50YWJzLmxlbmd0aDsgaWR4KyspIHsgLy91cGRhdGUgcG9pbnRlclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3QXJyW2lkeF0uaWQgPT0gY3VycmVudFRhYklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiBpZHggfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHsgdGFiczogbmV3QXJyLCBjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCB9XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnY2hhbmdlVGFiTmFtZSc6XG4gICAgICAgICAgICBjb25zdCBuYW1lQ2hhbmdlZFRhYnMgPSB0YWJzU3RhdGUudGFicy5tYXAodGFiID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFiLmlkID09IGFjdGlvbi5wYXlsb2FkLnRhYklkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogdGFiLmlkLCBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeCwgdGFiczogbmFtZUNoYW5nZWRUYWJzIH1cblxuICAgICAgICBjYXNlICdjaGFuZ2VDdXJyZW50VGFiJzpcbiAgICAgICAgICAgIHJldHVybiB7Y3VycmVudFRhYklkeDogYWN0aW9uLnBheWxvYWQuaWR4LCB0YWJzOiB0YWJzU3RhdGUudGFic31cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgaGl0JylcbiAgICAgICAgICAgIHJldHVybiB0YWJzU3RhdGVcbiAgICB9XG59XG5cbi8vIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7IDA6IGNhcmRzUHJlc2V0IH0pXG5cbmNvbnN0IGNhcmRzUmVkdWNlciA9IChjYXJkc1N0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYWRkTmV3Q2FyZCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkc1N0YXRlKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgaWYgKCFuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0pIHtcbiAgICAgICAgICAgICAgICBuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0gPSBuZXcgQXJyYXlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gWy4uLm5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSwge1xuICAgICAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6ICdOZXcgQ2FyZCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6J05ldyBJdGVtJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIHJldHVybiBuZXdDYXJkc1xuXG4gICAgICAgIGNhc2UgJ25ld0NhcmRJdGVtJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRzU3RhdGUpXG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0ubGVuZ3RoOyBpKyspIHsgICAgLy9maW5kaW5nIHRoZSBjYXJkIGlkeFxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldLmlkID09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10gPSBbLi4udXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXSxcbiAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6JydcbiAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkQ2FyZHNcblxuICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZUNhcmRJdGVtJzpcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV0uaWQgPT0gYWN0aW9uLnBheWxvYWQuY2FyZGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10gPSByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pdGVtaWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdmVkQ2FyZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAndG9nZ2xlQ2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY2FyZCBpZDoke2FjdGlvbi5wYXlsb2FkLmNhcmRpZH0gdGFiaWQ6JHthY3Rpb24ucGF5bG9hZC50YWJpZH0gaXRlbWlkeDoke2FjdGlvbi5wYXlsb2FkLmlkeH1gKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLmxlbmd0aDsgaSsrKSB7IC8vZmluZCBjb3JyZWN0IGNhcmRcbiAgICAgICAgICAgICAgICBpZiAodG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5jYXJkaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWydjaGVja2VkJ10gPSAhYWN0aW9uLnBheWxvYWQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9nZ2xlZENhcmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcpXG5cbiAgICAgICAgICAgIHJldHVybiBjYXJkc1N0YXRlXG4gICAgfVxufVxuXG5jb25zdCBUYXNrZXJfYXBwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdGFiUHJlc2V0ID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnU2Nob29sJywgY3VycmVudDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogJ1dvcmsnLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiAnRGFpbHknLCBjdXJyZW50OiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdFeGFtcycsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IDUsIG5hbWU6ICdHeW0nLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgIF1cblxuICAgIGNvbnN0IFt0YWJzU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodGFic1JlZHVjZXIsIHsgdGFiczogdGFiUHJlc2V0LCBjdXJyZW50VGFiSWR4OiAwICB9KVxuXG4gICAgY29uc3QgY2FyZEl0ZW1zMSA9IFtcbiAgICAgICAgeyBpZDogMSwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdhZGQgY3Jvc3Mgb2ZmJ30sXG4gICAgICAgIHsgaWQ6IDIsIGNoZWNrZWQ6IHRydWUsIHRleHQ6ICdOZXcgaXRlbSAyJ30sXG4gICAgICAgIHsgaWQ6IDMsIGNoZWNrZWQ6IHRydWUsIHRleHQ6ICdmaXggaXRlbSBsZW5ndGggb3ZlcmZsb3cnfSxcbiAgICAgICAgeyBpZDogNCwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdmaXggaGVhZGVyIGxlbmd0aCBvdmVyZmxvdyd9LFxuICAgIF1cbiAgICBcbiAgICBjb25zdCBjYXJkSXRlbXMyID0gW1xuICAgICAgICB7IGlkOiA1LCBjaGVja2VkOiB0cnVlLCB0ZXh0OiAnSG9tZXdvcmsnfSxcbiAgICAgICAgeyBpZDogNiwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdFeGVyY2lzZSd9LFxuICAgICAgICB7IGlkOiA3LCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ1dhbGsgZG9nJ30sXG4gICAgXVxuXG4gICAgY29uc3QgY2FyZHNQcmVzZXQgPSBbXG4gICAgICAgIHsgaWQ6IDExMSwgaGVhZGVyOiAnU2hvcHBpbmcgTGlzdCcsIGl0ZW1zOiBjYXJkSXRlbXMxfSxcbiAgICAgICAgeyBpZDogMjIyLCBoZWFkZXI6ICdUYXNrcycsIGl0ZW1zOiBjYXJkSXRlbXMyfSxcbiAgICBdXG5cblxuICAgIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7IDE6IGNhcmRzUHJlc2V0IH0pXG4gICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkXG4gICAgY29uc3QgY3VycmVudFRhYklkU3RyID0gYCR7dGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkfWBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxuICAgICAgICAgICAgICAgIDxUYWJOYXYgdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NXcmFwfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvc2V0dGluZ3Muc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDYXJkV3JhcH0gb25DbGljaz17KCkgPT4gY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdhZGROZXdDYXJkJywgcGF5bG9hZDogeyB0YWJpZDogY3VycmVudFRhYklkIH0gfSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9uZXctY2FyZC5zdmdcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRTdHJdICYmIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXS5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXJkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT4gPENhcmQgY2FyZD17Y2FyZH0gY2FyZHNTdGF0ZT17Y2FyZHNTdGF0ZX0gY2FyZHNEaXNwYXRjaD17Y2FyZHNEaXNwYXRjaH0gdGFiaWQ9e2N1cnJlbnRUYWJJZH0vPiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza2VyX2FwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});