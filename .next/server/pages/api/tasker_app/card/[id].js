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
exports.id = "pages/api/tasker_app/card/[id]";
exports.ids = ["pages/api/tasker_app/card/[id]"];
exports.modules = {

/***/ "./pages/api/tasker_app/card/[id].ts":
/*!*******************************************!*\
  !*** ./pages/api/tasker_app/card/[id].ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query', 'info']\n  });\n  const userId = req.query;\n\n  try {\n    const cards = await prisma.tab.findMany({\n      where: {\n        user_id: userId\n      }\n    });\n    res.status(200);\n    res.json({\n      cards\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL1tpZF0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFHQSw2QkFBZSwwQ0FBZ0JDLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUN0RSxNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFsQixFQUF5QjtBQUNyQixXQUFPRCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0g7O0FBRUQsUUFBTUMsTUFBTSxHQUFHLElBQUlQLHdEQUFKLENBQWlCO0FBQUVRLElBQUFBLEdBQUcsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWO0FBQVAsR0FBakIsQ0FBZjtBQUNBLFFBQU1DLE1BQU0sR0FBR1IsR0FBRyxDQUFDUyxLQUFuQjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXQyxRQUFYLENBQW9CO0FBQ3BDQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsT0FBTyxFQUFFTjtBQUROO0FBRDZCLEtBQXBCLENBQXBCO0FBS0FQLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVg7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBRU0sTUFBQUE7QUFBRixLQUFUO0FBQ0gsR0FSRCxDQVFFLE9BQU1LLENBQU4sRUFBUztBQUNQZCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYO0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTO0FBQUVZLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQVQ7QUFDSCxHQVhELFNBV1U7QUFDTixVQUFNVixNQUFNLENBQUNXLFdBQVAsRUFBTjtBQUNIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL2NhcmQvW2lkXS50cz9iNDA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgaWYocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbJ3F1ZXJ5JywgJ2luZm8nXSB9KVxuICAgIGNvbnN0IHVzZXJJZCA9IHJlcS5xdWVyeVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhcmRzID0gYXdhaXQgcHJpc21hLnRhYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMClcbiAgICAgICAgcmVzLmpzb24oeyBjYXJkcyB9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgcmVzLmpzb24oeyBlcnJvcjogXCJVbmFibGUgdG8gZmV0Y2ggdGFic1wiIH0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicHJpc21hIiwibG9nIiwidXNlcklkIiwicXVlcnkiLCJjYXJkcyIsInRhYiIsImZpbmRNYW55Iiwid2hlcmUiLCJ1c2VyX2lkIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/card/[id].ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/card/[id].ts"));
module.exports = __webpack_exports__;

})();