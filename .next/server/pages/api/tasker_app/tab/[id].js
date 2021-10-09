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

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authenticated\": () => (/* binding */ authenticated)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authenticated = fn => async (req, res) => {\n  try {\n    const decodedHttp = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.authHttp, process.env.JWT_SECRET);\n    const decoded = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.auth, process.env.JWT_SECRET);\n    if (decoded && decodedHttp.key === decoded.key) return await fn(req, res);\n  } catch (err) {\n    console.log(err.stack);\n    res.status(401).json({\n      message: 'not authenticated'\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUlPLE1BQU1DLGFBQWEsR0FBS0MsRUFBRixJQUEwQixPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUN4RyxNQUFJO0FBQ0EsVUFBTUMsV0FBVyxHQUFHTCxvREFBTSxDQUFDRyxHQUFHLENBQUNHLE9BQUosQ0FBWUMsUUFBYixFQUF3QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQXBDLENBQTFCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHWCxvREFBTSxDQUFDRyxHQUFHLENBQUNHLE9BQUosQ0FBWU0sSUFBYixFQUFvQkosT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQWhDLENBQXRCO0FBRUEsUUFBSUMsT0FBTyxJQUFLTixXQUFXLENBQUNRLEdBQVosS0FBb0JGLE9BQU8sQ0FBQ0UsR0FBNUMsRUFBa0QsT0FBTyxNQUFNWCxFQUFFLENBQUNDLEdBQUQsRUFBTUMsR0FBTixDQUFmO0FBQ3JELEdBTEQsQ0FLRSxPQUFPVSxHQUFQLEVBQVk7QUFDWkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csS0FBaEI7QUFDQWIsSUFBQUEsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQVYsS0FBckI7QUFDRDtBQUNGLENBVkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL2xpYi9hdXRoLnRzP2UzM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIsIE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCJcblxuXG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVkID0gKCBmbjogTmV4dEFwaUhhbmRsZXIgKSA9PiBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkZWNvZGVkSHR0cCA9IHZlcmlmeShyZXEuY29va2llcy5hdXRoSHR0cCEsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSB2ZXJpZnkocmVxLmNvb2tpZXMuYXV0aCEsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXG5cbiAgICAgICAgaWYgKGRlY29kZWQgJiYgKGRlY29kZWRIdHRwLmtleSA9PT0gZGVjb2RlZC5rZXkpKSByZXR1cm4gYXdhaXQgZm4ocmVxLCByZXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7bWVzc2FnZTogJ25vdCBhdXRoZW50aWNhdGVkJ30pXG4gICAgfVxuICB9Il0sIm5hbWVzIjpbInZlcmlmeSIsImF1dGhlbnRpY2F0ZWQiLCJmbiIsInJlcSIsInJlcyIsImRlY29kZWRIdHRwIiwiY29va2llcyIsImF1dGhIdHRwIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJkZWNvZGVkIiwiYXV0aCIsImtleSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./pages/api/tasker_app/tab/[id].ts":
/*!******************************************!*\
  !*** ./pages/api/tasker_app/tab/[id].ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/auth */ \"./lib/auth.ts\");\n // import { verify } from 'jsonwebtoken'\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authenticated)(async function (req, res) {\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n  const {\n    userId\n  } = req.query;\n\n  try {\n    const tabs = await prisma.tab.findMany({\n      where: {\n        user_id: userId\n      },\n      include: {\n        Card: {\n          include: {\n            items: true\n          }\n        }\n      }\n    });\n    res.status(200);\n    res.json({\n      tabs\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0NBRUE7O0FBQ0E7QUFJQSxpRUFBZUMsd0RBQWEsQ0FBQyxnQkFBZ0JDLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUNwRixNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFsQixFQUF5QjtBQUNyQixXQUFPRCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0g7O0FBR0QsUUFBTUMsTUFBTSxHQUFHLElBQUlSLHdEQUFKLENBQWlCO0FBQUVTLElBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBUCxHQUFqQixDQUFmO0FBQ0EsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWFSLEdBQUcsQ0FBQ1MsS0FBdkI7O0FBQ0EsTUFBSTtBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNSixNQUFNLENBQUNLLEdBQVAsQ0FBV0MsUUFBWCxDQUFvQjtBQUNuQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLE9BQU8sRUFBRU47QUFETixPQUQ0QjtBQUluQ08sTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBRTtBQUFFRCxVQUFBQSxPQUFPLEVBQUU7QUFBRUUsWUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBWDtBQUREO0FBSjBCLEtBQXBCLENBQW5CO0FBUUFoQixJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYO0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTO0FBQUVNLE1BQUFBO0FBQUYsS0FBVDtBQUNILEdBWEQsQ0FXRSxPQUFNUSxDQUFOLEVBQVM7QUFDUGpCLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVg7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBRWUsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBVDtBQUNILEdBZEQsU0FjVTtBQUNOLFVBQU1iLE1BQU0sQ0FBQ2MsV0FBUCxFQUFOO0FBQ0g7QUFDSixDQXpCMkIsQ0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL3RhYi9baWRdLnRzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIsIE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG4vLyBpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9hdXRoXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoZW50aWNhdGVkKGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pXG4gICAgfVxuXG5cbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KVxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEucXVlcnlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWJzID0gYXdhaXQgcHJpc21hLnRhYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBDYXJkOiB7IGluY2x1ZGU6IHsgaXRlbXM6IHRydWUgfSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKVxuICAgICAgICByZXMuanNvbih7IHRhYnMgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiVW5hYmxlIHRvIGZldGNoIHRhYnNcIiB9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxufSlcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJhdXRoZW50aWNhdGVkIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwcmlzbWEiLCJsb2ciLCJ1c2VySWQiLCJxdWVyeSIsInRhYnMiLCJ0YWIiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcl9pZCIsImluY2x1ZGUiLCJDYXJkIiwiaXRlbXMiLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/[id].ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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