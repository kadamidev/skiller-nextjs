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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editHeaderToggle = function editHeaderToggle() {\n    setEditHeader(!editHeader);\n  };\n\n  var textArea = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var handleTextareaResizeAll = function handleTextareaResizeAll() {\n    textArea.current.childNodes.forEach(function (li) {\n      var textAreaNode = li.childNodes[2];\n      textAreaNode.style.height = \"\".concat(textAreaNode.scrollHeight, \"px\");\n    });\n  };\n\n  var handleTextareaResize = function handleTextareaResize(e) {\n    e.currentTarget.style.height = \"\".concat(e.currentTarget.scrollHeight, \"px\");\n  }; // function componentDidMount() {\n  //     console.log(textArea)\n  // }\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [props.layoutSetting && !editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerText),\n            children: props.card.header\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editBtn),\n            onClick: editHeaderToggle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 84\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().edit),\n            type: \"text\",\n            value: props.card.header,\n            onChange: function onChange(event) {\n              return props.cardsDispatch({\n                type: 'changeHeader',\n                payload: {\n                  tabid: props.tabid,\n                  cardidx: props.cardidx,\n                  value: event.target.value\n                }\n              });\n            },\n            onBlur: editHeaderToggle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: textArea,\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(' ');\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onInput: handleTextareaResize,\n                className: editItem ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText) : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                },\n                onFocus: handleTextareaResizeAll\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"MpRF9YWzIZbCaGv2NHkA0kVndPk=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRIZWFkZXJUb2dnbGUiLCJ0ZXh0QXJlYSIsInVzZVJlZiIsImhhbmRsZVRleHRhcmVhUmVzaXplQWxsIiwiY3VycmVudCIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibGkiLCJ0ZXh0QXJlYU5vZGUiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImhhbmRsZVRleHRhcmVhUmVzaXplIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJzdHlsZXMiLCJqb2luIiwibGF5b3V0U2V0dGluZyIsImNhcmQiLCJoZWFkZXIiLCJldmVudCIsImNhcmRzRGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsInRhYmlkIiwiY2FyZGlkeCIsInZhbHVlIiwidGFyZ2V0IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwQ2xhc3MiLCJjaGVja2VkIiwiaWR4IiwidGV4dCIsIml0ZW1pZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDcEI7QUFEb0Isa0JBRWNDLCtDQUFRLENBQUNELEtBQUssQ0FBQ0UsU0FBUCxDQUZ0QjtBQUFBLE1BRWJBLFNBRmE7QUFBQSxNQUVGQyxZQUZFLGlCQUdwQjs7O0FBSG9CLG1CQUlnQkYsK0NBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJYkcsVUFKYTtBQUFBLE1BSURDLGFBSkM7O0FBQUEsbUJBS1lKLCtD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REFBQyxtREFBRDtBQUFPLHFCQUFHLEVBQUMscUJBQVg7QUFBaUMsd0JBQU0sRUFBRSxFQUF6QztBQUE2Qyx1QkFBSyxFQUFFO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZKO0FBQUEsZUFBU1AsSUFBSSxDQUFDTyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFnQkgsV0FsQkM7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBc0JJO0FBQUssbUJBQVMsRUFBRXRCLG9GQUFoQjtBQUF1QyxpQkFBTyxFQUFFO0FBQUEsbUJBQU16QixLQUFLLENBQUMrQixhQUFOLENBQW9CO0FBQUNDLGtCQUFJLEVBQUUsYUFBUDtBQUFzQkMscUJBQU8sRUFBRTtBQUFDYyxrQkFBRSxFQUFFL0MsS0FBSyxDQUFDNEIsSUFBTixDQUFXbUIsRUFBaEI7QUFBb0JiLHFCQUFLLEVBQUVsQyxLQUFLLENBQUNrQyxLQUFqQztBQUF3Q0MsdUJBQU8sRUFBRW5DLEtBQUssQ0FBQ21DO0FBQXZEO0FBQS9CLGFBQXBCLENBQU47QUFBQSxXQUFoRDtBQUFBLGlDQUVJLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLHdCQUFYO0FBQW9DLGtCQUFNLEVBQUUsRUFBNUM7QUFBZ0QsaUJBQUssRUFBRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBaURILENBekZEOztHQUFNcEMsSTs7S0FBQUEsSTtBQTJGTiwrREFBZUEsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGFza2VyX2FwcC9DYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYXBwL0NhcmQubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgICAvLyBsaXN0IGNvbGxhcHNlXG4gICAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKHByb3BzLmNvbGxhcHNlZClcbiAgICAvLyBlZGl0IGFuZCBzZXQgaGVhZGVyXG4gICAgY29uc3QgW2VkaXRIZWFkZXIsIHNldEVkaXRIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2VkaXRJdGVtLCBzZXRFZGl0SXRlbV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG5cblxuICAgIGNvbnN0IHRvZ2dsZUNvbGxhcHNlZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdEl0ZW1Ub2dnbGUgPSAoKSA9PiB7IHNldEVkaXRJdGVtKCFlZGl0SXRlbSkgfVxuXG4gICAgY29uc3QgZWRpdEhlYWRlclRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0RWRpdEhlYWRlcighZWRpdEhlYWRlcilcbiAgICB9IFxuXG4gICAgY29uc3QgdGV4dEFyZWEgPSB1c2VSZWYobnVsbClcblxuICAgIGNvbnN0IGhhbmRsZVRleHRhcmVhUmVzaXplQWxsID0gKCkgPT4ge1xuICAgICAgICB0ZXh0QXJlYS5jdXJyZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgICAgICAgIGxldCB0ZXh0QXJlYU5vZGUgPSBsaS5jaGlsZE5vZGVzWzJdXG4gICAgICAgICAgICB0ZXh0QXJlYU5vZGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGV4dEFyZWFOb2RlLnNjcm9sbEhlaWdodH1weGBcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVRleHRhcmVhUmVzaXplID0gKGUpID0+IHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke2UuY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRleHRBcmVhKVxuICAgIC8vIH1cbiBcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IWNvbGxhcHNlZCA/IHN0eWxlcy5jYXJkQ29udGFpbmVyIDogW3N0eWxlcy5jYXJkQ29udGFpbmVyLCBzdHlsZXMuY29sbGFwc2VkXS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgeyAocHJvcHMubGF5b3V0U2V0dGluZyAmJiAhZWRpdEhlYWRlcikgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUZXh0fT57cHJvcHMuY2FyZC5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRCdG59IG9uQ2xpY2s9e2VkaXRIZWFkZXJUb2dnbGV9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0gdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuY2FyZC5oZWFkZXJ9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnY2hhbmdlSGVhZGVyJywgcGF5bG9hZDp7IHRhYmlkOiBwcm9wcy50YWJpZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e2VkaXRIZWFkZXJUb2dnbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbGxhcHNlQnRufSBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZWR9PiA8SW1hZ2Ugc3JjPXshY29sbGFwc2VkID8gJy9pbWcvYXBwL21pbnVzLnN2Zyc6ICcvaW1nL2FwcC9wbHVzLnN2Zyd9IGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlQ2FyZEJ0bn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdkZWxldGVDYXJkJywgcGF5bG9hZDoge2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZH0gfSl9ID4gPEltYWdlIHNyYz17Jy9pbWcvYXBwL2NpcmNsZWQteC5zdmcnfSBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+IDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEJvZHl9PlxuICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXt0ZXh0QXJlYX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNhcmQuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwQ2xhc3MgPSAhaXRlbS5jaGVja2VkID8gc3R5bGVzLml0ZW1UZXh0IDogW3N0eWxlcy5pdGVtVGV4dCwgc3R5bGVzLmNyb3NzZWRdLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja0JveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLmNoZWNrZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2NoZWNrZWQuc3ZnJyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGluZGV4PXtpbmRleH0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICd0b2dnbGVDYXJkSXRlbScsIHBheWxvYWQ6IHt0YWJpZDogcHJvcHMudGFiaWQsIGlkeDogaW5kZXgsIGNoZWNrZWQ6IGl0ZW0uY2hlY2tlZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL3VuY2hlY2tlZC5zdmcnIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gaW5kZXg9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUNhcmRJdGVtJywgcGF5bG9hZDoge3RhYmlkOiBwcm9wcy50YWJpZCwgaWR4OiBpbmRleCwgY2hlY2tlZDogaXRlbS5jaGVja2VkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2VkaXRJdGVtVG9nZ2xlfSBjbGFzc05hbWU9eyFlZGl0SXRlbSA/IHBDbGFzcyA6IHN0eWxlcy5oaWRlfT57aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbklucHV0PXtoYW5kbGVUZXh0YXJlYVJlc2l6ZX0gY2xhc3NOYW1lPXtlZGl0SXRlbSA/IHN0eWxlcy5lZGl0VGV4dCA6IHN0eWxlcy5oaWRlfSB0eXBlPVwidGV4dFwiIG9uQmx1cj17ZWRpdEl0ZW1Ub2dnbGV9IHZhbHVlPXtpdGVtLnRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdlZGl0Q2FyZEl0ZW0nLCBwYXlsb2FkOiB7aWR4OiBpbmRleCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkLCB2YWx1ZTogZS50YXJnZXQudmFsdWV9IH0pIH0gb25Gb2N1cz17aGFuZGxlVGV4dGFyZWFSZXNpemVBbGx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdyZW1vdmVDYXJkSXRlbScsIHBheWxvYWQ6e2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZCwgaXRlbWlkOiBpdGVtLmlkfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvZGVsZXRlLnN2ZycgaGVpZ2h0PXsxMH0gd2lkdGg9ezEwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRJdGVtV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7dHlwZTogJ25ld0NhcmRJdGVtJywgcGF5bG9hZDoge2lkOiBwcm9wcy5jYXJkLmlkLCB0YWJpZDogcHJvcHMudGFiaWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSXRlbVdyYXBwZXJ9IG9uQ2xpY2s9e2FkZE5ld0l0ZW19PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL3BsdXMtaXRlbS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});