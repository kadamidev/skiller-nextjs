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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/app/tasker_app.module.scss */ \"./styles/app/tasker_app.module.scss\");\n/* harmony import */ var _styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tasker_app/TabNav.jsx */ \"./components/tasker_app/TabNav.jsx\");\n/* harmony import */ var _components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasker_app/Card.jsx */ \"./components/tasker_app/Card.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/pages/tasker_app.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(tabsState.tabs), [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          name: 'Untitled'\n        }]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n}; // const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 0: cardsPreset })\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'addNewCard':\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = new Array();\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(newCards[action.payload.tabid]), [{\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n        header: 'New Card',\n        items: [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n          checked: false,\n          text: 'New Item'\n        }]\n      }]);\n      return newCards;\n\n    case 'newCardItem':\n      var updatedCards = _objectSpread({}, cardsState);\n\n      for (var i = 0; i < updatedCards[action.payload.tabid].length; i++) {\n        if (updatedCards[action.payload.tabid][i].id == action.payload.id) {\n          updatedCards[action.payload.tabid][i]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(updatedCards[action.payload.tabid][i]['items']), [{\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(),\n            checked: false,\n            text: ''\n          }]);\n          return updatedCards;\n        }\n      }\n\n    case 'removeCardItem':\n      var removedCards = _objectSpread({}, cardsState);\n\n      for (var _i = 0; _i < removedCards[action.payload.tabid].length; _i++) {\n        if (removedCards[action.payload.tabid][_i].id == action.payload.cardid) {\n          removedCards[action.payload.tabid][_i]['items'] = removedCards[action.payload.tabid][_i]['items'].filter(function (item) {\n            return item.id != action.payload.itemid;\n          });\n          return removedCards;\n        }\n      }\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState);\n\n      for (var _i2 = 0; _i2 < toggledCards[action.payload.tabid].length; _i2++) {\n        //find correct card\n        if (toggledCards[action.payload.tabid][_i2].id == action.payload.cardid) {\n          var currentToggle = toggledCards[action.payload.tabid][_i2]['items'][action.payload.idx]['checked'];\n          toggledCards[action.payload.tabid][_i2]['items'][action.payload.idx]['checked'] = !currentToggle;\n          return toggledCards;\n        }\n      }\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\nvar Tasker_app = function Tasker_app() {\n  _s();\n\n  var tabPreset = [{\n    id: 1,\n    name: 'School',\n    current: false\n  }, {\n    id: 2,\n    name: 'Work',\n    current: false\n  }, {\n    id: 3,\n    name: 'Daily',\n    current: true\n  }, {\n    id: 4,\n    name: 'Exams',\n    current: false\n  }, {\n    id: 5,\n    name: 'Gym',\n    current: false\n  }];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(tabsReducer, {\n    tabs: tabPreset,\n    currentTabIdx: 0\n  }),\n      tabsState = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var cardItems1 = [{\n    id: 1,\n    checked: false,\n    text: 'add cross off'\n  }, {\n    id: 2,\n    checked: true,\n    text: 'New item 2'\n  }, {\n    id: 3,\n    checked: true,\n    text: 'fix item length overflow'\n  }, {\n    id: 4,\n    checked: false,\n    text: 'fix header length overflow'\n  }];\n  var cardItems2 = [{\n    id: 5,\n    checked: true,\n    text: 'Homework'\n  }, {\n    id: 6,\n    checked: false,\n    text: 'Exercise'\n  }, {\n    id: 7,\n    checked: false,\n    text: 'Walk dog'\n  }];\n  var cardsPreset = [{\n    id: 111,\n    header: 'Shopping List',\n    items: cardItems1\n  }, {\n    id: 222,\n    header: 'Tasks',\n    items: cardItems2\n  }];\n\n  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(cardsReducer, {\n    1: cardsPreset\n  }),\n      cardsState = _useReducer2[0],\n      cardsDispatch = _useReducer2[1];\n\n  var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id;\n  var currentTabIdStr = \"\".concat(tabsState.tabs[tabsState.currentTabIdx].id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabs),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_TabNav_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n          tabsState: tabsState,\n          dispatch: dispatch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().settingsWrap),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/settings.svg\",\n          width: 30,\n          height: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().newCardWrap),\n        onClick: function onClick() {\n          return cardsDispatch({\n            type: 'addNewCard',\n            payload: {\n              tabid: currentTabId\n            }\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          src: \"/img/app/new-card.svg\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cards),\n          children: cardsState[currentTabIdStr] && cardsState[currentTabId].map(function (card, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: (_styles_app_tasker_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasker_app_Card_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n                header: card.header,\n                items: card.items,\n                cardid: card.id,\n                cardsState: cardsState,\n                cardsDispatch: cardsDispatch,\n                tabid: currentTabId\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 155,\n                columnNumber: 72\n              }, _this), \" \"]\n            }, card.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 155,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Tasker_app, \"8WZo0mXBqjmzjvdjNeuMBSUzB3M=\");\n\n_c = Tasker_app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasker_app);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tasker_app\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza2VyX2FwcC5qc3g/NzMyZSJdLCJuYW1lcyI6WyJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0YWJzIiwiaWQiLCJ1dWlkdjQiLCJuYW1lIiwiY3VycmVudFRhYklkeCIsImxlbmd0aCIsImN1cnJlbnRUYWJJZCIsIm5ld0FyciIsImZpbHRlciIsInRhYiIsInBheWxvYWQiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc1JlZHVjZXIiLCJjYXJkc1N0YXRlIiwibmV3Q2FyZHMiLCJ0YWJpZCIsIkFycmF5IiwiaGVhZGVyIiwiaXRlbXMiLCJjaGVja2VkIiwidGV4dCIsInVwZGF0ZWRDYXJkcyIsImkiLCJyZW1vdmVkQ2FyZHMiLCJjYXJkaWQiLCJpdGVtIiwiaXRlbWlkIiwidG9nZ2xlZENhcmRzIiwiY3VycmVudFRvZ2dsZSIsIlRhc2tlcl9hcHAiLCJ0YWJQcmVzZXQiLCJjdXJyZW50IiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwiY2FyZEl0ZW1zMSIsImNhcmRJdGVtczIiLCJjYXJkc1ByZXNldCIsImNhcmRzRGlzcGF0Y2giLCJjdXJyZW50VGFiSWRTdHIiLCJzdHlsZXMiLCJjYXJkIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEVBQXVCO0FBQ3ZDLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssV0FBTDtBQUNJLGFBQU87QUFBQ0MsWUFBSSw4SkFBTUgsU0FBUyxDQUFDRyxJQUFoQixJQUFzQjtBQUFFQyxZQUFFLEVBQUVDLHdDQUFNLEVBQVo7QUFBZ0JDLGNBQUksRUFBRTtBQUF0QixTQUF0QixFQUFM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LGVBYUk7QUFBSyxpQkFBUyxFQUFFc0MseUZBQWhCO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFFQSxpRkFBZjtBQUFBLG9CQUVRMUIsVUFBVSxDQUFDeUIsZUFBRCxDQUFWLElBQStCekIsVUFBVSxDQUFDWixZQUFELENBQVYsQ0FBeUJPLEdBQXpCLENBQTZCLFVBQUNnQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekUsZ0NBQ0E7QUFBa0IsdUJBQVMsRUFBRUYsZ0ZBQTdCO0FBQUEsMkNBQTJDLDhEQUFDLG9FQUFEO0FBQU0sc0JBQU0sRUFBRUMsSUFBSSxDQUFDdkIsTUFBbkI7QUFBMkIscUJBQUssRUFBRXVCLElBQUksQ0FBQ3RCLEtBQXZDO0FBQThDLHNCQUFNLEVBQUdzQixJQUFJLENBQUM1QyxFQUE1RDtBQUFnRSwwQkFBVSxFQUFFaUIsVUFBNUU7QUFBd0YsNkJBQWEsRUFBRXdCLGFBQXZHO0FBQXNILHFCQUFLLEVBQUVwQztBQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUEzQztBQUFBLGVBQVN1QyxJQUFJLENBQUM1QyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREE7QUFHSCxXQUo4QjtBQUZ2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBOEJILENBaEVEOztHQUFNaUMsVTs7S0FBQUEsVTtBQWtFTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rhc2tlcl9hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAvdGFza2VyX2FwcC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFRhYk5hdiBmcm9tICcuLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvVGFiTmF2LmpzeCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdGFza2VyX2FwcC9DYXJkLmpzeCdcbmltcG9ydCAge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmNvbnN0IHRhYnNSZWR1Y2VyID0gKHRhYnNTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FkZE5ld1RhYic6XG4gICAgICAgICAgICByZXR1cm4ge3RhYnM6IFsuLi50YWJzU3RhdGUudGFicywgeyBpZDogdXVpZHY0KCksIG5hbWU6ICdVbnRpdGxlZCd9XSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHh9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdkZWxldGVUYWInOlxuICAgICAgICAgICAgaWYgKHRhYnNTdGF0ZS50YWJzLmxlbmd0aCA8PSAxKSAgLy9jYW4ndCBkZWxldGUgYSB0YWIgaWYgaXQncyB0aGUgb25seSBvbmVcbiAgICAgICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4LCB0YWJzOiB0YWJzU3RhdGUudGFic31cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkIC8vY2FwdHVyZSBpZCBvZiBjdXJyZW50VGFiXG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0YWJzU3RhdGUudGFicy5maWx0ZXIodGFiID0+IHRhYi5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgICAgIC8vIG1haW50YWluaW5nIGN1cnJlbnQgdGFiIHBvaW50ZXJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pZCA9PSBjdXJyZW50VGFiSWQpIHsgLy9pZiB0aGUgZGVsZXRlZCB0YWIgaXMgdGhlIGN1cnJlbnRUYWJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IDAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWR4IDwgdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgpIHsgLy9jaGVjayBmb3IgY3VycmVudFRhYiBwb2ludGVyIHNoaWZ0XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgdGFic1N0YXRlLnRhYnMubGVuZ3RoOyBpZHgrKykgeyAvL3VwZGF0ZSBwb2ludGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdBcnJbaWR4XS5pZCA9PSBjdXJyZW50VGFiSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IGlkeCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4IH1cbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdjaGFuZ2VUYWJOYW1lJzpcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDaGFuZ2VkVGFicyA9IHRhYnNTdGF0ZS50YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWIuaWQgPT0gYWN0aW9uLnBheWxvYWQudGFiSWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiB0YWIuaWQsIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWUgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YWJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4LCB0YWJzOiBuYW1lQ2hhbmdlZFRhYnMgfVxuXG4gICAgICAgIGNhc2UgJ2NoYW5nZUN1cnJlbnRUYWInOlxuICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiBhY3Rpb24ucGF5bG9hZC5pZHgsIHRhYnM6IHRhYnNTdGF0ZS50YWJzfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBoaXQnKVxuICAgICAgICAgICAgcmV0dXJuIHRhYnNTdGF0ZVxuICAgIH1cbn1cblxuLy8gY29uc3QgW2NhcmRzU3RhdGUsIGNhcmRzRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJkc1JlZHVjZXIsIHsgMDogY2FyZHNQcmVzZXQgfSlcblxuY29uc3QgY2FyZHNSZWR1Y2VyID0gKGNhcmRzU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdhZGROZXdDYXJkJzpcbiAgICAgICAgICAgIGNvbnN0IG5ld0NhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBpZiAoIW5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSkge1xuICAgICAgICAgICAgICAgIG5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSA9IG5ldyBBcnJheVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gWy4uLm5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSwgeyBpZDogdXVpZHY0KCksIGhlYWRlcjogJ05ldyBDYXJkJywgaXRlbXM6IFt7IGlkOiB1dWlkdjQoKSwgY2hlY2tlZDogZmFsc2UsIHRleHQ6J05ldyBJdGVtJyB9XSB9XVxuICAgICAgICAgICAgcmV0dXJuIG5ld0NhcmRzXG5cbiAgICAgICAgY2FzZSAnbmV3Q2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2ldWydpdGVtcyddID0gWy4uLnVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10sIHsgaWQ6IHV1aWR2NCgpLCBjaGVja2VkOiBmYWxzZSwgdGV4dDonJyB9XVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlZENhcmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgY2FzZSAncmVtb3ZlQ2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5jYXJkaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXSA9IHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ10uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IGFjdGlvbi5wYXlsb2FkLml0ZW1pZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWRDYXJkc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICd0b2dnbGVDYXJkSXRlbSc6XG4gICAgICAgICAgICBjb25zdCB0b2dnbGVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5sZW5ndGg7IGkrKykgeyAvL2ZpbmQgY29ycmVjdCBjYXJkXG4gICAgICAgICAgICAgICAgaWYgKHRvZ2dsZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV0uaWQgPT0gYWN0aW9uLnBheWxvYWQuY2FyZGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VG9nZ2xlID0gdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVtpXVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWydjaGVja2VkJ11cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1baV1bJ2l0ZW1zJ11bYWN0aW9uLnBheWxvYWQuaWR4XVsnY2hlY2tlZCddID0gIWN1cnJlbnRUb2dnbGVcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9nZ2xlZENhcmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcpXG5cbiAgICAgICAgICAgIHJldHVybiBjYXJkc1N0YXRlXG4gICAgfVxufVxuXG5jb25zdCBUYXNrZXJfYXBwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdGFiUHJlc2V0ID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnU2Nob29sJywgY3VycmVudDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogJ1dvcmsnLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiAnRGFpbHknLCBjdXJyZW50OiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdFeGFtcycsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IDUsIG5hbWU6ICdHeW0nLCBjdXJyZW50OiBmYWxzZSB9LFxuICAgIF1cblxuICAgIGNvbnN0IFt0YWJzU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodGFic1JlZHVjZXIsIHsgdGFiczogdGFiUHJlc2V0LCBjdXJyZW50VGFiSWR4OiAwICB9KVxuXG4gICAgY29uc3QgY2FyZEl0ZW1zMSA9IFtcbiAgICAgICAgeyBpZDogMSwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdhZGQgY3Jvc3Mgb2ZmJ30sXG4gICAgICAgIHsgaWQ6IDIsIGNoZWNrZWQ6IHRydWUsIHRleHQ6ICdOZXcgaXRlbSAyJ30sXG4gICAgICAgIHsgaWQ6IDMsIGNoZWNrZWQ6IHRydWUsIHRleHQ6ICdmaXggaXRlbSBsZW5ndGggb3ZlcmZsb3cnfSxcbiAgICAgICAgeyBpZDogNCwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdmaXggaGVhZGVyIGxlbmd0aCBvdmVyZmxvdyd9LFxuICAgIF1cbiAgICBcbiAgICBjb25zdCBjYXJkSXRlbXMyID0gW1xuICAgICAgICB7IGlkOiA1LCBjaGVja2VkOiB0cnVlLCB0ZXh0OiAnSG9tZXdvcmsnfSxcbiAgICAgICAgeyBpZDogNiwgY2hlY2tlZDogZmFsc2UsIHRleHQ6ICdFeGVyY2lzZSd9LFxuICAgICAgICB7IGlkOiA3LCBjaGVja2VkOiBmYWxzZSwgdGV4dDogJ1dhbGsgZG9nJ30sXG4gICAgXVxuXG4gICAgY29uc3QgY2FyZHNQcmVzZXQgPSBbXG4gICAgICAgIHsgaWQ6IDExMSwgaGVhZGVyOiAnU2hvcHBpbmcgTGlzdCcsIGl0ZW1zOiBjYXJkSXRlbXMxfSxcbiAgICAgICAgeyBpZDogMjIyLCBoZWFkZXI6ICdUYXNrcycsIGl0ZW1zOiBjYXJkSXRlbXMyfSxcbiAgICBdXG5cblxuICAgIGNvbnN0IFtjYXJkc1N0YXRlLCBjYXJkc0Rpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FyZHNSZWR1Y2VyLCB7IDE6IGNhcmRzUHJlc2V0IH0pXG4gICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkXG4gICAgY29uc3QgY3VycmVudFRhYklkU3RyID0gYCR7dGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkfWBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxuICAgICAgICAgICAgICAgIDxUYWJOYXYgdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NXcmFwfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcHAvc2V0dGluZ3Muc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDYXJkV3JhcH0gb25DbGljaz17KCkgPT4gY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdhZGROZXdDYXJkJywgcGF5bG9hZDogeyB0YWJpZDogY3VycmVudFRhYklkIH0gfSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2FwcC9uZXctY2FyZC5zdmdcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHNTdGF0ZVtjdXJyZW50VGFiSWRTdHJdICYmIGNhcmRzU3RhdGVbY3VycmVudFRhYklkXS5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXJkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT4gPENhcmQgaGVhZGVyPXtjYXJkLmhlYWRlcn0gaXRlbXM9e2NhcmQuaXRlbXN9IGNhcmRpZCA9e2NhcmQuaWR9IGNhcmRzU3RhdGU9e2NhcmRzU3RhdGV9IGNhcmRzRGlzcGF0Y2g9e2NhcmRzRGlzcGF0Y2h9IHRhYmlkPXtjdXJyZW50VGFiSWR9Lz4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tlcl9hcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tasker_app.jsx\n");

/***/ })

});