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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabsReducer\": function() { return /* binding */ tabsReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar tabsReducer = function tabsReducer(tabsState, action) {\n  switch (action.type) {\n    case 'addNewTab':\n      return {\n        tabs: [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(tabsState.tabs), [{\n          id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n          name: 'Untitled'\n        }]),\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'deleteTab':\n      if (tabsState.tabs.length <= 1) //can't delete a tab if it's the only one\n        return {\n          currentTabIdx: tabsState.currentTabIdx,\n          tabs: tabsState.tabs\n        };\n      var currentTabId = tabsState.tabs[tabsState.currentTabIdx].id; //capture id of currentTab\n\n      var newArr = tabsState.tabs.filter(function (tab) {\n        return tab.id != action.payload.id;\n      }); // maintaining current tab pointer\n\n      if (action.payload.id == currentTabId) {\n        //if the deleted tab is the currentTab\n        return {\n          tabs: newArr,\n          currentTabIdx: 0\n        };\n      }\n\n      if (action.payload.idx < tabsState.currentTabIdx) {\n        //check for currentTab pointer shift\n        for (var idx = 0; idx < tabsState.tabs.length; idx++) {\n          //update pointer\n          if (newArr[idx].id == currentTabId) return {\n            tabs: newArr,\n            currentTabIdx: idx\n          };\n        }\n      }\n\n      return {\n        tabs: newArr,\n        currentTabIdx: tabsState.currentTabIdx\n      };\n\n    case 'changeTabName':\n      var nameChangedTabs = tabsState.tabs.map(function (tab) {\n        if (tab.id == action.payload.tabId) return {\n          id: tab.id,\n          name: action.payload.name\n        };\n        return tab;\n      });\n      return {\n        currentTabIdx: tabsState.currentTabIdx,\n        tabs: nameChangedTabs\n      };\n\n    case 'changeCurrentTab':\n      return {\n        currentTabIdx: action.payload.idx,\n        tabs: tabsState.tabs\n      };\n\n    default:\n      console.log('default hit');\n      return tabsState;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdGFic1JlZHVjZXIuanM/ZWRhYiJdLCJuYW1lcyI6WyJ0YWJzUmVkdWNlciIsInRhYnNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0YWJzIiwiaWQiLCJ1dWlkdjQiLCJuYW1lIiwiY3VycmVudFRhYklkeCIsImxlbmd0aCIsImN1cnJlbnRUYWJJZCIsIm5ld0FyciIsImZpbHRlciIsInRhYiIsInBheWxvYWQiLCJpZHgiLCJuYW1lQ2hhbmdlZFRhYnMiLCJtYXAiLCJ0YWJJZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxTQUFELEVBQVlDLE1BQVosRUFBdUI7QUFDOUMsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxXQUFMO0FBQ0ksYUFBTztBQUFDQyxZQUFJLDhKQUFNSCxTQUFTLENBQUNHLElBQWhCLElBQXNCO0FBQUVDLFlBQUUsRUFBRUMsd0NBQU0sRUFBWjtBQUFnQkMsY0FBSSxFQUFFO0FBQXRCLFNBQXRCLEVBQUw7QUFDQ0MscUJBQWEsRUFBRVAsU0FBUyxDQUFDTztBQUQxQixPQUFQOztBQUdKLFNBQUssV0FBTDtBQUNJLFVBQUlQLFNBQVMsQ0FBQ0csSUFBVixDQUFlSyxNQUFmLElBQXlCLENBQTdCLEVBQWlDO0FBQzdCLGVBQU87QUFBQ0QsdUJBQWEsRUFBRVAsU0FBUyxDQUFDTyxhQUExQjtBQUF5Q0osY0FBSSxFQUFFSCxTQUFTLENBQUNHO0FBQXpELFNBQVA7QUFFSixVQUFNTSxZQUFZLEdBQUdULFNBQVMsQ0FBQ0csSUFBVixDQUFlSCxTQUFTLENBQUNPLGFBQXpCLEVBQXdDSCxFQUE3RCxDQUpKLENBSW9FOztBQUNoRSxVQUFNTSxNQUFNLEdBQUdWLFNBQVMsQ0FBQ0csSUFBVixDQUFlUSxNQUFmLENBQXNCLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNSLEVBQUosSUFBVUgsTUFBTSxDQUFDWSxPQUFQLENBQWVULEVBQTdCO0FBQUEsT0FBekIsQ0FBZixDQUxKLENBTUk7O0FBQ0EsVUFBSUgsTUFBTSxDQUFDWSxPQUFQLENBQWVULEVBQWYsSUFBcUJLLFlBQXpCLEVBQXVDO0FBQUU7QUFDckMsZUFBTztBQUFFTixjQUFJLEVBQUVPLE1BQVI7QUFBZ0JILHVCQUFhLEVBQUU7QUFBL0IsU0FBUDtBQUNIOztBQUVELFVBQUlOLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlQyxHQUFmLEdBQXFCZCxTQUFTLENBQUNPLGFBQW5DLEVBQWtEO0FBQUU7QUFDaEQsYUFBSyxJQUFJTyxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHZCxTQUFTLENBQUNHLElBQVYsQ0FBZUssTUFBdkMsRUFBK0NNLEdBQUcsRUFBbEQsRUFBc0Q7QUFBRTtBQUNwRCxjQUFJSixNQUFNLENBQUNJLEdBQUQsQ0FBTixDQUFZVixFQUFaLElBQWtCSyxZQUF0QixFQUNJLE9BQU87QUFBRU4sZ0JBQUksRUFBRU8sTUFBUjtBQUFnQkgseUJBQWEsRUFBRU87QUFBL0IsV0FBUDtBQUNQO0FBQ0o7O0FBRUQsYUFBTztBQUFFWCxZQUFJLEVBQUVPLE1BQVI7QUFBZ0JILHFCQUFhLEVBQUVQLFNBQVMsQ0FBQ087QUFBekMsT0FBUDs7QUFFSixTQUFLLGVBQUw7QUFDSSxVQUFNUSxlQUFlLEdBQUdmLFNBQVMsQ0FBQ0csSUFBVixDQUFlYSxHQUFmLENBQW1CLFVBQUFKLEdBQUcsRUFBSTtBQUM5QyxZQUFJQSxHQUFHLENBQUNSLEVBQUosSUFBVUgsTUFBTSxDQUFDWSxPQUFQLENBQWVJLEtBQTdCLEVBQ0ksT0FBTztBQUFFYixZQUFFLEVBQUVRLEdBQUcsQ0FBQ1IsRUFBVjtBQUFjRSxjQUFJLEVBQUVMLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlUDtBQUFuQyxTQUFQO0FBQ0osZUFBT00sR0FBUDtBQUNILE9BSnVCLENBQXhCO0FBS0EsYUFBTztBQUFDTCxxQkFBYSxFQUFFUCxTQUFTLENBQUNPLGFBQTFCO0FBQXlDSixZQUFJLEVBQUVZO0FBQS9DLE9BQVA7O0FBRUosU0FBSyxrQkFBTDtBQUNJLGFBQU87QUFBQ1IscUJBQWEsRUFBRU4sTUFBTSxDQUFDWSxPQUFQLENBQWVDLEdBQS9CO0FBQW9DWCxZQUFJLEVBQUVILFNBQVMsQ0FBQ0c7QUFBcEQsT0FBUDs7QUFFSjtBQUNJZSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsYUFBT25CLFNBQVA7QUF0Q1I7QUF3Q0gsQ0F6Q00iLCJmaWxlIjoiLi9yZWR1Y2Vycy90YWJzUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cblxuZXhwb3J0IGNvbnN0IHRhYnNSZWR1Y2VyID0gKHRhYnNTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FkZE5ld1RhYic6XG4gICAgICAgICAgICByZXR1cm4ge3RhYnM6IFsuLi50YWJzU3RhdGUudGFicywgeyBpZDogdXVpZHY0KCksIG5hbWU6ICdVbnRpdGxlZCd9XSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYklkeDogdGFic1N0YXRlLmN1cnJlbnRUYWJJZHh9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdkZWxldGVUYWInOlxuICAgICAgICAgICAgaWYgKHRhYnNTdGF0ZS50YWJzLmxlbmd0aCA8PSAxKSAgLy9jYW4ndCBkZWxldGUgYSB0YWIgaWYgaXQncyB0aGUgb25seSBvbmVcbiAgICAgICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4LCB0YWJzOiB0YWJzU3RhdGUudGFic31cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhYklkID0gdGFic1N0YXRlLnRhYnNbdGFic1N0YXRlLmN1cnJlbnRUYWJJZHhdLmlkIC8vY2FwdHVyZSBpZCBvZiBjdXJyZW50VGFiXG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0YWJzU3RhdGUudGFicy5maWx0ZXIodGFiID0+IHRhYi5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgICAgIC8vIG1haW50YWluaW5nIGN1cnJlbnQgdGFiIHBvaW50ZXJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pZCA9PSBjdXJyZW50VGFiSWQpIHsgLy9pZiB0aGUgZGVsZXRlZCB0YWIgaXMgdGhlIGN1cnJlbnRUYWJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IDAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWR4IDwgdGFic1N0YXRlLmN1cnJlbnRUYWJJZHgpIHsgLy9jaGVjayBmb3IgY3VycmVudFRhYiBwb2ludGVyIHNoaWZ0XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgdGFic1N0YXRlLnRhYnMubGVuZ3RoOyBpZHgrKykgeyAvL3VwZGF0ZSBwb2ludGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdBcnJbaWR4XS5pZCA9PSBjdXJyZW50VGFiSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IGlkeCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4geyB0YWJzOiBuZXdBcnIsIGN1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4IH1cbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdjaGFuZ2VUYWJOYW1lJzpcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDaGFuZ2VkVGFicyA9IHRhYnNTdGF0ZS50YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWIuaWQgPT0gYWN0aW9uLnBheWxvYWQudGFiSWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiB0YWIuaWQsIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWUgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YWJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge2N1cnJlbnRUYWJJZHg6IHRhYnNTdGF0ZS5jdXJyZW50VGFiSWR4LCB0YWJzOiBuYW1lQ2hhbmdlZFRhYnMgfVxuXG4gICAgICAgIGNhc2UgJ2NoYW5nZUN1cnJlbnRUYWInOlxuICAgICAgICAgICAgcmV0dXJuIHtjdXJyZW50VGFiSWR4OiBhY3Rpb24ucGF5bG9hZC5pZHgsIHRhYnM6IHRhYnNTdGF0ZS50YWJzfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBoaXQnKVxuICAgICAgICAgICAgcmV0dXJuIHRhYnNTdGF0ZVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/tabsReducer.js\n");

/***/ })

});