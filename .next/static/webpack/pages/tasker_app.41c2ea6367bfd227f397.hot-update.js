/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./components/tasker_app/TabNav.jsx":
/*!******************************************!*\
  !*** ./components/tasker_app/TabNav.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app/TabNav.module.scss */ \"./styles/app/TabNav.module.scss\");\n/* harmony import */ var _styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TabsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabsMenu */ \"./components/tasker_app/TabsMenu.jsx\");\n/* harmony import */ var _lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useMediaQuery */ \"./lib/useMediaQuery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/TabNav.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar TabNav = function TabNav(_ref) {\n  _s();\n\n  var darkMode = _ref.darkMode,\n      tabsState = _ref.tabsState,\n      dispatch = _ref.dispatch;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tabEdit = _useState[0],\n      setTabEdit = _useState[1];\n\n  var toggleTabEdit = function toggleTabEdit() {\n    setTabEdit(!tabEdit);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      showTabMenu = _useState2[0],\n      setShowTabMenu = _useState2[1];\n\n  var toggleTabMenu = function toggleTabMenu() {\n    return setShowTabMenu(!showTabMenu);\n  };\n\n  var currentTab = tabsState.tabs[tabsState.currentTabIdx];\n  var isDesktop = (0,_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(min-width: 769px)');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n      className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [!isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homeWrap),\n          children: [\"w\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/menu\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/home.svg\",\n                width: 30,\n                height: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 39\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tab),\n          children: !tabEdit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: currentTab.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().edit),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/img/app/edit.svg\",\n                height: 16,\n                width: 16,\n                onClick: toggleTabEdit\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 50\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabInput),\n            type: \"text\",\n            value: currentTab.name,\n            onChange: function onChange(event) {\n              return dispatch({\n                type: 'changeTabName',\n                payload: {\n                  tabId: currentTab.id,\n                  name: event.target.value\n                }\n              });\n            },\n            onBlur: toggleTabEdit\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabsWrap),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/tabs.svg\",\n            width: 30,\n            height: 30,\n            onClick: toggleTabMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true), isDesktop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: tabsState.tabs.map(function (tab, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              className: currentTab == index ? [(_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopCurrent), (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab)].join(\" \") : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desktopTab),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: tab.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 25\n              }, _this)\n            }, tab.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 21\n            }, _this);\n            console.log(tab);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: showTabMenu ? (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().showTabMenu) : (_styles_app_TabNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hideTabMenu),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabsMenu__WEBPACK_IMPORTED_MODULE_4__.default, {\n        darkMode: darkMode,\n        tabsState: tabsState,\n        dispatch: dispatch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TabNav, \"iVMMr9VQuSQhQph1j4deoEsX1mc=\", false, function () {\n  return [_lib_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];\n});\n\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"TabNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3g/NDBlZCJdLCJuYW1lcyI6WyJUYWJOYXYiLCJkYXJrTW9kZSIsInRhYnNTdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJ0YWJFZGl0Iiwic2V0VGFiRWRpdCIsInRvZ2dsZVRhYkVkaXQiLCJzaG93VGFiTWVudSIsInNldFNob3dUYWJNZW51IiwidG9nZ2xlVGFiTWVudSIsImN1cnJlbnRUYWIiLCJ0YWJzIiwiY3VycmVudFRhYklkeCIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJzdHlsZXMiLCJuYW1lIiwiZXZlbnQiLCJ0eXBlIiwicGF5bG9hZCIsInRhYklkIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInRhYiIsImluZGV4Iiwiam9pbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxQztBQUFBOztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUVsQkMsK0NBQVEsQ0FBQyxLQUFELENBRlU7QUFBQSxNQUV6Q0MsT0FGeUM7QUFBQSxNQUVoQ0MsVUFGZ0M7O0FBS2hELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFFRCxjQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQXNCLEdBQXBEOztBQUxnRCxtQkFPVkQsK0NBQVEsQ0FBQyxLQUFELENBUEU7QUFBQSxNQU96Q0ksV0FQeUM7QUFBQSxNQU81QkMsY0FQNEI7O0FBUWhELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxXQUFNRCxjQUFjLENBQUMsQ0FBQ0QsV0FB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QTtBQUFBO0FBQUE7QUFEZSx1QkF0Qm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBdUNBO0FBQUssZUFBUyxFQUFFbEIsV0FBVyxHQUFHUSxtRkFBSCxHQUF3QkEsbUZBQW5EO0FBQUEsNkJBQ0ksOERBQUMsOENBQUQ7QUFBVSxnQkFBUSxFQUFFZixRQUFwQjtBQUE4QixpQkFBUyxFQUFFQyxTQUF6QztBQUFvRCxnQkFBUSxFQUFFQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZDQTtBQUFBLGtCQURKO0FBNkNILENBM0REOztHQUFNSCxNO1VBWWdCZSw2RDs7O0tBWmhCZixNO0FBNkROLCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90YXNrZXJfYXBwL1RhYk5hdi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvVGFiTmF2Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVGFic01lbnUgZnJvbSAnLi9UYWJzTWVudSc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vLi4vbGliL3VzZU1lZGlhUXVlcnknO1xuXG5jb25zdCBUYWJOYXYgPSAoe2RhcmtNb2RlLCB0YWJzU3RhdGUsIGRpc3BhdGNofSkgPT4ge1xuXG4gICAgY29uc3QgW3RhYkVkaXQsIHNldFRhYkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBcbiAgICBjb25zdCB0b2dnbGVUYWJFZGl0ID0gKCkgPT4geyBzZXRUYWJFZGl0KCF0YWJFZGl0KSB9XG4gICAgXG4gICAgY29uc3QgW3Nob3dUYWJNZW51LCBzZXRTaG93VGFiTWVudV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB0b2dnbGVUYWJNZW51ID0gKCkgPT4gc2V0U2hvd1RhYk1lbnUoIXNob3dUYWJNZW51KVxuXG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNTdGF0ZS50YWJzW3RhYnNTdGF0ZS5jdXJyZW50VGFiSWR4XVxuXG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDogNzY5cHgpJylcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtb2JpbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxuICAgICAgICAgICAgeyAhaXNEZXNrdG9wICYmIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVXcmFwfT53XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lbnUnPjxhPjxJbWFnZSBzcmM9XCIvaW1nL2FwcC9ob21lLnN2Z1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0vPjwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJ9PlxuICAgICAgICAgICAgICAgIHsgIXRhYkVkaXQgP1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y3VycmVudFRhYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fT48SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSBvbkNsaWNrPXt0b2dnbGVUYWJFZGl0fSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGFiSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2N1cnJlbnRUYWIubmFtZX0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiAnY2hhbmdlVGFiTmFtZScsIHBheWxvYWQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIuaWQsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e3RvZ2dsZVRhYkVkaXR9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzV3JhcH0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXBwL3RhYnMuc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBvbkNsaWNrPXt0b2dnbGVUYWJNZW51fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4gfVxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRGVza3RvcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XG4gICAgICAgICAgICB7IGlzRGVza3RvcCAmJiA8PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0YWJzU3RhdGUudGFicy5tYXAoICh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RhYi5pZH0gY2xhc3NOYW1lPXsoY3VycmVudFRhYiA9PSBpbmRleCkgPyBbc3R5bGVzLmRlc2t0b3BDdXJyZW50LCBzdHlsZXMuZGVza3RvcFRhYl0uam9pbihcIiBcIikgOiBzdHlsZXMuZGVza3RvcFRhYiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RhYi5uYW1lfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYilcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPn1cblxuICAgICAgICA8L25hdj4gICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd1RhYk1lbnUgPyBzdHlsZXMuc2hvd1RhYk1lbnUgOiBzdHlsZXMuaGlkZVRhYk1lbnV9PlxuICAgICAgICAgICAgPFRhYnNNZW51IGRhcmtNb2RlPXtkYXJrTW9kZX0gdGFic1N0YXRlPXt0YWJzU3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tasker_app/TabNav.jsx\n");

/***/ })

});