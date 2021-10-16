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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsReducer\": function() { return /* binding */ cardsReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar cardsReducer = function cardsReducer(cardsState, action) {\n  switch (action.type) {\n    case 'setCards':\n      console.log(\"preset cards \".concat(cardsState));\n      console.log(\"postset cards \".concat(action.payload.cards));\n      return action.payload.cards;\n\n    case 'addNewCard':\n      console.log('add new card hit');\n\n      var newCards = _objectSpread({}, cardsState);\n\n      if (!newCards[action.payload.tabid]) {\n        newCards[action.payload.tabid] = [];\n      }\n\n      newCards[action.payload.tabid] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(newCards[action.payload.tabid]), [action.payload.card]);\n      return newCards;\n\n    case 'updateCardId':\n      var updatedCardsId = _objectSpread({}, cardsState);\n\n      updatedCardsId[action.payload.tabid][action.payload.idx].id = action.payload.newid;\n      return updatedCardsId;\n\n    case 'updateItemId':\n      var updatedItemIds = _objectSpread({}, cardsState);\n\n      console.log(\"entered updateItemId reducer\");\n      console.log(\"tabid: \".concat(action.payload.tabid));\n      console.log(\"cardidx: \".concat(action.payload.cardidx));\n      updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id = action.payload.newid;\n      return updatedItemIds;\n\n    case 'deleteCard':\n      var deletedCards = _objectSpread({}, cardsState);\n\n      deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1);\n      return deletedCards;\n\n    case 'changeHeader':\n      var changedCards = _objectSpread({}, cardsState);\n\n      changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value;\n      return changedCards;\n\n    case 'newCardItem':\n      var updatedCards = _objectSpread({}, cardsState);\n\n      updatedCards[action.payload.tabid][action.payload.cardidx]['items'] = [].concat((0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(updatedCards[action.payload.tabid][action.payload.cardidx]['items']), [action.payload.newItem]);\n      return updatedCards;\n\n    case 'removeCardItem':\n      var removedCards = _objectSpread({}, cardsState);\n\n      removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter(function (item) {\n        return item.id != action.payload.itemid;\n      });\n      return removedCards;\n\n    case 'toggleCardItem':\n      var toggledCards = _objectSpread({}, cardsState); // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)\n\n\n      toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked;\n      return toggledCards;\n\n    case 'editCardItem':\n      var edittedItems = _objectSpread({}, cardsState);\n\n      edittedItems[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['text'] = action.payload.value;\n      return edittedItems;\n\n    default:\n      console.log('default');\n      return cardsState;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFQOztBQUdKLFNBQUssY0FBTDtBQUNJLFVBQU1FLFlBQVkscUJBQU85QixVQUFQLENBQWxCOztBQUNBOEIsTUFBQUEsWUFBWSxDQUFDN0IsTUFBTSxDQUFDSSxPQUFQLENBQWVHLEtBQWhCLENBQVosQ0FBbUNQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlVSxPQUFsRCxFQUEyRCxPQUEzRCxFQUFvRWQsTUFBTSxDQUFDSSxPQUFQLENBQWVNLEdBQW5GLEVBQXdGLE1BQXhGLElBQWtHVixNQUFNLENBQUNJLE9BQVAsQ0FBZWdCLEtBQWpIO0FBQ0EsYUFBT1MsWUFBUDs7QUFFSjtBQUNJM0IsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUVBLGFBQU9KLFVBQVA7QUF2RVI7QUF5RUgsQ0ExRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FyZHNSZWR1Y2VyLmpzP2FiNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7djQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcblxuXG5leHBvcnQgY29uc3QgY2FyZHNSZWR1Y2VyID0gKGNhcmRzU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdzZXRDYXJkcyc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJlc2V0IGNhcmRzICR7Y2FyZHNTdGF0ZX1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYHBvc3RzZXQgY2FyZHMgJHthY3Rpb24ucGF5bG9hZC5jYXJkc31gKVxuXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuY2FyZHNcblxuICAgICAgICBjYXNlICdhZGROZXdDYXJkJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgbmV3IGNhcmQgaGl0JylcbiAgICAgICAgICAgIGNvbnN0IG5ld0NhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBpZiAoIW5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSkge1xuICAgICAgICAgICAgICAgIG5ld0NhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXSA9IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF0gPSBbLi4ubmV3Q2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLCBhY3Rpb24ucGF5bG9hZC5jYXJkXVxuICAgICAgICAgICAgcmV0dXJuIG5ld0NhcmRzXG5cbiAgICAgICAgY2FzZSAndXBkYXRlQ2FyZElkJzpcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXJkc0lkID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICB1cGRhdGVkQ2FyZHNJZFthY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuaWR4XS5pZCA9IGFjdGlvbi5wYXlsb2FkLm5ld2lkXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZENhcmRzSWRcblxuICAgICAgICBjYXNlICd1cGRhdGVJdGVtSWQnOlxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1JZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlbnRlcmVkIHVwZGF0ZUl0ZW1JZCByZWR1Y2VyYClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0YWJpZDogJHthY3Rpb24ucGF5bG9hZC50YWJpZH1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYGNhcmRpZHg6ICR7YWN0aW9uLnBheWxvYWQuY2FyZGlkeH1gKVxuXG5cbiAgICAgICAgICAgIHVwZGF0ZWRJdGVtSWRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pdGVtaWR4XS5pZCA9IGFjdGlvbi5wYXlsb2FkLm5ld2lkXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEl0ZW1JZHNcblxuXG4gICAgICAgIGNhc2UgJ2RlbGV0ZUNhcmQnOlxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBkZWxldGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdLnNwbGljZShhY3Rpb24ucGF5bG9hZC5jYXJkaWR4LCAxKVxuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZWRDYXJkc1xuXG4gICAgICAgIGNhc2UgJ2NoYW5nZUhlYWRlcic6XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VkQ2FyZHMgPSB7Li4uY2FyZHNTdGF0ZX1cbiAgICAgICAgICAgIGNoYW5nZWRDYXJkc1thY3Rpb24ucGF5bG9hZC50YWJpZF1bYWN0aW9uLnBheWxvYWQuY2FyZGlkeF0uaGVhZGVyID0gYWN0aW9uLnBheWxvYWQudmFsdWVcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VkQ2FyZHNcblxuXG4gICAgICAgIGNhc2UgJ25ld0NhcmRJdGVtJzpcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgdXBkYXRlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXSA9IFsuLi51cGRhdGVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddLFxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLm5ld0l0ZW1dXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZENhcmRzXG5cblxuICAgICAgICBjYXNlICdyZW1vdmVDYXJkSXRlbSc6IFxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZENhcmRzID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICByZW1vdmVkQ2FyZHNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddID0gcmVtb3ZlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gYWN0aW9uLnBheWxvYWQuaXRlbWlkKVxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWRDYXJkc1xuXG5cbiAgICAgICAgY2FzZSAndG9nZ2xlQ2FyZEl0ZW0nOiBcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZWRDYXJkcyA9IHsuLi5jYXJkc1N0YXRlfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNhcmQgaWR4OiR7YWN0aW9uLnBheWxvYWQuY2FyZGlkeH0gdGFiaWQ6JHthY3Rpb24ucGF5bG9hZC50YWJpZH0gaXRlbWlkeDoke2FjdGlvbi5wYXlsb2FkLmlkeH1gKVxuICAgICAgICAgICAgdG9nZ2xlZENhcmRzW2FjdGlvbi5wYXlsb2FkLnRhYmlkXVthY3Rpb24ucGF5bG9hZC5jYXJkaWR4XVsnaXRlbXMnXVthY3Rpb24ucGF5bG9hZC5pZHhdWydjaGVja2VkJ10gPSAhYWN0aW9uLnBheWxvYWQuY2hlY2tlZFxuICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZWRDYXJkc1xuICAgICAgICBcblxuICAgICAgICBjYXNlICdlZGl0Q2FyZEl0ZW0nOlxuICAgICAgICAgICAgY29uc3QgZWRpdHRlZEl0ZW1zID0gey4uLmNhcmRzU3RhdGV9XG4gICAgICAgICAgICBlZGl0dGVkSXRlbXNbYWN0aW9uLnBheWxvYWQudGFiaWRdW2FjdGlvbi5wYXlsb2FkLmNhcmRpZHhdWydpdGVtcyddW2FjdGlvbi5wYXlsb2FkLmlkeF1bJ3RleHQnXSA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gZWRpdHRlZEl0ZW1zXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0JylcblxuICAgICAgICAgICAgcmV0dXJuIGNhcmRzU3RhdGVcbiAgICB9XG59Il0sIm5hbWVzIjpbInY0IiwidXVpZHY0IiwiY2FyZHNSZWR1Y2VyIiwiY2FyZHNTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNhcmRzIiwibmV3Q2FyZHMiLCJ0YWJpZCIsImNhcmQiLCJ1cGRhdGVkQ2FyZHNJZCIsImlkeCIsImlkIiwibmV3aWQiLCJ1cGRhdGVkSXRlbUlkcyIsImNhcmRpZHgiLCJpdGVtaWR4IiwiZGVsZXRlZENhcmRzIiwic3BsaWNlIiwiY2hhbmdlZENhcmRzIiwiaGVhZGVyIiwidmFsdWUiLCJ1cGRhdGVkQ2FyZHMiLCJuZXdJdGVtIiwicmVtb3ZlZENhcmRzIiwiZmlsdGVyIiwiaXRlbSIsIml0ZW1pZCIsInRvZ2dsZWRDYXJkcyIsImNoZWNrZWQiLCJlZGl0dGVkSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/cardsReducer.js\n");

/***/ })

});