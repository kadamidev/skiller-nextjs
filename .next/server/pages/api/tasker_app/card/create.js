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
exports.id = "pages/api/tasker_app/card/create";
exports.ids = ["pages/api/tasker_app/card/create"];
exports.modules = {

/***/ "./pages/api/tasker_app/card/create.ts":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/card/create.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      card: cardData\n    } = req.body;\n    const card = await prisma.card.create({\n      data: {\n        header: cardData.header,\n        tab_id: cardData.tab_id,\n        collapsed: cardData.collapsed\n      }\n    });\n    res.status(201);\n    res.json({\n      card\n    });\n  } catch (e) {\n    res.status(500);\n    res.json({\n      error: \"unable to save card to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL2NyZWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFrQjtBQUFDSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBbEIsQ0FBZjs7QUFFQSxNQUFJO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxJQUFJLEVBQUVDO0FBQVIsUUFBcUJMLEdBQUcsQ0FBQ00sSUFBL0I7QUFDQSxVQUFNRixJQUFJLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVlHLE1BQVosQ0FBbUI7QUFDbENDLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxNQUFNLEVBQUVKLFFBQVEsQ0FBQ0ksTUFEZjtBQUVGQyxRQUFBQSxNQUFNLEVBQUVMLFFBQVEsQ0FBQ0ssTUFGZjtBQUdGQyxRQUFBQSxTQUFTLEVBQUVOLFFBQVEsQ0FBQ007QUFIbEI7QUFENEIsS0FBbkIsQ0FBbkI7QUFTQVYsSUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWDtBQUNBWCxJQUFBQSxHQUFHLENBQUNZLElBQUosQ0FBUztBQUFDVCxNQUFBQTtBQUFELEtBQVQ7QUFDSCxHQWJELENBYUUsT0FBTVUsQ0FBTixFQUFTO0FBQ1BiLElBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVg7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxJQUFKLENBQVM7QUFBQ0UsTUFBQUEsS0FBSyxFQUFFO0FBQVIsS0FBVDtBQUNILEdBaEJELFNBZ0JVO0FBQ04sVUFBTWIsTUFBTSxDQUFDYyxXQUFQLEVBQU47QUFDSDtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL2NyZWF0ZS50cz9jM2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgge2xvZzogW1wicXVlcnlcIl0gfSlcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgY2FyZDogY2FyZERhdGEgfSA9IHJlcS5ib2R5XG4gICAgICAgIGNvbnN0IGNhcmQgPSBhd2FpdCBwcmlzbWEuY2FyZC5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogY2FyZERhdGEuaGVhZGVyLFxuICAgICAgICAgICAgICAgIHRhYl9pZDogY2FyZERhdGEudGFiX2lkLFxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogY2FyZERhdGEuY29sbGFwc2VkLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpXG4gICAgICAgIHJlcy5qc29uKHtjYXJkfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogXCJ1bmFibGUgdG8gc2F2ZSBjYXJkIHRvIHRoZSBkYXRhYmFzZVwifSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJsb2ciLCJjYXJkIiwiY2FyZERhdGEiLCJib2R5IiwiY3JlYXRlIiwiZGF0YSIsImhlYWRlciIsInRhYl9pZCIsImNvbGxhcHNlZCIsInN0YXR1cyIsImpzb24iLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/card/create.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tasker_app/card/create.ts"));
module.exports = __webpack_exports__;

})();