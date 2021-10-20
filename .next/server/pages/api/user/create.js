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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Wrong Method'\n    });\n  }\n\n  try {\n    const {\n      user: userData\n    } = req.body;\n    (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.hash)(userData.password, 10, async (err, hash) => {\n      const user = await prisma.user.create({\n        data: {\n          username: userData.username,\n          email: userData.email,\n          avatar: userData.avatar,\n          password: hash\n        }\n      });\n\n      if (user) {\n        const tab = await prisma.tab.create({\n          data: {\n            name: 'Untitled',\n            user_id: user.id\n          }\n        });\n      }\n\n      res.status(201);\n      res.json({\n        user: {\n          username: user.username,\n          id: user.id\n        }\n      });\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: `Unable to create user in the database e: ${e}`\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n} //   model User {\n//     id Int @id @default(autoincrement())\n//     username String\n//     email String\n//     avatar String\n//     createdAt DateTime @default(now())\n//   }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9jcmVhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQSw2QkFBZSwwQ0FBZ0JFLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUN0RSxRQUFNQyxNQUFNLEdBQUcsSUFBSUosd0RBQUosQ0FBaUI7QUFBRUssSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLEdBQWpCLENBQWY7O0FBRUEsTUFBSUgsR0FBRyxDQUFDSSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDdkIsV0FBT0gsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUVIOztBQUVELE1BQUk7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLElBQUksRUFBRUM7QUFBUixRQUFxQlQsR0FBRyxDQUFDVSxJQUEvQjtBQUVBWCxJQUFBQSw0Q0FBSSxDQUFDVSxRQUFRLENBQUNFLFFBQVYsRUFBb0IsRUFBcEIsRUFBd0IsT0FBT0MsR0FBUCxFQUFZYixJQUFaLEtBQXFCO0FBRTdDLFlBQU1TLElBQUksR0FBRyxNQUFNTixNQUFNLENBQUNNLElBQVAsQ0FBWUssTUFBWixDQUFtQjtBQUNsQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFVBQUFBLFFBQVEsRUFBRU4sUUFBUSxDQUFDTSxRQURqQjtBQUVGQyxVQUFBQSxLQUFLLEVBQUVQLFFBQVEsQ0FBQ08sS0FGZDtBQUdGQyxVQUFBQSxNQUFNLEVBQUVSLFFBQVEsQ0FBQ1EsTUFIZjtBQUlGTixVQUFBQSxRQUFRLEVBQUVaO0FBSlI7QUFENEIsT0FBbkIsQ0FBbkI7O0FBU0EsVUFBSVMsSUFBSixFQUFVO0FBQ04sY0FBTVUsR0FBRyxHQUFHLE1BQU1oQixNQUFNLENBQUNnQixHQUFQLENBQVdMLE1BQVgsQ0FBa0I7QUFDaENDLFVBQUFBLElBQUksRUFBRTtBQUNGSyxZQUFBQSxJQUFJLEVBQUUsVUFESjtBQUVGQyxZQUFBQSxPQUFPLEVBQUVaLElBQUksQ0FBQ2E7QUFGWjtBQUQwQixTQUFsQixDQUFsQjtBQU1IOztBQUVEcEIsTUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWDtBQUNBSixNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUztBQUFDRSxRQUFBQSxJQUFJLEVBQUU7QUFBQ08sVUFBQUEsUUFBUSxFQUFFUCxJQUFJLENBQUNPLFFBQWhCO0FBQTBCTSxVQUFBQSxFQUFFLEVBQUViLElBQUksQ0FBQ2E7QUFBbkM7QUFBUCxPQUFUO0FBQ0gsS0F0QkcsQ0FBSjtBQXVCSCxHQTFCRCxDQTBCRSxPQUFNQyxDQUFOLEVBQVM7QUFDUHJCLElBQUFBLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVg7QUFDQUosSUFBQUEsR0FBRyxDQUFDSyxJQUFKLENBQVM7QUFBRWlCLE1BQUFBLEtBQUssRUFBRyw0Q0FBMkNELENBQUU7QUFBdkQsS0FBVDtBQUNILEdBN0JELFNBNkJVO0FBQ04sVUFBTXBCLE1BQU0sQ0FBQ3NCLFdBQVAsRUFBTjtBQUNIO0FBQ0YsRUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3VzZXIvY3JlYXRlLnRzPzAyNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBoYXNoIH0gZnJvbSAnYmNyeXB0JztcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbJ3F1ZXJ5J10gfSlcblxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ1dyb25nIE1ldGhvZCcgfSlcblxuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHVzZXI6IHVzZXJEYXRhIH0gPSByZXEuYm9keVxuXG4gICAgICAgIGhhc2godXNlckRhdGEucGFzc3dvcmQsIDEwLCBhc3luYyAoZXJyLCBoYXNoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJEYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlckRhdGEuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlckRhdGEuYXZhdGFyLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogaGFzaCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IGF3YWl0IHByaXNtYS50YWIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1VudGl0bGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpXG4gICAgICAgICAgICByZXMuanNvbih7dXNlcjoge3VzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLCBpZDogdXNlci5pZH0gfSlcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IGBVbmFibGUgdG8gY3JlYXRlIHVzZXIgaW4gdGhlIGRhdGFiYXNlIGU6ICR7ZX1gIH0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG4gIH1cbiAgXG5cbi8vICAgbW9kZWwgVXNlciB7XG4vLyAgICAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpXG4vLyAgICAgdXNlcm5hbWUgU3RyaW5nXG4vLyAgICAgZW1haWwgU3RyaW5nXG4vLyAgICAgYXZhdGFyIFN0cmluZ1xuLy8gICAgIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSlcbi8vICAgfSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYXNoIiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VyIiwidXNlckRhdGEiLCJib2R5IiwicGFzc3dvcmQiLCJlcnIiLCJjcmVhdGUiLCJkYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsImF2YXRhciIsInRhYiIsIm5hbWUiLCJ1c2VyX2lkIiwiaWQiLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user/create.ts\n");

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