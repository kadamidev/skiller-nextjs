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

/***/ "./components/Login.jsx":
/*!******************************!*\
  !*** ./components/Login.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/app/Login.module.scss */ \"./styles/app/Login.module.scss\");\n/* harmony import */ var _styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/Login.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar login = function login(props) {\n  _s();\n\n  var username = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var password = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var remember = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  function handleFormSubmit(_x) {\n    return _handleFormSubmit.apply(this, arguments);\n  }\n\n  function _handleFormSubmit() {\n    _handleFormSubmit = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n      var response, json;\n      return _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setMessage('');\n              _context.next = 4;\n              return fetch('/api/user/login', {\n                method: 'POST',\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  user: {\n                    username: username.current.value,\n                    password: password.current.value,\n                    remember: remember.current.checked\n                  }\n                })\n              });\n\n            case 4:\n              response = _context.sent;\n              _context.next = 7;\n              return response.json();\n\n            case 7:\n              json = _context.sent;\n\n              if (response.ok) {\n                props.loginUser(json.user);\n                props.toggleShow();\n              }\n\n              if (!response.ok) {\n                setMessage('Wrong user/pw combination, try again');\n              }\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleFormSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: props.darkMode ? [(_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginContainer), (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().darkMode)].join(' ') : (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().closeButton),\n          onClick: props.toggleShow,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/img/app/delete.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loadingWrapper),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        className: loading ? [(_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userForm), (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userFormHide)].join('') : (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().userForm),\n        action: \"/api/user/login\",\n        method: \"POST\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          htmlFor: \"username\",\n          children: \"Username\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          ref: username,\n          type: \"text\",\n          name: \"user[username]\",\n          id: \"username\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          htmlFor: \"password\",\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          ref: password,\n          type: \"password\",\n          name: \"user[password]\",\n          id: \"password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottomRow),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkContainer),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n              ref: remember,\n              className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkbox),\n              id: \"rememberCheck\",\n              type: \"checkbox\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n              className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().customCheckbox),\n              htmlFor: \"rememberCheck\",\n              children: \"Remember Me\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            onClick: handleFormSubmit,\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        onClick: function onClick() {\n          return setMessage(\"\");\n        },\n        className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().errorMsg),\n        children: message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(login, \"cLqZ4S9613rEv5z58COGigG5QKw=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFWSxnQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpKLGVBNkJJO0FBQU0sZUFBTyxFQUFFO0FBQUEsaUJBQU1ILFVBQVUsQ0FBQyxFQUFELENBQWhCO0FBQUEsU0FBZjtBQUFvQyxpQkFBUyxFQUFFVCwrRUFBL0M7QUFBQSxrQkFBaUVRO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUNILENBcEVEOztHQUFNTDs7QUFzRU4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi5qc3g/MDk3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC9Mb2dpbi5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRlcidcblxuXG5cbmNvbnN0IGxvZ2luID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZVJlZihudWxsKVxuICAgIGNvbnN0IHBhc3N3b3JkID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgcmVtZW1iZXIgPSB1c2VSZWYobnVsbClcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgZmV0Y2goJy9hcGkvdXNlci9sb2dpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICByZW1lbWJlcjogcmVtZW1iZXIuY3VycmVudC5jaGVja2VkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHByb3BzLmxvZ2luVXNlcihqc29uLnVzZXIpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVTaG93KClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1dyb25nIHVzZXIvcHcgY29tYmluYXRpb24sIHRyeSBhZ2FpbicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmRhcmtNb2RlID8gW3N0eWxlcy5sb2dpbkNvbnRhaW5lciwgc3R5bGVzLmRhcmtNb2RlXS5qb2luKCcgJykgOiBzdHlsZXMubG9naW5Db250YWluZXIgfT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17cHJvcHMudG9nZ2xlU2hvd30+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2RlbGV0ZS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtsb2FkaW5nID8gW3N0eWxlcy51c2VyRm9ybSwgc3R5bGVzLnVzZXJGb3JtSGlkZV0uam9pbignJykgOiBzdHlsZXMudXNlckZvcm19IGFjdGlvbj1cIi9hcGkvdXNlci9sb2dpblwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17dXNlcm5hbWV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJbdXNlcm5hbWVdXCIgaWQ9XCJ1c2VybmFtZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyW3Bhc3N3b3JkXVwiIGlkPVwicGFzc3dvcmRcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tUm93fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlbWVtYmVyfSBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH0gaWQ9XCJyZW1lbWJlckNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5jdXN0b21DaGVja2JveH0gaHRtbEZvcj1cInJlbWVtYmVyQ2hlY2tcIj5SZW1lbWJlciBNZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZvcm1TdWJtaXR9PkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldE1lc3NhZ2UoXCJcIil9Y2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNc2d9PnttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiSW1hZ2UiLCJMb2FkZXIiLCJsb2dpbiIsInByb3BzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlbWVtYmVyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXIiLCJjdXJyZW50IiwidmFsdWUiLCJjaGVja2VkIiwicmVzcG9uc2UiLCJqc29uIiwib2siLCJsb2dpblVzZXIiLCJ0b2dnbGVTaG93IiwiZGFya01vZGUiLCJsb2dpbkNvbnRhaW5lciIsImpvaW4iLCJoZWFkZXIiLCJjbG9zZUJ1dHRvbiIsImxvYWRpbmdXcmFwcGVyIiwidXNlckZvcm0iLCJ1c2VyRm9ybUhpZGUiLCJib3R0b21Sb3ciLCJjaGVja0NvbnRhaW5lciIsImNoZWNrYm94IiwiY3VzdG9tQ2hlY2tib3giLCJlcnJvck1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Login.jsx\n");

/***/ })

});