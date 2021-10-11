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
exports.id = "pages/api/tasker_app/tab";
exports.ids = ["pages/api/tasker_app/tab"];
exports.modules = {

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authenticated\": () => (/* binding */ authenticated)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authenticated = fn => async (req, res) => {\n  try {\n    const decodedHttp = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.authHttp, process.env.JWT_SECRET);\n    const decoded = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.auth, process.env.JWT_SECRET);\n    if (decoded && decodedHttp.key === decoded.key) return await fn(req, res, decodedHttp.sub);\n  } catch (err) {\n    console.log(err.stack);\n    res.status(401).json({\n      message: 'not authenticated'\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUlPLE1BQU1DLGFBQWEsR0FBS0MsRUFBRixJQUEwQixPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUN4RyxNQUFJO0FBQ0EsVUFBTUMsV0FBVyxHQUFHTCxvREFBTSxDQUFDRyxHQUFHLENBQUNHLE9BQUosQ0FBWUMsUUFBYixFQUF3QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQXBDLENBQTFCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHWCxvREFBTSxDQUFDRyxHQUFHLENBQUNHLE9BQUosQ0FBWU0sSUFBYixFQUFvQkosT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQWhDLENBQXRCO0FBRUEsUUFBSUMsT0FBTyxJQUFLTixXQUFXLENBQUNRLEdBQVosS0FBb0JGLE9BQU8sQ0FBQ0UsR0FBNUMsRUFBa0QsT0FBTyxNQUFNWCxFQUFFLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxXQUFXLENBQUNTLEdBQXZCLENBQWY7QUFDckQsR0FMRCxDQUtFLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxLQUFoQjtBQUNBZCxJQUFBQSxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxNQUFBQSxPQUFPLEVBQUU7QUFBVixLQUFyQjtBQUNEO0FBQ0YsQ0FWSSIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vbGliL2F1dGgudHM/ZTMzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciwgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IHZlcmlmeSB9IGZyb20gXCJqc29ud2VidG9rZW5cIlxuXG5cblxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZWQgPSAoIGZuOiBOZXh0QXBpSGFuZGxlciApID0+IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWRIdHRwID0gdmVyaWZ5KHJlcS5jb29raWVzLmF1dGhIdHRwISwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IHZlcmlmeShyZXEuY29va2llcy5hdXRoISwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcblxuICAgICAgICBpZiAoZGVjb2RlZCAmJiAoZGVjb2RlZEh0dHAua2V5ID09PSBkZWNvZGVkLmtleSkpIHJldHVybiBhd2FpdCBmbihyZXEsIHJlcywgZGVjb2RlZEh0dHAuc3ViKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKVxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oe21lc3NhZ2U6ICdub3QgYXV0aGVudGljYXRlZCd9KVxuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJ2ZXJpZnkiLCJhdXRoZW50aWNhdGVkIiwiZm4iLCJyZXEiLCJyZXMiLCJkZWNvZGVkSHR0cCIsImNvb2tpZXMiLCJhdXRoSHR0cCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZGVjb2RlZCIsImF1dGgiLCJrZXkiLCJzdWIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./pages/api/tasker_app/tab/index.ts":
/*!*******************************************!*\
  !*** ./pages/api/tasker_app/tab/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/auth */ \"./lib/auth.ts\");\n // import { verify } from 'jsonwebtoken'\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authenticated)(async function (req, res, user_id) {\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n\n  console.log(user_id);\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n  const {\n    userId\n  } = req.query;\n\n  try {\n    const tabs = await prisma.tab.findMany({\n      where: {\n        user_id: user_id\n      },\n      include: {\n        Card: {\n          include: {\n            items: true\n          }\n        }\n      }\n    });\n    res.status(200);\n    console.log(tabs);\n    res.json({\n      tabs\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztDQUVBOztBQUNBO0FBSUEsaUVBQWVDLHdEQUFhLENBQUMsZ0JBQWdCQyxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkRDLE9BQTNELEVBQW9FO0FBQzdGLE1BQUdGLEdBQUcsQ0FBQ0csTUFBSixLQUFlLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQU9GLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDSDs7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLE9BQVo7QUFFQSxRQUFNTyxNQUFNLEdBQUcsSUFBSVgsd0RBQUosQ0FBaUI7QUFBRVUsSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLEdBQWpCLENBQWY7QUFDQSxRQUFNO0FBQUVFLElBQUFBO0FBQUYsTUFBYVYsR0FBRyxDQUFDVyxLQUF2Qjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXQyxRQUFYLENBQW9CO0FBQ25DQyxNQUFBQSxLQUFLLEVBQUU7QUFDSGIsUUFBQUEsT0FBTyxFQUFFQTtBQUROLE9BRDRCO0FBSW5DYyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFO0FBQUVELFVBQUFBLE9BQU8sRUFBRTtBQUFFRSxZQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFYO0FBREQ7QUFKMEIsS0FBcEIsQ0FBbkI7QUFRQWpCLElBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVg7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLElBQVo7QUFDQVgsSUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVM7QUFBRU8sTUFBQUE7QUFBRixLQUFUO0FBQ0gsR0FaRCxDQVlFLE9BQU1PLENBQU4sRUFBUztBQUNQbEIsSUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWDtBQUNBSCxJQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBUztBQUFFZSxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFUO0FBQ0gsR0FmRCxTQWVVO0FBQ04sVUFBTVgsTUFBTSxDQUFDWSxXQUFQLEVBQU47QUFDSDtBQUNKLENBMUIyQixDQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3Rhc2tlcl9hcHAvdGFiL2luZGV4LnRzP2VmMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIsIE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG4vLyBpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9hdXRoXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoZW50aWNhdGVkKGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSwgdXNlcl9pZCkge1xuICAgIGlmKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVzZXJfaWQpXG5cbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KVxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEucXVlcnlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWJzID0gYXdhaXQgcHJpc21hLnRhYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgQ2FyZDogeyBpbmNsdWRlOiB7IGl0ZW1zOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMClcbiAgICAgICAgY29uc29sZS5sb2codGFicylcbiAgICAgICAgcmVzLmpzb24oeyB0YWJzIH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7IGVycm9yOiBcIlVuYWJsZSB0byBmZXRjaCB0YWJzXCIgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICAgIH1cbn0pXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiYXV0aGVudGljYXRlZCIsInJlcSIsInJlcyIsInVzZXJfaWQiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwcmlzbWEiLCJ1c2VySWQiLCJxdWVyeSIsInRhYnMiLCJ0YWIiLCJmaW5kTWFueSIsIndoZXJlIiwiaW5jbHVkZSIsIkNhcmQiLCJpdGVtcyIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/index.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/index.ts"));
module.exports = __webpack_exports__;

})();