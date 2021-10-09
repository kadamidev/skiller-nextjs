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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Wrong Method'\n    });\n  }\n\n  try {\n    const {\n      user: userData\n    } = req.body;\n    const user = await prisma.user.findUnique({\n      where: {\n        username: userData.username\n      }\n    });\n    (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.compare)(userData.password, user.password, async (err, result) => {\n      if (!err && result) {\n        const key = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(); //issue 2 with matching keys so can optimistically logout without server issuing logout clearing http cookie\n\n        const claimsHttp = {\n          sub: user.id,\n          type: 'http',\n          key: key\n        };\n        const claims = {\n          sub: user.id,\n          type: 'reg',\n          key: key\n        };\n        const jwtHttp = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign)(claimsHttp, process.env.JWT_SECRET, {\n          expiresIn: '30d'\n        });\n        const jwt = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign)(claims, process.env.JWT_SECRET, {\n          expiresIn: '30d'\n        });\n        const cookieSettings = {\n          httpOnly: false,\n          secure: false,\n          sameSite: 'strict',\n          path: '/'\n        };\n        const cookieSettingsHttp = {\n          httpOnly: true,\n          secure: false,\n          sameSite: 'strict',\n          path: '/'\n        }; // persist cookie past session if remember me\n\n        if (userData.remember) cookieSettings['maxAge'] = 3600 * 24 * 30; //30 days\n\n        if (userData.remember) cookieSettingsHttp['maxAge'] = 3600 * 24 * 30; //30 days\n\n        res.setHeader('Set-Cookie', [cookie__WEBPACK_IMPORTED_MODULE_3___default().serialize('authHttp', jwtHttp, cookieSettingsHttp), cookie__WEBPACK_IMPORTED_MODULE_3___default().serialize('auth', jwt, cookieSettings)]); // res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, cookieSettings))\n        // res.status(201).json({message: `Welcome back ${user.username}`})\n\n        res.status(201).json({\n          user: {\n            username: user.username,\n            id: user.id\n          }\n        });\n      } else {\n        res.json({\n          message: 'Incorrect username/pw combination'\n        });\n      }\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: `unable to login at the moment: ${e}`\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCLENBQUN2Qyx1REFBQSxDQUFpQixVQUFqQixFQUE2QjBCLE9BQTdCLEVBQXNDVyxrQkFBdEMsQ0FBRCxFQUNDckMsdURBQUEsQ0FBaUIsTUFBakIsRUFBeUIrQixHQUF6QixFQUE4QkMsY0FBOUIsQ0FERCxDQUE1QixFQXhCZ0IsQ0EwQmhCO0FBRUE7O0FBQ0E1QixRQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDRSxVQUFBQSxJQUFJLEVBQUU7QUFBQ0ssWUFBQUEsUUFBUSxFQUFFTCxJQUFJLENBQUNLLFFBQWhCO0FBQTBCTyxZQUFBQSxFQUFFLEVBQUVaLElBQUksQ0FBQ1k7QUFBbkM7QUFBUCxTQUFyQjtBQUVILE9BL0JELE1BK0JPO0FBQ0huQixRQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUztBQUFDQyxVQUFBQSxPQUFPLEVBQUU7QUFBVixTQUFUO0FBQ0g7QUFDSixLQW5DTSxDQUFQO0FBb0NILEdBOUNELENBOENFLE9BQU0rQixDQUFOLEVBQVM7QUFDUHJDLElBQUFBLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVg7QUFDQUosSUFBQUEsR0FBRyxDQUFDSyxJQUFKLENBQVM7QUFBRWlDLE1BQUFBLEtBQUssRUFBRyxrQ0FBaUNELENBQUU7QUFBN0MsS0FBVDtBQUNILEdBakRELFNBaURVO0FBQ04sVUFBTXBDLE1BQU0sQ0FBQ3NDLFdBQVAsRUFBTjtBQUNIO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS91c2VyL2xvZ2luLnRzPzFmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcbmltcG9ydCB7IHNpZ24gfSBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcbmltcG9ydCAge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbJ3F1ZXJ5J10gfSlcblxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ1dyb25nIE1ldGhvZCcgfSlcblxuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHVzZXI6IHVzZXJEYXRhIH0gPSByZXEuYm9keVxuXG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlckRhdGEudXNlcm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb21wYXJlKHVzZXJEYXRhLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkLCBhc3luYyAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHV1aWR2NCgpIC8vaXNzdWUgMiB3aXRoIG1hdGNoaW5nIGtleXMgc28gY2FuIG9wdGltaXN0aWNhbGx5IGxvZ291dCB3aXRob3V0IHNlcnZlciBpc3N1aW5nIGxvZ291dCBjbGVhcmluZyBodHRwIGNvb2tpZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYWltc0h0dHAgPSB7c3ViOiB1c2VyLmlkLCB0eXBlOiAnaHR0cCcsIGtleToga2V5fVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYWltcyA9IHtzdWI6IHVzZXIuaWQsIHR5cGU6ICdyZWcnLCBrZXk6IGtleX1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGp3dEh0dHAgPSBzaWduKGNsYWltc0h0dHAsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHsgZXhwaXJlc0luOiAnMzBkJ30pXG4gICAgICAgICAgICAgICAgY29uc3Qgand0ID0gc2lnbihjbGFpbXMsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHsgZXhwaXJlc0luOiAnMzBkJ30pXG4gICAgICAgICAgICAgICAgY29uc3QgY29va2llU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGh0dHBPbmx5OiBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXG4gICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb2tpZVNldHRpbmdzSHR0cCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBwZXJzaXN0IGNvb2tpZSBwYXN0IHNlc3Npb24gaWYgcmVtZW1iZXIgbWVcbiAgICAgICAgICAgICAgICBpZiAodXNlckRhdGEucmVtZW1iZXIpIGNvb2tpZVNldHRpbmdzWydtYXhBZ2UnXSA9ICgzNjAwICogMjQgKiAzMCkgLy8zMCBkYXlzXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJEYXRhLnJlbWVtYmVyKSBjb29raWVTZXR0aW5nc0h0dHBbJ21heEFnZSddID0gKDM2MDAgKiAyNCAqIDMwKSAvLzMwIGRheXNcblxuXG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIFtjb29raWUuc2VyaWFsaXplKCdhdXRoSHR0cCcsIGp3dEh0dHAsIGNvb2tpZVNldHRpbmdzSHR0cCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWUuc2VyaWFsaXplKCdhdXRoJywgand0LCBjb29raWVTZXR0aW5ncyldKVxuICAgICAgICAgICAgICAgIC8vIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUuc2VyaWFsaXplKCdhdXRoJywgand0LCBjb29raWVTZXR0aW5ncykpXG5cbiAgICAgICAgICAgICAgICAvLyByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTogYFdlbGNvbWUgYmFjayAke3VzZXIudXNlcm5hbWV9YH0pXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3VzZXI6IHt1c2VybmFtZTogdXNlci51c2VybmFtZSwgaWQ6IHVzZXIuaWR9IH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe21lc3NhZ2U6ICdJbmNvcnJlY3QgdXNlcm5hbWUvcHcgY29tYmluYXRpb24nfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IGB1bmFibGUgdG8gbG9naW4gYXQgdGhlIG1vbWVudDogJHtlfWAgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfVxuICAiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY29tcGFyZSIsInNpZ24iLCJjb29raWUiLCJ2NCIsInV1aWR2NCIsInJlcSIsInJlcyIsInByaXNtYSIsImxvZyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidXNlciIsInVzZXJEYXRhIiwiYm9keSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlcnIiLCJyZXN1bHQiLCJrZXkiLCJjbGFpbXNIdHRwIiwic3ViIiwiaWQiLCJ0eXBlIiwiY2xhaW1zIiwiand0SHR0cCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwiand0IiwiY29va2llU2V0dGluZ3MiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwicGF0aCIsImNvb2tpZVNldHRpbmdzSHR0cCIsInJlbWVtYmVyIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/user/login.ts\n");

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

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