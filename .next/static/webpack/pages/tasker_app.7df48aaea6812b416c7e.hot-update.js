/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./components/tasker_app/Card.jsx":
/*!****************************************!*\
  !*** ./components/tasker_app/Card.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editClick = function editClick() {\n    setEditHeader(!editHeader);\n  };\n\n  var headerInput = function headerInput(event) {\n    setHeader(event.target.value);\n  };\n\n  var itemInput = function itemInput(event) {\n    var newItems = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(items);\n\n    newItems[event.target.attributes.data.value]['text'] = event.target.value;\n    setItems(newItems);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContainer) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [!editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: props.card.header\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().edit),\n          type: \"text\",\n          value: props.card.header,\n          onChange: function onChange(event) {\n            return props.cardsDispatch({\n              type: 'changeHeader',\n              payload: {\n                tabid: props.tabid,\n                cardidx: props.cardidx,\n                value: event.target.value\n              }\n            });\n          },\n          onBlur: editClick\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().editBtn),\n          onClick: editClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/edit.svg\",\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 73\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().crossed)].join(' ');\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 68,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: editItem ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().editText) : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"fK6AXiQkbvuDNLfH3GJcZgCivs4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRDbGljayIsImhlYWRlcklucHV0IiwiZXZlbnQiLCJzZXRIZWFkZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIml0ZW1JbnB1dCIsIm5ld0l0ZW1zIiwiaXRlbXMiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsInNldEl0ZW1zIiwic3R5bGVzIiwiam9pbiIsImNhcmQiLCJoZWFkZXIiLCJjYXJkc0Rpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJ0YWJpZCIsImNhcmRpZHgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwQ2xhc3MiLCJjaGVja2VkIiwiaWR4IiwidGV4dCIsImUiLCJpdGVtaWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDcEI7QUFEb0Isa0JBRWNDLCtDQUFRLENBQUNELEtBQUssQ0FBQ0UsU0FBUCxDQUZ0QjtBQUFBLE1BRWJBLFNBRmE7QUFBQSxNQUVGQyxZQUZFLGlCQUdwQjs7O0FBSG9CLG1CQUlnQkYsK0NBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJYkcsVUFKYTtBQUFBLE1BSURDLGFBSkM7O0FBQUEsbUJBS1lKLCtDQUFRLENBQUMsS0FBRCxDQUxwQjtBQUFBLE1BS2JLLFFBTGE7QUFBQSxNQUtIQyxXQUxHOztBQVVwQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUJMLGdCQUFZLENBQUMs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QU47QUFBQSxXQUFoRDtBQUFBLGlDQUVJLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLHdCQUFYO0FBQW9DLGtCQUFNLEVBQUUsRUFBNUM7QUFBZ0QsaUJBQUssRUFBRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUE4Q0gsQ0FqRkQ7O0dBQU0vQixJOztLQUFBQSxJO0FBbUZOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYXBwL0NhcmQubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgICAvLyBsaXN0IGNvbGxhcHNlXG4gICAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKHByb3BzLmNvbGxhcHNlZClcbiAgICAvLyBlZGl0IGFuZCBzZXQgaGVhZGVyXG4gICAgY29uc3QgW2VkaXRIZWFkZXIsIHNldEVkaXRIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2VkaXRJdGVtLCBzZXRFZGl0SXRlbV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG5cblxuICAgIGNvbnN0IHRvZ2dsZUNvbGxhcHNlZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdEl0ZW1Ub2dnbGUgPSAoKSA9PiB7IHNldEVkaXRJdGVtKCFlZGl0SXRlbSkgfVxuXG4gICAgY29uc3QgZWRpdENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRFZGl0SGVhZGVyKCFlZGl0SGVhZGVyKVxuICAgIH0gXG5cbiAgICBjb25zdCBoZWFkZXJJbnB1dCA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRIZWFkZXIoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1JbnB1dCA9IChldmVudCkgPT4ge1xuICAgICAgICBsZXQgbmV3SXRlbXMgPSBbLi4uaXRlbXNdXG4gICAgICAgIG5ld0l0ZW1zW2V2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmRhdGEudmFsdWVdWyd0ZXh0J10gPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgc2V0SXRlbXMobmV3SXRlbXMpXG4gICAgfVxuXG5cblxuIFxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXshY29sbGFwc2VkID8gc3R5bGVzLmNhcmRDb250YWluZXIgOiBbc3R5bGVzLmNhcmRDb250YWluZXIsIHN0eWxlcy5jb2xsYXBzZWRdLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICB7ICFlZGl0SGVhZGVyID9cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmNhcmQuaGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9wcy5jYXJkLmhlYWRlcn0gb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdjaGFuZ2VIZWFkZXInLCBwYXlsb2FkOnsgdGFiaWQ6IHByb3BzLnRhYmlkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17ZWRpdENsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0QnRufSBvbkNsaWNrPXtlZGl0Q2xpY2t9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VCdG59IG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlZH0+IDxJbWFnZSBzcmM9eyFjb2xsYXBzZWQgPyAnL2ltZy9hcHAvbWludXMuc3ZnJzogJy9pbWcvYXBwL3BsdXMuc3ZnJ30gaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVDYXJkQnRufSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2RlbGV0ZUNhcmQnLCBwYXlsb2FkOiB7Y2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkfSB9KX0gPiA8SW1hZ2Ugc3JjPXsnL2ltZy9hcHAvY2lyY2xlZC14LnN2Zyd9IGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz4gPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQm9keX0+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2FyZC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBDbGFzcyA9ICFpdGVtLmNoZWNrZWQgPyBzdHlsZXMuaXRlbVRleHQgOiBbc3R5bGVzLml0ZW1UZXh0LCBzdHlsZXMuY3Jvc3NlZF0uam9pbignICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uY2hlY2tlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvY2hlY2tlZC5zdmcnIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gaW5kZXg9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUNhcmRJdGVtJywgcGF5bG9hZDoge3RhYmlkOiBwcm9wcy50YWJpZCwgaWR4OiBpbmRleCwgY2hlY2tlZDogaXRlbS5jaGVja2VkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvdW5jaGVja2VkLnN2Zycgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBpbmRleD17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlQ2FyZEl0ZW0nLCBwYXlsb2FkOiB7dGFiaWQ6IHByb3BzLnRhYmlkLCBpZHg6IGluZGV4LCBjaGVja2VkOiBpdGVtLmNoZWNrZWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17ZWRpdEl0ZW1Ub2dnbGV9IGNsYXNzTmFtZT17IWVkaXRJdGVtID8gcENsYXNzIDogc3R5bGVzLmhpZGV9PntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17ZWRpdEl0ZW0gPyBzdHlsZXMuZWRpdFRleHQgOiBzdHlsZXMuaGlkZX0gdHlwZT1cInRleHRcIiBvbkJsdXI9e2VkaXRJdGVtVG9nZ2xlfSB2YWx1ZT17aXRlbS50ZXh0fSBvbkNoYW5nZT17KGUpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnZWRpdENhcmRJdGVtJywgcGF5bG9hZDoge2lkeDogaW5kZXgsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZCwgdmFsdWU6IGUudGFyZ2V0LnZhbHVlfSB9KSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZVdyYXBwZXJ9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAncmVtb3ZlQ2FyZEl0ZW0nLCBwYXlsb2FkOntjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB0YWJpZDogcHJvcHMudGFiaWQsIGl0ZW1pZDogaXRlbS5pZH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2RlbGV0ZS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSXRlbVdyYXBwZXJ9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goe3R5cGU6ICduZXdDYXJkSXRlbScsIHBheWxvYWQ6IHtpZDogcHJvcHMuY2FyZC5pZCwgdGFiaWQ6IHByb3BzLnRhYmlkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZEl0ZW1XcmFwcGVyfSBvbkNsaWNrPXthZGROZXdJdGVtfT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9wbHVzLWl0ZW0uc3ZnJyBoZWlnaHQ9ezEwfSB3aWR0aD17MTB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});