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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsReducer\": function() { return /* binding */ cardsReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_tasker_api_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/tasker_api_requests */ \"./lib/tasker_api_requests.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'setCards':\n      console.log(\"preset cards \".concat(cardsState));\n      console.log(\"postset cards \".concat(action.payload.cards));\n      return action.payload.cards;\n\n    case 'addNewCard':\n      console.log('add new card hit');\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = [];\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(newCards[action.payload.tabid]), [action.payload.card]);\n      return newCards;\n\n    case 'updateCardId':\n      console.log(\"entered updateCardId reducer idx:\".concat(action.payload.idx, \" dbid:\").concat(action.payload.newid));\n\n      var updatedCardsId = _objectSpread({}, cardsState);\n\n      if (updatedCardsId[action.payload.tabid][action.payload.idx]) {\n        updatedCardsId[action.payload.tabid][action.payload.idx].id = action.payload.newid;\n      } else {\n        console.log(\"card nolonger exists, deleting from db\");\n        (0,_lib_tasker_api_requests__WEBPACK_IMPORTED_MODULE_2__.deleteCardRequest)({\n          id: action.payload.newid\n        });\n      }\n\n      return updatedCardsId;\n\n    case 'updateItemId':\n      var updatedItemIds = _objectSpread({}, cardsState); // console.log(`does the card still exist?: ${JSON.stringify(cardsState[action.payload.tabid][action.payload.cardidx])}`)\n      // console.log(`does the item still exist?: ${JSON.stringify(cardsState[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx])}`)\n      // console.log(`${JSON.stringify(action.payload)}`)\n\n\n      if (cardsState[action.payload.tabid][action.payload.cardidx]) {\n        //does the card still exist\n        if (cardsState[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx]) {\n          //does the item still exist\n          updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id = action.payload.newid;\n        } else {\n          (0,_lib_tasker_api_requests__WEBPACK_IMPORTED_MODULE_2__.deleteItemRequest)({\n            id: action.payload.newid\n          });\n        }\n      }\n\n      return updatedItemIds;\n\n    case 'deleteCard':\n      var deletedCards = _objectSpread({}, cardsState);\n\n      deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1);\n      return deletedCards;\n\n    case 'changeHeader':\n      var changedCards = _objectSpread({}, cardsState);\n\n      changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value;\n      return changedCards;\n\n    case 'newCardItem':\n      var updatedCards = _objectSpread({}, cardsState);\n\n      updatedCards[action.payload.tabid][action.payload.cardidx]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(updatedCards[action.payload.tabid][action.payload.cardidx]['items']), [action.payload.newItem]);\n      console.log(\"new item added, new item idx: \".concat(updatedCards[action.payload.tabid][action.payload.cardidx]['items'].length - 1));\n      return updatedCards;\n\n    case 'removeCardItem':\n      var removedCards = _objectSpread({}, cardsState);\n\n      removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter(function (item) {\n        return item.id != action.payload.itemid;\n      });\n      return removedCards;\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState); // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)\n\n\n      toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked;\n      console.log('item toggle complete');\n      return toggledCards;\n\n    case 'editCardItem':\n      var edittedItems = _objectSpread({}, cardsState);\n\n      edittedItems[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['text'] = action.payload.value;\n      return edittedItems;\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDSSxPQUFQLENBQWVVLE9BQWxELEVBQTJELE9BQTNELEVBQW9FZCxNQUFNLENBQUNJLE9BQVAsQ0FBZUssR0FBbkYsRUFBd0YsTUFBeEYsSUFBa0dULE1BQU0sQ0FBQ0ksT0FBUCxDQUFlZ0IsS0FBakg7QUFDQSxhQUFPVSxZQUFQOztBQUVKO0FBQ0k1QixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBRUEsYUFBT0osVUFBUDtBQW5GUjtBQXFGSCxDQXRGTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9jYXJkc1JlZHVjZXIuanM/YWI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgZGVsZXRlQ2FyZFJlcXVlc3QsIGRlbGV0ZUl0ZW1SZXF1ZXN0IH0gZnJvbSAnLi4vbGliL3Rhc2tlcl9hcGlfcmVxdWVzdHMnXG5cbmV4cG9ydCBjb25zdCBjYXJkc1JlZHVjZXIgPSAoY2FyZHNTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NldENhcmRzJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwcmVzZXQgY2FyZHMgJHtjYXJkc1N0YXRlfWApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcG9zdHNldCBjYXJkcyAke2FjdGlvbi5wYXlsb2FkLmNhcmRzfWApXG5cbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5jYXJkc1xuXG4gICAgICAgIGNhc2UgJ2FkZE5ld0NhcmQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCBuZXcgY2FyZCBoaXQnKVxuICAgICAgICAgICAgY29uc3QgbmV3Q2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGlmICghbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSA9IFsuLi5uZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0sIGFjdGlvbi5wYXlsb2FkLmNhcmRdXG4gICAgICAgICAgICByZXR1cm4gbmV3Q2FyZHNcblxuICAgICAgICBjYXNlICd1cGRhdGVDYXJkSWQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYGVudGVyZWQgdXBkYXRlQ2FyZElkIHJlZHVjZXIgaWR4OiR7YWN0aW9uLnBheWxvYWQuaWR4fSBkYmlkOiR7YWN0aW9uLnBheWxvYWQubmV3aWR9YClcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXJkc0lkID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBpZiAodXBkYXRlZENhcmRzSWRbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmlkeF0pIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkQ2FyZHNJZFthY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuaWR4XS5pZCA9IGFjdGlvbi5wYXlsb2FkLm5ld2lkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjYXJkIG5vbG9uZ2VyIGV4aXN0cywgZGVsZXRpbmcgZnJvbSBkYmApXG4gICAgICAgICAgICAgICAgZGVsZXRlQ2FyZFJlcXVlc3Qoe2lkOiBhY3Rpb24ucGF5bG9hZC5uZXdpZH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZENhcmRzSWRcblxuICAgICAgICBjYXNlICd1cGRhdGVJdGVtSWQnOlxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1JZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBkb2VzIHRoZSBjYXJkIHN0aWxsIGV4aXN0PzogJHtKU09OLnN0cmluZ2lmeShjYXJkc1N0YXRlW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XSl9YClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBkb2VzIHRoZSBpdGVtIHN0aWxsIGV4aXN0PzogJHtKU09OLnN0cmluZ2lmeShjYXJkc1N0YXRlW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pdGVtaWR4XSl9YClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke0pTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKX1gKVxuICAgICAgICAgICAgaWYgKGNhcmRzU3RhdGVbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdKSB7IC8vZG9lcyB0aGUgY2FyZCBzdGlsbCBleGlzdFxuICAgICAgICAgICAgICAgIGlmIChjYXJkc1N0YXRlW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pdGVtaWR4XSkgeyAvL2RvZXMgdGhlIGl0ZW0gc3RpbGwgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEl0ZW1JZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLml0ZW1pZHhdLmlkID0gYWN0aW9uLnBheWxvYWQubmV3aWRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtUmVxdWVzdCh7aWQ6IGFjdGlvbi5wYXlsb2FkLm5ld2lkfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJdGVtSWRzXG5cblxuICAgICAgICBjYXNlICdkZWxldGVDYXJkJzpcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgZGVsZXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXS5zcGxpY2UoYWN0aW9uLnBheWxvYWQuY2FyZGlkeCwgMSlcbiAgICAgICAgICAgIHJldHVybiBkZWxldGVkQ2FyZHNcblxuICAgICAgICBjYXNlICdjaGFuZ2VIZWFkZXInOlxuICAgICAgICAgICAgY29uc3QgY2hhbmdlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBjaGFuZ2VkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdLmhlYWRlciA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlZENhcmRzXG5cblxuICAgICAgICBjYXNlICduZXdDYXJkSXRlbSc6XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIHVwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10gPSBbLi4udXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5uZXdJdGVtXVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBuZXcgaXRlbSBhZGRlZCwgbmV3IGl0ZW0gaWR4OiAke3VwZGF0ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10ubGVuZ3RoIC0gMSB9YClcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkQ2FyZHNcblxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZUNhcmRJdGVtJzogXG4gICAgICAgICAgICBjb25zdCByZW1vdmVkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIHJlbW92ZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF1bJ2l0ZW1zJ10gPSByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPSBhY3Rpb24ucGF5bG9hZC5pdGVtaWQpXG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlZENhcmRzXG5cblxuICAgICAgICBjYXNlICd0b2dnbGVDYXJkSXRlbSc6IFxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2FyZCBpZHg6JHthY3Rpb24ucGF5bG9hZC5jYXJkaWR4fSB0YWJpZDoke2FjdGlvbi5wYXlsb2FkLnRhYmlkfSBpdGVtaWR4OiR7YWN0aW9uLnBheWxvYWQuaWR4fWApXG4gICAgICAgICAgICB0b2dnbGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ2NoZWNrZWQnXSA9ICFhY3Rpb24ucGF5bG9hZC5jaGVja2VkXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbSB0b2dnbGUgY29tcGxldGUnKVxuICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZWRDYXJkc1xuICAgICAgICBcblxuICAgICAgICBjYXNlICdlZGl0Q2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc3QgZWRpdHRlZEl0ZW1zID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBlZGl0dGVkSXRlbXNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ3RleHQnXSA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gZWRpdHRlZEl0ZW1zXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0JylcblxuICAgICAgICAgICAgcmV0dXJuIGNhcmRzU3RhdGVcbiAgICB9XG59Il0sIm5hbWVzIjpbInY0IiwidXVpZHY0IiwiZGVsZXRlQ2FyZFJlcXVlc3QiLCJkZWxldGVJdGVtUmVxdWVzdCIsImNhcmRzUmVkdWNlciIsImNhcmRzU3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjYXJkcyIsIm5ld0NhcmRzIiwidGFiaWQiLCJjYXJkIiwiaWR4IiwibmV3aWQiLCJ1cGRhdGVkQ2FyZHNJZCIsImlkIiwidXBkYXRlZEl0ZW1JZHMiLCJjYXJkaWR4IiwiaXRlbWlkeCIsImRlbGV0ZWRDYXJkcyIsInNwbGljZSIsImNoYW5nZWRDYXJkcyIsImhlYWRlciIsInZhbHVlIiwidXBkYXRlZENhcmRzIiwibmV3SXRlbSIsImxlbmd0aCIsInJlbW92ZWRDYXJkcyIsImZpbHRlciIsIml0ZW0iLCJpdGVtaWQiLCJ0b2dnbGVkQ2FyZHMiLCJjaGVja2VkIiwiZWRpdHRlZEl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/cardsReducer.js\n");

/***/ })

});