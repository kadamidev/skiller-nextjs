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

/***/ "./components/UserPanel.jsx":
/*!**********************************!*\
  !*** ./components/UserPanel.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app/UserPanel.module.scss */ \"./styles/app/UserPanel.module.scss\");\n/* harmony import */ var _styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/UserPanel.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar UserPanel = function UserPanel(_ref) {\n  _s();\n\n  var username = _ref.username,\n      guestMode = _ref.guestMode,\n      darkMode = _ref.darkMode;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showPopup = _useState[0],\n      setShowPopup = _useState[1];\n\n  function toggleShowPopup() {\n    setShowPopup(!showPopup);\n  }\n\n  var popupClass = showPopup ? (_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().popupContainer) : (_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().hide);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: toggleShowPopup,\n        className: guestMode ? [popupClass, (_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().guestIcon)].join(' ') : popupClass,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: username ? username[0].toUpperCase() : 'G'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkMode ? [(_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().popupContainer), (_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().darkMode)].join(' ') : (_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().popupContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: guestMode ? \"Welcome Guest\" : \"Welcome back, \".concat(username)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_UserPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttons),\n          children: guestMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              children: \"Login\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              children: \"Signup\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              children: \"Logout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(UserPanel, \"YxEq4CBtuWdF8IGTVx1DJqim++A=\");\n\n_c = UserPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPanel);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserPanel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQYW5lbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxQztBQUFBOztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUNqQkwsK0NBQVEsQ0FBQyxLQUFELENBRFM7QUFBQSxNQUM1Q00sU0FENEM7QUFBQSxNQUNqQ0MsWUFEaUM7O0FBR25ELFdBQVNDLGVBQVQsR0FBMkI7QUFBRUQsSUFBQUEsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUEwQjs7QUFFdkQsTUFBTUcsVUFBVSxHQUFHSCxTQUFTLEdBQUdMLHlGQUFILEdBQTJCQSwrRUFBdkQ7QUFFQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFQSxvRkFBaEI7QUFBQSw4QkFDSTtBQUNBLGVBQU8sRUFBRU8sZUFEVDtBQUVBLGlCQUFTLEVBQUVKLFNBQVMsR0FBRyxDQUFDSyxVQUFELEVBQWFSLG9GQUFiLEVBQStCYSxJQUEvQixDQUFvQyxHQUFwQyxDQUFILEdBQThDTCxVQUZsRTtBQUFBLCtCQUdJO0FBQUEsb0JBQUtOLFFBQVEsR0FBR0EsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZWSxXQUFaLEVBQUgsR0FBK0I7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JO0FBQUssaUJBQVMsRUFBRVYsUUFBUSxHQUFHLENBQUNKLHlGQUFELEVBQXdCQSxtRkFBeEIsRUFBeUNhLElBQXpDLENBQThDLEdBQTlDLENBQUgsR0FBd0RiLHlGQUFoRjtBQUFBLGdDQUNJO0FBQUEsb0JBQUtHLFNBQVMsNkNBQXNDRCxRQUF0QztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLG1CQUFTLEVBQUVGLGtGQUFoQjtBQUFBLG9CQUNLRyxTQUFTLGdCQUNWO0FBQUEsb0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBLDBCQURVLGdCQU1WO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMkJILENBbENEOztHQUFNRjs7S0FBQUE7QUFvQ04sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUGFuZWwuanN4P2JmYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwL1VzZXJQYW5lbC5tb2R1bGUuc2NzcydcblxuXG5jb25zdCBVc2VyUGFuZWwgPSAoe3VzZXJuYW1lLCBndWVzdE1vZGUsIGRhcmtNb2RlfSkgPT4ge1xuICAgIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNob3dQb3B1cCgpIHsgc2V0U2hvd1BvcHVwKCFzaG93UG9wdXApIH1cblxuICAgIGNvbnN0IHBvcHVwQ2xhc3MgPSBzaG93UG9wdXAgPyBzdHlsZXMucG9wdXBDb250YWluZXIgOiBzdHlsZXMuaGlkZVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93UG9wdXB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtndWVzdE1vZGUgPyBbcG9wdXBDbGFzcywgc3R5bGVzLmd1ZXN0SWNvbl0uam9pbignICcpIDogcG9wdXBDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57dXNlcm5hbWUgPyB1c2VybmFtZVswXS50b1VwcGVyQ2FzZSgpIDogJ0cnfTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFya01vZGUgPyBbc3R5bGVzLnBvcHVwQ29udGFpbmVyLCBzdHlsZXMuZGFya01vZGVdLmpvaW4oJyAnKSA6IHN0eWxlcy5wb3B1cENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57Z3Vlc3RNb2RlID8gYFdlbGNvbWUgR3Vlc3RgIDogYFdlbGNvbWUgYmFjaywgJHt1c2VybmFtZX1gfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Z3Vlc3RNb2RlID8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlNpZ251cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclBhbmVsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJVc2VyUGFuZWwiLCJ1c2VybmFtZSIsImd1ZXN0TW9kZSIsImRhcmtNb2RlIiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwidG9nZ2xlU2hvd1BvcHVwIiwicG9wdXBDbGFzcyIsInBvcHVwQ29udGFpbmVyIiwiaGlkZSIsImNvbnRhaW5lciIsImd1ZXN0SWNvbiIsImpvaW4iLCJ0b1VwcGVyQ2FzZSIsImJ1dHRvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserPanel.jsx\n");

/***/ })

});