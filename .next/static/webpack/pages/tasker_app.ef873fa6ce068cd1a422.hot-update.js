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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editHeaderToggle = function editHeaderToggle() {\n    setEditHeader(!editHeader);\n  };\n\n  var handleTextareaResize = function handleTextareaResize(e) {\n    e.currentTarget.style.height = \"\".concat(e.currentTarget.scrollHeight, \"px\");\n    console.log(e.target.parent);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [props.layoutSetting && !editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerText),\n            children: props.card.header\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editBtn),\n            onClick: editHeaderToggle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 84\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().edit),\n            type: \"text\",\n            value: props.card.header,\n            onChange: function onChange(event) {\n              return props.cardsDispatch({\n                type: 'changeHeader',\n                payload: {\n                  tabid: props.tabid,\n                  cardidx: props.cardidx,\n                  value: event.target.value\n                }\n              });\n            },\n            onBlur: editHeaderToggle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(' ');\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onInput: handleTextareaResize,\n                className: editItem ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText) : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"fK6AXiQkbvuDNLfH3GJcZgCivs4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRIZWFkZXJUb2dnbGUiLCJoYW5kbGVUZXh0YXJlYVJlc2l6ZSIsImUiLCJjdXJyZW50VGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwicGFyZW50Iiwic3R5bGVzIiwiam9pbiIsImxheW91dFNldHRpbmciLCJjYXJkIiwiaGVhZGVyIiwiZXZlbnQiLCJjYXJkc0Rpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJ0YWJpZCIsImNhcmRpZHgiLCJ2YWx1ZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwicENsYXNzIiwiY2hlY2tlZCIsImlkeCIsInRleHQiLCJpdGVtaWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3BCO0FBRG9CLGtCQUVjQywrQ0FBUSxDQUFDRCxLQUFLLENBQUNFLFNBQVAsQ0FGdEI7QUFBQSxNQUViQSxTQUZhO0FBQUEsTUFFRkMsWUFGRSxpQkFHcEI7OztBQUhvQixtQkFJZ0JGLCtDQUFRLENBQUMsS0FBRCxDQUp4QjtBQUFBLE1BSWJHLFVBSmE7QUFBQSxNQUlEQyxhQUpDOztBQUFBLG1CQUtZSiwrQ0FBUSxDQUFDLEtBQUQsQ0FMcEI7QUFBQSxNQUtiSyxRQUxhO0FBQUEsTUFLSEMsV0FMRzs7QUFVcEIsTUFBTUMsZUFBZSxHQUFH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QUFXa0IsRUFBaEI7QUFBb0JaLHFCQUFLLEVBQUU5QixLQUFLLENBQUM4QixLQUFqQztBQUF3Q0MsdUJBQU8sRUFBRS9CLEtBQUssQ0FBQytCO0FBQXZEO0FBQS9CLGFBQXBCLENBQU47QUFBQSxXQUFoRDtBQUFBLGlDQUVJLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLHdCQUFYO0FBQW9DLGtCQUFNLEVBQUUsRUFBNUM7QUFBZ0QsaUJBQUssRUFBRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBaURILENBN0VEOztHQUFNaEMsSTs7S0FBQUEsSTtBQStFTiwrREFBZUEsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGFza2VyX2FwcC9DYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2FwcC9DYXJkLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cblxuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgLy8gbGlzdCBjb2xsYXBzZVxuICAgIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShwcm9wcy5jb2xsYXBzZWQpXG4gICAgLy8gZWRpdCBhbmQgc2V0IGhlYWRlclxuICAgIGNvbnN0IFtlZGl0SGVhZGVyLCBzZXRFZGl0SGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtlZGl0SXRlbSwgc2V0RWRpdEl0ZW1dID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuXG5cbiAgICBjb25zdCB0b2dnbGVDb2xsYXBzZWQgPSAoKSA9PiB7XG4gICAgICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IGVkaXRJdGVtVG9nZ2xlID0gKCkgPT4geyBzZXRFZGl0SXRlbSghZWRpdEl0ZW0pIH1cblxuICAgIGNvbnN0IGVkaXRIZWFkZXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldEVkaXRIZWFkZXIoIWVkaXRIZWFkZXIpXG4gICAgfSBcblxuXG4gICAgY29uc3QgaGFuZGxlVGV4dGFyZWFSZXNpemUgPSAoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7ZS5jdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodH1weGBcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50KVxuICAgIH1cbiBcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IWNvbGxhcHNlZCA/IHN0eWxlcy5jYXJkQ29udGFpbmVyIDogW3N0eWxlcy5jYXJkQ29udGFpbmVyLCBzdHlsZXMuY29sbGFwc2VkXS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgeyAocHJvcHMubGF5b3V0U2V0dGluZyAmJiAhZWRpdEhlYWRlcikgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUZXh0fT57cHJvcHMuY2FyZC5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRCdG59IG9uQ2xpY2s9e2VkaXRIZWFkZXJUb2dnbGV9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0gdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuY2FyZC5oZWFkZXJ9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnY2hhbmdlSGVhZGVyJywgcGF5bG9hZDp7IHRhYmlkOiBwcm9wcy50YWJpZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e2VkaXRIZWFkZXJUb2dnbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbGxhcHNlQnRufSBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZWR9PiA8SW1hZ2Ugc3JjPXshY29sbGFwc2VkID8gJy9pbWcvYXBwL21pbnVzLnN2Zyc6ICcvaW1nL2FwcC9wbHVzLnN2Zyd9IGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlQ2FyZEJ0bn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdkZWxldGVDYXJkJywgcGF5bG9hZDoge2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZH0gfSl9ID4gPEltYWdlIHNyYz17Jy9pbWcvYXBwL2NpcmNsZWQteC5zdmcnfSBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+IDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEJvZHl9PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNhcmQuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwQ2xhc3MgPSAhaXRlbS5jaGVja2VkID8gc3R5bGVzLml0ZW1UZXh0IDogW3N0eWxlcy5pdGVtVGV4dCwgc3R5bGVzLmNyb3NzZWRdLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja0JveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLmNoZWNrZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2NoZWNrZWQuc3ZnJyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGluZGV4PXtpbmRleH0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICd0b2dnbGVDYXJkSXRlbScsIHBheWxvYWQ6IHt0YWJpZDogcHJvcHMudGFiaWQsIGlkeDogaW5kZXgsIGNoZWNrZWQ6IGl0ZW0uY2hlY2tlZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL3VuY2hlY2tlZC5zdmcnIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gaW5kZXg9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUNhcmRJdGVtJywgcGF5bG9hZDoge3RhYmlkOiBwcm9wcy50YWJpZCwgaWR4OiBpbmRleCwgY2hlY2tlZDogaXRlbS5jaGVja2VkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2VkaXRJdGVtVG9nZ2xlfSBjbGFzc05hbWU9eyFlZGl0SXRlbSA/IHBDbGFzcyA6IHN0eWxlcy5oaWRlfT57aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbklucHV0PXtoYW5kbGVUZXh0YXJlYVJlc2l6ZX0gY2xhc3NOYW1lPXtlZGl0SXRlbSA/IHN0eWxlcy5lZGl0VGV4dCA6IHN0eWxlcy5oaWRlfSB0eXBlPVwidGV4dFwiIG9uQmx1cj17ZWRpdEl0ZW1Ub2dnbGV9IHZhbHVlPXtpdGVtLnRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdlZGl0Q2FyZEl0ZW0nLCBwYXlsb2FkOiB7aWR4OiBpbmRleCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkLCB2YWx1ZTogZS50YXJnZXQudmFsdWV9IH0pIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdyZW1vdmVDYXJkSXRlbScsIHBheWxvYWQ6e2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZCwgaXRlbWlkOiBpdGVtLmlkfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvZGVsZXRlLnN2ZycgaGVpZ2h0PXsxMH0gd2lkdGg9ezEwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRJdGVtV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7dHlwZTogJ25ld0NhcmRJdGVtJywgcGF5bG9hZDoge2lkOiBwcm9wcy5jYXJkLmlkLCB0YWJpZDogcHJvcHMudGFiaWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSXRlbVdyYXBwZXJ9IG9uQ2xpY2s9e2FkZE5ld0l0ZW19PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL3BsdXMtaXRlbS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});