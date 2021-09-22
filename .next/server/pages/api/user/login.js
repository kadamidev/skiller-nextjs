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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Wrong Method'\n    });\n  }\n\n  try {\n    const {\n      user: userData\n    } = req.body;\n    const user = await prisma.user.findUnique({\n      where: {\n        username: userData.username\n      }\n    });\n    (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.compare)(userData.password, user.password, async (err, result) => {\n      if (!err && result) {\n        const claims = {\n          sub: user.id\n        };\n        const jwt = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign)(claims, process.env.JWT_SECRET, {\n          expiresIn: '30d'\n        });\n        res.status(201);\n        res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_3___default().serialize('auth', jwt, {\n          httpOnly: true,\n          secure: false,\n          sameSite: 'strict',\n          maxAge: 3600 * 24 * 30,\n          //30 days\n          path: '/'\n        }));\n        res.json({\n          message: `Welcome back ${user.username}`\n        });\n      } else {\n        res.json({\n          message: 'Incorrect username/pw combination'\n        });\n      }\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: `unable to login at the moment: ${e}`\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9sb2dpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsNkJBQWUsMENBQWdCSSxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDdEUsUUFBTUMsTUFBTSxHQUFHLElBQUlOLHdEQUFKLENBQWlCO0FBQUVPLElBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBUCxHQUFqQixDQUFmOztBQUVBLE1BQUlILEdBQUcsQ0FBQ0ksTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLFdBQU9ILEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFFSDs7QUFFRCxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxJQUFJLEVBQUVDO0FBQVIsUUFBcUJULEdBQUcsQ0FBQ1UsSUFBL0I7QUFHQSxVQUFNRixJQUFJLEdBQUcsTUFBTU4sTUFBTSxDQUFDTSxJQUFQLENBQVlHLFVBQVosQ0FBdUI7QUFDdENDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxRQUFRLEVBQUVKLFFBQVEsQ0FBQ0k7QUFEaEI7QUFEK0IsS0FBdkIsQ0FBbkI7QUFNQWhCLElBQUFBLCtDQUFPLENBQUNZLFFBQVEsQ0FBQ0ssUUFBVixFQUFvQk4sSUFBSSxDQUFDTSxRQUF6QixFQUFtQyxPQUFPQyxHQUFQLEVBQVlDLE1BQVosS0FBdUI7QUFDN0QsVUFBSSxDQUFDRCxHQUFELElBQVFDLE1BQVosRUFBb0I7QUFDaEIsY0FBTUMsTUFBTSxHQUFHO0FBQUNDLFVBQUFBLEdBQUcsRUFBRVYsSUFBSSxDQUFDVztBQUFYLFNBQWY7QUFDQSxjQUFNQyxHQUFHLEdBQUd0QixrREFBSSxDQUFDbUIsTUFBRCxFQUFTSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBckIsRUFBaUM7QUFBRUMsVUFBQUEsU0FBUyxFQUFFO0FBQWIsU0FBakMsQ0FBaEI7QUFDQXZCLFFBQUFBLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVg7QUFDQUosUUFBQUEsR0FBRyxDQUFDd0IsU0FBSixDQUFjLFlBQWQsRUFBNEIxQix1REFBQSxDQUFpQixNQUFqQixFQUF5QnFCLEdBQXpCLEVBQTZCO0FBQ3JETyxVQUFBQSxRQUFRLEVBQUUsSUFEMkM7QUFFckRDLFVBQUFBLE1BQU0sT0FGK0M7QUFHckRDLFVBQUFBLFFBQVEsRUFBRSxRQUgyQztBQUlyREMsVUFBQUEsTUFBTSxFQUFHLE9BQU8sRUFBUCxHQUFZLEVBSmdDO0FBSTNCO0FBQzFCQyxVQUFBQSxJQUFJLEVBQUU7QUFMK0MsU0FBN0IsQ0FBNUI7QUFPQTlCLFFBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUNDLFVBQUFBLE9BQU8sRUFBRyxnQkFBZUMsSUFBSSxDQUFDSyxRQUFTO0FBQXhDLFNBQVQ7QUFDSCxPQVpELE1BWU87QUFDSFosUUFBQUEsR0FBRyxDQUFDSyxJQUFKLENBQVM7QUFBQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQVYsU0FBVDtBQUNIO0FBR0osS0FsQk0sQ0FBUDtBQW1CSCxHQTdCRCxDQTZCRSxPQUFNeUIsQ0FBTixFQUFTO0FBQ1AvQixJQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUUyQixNQUFBQSxLQUFLLEVBQUcsa0NBQWlDRCxDQUFFO0FBQTdDLEtBQVQ7QUFDSCxHQWhDRCxTQWdDVTtBQUNOLFVBQU05QixNQUFNLENBQUNnQyxXQUFQLEVBQU47QUFDSDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi50cz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyBzaWduIH0gZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7IGxvZzogWydxdWVyeSddIH0pXG5cbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdXcm9uZyBNZXRob2QnIH0pXG5cbiAgICB9XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyB1c2VyOiB1c2VyRGF0YSB9ID0gcmVxLmJvZHlcblxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJEYXRhLnVzZXJuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29tcGFyZSh1c2VyRGF0YS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCwgYXN5bmMgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFpbXMgPSB7c3ViOiB1c2VyLmlkfVxuICAgICAgICAgICAgICAgIGNvbnN0IGp3dCA9IHNpZ24oY2xhaW1zLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCB7IGV4cGlyZXNJbjogJzMwZCd9KVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKVxuICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUuc2VyaWFsaXplKCdhdXRoJywgand0LHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgICAgICAgICAgICAgICAgIG1heEFnZTogKDM2MDAgKiAyNCAqIDMwKSwgLy8zMCBkYXlzXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHttZXNzYWdlOiBgV2VsY29tZSBiYWNrICR7dXNlci51c2VybmFtZX1gfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe21lc3NhZ2U6ICdJbmNvcnJlY3QgdXNlcm5hbWUvcHcgY29tYmluYXRpb24nfSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7IGVycm9yOiBgdW5hYmxlIHRvIGxvZ2luIGF0IHRoZSBtb21lbnQ6ICR7ZX1gIH0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG4gIH1cbiAgIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNvbXBhcmUiLCJzaWduIiwiY29va2llIiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VyIiwidXNlckRhdGEiLCJib2R5IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVyciIsInJlc3VsdCIsImNsYWltcyIsInN1YiIsImlkIiwiand0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwibWF4QWdlIiwicGF0aCIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/login.ts\n");

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