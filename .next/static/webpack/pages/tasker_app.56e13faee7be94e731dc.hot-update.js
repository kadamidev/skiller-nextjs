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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/app/Signup.module.scss */ \"./styles/app/Signup.module.scss\");\n/* harmony import */ var _styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/Signup.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar login = function login(props) {\n  _s();\n\n  var username = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var password = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var remember = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  function handleFormSubmit(_x) {\n    return _handleFormSubmit.apply(this, arguments);\n  }\n\n  function _handleFormSubmit() {\n    _handleFormSubmit = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n      var response, json;\n      return _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setMessage('');\n              setLoading(true);\n              _context.next = 5;\n              return fetch('/api/user/create', {\n                method: 'POST',\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  user: {\n                    username: username.current.value,\n                    password: password.current.value\n                  }\n                })\n              });\n\n            case 5:\n              response = _context.sent;\n              _context.next = 8;\n              return response.json();\n\n            case 8:\n              json = _context.sent;\n              setLoading(false);\n\n              if (!response.ok) {\n                _context.next = 13;\n                break;\n              }\n\n              // props.toggleShow()\n              setMessage({\n                color: 'green',\n                msg: 'Success! you may now log in'\n              });\n              return _context.abrupt(\"return\");\n\n            case 13:\n              if (response.ok) {\n                _context.next = 16;\n                break;\n              }\n\n              setMessage({\n                color: 'green',\n                msg: 'unable to register, try again'\n              });\n              return _context.abrupt(\"return\");\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleFormSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: props.darkMode ? [(_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginContainer), (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().darkMode)].join(' ') : (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().closeButton),\n          onClick: props.toggleShow,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/img/app/delete.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: loading ? (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loadingWrapper) : (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loadingWrapperHide),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        className: loading ? [(_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userForm), (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userFormHide)].join(' ') : (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userForm),\n        action: \"/api/user/login\",\n        method: \"POST\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          htmlFor: \"username\",\n          children: \"Username\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          ref: username,\n          type: \"text\",\n          name: \"user[username]\",\n          id: \"username\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          htmlFor: \"password\",\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          ref: password,\n          type: \"password\",\n          name: \"user[password]\",\n          id: \"password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottomRow),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            onClick: handleFormSubmit,\n            children: \"Signup\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: (_styles_app_Signup_module_scss__WEBPACK_IMPORTED_MODULE_6___default().errorMsg),\n        children: message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(login, \"Yi970wtB7nDrLFSu3r3nXvLqIXs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUNRO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0JILENBbkVEOztHQUFNTDs7QUFxRU4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXAuanN4P2ZhODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAvU2lnbnVwLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGVyJ1xuXG5cblxuY29uc3QgbG9naW4gPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VSZWYobnVsbClcbiAgICBjb25zdCByZW1lbWJlciA9IHVzZVJlZihudWxsKVxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBmZXRjaCgnL2FwaS91c2VyL2NyZWF0ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAvLyBwcm9wcy50b2dnbGVTaG93KClcbiAgICAgICAgICAgIHNldE1lc3NhZ2Uoe2NvbG9yOiAnZ3JlZW4nLCBtc2c6ICdTdWNjZXNzISB5b3UgbWF5IG5vdyBsb2cgaW4nfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgc2V0TWVzc2FnZSh7Y29sb3I6ICdncmVlbicsIG1zZzogJ3VuYWJsZSB0byByZWdpc3RlciwgdHJ5IGFnYWluJ30pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuZGFya01vZGUgPyBbc3R5bGVzLmxvZ2luQ29udGFpbmVyLCBzdHlsZXMuZGFya01vZGVdLmpvaW4oJyAnKSA6IHN0eWxlcy5sb2dpbkNvbnRhaW5lciB9PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlQnV0dG9ufSBvbkNsaWNrPXtwcm9wcy50b2dnbGVTaG93fT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvZGVsZXRlLnN2ZycgaGVpZ2h0PXsxMH0gd2lkdGg9ezEwfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsb2FkaW5nID8gc3R5bGVzLmxvYWRpbmdXcmFwcGVyIDogc3R5bGVzLmxvYWRpbmdXcmFwcGVySGlkZX0+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17bG9hZGluZyA/IFtzdHlsZXMudXNlckZvcm0sIHN0eWxlcy51c2VyRm9ybUhpZGVdLmpvaW4oJyAnKSA6IHN0eWxlcy51c2VyRm9ybX0gYWN0aW9uPVwiL2FwaS91c2VyL2xvZ2luXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXt1c2VybmFtZX0gdHlwZT1cInRleHRcIiBuYW1lPVwidXNlclt1c2VybmFtZV1cIiBpZD1cInVzZXJuYW1lXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtwYXNzd29yZH0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInVzZXJbcGFzc3dvcmRdXCIgaWQ9XCJwYXNzd29yZFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21Sb3d9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRm9ybVN1Ym1pdH0+U2lnbnVwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTXNnfT57bWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkltYWdlIiwiTG9hZGVyIiwibG9naW4iLCJwcm9wcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZW1lbWJlciIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwiY3VycmVudCIsInZhbHVlIiwicmVzcG9uc2UiLCJqc29uIiwib2siLCJjb2xvciIsIm1zZyIsImRhcmtNb2RlIiwibG9naW5Db250YWluZXIiLCJqb2luIiwiaGVhZGVyIiwiY2xvc2VCdXR0b24iLCJ0b2dnbGVTaG93IiwibG9hZGluZ1dyYXBwZXIiLCJsb2FkaW5nV3JhcHBlckhpZGUiLCJ1c2VyRm9ybSIsInVzZXJGb3JtSGlkZSIsImJvdHRvbVJvdyIsImVycm9yTXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Signup.jsx\n");

/***/ })

});