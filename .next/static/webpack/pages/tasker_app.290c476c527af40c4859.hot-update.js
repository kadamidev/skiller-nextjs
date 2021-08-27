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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editHeaderToggle = function editHeaderToggle() {\n    setEditHeader(!editHeader);\n  };\n\n  var textAreaGrandParent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); //pointing to the ul with all the card items\n\n  var handleTextareaResizeAll = function handleTextareaResizeAll() {\n    //setting the textarea size to fit the content\n    textAreaGrandParent.current.childNodes.forEach(function (li) {\n      var textAreaNode = li.childNodes[2];\n      textAreaNode.style.height = \"\".concat(textAreaNode.scrollHeight, \"px\");\n    });\n  };\n\n  var handleTextareaResize = function handleTextareaResize(e) {\n    //increases the size of the text area as more text is added to fit\n    e.currentTarget.style.height = \"\".concat(e.currentTarget.scrollHeight, \"px\");\n  };\n\n  var cardClass = function cardClass() {\n    if (!collapsed && !props.darkMode) return (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().darkMode)].join(\" \") : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [props.layoutSetting && !editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerText),\n            children: props.card.header\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editBtn),\n            onClick: editHeaderToggle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 84\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().edit),\n            type: \"text\",\n            value: props.card.header,\n            onChange: function onChange(event) {\n              return props.cardsDispatch({\n                type: 'changeHeader',\n                payload: {\n                  tabid: props.tabid,\n                  cardidx: props.cardidx,\n                  value: event.target.value\n                }\n              });\n            },\n            onBlur: editHeaderToggle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: textAreaGrandParent,\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(' ');\n            var textAreaClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(\" \");\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onInput: handleTextareaResize,\n                className: editItem ? textAreaClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                },\n                onFocus: handleTextareaResizeAll\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"hYmOgzHoZK8rrjEWirBv9gKODUo=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRIZWFkZXJUb2dnbGUiLCJ0ZXh0QXJlYUdyYW5kUGFyZW50IiwidXNlUmVmIiwiaGFuZGxlVGV4dGFyZWFSZXNpemVBbGwiLCJjdXJyZW50IiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJsaSIsInRleHRBcmVhTm9kZSIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaGFuZGxlVGV4dGFyZWFSZXNpemUiLCJlIiwiY3VycmVudFRhcmdldCIsImNhcmRDbGFzcyIsImRhcmtNb2RlIiwic3R5bGVzIiwiam9pbiIsImxheW91dFNldHRpbmciLCJjYXJkIiwiaGVhZGVyIiwiZXZlbnQiLCJjYXJkc0Rpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJ0YWJpZCIsImNhcmRpZHgiLCJ2YWx1ZSIsInRhcmdldCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwicENsYXNzIiwiY2hlY2tlZCIsInRleHRBcmVhQ2xhc3MiLCJpZHgiLCJ0ZXh0IiwiaXRlbWlkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNwQjtBQURvQixrQkFFY0MsK0NBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxTQUFQLENBRnRCO0FBQUEsTUFFYkEsU0FGYTtBQUFBLE1BRUZDLFlBRkUsaUJBR3BCOzs7QUFIb0IsbUJBSWdCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FK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b0Msa0JBQU0sRUFBRSxFQUE1QztBQUFnRCxpQkFBSyxFQUFFO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFrREgsQ0F4RkQ7O0dBQU10QyxJOztLQUFBQSxJO0FBMEZOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvQ2FyZC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5cblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGxpc3QgY29sbGFwc2VcbiAgICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUocHJvcHMuY29sbGFwc2VkKVxuICAgIC8vIGVkaXQgYW5kIHNldCBoZWFkZXJcbiAgICBjb25zdCBbZWRpdEhlYWRlciwgc2V0RWRpdEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZWRpdEl0ZW0sIHNldEVkaXRJdGVtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cblxuXG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VkID0gKCkgPT4ge1xuICAgICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0SXRlbVRvZ2dsZSA9ICgpID0+IHsgc2V0RWRpdEl0ZW0oIWVkaXRJdGVtKSB9XG5cbiAgICBjb25zdCBlZGl0SGVhZGVyVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBzZXRFZGl0SGVhZGVyKCFlZGl0SGVhZGVyKVxuICAgIH0gXG5cbiAgICBjb25zdCB0ZXh0QXJlYUdyYW5kUGFyZW50ID0gdXNlUmVmKG51bGwpIC8vcG9pbnRpbmcgdG8gdGhlIHVsIHdpdGggYWxsIHRoZSBjYXJkIGl0ZW1zXG5cbiAgICBjb25zdCBoYW5kbGVUZXh0YXJlYVJlc2l6ZUFsbCA9ICgpID0+IHsgLy9zZXR0aW5nIHRoZSB0ZXh0YXJlYSBzaXplIHRvIGZpdCB0aGUgY29udGVudFxuICAgICAgICB0ZXh0QXJlYUdyYW5kUGFyZW50LmN1cnJlbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRleHRBcmVhTm9kZSA9IGxpLmNoaWxkTm9kZXNbMl1cbiAgICAgICAgICAgIHRleHRBcmVhTm9kZS5zdHlsZS5oZWlnaHQgPSBgJHt0ZXh0QXJlYU5vZGUuc2Nyb2xsSGVpZ2h0fXB4YFxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVGV4dGFyZWFSZXNpemUgPSAoZSkgPT4geyAvL2luY3JlYXNlcyB0aGUgc2l6ZSBvZiB0aGUgdGV4dCBhcmVhIGFzIG1vcmUgdGV4dCBpcyBhZGRlZCB0byBmaXRcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke2UuY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNhcmRDbGFzcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFjb2xsYXBzZWQgJiYgIXByb3BzLmRhcmtNb2RlKVxuICAgICAgICByZXR1cm4gc3R5bGVzLmNvbnRhaW5lclxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyFjb2xsYXBzZWQgPyBbc3R5bGVzLmNhcmRDb250YWluZXIsIHN0eWxlcy5kYXJrTW9kZV0uam9pbihcIiBcIikgOiBbc3R5bGVzLmNhcmRDb250YWluZXIsIHN0eWxlcy5jb2xsYXBzZWRdLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICB7IChwcm9wcy5sYXlvdXRTZXR0aW5nICYmICFlZGl0SGVhZGVyKSA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHR9Pntwcm9wcy5jYXJkLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdEJ0bn0gb25DbGljaz17ZWRpdEhlYWRlclRvZ2dsZX0+PEltYWdlIHNyYz0nL2ltZy9hcHAvZWRpdC5zdmcnIGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9wcy5jYXJkLmhlYWRlcn0gb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdjaGFuZ2VIZWFkZXInLCBwYXlsb2FkOnsgdGFiaWQ6IHByb3BzLnRhYmlkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17ZWRpdEhlYWRlclRvZ2dsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VCdG59IG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlZH0+IDxJbWFnZSBzcmM9eyFjb2xsYXBzZWQgPyAnL2ltZy9hcHAvbWludXMuc3ZnJzogJy9pbWcvYXBwL3BsdXMuc3ZnJ30gaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVDYXJkQnRufSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2RlbGV0ZUNhcmQnLCBwYXlsb2FkOiB7Y2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkfSB9KX0gPiA8SW1hZ2Ugc3JjPXsnL2ltZy9hcHAvY2lyY2xlZC14LnN2Zyd9IGhlaWdodD17MTZ9IHdpZHRoPXsxNn0gLz4gPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQm9keX0+XG4gICAgICAgICAgICAgICAgICAgIDx1bCByZWY9e3RleHRBcmVhR3JhbmRQYXJlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jYXJkLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcENsYXNzID0gIWl0ZW0uY2hlY2tlZCA/IHN0eWxlcy5pdGVtVGV4dCA6IFtzdHlsZXMuaXRlbVRleHQsIHN0eWxlcy5jcm9zc2VkXS5qb2luKCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dEFyZWFDbGFzcyA9ICFpdGVtLmNoZWNrZWQgPyBzdHlsZXMuZWRpdFRleHQgOiBbc3R5bGVzLmVkaXRUZXh0LCBzdHlsZXMuY3Jvc3NlZF0uam9pbihcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5jaGVja2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9jaGVja2VkLnN2Zycgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBpbmRleD17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlQ2FyZEl0ZW0nLCBwYXlsb2FkOiB7dGFiaWQ6IHByb3BzLnRhYmlkLCBpZHg6IGluZGV4LCBjaGVja2VkOiBpdGVtLmNoZWNrZWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC91bmNoZWNrZWQuc3ZnJyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGluZGV4PXtpbmRleH0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICd0b2dnbGVDYXJkSXRlbScsIHBheWxvYWQ6IHt0YWJpZDogcHJvcHMudGFiaWQsIGlkeDogaW5kZXgsIGNoZWNrZWQ6IGl0ZW0uY2hlY2tlZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtlZGl0SXRlbVRvZ2dsZX0gY2xhc3NOYW1lPXshZWRpdEl0ZW0gPyBwQ2xhc3MgOiBzdHlsZXMuaGlkZX0+e2l0ZW0udGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25JbnB1dD17aGFuZGxlVGV4dGFyZWFSZXNpemV9IGNsYXNzTmFtZT17ZWRpdEl0ZW0gPyB0ZXh0QXJlYUNsYXNzIDogc3R5bGVzLmhpZGV9IHR5cGU9XCJ0ZXh0XCIgb25CbHVyPXtlZGl0SXRlbVRvZ2dsZX0gdmFsdWU9e2l0ZW0udGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2VkaXRDYXJkSXRlbScsIHBheWxvYWQ6IHtpZHg6IGluZGV4LCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB0YWJpZDogcHJvcHMudGFiaWQsIHZhbHVlOiBlLnRhcmdldC52YWx1ZX0gfSkgfSBvbkZvY3VzPXtoYW5kbGVUZXh0YXJlYVJlc2l6ZUFsbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVXcmFwcGVyfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3JlbW92ZUNhcmRJdGVtJywgcGF5bG9hZDp7Y2FyZGlkeDogcHJvcHMuY2FyZGlkeCwgdGFiaWQ6IHByb3BzLnRhYmlkLCBpdGVtaWQ6IGl0ZW0uaWR9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9kZWxldGUuc3ZnJyBoZWlnaHQ9ezEwfSB3aWR0aD17MTB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZEl0ZW1XcmFwcGVyfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHt0eXBlOiAnbmV3Q2FyZEl0ZW0nLCBwYXlsb2FkOiB7aWQ6IHByb3BzLmNhcmQuaWQsIHRhYmlkOiBwcm9wcy50YWJpZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRJdGVtV3JhcHBlcn0gb25DbGljaz17YWRkTmV3SXRlbX0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvcGx1cy1pdGVtLnN2ZycgaGVpZ2h0PXsxMH0gd2lkdGg9ezEwfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});