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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editHeaderToggle = function editHeaderToggle() {\n    setEditHeader(!editHeader);\n  };\n\n  var handleTextareaResize = function handleTextareaResize(e) {\n    e.currentTarget.style.height = \"\".concat(e.currentTarget.scrollHeight, \"px\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [props.layoutSetting && !editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerText),\n            children: props.card.header\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editBtn),\n            onClick: editHeaderToggle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 84\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().edit),\n            type: \"text\",\n            value: props.card.header,\n            onChange: function onChange(event) {\n              return props.cardsDispatch({\n                type: 'changeHeader',\n                payload: {\n                  tabid: props.tabid,\n                  cardidx: props.cardidx,\n                  value: event.target.value\n                }\n              });\n            },\n            onBlur: editHeaderToggle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(' ');\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onFocus: handleTextareaResize,\n                className: editItem ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText) : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 69,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"fK6AXiQkbvuDNLfH3GJcZgCivs4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRIZWFkZXJUb2dnbGUiLCJoYW5kbGVUZXh0YXJlYVJlc2l6ZSIsImUiLCJjdXJyZW50VGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzdHlsZXMiLCJqb2luIiwibGF5b3V0U2V0dGluZyIsImNhcmQiLCJoZWFkZXIiLCJldmVudCIsImNhcmRzRGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsInRhYmlkIiwiY2FyZGlkeCIsInZhbHVlIiwidGFyZ2V0IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwQ2xhc3MiLCJjaGVja2VkIiwiaWR4IiwidGV4dCIsIml0ZW1pZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDcEI7QUFEb0Isa0JBRWNDLCtDQUFRLENBQUNELEtBQUssQ0FBQ0UsU0FBUCxDQUZ0QjtBQUFBLE1BRWJBLFNBRmE7QUFBQSxNQUVGQyxZQUZFLGlCQUdwQjs7O0FBSG9CLG1CQUlnQkYsK0NBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJYkcsVUFKYTtBQUFBLE1BSURDLGFBSkM7O0FBQUEsbUJBS1lKLCtDQUFRLENBQUMsS0FBRCxDQUxwQjtBQUFBLE1BS2JLLFFBTGE7QUFBQSxNQUtIQyxXQUxHOztBQVVwQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUJMLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0gsR0FGRDs7QUFJQSxNQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBRUYsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUF3QixHQUF2RDs7QUFFQSxNQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0JMLGlCQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFiO0FBQ0gsR0FGRDs7QUFLQSxNQUFNTyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLENBQUQsRUFBTztBQUNoQ0EsS0FBQyxDQUFDQyxhQUFGLENBQWdCQyxLQUFoQixDQUFzQkMsTUFBdEIsYUFBa0NILENBQUMsQ0FBQ0MsYUFBRixDQUFnQkcsWUFBbEQ7QUFDSCxHQUZEOztBQU1BLHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUUsQ0FBQ2QsU0FBRCxHQUFhZSxtRkFBYixHQUFvQyxDQUFDQSxtRkFBRCxFQUF1QkEsK0VBQXZCLEVBQXlDQyxJQUF6QyxDQUE4QyxHQUE5QyxDQUFwRDtBQUFBLDhCQUNJO0FBQUEsbUJBQ09sQixLQUFLLENBQUNtQixhQUFOLElBQXVCLENBQUNmLFVBQXpCLGdCQUNGO0FBQUssbUJBQVMsRUFBRWEseUZBQWhCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFQSxnRkFBaEI7QUFBQSxzQkFBb0NqQixLQUFLLENBQUNvQixJQUFOLENBQVdDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLHFCQUFTLEVBQUVKLDZFQUFoQjtBQUFnQyxtQkFBTyxFQUFFUCxnQkFBekM7QUFBQSxtQ0FBMkQsOERBQUMsbURBQUQ7QUFBTyxpQkFBRyxFQUFDLG1CQUFYO0FBQStCLG9CQUFNLEVBQUUsRUFBdkM7QUFBMkMsbUJBQUssRUFBRTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURFLGdCQU1GO0FBQUssbUJBQVMsRUFBRU8seUZBQWhCO0FBQUEsaUNBQ0k7QUFBTyxxQkFBUyxFQUFFQSwwRUFBbEI7QUFBK0IsZ0JBQUksRUFBQyxNQUFwQztBQUEyQyxpQkFBSyxFQUFFakIsS0FBSyxDQUFDb0IsSUFBTixDQUFXQyxNQUE3RDtBQUFxRSxvQkFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEscUJBQVd0QixLQUFLLENBQUN1QixhQUFOLENBQW9CO0FBQUVDLG9CQUFJLEVBQUUsY0FBUjtBQUF3QkMsdUJBQU8sRUFBQztBQUFFQyx1QkFBSyxFQUFFMUIsS0FBSyxDQUFDMEIsS0FBZjtBQUFzQkMseUJBQU8sRUFBRTNCLEtBQUssQ0FBQzJCLE9BQXJDO0FBQThDQyx1QkFBSyxFQUFFTixLQUFLLENBQUNPLE1BQU4sQ0FBYUQ7QUFBbEU7QUFBaEMsZUFBcEIsQ0FBWDtBQUFBLGFBQS9FO0FBQTROLGtCQUFNLEVBQUVsQjtBQUFwTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQVlJO0FBQUssbUJBQVMsRUFBRU8saUZBQWhCO0FBQW9DLGlCQUFPLEVBQUVULGVBQTdDO0FBQUEsdUNBQStELDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFFLENBQUNOLFNBQUQsR0FBYSxvQkFBYixHQUFtQyxtQkFBL0M7QUFBb0Usa0JBQU0sRUFBRSxFQUE1RTtBQUFnRixpQkFBSyxFQUFFO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSixlQWFJO0FBQUssbUJBQVMsRUFBRWUsbUZBQWhCO0FBQXNDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWpCLEtBQUssQ0FBQ3VCLGFBQU4sQ0FBb0I7QUFBRUMsa0JBQUksRUFBRSxZQUFSO0FBQXNCQyxxQkFBTyxFQUFFO0FBQUNFLHVCQUFPLEVBQUUzQixLQUFLLENBQUMyQixPQUFoQjtBQUF5QkQscUJBQUssRUFBRTFCLEtBQUssQ0FBQzBCO0FBQXRDO0FBQS9CLGFBQXBCLENBQU47QUFBQSxXQUEvQztBQUFBLHVDQUEySiw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBRSx3QkFBWjtBQUFzQyxrQkFBTSxFQUFFLEVBQTlDO0FBQWtELGlCQUFLLEVBQUU7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBM0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBaUJJO0FBQVMsaUJBQVMsRUFBRVQsOEVBQXBCO0FBQUEsZ0NBQ0k7QUFBQSxvQkFDTWpCLEtBQUssQ0FBQ29CLElBQU4sQ0FBV1UsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3BDLGdCQUFJQyxNQUFNLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxPQUFOLEdBQWdCbEIsOEVBQWhCLEdBQWtDLENBQUNBLDhFQUFELEVBQWtCQSw2RUFBbEIsRUFBa0NDLElBQWxDLENBQXVDLEdBQXZDLENBQS9DO0FBQ0EsZ0NBQ0k7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUVELDhFQUFoQjtBQUFBLDBCQUNNZSxJQUFJLENBQUNHLE9BQUwsZ0JBQ0YsOERBQUMsbURBQUQ7QUFBTyxxQkFBRyxFQUFDLHNCQUFYO0FBQWtDLHVCQUFLLEVBQUUsRUFBekM7QUFBNkMsd0JBQU0sRUFBRSxFQUFyRDtBQUF5RCx1QkFBSyxFQUFFRixLQUFoRTtBQUF1RSx5QkFBTyxFQUFFO0FBQUEsMkJBQU1qQyxLQUFLLENBQUN1QixhQUFOLENBQW9CO0FBQUVDLDBCQUFJLEVBQUUsZ0JBQVI7QUFBMEJDLDZCQUFPLEVBQUU7QUFBQ0MsNkJBQUssRUFBRTFCLEtBQUssQ0FBQzBCLEtBQWQ7QUFBcUJVLDJCQUFHLEVBQUVILEtBQTFCO0FBQWlDRSwrQkFBTyxFQUFFSCxJQUFJLENBQUNHLE9BQS9DO0FBQXdEUiwrQkFBTyxFQUFFM0IsS0FBSyxDQUFDMkI7QUFBdkU7QUFBbkMscUJBQXBCLENBQU47QUFBQTtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURFLGdCQUdGLDhEQUFDLG1EQUFEO0FBQU8scUJBQUcsRUFBQyx3QkFBWDtBQUFvQyx1QkFBSyxFQUFFLEVBQTNDO0FBQStDLHdCQUFNLEVBQUUsRUFBdkQ7QUFBMkQsdUJBQUssRUFBRU0sS0FBbEU7QUFBeUUseUJBQU8sRUFBRTtBQUFBLDJCQUFNakMsS0FBSyxDQUFDdUIsYUFBTixDQUFvQjtBQUFFQywwQkFBSSxFQUFFLGdCQUFSO0FBQTBCQyw2QkFBTyxFQUFFO0FBQUNDLDZCQUFLLEVBQUUxQixLQUFLLENBQUMwQixLQUFkO0FBQXFCVSwyQkFBRyxFQUFFSCxLQUExQjtBQUFpQ0UsK0JBQU8sRUFBRUgsSUFBSSxDQUFDRyxPQUEvQztBQUF3RFIsK0JBQU8sRUFBRTNCLEtBQUssQ0FBQzJCO0FBQXZFO0FBQW5DLHFCQUFwQixDQUFOO0FBQUE7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFRSTtBQUFHLHVCQUFPLEVBQUVsQixjQUFaO0FBQTRCLHlCQUFTLEVBQUUsQ0FBQ0gsUUFBRCxHQUFZNEIsTUFBWixHQUFxQmpCLDBFQUE1RDtBQUFBLDBCQUEwRWUsSUFBSSxDQUFDSztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJKLGVBU0k7QUFBVSx1QkFBTyxFQUFFMUIsb0JBQW5CO0FBQXlDLHlCQUFTLEVBQUVMLFFBQVEsR0FBR1csOEVBQUgsR0FBcUJBLDBFQUFqRjtBQUE4RixvQkFBSSxFQUFDLE1BQW5HO0FBQTBHLHNCQUFNLEVBQUVSLGNBQWxIO0FBQWtJLHFCQUFLLEVBQUV1QixJQUFJLENBQUNLLElBQTlJO0FBQW9KLHdCQUFRLEVBQUUsa0JBQUN6QixDQUFEO0FBQUEseUJBQU9aLEtBQUssQ0FBQ3VCLGFBQU4sQ0FBb0I7QUFBRUMsd0JBQUksRUFBRSxjQUFSO0FBQXdCQywyQkFBTyxFQUFFO0FBQUNXLHlCQUFHLEVBQUVILEtBQU47QUFBYU4sNkJBQU8sRUFBRTNCLEtBQUssQ0FBQzJCLE9BQTVCO0FBQXFDRCwyQkFBSyxFQUFFMUIsS0FBSyxDQUFDMEIsS0FBbEQ7QUFBeURFLDJCQUFLLEVBQUVoQixDQUFDLENBQUNpQixNQUFGLENBQVNEO0FBQXpFO0FBQWpDLG1CQUFwQixDQUFQO0FBQUE7QUFBOUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFUSixlQVVJO0FBQUsseUJBQVMsRUFBRVgsbUZBQWhCO0FBQXNDLHVCQUFPLEVBQUU7QUFBQSx5QkFBTWpCLEtBQUssQ0FBQ3VCLGFBQU4sQ0FBb0I7QUFBRUMsd0JBQUksRUFBRSxnQkFBUjtBQUEwQkMsMkJBQU8sRUFBQztBQUFDRSw2QkFBTyxFQUFFM0IsS0FBSyxDQUFDMkIsT0FBaEI7QUFBeUJELDJCQUFLLEVBQUUxQixLQUFLLENBQUMwQixLQUF0QztBQUE2Q1ksNEJBQU0sRUFBRU4sSUFBSSxDQUFDTztBQUExRDtBQUFsQyxtQkFBcEIsQ0FBTjtBQUFBLGlCQUEvQztBQUFBLHVDQUNJLDhEQUFDLG1EQUFEO0FBQU8scUJBQUcsRUFBQyxxQkFBWDtBQUFpQyx3QkFBTSxFQUFFLEVBQXpDO0FBQTZDLHVCQUFLLEVBQUU7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVko7QUFBQSxlQUFTUCxJQUFJLENBQUNPLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQWdCSCxXQWxCQztBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFzQkk7QUFBSyxtQkFBUyxFQUFFdEIsb0ZBQWhCO0FBQXVDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWpCLEtBQUssQ0FBQ3VCLGFBQU4sQ0FBb0I7QUFBQ0Msa0JBQUksRUFBRSxhQUFQO0FBQXNCQyxxQkFBTyxFQUFFO0FBQUNjLGtCQUFFLEVBQUV2QyxLQUFLLENBQUNvQixJQUFOLENBQVdtQixFQUFoQjtBQUFvQmIscUJBQUssRUFBRTFCLEtBQUssQ0FBQzBCLEtBQWpDO0FBQXdDQyx1QkFBTyxFQUFFM0IsS0FBSyxDQUFDMkI7QUFBdkQ7QUFBL0IsYUFBcEIsQ0FBTjtBQUFBLFdBQWhEO0FBQUEsaUNBRUksOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsd0JBQVg7QUFBb0Msa0JBQU0sRUFBRSxFQUE1QztBQUFnRCxpQkFBSyxFQUFFO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFpREgsQ0E1RUQ7O0dBQU01QixJOztLQUFBQSxJO0FBOEVOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYXBwL0NhcmQubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgICAvLyBsaXN0IGNvbGxhcHNlXG4gICAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKHByb3BzLmNvbGxhcHNlZClcbiAgICAvLyBlZGl0IGFuZCBzZXQgaGVhZGVyXG4gICAgY29uc3QgW2VkaXRIZWFkZXIsIHNldEVkaXRIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2VkaXRJdGVtLCBzZXRFZGl0SXRlbV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG5cblxuICAgIGNvbnN0IHRvZ2dsZUNvbGxhcHNlZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdEl0ZW1Ub2dnbGUgPSAoKSA9PiB7IHNldEVkaXRJdGVtKCFlZGl0SXRlbSkgfVxuXG4gICAgY29uc3QgZWRpdEhlYWRlclRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0RWRpdEhlYWRlcighZWRpdEhlYWRlcilcbiAgICB9IFxuXG5cbiAgICBjb25zdCBoYW5kbGVUZXh0YXJlYVJlc2l6ZSA9IChlKSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHtlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0fXB4YFxuICAgIH1cbiBcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IWNvbGxhcHNlZCA/IHN0eWxlcy5jYXJkQ29udGFpbmVyIDogW3N0eWxlcy5jYXJkQ29udGFpbmVyLCBzdHlsZXMuY29sbGFwc2VkXS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgeyAocHJvcHMubGF5b3V0U2V0dGluZyAmJiAhZWRpdEhlYWRlcikgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUZXh0fT57cHJvcHMuY2FyZC5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRCdG59IG9uQ2xpY2s9e2VkaXRIZWFkZXJUb2dnbGV9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0gdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuY2FyZC5oZWFkZXJ9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnY2hhbmdlSGVhZGVyJywgcGF5bG9hZDp7IHRhYmlkOiBwcm9wcy50YWJpZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e2VkaXRIZWFkZXJUb2dnbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbGxhcHNlQnRufSBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZWR9PiA8SW1hZ2Ugc3JjPXshY29sbGFwc2VkID8gJy9pbWcvYXBwL21pbnVzLnN2Zyc6ICcvaW1nL2FwcC9wbHVzLnN2Zyd9IGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlQ2FyZEJ0bn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdkZWxldGVDYXJkJywgcGF5bG9hZDoge2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZH0gfSl9ID4gPEltYWdlIHNyYz17Jy9pbWcvYXBwL2NpcmNsZWQteC5zdmcnfSBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+IDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEJvZHl9PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNhcmQuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwQ2xhc3MgPSAhaXRlbS5jaGVja2VkID8gc3R5bGVzLml0ZW1UZXh0IDogW3N0eWxlcy5pdGVtVGV4dCwgc3R5bGVzLmNyb3NzZWRdLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja0JveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLmNoZWNrZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2NoZWNrZWQuc3ZnJyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGluZGV4PXtpbmRleH0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICd0b2dnbGVDYXJkSXRlbScsIHBheWxvYWQ6IHt0YWJpZDogcHJvcHMudGFiaWQsIGlkeDogaW5kZXgsIGNoZWNrZWQ6IGl0ZW0uY2hlY2tlZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL3VuY2hlY2tlZC5zdmcnIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gaW5kZXg9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUNhcmRJdGVtJywgcGF5bG9hZDoge3RhYmlkOiBwcm9wcy50YWJpZCwgaWR4OiBpbmRleCwgY2hlY2tlZDogaXRlbS5jaGVja2VkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2VkaXRJdGVtVG9nZ2xlfSBjbGFzc05hbWU9eyFlZGl0SXRlbSA/IHBDbGFzcyA6IHN0eWxlcy5oaWRlfT57aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkZvY3VzPXtoYW5kbGVUZXh0YXJlYVJlc2l6ZX0gY2xhc3NOYW1lPXtlZGl0SXRlbSA/IHN0eWxlcy5lZGl0VGV4dCA6IHN0eWxlcy5oaWRlfSB0eXBlPVwidGV4dFwiIG9uQmx1cj17ZWRpdEl0ZW1Ub2dnbGV9IHZhbHVlPXtpdGVtLnRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdlZGl0Q2FyZEl0ZW0nLCBwYXlsb2FkOiB7aWR4OiBpbmRleCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkLCB2YWx1ZTogZS50YXJnZXQudmFsdWV9IH0pIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdyZW1vdmVDYXJkSXRlbScsIHBheWxvYWQ6e2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZCwgaXRlbWlkOiBpdGVtLmlkfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvZGVsZXRlLnN2ZycgaGVpZ2h0PXsxMH0gd2lkdGg9ezEwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRJdGVtV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7dHlwZTogJ25ld0NhcmRJdGVtJywgcGF5bG9hZDoge2lkOiBwcm9wcy5jYXJkLmlkLCB0YWJpZDogcHJvcHMudGFiaWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSXRlbVdyYXBwZXJ9IG9uQ2xpY2s9e2FkZE5ld0l0ZW19PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL3BsdXMtaXRlbS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});