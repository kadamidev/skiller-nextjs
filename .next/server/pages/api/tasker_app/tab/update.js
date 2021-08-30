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
exports.id = "pages/api/tasker_app/tab/update";
exports.ids = ["pages/api/tasker_app/tab/update"];
exports.modules = {

/***/ "./pages/api/tasker_app/tab/update.ts":
/*!********************************************!*\
  !*** ./pages/api/tasker_app/tab/update.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      tab: tabData\n    } = req.body;\n    const tab = await prisma.tab.update({\n      where: {\n        id: tabData.id\n      },\n      data: {\n        name: tabData.name\n      }\n    });\n    res.status(201);\n    res.json({\n      tab\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to update tab name in the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvdXBkYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBR0EsNkJBQWUsMENBQWdCQyxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDdEUsUUFBTUMsTUFBTSxHQUFHLElBQUlILHdEQUFKLENBQWtCO0FBQUNJLElBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBTixHQUFsQixDQUFmOztBQUVBLE1BQUk7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUM7QUFBUCxRQUFtQkwsR0FBRyxDQUFDTSxJQUE3QjtBQUNBLFVBQU1GLEdBQUcsR0FBRyxNQUFNRixNQUFNLENBQUNFLEdBQVAsQ0FBV0csTUFBWCxDQUFrQjtBQUNoQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLEVBQUUsRUFBRUosT0FBTyxDQUFDSTtBQURULE9BRHlCO0FBSWhDQyxNQUFBQSxJQUFJLEVBQUU7QUFDRkMsUUFBQUEsSUFBSSxFQUFFTixPQUFPLENBQUNNO0FBRFo7QUFKMEIsS0FBbEIsQ0FBbEI7QUFRQVYsSUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWDtBQUNBWCxJQUFBQSxHQUFHLENBQUNZLElBQUosQ0FBUztBQUFDVCxNQUFBQTtBQUFELEtBQVQ7QUFDSCxHQVpELENBWUUsT0FBTVUsQ0FBTixFQUFTO0FBQ1BiLElBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVg7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxJQUFKLENBQVM7QUFBQ0UsTUFBQUEsS0FBSyxFQUFFO0FBQVIsS0FBVDtBQUNILEdBZkQsU0FlVTtBQUNOLFVBQU1iLE1BQU0sQ0FBQ2MsV0FBUCxFQUFOO0FBQ0g7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3Rhc2tlcl9hcHAvdGFiL3VwZGF0ZS50cz9mNmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgge2xvZzogW1wicXVlcnlcIl0gfSlcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdGFiOiB0YWJEYXRhIH0gPSByZXEuYm9keVxuICAgICAgICBjb25zdCB0YWIgPSBhd2FpdCBwcmlzbWEudGFiLnVwZGF0ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIGlkOiB0YWJEYXRhLmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0YWJEYXRhLm5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMSlcbiAgICAgICAgcmVzLmpzb24oe3RhYn0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwidW5hYmxlIHRvIHVwZGF0ZSB0YWIgbmFtZSBpbiB0aGUgZGF0YWJhc2VcIn0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwidGFiIiwidGFiRGF0YSIsImJvZHkiLCJ1cGRhdGUiLCJ3aGVyZSIsImlkIiwiZGF0YSIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/update.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/update.ts"));
module.exports = __webpack_exports__;

})();