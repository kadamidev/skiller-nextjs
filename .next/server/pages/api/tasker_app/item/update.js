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
exports.id = "pages/api/tasker_app/item/update";
exports.ids = ["pages/api/tasker_app/item/update"];
exports.modules = {

/***/ "./pages/api/tasker_app/item/update.ts":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/item/update.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res, user_id) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      item: itemData\n    } = req.body;\n    const card = await prisma.cardItem.update({\n      where: {\n        authItem: {\n          id: itemData.id,\n          user_id: user_id\n        }\n      },\n      data: {\n        text: itemData.text,\n        checked: itemData.checked\n      }\n    });\n    res.status(201);\n    res.json({\n      card\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to update card in the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9pdGVtL3VwZGF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUlBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEQyxPQUEzRCxFQUFvRTtBQUMvRSxRQUFNQyxNQUFNLEdBQUcsSUFBSUosd0RBQUosQ0FBa0I7QUFBQ0ssSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFOLEdBQWxCLENBQWY7O0FBRUEsTUFBSTtBQUNBLFVBQU07QUFBRUMsTUFBQUEsSUFBSSxFQUFFQztBQUFSLFFBQXFCTixHQUFHLENBQUNPLElBQS9CO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1MLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUI7QUFDdENDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxRQUFRLEVBQUU7QUFDTkMsVUFBQUEsRUFBRSxFQUFFUCxRQUFRLENBQUNPLEVBRFA7QUFFTlgsVUFBQUEsT0FBTyxFQUFFQTtBQUZIO0FBRFAsT0FEK0I7QUFPdENZLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxJQUFJLEVBQUVULFFBQVEsQ0FBQ1MsSUFEYjtBQUVGQyxRQUFBQSxPQUFPLEVBQUVWLFFBQVEsQ0FBQ1U7QUFGaEI7QUFQZ0MsS0FBdkIsQ0FBbkI7QUFhQWYsSUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVg7QUFDQWhCLElBQUFBLEdBQUcsQ0FBQ2lCLElBQUosQ0FBUztBQUFDVixNQUFBQTtBQUFELEtBQVQ7QUFDSCxHQWpCRCxDQWlCRSxPQUFNVyxDQUFOLEVBQVM7QUFDUGxCLElBQUFBLEdBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYO0FBQ0FoQixJQUFBQSxHQUFHLENBQUNpQixJQUFKLENBQVM7QUFBQ0UsTUFBQUEsS0FBSyxFQUFFO0FBQVIsS0FBVDtBQUNILEdBcEJELFNBb0JVO0FBQ04sVUFBTWpCLE1BQU0sQ0FBQ2tCLFdBQVAsRUFBTjtBQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL2l0ZW0vdXBkYXRlLnRzP2MyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2F1dGhcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UsIHVzZXJfaWQpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCB7bG9nOiBbXCJxdWVyeVwiXSB9KVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBpdGVtOiBpdGVtRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgY2FyZCA9IGF3YWl0IHByaXNtYS5jYXJkSXRlbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBhdXRoSXRlbToge1xuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbURhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogaXRlbURhdGEudGV4dCxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBpdGVtRGF0YS5jaGVja2VkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXMuc3RhdHVzKDIwMSlcbiAgICAgICAgcmVzLmpzb24oe2NhcmR9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgcmVzLmpzb24oe2Vycm9yOiBcInVuYWJsZSB0byB1cGRhdGUgY2FyZCBpbiB0aGUgZGF0YWJhc2VcIn0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwidXNlcl9pZCIsInByaXNtYSIsImxvZyIsIml0ZW0iLCJpdGVtRGF0YSIsImJvZHkiLCJjYXJkIiwiY2FyZEl0ZW0iLCJ1cGRhdGUiLCJ3aGVyZSIsImF1dGhJdGVtIiwiaWQiLCJkYXRhIiwidGV4dCIsImNoZWNrZWQiLCJzdGF0dXMiLCJqc29uIiwiZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/item/update.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/item/update.ts"));
module.exports = __webpack_exports__;

})();