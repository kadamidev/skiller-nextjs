"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tasker_app/item/update";
exports.ids = ["pages/api/tasker_app/item/update"];
exports.modules = {

/***/ "./pages/api/tasker_app/item/update.ts":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/item/update.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      item: itemData\n    } = req.body;\n    const card = await prisma.cardItem.update({\n      where: {\n        id: itemData.id\n      },\n      data: {\n        text: itemData.text,\n        checked: itemData.checked\n      }\n    });\n    res.status(201);\n    res.json({\n      card\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to update card in the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9pdGVtL3VwZGF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFrQjtBQUFDSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBbEIsQ0FBZjs7QUFFQSxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxJQUFJLEVBQUVDO0FBQVIsUUFBcUJMLEdBQUcsQ0FBQ00sSUFBL0I7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUwsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxNQUFoQixDQUF1QjtBQUN0Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLEVBQUUsRUFBRU4sUUFBUSxDQUFDTTtBQURWLE9BRCtCO0FBSXRDQyxNQUFBQSxJQUFJLEVBQUU7QUFDRkMsUUFBQUEsSUFBSSxFQUFFUixRQUFRLENBQUNRLElBRGI7QUFFRkMsUUFBQUEsT0FBTyxFQUFFVCxRQUFRLENBQUNTO0FBRmhCO0FBSmdDLEtBQXZCLENBQW5CO0FBVUFiLElBQUFBLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVg7QUFDQWQsSUFBQUEsR0FBRyxDQUFDZSxJQUFKLENBQVM7QUFBQ1QsTUFBQUE7QUFBRCxLQUFUO0FBQ0gsR0FkRCxDQWNFLE9BQU1VLENBQU4sRUFBUztBQUNQaEIsSUFBQUEsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWDtBQUNBZCxJQUFBQSxHQUFHLENBQUNlLElBQUosQ0FBUztBQUFDRSxNQUFBQSxLQUFLLEVBQUU7QUFBUixLQUFUO0FBQ0gsR0FqQkQsU0FpQlU7QUFDTixVQUFNaEIsTUFBTSxDQUFDaUIsV0FBUCxFQUFOO0FBQ0g7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3Rhc2tlcl9hcHAvaXRlbS91cGRhdGUudHM/YzI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoIHtsb2c6IFtcInF1ZXJ5XCJdIH0pXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGl0ZW06IGl0ZW1EYXRhIH0gPSByZXEuYm9keVxuICAgICAgICBjb25zdCBjYXJkID0gYXdhaXQgcHJpc21hLmNhcmRJdGVtLnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtRGF0YS5pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtRGF0YS50ZXh0LFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGl0ZW1EYXRhLmNoZWNrZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKVxuICAgICAgICByZXMuanNvbih7Y2FyZH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwidW5hYmxlIHRvIHVwZGF0ZSBjYXJkIGluIHRoZSBkYXRhYmFzZVwifSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJsb2ciLCJpdGVtIiwiaXRlbURhdGEiLCJib2R5IiwiY2FyZCIsImNhcmRJdGVtIiwidXBkYXRlIiwid2hlcmUiLCJpZCIsImRhdGEiLCJ0ZXh0IiwiY2hlY2tlZCIsInN0YXR1cyIsImpzb24iLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/item/update.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/item/update.ts"));
module.exports = __webpack_exports__;

})();