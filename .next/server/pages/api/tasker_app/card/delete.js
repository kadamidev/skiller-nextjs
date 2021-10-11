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
exports.id = "pages/api/tasker_app/card/delete";
exports.ids = ["pages/api/tasker_app/card/delete"];
exports.modules = {

/***/ "./pages/api/tasker_app/card/delete.ts":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/card/delete.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      card: cardData\n    } = req.body;\n    const card = await prisma.card.delete({\n      where: {\n        id: cardData.id\n      }\n    });\n    res.status(201);\n    res.json({\n      card\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to delete card from the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL2RlbGV0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFrQjtBQUFDSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBbEIsQ0FBZjs7QUFFQSxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxJQUFJLEVBQUVDO0FBQVIsUUFBcUJMLEdBQUcsQ0FBQ00sSUFBL0I7QUFDQSxVQUFNRixJQUFJLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVlHLE1BQVosQ0FBbUI7QUFDbENDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxFQUFFLEVBQUVKLFFBQVEsQ0FBQ0k7QUFEVjtBQUQyQixLQUFuQixDQUFuQjtBQU1BUixJQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYO0FBQ0FULElBQUFBLEdBQUcsQ0FBQ1UsSUFBSixDQUFTO0FBQUNQLE1BQUFBO0FBQUQsS0FBVDtBQUNILEdBVkQsQ0FVRSxPQUFNUSxDQUFOLEVBQVM7QUFDUFgsSUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWDtBQUNBVCxJQUFBQSxHQUFHLENBQUNVLElBQUosQ0FBUztBQUFDRSxNQUFBQSxLQUFLLEVBQUU7QUFBUixLQUFUO0FBQ0gsR0FiRCxTQWFVO0FBQ04sVUFBTVgsTUFBTSxDQUFDWSxXQUFQLEVBQU47QUFDSDtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL2RlbGV0ZS50cz85YzJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgge2xvZzogW1wicXVlcnlcIl0gfSlcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgY2FyZDogY2FyZERhdGEgfSA9IHJlcS5ib2R5XG4gICAgICAgIGNvbnN0IGNhcmQgPSBhd2FpdCBwcmlzbWEuY2FyZC5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBpZDogY2FyZERhdGEuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKVxuICAgICAgICByZXMuanNvbih7Y2FyZH0pXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwidW5hYmxlIHRvIGRlbGV0ZSBjYXJkIGZyb20gdGhlIGRhdGFiYXNlXCJ9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsInByaXNtYSIsImxvZyIsImNhcmQiLCJjYXJkRGF0YSIsImJvZHkiLCJkZWxldGUiLCJ3aGVyZSIsImlkIiwic3RhdHVzIiwianNvbiIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/card/delete.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/card/delete.ts"));
module.exports = __webpack_exports__;

})();