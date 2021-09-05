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
exports.id = "pages/api/tasker_app/tab/create";
exports.ids = ["pages/api/tasker_app/tab/create"];
exports.modules = {

/***/ "./pages/api/tasker_app/tab/create.ts":
/*!********************************************!*\
  !*** ./pages/api/tasker_app/tab/create.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n  log: [\"query\"]\n});\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n\n  try {\n    const {\n      tab: tabData\n    } = req.body;\n    console.log(req.body);\n    const tab = await prisma.tab.create({\n      data: {\n        name: 'Untitled',\n        user_id: tabData.user_id\n      }\n    });\n    res.status(201);\n    res.json({\n      tab\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to save tab to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLENBQWtCO0FBQUNFLEVBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBTixDQUFsQixDQUFmO0FBR0EsNkJBQWUsMENBQWdCQyxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDdEUsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBMEI7QUFDdEIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNIOztBQUVELE1BQUk7QUFDQSxVQUFNO0FBQUNDLE1BQUFBLEdBQUcsRUFBRUM7QUFBTixRQUFpQlAsR0FBRyxDQUFDUSxJQUEzQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNWLEdBQVIsQ0FBWUMsR0FBRyxDQUFDUSxJQUFoQjtBQUNBLFVBQU1GLEdBQUcsR0FBRyxNQUFNUixNQUFNLENBQUNRLEdBQVAsQ0FBV0ksTUFBWCxDQUFrQjtBQUNoQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLElBQUksRUFBRSxVQURKO0FBRUZDLFFBQUFBLE9BQU8sRUFBRU4sT0FBTyxDQUFDTTtBQUZmO0FBRDBCLEtBQWxCLENBQWxCO0FBT0FaLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVg7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBQ0UsTUFBQUE7QUFBRCxLQUFUO0FBQ0gsR0FaRCxDQVlFLE9BQU1RLENBQU4sRUFBUztBQUNQYixJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYO0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTO0FBQUNXLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQVQ7QUFDSCxHQWZELFNBZVU7QUFDTixVQUFNakIsTUFBTSxDQUFDa0IsV0FBUCxFQUFOO0FBQ0g7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3Rhc2tlcl9hcHAvdGFiL2NyZWF0ZS50cz9lMjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoIHtsb2c6IFtcInF1ZXJ5XCJdIH0pXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgaWYocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge3RhYjogdGFiRGF0YX0gPSByZXEuYm9keVxuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgICAgICAgY29uc3QgdGFiID0gYXdhaXQgcHJpc21hLnRhYi5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdVbnRpdGxlZCcsXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGFiRGF0YS51c2VyX2lkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKVxuICAgICAgICByZXMuanNvbih7dGFifSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogXCJ1bmFibGUgdG8gc2F2ZSB0YWIgdG8gdGhlIGRhdGFiYXNlXCJ9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImxvZyIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidGFiIiwidGFiRGF0YSIsImJvZHkiLCJjb25zb2xlIiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJ1c2VyX2lkIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/create.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/create.ts"));
module.exports = __webpack_exports__;

})();