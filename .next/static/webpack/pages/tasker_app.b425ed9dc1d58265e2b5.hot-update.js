"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./reducers/tabsReducer.js":
/*!*********************************!*\
  !*** ./reducers/tabsReducer.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabsReducer\": function() { return /* binding */ tabsReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'setTabs':\n      var currentIdx = action.payload.currentIdx || tabsState.currentTabIdx;\n      return {\n        tabs: action.payload.tabs,\n        currentTabIdx: action.payload.currentTabIdx\n      };\n\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(tabsState.tabs), [action.payload.tab]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'updateTabId':\n      var updatedIdTabs = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(tabsState.tabs);\n\n      var updatedTab = _objectSpread({}, TabsState.tabs[action.payload.newTabIdx]); // updatedTab.id = action.payload.tabDbId\n      // updatedIdTabs[action.payload.newTabIdx] = updatedTab\n\n\n      console.log(updatedTab);\n      console.log(updatedIdTabs);\n      return {\n        tabs: updatedIdTabs,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNLO0FBQXpDLE9BQVA7O0FBRUosU0FBSyxlQUFMO0FBQ0ksVUFBTWUsZUFBZSxHQUFHcEIsU0FBUyxDQUFDTSxJQUFWLENBQWVlLEdBQWYsQ0FBbUIsVUFBQWQsR0FBRyxFQUFJO0FBQzlDLFlBQUlBLEdBQUcsQ0FBQ1MsRUFBSixJQUFVZixNQUFNLENBQUNHLE9BQVAsQ0FBZWtCLEtBQTdCLEVBQ0ksT0FBTztBQUFFTixVQUFBQSxFQUFFLEVBQUVULEdBQUcsQ0FBQ1MsRUFBVjtBQUFjTyxVQUFBQSxJQUFJLEVBQUV0QixNQUFNLENBQUNHLE9BQVAsQ0FBZW1CO0FBQW5DLFNBQVA7QUFDSixlQUFPaEIsR0FBUDtBQUNILE9BSnVCLENBQXhCO0FBS0EsYUFBTztBQUFDRixRQUFBQSxhQUFhLEVBQUVMLFNBQVMsQ0FBQ0ssYUFBMUI7QUFBeUNDLFFBQUFBLElBQUksRUFBRWM7QUFBL0MsT0FBUDs7QUFFSixTQUFLLGtCQUFMO0FBQ0ksYUFBTztBQUFDZixRQUFBQSxhQUFhLEVBQUVKLE1BQU0sQ0FBQ0csT0FBUCxDQUFlZSxHQUEvQjtBQUFvQ2IsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNNO0FBQXBELE9BQVA7O0FBRUo7QUFDSU0sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLGFBQU9iLFNBQVA7QUFuRFI7QUFxREgsQ0F0RE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdGFic1JlZHVjZXIuanM/ZWRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5cbmV4cG9ydCBjb25zdCB0YWJzUmVkdWNlciA9ICh0YWJzU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdzZXRUYWJzJzpcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJZHggPSBhY3Rpb24ucGF5bG9hZC5jdXJyZW50SWR4IHx8IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XG4gICAgICAgICAgICByZXR1cm4ge3RhYnM6IGFjdGlvbi5wYXlsb2FkLnRhYnMsIGN1cnJlbnRUYWJJZHg6IGFjdGlvbi5wYXlsb2FkLmN1cnJlbnRUYWJJZHh9XG5cbiAgICAgICAgY2FzZSAnYWRkTmV3VGFiJzpcbiAgICAgICAgICAgIHJldHVybiB7dGFiczogWy4uLnRhYnNTdGF0ZS50YWJzLCBhY3Rpb24ucGF5bG9hZC50YWJdLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeH1cblxuICAgICAgICBjYXNlICd1cGRhdGVUYWJJZCc6XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkSWRUYWJzID0gWy4uLnRhYnNTdGF0ZS50YWJzXVxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFRhYiA9IHsuLi5UYWJzU3RhdGUudGFic1thY3Rpb24ucGF5bG9hZC5uZXdUYWJJZHhdfVxuICAgICAgICAgICAgLy8gdXBkYXRlZFRhYi5pZCA9IGFjdGlvbi5wYXlsb2FkLnRhYkRiSWRcbiAgICAgICAgICAgIC8vIHVwZGF0ZWRJZFRhYnNbYWN0aW9uLnBheWxvYWQubmV3VGFiSWR4XSA9IHVwZGF0ZWRUYWJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRUYWIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVkSWRUYWJzKVxuICAgICAgICAgICAgcmV0dXJuIHt0YWJzOiB1cGRhdGVkSWRUYWJzLCBjdXJyZW50VGFiSWR4OiB0YWJzU3RhdGUuY3VycmVudFRhYklkeH1cbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdkZWxldGVUYWInOlxuICAgICAgICAgICAgaWYgKHRhYnNTdGF0ZS50YWJzLmxlbmd0aCA8PSAxKSAgLy9jYW4ndCBkZWxldGUgYSB0YWIgaWYgaXQncyB0aGUgb25seSBvbmVcbiAgICAgICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4LCB0YWJzOiB0YWJzU3RhdGUudGFic31cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkIC8vY2FwdHVyZSBpZCBvZiBjdXJyZW50VGFiXG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0YWJzU3RhdGUudGFicy5maWx0ZXIodGFiID0+IHRhYi5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgICAgIC8vIG1haW50YWluaW5nIGN1cnJlbnQgdGFiIHBvaW50ZXJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pZCA9PSBjdXJyZW50VGFiSWQpIHsgLy9pZiB0aGUgZGVsZXRlZCB0YWIgaXMgdGhlIGN1cnJlbnRUYWJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IDAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWR4IDwgdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgpIHsgLy9jaGVjayBmb3IgY3VycmVudFRhYiBwb2ludGVyIHNoaWZ0XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgdGFic1N0YXRlLnRhYnMubGVuZ3RoOyBpZHgrKykgeyAvL3VwZGF0ZSBwb2ludGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdBcnJbaWR4XS5pZCA9PSBjdXJyZW50VGFiSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IGlkeCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4IH1cbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdjaGFuZ2VUYWJOYW1lJzpcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDaGFuZ2VkVGFicyA9IHRhYnNTdGF0ZS50YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWIuaWQgPT0gYWN0aW9uLnBheWxvYWQudGFiSWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiB0YWIuaWQsIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWUgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YWJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4LCB0YWJzOiBuYW1lQ2hhbmdlZFRhYnMgfVxuXG4gICAgICAgIGNhc2UgJ2NoYW5nZUN1cnJlbnRUYWInOlxuICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiBhY3Rpb24ucGF5bG9hZC5pZHgsIHRhYnM6IHRhYnNTdGF0ZS50YWJzfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBoaXQnKVxuICAgICAgICAgICAgcmV0dXJuIHRhYnNTdGF0ZVxuICAgIH1cbn0iXSwibmFtZXMiOlsidjQiLCJ1dWlkdjQiLCJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjdXJyZW50SWR4IiwicGF5bG9hZCIsImN1cnJlbnRUYWJJZHgiLCJ0YWJzIiwidGFiIiwidXBkYXRlZElkVGFicyIsInVwZGF0ZWRUYWIiLCJUYWJzU3RhdGUiLCJuZXdUYWJJZHgiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY3VycmVudFRhYklkIiwiaWQiLCJuZXdBcnIiLCJmaWx0ZXIiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/tabsReducer.js\n");

/***/ })

});