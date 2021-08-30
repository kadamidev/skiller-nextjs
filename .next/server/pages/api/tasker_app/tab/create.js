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
exports.id = "pages/api/tasker_app/tab/create";
exports.ids = ["pages/api/tasker_app/tab/create"];
exports.modules = {

/***/ "./pages/api/tasker_app/tab/create.ts":
/*!********************************************!*\
  !*** ./pages/api/tasker_app/tab/create.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      tab: tabData\n    } = req.body;\n    const tab = await prisma.tab.create({\n      data: {\n        name: tabData.name,\n        user_id: tabData.user_id\n      }\n    });\n    res.status(201);\n    res.json({\n      tab\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to save tab to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBR0EsNkJBQWUsMENBQWdCQyxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDdEUsUUFBTUMsTUFBTSxHQUFHLElBQUlILHdEQUFKLENBQWtCO0FBQUNJLElBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBTixHQUFsQixDQUFmOztBQUVBLE1BQUk7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUM7QUFBUCxRQUFtQkwsR0FBRyxDQUFDTSxJQUE3QjtBQUNBLFVBQU1GLEdBQUcsR0FBRyxNQUFNRixNQUFNLENBQUNFLEdBQVAsQ0FBV0csTUFBWCxDQUFrQjtBQUNoQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLElBQUksRUFBRUosT0FBTyxDQUFDSSxJQURaO0FBRUZDLFFBQUFBLE9BQU8sRUFBRUwsT0FBTyxDQUFDSztBQUZmO0FBRDBCLEtBQWxCLENBQWxCO0FBT0FULElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVg7QUFDQVYsSUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVM7QUFBQ1IsTUFBQUE7QUFBRCxLQUFUO0FBQ0gsR0FYRCxDQVdFLE9BQU1TLENBQU4sRUFBUztBQUNQWixJQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUNFLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQVQ7QUFDSCxHQWRELFNBY1U7QUFDTixVQUFNWixNQUFNLENBQUNhLFdBQVAsRUFBTjtBQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL3RhYi9jcmVhdGUudHM/ZTI2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoIHtsb2c6IFtcInF1ZXJ5XCJdIH0pXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHRhYjogdGFiRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgdGFiID0gYXdhaXQgcHJpc21hLnRhYi5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRhYkRhdGEubmFtZSxcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0YWJEYXRhLnVzZXJfaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpXG4gICAgICAgIHJlcy5qc29uKHt0YWJ9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgcmVzLmpzb24oe2Vycm9yOiBcInVuYWJsZSB0byBzYXZlIHRhYiB0byB0aGUgZGF0YWJhc2VcIn0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwidGFiIiwidGFiRGF0YSIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwibmFtZSIsInVzZXJfaWQiLCJzdGF0dXMiLCJqc29uIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/create.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/create.ts"));
module.exports = __webpack_exports__;

})();