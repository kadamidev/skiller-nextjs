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
exports.id = "pages/api/tasker_app/card/update";
exports.ids = ["pages/api/tasker_app/card/update"];
exports.modules = {

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authenticated\": () => (/* binding */ authenticated)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authenticated = fn => async (req, res) => {\n  try {\n    const decodedHttp = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.authHttp, process.env.JWT_SECRET);\n    const decoded = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.auth, process.env.JWT_SECRET);\n    if (decoded && decodedHttp.key === decoded.key) return await fn(req, res);\n  } catch (err) {\n    console.log(err.stack);\n    res.status(401).json({\n      message: 'not authenticated'\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUlPLE1BQU1DLGFBQWEsR0FBS0MsRUFBRixJQUEwQixPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUN4RyxNQUFJO0FBQ0EsVUFBTUMsV0FBVyxHQUFHTCxvREFBTSxDQUFDRyxHQUFHLENBQUNHLE9BQUosQ0FBWUMsUUFBYixFQUF3QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQXBDLENBQTFCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHWCxvREFBTSxDQUFDRyxHQUFHLENBQUNHLE9BQUosQ0FBWU0sSUFBYixFQUFvQkosT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQWhDLENBQXRCO0FBRUEsUUFBSUMsT0FBTyxJQUFLTixXQUFXLENBQUNRLEdBQVosS0FBb0JGLE9BQU8sQ0FBQ0UsR0FBNUMsRUFBa0QsT0FBTyxNQUFNWCxFQUFFLENBQUNDLEdBQUQsRUFBTUMsR0FBTixDQUFmO0FBQ3JELEdBTEQsQ0FLRSxPQUFPVSxHQUFQLEVBQVk7QUFDWkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csS0FBaEI7QUFDQWIsSUFBQUEsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQVYsS0FBckI7QUFDRDtBQUNGLENBVkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL2xpYi9hdXRoLnRzP2UzM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIsIE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCJcblxuXG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVkID0gKCBmbjogTmV4dEFwaUhhbmRsZXIgKSA9PiBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkZWNvZGVkSHR0cCA9IHZlcmlmeShyZXEuY29va2llcy5hdXRoSHR0cCEsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSB2ZXJpZnkocmVxLmNvb2tpZXMuYXV0aCEsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXG5cbiAgICAgICAgaWYgKGRlY29kZWQgJiYgKGRlY29kZWRIdHRwLmtleSA9PT0gZGVjb2RlZC5rZXkpKSByZXR1cm4gYXdhaXQgZm4ocmVxLCByZXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7bWVzc2FnZTogJ25vdCBhdXRoZW50aWNhdGVkJ30pXG4gICAgfVxuICB9Il0sIm5hbWVzIjpbInZlcmlmeSIsImF1dGhlbnRpY2F0ZWQiLCJmbiIsInJlcSIsInJlcyIsImRlY29kZWRIdHRwIiwiY29va2llcyIsImF1dGhIdHRwIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJkZWNvZGVkIiwiYXV0aCIsImtleSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./pages/api/tasker_app/card/update.ts":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/card/update.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/auth */ \"./lib/auth.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authenticated)(async function (req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      card: cardData\n    } = req.body;\n    const card = await prisma.card.update({\n      where: {\n        id: cardData.id\n      },\n      data: {\n        header: cardData.header,\n        collapsed: cardData.collapsed\n      }\n    });\n    res.status(201);\n    res.json({\n      card\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to update card in the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL3VwZGF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUlBLGlFQUFlQyx3REFBYSxDQUFDLGdCQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3BGLFFBQU1DLE1BQU0sR0FBRyxJQUFJSix3REFBSixDQUFrQjtBQUFDSyxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBbEIsQ0FBZjs7QUFDQSxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxJQUFJLEVBQUVDO0FBQVIsUUFBcUJMLEdBQUcsQ0FBQ00sSUFBL0I7QUFDQSxVQUFNRixJQUFJLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVlHLE1BQVosQ0FBbUI7QUFDbENDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxFQUFFLEVBQUVKLFFBQVEsQ0FBQ0k7QUFEVixPQUQyQjtBQUlsQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLE1BQU0sRUFBRU4sUUFBUSxDQUFDTSxNQURmO0FBRUZDLFFBQUFBLFNBQVMsRUFBRVAsUUFBUSxDQUFDTztBQUZsQjtBQUo0QixLQUFuQixDQUFuQjtBQVVBWCxJQUFBQSxHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYO0FBQ0FaLElBQUFBLEdBQUcsQ0FBQ2EsSUFBSixDQUFTO0FBQUNWLE1BQUFBO0FBQUQsS0FBVDtBQUNILEdBZEQsQ0FjRSxPQUFNVyxDQUFOLEVBQVM7QUFDUGQsSUFBQUEsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWDtBQUNBWixJQUFBQSxHQUFHLENBQUNhLElBQUosQ0FBUztBQUFDRSxNQUFBQSxLQUFLLEVBQUU7QUFBUixLQUFUO0FBQ0gsR0FqQkQsU0FpQlU7QUFDTixVQUFNZCxNQUFNLENBQUNlLFdBQVAsRUFBTjtBQUNIO0FBRUosQ0F2QjJCLENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL3VwZGF0ZS50cz8wNjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9hdXRoXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoZW50aWNhdGVkKGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoIHtsb2c6IFtcInF1ZXJ5XCJdIH0pXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBjYXJkOiBjYXJkRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgY2FyZCA9IGF3YWl0IHByaXNtYS5jYXJkLnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIGlkOiBjYXJkRGF0YS5pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGNhcmREYXRhLmhlYWRlcixcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGNhcmREYXRhLmNvbGxhcHNlZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpXG4gICAgICAgIHJlcy5qc29uKHtjYXJkfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogXCJ1bmFibGUgdG8gdXBkYXRlIGNhcmQgaW4gdGhlIGRhdGFiYXNlXCJ9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxuXG59KSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJhdXRoZW50aWNhdGVkIiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwiY2FyZCIsImNhcmREYXRhIiwiYm9keSIsInVwZGF0ZSIsIndoZXJlIiwiaWQiLCJkYXRhIiwiaGVhZGVyIiwiY29sbGFwc2VkIiwic3RhdHVzIiwianNvbiIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/card/update.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/card/update.ts"));
module.exports = __webpack_exports__;

})();