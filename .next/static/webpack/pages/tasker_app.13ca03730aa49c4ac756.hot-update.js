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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app/Card.module.scss */ \"./styles/app/Card.module.scss\");\n/* harmony import */ var _styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/dev/skiller/skiller-nextjs/components/tasker_app/Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(props) {\n  _s();\n\n  // list collapse\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed),\n      collapsed = _useState[0],\n      setCollapsed = _useState[1]; // edit and set header\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editHeader = _useState2[0],\n      setEditHeader = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editItem = _useState3[0],\n      setEditItem = _useState3[1];\n\n  var toggleCollapsed = function toggleCollapsed() {\n    setCollapsed(!collapsed);\n  };\n\n  var editItemToggle = function editItemToggle() {\n    setEditItem(!editItem);\n  };\n\n  var editHeaderToggle = function editHeaderToggle() {\n    setEditHeader(!editHeader);\n  };\n\n  var textArea = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var handleTextareaResizeAll = function handleTextareaResizeAll() {\n    // console.log(textArea.current.scrollHeight)\n    console.log(textArea);\n  };\n\n  var handleTextareaResize = function handleTextareaResize(e) {\n    e.currentTarget.style.height = \"\".concat(e.currentTarget.scrollHeight, \"px\");\n  }; // function componentDidMount() {\n  //     console.log(textArea)\n  // }\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: !collapsed ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapsed)].join(\" \"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [props.layoutSetting && !editHeader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerText),\n            children: props.card.header\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editBtn),\n            onClick: editHeaderToggle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: \"/img/app/edit.svg\",\n              height: 16,\n              width: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 84\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerTextContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().edit),\n            type: \"text\",\n            value: props.card.header,\n            onChange: function onChange(event) {\n              return props.cardsDispatch({\n                type: 'changeHeader',\n                payload: {\n                  tabid: props.tabid,\n                  cardidx: props.cardidx,\n                  value: event.target.value\n                }\n              });\n            },\n            onBlur: editHeaderToggle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().collapseBtn),\n          onClick: toggleCollapsed,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: !collapsed ? '/img/app/minus.svg' : '/img/app/plus.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 84\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteCardBtn),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'deleteCard',\n              payload: {\n                cardidx: props.cardidx,\n                tabid: props.tabid\n              }\n            });\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: '/img/app/circled-x.svg',\n            height: 16,\n            width: 16\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 176\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          ref: textArea,\n          children: props.card.items.map(function (item, index) {\n            var pClass = !item.checked ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText) : [(_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemText), (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().crossed)].join(' ');\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkBox),\n                children: item.checked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/checked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 41\n                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/unchecked.svg\",\n                  width: 16,\n                  height: 16,\n                  index: index,\n                  onClick: function onClick() {\n                    return props.cardsDispatch({\n                      type: 'toggleCardItem',\n                      payload: {\n                        tabid: props.tabid,\n                        idx: index,\n                        checked: item.checked,\n                        cardidx: props.cardidx\n                      }\n                    });\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: editItemToggle,\n                className: !editItem ? pClass : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onInput: handleTextareaResize,\n                className: editItem ? (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().editText) : (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hide),\n                type: \"text\",\n                onBlur: editItemToggle,\n                value: item.text,\n                onChange: function onChange(e) {\n                  return props.cardsDispatch({\n                    type: 'editCardItem',\n                    payload: {\n                      idx: index,\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      value: e.target.value\n                    }\n                  });\n                },\n                onFocus: handleTextareaResizeAll\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().deleteWrapper),\n                onClick: function onClick() {\n                  return props.cardsDispatch({\n                    type: 'removeCardItem',\n                    payload: {\n                      cardidx: props.cardidx,\n                      tabid: props.tabid,\n                      itemid: item.id\n                    }\n                  });\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  src: \"/img/app/delete.svg\",\n                  height: 10,\n                  width: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 37\n              }, _this)]\n            }, item.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_app_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addItemWrapper),\n          onClick: function onClick() {\n            return props.cardsDispatch({\n              type: 'newCardItem',\n              payload: {\n                id: props.card.id,\n                tabid: props.tabid,\n                cardidx: props.cardidx\n              }\n            });\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"/img/app/plus-item.svg\",\n            height: 10,\n            width: 10\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Card, \"MpRF9YWzIZbCaGv2NHkA0kVndPk=\");\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrZXJfYXBwL0NhcmQuanN4PzY0ZWUiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJlZGl0SGVhZGVyIiwic2V0RWRpdEhlYWRlciIsImVkaXRJdGVtIiwic2V0RWRpdEl0ZW0iLCJ0b2dnbGVDb2xsYXBzZWQiLCJlZGl0SXRlbVRvZ2dsZSIsImVkaXRIZWFkZXJUb2dnbGUiLCJ0ZXh0QXJlYSIsInVzZVJlZiIsImhhbmRsZVRleHRhcmVhUmVzaXplQWxsIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVRleHRhcmVhUmVzaXplIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInN0eWxlcyIsImpvaW4iLCJsYXlvdXRTZXR0aW5nIiwiY2FyZCIsImhlYWRlciIsImV2ZW50IiwiY2FyZHNEaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwidGFiaWQiLCJjYXJkaWR4IiwidmFsdWUiLCJ0YXJnZXQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBDbGFzcyIsImNoZWNrZWQiLCJpZHgiLCJ0ZXh0IiwiaXRlbWlkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNwQjtBQURvQixrQkFFY0MsK0NBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxTQUFQLENBRnRCO0FBQUEsTUFFYkEsU0FGYTtBQUFBLE1BRUZDLFlBRkUsaUJBR3BCOzs7QUFIb0IsbUJBSWdCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxNQUliRyxVQUphO0FBQUEsTUFJREMsYUFKQzs7QUFBQSxtQkFLWUosK0NBQVEsQ0FBQyxLQUFELENBTHBCO0FBQUEsTUFLYkssUUFMYTtB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QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBc0JJO0FBQUssbUJBQVMsRUFBRXRCLG9GQUFoQjtBQUF1QyxpQkFBTyxFQUFFO0FBQUEsbUJBQU10QixLQUFLLENBQUM0QixhQUFOLENBQW9CO0FBQUNDLGtCQUFJLEVBQUUsYUFBUDtBQUFzQkMscUJBQU8sRUFBRTtBQUFDYyxrQkFBRSxFQUFFNUMsS0FBSyxDQUFDeUIsSUFBTixDQUFXbUIsRUFBaEI7QUFBb0JiLHFCQUFLLEVBQUUvQixLQUFLLENBQUMrQixLQUFqQztBQUF3Q0MsdUJBQU8sRUFBRWhDLEtBQUssQ0FBQ2dDO0FBQXZEO0FBQS9CLGFBQXBCLENBQU47QUFBQSxXQUFoRDtBQUFBLGlDQUVJLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLHdCQUFYO0FBQW9DLGtCQUFNLEVBQUUsRUFBNUM7QUFBZ0QsaUJBQUssRUFBRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBaURILENBdkZEOztHQUFNakMsSTs7S0FBQUEsSTtBQXlGTiwrREFBZUEsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGFza2VyX2FwcC9DYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYXBwL0NhcmQubW9kdWxlLnNjc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgICAvLyBsaXN0IGNvbGxhcHNlXG4gICAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKHByb3BzLmNvbGxhcHNlZClcbiAgICAvLyBlZGl0IGFuZCBzZXQgaGVhZGVyXG4gICAgY29uc3QgW2VkaXRIZWFkZXIsIHNldEVkaXRIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2VkaXRJdGVtLCBzZXRFZGl0SXRlbV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG5cblxuICAgIGNvbnN0IHRvZ2dsZUNvbGxhcHNlZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdEl0ZW1Ub2dnbGUgPSAoKSA9PiB7IHNldEVkaXRJdGVtKCFlZGl0SXRlbSkgfVxuXG4gICAgY29uc3QgZWRpdEhlYWRlclRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0RWRpdEhlYWRlcighZWRpdEhlYWRlcilcbiAgICB9IFxuXG4gICAgY29uc3QgdGV4dEFyZWEgPSB1c2VSZWYobnVsbClcblxuICAgIGNvbnN0IGhhbmRsZVRleHRhcmVhUmVzaXplQWxsID0gKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXh0QXJlYS5jdXJyZW50LnNjcm9sbEhlaWdodClcbiAgICAgICAgY29uc29sZS5sb2codGV4dEFyZWEpXG5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVUZXh0YXJlYVJlc2l6ZSA9IChlKSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHtlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0fXB4YFxuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0ZXh0QXJlYSlcbiAgICAvLyB9XG4gXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyFjb2xsYXBzZWQgPyBzdHlsZXMuY2FyZENvbnRhaW5lciA6IFtzdHlsZXMuY2FyZENvbnRhaW5lciwgc3R5bGVzLmNvbGxhcHNlZF0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIHsgKHByb3BzLmxheW91dFNldHRpbmcgJiYgIWVkaXRIZWFkZXIpID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGV4dH0+e3Byb3BzLmNhcmQuaGVhZGVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0QnRufSBvbkNsaWNrPXtlZGl0SGVhZGVyVG9nZ2xlfT48SW1hZ2Ugc3JjPScvaW1nL2FwcC9lZGl0LnN2ZycgaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb3BzLmNhcmQuaGVhZGVyfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBwcm9wcy5jYXJkc0Rpc3BhdGNoKHsgdHlwZTogJ2NoYW5nZUhlYWRlcicsIHBheWxvYWQ6eyB0YWJpZDogcHJvcHMudGFiaWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9IH0pIH0gb25CbHVyPXtlZGl0SGVhZGVyVG9nZ2xlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZUJ0bn0gb25DbGljaz17dG9nZ2xlQ29sbGFwc2VkfT4gPEltYWdlIHNyYz17IWNvbGxhcHNlZCA/ICcvaW1nL2FwcC9taW51cy5zdmcnOiAnL2ltZy9hcHAvcGx1cy5zdmcnfSBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUNhcmRCdG59IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnZGVsZXRlQ2FyZCcsIHBheWxvYWQ6IHtjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB0YWJpZDogcHJvcHMudGFiaWR9IH0pfSA+IDxJbWFnZSBzcmM9eycvaW1nL2FwcC9jaXJjbGVkLXguc3ZnJ30gaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPiA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRCb2R5fT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIHJlZj17dGV4dEFyZWF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jYXJkLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcENsYXNzID0gIWl0ZW0uY2hlY2tlZCA/IHN0eWxlcy5pdGVtVGV4dCA6IFtzdHlsZXMuaXRlbVRleHQsIHN0eWxlcy5jcm9zc2VkXS5qb2luKCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5jaGVja2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9jaGVja2VkLnN2Zycgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBpbmRleD17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAndG9nZ2xlQ2FyZEl0ZW0nLCBwYXlsb2FkOiB7dGFiaWQ6IHByb3BzLnRhYmlkLCBpZHg6IGluZGV4LCBjaGVja2VkOiBpdGVtLmNoZWNrZWQsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHh9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC91bmNoZWNrZWQuc3ZnJyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGluZGV4PXtpbmRleH0gb25DbGljaz17KCkgPT4gcHJvcHMuY2FyZHNEaXNwYXRjaCh7IHR5cGU6ICd0b2dnbGVDYXJkSXRlbScsIHBheWxvYWQ6IHt0YWJpZDogcHJvcHMudGFiaWQsIGlkeDogaW5kZXgsIGNoZWNrZWQ6IGl0ZW0uY2hlY2tlZCwgY2FyZGlkeDogcHJvcHMuY2FyZGlkeH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtlZGl0SXRlbVRvZ2dsZX0gY2xhc3NOYW1lPXshZWRpdEl0ZW0gPyBwQ2xhc3MgOiBzdHlsZXMuaGlkZX0+e2l0ZW0udGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25JbnB1dD17aGFuZGxlVGV4dGFyZWFSZXNpemV9IGNsYXNzTmFtZT17ZWRpdEl0ZW0gPyBzdHlsZXMuZWRpdFRleHQgOiBzdHlsZXMuaGlkZX0gdHlwZT1cInRleHRcIiBvbkJsdXI9e2VkaXRJdGVtVG9nZ2xlfSB2YWx1ZT17aXRlbS50ZXh0fSBvbkNoYW5nZT17KGUpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAnZWRpdENhcmRJdGVtJywgcGF5bG9hZDoge2lkeDogaW5kZXgsIGNhcmRpZHg6IHByb3BzLmNhcmRpZHgsIHRhYmlkOiBwcm9wcy50YWJpZCwgdmFsdWU6IGUudGFyZ2V0LnZhbHVlfSB9KSB9IG9uRm9jdXM9e2hhbmRsZVRleHRhcmVhUmVzaXplQWxsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZVdyYXBwZXJ9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goeyB0eXBlOiAncmVtb3ZlQ2FyZEl0ZW0nLCBwYXlsb2FkOntjYXJkaWR4OiBwcm9wcy5jYXJkaWR4LCB0YWJpZDogcHJvcHMudGFiaWQsIGl0ZW1pZDogaXRlbS5pZH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWcvYXBwL2RlbGV0ZS5zdmcnIGhlaWdodD17MTB9IHdpZHRoPXsxMH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkSXRlbVdyYXBwZXJ9IG9uQ2xpY2s9eygpID0+IHByb3BzLmNhcmRzRGlzcGF0Y2goe3R5cGU6ICduZXdDYXJkSXRlbScsIHBheWxvYWQ6IHtpZDogcHJvcHMuY2FyZC5pZCwgdGFiaWQ6IHByb3BzLnRhYmlkLCBjYXJkaWR4OiBwcm9wcy5jYXJkaWR4fSB9KX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZEl0ZW1XcmFwcGVyfSBvbkNsaWNrPXthZGROZXdJdGVtfT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1nL2FwcC9wbHVzLWl0ZW0uc3ZnJyBoZWlnaHQ9ezEwfSB3aWR0aD17MTB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tasker_app/Card.jsx\n");

/***/ })

});