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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editClick = function editClick() {\n    setEditHeader(!editHeader);\n  };\n\n  var headerInput = function headerInput(event) {\n    setHeader(event.target.value);\n  };\n\n  var itemInput = function itemInput(event) {\n    var newItems = (0,_Users_admin_Desktop_dev_skiller_skiller_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(items);\n\n    newItems[event.target.attributes.data.value]['text'] = event.target.value;\n    setItems(newItems);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContainer) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [!editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: props.card.header\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().edit),\n          type: \"text\",\n          value: props.card.header,\n          onChange: function onChange(event) {\n            return props.cardsDispatch({\n              type: 'changeHeader',\n              payload: {\n                tabid: props.tabid,\n                cardidx: props.cardidx,\n                value: event.target.value\n              }\n            });\n          },\n          onBlur: editClick\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().editBtn),\n          onClick: editClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/edit.svg\",\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 73\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().crossed)].join(' ');\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: editItem ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().editText) : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hide),\n                data: index,\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: itemInput\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"fK6AXiQkbvuDNLfH3GJcZgCivs4=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRDbGljayIsImhlYWRlcklucHV0IiwiZXZlbnQiLCJzZXRIZWFkZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIml0ZW1JbnB1dCIsIm5ld0l0ZW1zIiwiaXRlbXMiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsInNldEl0ZW1zIiwic3R5bGVzIiwiam9pbiIsImNhcmQiLCJoZWFkZXIiLCJjYXJkc0Rpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJ0YWJpZCIsImNhcmRpZHgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwQ2xhc3MiLCJjaGVja2VkIiwiaWR4IiwidGV4dCIsIml0ZW1pZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNwQjtBQURvQixrQkFFY0MsK0NBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxTQUFQLENBRnRCO0FBQUEsTUFFYkEsU0FGYTtBQUFBLE1BRUZDLFlBRkUsaUJBR3BCOzs7QUFIb0IsbUJBSWdCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxNQUliRyxVQUphO0FBQUEsTUFJREMsYUFKQzs7QUFBQSxtQkFLWUosK0NBQVEsQ0FBQyxLQUFELENBTHBCO0FBQUEsTUFLYkssUUFMYTtBQUFBLE1BS0hDLFdBTEc7O0FBVXBCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQkwsZ0JBQVksQ0FBQyxDQUFD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TjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBc0JJO0FBQUssbUJBQVMsRUFBRWpCLG9GQUFoQjtBQUF1QyxpQkFBTyxFQUFFO0FBQUEsbUJBQU10QixLQUFLLENBQUMwQixhQUFOLENBQW9CO0FBQUNDLGtCQUFJLEVBQUUsYUFBUDtBQUFzQkMscUJBQU8sRUFBRTtBQUFDVyxrQkFBRSxFQUFFdkMsS0FBSyxDQUFDd0IsSUFBTixDQUFXZSxFQUFoQjtBQUFvQlYscUJBQUssRUFBRTdCLEtBQUssQ0FBQzZCLEtBQWpDO0FBQXdDQyx1QkFBTyxFQUFFOUIsS0FBSyxDQUFDOEI7QUFBdkQ7QUFBL0IsYUFBcEIsQ0FBTjtBQUFBLFdBQWhEO0FBQUEsaUNBRUksOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsd0JBQVg7QUFBb0Msa0JBQU0sRUFBRSxFQUE1QztBQUFnRCxpQkFBSyxFQUFFO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQTBDSCxDQTdFRDs7R0FBTS9CLEk7O0tBQUFBLEk7QUErRU4sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rhc2tlcl9hcHAvQ2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9hcHAvQ2FyZC5tb2R1bGUuc2NzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5cblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGxpc3QgY29sbGFwc2VcbiAgICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUocHJvcHMuY29sbGFwc2VkKVxuICAgIC8vIGVkaXQgYW5kIHNldCBoZWFkZXJcbiAgICBjb25zdCBbZWRpdEhlYWRlciwgc2V0RWRpdEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZWRpdEl0ZW0sIHNldEVkaXRJdGVtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cblxuXG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VkID0gKCkgPT4ge1xuICAgICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0SXRlbVRvZ2dsZSA9ICgpID0+IHsgc2V0RWRpdEl0ZW0oIWVkaXRJdGVtKSB9XG5cbiAgICBjb25zdCBlZGl0Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldEVkaXRIZWFkZXIoIWVkaXRIZWFkZXIpXG4gICAgfSBcblxuICAgIGNvbnN0IGhlYWRlcklucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEhlYWRlcihldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbUlucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBuZXdJdGVtcyA9IFsuLi5pdGVtc11cbiAgICAgICAgbmV3SXRlbXNbZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YS52YWx1ZV1bJ3RleHQnXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICBzZXRJdGVtcyhuZXdJdGVtcylcbiAgICB9XG5cblxuXG4gXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyFjb2xsYXBzZWQgPyBzdHlsZXMuY2FyZENvbnRhaW5lciA6IFtzdHlsZXMuY2FyZENvbnRhaW5lciwgc3R5bGVzLmNvbGxhcHNlZF0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIHsgIWVkaXRIZWFkZXIgP1xuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuY2FyZC5oZWFkZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9wcy5jYXJkLmhlYWRlcn0gb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdjaGFuZ2VIZWFkZXInLCBwYXlsb2FkOnsgdGFiaWQ6IHByb3BzLnRhYmlkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSB9KSB9IG9uQmx1cj17ZWRpdENsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0QnRufSBvbkNsaWNrPXtlZGl0Q2xpY2t9PjxJbWFnZSBzcmM9Jy9pbWcvYXBwL2VkaXQuc3ZnJyBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VCdG59IG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlZH0+IDxJbWFnZSBzcmM9eyFjb2xsYXBzZWQgPyAnL2ltZy9hcHAvbWludXMuc3ZnJzogJy9pbWcvYXBwL3BsdXMuc3ZnJ30gaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQm9keX0+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2FyZC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBDbGFzcyA9ICFpdGVtLmNoZWNrZWQgPyBzdHlsZXMuaXRlbVRleHQgOiBbc3R5bGVzLml0ZW1UZXh0LCBzdHlsZXMuY3Jvc3NlZF0uam9pbignICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0uY2hlY2tlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvY2hlY2tlZC5zdmcnIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gaW5kZXg9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ3RvZ2dsZUNhcmRJdGVtJywgcGF5bG9hZDoge3RhYmlkOiBwcm9wcy50YWJpZCwgaWR4OiBpbmRleCwgY2hlY2tlZDogaXRlbS5jaGVja2VkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvdW5jaGVja2VkLnN2Zycgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBpbmRleD17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlQ2FyZEl0ZW0nLCBwYXlsb2FkOiB7dGFiaWQ6IHByb3BzLnRhYmlkLCBpZHg6IGluZGV4LCBjaGVja2VkOiBpdGVtLmNoZWNrZWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17ZWRpdEl0ZW1Ub2dnbGV9IGNsYXNzTmFtZT17IWVkaXRJdGVtID8gcENsYXNzIDogc3R5bGVzLmhpZGV9PntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17ZWRpdEl0ZW0gPyBzdHlsZXMuZWRpdFRleHQgOiBzdHlsZXMuaGlkZX0gZGF0YT17aW5kZXh9IHR5cGU9XCJ0ZXh0XCIgb25CbHVyPXtlZGl0SXRlbVRvZ2dsZX0gdmFsdWU9e2l0ZW0udGV4dH0gb25DaGFuZ2U9e2l0ZW1JbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICdyZW1vdmVDYXJkSXRlbScsIHBheWxvYWQ6e2NhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZCwgaXRlbWlkOiBpdGVtLmlkfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2ltZy9hcHAvZGVsZXRlLnN2ZycgaGVpZ2h0PXsxMH0gd2lkdGg9ezEwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRJdGVtV3JhcHBlcn0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7dHlwZTogJ25ld0NhcmRJdGVtJywgcGF5bG9hZDoge2lkOiBwcm9wcy5jYXJkLmlkLCB0YWJpZDogcHJvcHMudGFiaWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSXRlbVdyYXBwZXJ9IG9uQ2xpY2s9e2FkZE5ld0l0ZW19PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL3BsdXMtaXRlbS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});