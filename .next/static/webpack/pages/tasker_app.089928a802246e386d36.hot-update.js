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

/***/ "./components/Signup.jsx":
/*!*******************************!*\
  !*** ./components/Signup.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/app/Signup.module.scss */ \"./styles/app/Signup.module.scss\");\n/* harmony import */ var _styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/Signup.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar login = function login(props) {\n  _s();\n\n  var Username = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var Password = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    color: '#52E9C5',\n    msg: ''\n  }),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  function handleFormSubmit(_x) {\n    return _handleFormSubmit.apply(this, arguments);\n  }\n\n  function _handleFormSubmit() {\n    _handleFormSubmit = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n      var response, json;\n      return _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setMessage('');\n              setLoading(true);\n              _context.next = 5;\n              return fetch('/api/user/create', {\n                method: 'POST',\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  user: {\n                    username: username.current.value,\n                    password: password.current.value\n                  }\n                })\n              });\n\n            case 5:\n              response = _context.sent;\n              _context.next = 8;\n              return response.json();\n\n            case 8:\n              json = _context.sent;\n              setLoading(false);\n\n              if (!response.ok) {\n                _context.next = 13;\n                break;\n              }\n\n              // props.toggleShow()\n              setMessage({\n                color: '#52E9C5',\n                msg: 'Success! you may now log in'\n              });\n              return _context.abrupt(\"return\");\n\n            case 13:\n              if (response.ok) {\n                _context.next = 16;\n                break;\n              }\n\n              setMessage({\n                color: '#ff8282',\n                msg: 'unable to register, try again'\n              });\n              return _context.abrupt(\"return\");\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleFormSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: props.darkMode ? [(_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginContainer), (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().darkMode)].join(' ') : (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n          children: \"Signup\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().closeButton),\n          onClick: props.toggleShow,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/img/app/delete.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: loading ? (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loadingWrapper) : (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loadingWrapperHide),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        className: loading ? [(_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userForm), (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userFormHide)].join(' ') : (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userForm),\n        action: \"/api/user/login\",\n        method: \"POST\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          htmlFor: \"username\",\n          children: \"Username\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          ref: username,\n          type: \"text\",\n          name: \"user[username]\",\n          id: \"username\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          htmlFor: \"password\",\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          ref: password,\n          type: \"password\",\n          name: \"user[password]\",\n          id: \"password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottomRow),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            onClick: handleFormSubmit,\n            children: \"Signup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().errorMsg),\n        style: {\n          color: message.color\n        },\n        children: message.msg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(login, \"mGg2bxPA8FgONhQf15xnuthO8KQ=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBa0MsYUFBSyxFQUFFO0FBQUNPLFVBQUFBLEtBQUssRUFBRUUsT0FBTyxDQUFDRjtBQUFoQixTQUF6QztBQUFBLGtCQUFrRUUsT0FBTyxDQUFDRDtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQStCSCxDQWxFRDs7R0FBTUw7O0FBb0VOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lnbnVwLmpzeD9mYTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwL1NpZ251cC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRlcidcblxuXG5cbmNvbnN0IGxvZ2luID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBVc2VybmFtZSA9IHVzZVJlZihudWxsKVxuICAgIGNvbnN0IFBhc3N3b3JkID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoe2NvbG9yOiAnIzUyRTlDNScsIG1zZzogJyd9KVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBmZXRjaCgnL2FwaS91c2VyL2NyZWF0ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAvLyBwcm9wcy50b2dnbGVTaG93KClcbiAgICAgICAgICAgIHNldE1lc3NhZ2Uoe2NvbG9yOiAnIzUyRTlDNScsIG1zZzogJ1N1Y2Nlc3MhIHlvdSBtYXkgbm93IGxvZyBpbid9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKHtjb2xvcjogJyNmZjgyODInLCBtc2c6ICd1bmFibGUgdG8gcmVnaXN0ZXIsIHRyeSBhZ2Fpbid9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmRhcmtNb2RlID8gW3N0eWxlcy5sb2dpbkNvbnRhaW5lciwgc3R5bGVzLmRhcmtNb2RlXS5qb2luKCcgJykgOiBzdHlsZXMubG9naW5Db250YWluZXIgfT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaWdudXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZVNob3d9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9kZWxldGUuc3ZnJyBoZWlnaHQ9ezEwfSB3aWR0aD17MTB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xvYWRpbmcgPyBzdHlsZXMubG9hZGluZ1dyYXBwZXIgOiBzdHlsZXMubG9hZGluZ1dyYXBwZXJIaWRlfT5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtsb2FkaW5nID8gW3N0eWxlcy51c2VyRm9ybSwgc3R5bGVzLnVzZXJGb3JtSGlkZV0uam9pbignICcpIDogc3R5bGVzLnVzZXJGb3JtfSBhY3Rpb249XCIvYXBpL3VzZXIvbG9naW5cIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3VzZXJuYW1lfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyW3VzZXJuYW1lXVwiIGlkPVwidXNlcm5hbWVcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3Bhc3N3b3JkfSB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlcltwYXNzd29yZF1cIiBpZD1cInBhc3N3b3JkXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbVJvd30+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGb3JtU3VibWl0fT5TaWdudXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNc2d9IHN0eWxlPXt7Y29sb3I6IG1lc3NhZ2UuY29sb3J9fT57bWVzc2FnZS5tc2d9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbWFnZSIsIkxvYWRlciIsImxvZ2luIiwicHJvcHMiLCJVc2VybmFtZSIsIlBhc3N3b3JkIiwiY29sb3IiLCJtc2ciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlciIsInVzZXJuYW1lIiwiY3VycmVudCIsInZhbHVlIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImpzb24iLCJvayIsImRhcmtNb2RlIiwibG9naW5Db250YWluZXIiLCJqb2luIiwiaGVhZGVyIiwiY2xvc2VCdXR0b24iLCJ0b2dnbGVTaG93IiwibG9hZGluZ1dyYXBwZXIiLCJsb2FkaW5nV3JhcHBlckhpZGUiLCJ1c2VyRm9ybSIsInVzZXJGb3JtSGlkZSIsImJvdHRvbVJvdyIsImVycm9yTXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Signup.jsx\n");

/***/ })

});