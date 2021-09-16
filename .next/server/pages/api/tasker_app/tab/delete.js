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
exports.id = "pages/api/tasker_app/tab/delete";
exports.ids = ["pages/api/tasker_app/tab/delete"];
exports.modules = {

/***/ "./pages/api/tasker_app/tab/delete.ts":
/*!********************************************!*\
  !*** ./pages/api/tasker_app/tab/delete.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      tab: tabData\n    } = req.body;\n    const deleteTab = await prisma.tab.delete({\n      where: {\n        id: tabData.id\n      }\n    });\n    res.status(201);\n    res.json({\n      deleteTab\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to delete tab from the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvZGVsZXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBR0EsNkJBQWUsMENBQWdCQyxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDdEUsUUFBTUMsTUFBTSxHQUFHLElBQUlILHdEQUFKLENBQWtCO0FBQUNJLElBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBTixHQUFsQixDQUFmOztBQUVBLE1BQUk7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUM7QUFBUCxRQUFtQkwsR0FBRyxDQUFDTSxJQUE3QjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxNQUFNTCxNQUFNLENBQUNFLEdBQVAsQ0FBV0ksTUFBWCxDQUFrQjtBQUN0Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLEVBQUUsRUFBRUwsT0FBTyxDQUFDSztBQURUO0FBRCtCLEtBQWxCLENBQXhCO0FBS0FULElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVg7QUFDQVYsSUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVM7QUFBQ0wsTUFBQUE7QUFBRCxLQUFUO0FBQ0gsR0FURCxDQVNFLE9BQU1NLENBQU4sRUFBUztBQUNQWixJQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUNFLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQVQ7QUFDSCxHQVpELFNBWVU7QUFDTixVQUFNWixNQUFNLENBQUNhLFdBQVAsRUFBTjtBQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL3RhYi9kZWxldGUudHM/YWI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoIHtsb2c6IFtcInF1ZXJ5XCJdIH0pXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHRhYjogdGFiRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgZGVsZXRlVGFiID0gYXdhaXQgcHJpc21hLnRhYi5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBpZDogdGFiRGF0YS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMSlcbiAgICAgICAgcmVzLmpzb24oe2RlbGV0ZVRhYn0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwidW5hYmxlIHRvIGRlbGV0ZSB0YWIgZnJvbSB0aGUgZGF0YWJhc2VcIn0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwidGFiIiwidGFiRGF0YSIsImJvZHkiLCJkZWxldGVUYWIiLCJkZWxldGUiLCJ3aGVyZSIsImlkIiwic3RhdHVzIiwianNvbiIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/delete.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/delete.ts"));
module.exports = __webpack_exports__;

})();