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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editHeaderToggle = function editHeaderToggle() {\n    setEditHeader(!editHeader);\n  };\n\n  var textArea = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var handleTextareaResizeAll = function handleTextareaResizeAll(e) {};\n\n  var handleTextareaResize = function handleTextareaResize(e) {\n    e.currentTarget.style.height = \"\".concat(e.currentTarget.scrollHeight, \"px\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [props.layoutSetting && !editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerText),\n            children: props.card.header\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editBtn),\n            onClick: editHeaderToggle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 84\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().edit),\n            type: \"text\",\n            value: props.card.header,\n            onChange: function onChange(event) {\n              return props.cardsDispatch({\n                type: 'changeHeader',\n                payload: {\n                  tabid: props.tabid,\n                  cardidx: props.cardidx,\n                  value: event.target.value\n                }\n              });\n            },\n            onBlur: editHeaderToggle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(' ');\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textArea,\n                style: {\n                  height: \"\".concat(textArea.scrollHeight, \"px\")\n                },\n                onFocus: handleTextareaResizeAll,\n                onInput: handleTextareaResize,\n                className: editItem ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText) : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"MpRF9YWzIZbCaGv2NHkA0kVndPk=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRIZWFkZXJUb2dnbGUiLCJ0ZXh0QXJlYSIsInVzZVJlZiIsImhhbmRsZVRleHRhcmVhUmVzaXplQWxsIiwiZSIsImhhbmRsZVRleHRhcmVhUmVzaXplIiwiY3VycmVudFRhcmdldCIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGVzIiwiam9pbiIsImxheW91dFNldHRpbmciLCJjYXJkIiwiaGVhZGVyIiwiZXZlbnQiLCJjYXJkc0Rpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJ0YWJpZCIsImNhcmRpZHgiLCJ2YWx1ZSIsInRhcmdldCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwicENsYXNzIiwiY2hlY2tlZCIsImlkeCIsInRleHQiLCJpdGVtaWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3BCO0FBRG9CLGtCQUVjQywrQ0FBUSxDQUFDRCxLQUFLLENBQUNFLFNBQVAsQ0FGdEI7QUFBQSxNQUViQSxTQUZhO0FBQUEsTUFFRkMsWUFGRSxpQkFHcEI7OztBQUhvQixtQkFJZ0JGLCtDQUFRLENBQUMsS0FBRCxDQUp4QjtBQUFBLE1BSWJHLFVBSmE7QUFBQSxNQUlEQyxhQUpDOztBQUFBLG1CQUtZSiwrQ0FBUSxDQUFDLEtBQUQsQ0FMcEI7QUFBQSxNQUtiSyxRQUxhO0FBQUEsTUFLSEMsV0FMRzs7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QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQXNCSTtBQUFLLG1CQUFTLEVBQUV0QixvRkFBaEI7QUFBdUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNcEIsS0FBSyxDQUFDMEIsYUFBTixDQUFvQjtBQUFDQyxrQkFBSSxFQUFFLGFBQVA7QUFBc0JDLHFCQUFPLEVBQUU7QUFBQ2Msa0JBQUUsRUFBRTFDLEtBQUssQ0FBQ3VCLElBQU4sQ0FBV21CLEVBQWhCO0FBQW9CYixxQkFBSyxFQUFFN0IsS0FBSyxDQUFDNkIsS0FBakM7QUFBd0NDLHVCQUFPLEVBQUU5QixLQUFLLENBQUM4QjtBQUF2RDtBQUEvQixhQUFwQixDQUFOO0FBQUEsV0FBaEQ7QUFBQSxpQ0FFSSw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyx3QkFBWDtBQUFvQyxrQkFBTSxFQUFFLEVBQTVDO0FBQWdELGlCQUFLLEVBQUU7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWlESCxDQWhGRDs7R0FBTS9CLEk7O0tBQUFBLEk7QUFrRk4sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvQ2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2FwcC9DYXJkLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cblxuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgLy8gbGlzdCBjb2xsYXBzZVxuICAgIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShwcm9wcy5jb2xsYXBzZWQpXG4gICAgLy8gZWRpdCBhbmQgc2V0IGhlYWRlclxuICAgIGNvbnN0IFtlZGl0SGVhZGVyLCBzZXRFZGl0SGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtlZGl0SXRlbSwgc2V0RWRpdEl0ZW1dID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuXG5cbiAgICBjb25zdCB0b2dnbGVDb2xsYXBzZWQgPSAoKSA9PiB7XG4gICAgICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IGVkaXRJdGVtVG9nZ2xlID0gKCkgPT4geyBzZXRFZGl0SXRlbSghZWRpdEl0ZW0pIH1cblxuICAgIGNvbnN0IGVkaXRIZWFkZXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldEVkaXRIZWFkZXIoIWVkaXRIZWFkZXIpXG4gICAgfSBcblxuICAgIGNvbnN0IHRleHRBcmVhID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgaGFuZGxlVGV4dGFyZWFSZXNpemVBbGwgPSAoZSkgPT4ge1xuXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVGV4dGFyZWFSZXNpemUgPSAoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7ZS5jdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodH1weGBcbiAgICB9XG4gXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyFjb2xsYXBzZWQgPyBzdHlsZXMuY2FyZENvbnRhaW5lciA6IFtzdHlsZXMuY2FyZENvbnRhaW5lciwgc3R5bGVzLmNvbGxhcHNlZF0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIHsgKHByb3BzLmxheW91dFNldHRpbmcgJiYgIWVkaXRIZWFkZXIpID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGV4dH0+e3Byb3BzLmNhcmQuaGVhZGVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0QnRufSBvbkNsaWNrPXtlZGl0SGVhZGVyVG9nZ2xlfT48SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb3BzLmNhcmQuaGVhZGVyfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2NoYW5nZUhlYWRlcicsIHBheWxvYWQ6eyB0YWJpZDogcHJvcHMudGFiaWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9IH0pIH0gb25CbHVyPXtlZGl0SGVhZGVyVG9nZ2xlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZUJ0bn0gb25DbGljaz17dG9nZ2xlQ29sbGFwc2VkfT4gPEltYWdlIHNyYz17IWNvbGxhcHNlZCA/ICcvaW1nL2FwcC9taW51cy5zdmcnOiAnL2ltZy9hcHAvcGx1cy5zdmcnfSBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUNhcmRCdG59IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnZGVsZXRlQ2FyZCcsIHBheWxvYWQ6IHtjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB0YWJpZDogcHJvcHMudGFiaWR9IH0pfSA+IDxJbWFnZSBzcmM9eycvaW1nL2FwcC9jaXJjbGVkLXguc3ZnJ30gaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPiA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRCb2R5fT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jYXJkLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcENsYXNzID0gIWl0ZW0uY2hlY2tlZCA/IHN0eWxlcy5pdGVtVGV4dCA6IFtzdHlsZXMuaXRlbVRleHQsIHN0eWxlcy5jcm9zc2VkXS5qb2luKCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5jaGVja2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9jaGVja2VkLnN2Zycgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBpbmRleD17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlQ2FyZEl0ZW0nLCBwYXlsb2FkOiB7dGFiaWQ6IHByb3BzLnRhYmlkLCBpZHg6IGluZGV4LCBjaGVja2VkOiBpdGVtLmNoZWNrZWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC91bmNoZWNrZWQuc3ZnJyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGluZGV4PXtpbmRleH0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICd0b2dnbGVDYXJkSXRlbScsIHBheWxvYWQ6IHt0YWJpZDogcHJvcHMudGFiaWQsIGlkeDogaW5kZXgsIGNoZWNrZWQ6IGl0ZW0uY2hlY2tlZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtlZGl0SXRlbVRvZ2dsZX0gY2xhc3NOYW1lPXshZWRpdEl0ZW0gPyBwQ2xhc3MgOiBzdHlsZXMuaGlkZX0+e2l0ZW0udGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcmVmPXt0ZXh0QXJlYSB9IHN0eWxlPXt7aGVpZ2h0OiBgJHt0ZXh0QXJlYS5zY3JvbGxIZWlnaHR9cHhgfX0gb25Gb2N1cz17aGFuZGxlVGV4dGFyZWFSZXNpemVBbGx9IG9uSW5wdXQ9e2hhbmRsZVRleHRhcmVhUmVzaXplfSBjbGFzc05hbWU9e2VkaXRJdGVtID8gc3R5bGVzLmVkaXRUZXh0IDogc3R5bGVzLmhpZGV9IHR5cGU9XCJ0ZXh0XCIgb25CbHVyPXtlZGl0SXRlbVRvZ2dsZX0gdmFsdWU9e2l0ZW0udGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2VkaXRDYXJkSXRlbScsIHBheWxvYWQ6IHtpZHg6IGluZGV4LCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB0YWJpZDogcHJvcHMudGFiaWQsIHZhbHVlOiBlLnRhcmdldC52YWx1ZX0gfSkgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVXcmFwcGVyfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3JlbW92ZUNhcmRJdGVtJywgcGF5bG9hZDp7Y2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkLCBpdGVtaWQ6IGl0ZW0uaWR9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9kZWxldGUuc3ZnJyBoZWlnaHQ9ezEwfSB3aWR0aD17MTB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZEl0ZW1XcmFwcGVyfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHt0eXBlOiAnbmV3Q2FyZEl0ZW0nLCBwYXlsb2FkOiB7aWQ6IHByb3BzLmNhcmQuaWQsIHRhYmlkOiBwcm9wcy50YWJpZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRJdGVtV3JhcHBlcn0gb25DbGljaz17YWRkTmV3SXRlbX0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvcGx1cy1pdGVtLnN2ZycgaGVpZ2h0PXsxMH0gd2lkdGg9ezEwfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});