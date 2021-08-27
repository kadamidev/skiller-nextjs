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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editHeaderToggle = function editHeaderToggle() {\n    setEditHeader(!editHeader);\n  };\n\n  var textAreaGrandParent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); //pointing to the ul with all the card items\n\n  var handleTextareaResizeAll = function handleTextareaResizeAll() {\n    //setting the textarea size to fit the content\n    textAreaGrandParent.current.childNodes.forEach(function (li) {\n      var textAreaNode = li.childNodes[2];\n      textAreaNode.style.height = \"\".concat(textAreaNode.scrollHeight, \"px\");\n    });\n  };\n\n  var handleTextareaResize = function handleTextareaResize(e) {\n    //increases the size of the text area as more text is added to fit\n    e.currentTarget.style.height = \"\".concat(e.currentTarget.scrollHeight, \"px\");\n  };\n\n  var cardClass = (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer);\n  if (props.darkMode) cardClass = [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().darkMode)].join(\" \"); // {!collapsed ? [styles.cardContainer, styles.darkMode].join(\" \") : [styles.cardContainer, styles.collapsed].join(\" \")}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? cardClass : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardClass), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [props.layoutSetting && !editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerText),\n            children: props.card.header\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editBtn),\n            onClick: editHeaderToggle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 84\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().edit),\n            type: \"text\",\n            value: props.card.header,\n            onChange: function onChange(event) {\n              return props.cardsDispatch({\n                type: 'changeHeader',\n                payload: {\n                  tabid: props.tabid,\n                  cardidx: props.cardidx,\n                  value: event.target.value\n                }\n              });\n            },\n            onBlur: editHeaderToggle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: textAreaGrandParent,\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(' ');\n            var textAreaClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(\" \");\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onInput: handleTextareaResize,\n                className: editItem ? textAreaClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                },\n                onFocus: handleTextareaResizeAll\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"hYmOgzHoZK8rrjEWirBv9gKODUo=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRIZWFkZXJUb2dnbGUiLCJ0ZXh0QXJlYUdyYW5kUGFyZW50IiwidXNlUmVmIiwiaGFuZGxlVGV4dGFyZWFSZXNpemVBbGwiLCJjdXJyZW50IiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJsaSIsInRleHRBcmVhTm9kZSIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaGFuZGxlVGV4dGFyZWFSZXNpemUiLCJlIiwiY3VycmVudFRhcmdldCIsImNhcmRDbGFzcyIsInN0eWxlcyIsImRhcmtNb2RlIiwiam9pbiIsImxheW91dFNldHRpbmciLCJjYXJkIiwiaGVhZGVyIiwiZXZlbnQiLCJjYXJkc0Rpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJ0YWJpZCIsImNhcmRpZHgiLCJ2YWx1ZSIsInRhcmdldCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwicENsYXNzIiwiY2hlY2tlZCIsInRleHRBcmVhQ2xhc3MiLCJpZHgiLCJ0ZXh0IiwiaXRlbWlkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNwQjtBQURvQixrQkFFY0MsK0NBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxTQUFQLENBRnRCO0FBQUEsTUFFYkEsU0FGYTtBQUFBLE1BRUZDLFlBRkUsaUJBR3BCOzs7QUFIb0IsbUJBSWdCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FK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QUFnRCxpQkFBSyxFQUFFO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFrREgsQ0F6RkQ7O0dBQU10QyxJOztLQUFBQSxJO0FBMkZOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvQ2FyZC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5cblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGxpc3QgY29sbGFwc2VcbiAgICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUocHJvcHMuY29sbGFwc2VkKVxuICAgIC8vIGVkaXQgYW5kIHNldCBoZWFkZXJcbiAgICBjb25zdCBbZWRpdEhlYWRlciwgc2V0RWRpdEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZWRpdEl0ZW0sIHNldEVkaXRJdGVtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cblxuXG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VkID0gKCkgPT4ge1xuICAgICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0SXRlbVRvZ2dsZSA9ICgpID0+IHsgc2V0RWRpdEl0ZW0oIWVkaXRJdGVtKSB9XG5cbiAgICBjb25zdCBlZGl0SGVhZGVyVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBzZXRFZGl0SGVhZGVyKCFlZGl0SGVhZGVyKVxuICAgIH0gXG5cbiAgICBjb25zdCB0ZXh0QXJlYUdyYW5kUGFyZW50ID0gdXNlUmVmKG51bGwpIC8vcG9pbnRpbmcgdG8gdGhlIHVsIHdpdGggYWxsIHRoZSBjYXJkIGl0ZW1zXG5cbiAgICBjb25zdCBoYW5kbGVUZXh0YXJlYVJlc2l6ZUFsbCA9ICgpID0+IHsgLy9zZXR0aW5nIHRoZSB0ZXh0YXJlYSBzaXplIHRvIGZpdCB0aGUgY29udGVudFxuICAgICAgICB0ZXh0QXJlYUdyYW5kUGFyZW50LmN1cnJlbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRleHRBcmVhTm9kZSA9IGxpLmNoaWxkTm9kZXNbMl1cbiAgICAgICAgICAgIHRleHRBcmVhTm9kZS5zdHlsZS5oZWlnaHQgPSBgJHt0ZXh0QXJlYU5vZGUuc2Nyb2xsSGVpZ2h0fXB4YFxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVGV4dGFyZWFSZXNpemUgPSAoZSkgPT4geyAvL2luY3JlYXNlcyB0aGUgc2l6ZSBvZiB0aGUgdGV4dCBhcmVhIGFzIG1vcmUgdGV4dCBpcyBhZGRlZCB0byBmaXRcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke2UuY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgfVxuICAgIFxuICAgIGxldCBjYXJkQ2xhc3MgPSBzdHlsZXMuY2FyZENvbnRhaW5lciBcbiAgICBpZiAocHJvcHMuZGFya01vZGUpXG4gICAgICAgIGNhcmRDbGFzcyA9IFtzdHlsZXMuY29udGFpbmVyLCBzdHlsZXMuZGFya01vZGVdLmpvaW4gKFwiIFwiKVxuICAgIC8vIHshY29sbGFwc2VkID8gW3N0eWxlcy5jYXJkQ29udGFpbmVyLCBzdHlsZXMuZGFya01vZGVdLmpvaW4oXCIgXCIpIDogW3N0eWxlcy5jYXJkQ29udGFpbmVyLCBzdHlsZXMuY29sbGFwc2VkXS5qb2luKFwiIFwiKX1cbiAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXshY29sbGFwc2VkID8gY2FyZENsYXNzIDogW3N0eWxlcy5jYXJkQ2xhc3MsIHN0eWxlcy5jb2xsYXBzZWRdLmpvaW4oXCIgXCIpIH0+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgeyAocHJvcHMubGF5b3V0U2V0dGluZyAmJiAhZWRpdEhlYWRlcikgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUZXh0fT57cHJvcHMuY2FyZC5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRCdG59IG9uQ2xpY2s9e2VkaXRIZWFkZXJUb2dnbGV9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH0gdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuY2FyZC5oZWFkZXJ9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnY2hhbmdlSGVhZGVyJywgcGF5bG9hZDp7IHRhYmlkOiBwcm9wcy50YWJpZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0gfSkgfSBvbkJsdXI9e2VkaXRIZWFkZXJUb2dnbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbGxhcHNlQnRufSBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZWR9PiA8SW1hZ2Ugc3JjPXshY29sbGFwc2VkID8gJy9pbWcvYXBwL21pbnVzLnN2Zyc6ICcvaW1nL2FwcC9wbHVzLnN2Zyd9IGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlQ2FyZEJ0bn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdkZWxldGVDYXJkJywgcGF5bG9hZDoge2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZH0gfSl9ID4gPEltYWdlIHNyYz17Jy9pbWcvYXBwL2NpcmNsZWQteC5zdmcnfSBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+IDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEJvZHl9PlxuICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXt0ZXh0QXJlYUdyYW5kUGFyZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2FyZC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBDbGFzcyA9ICFpdGVtLmNoZWNrZWQgPyBzdHlsZXMuaXRlbVRleHQgOiBbc3R5bGVzLml0ZW1UZXh0LCBzdHlsZXMuY3Jvc3NlZF0uam9pbignICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRBcmVhQ2xhc3MgPSAhaXRlbS5jaGVja2VkID8gc3R5bGVzLmVkaXRUZXh0IDogW3N0eWxlcy5lZGl0VGV4dCwgc3R5bGVzLmNyb3NzZWRdLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uY2hlY2tlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvY2hlY2tlZC5zdmcnIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gaW5kZXg9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUNhcmRJdGVtJywgcGF5bG9hZDoge3RhYmlkOiBwcm9wcy50YWJpZCwgaWR4OiBpbmRleCwgY2hlY2tlZDogaXRlbS5jaGVja2VkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvdW5jaGVja2VkLnN2Zycgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBpbmRleD17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlQ2FyZEl0ZW0nLCBwYXlsb2FkOiB7dGFiaWQ6IHByb3BzLnRhYmlkLCBpZHg6IGluZGV4LCBjaGVja2VkOiBpdGVtLmNoZWNrZWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17ZWRpdEl0ZW1Ub2dnbGV9IGNsYXNzTmFtZT17IWVkaXRJdGVtID8gcENsYXNzIDogc3R5bGVzLmhpZGV9PntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG9uSW5wdXQ9e2hhbmRsZVRleHRhcmVhUmVzaXplfSBjbGFzc05hbWU9e2VkaXRJdGVtID8gdGV4dEFyZWFDbGFzcyA6IHN0eWxlcy5oaWRlfSB0eXBlPVwidGV4dFwiIG9uQmx1cj17ZWRpdEl0ZW1Ub2dnbGV9IHZhbHVlPXtpdGVtLnRleHR9IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdlZGl0Q2FyZEl0ZW0nLCBwYXlsb2FkOiB7aWR4OiBpbmRleCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkLCB2YWx1ZTogZS50YXJnZXQudmFsdWV9IH0pIH0gb25Gb2N1cz17aGFuZGxlVGV4dGFyZWFSZXNpemVBbGx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdyZW1vdmVDYXJkSXRlbScsIHBheWxvYWQ6e2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZCwgaXRlbWlkOiBpdGVtLmlkfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvZGVsZXRlLnN2ZycgaGVpZ2h0PXsxMH0gd2lkdGg9ezEwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRJdGVtV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7dHlwZTogJ25ld0NhcmRJdGVtJywgcGF5bG9hZDoge2lkOiBwcm9wcy5jYXJkLmlkLCB0YWJpZDogcHJvcHMudGFiaWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSXRlbVdyYXBwZXJ9IG9uQ2xpY2s9e2FkZE5ld0l0ZW19PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL3BsdXMtaXRlbS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});