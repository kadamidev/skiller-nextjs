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

/***/ "./pages/api/tasker_app/tab/create.tsx":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/tab/create.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      tab: tabData\n    } = req.body;\n    const tab = await prisma.tab.create({\n      data: {\n        name: tabData.name,\n        user_id: tabData.user_id\n      }\n    });\n    res.status(201);\n    res.json({\n      tab\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to save tab to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvY3JlYXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFpQjtBQUFDSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBakIsQ0FBZjs7QUFFQSxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxHQUFHLEVBQUVDO0FBQVAsUUFBbUJMLEdBQUcsQ0FBQ00sSUFBN0I7QUFDQSxVQUFNRixHQUFHLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxHQUFQLENBQVdHLE1BQVgsQ0FBa0I7QUFDaENDLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ksSUFEWjtBQUVGQyxRQUFBQSxPQUFPLEVBQUVMLE9BQU8sQ0FBQ0s7QUFGZjtBQUQwQixLQUFsQixDQUFsQjtBQU9BVCxJQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUNSLE1BQUFBO0FBQUQsS0FBVDtBQUNILEdBWEQsQ0FXRSxPQUFNUyxDQUFOLEVBQVM7QUFDUFosSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWDtBQUNBVixJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBUztBQUFDRSxNQUFBQSxLQUFLLEVBQUU7QUFBUixLQUFUO0FBQ0gsR0FkRCxTQWNVO0FBQ04sVUFBTVosTUFBTSxDQUFDYSxXQUFQLEVBQU47QUFDSDtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvY3JlYXRlLnRzeD8zYjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7bG9nOiBbXCJxdWVyeVwiXX0pXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHRhYjogdGFiRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgdGFiID0gYXdhaXQgcHJpc21hLnRhYi5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRhYkRhdGEubmFtZSxcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0YWJEYXRhLnVzZXJfaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpXG4gICAgICAgIHJlcy5qc29uKHt0YWJ9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgcmVzLmpzb24oe2Vycm9yOiBcInVuYWJsZSB0byBzYXZlIHRhYiB0byB0aGUgZGF0YWJhc2VcIn0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwidGFiIiwidGFiRGF0YSIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwibmFtZSIsInVzZXJfaWQiLCJzdGF0dXMiLCJqc29uIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/create.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/create.tsx"));
module.exports = __webpack_exports__;

})();