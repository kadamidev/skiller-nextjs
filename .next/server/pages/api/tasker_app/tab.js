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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authenticated\": () => (/* binding */ authenticated)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authenticated = fn => async (req, res) => {\n  try {\n    const decodedHttp = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.authHttp, process.env.JWT_SECRET);\n    const decoded = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.auth, process.env.JWT_SECRET);\n    req.user_id = decodedHttp.sub;\n    if (decoded && decodedHttp.key === decoded.key) return await fn(req, res);\n  } catch (err) {\n    console.log(err.stack);\n    res.status(401).json({\n      message: 'not authenticated'\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUlPLE1BQU1DLGFBQWEsR0FBS0MsRUFBRixJQUEwQixPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUN4RyxNQUFJO0FBQ0EsVUFBTUMsV0FBVyxHQUFHTCxvREFBTSxDQUFDRyxHQUFHLENBQUNHLE9BQUosQ0FBWUMsUUFBYixFQUF3QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQXBDLENBQTFCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHWCxvREFBTSxDQUFDRyxHQUFHLENBQUNHLE9BQUosQ0FBWU0sSUFBYixFQUFvQkosT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQWhDLENBQXRCO0FBQ0FQLElBQUFBLEdBQUcsQ0FBQ1UsT0FBSixHQUFjUixXQUFXLENBQUNTLEdBQTFCO0FBRUEsUUFBSUgsT0FBTyxJQUFLTixXQUFXLENBQUNVLEdBQVosS0FBb0JKLE9BQU8sQ0FBQ0ksR0FBNUMsRUFBa0QsT0FBTyxNQUFNYixFQUFFLENBQUNDLEdBQUQsRUFBTUMsR0FBTixDQUFmO0FBQ3JELEdBTkQsQ0FNRSxPQUFPWSxHQUFQLEVBQVk7QUFDWkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csS0FBaEI7QUFDQWYsSUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLE1BQUFBLE9BQU8sRUFBRTtBQUFWLEtBQXJCO0FBQ0Q7QUFDRixDQVhJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9saWIvYXV0aC50cz9lMzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyLCBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSBcImpzb253ZWJ0b2tlblwiXG5cblxuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlZCA9ICggZm46IE5leHRBcGlIYW5kbGVyICkgPT4gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZEh0dHAgPSB2ZXJpZnkocmVxLmNvb2tpZXMuYXV0aEh0dHAhLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICAgICAgICBjb25zdCBkZWNvZGVkID0gdmVyaWZ5KHJlcS5jb29raWVzLmF1dGghLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICAgICAgICByZXEudXNlcl9pZCA9IGRlY29kZWRIdHRwLnN1YlxuXG4gICAgICAgIGlmIChkZWNvZGVkICYmIChkZWNvZGVkSHR0cC5rZXkgPT09IGRlY29kZWQua2V5KSkgcmV0dXJuIGF3YWl0IGZuKHJlcSwgcmVzKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKVxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oe21lc3NhZ2U6ICdub3QgYXV0aGVudGljYXRlZCd9KVxuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJ2ZXJpZnkiLCJhdXRoZW50aWNhdGVkIiwiZm4iLCJyZXEiLCJyZXMiLCJkZWNvZGVkSHR0cCIsImNvb2tpZXMiLCJhdXRoSHR0cCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZGVjb2RlZCIsImF1dGgiLCJ1c2VyX2lkIiwic3ViIiwia2V5IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./pages/api/tasker_app/tab/index.ts":
/*!*******************************************!*\
  !*** ./pages/api/tasker_app/tab/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/auth */ \"./lib/auth.ts\");\n // import { verify } from 'jsonwebtoken'\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authenticated)(async function (req, res) {\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n\n  console.log(req.user_id);\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const tabs = await prisma.tab.findMany({\n      where: {\n        user_id: req.user_id\n      },\n      include: {\n        Card: {\n          include: {\n            items: true\n          }\n        }\n      }\n    });\n    res.status(200);\n    console.log(tabs);\n    res.json({\n      tabs\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztDQUVBOztBQUNBO0FBSUEsaUVBQWVDLHdEQUFhLENBQUMsZ0JBQWdCQyxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDcEYsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbEIsRUFBeUI7QUFDckIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNIOztBQUNEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsR0FBRyxDQUFDUSxPQUFoQjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxJQUFJWCx3REFBSixDQUFpQjtBQUFFUyxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQVAsR0FBakIsQ0FBZjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUcsSUFBSSxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXQyxRQUFYLENBQW9CO0FBQ25DQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEwsUUFBQUEsT0FBTyxFQUFFUixHQUFHLENBQUNRO0FBRFYsT0FENEI7QUFJbkNNLE1BQUFBLE9BQU8sRUFBRTtBQUNMQyxRQUFBQSxJQUFJLEVBQUU7QUFBRUQsVUFBQUEsT0FBTyxFQUFFO0FBQUVFLFlBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVg7QUFERDtBQUowQixLQUFwQixDQUFuQjtBQVFBZixJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaO0FBQ0FULElBQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTO0FBQUVNLE1BQUFBO0FBQUYsS0FBVDtBQUNILEdBWkQsQ0FZRSxPQUFNTyxDQUFOLEVBQVM7QUFDUGhCLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVg7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBRWMsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBVDtBQUNILEdBZkQsU0FlVTtBQUNOLFVBQU1ULE1BQU0sQ0FBQ1UsV0FBUCxFQUFOO0FBQ0g7QUFDSixDQXpCMkIsQ0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL3RhYi9pbmRleC50cz9lZjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyLCBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuLy8gaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRlZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvYXV0aFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXV0aGVudGljYXRlZChhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBpZihyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXEudXNlcl9pZClcblxuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoeyBsb2c6IFtcInF1ZXJ5XCJdIH0pXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFicyA9IGF3YWl0IHByaXNtYS50YWIuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiByZXEudXNlcl9pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBDYXJkOiB7IGluY2x1ZGU6IHsgaXRlbXM6IHRydWUgfSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKVxuICAgICAgICBjb25zb2xlLmxvZyh0YWJzKVxuICAgICAgICByZXMuanNvbih7IHRhYnMgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiVW5hYmxlIHRvIGZldGNoIHRhYnNcIiB9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxufSlcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJhdXRoZW50aWNhdGVkIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwidXNlcl9pZCIsInByaXNtYSIsInRhYnMiLCJ0YWIiLCJmaW5kTWFueSIsIndoZXJlIiwiaW5jbHVkZSIsIkNhcmQiLCJpdGVtcyIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/index.ts\n");

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