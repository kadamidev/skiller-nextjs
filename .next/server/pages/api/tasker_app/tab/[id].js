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
exports.id = "pages/api/tasker_app/tab/[id]";
exports.ids = ["pages/api/tasker_app/tab/[id]"];
exports.modules = {

/***/ "./pages/api/tasker_app/tab/[id].ts":
/*!******************************************!*\
  !*** ./pages/api/tasker_app/tab/[id].ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n  const {\n    userId\n  } = req.query;\n\n  try {\n    const tabs = await prisma.tab.findMany({\n      where: {\n        user_id: userId\n      }\n    });\n    res.status(200);\n    res.json({\n      tabs\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"Unable to fetch tabs\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC90YWIvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDSDs7QUFFRCxRQUFNQyxNQUFNLEdBQUcsSUFBSVAsd0RBQUosQ0FBaUI7QUFBRVEsSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLEdBQWpCLENBQWY7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBYVIsR0FBRyxDQUFDUyxLQUF2Qjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXQyxRQUFYLENBQW9CO0FBQ25DQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsT0FBTyxFQUFFTjtBQUROO0FBRDRCLEtBQXBCLENBQW5CO0FBS0FQLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVg7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFBRU0sTUFBQUE7QUFBRixLQUFUO0FBQ0gsR0FSRCxDQVFFLE9BQU1LLENBQU4sRUFBUztBQUNQZCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYO0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTO0FBQUVZLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQVQ7QUFDSCxHQVhELFNBV1U7QUFDTixVQUFNVixNQUFNLENBQUNXLFdBQVAsRUFBTjtBQUNIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL3RhYi9baWRdLnRzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBpZihyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KVxuICAgIH1cblxuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoeyBsb2c6IFtcInF1ZXJ5XCJdIH0pXG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHJlcS5xdWVyeVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBhd2FpdCBwcmlzbWEudGFiLmZpbmRNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlcklkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKVxuICAgICAgICByZXMuanNvbih7IHRhYnMgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiVW5hYmxlIHRvIGZldGNoIHRhYnNcIiB9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInByaXNtYSIsImxvZyIsInVzZXJJZCIsInF1ZXJ5IiwidGFicyIsInRhYiIsImZpbmRNYW55Iiwid2hlcmUiLCJ1c2VyX2lkIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/tab/[id].ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/tab/[id].ts"));
module.exports = __webpack_exports__;

})();