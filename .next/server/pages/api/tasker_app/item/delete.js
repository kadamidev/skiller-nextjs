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
exports.id = "pages/api/tasker_app/item/delete";
exports.ids = ["pages/api/tasker_app/item/delete"];
exports.modules = {

/***/ "./pages/api/tasker_app/item/delete.ts":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/item/delete.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      cardItem: itemData\n    } = req.body;\n    const item = await prisma.cardItem.delete({\n      where: {\n        id: itemData.id\n      }\n    });\n    res.status(201);\n    res.json({\n      item\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to delete item from the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9pdGVtL2RlbGV0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFrQjtBQUFDSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBbEIsQ0FBZjs7QUFFQSxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxRQUFRLEVBQUVDO0FBQVosUUFBeUJMLEdBQUcsQ0FBQ00sSUFBbkM7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUwsTUFBTSxDQUFDRSxRQUFQLENBQWdCSSxNQUFoQixDQUF1QjtBQUN0Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLEVBQUUsRUFBRUwsUUFBUSxDQUFDSztBQURWO0FBRCtCLEtBQXZCLENBQW5CO0FBTUFULElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVg7QUFDQVYsSUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVM7QUFBQ0wsTUFBQUE7QUFBRCxLQUFUO0FBQ0gsR0FWRCxDQVVFLE9BQU1NLENBQU4sRUFBUztBQUNQWixJQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUNFLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQVQ7QUFDSCxHQWJELFNBYVU7QUFDTixVQUFNWixNQUFNLENBQUNhLFdBQVAsRUFBTjtBQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL2l0ZW0vZGVsZXRlLnRzPzQ2MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCB7bG9nOiBbXCJxdWVyeVwiXSB9KVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBjYXJkSXRlbTogaXRlbURhdGEgfSA9IHJlcS5ib2R5XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCBwcmlzbWEuY2FyZEl0ZW0uZGVsZXRlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW1EYXRhLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXMuc3RhdHVzKDIwMSlcbiAgICAgICAgcmVzLmpzb24oe2l0ZW19KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgcmVzLmpzb24oe2Vycm9yOiBcInVuYWJsZSB0byBkZWxldGUgaXRlbSBmcm9tIHRoZSBkYXRhYmFzZVwifSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJsb2ciLCJjYXJkSXRlbSIsIml0ZW1EYXRhIiwiYm9keSIsIml0ZW0iLCJkZWxldGUiLCJ3aGVyZSIsImlkIiwic3RhdHVzIiwianNvbiIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/item/delete.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/item/delete.ts"));
module.exports = __webpack_exports__;

})();