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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsReducer\": function() { return /* binding */ cardsReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'setCards':\n      console.log(\"preset cards \".concat(cardsState));\n      console.log(\"postset cards \".concat(action.payload.cards));\n      return action.payload.cards;\n\n    case 'addNewCard':\n      console.log('add new card hit');\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = [];\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(newCards[action.payload.tabid]), [action.payload.card]);\n      return newCards;\n\n    case 'updateCardId':\n      console.log(\"entered updateItemId reducer\");\n\n      var updatedCardsId = _objectSpread({}, cardsState);\n\n      updatedCardsId[action.payload.tabid][action.payload.idx].id = action.payload.newid;\n      return updatedCardsId;\n\n    case 'updateItemId':\n      var updatedItemIds = _objectSpread({}, cardsState);\n\n      console.log(\"entered updateItemId reducer\");\n      console.log(\"payload: \".concat(JSON.stringify(action.payload))); // console.log(`tabid: ${action.payload.tabid}`)\n      // console.log(`cardidx: ${action.payload.cardidx}`)\n      // console.log(`items(non payload): ${updatedItemIds[action.payload.tabid][action.payload.cardidx]['items']}`)\n      // console.log(`itemidx: ${action.payload.itemidx}`)\n      // console.log(`new dbid: ${action.payload.newid}`)\n\n      updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id = action.payload.newid;\n      return updatedItemIds;\n\n    case 'deleteCard':\n      var deletedCards = _objectSpread({}, cardsState);\n\n      deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1);\n      return deletedCards;\n\n    case 'changeHeader':\n      var changedCards = _objectSpread({}, cardsState);\n\n      changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value;\n      return changedCards;\n\n    case 'newCardItem':\n      var updatedCards = _objectSpread({}, cardsState);\n\n      updatedCards[action.payload.tabid][action.payload.cardidx]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(updatedCards[action.payload.tabid][action.payload.cardidx]['items']), [action.payload.newItem]);\n      console.log(\"new item added, new item idx: \".concat(updatedCards[action.payload.tabid][action.payload.cardidx]['items'].length));\n      return updatedCards;\n\n    case 'removeCardItem':\n      var removedCards = _objectSpread({}, cardsState);\n\n      removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter(function (item) {\n        return item.id != action.payload.itemid;\n      });\n      return removedCards;\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState); // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)\n\n\n      toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked;\n      return toggledCards;\n\n    case 'editCardItem':\n      var edittedItems = _objectSpread({}, cardsState);\n\n      edittedItems[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['text'] = action.payload.value;\n      return edittedItems;\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQWhCLENBQVosQ0FBbUNQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlWSxPQUFsRCxFQUEyRCxPQUEzRCxFQUFvRWhCLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTSxHQUFuRixFQUF3RixTQUF4RixJQUFxRyxDQUFDVixNQUFNLENBQUNJLE9BQVAsQ0FBZTJCLE9BQXJIO0FBQ0EsYUFBT0QsWUFBUDs7QUFHSixTQUFLLGNBQUw7QUFDSSxVQUFNRSxZQUFZLHFCQUFPakMsVUFBUCxDQUFsQjs7QUFDQWlDLE1BQUFBLFlBQVksQ0FBQ2hDLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRyxLQUFoQixDQUFaLENBQW1DUCxNQUFNLENBQUNJLE9BQVAsQ0FBZVksT0FBbEQsRUFBMkQsT0FBM0QsRUFBb0VoQixNQUFNLENBQUNJLE9BQVAsQ0FBZU0sR0FBbkYsRUFBd0YsTUFBeEYsSUFBa0dWLE1BQU0sQ0FBQ0ksT0FBUCxDQUFla0IsS0FBakg7QUFDQSxhQUFPVSxZQUFQOztBQUVKO0FBQ0k5QixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBRUEsYUFBT0osVUFBUDtBQTdFUjtBQStFSCxDQWhGTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9jYXJkc1JlZHVjZXIuanM/YWI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5cbmV4cG9ydCBjb25zdCBjYXJkc1JlZHVjZXIgPSAoY2FyZHNTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NldENhcmRzJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwcmVzZXQgY2FyZHMgJHtjYXJkc1N0YXRlfWApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcG9zdHNldCBjYXJkcyAke2FjdGlvbi5wYXlsb2FkLmNhcmRzfWApXG5cbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5jYXJkc1xuXG4gICAgICAgIGNhc2UgJ2FkZE5ld0NhcmQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCBuZXcgY2FyZCBoaXQnKVxuICAgICAgICAgICAgY29uc3QgbmV3Q2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGlmICghbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSA9IFsuLi5uZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0sIGFjdGlvbi5wYXlsb2FkLmNhcmRdXG4gICAgICAgICAgICByZXR1cm4gbmV3Q2FyZHNcblxuICAgICAgICBjYXNlICd1cGRhdGVDYXJkSWQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYGVudGVyZWQgdXBkYXRlSXRlbUlkIHJlZHVjZXJgKVxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENhcmRzSWQgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIHVwZGF0ZWRDYXJkc0lkW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5pZHhdLmlkID0gYWN0aW9uLnBheWxvYWQubmV3aWRcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkQ2FyZHNJZFxuXG4gICAgICAgIGNhc2UgJ3VwZGF0ZUl0ZW1JZCc6XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkSXRlbUlkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYGVudGVyZWQgdXBkYXRlSXRlbUlkIHJlZHVjZXJgKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYHBheWxvYWQ6ICR7SlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpfWApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB0YWJpZDogJHthY3Rpb24ucGF5bG9hZC50YWJpZH1gKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNhcmRpZHg6ICR7YWN0aW9uLnBheWxvYWQuY2FyZGlkeH1gKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGl0ZW1zKG5vbiBwYXlsb2FkKTogJHt1cGRhdGVkSXRlbUlkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ119YClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBpdGVtaWR4OiAke2FjdGlvbi5wYXlsb2FkLml0ZW1pZHh9YClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXcgZGJpZDogJHthY3Rpb24ucGF5bG9hZC5uZXdpZH1gKVxuXG4gICAgICAgICAgICB1cGRhdGVkSXRlbUlkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ11bYWN0aW9uLnBheWxvYWQuaXRlbWlkeF0uaWQgPSBhY3Rpb24ucGF5bG9hZC5uZXdpZFxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJdGVtSWRzXG5cblxuICAgICAgICBjYXNlICdkZWxldGVDYXJkJzpcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgZGVsZXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5zcGxpY2UoYWN0aW9uLnBheWxvYWQuY2FyZGlkeCwgMSlcbiAgICAgICAgICAgIHJldHVybiBkZWxldGVkQ2FyZHNcblxuICAgICAgICBjYXNlICdjaGFuZ2VIZWFkZXInOlxuICAgICAgICAgICAgY29uc3QgY2hhbmdlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBjaGFuZ2VkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdLmhlYWRlciA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlZENhcmRzXG5cblxuICAgICAgICBjYXNlICduZXdDYXJkSXRlbSc6XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10gPSBbLi4udXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5uZXdJdGVtXVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBuZXcgaXRlbSBhZGRlZCwgbmV3IGl0ZW0gaWR4OiAke3VwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10ubGVuZ3RoIH1gKVxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRDYXJkc1xuXG5cbiAgICAgICAgY2FzZSAncmVtb3ZlQ2FyZEl0ZW0nOiBcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXSA9IHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IGFjdGlvbi5wYXlsb2FkLml0ZW1pZClcbiAgICAgICAgICAgIHJldHVybiByZW1vdmVkQ2FyZHNcblxuXG4gICAgICAgIGNhc2UgJ3RvZ2dsZUNhcmRJdGVtJzogXG4gICAgICAgICAgICBjb25zdCB0b2dnbGVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjYXJkIGlkeDoke2FjdGlvbi5wYXlsb2FkLmNhcmRpZHh9IHRhYmlkOiR7YWN0aW9uLnBheWxvYWQudGFiaWR9IGl0ZW1pZHg6JHthY3Rpb24ucGF5bG9hZC5pZHh9YClcbiAgICAgICAgICAgIHRvZ2dsZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ11bYWN0aW9uLnBheWxvYWQuaWR4XVsnY2hlY2tlZCddID0gIWFjdGlvbi5wYXlsb2FkLmNoZWNrZWRcbiAgICAgICAgICAgIHJldHVybiB0b2dnbGVkQ2FyZHNcbiAgICAgICAgXG5cbiAgICAgICAgY2FzZSAnZWRpdENhcmRJdGVtJzpcbiAgICAgICAgICAgIGNvbnN0IGVkaXR0ZWRJdGVtcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgZWRpdHRlZEl0ZW1zW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWyd0ZXh0J10gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIGVkaXR0ZWRJdGVtc1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcpXG5cbiAgICAgICAgICAgIHJldHVybiBjYXJkc1N0YXRlXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ2NCIsInV1aWR2NCIsImNhcmRzUmVkdWNlciIsImNhcmRzU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjYXJkcyIsIm5ld0NhcmRzIiwidGFiaWQiLCJjYXJkIiwidXBkYXRlZENhcmRzSWQiLCJpZHgiLCJpZCIsIm5ld2lkIiwidXBkYXRlZEl0ZW1JZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiY2FyZGlkeCIsIml0ZW1pZHgiLCJkZWxldGVkQ2FyZHMiLCJzcGxpY2UiLCJjaGFuZ2VkQ2FyZHMiLCJoZWFkZXIiLCJ2YWx1ZSIsInVwZGF0ZWRDYXJkcyIsIm5ld0l0ZW0iLCJsZW5ndGgiLCJyZW1vdmVkQ2FyZHMiLCJmaWx0ZXIiLCJpdGVtIiwiaXRlbWlkIiwidG9nZ2xlZENhcmRzIiwiY2hlY2tlZCIsImVkaXR0ZWRJdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/cardsReducer.js\n");

/***/ })

});