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
exports.id = "pages/api/tasker_app/tab/[id]";
exports.ids = ["pages/api/tasker_app/tab/[id]"];
exports.modules = {

/***/ "./pages/api/tasker_app/tab/[id].ts":
/*!******************************************!*\
  !*** ./pages/api/tasker_app/tab/[id].ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n  const {\n    userId\n  } = req.query;\n\n  try {\n    const tabs = await prisma.tab.findMany({\n      where: {\n        user_id: userId\n      },\n      include: {\n        Card: {\n          include: {\n            items: true\n          }\n        }\n      }\n    });\n    res.status(200);\n    res.json({\n      tabs\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDSDs7QUFFRCxRQUFNQyxNQUFNLEdBQUcsSUFBSVAsd0RBQUosQ0FBaUI7QUFBRVEsSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLEdBQWpCLENBQWY7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBYVIsR0FBRyxDQUFDUyxLQUF2Qjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXQyxRQUFYLENBQW9CO0FBQ25DQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsT0FBTyxFQUFFTjtBQUROLE9BRDRCO0FBSW5DTyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFO0FBQUVELFVBQUFBLE9BQU8sRUFBRTtBQUFFRSxZQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFYO0FBREQ7QUFKMEIsS0FBcEIsQ0FBbkI7QUFRQWhCLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVg7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBRU0sTUFBQUE7QUFBRixLQUFUO0FBQ0gsR0FYRCxDQVdFLE9BQU1RLENBQU4sRUFBUztBQUNQakIsSUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWDtBQUNBRixJQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBUztBQUFFZSxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFUO0FBQ0gsR0FkRCxTQWNVO0FBQ04sVUFBTWIsTUFBTSxDQUFDYyxXQUFQLEVBQU47QUFDSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvW2lkXS50cz9mZjY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgaWYocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KVxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEucXVlcnlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWJzID0gYXdhaXQgcHJpc21hLnRhYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBDYXJkOiB7IGluY2x1ZGU6IHsgaXRlbXM6IHRydWUgfSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKVxuICAgICAgICByZXMuanNvbih7IHRhYnMgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiVW5hYmxlIHRvIGZldGNoIHRhYnNcIiB9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicHJpc21hIiwibG9nIiwidXNlcklkIiwicXVlcnkiLCJ0YWJzIiwidGFiIiwiZmluZE1hbnkiLCJ3aGVyZSIsInVzZXJfaWQiLCJpbmNsdWRlIiwiQ2FyZCIsIml0ZW1zIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/[id].ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/[id].ts"));
module.exports = __webpack_exports__;

})();