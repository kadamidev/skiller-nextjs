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
exports.id = "pages/api/user/login";
exports.ids = ["pages/api/user/login"];
exports.modules = {

/***/ "./pages/api/user/login.ts":
/*!*********************************!*\
  !*** ./pages/api/user/login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Wrong Method'\n    });\n  }\n\n  try {\n    const {\n      user: userData\n    } = req.body;\n    const user = await prisma.user.findUnique({\n      where: {\n        username: userData.username\n      }\n    });\n    (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.compare)(userData.password, user.password, async (err, result) => {\n      if (!err && result) {\n        const claims = {\n          sub: user.id\n        };\n        const jwt = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign)(claims, process.env.JWT_SECRET, {\n          expiresIn: '30d'\n        });\n        const cookieSettings = {\n          httpOnly: true,\n          secure: false,\n          sameSite: 'strict',\n          path: '/'\n        }; // persist cookie past session if remember me\n\n        if (userData.remember) cookieSettings['maxAge'] = 3600 * 24 * 30; //30 days\n\n        res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_3___default().serialize('auth', jwt, cookieSettings)); // res.status(201).json({message: `Welcome back ${user.username}`})\n\n        res.status(201).json({\n          user: {\n            username: user.username,\n            id: user.id\n          }\n        });\n      } else {\n        res.json({\n          message: 'Incorrect username/pw combination'\n        });\n      }\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: `unable to login at the moment: ${e}`\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3BhZ2VzL2FwaS91c2VyL2xvZ2luLnRzPzFmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcbmltcG9ydCB7IHNpZ24gfSBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbJ3F1ZXJ5J10gfSlcblxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ1dyb25nIE1ldGhvZCcgfSlcblxuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHVzZXI6IHVzZXJEYXRhIH0gPSByZXEuYm9keVxuXG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlckRhdGEudXNlcm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb21wYXJlKHVzZXJEYXRhLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkLCBhc3luYyAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsYWltcyA9IHtzdWI6IHVzZXIuaWR9XG4gICAgICAgICAgICAgICAgY29uc3Qgand0ID0gc2lnbihjbGFpbXMsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHsgZXhwaXJlc0luOiAnMzBkJ30pXG4gICAgICAgICAgICAgICAgY29uc3QgY29va2llU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLCBcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnLydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcGVyc2lzdCBjb29raWUgcGFzdCBzZXNzaW9uIGlmIHJlbWVtYmVyIG1lXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJEYXRhLnJlbWVtYmVyKSBjb29raWVTZXR0aW5nc1snbWF4QWdlJ10gPSAoMzYwMCAqIDI0ICogMzApIC8vMzAgZGF5c1xuXG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGNvb2tpZS5zZXJpYWxpemUoJ2F1dGgnLCBqd3QsIGNvb2tpZVNldHRpbmdzKSlcbiAgICAgICAgICAgICAgICAvLyByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTogYFdlbGNvbWUgYmFjayAke3VzZXIudXNlcm5hbWV9YH0pXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3VzZXI6IHt1c2VybmFtZTogdXNlci51c2VybmFtZSwgaWQ6IHVzZXIuaWR9IH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe21lc3NhZ2U6ICdJbmNvcnJlY3QgdXNlcm5hbWUvcHcgY29tYmluYXRpb24nfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IGB1bmFibGUgdG8gbG9naW4gYXQgdGhlIG1vbWVudDogJHtlfWAgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfVxuICAiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY29tcGFyZSIsInNpZ24iLCJjb29raWUiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJsb2ciLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXIiLCJ1c2VyRGF0YSIsImJvZHkiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXJyIiwicmVzdWx0IiwiY2xhaW1zIiwic3ViIiwiaWQiLCJqd3QiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsImNvb2tpZVNldHRpbmdzIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsInBhdGgiLCJyZW1lbWJlciIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/login.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/user/login.ts"));
module.exports = __webpack_exports__;

})();