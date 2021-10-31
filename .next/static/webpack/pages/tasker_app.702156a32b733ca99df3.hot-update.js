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

/***/ "./reducers/cardsReducer.js":
/*!**********************************!*\
  !*** ./reducers/cardsReducer.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsReducer\": function() { return /* binding */ cardsReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'setCards':\n      console.log(\"preset cards \".concat(cardsState));\n      console.log(\"postset cards \".concat(action.payload.cards));\n      return action.payload.cards;\n\n    case 'addNewCard':\n      console.log('add new card hit');\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = [];\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(newCards[action.payload.tabid]), [action.payload.card]);\n      return newCards;\n\n    case 'updateCardId':\n      console.log(\"entered updateItemId reducer\");\n\n      var updatedCardsId = _objectSpread({}, cardsState);\n\n      updatedCardsId[action.payload.tabid][action.payload.idx].id = action.payload.newid;\n      return updatedCardsId;\n\n    case 'updateItemId':\n      var updatedItemIds = _objectSpread({}, cardsState);\n\n      console.log(\"1 updateItemId payload: \".concat(JSON.stringify(action.payload)));\n      console.log(\"2 state entering updateItemId: \".concat(JSON.stringify(updatedItemIds[action.payload.tabid][action.payload.cardidx])));\n      console.log(\"3 itemidx \".concat(action.payload.itemidx));\n\n      if (updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id == undefined) {\n        console.log('card no longer exists, undefined when trying to update the item id in the reducer');\n      } // console.log(`tabid: ${action.payload.tabid}`)\n      // console.log(`cardidx: ${action.payload.cardidx}`)\n      // console.log(`items(non payload): ${updatedItemIds[action.payload.tabid][action.payload.cardidx]['items']}`)\n      // console.log(`itemidx: ${action.payload.itemidx}`)\n      // console.log(`new dbid: ${action.payload.newid}`)\n\n\n      updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id = action.payload.newid;\n      return updatedItemIds;\n\n    case 'deleteCard':\n      var deletedCards = _objectSpread({}, cardsState);\n\n      deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1);\n      return deletedCards;\n\n    case 'changeHeader':\n      var changedCards = _objectSpread({}, cardsState);\n\n      changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value;\n      return changedCards;\n\n    case 'newCardItem':\n      var updatedCards = _objectSpread({}, cardsState);\n\n      updatedCards[action.payload.tabid][action.payload.cardidx]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(updatedCards[action.payload.tabid][action.payload.cardidx]['items']), [action.payload.newItem]);\n      console.log(\"new item added, new item idx: \".concat(updatedCards[action.payload.tabid][action.payload.cardidx]['items'].length - 1));\n      return updatedCards;\n\n    case 'removeCardItem':\n      var removedCards = _objectSpread({}, cardsState);\n\n      removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter(function (item) {\n        return item.id != action.payload.itemid;\n      });\n      return removedCards;\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState); // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)\n\n\n      toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked;\n      console.log('item toggle complete');\n      return toggledCards;\n\n    case 'editCardItem':\n      var edittedItems = _objectSpread({}, cardsState);\n\n      edittedItems[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['text'] = action.payload.value;\n      return edittedItems;\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFFQSxhQUFPSixVQUFQO0FBbkZSO0FBcUZILENBdEZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL2NhcmRzUmVkdWNlci5qcz9hYjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cblxuZXhwb3J0IGNvbnN0IGNhcmRzUmVkdWNlciA9IChjYXJkc1N0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2V0Q2FyZHMnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByZXNldCBjYXJkcyAke2NhcmRzU3RhdGV9YClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwb3N0c2V0IGNhcmRzICR7YWN0aW9uLnBheWxvYWQuY2FyZHN9YClcblxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmNhcmRzXG5cbiAgICAgICAgY2FzZSAnYWRkTmV3Q2FyZCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIG5ldyBjYXJkIGhpdCcpXG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgaWYgKCFuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0pIHtcbiAgICAgICAgICAgICAgICBuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0gPSBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gWy4uLm5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSwgYWN0aW9uLnBheWxvYWQuY2FyZF1cbiAgICAgICAgICAgIHJldHVybiBuZXdDYXJkc1xuXG4gICAgICAgIGNhc2UgJ3VwZGF0ZUNhcmRJZCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZW50ZXJlZCB1cGRhdGVJdGVtSWQgcmVkdWNlcmApXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2FyZHNJZCA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgdXBkYXRlZENhcmRzSWRbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmlkeF0uaWQgPSBhY3Rpb24ucGF5bG9hZC5uZXdpZFxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRDYXJkc0lkXG5cbiAgICAgICAgY2FzZSAndXBkYXRlSXRlbUlkJzpcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtSWRzID0gey4uLmNhcmRzU3RhdGV9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAxIHVwZGF0ZUl0ZW1JZCBwYXlsb2FkOiAke0pTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKX1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYDIgc3RhdGUgZW50ZXJpbmcgdXBkYXRlSXRlbUlkOiAke0pTT04uc3RyaW5naWZ5KHVwZGF0ZWRJdGVtSWRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XSl9YClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAzIGl0ZW1pZHggJHthY3Rpb24ucGF5bG9hZC5pdGVtaWR4fWApXG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkSXRlbUlkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ11bYWN0aW9uLnBheWxvYWQuaXRlbWlkeF0uaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhcmQgbm8gbG9uZ2VyIGV4aXN0cywgdW5kZWZpbmVkIHdoZW4gdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgaXRlbSBpZCBpbiB0aGUgcmVkdWNlcicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGFiaWQ6ICR7YWN0aW9uLnBheWxvYWQudGFiaWR9YClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjYXJkaWR4OiAke2FjdGlvbi5wYXlsb2FkLmNhcmRpZHh9YClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBpdGVtcyhub24gcGF5bG9hZCk6ICR7dXBkYXRlZEl0ZW1JZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddfWApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgaXRlbWlkeDogJHthY3Rpb24ucGF5bG9hZC5pdGVtaWR4fWApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3IGRiaWQ6ICR7YWN0aW9uLnBheWxvYWQubmV3aWR9YClcblxuICAgICAgICAgICAgdXBkYXRlZEl0ZW1JZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLml0ZW1pZHhdLmlkID0gYWN0aW9uLnBheWxvYWQubmV3aWRcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkSXRlbUlkc1xuXG5cbiAgICAgICAgY2FzZSAnZGVsZXRlQ2FyZCc6XG4gICAgICAgICAgICBjb25zdCBkZWxldGVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGRlbGV0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0uc3BsaWNlKGFjdGlvbi5wYXlsb2FkLmNhcmRpZHgsIDEpXG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlZENhcmRzXG5cbiAgICAgICAgY2FzZSAnY2hhbmdlSGVhZGVyJzpcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgY2hhbmdlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XS5oZWFkZXIgPSBhY3Rpb24ucGF5bG9hZC52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZWRDYXJkc1xuXG5cbiAgICAgICAgY2FzZSAnbmV3Q2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICB1cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddID0gWy4uLnVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10sXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQubmV3SXRlbV1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbmV3IGl0ZW0gYWRkZWQsIG5ldyBpdGVtIGlkeDogJHt1cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddLmxlbmd0aCAtIDEgfWApXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZENhcmRzXG5cblxuICAgICAgICBjYXNlICdyZW1vdmVDYXJkSXRlbSc6IFxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddID0gcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gYWN0aW9uLnBheWxvYWQuaXRlbWlkKVxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWRDYXJkc1xuXG5cbiAgICAgICAgY2FzZSAndG9nZ2xlQ2FyZEl0ZW0nOiBcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNhcmQgaWR4OiR7YWN0aW9uLnBheWxvYWQuY2FyZGlkeH0gdGFiaWQ6JHthY3Rpb24ucGF5bG9hZC50YWJpZH0gaXRlbWlkeDoke2FjdGlvbi5wYXlsb2FkLmlkeH1gKVxuICAgICAgICAgICAgdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWydjaGVja2VkJ10gPSAhYWN0aW9uLnBheWxvYWQuY2hlY2tlZFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gdG9nZ2xlIGNvbXBsZXRlJylcbiAgICAgICAgICAgIHJldHVybiB0b2dnbGVkQ2FyZHNcbiAgICAgICAgXG5cbiAgICAgICAgY2FzZSAnZWRpdENhcmRJdGVtJzpcbiAgICAgICAgICAgIGNvbnN0IGVkaXR0ZWRJdGVtcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgZWRpdHRlZEl0ZW1zW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWyd0ZXh0J10gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIGVkaXR0ZWRJdGVtc1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcpXG5cbiAgICAgICAgICAgIHJldHVybiBjYXJkc1N0YXRlXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ2NCIsInV1aWR2NCIsImNhcmRzUmVkdWNlciIsImNhcmRzU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjYXJkcyIsIm5ld0NhcmRzIiwidGFiaWQiLCJjYXJkIiwidXBkYXRlZENhcmRzSWQiLCJpZHgiLCJpZCIsIm5ld2lkIiwidXBkYXRlZEl0ZW1JZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiY2FyZGlkeCIsIml0ZW1pZHgiLCJ1bmRlZmluZWQiLCJkZWxldGVkQ2FyZHMiLCJzcGxpY2UiLCJjaGFuZ2VkQ2FyZHMiLCJoZWFkZXIiLCJ2YWx1ZSIsInVwZGF0ZWRDYXJkcyIsIm5ld0l0ZW0iLCJsZW5ndGgiLCJyZW1vdmVkQ2FyZHMiLCJmaWx0ZXIiLCJpdGVtIiwiaXRlbWlkIiwidG9nZ2xlZENhcmRzIiwiY2hlY2tlZCIsImVkaXR0ZWRJdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/cardsReducer.js\n");

/***/ })

});