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
exports.id = "pages/api/user/create";
exports.ids = ["pages/api/user/create"];
exports.modules = {

/***/ "./pages/api/user/create.ts":
/*!**********************************!*\
  !*** ./pages/api/user/create.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Wrong Method'\n    });\n  }\n\n  try {\n    const {\n      user: userData\n    } = req.body;\n    (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.hash)(userData.password, 10, async (err, hash) => {\n      const user = await prisma.user.create({\n        data: {\n          username: userData.username,\n          email: userData.email,\n          avatar: userData.avatar,\n          password: hash\n        }\n      });\n\n      if (user) {\n        const tab = await prisma.tab.create({\n          data: {\n            name: 'Untitled',\n            user_id: user.id\n          }\n        });\n      }\n\n      res.status(201);\n      res.json({\n        user\n      });\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: `Unable to create user in the database e: ${e}`\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n} //   model User {\n//     id Int @id @default(autoincrement())\n//     username String\n//     email String\n//     avatar String\n//     createdAt DateTime @default(now())\n//   }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9jcmVhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQSw2QkFBZSwwQ0FBZ0JFLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUN0RSxRQUFNQyxNQUFNLEdBQUcsSUFBSUosd0RBQUosQ0FBaUI7QUFBRUssSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLEdBQWpCLENBQWY7O0FBRUEsTUFBSUgsR0FBRyxDQUFDSSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDdkIsV0FBT0gsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUVIOztBQUVELE1BQUk7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLElBQUksRUFBRUM7QUFBUixRQUFxQlQsR0FBRyxDQUFDVSxJQUEvQjtBQUVBWCxJQUFBQSw0Q0FBSSxDQUFDVSxRQUFRLENBQUNFLFFBQVYsRUFBb0IsRUFBcEIsRUFBd0IsT0FBT0MsR0FBUCxFQUFZYixJQUFaLEtBQXFCO0FBRTdDLFlBQU1TLElBQUksR0FBRyxNQUFNTixNQUFNLENBQUNNLElBQVAsQ0FBWUssTUFBWixDQUFtQjtBQUNsQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFVBQUFBLFFBQVEsRUFBRU4sUUFBUSxDQUFDTSxRQURqQjtBQUVGQyxVQUFBQSxLQUFLLEVBQUVQLFFBQVEsQ0FBQ08sS0FGZDtBQUdGQyxVQUFBQSxNQUFNLEVBQUVSLFFBQVEsQ0FBQ1EsTUFIZjtBQUlGTixVQUFBQSxRQUFRLEVBQUVaO0FBSlI7QUFENEIsT0FBbkIsQ0FBbkI7O0FBU0EsVUFBSVMsSUFBSixFQUFVO0FBQ04sY0FBTVUsR0FBRyxHQUFHLE1BQU1oQixNQUFNLENBQUNnQixHQUFQLENBQVdMLE1BQVgsQ0FBa0I7QUFDaENDLFVBQUFBLElBQUksRUFBRTtBQUNGSyxZQUFBQSxJQUFJLEVBQUUsVUFESjtBQUVGQyxZQUFBQSxPQUFPLEVBQUVaLElBQUksQ0FBQ2E7QUFGWjtBQUQwQixTQUFsQixDQUFsQjtBQU1IOztBQUVEcEIsTUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWDtBQUNBSixNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUztBQUFDRSxRQUFBQTtBQUFELE9BQVQ7QUFDSCxLQXRCRyxDQUFKO0FBdUJILEdBMUJELENBMEJFLE9BQU1jLENBQU4sRUFBUztBQUNQckIsSUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWDtBQUNBSixJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUztBQUFFaUIsTUFBQUEsS0FBSyxFQUFHLDRDQUEyQ0QsQ0FBRTtBQUF2RCxLQUFUO0FBQ0gsR0E3QkQsU0E2QlU7QUFDTixVQUFNcEIsTUFBTSxDQUFDc0IsV0FBUCxFQUFOO0FBQ0g7QUFDRixFQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdXNlci9jcmVhdGUudHM/MDI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGhhc2ggfSBmcm9tICdiY3J5cHQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoeyBsb2c6IFsncXVlcnknXSB9KVxuXG4gICAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnV3JvbmcgTWV0aG9kJyB9KVxuXG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcjogdXNlckRhdGEgfSA9IHJlcS5ib2R5XG5cbiAgICAgICAgaGFzaCh1c2VyRGF0YS5wYXNzd29yZCwgMTAsIGFzeW5jIChlcnIsIGhhc2gpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlckRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyRGF0YS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyRGF0YS5hdmF0YXIsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFiID0gYXdhaXQgcHJpc21hLnRhYi5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVW50aXRsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSlcbiAgICAgICAgICAgIHJlcy5qc29uKHt1c2VyfSlcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IGBVbmFibGUgdG8gY3JlYXRlIHVzZXIgaW4gdGhlIGRhdGFiYXNlIGU6ICR7ZX1gIH0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG4gIH1cbiAgXG5cbi8vICAgbW9kZWwgVXNlciB7XG4vLyAgICAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpXG4vLyAgICAgdXNlcm5hbWUgU3RyaW5nXG4vLyAgICAgZW1haWwgU3RyaW5nXG4vLyAgICAgYXZhdGFyIFN0cmluZ1xuLy8gICAgIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSlcbi8vICAgfSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYXNoIiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VyIiwidXNlckRhdGEiLCJib2R5IiwicGFzc3dvcmQiLCJlcnIiLCJjcmVhdGUiLCJkYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsImF2YXRhciIsInRhYiIsIm5hbWUiLCJ1c2VyX2lkIiwiaWQiLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user/create.ts\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/user/create.ts"));
module.exports = __webpack_exports__;

})();