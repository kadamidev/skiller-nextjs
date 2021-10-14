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

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authenticated\": () => (/* binding */ authenticated)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authenticated = fn => async (req, res) => {\n  try {\n    const decodedHttp = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.authHttp, process.env.JWT_SECRET);\n    const decoded = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.auth, process.env.JWT_SECRET);\n    if (decoded && decodedHttp.key === decoded.key) return await fn(req, res, decodedHttp.sub);\n  } catch (err) {\n    console.log(err.stack);\n    res.status(401).json({\n      message: 'not authenticated'\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUlPLE1BQU1DLGFBQWEsR0FBS0MsRUFBRixJQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQzdGLE1BQUk7QUFDQSxVQUFNQyxXQUFXLEdBQUdMLG9EQUFNLENBQUNHLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxRQUFiLEVBQXdCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBcEMsQ0FBMUI7QUFDQSxVQUFNQyxPQUFPLEdBQUdYLG9EQUFNLENBQUNHLEdBQUcsQ0FBQ0csT0FBSixDQUFZTSxJQUFiLEVBQW9CSixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBaEMsQ0FBdEI7QUFFQSxRQUFJQyxPQUFPLElBQUtOLFdBQVcsQ0FBQ1EsR0FBWixLQUFvQkYsT0FBTyxDQUFDRSxHQUE1QyxFQUFrRCxPQUFPLE1BQU1YLEVBQUUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLFdBQVcsQ0FBQ1MsR0FBdkIsQ0FBZjtBQUNyRCxHQUxELENBS0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1pDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLEtBQWhCO0FBQ0FkLElBQUFBLEdBQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLE1BQUFBLE9BQU8sRUFBRTtBQUFWLEtBQXJCO0FBQ0Q7QUFDRixDQVZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9saWIvYXV0aC50cz9lMzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyLCBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSBcImpzb253ZWJ0b2tlblwiXG5cblxuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlZCA9ICggZm46IGFueSApID0+IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWRIdHRwID0gdmVyaWZ5KHJlcS5jb29raWVzLmF1dGhIdHRwISwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IHZlcmlmeShyZXEuY29va2llcy5hdXRoISwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcblxuICAgICAgICBpZiAoZGVjb2RlZCAmJiAoZGVjb2RlZEh0dHAua2V5ID09PSBkZWNvZGVkLmtleSkpIHJldHVybiBhd2FpdCBmbihyZXEsIHJlcywgZGVjb2RlZEh0dHAuc3ViKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKVxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oe21lc3NhZ2U6ICdub3QgYXV0aGVudGljYXRlZCd9KVxuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJ2ZXJpZnkiLCJhdXRoZW50aWNhdGVkIiwiZm4iLCJyZXEiLCJyZXMiLCJkZWNvZGVkSHR0cCIsImNvb2tpZXMiLCJhdXRoSHR0cCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZGVjb2RlZCIsImF1dGgiLCJrZXkiLCJzdWIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./pages/api/tasker_app/card/create.ts":
/*!*********************************************!*\
  !*** ./pages/api/tasker_app/card/create.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/auth */ \"./lib/auth.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authenticated)(async function (req, res, user_id) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      card: cardData\n    } = req.body;\n    const tab = await prisma.tab.findUnique({\n      where: {\n        id: cardData.tab_id\n      }\n    });\n\n    if (tab.user_id == user_id) {\n      const card = await prisma.card.create({\n        data: {\n          header: cardData.header,\n          tab_id: cardData.tab_id,\n          collapsed: cardData.collapsed,\n          user_id: user_id\n        }\n      });\n      res.status(201);\n      res.json({\n        dbid: card.id\n      });\n    } else {\n      throw \"Tab not owned by user\";\n    }\n  } catch (e) {\n    console.log(e);\n    res.status(500);\n    res.json({\n      error: \"unable to save card to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL2NyZWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUdBLGlFQUFlQyx3REFBYSxDQUFDLGdCQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEQyxPQUEzRCxFQUFvRTtBQUM3RixRQUFNQyxNQUFNLEdBQUcsSUFBSUwsd0RBQUosQ0FBa0I7QUFBQ00sSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFOLEdBQWxCLENBQWY7O0FBRUEsTUFBSTtBQUNBLFVBQU07QUFBRUMsTUFBQUEsSUFBSSxFQUFFQztBQUFSLFFBQXFCTixHQUFHLENBQUNPLElBQS9CO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXQyxVQUFYLENBQXNCO0FBQ3BDQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsRUFBRSxFQUFFTCxRQUFRLENBQUNNO0FBRFY7QUFENkIsS0FBdEIsQ0FBbEI7O0FBTUEsUUFBSUosR0FBRyxDQUFDTixPQUFKLElBQWVBLE9BQW5CLEVBQTRCO0FBQ3hCLFlBQU1HLElBQUksR0FBRyxNQUFNRixNQUFNLENBQUNFLElBQVAsQ0FBWVEsTUFBWixDQUFtQjtBQUNsQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFVBQUFBLE1BQU0sRUFBRVQsUUFBUSxDQUFDUyxNQURmO0FBRUZILFVBQUFBLE1BQU0sRUFBRU4sUUFBUSxDQUFDTSxNQUZmO0FBR0ZJLFVBQUFBLFNBQVMsRUFBRVYsUUFBUSxDQUFDVSxTQUhsQjtBQUlGZCxVQUFBQSxPQUFPLEVBQUVBO0FBSlA7QUFENEIsT0FBbkIsQ0FBbkI7QUFRQUQsTUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVg7QUFDQWhCLE1BQUFBLEdBQUcsQ0FBQ2lCLElBQUosQ0FBUztBQUFDQyxRQUFBQSxJQUFJLEVBQUVkLElBQUksQ0FBQ007QUFBWixPQUFUO0FBQ0gsS0FYRCxNQVdPO0FBQ0gsWUFBTSx1QkFBTjtBQUNIO0FBQ0osR0F0QkQsQ0FzQkUsT0FBTVMsQ0FBTixFQUFTO0FBQ1BDLElBQUFBLE9BQU8sQ0FBQ2pCLEdBQVIsQ0FBWWdCLENBQVo7QUFDQW5CLElBQUFBLEdBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYO0FBQ0FoQixJQUFBQSxHQUFHLENBQUNpQixJQUFKLENBQVM7QUFBQ0ksTUFBQUEsS0FBSyxFQUFFO0FBQVIsS0FBVDtBQUNILEdBMUJELFNBMEJVO0FBQ04sVUFBTW5CLE1BQU0sQ0FBQ29CLFdBQVAsRUFBTjtBQUNIO0FBRUosQ0FqQzJCLENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxlci1uZXh0anMvLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL2NyZWF0ZS50cz9jM2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBhdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9hdXRoXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXV0aGVudGljYXRlZChhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UsIHVzZXJfaWQpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCB7bG9nOiBbXCJxdWVyeVwiXSB9KVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBjYXJkOiBjYXJkRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgdGFiID0gYXdhaXQgcHJpc21hLnRhYi5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNhcmREYXRhLnRhYl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0YWIudXNlcl9pZCA9PSB1c2VyX2lkKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gYXdhaXQgcHJpc21hLmNhcmQuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogY2FyZERhdGEuaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICB0YWJfaWQ6IGNhcmREYXRhLnRhYl9pZCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBjYXJkRGF0YS5jb2xsYXBzZWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKVxuICAgICAgICAgICAgcmVzLmpzb24oe2RiaWQ6IGNhcmQuaWR9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJUYWIgbm90IG93bmVkIGJ5IHVzZXJcIlxuICAgICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwidW5hYmxlIHRvIHNhdmUgY2FyZCB0byB0aGUgZGF0YWJhc2VcIn0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICB9XG5cbn0pIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImF1dGhlbnRpY2F0ZWQiLCJyZXEiLCJyZXMiLCJ1c2VyX2lkIiwicHJpc21hIiwibG9nIiwiY2FyZCIsImNhcmREYXRhIiwiYm9keSIsInRhYiIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwidGFiX2lkIiwiY3JlYXRlIiwiZGF0YSIsImhlYWRlciIsImNvbGxhcHNlZCIsInN0YXR1cyIsImpzb24iLCJkYmlkIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/card/create.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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