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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Wrong Method'\n    });\n  }\n\n  try {\n    const {\n      user: userData\n    } = req.body;\n    const user = await prisma.user.findUnique({\n      where: {\n        username: userData.username\n      }\n    });\n    (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.compare)(userData.password, user.password, async (err, result) => {\n      if (!err && result) {\n        const claims = {\n          sub: user.id\n        };\n        const jwt = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign)(claims, process.env.JWT_SECRET, {\n          expiresIn: '30d'\n        });\n        const cookieSettings = {\n          httpOnly: true,\n          secure: false,\n          sameSite: 'strict',\n          path: '/'\n        }; // persist cookie past session if remember me\n\n        if (userData.remember) cookieSettings['maxAge'] = 3600 * 24 * 30; //30 days\n\n        res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_3___default().serialize('auth', jwt, cookieSettings));\n        res.status(201).json({\n          message: `Welcome back ${user.username}`\n        });\n      } else {\n        res.json({\n          message: 'Incorrect username/pw combination'\n        });\n      }\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: `unable to login at the moment: ${e}`\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9sb2dpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsNkJBQWUsMENBQWdCSSxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDdEUsUUFBTUMsTUFBTSxHQUFHLElBQUlOLHdEQUFKLENBQWlCO0FBQUVPLElBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBUCxHQUFqQixDQUFmOztBQUVBLE1BQUlILEdBQUcsQ0FBQ0ksTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLFdBQU9ILEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFFSDs7QUFFRCxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxJQUFJLEVBQUVDO0FBQVIsUUFBcUJULEdBQUcsQ0FBQ1UsSUFBL0I7QUFHQSxVQUFNRixJQUFJLEdBQUcsTUFBTU4sTUFBTSxDQUFDTSxJQUFQLENBQVlHLFVBQVosQ0FBdUI7QUFDdENDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxRQUFRLEVBQUVKLFFBQVEsQ0FBQ0k7QUFEaEI7QUFEK0IsS0FBdkIsQ0FBbkI7QUFNQWhCLElBQUFBLCtDQUFPLENBQUNZLFFBQVEsQ0FBQ0ssUUFBVixFQUFvQk4sSUFBSSxDQUFDTSxRQUF6QixFQUFtQyxPQUFPQyxHQUFQLEVBQVlDLE1BQVosS0FBdUI7QUFDN0QsVUFBSSxDQUFDRCxHQUFELElBQVFDLE1BQVosRUFBb0I7QUFDaEIsY0FBTUMsTUFBTSxHQUFHO0FBQUNDLFVBQUFBLEdBQUcsRUFBRVYsSUFBSSxDQUFDVztBQUFYLFNBQWY7QUFDQSxjQUFNQyxHQUFHLEdBQUd0QixrREFBSSxDQUFDbUIsTUFBRCxFQUFTSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBckIsRUFBaUM7QUFBRUMsVUFBQUEsU0FBUyxFQUFFO0FBQWIsU0FBakMsQ0FBaEI7QUFDQSxjQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFVBQUFBLFFBQVEsRUFBRSxJQURTO0FBRW5CQyxVQUFBQSxNQUFNLE9BRmE7QUFHbkJDLFVBQUFBLFFBQVEsRUFBRSxRQUhTO0FBSW5CQyxVQUFBQSxJQUFJLEVBQUU7QUFKYSxTQUF2QixDQUhnQixDQVNoQjs7QUFDQSxZQUFJcEIsUUFBUSxDQUFDcUIsUUFBYixFQUF1QkwsY0FBYyxDQUFDLFFBQUQsQ0FBZCxHQUE0QixPQUFPLEVBQVAsR0FBWSxFQUF4QyxDQVZQLENBVW1EOztBQUVuRXhCLFFBQUFBLEdBQUcsQ0FBQzhCLFNBQUosQ0FBYyxZQUFkLEVBQTRCaEMsdURBQUEsQ0FBaUIsTUFBakIsRUFBeUJxQixHQUF6QixFQUE4QkssY0FBOUIsQ0FBNUI7QUFDQXhCLFFBQUFBLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLFVBQUFBLE9BQU8sRUFBRyxnQkFBZUMsSUFBSSxDQUFDSyxRQUFTO0FBQXhDLFNBQXJCO0FBQ0gsT0FkRCxNQWNPO0FBQ0haLFFBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUNDLFVBQUFBLE9BQU8sRUFBRTtBQUFWLFNBQVQ7QUFDSDtBQUNKLEtBbEJNLENBQVA7QUFtQkgsR0E3QkQsQ0E2QkUsT0FBTTBCLENBQU4sRUFBUztBQUNQaEMsSUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWDtBQUNBSixJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUztBQUFFNEIsTUFBQUEsS0FBSyxFQUFHLGtDQUFpQ0QsQ0FBRTtBQUE3QyxLQUFUO0FBQ0gsR0FoQ0QsU0FnQ1U7QUFDTixVQUFNL0IsTUFBTSxDQUFDaUMsV0FBUCxFQUFOO0FBQ0g7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3VzZXIvbG9naW4udHM/MWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHsgc2lnbiB9IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoeyBsb2c6IFsncXVlcnknXSB9KVxuXG4gICAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnV3JvbmcgTWV0aG9kJyB9KVxuXG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcjogdXNlckRhdGEgfSA9IHJlcS5ib2R5XG5cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyRGF0YS51c2VybmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbXBhcmUodXNlckRhdGEucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQsIGFzeW5jIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIgJiYgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhaW1zID0ge3N1YjogdXNlci5pZH1cbiAgICAgICAgICAgICAgICBjb25zdCBqd3QgPSBzaWduKGNsYWltcywgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46ICczMGQnfSlcbiAgICAgICAgICAgICAgICBjb25zdCBjb29raWVTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBwZXJzaXN0IGNvb2tpZSBwYXN0IHNlc3Npb24gaWYgcmVtZW1iZXIgbWVcbiAgICAgICAgICAgICAgICBpZiAodXNlckRhdGEucmVtZW1iZXIpIGNvb2tpZVNldHRpbmdzWydtYXhBZ2UnXSA9ICgzNjAwICogMjQgKiAzMCkgLy8zMCBkYXlzXG5cbiAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llLnNlcmlhbGl6ZSgnYXV0aCcsIGp3dCwgY29va2llU2V0dGluZ3MpKVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOiBgV2VsY29tZSBiYWNrICR7dXNlci51c2VybmFtZX1gfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe21lc3NhZ2U6ICdJbmNvcnJlY3QgdXNlcm5hbWUvcHcgY29tYmluYXRpb24nfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IGB1bmFibGUgdG8gbG9naW4gYXQgdGhlIG1vbWVudDogJHtlfWAgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfVxuICAiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY29tcGFyZSIsInNpZ24iLCJjb29raWUiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJsb2ciLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXIiLCJ1c2VyRGF0YSIsImJvZHkiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXJyIiwicmVzdWx0IiwiY2xhaW1zIiwic3ViIiwiaWQiLCJqd3QiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsImNvb2tpZVNldHRpbmdzIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsInBhdGgiLCJyZW1lbWJlciIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/login.ts\n");

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