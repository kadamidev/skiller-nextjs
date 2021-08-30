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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  try {\n    const {\n      user: userData\n    } = req.body;\n    const user = await prisma.user.create({\n      data: {\n        username: userData.username,\n        email: userData.email,\n        avatar: userData.avatar\n      }\n    });\n    res.status(201);\n    res.json({\n      user\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: 'Unable to create user in the database'\n    });\n  } finally {\n    await prisma.$disconnect;\n  }\n} //   model User {\n//     id Int @id @default(autoincrement())\n//     username String\n//     email String\n//     avatar String\n//     createdAt DateTime @default(now())\n//   }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9jcmVhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUVBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFpQjtBQUFFSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQVAsR0FBakIsQ0FBZjs7QUFFQSxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxJQUFJLEVBQUVDO0FBQVIsUUFBcUJMLEdBQUcsQ0FBQ00sSUFBL0I7QUFDQSxVQUFNRixJQUFJLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVlHLE1BQVosQ0FBbUI7QUFDbENDLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxRQUFRLEVBQUVKLFFBQVEsQ0FBQ0ksUUFEakI7QUFFRkMsUUFBQUEsS0FBSyxFQUFFTCxRQUFRLENBQUNLLEtBRmQ7QUFHRkMsUUFBQUEsTUFBTSxFQUFFTixRQUFRLENBQUNNO0FBSGY7QUFENEIsS0FBbkIsQ0FBbkI7QUFPQVYsSUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWDtBQUNBWCxJQUFBQSxHQUFHLENBQUNZLElBQUosQ0FBUztBQUFDVCxNQUFBQTtBQUFELEtBQVQ7QUFDSCxHQVhELENBV0UsT0FBTVUsQ0FBTixFQUFTO0FBQ1BiLElBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVg7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxJQUFKLENBQVM7QUFBRUUsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBVDtBQUNILEdBZEQsU0FjVTtBQUNOLFVBQU1iLE1BQU0sQ0FBQ2MsV0FBYjtBQUNIO0FBQ0YsRUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3VzZXIvY3JlYXRlLnRzPzAyNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoeyBsb2c6IFsncXVlcnknXSB9KVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyB1c2VyOiB1c2VyRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJEYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyRGF0YS5lbWFpbCxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXJEYXRhLmF2YXRhcixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpXG4gICAgICAgIHJlcy5qc29uKHt1c2VyfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6ICdVbmFibGUgdG8gY3JlYXRlIHVzZXIgaW4gdGhlIGRhdGFiYXNlJyB9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdFxuICAgIH1cbiAgfVxuICBcblxuLy8gICBtb2RlbCBVc2VyIHtcbi8vICAgICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSlcbi8vICAgICB1c2VybmFtZSBTdHJpbmdcbi8vICAgICBlbWFpbCBTdHJpbmdcbi8vICAgICBhdmF0YXIgU3RyaW5nXG4vLyAgICAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKVxuLy8gICB9Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsInByaXNtYSIsImxvZyIsInVzZXIiLCJ1c2VyRGF0YSIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsImF2YXRhciIsInN0YXR1cyIsImpzb24iLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user/create.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

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