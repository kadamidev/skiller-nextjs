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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(tabsState.tabs), [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          name: 'Untitled'\n        }]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n}; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 0: cardsPreset })\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'addNewCard':\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = new Array();\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newCards[action.payload.tabid]), [{\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n        header: 'New Card',\n        items: [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          checked: false,\n          text: 'New Item'\n        }]\n      }]);\n      return newCards;\n\n    case 'newCardItem':\n      var updatedCards = _objectSpread({}, cardsState);\n\n      for (var i = 0; i < updatedCards[action.payload.tabid].length; i++) {\n        if (updatedCards[action.payload.tabid][i].id == action.payload.id) {\n          updatedCards[action.payload.tabid][i]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedCards[action.payload.tabid][i]['items']), [{\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n            checked: false,\n            text: ''\n          }]);\n          return updatedCards;\n        }\n      }\n\n    case 'removeCardItem':\n      var removedCards = _objectSpread({}, cardsState);\n\n      for (var _i = 0; _i < removedCards[action.payload.tabid].length; _i++) {\n        if (removedCards[action.payload.tabid][_i].id == action.payload.cardid) {\n          removedCards[action.payload.tabid][_i]['items'] = removedCards[action.payload.tabid][_i]['items'].filter(function (item) {\n            return item.id != action.payload.itemid;\n          });\n          return removedCards;\n        }\n      }\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState);\n\n      for (var _i2 = 0; _i2 < toggledCards[action.payload.tabid].length; _i2++) {\n        //find correct card\n        if (toggledCards[action.payload.tabid][_i2].id == action.payload.cardid) {\n          var currentToggle = cardsState[action.payload.tabid][_i2]['items'][action.payload.idx]['checked'];\n          toggledCards[action.payload.tabid][_i2][action.payload.idx]['items'][action.payload.idx]['checked'] = !currentToggle;\n          return toggledCards;\n        }\n      }\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\nvar Tasker_app = function Tasker_app() {\n  _s();\n\n  var tabPreset = [{\n    id: 1,\n    name: 'School',\n    current: false\n  }, {\n    id: 2,\n    name: 'Work',\n    current: false\n  }, {\n    id: 3,\n    name: 'Daily',\n    current: true\n  }, {\n    id: 4,\n    name: 'Exams',\n    current: false\n  }, {\n    id: 5,\n    name: 'Gym',\n    current: false\n  }];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(tabsReducer, {\n    tabs: tabPreset,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var cardItems1 = [{\n    id: 1,\n    checked: false,\n    text: 'add cross off'\n  }, {\n    id: 2,\n    checked: true,\n    text: 'New item 2'\n  }, {\n    id: 3,\n    checked: true,\n    text: 'fix item length overflow'\n  }, {\n    id: 4,\n    checked: false,\n    text: 'fix header length overflow'\n  }];\n  var cardItems2 = [{\n    id: 5,\n    checked: true,\n    text: 'Homework'\n  }, {\n    id: 6,\n    checked: false,\n    text: 'Exercise'\n  }, {\n    id: 7,\n    checked: false,\n    text: 'Walk dog'\n  }];\n  var cardsPreset = [{\n    id: 111,\n    header: 'Shopping List',\n    items: cardItems1\n  }, {\n    id: 222,\n    header: 'Tasks',\n    items: cardItems2\n  }];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(cardsReducer, {\n    1: cardsPreset\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id;\n  var currentTabIdStr = \"\".concat(tabsState.tabs[tabsState.currentTabIdx].id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().settingsWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cards),\n          children: cardsState[currentTabIdStr] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n                header: card.header,\n                items: card.items,\n                cardid: card.id,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 156,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Tasker_app, \"8WZo0mXBqjmzjvdjNeuMBSUzB3M=\");\n\n_c = Tasker_app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0YWJzIiwiaWQiLCJ1dWlkdjQiLCJuYW1lIiwiY3VycmVudFRhYklkeCIsImxlbmd0aCIsImN1cnJlbnRUYWJJZCIsIm5ld0FyciIsImZpbHRlciIsInRhYiIsInBheWxvYWQiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc1JlZHVjZXIiLCJjYXJkc1N0YXRlIiwibmV3Q2FyZHMiLCJ0YWJpZCIsIkFycmF5IiwiaGVhZGVyIiwiaXRlbXMiLCJjaGVja2VkIiwidGV4dCIsInVwZGF0ZWRDYXJkcyIsImkiLCJyZW1vdmVkQ2FyZHMiLCJjYXJkaWQiLCJpdGVtIiwiaXRlbWlkIiwidG9nZ2xlZENhcmRzIiwiY3VycmVudFRvZ2dsZSIsIlRhc2tlcl9hcHAiLCJ0YWJQcmVzZXQiLCJjdXJyZW50IiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwiY2FyZEl0ZW1zMSIsImNhcmRJdGVtczIiLCJjYXJkc1ByZXNldCIsImNhcmRzRGlzcGF0Y2giLCJjdXJyZW50VGFiSWRTdHIiLCJzdHlsZXMiLCJjYXJkIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEVBQXVCO0FBQ3ZDLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssV0FBTDtBQUNJLGFBQU87QUFBQ0MsWUFBSSw4SkFBTUgsU0FBUyxDQUFDRyxJQUFoQixJQUFzQjtBQUFFQyxZQUFFLEVBQUVDLHdDQUFNLEVBQVo7QUFBZ0JDLGNBQUksRUFBRTtBQUF0QixTQUF0QixFQUFM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QUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosZUFhSTtBQUFLLGlCQUFTLEVBQUVzQyx5RkFBaEI7QUFBQSwrQkFDSTtBQUFJLG1CQUFTLEVBQUVBLGlGQUFmO0FBQUEsb0JBRVExQixVQUFVLENBQUN5QixlQUFELENBQVYsSUFBK0J6QixVQUFVLENBQUNaLFlBQUQsQ0FBVixDQUF5Qk8sR0FBekIsQ0FBNkIsVUFBQ2dDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN6RSxnQ0FDQTtBQUFrQix1QkFBUyxFQUFFRixnRkFBN0I7QUFBQSwyQ0FBMkMsOERBQUMsb0VBQUQ7QUFBTSxzQkFBTSxFQUFFQyxJQUFJLENBQUN2QixNQUFuQjtBQUEyQixxQkFBSyxFQUFFdUIsSUFBSSxDQUFDdEIsS0FBdkM7QUFBOEMsc0JBQU0sRUFBR3NCLElBQUksQ0FBQzVDLEVBQTVEO0FBQWdFLDBCQUFVLEVBQUVpQixVQUE1RTtBQUF3Riw2QkFBYSxFQUFFd0IsYUFBdkc7QUFBc0gscUJBQUssRUFBRXBDO0FBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTNDO0FBQUEsZUFBU3VDLElBQUksQ0FBQzVDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQTtBQUdILFdBSjhCO0FBRnZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREo7QUE4QkgsQ0FoRUQ7O0dBQU1pQyxVOztLQUFBQSxVO0FBa0VOLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGFza2VyX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC90YXNrZXJfYXBwLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgVGFiTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9UYWJOYXYuanN4J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4J1xuaW1wb3J0ICB7djQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcblxuY29uc3QgdGFic1JlZHVjZXIgPSAodGFic1N0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYWRkTmV3VGFiJzpcbiAgICAgICAgICAgIHJldHVybiB7dGFiczogWy4uLnRhYnNTdGF0ZS50YWJzLCB7IGlkOiB1dWlkdjQoKSwgbmFtZTogJ1VudGl0bGVkJ31dLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2RlbGV0ZVRhYic6XG4gICAgICAgICAgICBpZiAodGFic1N0YXRlLnRhYnMubGVuZ3RoIDw9IDEpICAvL2Nhbid0IGRlbGV0ZSBhIHRhYiBpZiBpdCdzIHRoZSBvbmx5IG9uZVxuICAgICAgICAgICAgICAgIHJldHVybiB7Y3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgsIHRhYnM6IHRhYnNTdGF0ZS50YWJzfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFiSWQgPSB0YWJzU3RhdGUudGFic1t0YWJzU3RhdGUuY3VycmVudFRhYklkeF0uaWQgLy9jYXB0dXJlIGlkIG9mIGN1cnJlbnRUYWJcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRhYnNTdGF0ZS50YWJzLmZpbHRlcih0YWIgPT4gdGFiLmlkICE9IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgICAgICAgLy8gbWFpbnRhaW5pbmcgY3VycmVudCB0YWIgcG9pbnRlclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkID09IGN1cnJlbnRUYWJJZCkgeyAvL2lmIHRoZSBkZWxldGVkIHRhYiBpcyB0aGUgY3VycmVudFRhYlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRhYnM6IG5ld0FyciwgY3VycmVudFRhYklkeDogMCB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pZHggPCB0YWJzU3RhdGUuY3VycmVudFRhYklkeCkgeyAvL2NoZWNrIGZvciBjdXJyZW50VGFiIHBvaW50ZXIgc2hpZnRcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCB0YWJzU3RhdGUudGFicy5sZW5ndGg7IGlkeCsrKSB7IC8vdXBkYXRlIHBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0FycltpZHhdLmlkID09IGN1cnJlbnRUYWJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRhYnM6IG5ld0FyciwgY3VycmVudFRhYklkeDogaWR4IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7IHRhYnM6IG5ld0FyciwgY3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHggfVxuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2NoYW5nZVRhYk5hbWUnOlxuICAgICAgICAgICAgY29uc3QgbmFtZUNoYW5nZWRUYWJzID0gdGFic1N0YXRlLnRhYnMubWFwKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYi5pZCA9PSBhY3Rpb24ucGF5bG9hZC50YWJJZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IHRhYi5pZCwgbmFtZTogYWN0aW9uLnBheWxvYWQubmFtZSB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhYlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7Y3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgsIHRhYnM6IG5hbWVDaGFuZ2VkVGFicyB9XG5cbiAgICAgICAgY2FzZSAnY2hhbmdlQ3VycmVudFRhYic6XG4gICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IGFjdGlvbi5wYXlsb2FkLmlkeCwgdGFiczogdGFic1N0YXRlLnRhYnN9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGhpdCcpXG4gICAgICAgICAgICByZXR1cm4gdGFic1N0YXRlXG4gICAgfVxufVxuXG4vLyBjb25zdCBbY2FyZHNTdGF0ZSwgY2FyZHNEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhcmRzUmVkdWNlciwgeyAwOiBjYXJkc1ByZXNldCB9KVxuXG5jb25zdCBjYXJkc1JlZHVjZXIgPSAoY2FyZHNTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FkZE5ld0NhcmQnOlxuICAgICAgICAgICAgY29uc3QgbmV3Q2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGlmICghbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gbmV3IEFycmF5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0gPSBbLi4ubmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLCB7IGlkOiB1dWlkdjQoKSwgaGVhZGVyOiAnTmV3IENhcmQnLCBpdGVtczogW3sgaWQ6IHV1aWR2NCgpLCBjaGVja2VkOiBmYWxzZSwgdGV4dDonTmV3IEl0ZW0nIH1dIH1dXG4gICAgICAgICAgICByZXR1cm4gbmV3Q2FyZHNcblxuICAgICAgICBjYXNlICduZXdDYXJkSXRlbSc6XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldLmlkID09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10gPSBbLi4udXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXSwgeyBpZDogdXVpZHY0KCksIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OicnIH1dXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkQ2FyZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICBjYXNlICdyZW1vdmVDYXJkSXRlbSc6XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldLmlkID09IGFjdGlvbi5wYXlsb2FkLmNhcmRpZCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddID0gcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gYWN0aW9uLnBheWxvYWQuaXRlbWlkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlZENhcmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3RvZ2dsZUNhcmRJdGVtJzpcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLmxlbmd0aDsgaSsrKSB7IC8vZmluZCBjb3JyZWN0IGNhcmRcbiAgICAgICAgICAgICAgICBpZiAodG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5jYXJkaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUb2dnbGUgPSBjYXJkc1N0YXRlW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWydjaGVja2VkJ11cblxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldW2FjdGlvbi5wYXlsb2FkLmlkeF1cbiAgICAgICAgICAgICAgICAgICAgWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ2NoZWNrZWQnXSA9ICFjdXJyZW50VG9nZ2xlXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZWRDYXJkc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnKVxuXG4gICAgICAgICAgICByZXR1cm4gY2FyZHNTdGF0ZVxuICAgIH1cbn1cblxuY29uc3QgVGFza2VyX2FwcCA9ICgpID0+IHtcblxuICAgIGNvbnN0IHRhYlByZXNldCA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogJ1NjaG9vbCcsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdXb3JrJywgY3VycmVudDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ0RhaWx5JywgY3VycmVudDogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiAnRXhhbXMnLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiAnR3ltJywgY3VycmVudDogZmFsc2UgfSxcbiAgICBdXG5cbiAgICBjb25zdCBbdGFic1N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRhYnNSZWR1Y2VyLCB7IHRhYnM6IHRhYlByZXNldCwgY3VycmVudFRhYklkeDogMCAgfSlcblxuICAgIGNvbnN0IGNhcmRJdGVtczEgPSBbXG4gICAgICAgIHsgaWQ6IDEsIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OiAnYWRkIGNyb3NzIG9mZid9LFxuICAgICAgICB7IGlkOiAyLCBjaGVja2VkOiB0cnVlLCB0ZXh0OiAnTmV3IGl0ZW0gMid9LFxuICAgICAgICB7IGlkOiAzLCBjaGVja2VkOiB0cnVlLCB0ZXh0OiAnZml4IGl0ZW0gbGVuZ3RoIG92ZXJmbG93J30sXG4gICAgICAgIHsgaWQ6IDQsIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OiAnZml4IGhlYWRlciBsZW5ndGggb3ZlcmZsb3cnfSxcbiAgICBdXG4gICAgXG4gICAgY29uc3QgY2FyZEl0ZW1zMiA9IFtcbiAgICAgICAgeyBpZDogNSwgY2hlY2tlZDogdHJ1ZSwgdGV4dDogJ0hvbWV3b3JrJ30sXG4gICAgICAgIHsgaWQ6IDYsIGNoZWNrZWQ6IGZhbHNlLCB0ZXh0OiAnRXhlcmNpc2UnfSxcbiAgICAgICAgeyBpZDogNywgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdXYWxrIGRvZyd9LFxuICAgIF1cblxuICAgIGNvbnN0IGNhcmRzUHJlc2V0ID0gW1xuICAgICAgICB7IGlkOiAxMTEsIGhlYWRlcjogJ1Nob3BwaW5nIExpc3QnLCBpdGVtczogY2FyZEl0ZW1zMX0sXG4gICAgICAgIHsgaWQ6IDIyMiwgaGVhZGVyOiAnVGFza3MnLCBpdGVtczogY2FyZEl0ZW1zMn0sXG4gICAgXVxuXG5cbiAgICBjb25zdCBbY2FyZHNTdGF0ZSwgY2FyZHNEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhcmRzUmVkdWNlciwgeyAxOiBjYXJkc1ByZXNldCB9KVxuICAgIGNvbnN0IGN1cnJlbnRUYWJJZCA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZFxuICAgIGNvbnN0IGN1cnJlbnRUYWJJZFN0ciA9IGAke3RhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XS5pZH1gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzfT5cbiAgICAgICAgICAgICAgICA8VGFiTmF2IHRhYnNTdGF0ZT17dGFic1N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzV3JhcH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3NldHRpbmdzLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3Q2FyZFdyYXB9IG9uQ2xpY2s9eygpID0+IGNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnYWRkTmV3Q2FyZCcsIHBheWxvYWQ6IHsgdGFiaWQ6IGN1cnJlbnRUYWJJZCB9IH0pfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvbmV3LWNhcmQuc3ZnXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRzU3RhdGVbY3VycmVudFRhYklkU3RyXSAmJiBjYXJkc1N0YXRlW2N1cnJlbnRUYWJJZF0ubWFwKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2FyZC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+IDxDYXJkIGhlYWRlcj17Y2FyZC5oZWFkZXJ9IGl0ZW1zPXtjYXJkLml0ZW1zfSBjYXJkaWQgPXtjYXJkLmlkfSBjYXJkc1N0YXRlPXtjYXJkc1N0YXRlfSBjYXJkc0Rpc3BhdGNoPXtjYXJkc0Rpc3BhdGNofSB0YWJpZD17Y3VycmVudFRhYklkfS8+IDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrZXJfYXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});