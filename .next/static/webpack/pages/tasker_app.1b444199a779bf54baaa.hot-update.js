/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasker_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles/app/TabNav.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles/app/TabNav.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".TabNav_hideTabMenu__8Q39q {\\n  opacity: 0%;\\n  pointer-events: none;\\n  -webkit-transition: opacity 0.2s ease-out;\\n  -moz-transition: opacity 0.2s ease-out;\\n  transition: opacity 0.2s ease-out;\\n}\\n\\n.TabNav_showTabMenu__6CNoC {\\n  opacity: 95%;\\n  -webkit-transition: opacity 0.2s ease-out;\\n  -moz-transition: opacity 0.2s ease-out;\\n  transition: opacity 0.2s ease-out;\\n  z-index: 10000;\\n  position: relative;\\n}\\n\\n.TabNav_container__ELPXJ {\\n  background: var(--primary-color);\\n  position: fixed;\\n  height: 50px;\\n  width: 100vw;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  -moz-box-align: center;\\n       align-items: center;\\n  padding: 0 1em;\\n  color: var(--lightest-aqua);\\n  z-index: 999;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E {\\n  display: -moz-box;\\n  display: flex;\\n  position: relative;\\n  padding: 0px 18px;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E span {\\n  text-align: center;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E .TabNav_edit__30_Bq {\\n  position: absolute;\\n  right: 0px;\\n  opacity: 50%;\\n  cursor: pointer;\\n  display: none;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E .TabNav_tabInput__2DAeL {\\n  background: none;\\n  color: var(--lightest-aqua);\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E:hover .TabNav_edit__30_Bq {\\n  display: block;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://TabNav.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,oBAAA;EACA,yCAAA;EAAA,sCAAA;EAAA,iCAAA;AACJ;;AAEA;EACI,YAAA;EACA,yCAAA;EAAA,sCAAA;EAAA,iCAAA;EACA,cAAA;EACA,kBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,sBAAA;OAAA,mBAAA;EACA,cAAA;EACA,2BAAA;EACA,YAAA;AACJ;AACI;EAGI,iBAAA;EAAA,aAAA;EACA,kBAAA;EACA,iBAAA;AADR;AAEQ;EACI,kBAAA;AAAZ;AAGQ;EACI,kBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EAGA,aAAA;AAHZ;AAMQ;EACI,gBAAA;EACA,2BAAA;AAJZ;AAQY;EACI,cAAA;AANhB\",\"sourcesContent\":[\".hideTabMenu {\\n    opacity: 0%;\\n    pointer-events: none;\\n    transition: opacity 0.2s ease-out;\\n}\\n\\n.showTabMenu {\\n    opacity: 95%;\\n    transition: opacity 0.2s ease-out;\\n    z-index: 10000;\\n    position: relative;\\n}\\n\\n.container {\\n    background: var(--primary-color);\\n    position: fixed;\\n    height: 50px;\\n    width: 100vw;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 1em;\\n    color: var(--lightest-aqua);\\n    z-index: 999;\\n\\n    .tab {\\n        // border: 1px solid black;\\n        // height: 100%;\\n        display: flex;\\n        position: relative;\\n        padding: 0px 18px;\\n        span {\\n            text-align: center;\\n        }\\n\\n        .edit {\\n            position: absolute;\\n            right: 0px;\\n            opacity: 50%;\\n            cursor: pointer;\\n\\n    \\n            display: none;\\n        }\\n\\n        .tabInput {\\n            background: none;\\n            color: var(--lightest-aqua);\\n        }\\n\\n        &:hover {\\n            .edit {\\n                display: block;\\n            }\\n        }\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"hideTabMenu\": \"TabNav_hideTabMenu__8Q39q\",\n\t\"showTabMenu\": \"TabNav_showTabMenu__6CNoC\",\n\t\"container\": \"TabNav_container__ELPXJ\",\n\t\"tab\": \"TabNav_tab__idO8E\",\n\t\"edit\": \"TabNav_edit__30_Bq\",\n\t\"tabInput\": \"TabNav_tabInput__2DAeL\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2FwcC9UYWJOYXYubW9kdWxlLnNjc3M/OGE3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0Esc0VBQXNFLGdCQUFnQix5QkFBeUIsOENBQThDLDJDQUEyQyxzQ0FBc0MsR0FBRyxnQ0FBZ0MsaUJBQWlCLDhDQUE4QywyQ0FBMkMsc0NBQXNDLG1CQUFtQix1QkFBdUIsR0FBRyw4QkFBOEIscUNBQXFDLG9CQUFvQixpQkFBaUIsaUJBQWlCLHNCQUFzQixrQkFBa0IsMkJBQTJCLHdDQUF3QywyQkFBMkIsNkJBQTZCLG1CQUFtQixnQ0FBZ0MsaUJBQWlCLEdBQUcsK0NBQStDLHNCQUFzQixrQkFBa0IsdUJBQXVCLHNCQUFzQixHQUFHLG9EQUFvRCx1QkFBdUIsR0FBRyxtRUFBbUUsdUJBQXVCLGVBQWUsaUJBQWlCLG9CQUFvQixrQkFBa0IsR0FBRyx1RUFBdUUscUJBQXFCLGdDQUFnQyxHQUFHLHlFQUF5RSxtQkFBbUIsR0FBRyxPQUFPLG1GQUFtRixVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSx3Q0FBd0Msa0JBQWtCLDJCQUEyQix3Q0FBd0MsR0FBRyxrQkFBa0IsbUJBQW1CLHdDQUF3QyxxQkFBcUIseUJBQXlCLEdBQUcsZ0JBQWdCLHVDQUF1QyxzQkFBc0IsbUJBQW1CLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixxQkFBcUIsa0NBQWtDLG1CQUFtQixjQUFjLHFDQUFxQywwQkFBMEIsd0JBQXdCLDZCQUE2Qiw0QkFBNEIsZ0JBQWdCLGlDQUFpQyxXQUFXLG1CQUFtQixpQ0FBaUMseUJBQXlCLDJCQUEyQiw4QkFBOEIsb0NBQW9DLFdBQVcsdUJBQXVCLCtCQUErQiwwQ0FBMEMsV0FBVyxxQkFBcUIscUJBQXFCLGlDQUFpQyxlQUFlLFdBQVcsT0FBTyxHQUFHLG1CQUFtQjtBQUMzakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL3N0eWxlcy9hcHAvVGFiTmF2Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlRhYk5hdl9oaWRlVGFiTWVudV9fOFEzOXEge1xcbiAgb3BhY2l0eTogMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5UYWJOYXZfc2hvd1RhYk1lbnVfXzZDTm9DIHtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLlRhYk5hdl9jb250YWluZXJfX0VMUFhKIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWFxdWEpO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG4uVGFiTmF2X2NvbnRhaW5lcl9fRUxQWEogLlRhYk5hdl90YWJfX2lkTzhFIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDBweCAxOHB4O1xcbn1cXG4uVGFiTmF2X2NvbnRhaW5lcl9fRUxQWEogLlRhYk5hdl90YWJfX2lkTzhFIHNwYW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uVGFiTmF2X2NvbnRhaW5lcl9fRUxQWEogLlRhYk5hdl90YWJfX2lkTzhFIC5UYWJOYXZfZWRpdF9fMzBfQnEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIG9wYWNpdHk6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5UYWJOYXZfY29udGFpbmVyX19FTFBYSiAuVGFiTmF2X3RhYl9faWRPOEUgLlRhYk5hdl90YWJJbnB1dF9fMkRBZUwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodGVzdC1hcXVhKTtcXG59XFxuLlRhYk5hdl9jb250YWluZXJfX0VMUFhKIC5UYWJOYXZfdGFiX19pZE84RTpob3ZlciAuVGFiTmF2X2VkaXRfXzMwX0JxIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vVGFiTmF2Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7RUFBQSxzQ0FBQTtFQUFBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUNBQUE7RUFBQSxzQ0FBQTtFQUFBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsOEJBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFHSSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFFUTtFQUNJLGtCQUFBO0FBQVo7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtBQUhaO0FBTVE7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0FBSlo7QUFRWTtFQUNJLGNBQUE7QUFOaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhpZGVUYWJNZW51IHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5zaG93VGFiTWVudSB7XFxuICAgIG9wYWNpdHk6IDk1JTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1hcXVhKTtcXG4gICAgei1pbmRleDogOTk5O1xcblxcbiAgICAudGFiIHtcXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHBhZGRpbmc6IDBweCAxOHB4O1xcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVkaXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICByaWdodDogMHB4O1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFiSW5wdXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWFxdWEpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmVkaXQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZVRhYk1lbnVcIjogXCJUYWJOYXZfaGlkZVRhYk1lbnVfXzhRMzlxXCIsXG5cdFwic2hvd1RhYk1lbnVcIjogXCJUYWJOYXZfc2hvd1RhYk1lbnVfXzZDTm9DXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiVGFiTmF2X2NvbnRhaW5lcl9fRUxQWEpcIixcblx0XCJ0YWJcIjogXCJUYWJOYXZfdGFiX19pZE84RVwiLFxuXHRcImVkaXRcIjogXCJUYWJOYXZfZWRpdF9fMzBfQnFcIixcblx0XCJ0YWJJbnB1dFwiOiBcIlRhYk5hdl90YWJJbnB1dF9fMkRBZUxcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles/app/TabNav.module.scss\n");

/***/ })

});