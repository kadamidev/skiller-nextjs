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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".TabNav_hideTabMenu__8Q39q {\\n  opacity: 0%;\\n  pointer-events: none;\\n  -webkit-transition: opacity 0.2s ease-out;\\n  -moz-transition: opacity 0.2s ease-out;\\n  transition: opacity 0.2s ease-out;\\n}\\n\\n.TabNav_showTabMenu__6CNoC {\\n  opacity: 95%;\\n  -webkit-transition: opacity 0.2s ease-out;\\n  -moz-transition: opacity 0.2s ease-out;\\n  transition: opacity 0.2s ease-out;\\n  z-index: 10000;\\n  position: relative;\\n}\\n\\n.TabNav_container__ELPXJ {\\n  background: var(--primary-color);\\n  position: fixed;\\n  height: 50px;\\n  width: 100vw;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  -moz-box-align: center;\\n       align-items: center;\\n  padding: 0 1em;\\n  color: var(--lightest-aqua);\\n  z-index: 999;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E {\\n  display: -moz-box;\\n  display: flex;\\n  position: relative;\\n  padding: 0px 18px;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E span {\\n  text-align: center;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E .TabNav_edit__30_Bq {\\n  position: absolute;\\n  right: 0px;\\n  opacity: 50%;\\n  cursor: pointer;\\n  display: none;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E .TabNav_tabInput__2DAeL {\\n  background: none;\\n  color: var(--lightest-aqua);\\n  width: 100%;\\n}\\n.TabNav_container__ELPXJ .TabNav_tab__idO8E:hover .TabNav_edit__30_Bq {\\n  display: block;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://TabNav.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,oBAAA;EACA,yCAAA;EAAA,sCAAA;EAAA,iCAAA;AACJ;;AAEA;EACI,YAAA;EACA,yCAAA;EAAA,sCAAA;EAAA,iCAAA;EACA,cAAA;EACA,kBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,sBAAA;OAAA,mBAAA;EACA,cAAA;EACA,2BAAA;EACA,YAAA;AACJ;AACI;EAGI,iBAAA;EAAA,aAAA;EACA,kBAAA;EACA,iBAAA;AADR;AAEQ;EACI,kBAAA;AAAZ;AAGQ;EACI,kBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EAGA,aAAA;AAHZ;AAMQ;EACI,gBAAA;EACA,2BAAA;EACA,WAAA;AAJZ;AAYY;EACI,cAAA;AAVhB\",\"sourcesContent\":[\".hideTabMenu {\\n    opacity: 0%;\\n    pointer-events: none;\\n    transition: opacity 0.2s ease-out;\\n}\\n\\n.showTabMenu {\\n    opacity: 95%;\\n    transition: opacity 0.2s ease-out;\\n    z-index: 10000;\\n    position: relative;\\n}\\n\\n.container {\\n    background: var(--primary-color);\\n    position: fixed;\\n    height: 50px;\\n    width: 100vw;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 1em;\\n    color: var(--lightest-aqua);\\n    z-index: 999;\\n\\n    .tab {\\n        // border: 1px solid black;\\n        // height: 100%;\\n        display: flex;\\n        position: relative;\\n        padding: 0px 18px;\\n        span {\\n            text-align: center;\\n        }\\n\\n        .edit {\\n            position: absolute;\\n            right: 0px;\\n            opacity: 50%;\\n            cursor: pointer;\\n\\n    \\n            display: none;\\n        }\\n\\n        .tabInput {\\n            background: none;\\n            color: var(--lightest-aqua);\\n            width: 100%;\\n\\n            &:focus {\\n                // outline: none;\\n            }\\n        }\\n\\n        &:hover {\\n            .edit {\\n                display: block;\\n            }\\n        }\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"hideTabMenu\": \"TabNav_hideTabMenu__8Q39q\",\n\t\"showTabMenu\": \"TabNav_showTabMenu__6CNoC\",\n\t\"container\": \"TabNav_container__ELPXJ\",\n\t\"tab\": \"TabNav_tab__idO8E\",\n\t\"edit\": \"TabNav_edit__30_Bq\",\n\t\"tabInput\": \"TabNav_tabInput__2DAeL\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2FwcC9UYWJOYXYubW9kdWxlLnNjc3M/OGE3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0Esc0VBQXNFLGdCQUFnQix5QkFBeUIsOENBQThDLDJDQUEyQyxzQ0FBc0MsR0FBRyxnQ0FBZ0MsaUJBQWlCLDhDQUE4QywyQ0FBMkMsc0NBQXNDLG1CQUFtQix1QkFBdUIsR0FBRyw4QkFBOEIscUNBQXFDLG9CQUFvQixpQkFBaUIsaUJBQWlCLHNCQUFzQixrQkFBa0IsMkJBQTJCLHdDQUF3QywyQkFBMkIsNkJBQTZCLG1CQUFtQixnQ0FBZ0MsaUJBQWlCLEdBQUcsK0NBQStDLHNCQUFzQixrQkFBa0IsdUJBQXVCLHNCQUFzQixHQUFHLG9EQUFvRCx1QkFBdUIsR0FBRyxtRUFBbUUsdUJBQXVCLGVBQWUsaUJBQWlCLG9CQUFvQixrQkFBa0IsR0FBRyx1RUFBdUUscUJBQXFCLGdDQUFnQyxnQkFBZ0IsR0FBRyx5RUFBeUUsbUJBQW1CLEdBQUcsT0FBTyxtRkFBbUYsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSx3Q0FBd0Msa0JBQWtCLDJCQUEyQix3Q0FBd0MsR0FBRyxrQkFBa0IsbUJBQW1CLHdDQUF3QyxxQkFBcUIseUJBQXlCLEdBQUcsZ0JBQWdCLHVDQUF1QyxzQkFBc0IsbUJBQW1CLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixxQkFBcUIsa0NBQWtDLG1CQUFtQixjQUFjLHFDQUFxQywwQkFBMEIsd0JBQXdCLDZCQUE2Qiw0QkFBNEIsZ0JBQWdCLGlDQUFpQyxXQUFXLG1CQUFtQixpQ0FBaUMseUJBQXlCLDJCQUEyQiw4QkFBOEIsb0NBQW9DLFdBQVcsdUJBQXVCLCtCQUErQiwwQ0FBMEMsMEJBQTBCLHlCQUF5QixtQ0FBbUMsZUFBZSxXQUFXLHFCQUFxQixxQkFBcUIsaUNBQWlDLGVBQWUsV0FBVyxPQUFPLEdBQUcsbUJBQW1CO0FBQzFyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vc3R5bGVzL2FwcC9UYWJOYXYubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVGFiTmF2X2hpZGVUYWJNZW51X184UTM5cSB7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLlRhYk5hdl9zaG93VGFiTWVudV9fNkNOb0Mge1xcbiAgb3BhY2l0eTogOTUlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uVGFiTmF2X2NvbnRhaW5lcl9fRUxQWEoge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtYXF1YSk7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5UYWJOYXZfY29udGFpbmVyX19FTFBYSiAuVGFiTmF2X3RhYl9faWRPOEUge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMHB4IDE4cHg7XFxufVxcbi5UYWJOYXZfY29udGFpbmVyX19FTFBYSiAuVGFiTmF2X3RhYl9faWRPOEUgc3BhbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5UYWJOYXZfY29udGFpbmVyX19FTFBYSiAuVGFiTmF2X3RhYl9faWRPOEUgLlRhYk5hdl9lZGl0X18zMF9CcSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgb3BhY2l0eTogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLlRhYk5hdl9jb250YWluZXJfX0VMUFhKIC5UYWJOYXZfdGFiX19pZE84RSAuVGFiTmF2X3RhYklucHV0X18yREFlTCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWFxdWEpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5UYWJOYXZfY29udGFpbmVyX19FTFBYSiAuVGFiTmF2X3RhYl9faWRPOEU6aG92ZXIgLlRhYk5hdl9lZGl0X18zMF9CcSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1RhYk5hdi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlDQUFBO0VBQUEsc0NBQUE7RUFBQSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHlDQUFBO0VBQUEsc0NBQUE7RUFBQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLDhCQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBR0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBRVE7RUFDSSxrQkFBQTtBQUFaO0FBR1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7QUFIWjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFKWjtBQVlZO0VBQ0ksY0FBQTtBQVZoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGlkZVRhYk1lbnUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLnNob3dUYWJNZW51IHtcXG4gICAgb3BhY2l0eTogOTUlO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XFxuICAgIHotaW5kZXg6IDEwMDAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWFxdWEpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuXFxuICAgIC50YWIge1xcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgcGFkZGluZzogMHB4IDE4cHg7XFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZWRpdCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XFxuICAgICAgICAgICAgb3BhY2l0eTogNTAlO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJJbnB1dCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtYXF1YSk7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgICAgICAgIC8vIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmVkaXQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZVRhYk1lbnVcIjogXCJUYWJOYXZfaGlkZVRhYk1lbnVfXzhRMzlxXCIsXG5cdFwic2hvd1RhYk1lbnVcIjogXCJUYWJOYXZfc2hvd1RhYk1lbnVfXzZDTm9DXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiVGFiTmF2X2NvbnRhaW5lcl9fRUxQWEpcIixcblx0XCJ0YWJcIjogXCJUYWJOYXZfdGFiX19pZE84RVwiLFxuXHRcImVkaXRcIjogXCJUYWJOYXZfZWRpdF9fMzBfQnFcIixcblx0XCJ0YWJJbnB1dFwiOiBcIlRhYk5hdl90YWJJbnB1dF9fMkRBZUxcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles/app/TabNav.module.scss\n");

/***/ })

});