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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsReducer\": function() { return /* binding */ cardsReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_tasker_api_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/tasker_api_requests */ \"./lib/tasker_api_requests.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'setCards':\n      console.log(\"preset cards \".concat(cardsState));\n      console.log(\"postset cards \".concat(action.payload.cards));\n      return action.payload.cards;\n\n    case 'addNewCard':\n      console.log('add new card hit');\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = [];\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(newCards[action.payload.tabid]), [action.payload.card]);\n      return newCards;\n\n    case 'updateCardId':\n      console.log(\"entered updateCardId reducer idx:\".concat(action.payload.idx, \" dbid:\").concat(action.payload.newid));\n\n      var updatedCardsId = _objectSpread({}, cardsState);\n\n      if (updatedCardsId[action.payload.tabid][action.payload.idx]) {\n        updatedCardsId[action.payload.tabid][action.payload.idx].id = action.payload.newid;\n      } else {\n        console.log(\"card nolonger exists, deleting from db\");\n        (0,_lib_tasker_api_requests__WEBPACK_IMPORTED_MODULE_2__.deleteCardRequest)({\n          id: action.payload.newid\n        });\n      }\n\n      return updatedCardsId;\n\n    case 'updateItemId':\n      var updatedItemIds = _objectSpread({}, cardsState);\n\n      console.log(\"does the card still exist?: \".concat(JSON.stringify(cardsState[action.payload.tabid][action.payload.cardidx])));\n      console.log(\"does the item still exist?: \".concat(JSON.stringify(cardsState[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx])));\n      console.log(\"\".concat(JSON.stringify(action.payload)));\n\n      if (cardsState[action.payload.tabid][action.payload.cardidx]) {\n        //does the card still exist\n        if (cardsState[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx]) {\n          //does the item still exist\n          updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id = action.payload.newid;\n        } else {\n          if (!action.payload.guestMode) (0,_lib_tasker_api_requests__WEBPACK_IMPORTED_MODULE_2__.deleteItemRequest)({\n            id: action.payload.newid\n          });\n        }\n      }\n\n      return updatedItemIds;\n\n    case 'deleteCard':\n      var deletedCards = _objectSpread({}, cardsState);\n\n      deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1);\n      return deletedCards;\n\n    case 'changeHeader':\n      var changedCards = _objectSpread({}, cardsState);\n\n      changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value;\n      return changedCards;\n\n    case 'newCardItem':\n      var updatedCards = _objectSpread({}, cardsState);\n\n      updatedCards[action.payload.tabid][action.payload.cardidx]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(updatedCards[action.payload.tabid][action.payload.cardidx]['items']), [action.payload.newItem]);\n      console.log(\"new item added, new item idx: \".concat(updatedCards[action.payload.tabid][action.payload.cardidx]['items'].length - 1));\n      return updatedCards;\n\n    case 'removeCardItem':\n      var removedCards = _objectSpread({}, cardsState);\n\n      removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter(function (item) {\n        return item.id != action.payload.itemid;\n      });\n      return removedCards;\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState); // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)\n\n\n      toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked;\n      console.log('item toggle complete');\n      return toggledCards;\n\n    case 'editCardItem':\n      var edittedItems = _objectSpread({}, cardsState);\n\n      edittedItems[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['text'] = action.payload.value;\n      return edittedItems;\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEU7QUFDQSxhQUFPSCxZQUFQOztBQUdKLFNBQUssZ0JBQUw7QUFDSSxVQUFNSSxZQUFZLHFCQUFPaEMsVUFBUCxDQUFsQixDQURKLENBRUk7OztBQUNBZ0MsTUFBQUEsWUFBWSxDQUFDL0IsTUFBTSxDQUFDSSxPQUFQLENBQWVHLEtBQWhCLENBQVosQ0FBbUNQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlWSxPQUFsRCxFQUEyRCxPQUEzRCxFQUFvRWhCLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlSyxHQUFuRixFQUF3RixTQUF4RixJQUFxRyxDQUFDVCxNQUFNLENBQUNJLE9BQVAsQ0FBZTRCLE9BQXJIO0FBQ0E5QixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLGFBQU80QixZQUFQOztBQUdKLFNBQUssY0FBTDtBQUNJLFVBQU1FLFlBQVkscUJBQU9sQyxVQUFQLENBQWxCOztBQUNBa0MsTUFBQUEsWUFBWSxDQUFDakMsTUFBTSxDQUFDSSxPQUFQLENBQWVHLEtBQWhCLENBQVosQ0FBbUNQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlWSxPQUFsRCxFQUEyRCxPQUEzRCxFQUFvRWhCLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlSyxHQUFuRixFQUF3RixNQUF4RixJQUFrR1QsTUFBTSxDQUFDSSxPQUFQLENBQWVtQixLQUFqSDtBQUNBLGFBQU9VLFlBQVA7O0FBRUo7QUFDSS9CLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFFQSxhQUFPSixVQUFQO0FBbkZSO0FBcUZILENBdEZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL2NhcmRzUmVkdWNlci5qcz9hYjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBkZWxldGVDYXJkUmVxdWVzdCwgZGVsZXRlSXRlbVJlcXVlc3QgfSBmcm9tICcuLi9saWIvdGFza2VyX2FwaV9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGNhcmRzUmVkdWNlciA9IChjYXJkc1N0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2V0Q2FyZHMnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByZXNldCBjYXJkcyAke2NhcmRzU3RhdGV9YClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwb3N0c2V0IGNhcmRzICR7YWN0aW9uLnBheWxvYWQuY2FyZHN9YClcblxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmNhcmRzXG5cbiAgICAgICAgY2FzZSAnYWRkTmV3Q2FyZCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIG5ldyBjYXJkIGhpdCcpXG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgaWYgKCFuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0pIHtcbiAgICAgICAgICAgICAgICBuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0gPSBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gWy4uLm5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSwgYWN0aW9uLnBheWxvYWQuY2FyZF1cbiAgICAgICAgICAgIHJldHVybiBuZXdDYXJkc1xuXG4gICAgICAgIGNhc2UgJ3VwZGF0ZUNhcmRJZCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZW50ZXJlZCB1cGRhdGVDYXJkSWQgcmVkdWNlciBpZHg6JHthY3Rpb24ucGF5bG9hZC5pZHh9IGRiaWQ6JHthY3Rpb24ucGF5bG9hZC5uZXdpZH1gKVxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENhcmRzSWQgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGlmICh1cGRhdGVkQ2FyZHNJZFthY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuaWR4XSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRDYXJkc0lkW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5pZHhdLmlkID0gYWN0aW9uLnBheWxvYWQubmV3aWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGNhcmQgbm9sb25nZXIgZXhpc3RzLCBkZWxldGluZyBmcm9tIGRiYClcbiAgICAgICAgICAgICAgICBkZWxldGVDYXJkUmVxdWVzdCh7aWQ6IGFjdGlvbi5wYXlsb2FkLm5ld2lkfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkQ2FyZHNJZFxuXG4gICAgICAgIGNhc2UgJ3VwZGF0ZUl0ZW1JZCc6XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkSXRlbUlkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYGRvZXMgdGhlIGNhcmQgc3RpbGwgZXhpc3Q/OiAke0pTT04uc3RyaW5naWZ5KGNhcmRzU3RhdGVbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdKX1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYGRvZXMgdGhlIGl0ZW0gc3RpbGwgZXhpc3Q/OiAke0pTT04uc3RyaW5naWZ5KGNhcmRzU3RhdGVbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLml0ZW1pZHhdKX1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7SlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpfWApXG4gICAgICAgICAgICBpZiAoY2FyZHNTdGF0ZVthY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF0pIHsgLy9kb2VzIHRoZSBjYXJkIHN0aWxsIGV4aXN0XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRzU3RhdGVbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLml0ZW1pZHhdKSB7IC8vZG9lcyB0aGUgaXRlbSBzdGlsbCBleGlzdFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkSXRlbUlkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ11bYWN0aW9uLnBheWxvYWQuaXRlbWlkeF0uaWQgPSBhY3Rpb24ucGF5bG9hZC5uZXdpZFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLnBheWxvYWQuZ3Vlc3RNb2RlKSBkZWxldGVJdGVtUmVxdWVzdCh7aWQ6IGFjdGlvbi5wYXlsb2FkLm5ld2lkfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJdGVtSWRzXG5cblxuICAgICAgICBjYXNlICdkZWxldGVDYXJkJzpcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgZGVsZXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5zcGxpY2UoYWN0aW9uLnBheWxvYWQuY2FyZGlkeCwgMSlcbiAgICAgICAgICAgIHJldHVybiBkZWxldGVkQ2FyZHNcblxuICAgICAgICBjYXNlICdjaGFuZ2VIZWFkZXInOlxuICAgICAgICAgICAgY29uc3QgY2hhbmdlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBjaGFuZ2VkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdLmhlYWRlciA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlZENhcmRzXG5cblxuICAgICAgICBjYXNlICduZXdDYXJkSXRlbSc6XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10gPSBbLi4udXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5uZXdJdGVtXVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBuZXcgaXRlbSBhZGRlZCwgbmV3IGl0ZW0gaWR4OiAke3VwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10ubGVuZ3RoIC0gMSB9YClcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkQ2FyZHNcblxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZUNhcmRJdGVtJzogXG4gICAgICAgICAgICBjb25zdCByZW1vdmVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10gPSByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pdGVtaWQpXG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlZENhcmRzXG5cblxuICAgICAgICBjYXNlICd0b2dnbGVDYXJkSXRlbSc6IFxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2FyZCBpZHg6JHthY3Rpb24ucGF5bG9hZC5jYXJkaWR4fSB0YWJpZDoke2FjdGlvbi5wYXlsb2FkLnRhYmlkfSBpdGVtaWR4OiR7YWN0aW9uLnBheWxvYWQuaWR4fWApXG4gICAgICAgICAgICB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ2NoZWNrZWQnXSA9ICFhY3Rpb24ucGF5bG9hZC5jaGVja2VkXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbSB0b2dnbGUgY29tcGxldGUnKVxuICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZWRDYXJkc1xuICAgICAgICBcblxuICAgICAgICBjYXNlICdlZGl0Q2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc3QgZWRpdHRlZEl0ZW1zID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBlZGl0dGVkSXRlbXNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ3RleHQnXSA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gZWRpdHRlZEl0ZW1zXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0JylcblxuICAgICAgICAgICAgcmV0dXJuIGNhcmRzU3RhdGVcbiAgICB9XG59Il0sIm5hbWVzIjpbInY0IiwidXVpZHY0IiwiZGVsZXRlQ2FyZFJlcXVlc3QiLCJkZWxldGVJdGVtUmVxdWVzdCIsImNhcmRzUmVkdWNlciIsImNhcmRzU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjYXJkcyIsIm5ld0NhcmRzIiwidGFiaWQiLCJjYXJkIiwiaWR4IiwibmV3aWQiLCJ1cGRhdGVkQ2FyZHNJZCIsImlkIiwidXBkYXRlZEl0ZW1JZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiY2FyZGlkeCIsIml0ZW1pZHgiLCJndWVzdE1vZGUiLCJkZWxldGVkQ2FyZHMiLCJzcGxpY2UiLCJjaGFuZ2VkQ2FyZHMiLCJoZWFkZXIiLCJ2YWx1ZSIsInVwZGF0ZWRDYXJkcyIsIm5ld0l0ZW0iLCJsZW5ndGgiLCJyZW1vdmVkQ2FyZHMiLCJmaWx0ZXIiLCJpdGVtIiwiaXRlbWlkIiwidG9nZ2xlZENhcmRzIiwiY2hlY2tlZCIsImVkaXR0ZWRJdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/cardsReducer.js\n");

/***/ })

});