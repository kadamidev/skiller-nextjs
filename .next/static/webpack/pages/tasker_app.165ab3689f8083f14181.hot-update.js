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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editHeaderToggle = function editHeaderToggle() {\n    setEditHeader(!editHeader);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [!editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: props.card.header\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editBtn),\n            onClick: editClick,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 77\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().edit),\n          type: \"text\",\n          value: props.card.header,\n          onChange: function onChange(event) {\n            return props.cardsDispatch({\n              type: 'changeHeader',\n              payload: {\n                tabid: props.tabid,\n                cardidx: props.cardidx,\n                value: event.target.value\n              }\n            });\n          },\n          onBlur: editClick\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(' ');\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: editItem ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText) : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"fK6AXiQkbvuDNLfH3GJcZgCivs4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRIZWFkZXJUb2dnbGUiLCJzdHlsZXMiLCJqb2luIiwiY2FyZCIsImhlYWRlciIsImVkaXRDbGljayIsImV2ZW50IiwiY2FyZHNEaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwidGFiaWQiLCJjYXJkaWR4IiwidmFsdWUiLCJ0YXJnZXQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBDbGFzcyIsImNoZWNrZWQiLCJpZHgiLCJ0ZXh0IiwiZSIsIml0ZW1pZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDcEI7QUFEb0Isa0JBRWNDLCtDQUFRLENBQUNELEtBQUssQ0FBQ0UsU0FBUCxDQUZ0QjtBQUFBLE1BRWJBLFNBRmE7QUFBQSxNQUVGQyxZQUZFLGlCQUdwQjs7O0FBSG9CLG1CQUlnQkYsK0NBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJYkcsVUFKYTtBQUFBLE1BSURDLGFBSkM7O0FBQUEsbUJBS1lKLCtDQUFRLENBQUMsS0FBRCxDQUxwQjtBQUFBLE1BS2JLLFFBTGE7QUFBQSxNQUtIQyxXQUxHOztBQVVwQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUJMLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0gsR0FGRDs7QUFJQSxNQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdB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QUNRO0FBQTFEO0FBQWxDLG1CQUFwQixDQUFOO0FBQUEsaUJBQS9DO0FBQUEsdUNBQ0ksOERBQUMsbURBQUQ7QUFBTyxxQkFBRyxFQUFDLHFCQUFYO0FBQWlDLHdCQUFNLEVBQUUsRUFBekM7QUFBNkMsdUJBQUssRUFBRTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWSjtBQUFBLGVBQVNSLElBQUksQ0FBQ1EsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBZ0JILFdBbEJDO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQXNCSTtBQUFLLG1CQUFTLEVBQUV2QixvRkFBaEI7QUFBdUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNWCxLQUFLLENBQUNpQixhQUFOLENBQW9CO0FBQUNDLGtCQUFJLEVBQUUsYUFBUDtBQUFzQkMscUJBQU8sRUFBRTtBQUFDZSxrQkFBRSxFQUFFbEMsS0FBSyxDQUFDYSxJQUFOLENBQVdxQixFQUFoQjtBQUFvQmQscUJBQUssRUFBRXBCLEtBQUssQ0FBQ29CLEtBQWpDO0FBQXdDQyx1QkFBTyxFQUFFckIsS0FBSyxDQUFDcUI7QUFBdkQ7QUFBL0IsYUFBcEIsQ0FBTjtBQUFBLFdBQWhEO0FBQUEsaUNBRUksOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsd0JBQVg7QUFBb0Msa0JBQU0sRUFBRSxFQUE1QztBQUFnRCxpQkFBSyxFQUFFO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQStDSCxDQXhFRDs7R0FBTXRCLEk7O0tBQUFBLEk7QUEwRU4sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvQ2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvQ2FyZC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5cblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGxpc3QgY29sbGFwc2VcbiAgICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUocHJvcHMuY29sbGFwc2VkKVxuICAgIC8vIGVkaXQgYW5kIHNldCBoZWFkZXJcbiAgICBjb25zdCBbZWRpdEhlYWRlciwgc2V0RWRpdEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZWRpdEl0ZW0sIHNldEVkaXRJdGVtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cblxuXG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VkID0gKCkgPT4ge1xuICAgICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0SXRlbVRvZ2dsZSA9ICgpID0+IHsgc2V0RWRpdEl0ZW0oIWVkaXRJdGVtKSB9XG5cbiAgICBjb25zdCBlZGl0SGVhZGVyVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBzZXRFZGl0SGVhZGVyKCFlZGl0SGVhZGVyKVxuICAgIH0gXG5cblxuXG4gXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyFjb2xsYXBzZWQgPyBzdHlsZXMuY2FyZENvbnRhaW5lciA6IFtzdHlsZXMuY2FyZENvbnRhaW5lciwgc3R5bGVzLmNvbGxhcHNlZF0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIHsgIWVkaXRIZWFkZXIgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmNhcmQuaGVhZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdEJ0bn0gb25DbGljaz17ZWRpdENsaWNrfT48SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0gdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuY2FyZC5oZWFkZXJ9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnY2hhbmdlSGVhZGVyJywgcGF5bG9hZDp7IHRhYmlkOiBwcm9wcy50YWJpZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e2VkaXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRCdG59IG9uQ2xpY2s9e2VkaXRDbGlja30+PEltYWdlIHNyYz0nL2ltZy9hcHAvZWRpdC5zdmcnIGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz48L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VCdG59IG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlZH0+IDxJbWFnZSBzcmM9eyFjb2xsYXBzZWQgPyAnL2ltZy9hcHAvbWludXMuc3ZnJzogJy9pbWcvYXBwL3BsdXMuc3ZnJ30gaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVDYXJkQnRufSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2RlbGV0ZUNhcmQnLCBwYXlsb2FkOiB7Y2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkfSB9KX0gPiA8SW1hZ2Ugc3JjPXsnL2ltZy9hcHAvY2lyY2xlZC14LnN2Zyd9IGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz4gPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQm9keX0+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2FyZC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBDbGFzcyA9ICFpdGVtLmNoZWNrZWQgPyBzdHlsZXMuaXRlbVRleHQgOiBbc3R5bGVzLml0ZW1UZXh0LCBzdHlsZXMuY3Jvc3NlZF0uam9pbignICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uY2hlY2tlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvY2hlY2tlZC5zdmcnIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gaW5kZXg9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUNhcmRJdGVtJywgcGF5bG9hZDoge3RhYmlkOiBwcm9wcy50YWJpZCwgaWR4OiBpbmRleCwgY2hlY2tlZDogaXRlbS5jaGVja2VkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvdW5jaGVja2VkLnN2Zycgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBpbmRleD17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlQ2FyZEl0ZW0nLCBwYXlsb2FkOiB7dGFiaWQ6IHByb3BzLnRhYmlkLCBpZHg6IGluZGV4LCBjaGVja2VkOiBpdGVtLmNoZWNrZWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17ZWRpdEl0ZW1Ub2dnbGV9IGNsYXNzTmFtZT17IWVkaXRJdGVtID8gcENsYXNzIDogc3R5bGVzLmhpZGV9PntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17ZWRpdEl0ZW0gPyBzdHlsZXMuZWRpdFRleHQgOiBzdHlsZXMuaGlkZX0gdHlwZT1cInRleHRcIiBvbkJsdXI9e2VkaXRJdGVtVG9nZ2xlfSB2YWx1ZT17aXRlbS50ZXh0fSBvbkNoYW5nZT17KGUpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnZWRpdENhcmRJdGVtJywgcGF5bG9hZDoge2lkeDogaW5kZXgsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZCwgdmFsdWU6IGUudGFyZ2V0LnZhbHVlfSB9KSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZVdyYXBwZXJ9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAncmVtb3ZlQ2FyZEl0ZW0nLCBwYXlsb2FkOntjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB0YWJpZDogcHJvcHMudGFiaWQsIGl0ZW1pZDogaXRlbS5pZH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2RlbGV0ZS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSXRlbVdyYXBwZXJ9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goe3R5cGU6ICduZXdDYXJkSXRlbScsIHBheWxvYWQ6IHtpZDogcHJvcHMuY2FyZC5pZCwgdGFiaWQ6IHByb3BzLnRhYmlkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZEl0ZW1XcmFwcGVyfSBvbkNsaWNrPXthZGROZXdJdGVtfT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9wbHVzLWl0ZW0uc3ZnJyBoZWlnaHQ9ezEwfSB3aWR0aD17MTB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});