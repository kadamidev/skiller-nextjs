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
exports.id = "pages/api/tasker_app/item/create";
exports.ids = ["pages/api/tasker_app/item/create"];
exports.modules = {

/***/ "./pages/api/tasker_app/item/create.ts":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/item/create.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      cardItem: itemData\n    } = req.body;\n    const cardItem = await prisma.cardItem.create({\n      data: {\n        text: itemData.text,\n        card_id: itemData.card_id\n      }\n    });\n    res.status(201);\n    res.json({\n      dbid: cardItem.id\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to save item to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9pdGVtL2NyZWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUlBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFrQjtBQUFDSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBbEIsQ0FBZjs7QUFFQSxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxRQUFRLEVBQUVDO0FBQVosUUFBeUJMLEdBQUcsQ0FBQ00sSUFBbkM7QUFDQSxVQUFNRixRQUFRLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxRQUFQLENBQWdCRyxNQUFoQixDQUF1QjtBQUMxQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLElBQUksRUFBRUosUUFBUSxDQUFDSSxJQURiO0FBRUZDLFFBQUFBLE9BQU8sRUFBRUwsUUFBUSxDQUFDSztBQUZoQjtBQURvQyxLQUF2QixDQUF2QjtBQU9BVCxJQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUNDLE1BQUFBLElBQUksRUFBRVQsUUFBUSxDQUFDVTtBQUFoQixLQUFUO0FBQ0gsR0FYRCxDQVdFLE9BQU1DLENBQU4sRUFBUztBQUNQZCxJQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUNJLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQVQ7QUFDSCxHQWRELFNBY1U7QUFDTixVQUFNZCxNQUFNLENBQUNlLFdBQVAsRUFBTjtBQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL2l0ZW0vY3JlYXRlLnRzP2U1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoIHtsb2c6IFtcInF1ZXJ5XCJdIH0pXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGNhcmRJdGVtOiBpdGVtRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgY2FyZEl0ZW0gPSBhd2FpdCBwcmlzbWEuY2FyZEl0ZW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtRGF0YS50ZXh0LFxuICAgICAgICAgICAgICAgIGNhcmRfaWQ6IGl0ZW1EYXRhLmNhcmRfaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpXG4gICAgICAgIHJlcy5qc29uKHtkYmlkOiBjYXJkSXRlbS5pZH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwidW5hYmxlIHRvIHNhdmUgaXRlbSB0byB0aGUgZGF0YWJhc2VcIn0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwiY2FyZEl0ZW0iLCJpdGVtRGF0YSIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwidGV4dCIsImNhcmRfaWQiLCJzdGF0dXMiLCJqc29uIiwiZGJpZCIsImlkIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/item/create.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/item/create.ts"));
module.exports = __webpack_exports__;

})();