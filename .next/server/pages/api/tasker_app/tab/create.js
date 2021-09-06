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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n  log: [\"query\"]\n});\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n\n  try {\n    const {\n      tab: tabData\n    } = req.body;\n    const tab = await prisma.tab.create({\n      data: {\n        name: 'Untitled',\n        user_id: tabData.user_id\n      }\n    });\n    res.status(201);\n    res.json({\n      dbid: tab.id\n    }); // res.json()\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to save tab to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLENBQWtCO0FBQUNFLEVBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQ7QUFBTixDQUFsQixDQUFmO0FBR0EsNkJBQWUsMENBQWdCQyxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDdEUsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBMEI7QUFDdEIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNIOztBQUVELE1BQUk7QUFDQSxVQUFNO0FBQUNDLE1BQUFBLEdBQUcsRUFBRUM7QUFBTixRQUFpQlAsR0FBRyxDQUFDUSxJQUEzQjtBQUNBLFVBQU1GLEdBQUcsR0FBRyxNQUFNUixNQUFNLENBQUNRLEdBQVAsQ0FBV0csTUFBWCxDQUFrQjtBQUNoQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLElBQUksRUFBRSxVQURKO0FBRUZDLFFBQUFBLE9BQU8sRUFBRUwsT0FBTyxDQUFDSztBQUZmO0FBRDBCLEtBQWxCLENBQWxCO0FBT0FYLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVg7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBQ1MsTUFBQUEsSUFBSSxFQUFFUCxHQUFHLENBQUNRO0FBQVgsS0FBVCxFQVZBLENBV0E7QUFDSCxHQVpELENBWUUsT0FBTUMsQ0FBTixFQUFTO0FBQ1BkLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVg7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBQ1ksTUFBQUEsS0FBSyxFQUFFO0FBQVIsS0FBVDtBQUNILEdBZkQsU0FlVTtBQUNOLFVBQU1sQixNQUFNLENBQUNtQixXQUFQLEVBQU47QUFDSDtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvY3JlYXRlLnRzP2UyNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgge2xvZzogW1wicXVlcnlcIl0gfSlcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBpZihyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7dGFiOiB0YWJEYXRhfSA9IHJlcS5ib2R5XG4gICAgICAgIGNvbnN0IHRhYiA9IGF3YWl0IHByaXNtYS50YWIuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnVW50aXRsZWQnLFxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRhYkRhdGEudXNlcl9pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXMuc3RhdHVzKDIwMSlcbiAgICAgICAgcmVzLmpzb24oe2RiaWQ6IHRhYi5pZH0pXG4gICAgICAgIC8vIHJlcy5qc29uKClcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogXCJ1bmFibGUgdG8gc2F2ZSB0YWIgdG8gdGhlIGRhdGFiYXNlXCJ9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImxvZyIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidGFiIiwidGFiRGF0YSIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwibmFtZSIsInVzZXJfaWQiLCJkYmlkIiwiaWQiLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/create.ts\n");

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