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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/auth */ \"./lib/auth.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authenticated)(async function (req, res, user_id) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      card: cardData\n    } = req.body;\n    const tab = await prisma.tab.findUnique({\n      where: {\n        id: cardData.tab_id\n      }\n    }); // @ts-ignore\n\n    if (tab.user_id == user_id) {\n      const card = await prisma.card.create({\n        data: {\n          header: cardData.header,\n          tab_id: cardData.tab_id,\n          collapsed: cardData.collapsed,\n          // @ts-ignore\n          user_id: user_id\n        }\n      });\n      const cardItem = await prisma.cardItem.create({\n        data: {\n          text: \"\",\n          card_id: card.id,\n          // @ts-ignore\n          user_id: user_id\n        }\n      });\n      res.status(201);\n      res.json({\n        cardDbId: card.id,\n        itemDbId: cardItem.id\n      });\n    } else {\n      throw \"Tab not owned by user\";\n    }\n  } catch (e) {\n    console.log(e);\n    res.status(500);\n    res.json({\n      error: \"unable to save card to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL2NyZWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUdBLGlFQUFlQyx3REFBYSxDQUFDLGdCQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEQyxPQUEzRCxFQUF5RTtBQUNsRyxRQUFNQyxNQUFNLEdBQUcsSUFBSUwsd0RBQUosQ0FBa0I7QUFBQ00sSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFOLEdBQWxCLENBQWY7O0FBRUEsTUFBSTtBQUNBLFVBQU07QUFBRUMsTUFBQUEsSUFBSSxFQUFFQztBQUFSLFFBQXFCTixHQUFHLENBQUNPLElBQS9CO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXQyxVQUFYLENBQXNCO0FBQ3BDQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsRUFBRSxFQUFFTCxRQUFRLENBQUNNO0FBRFY7QUFENkIsS0FBdEIsQ0FBbEIsQ0FGQSxDQVFBOztBQUNBLFFBQUlKLEdBQUcsQ0FBQ04sT0FBSixJQUFlQSxPQUFuQixFQUE0QjtBQUN4QixZQUFNRyxJQUFJLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVlRLE1BQVosQ0FBbUI7QUFDbENDLFFBQUFBLElBQUksRUFBRTtBQUNGQyxVQUFBQSxNQUFNLEVBQUVULFFBQVEsQ0FBQ1MsTUFEZjtBQUVGSCxVQUFBQSxNQUFNLEVBQUVOLFFBQVEsQ0FBQ00sTUFGZjtBQUdGSSxVQUFBQSxTQUFTLEVBQUVWLFFBQVEsQ0FBQ1UsU0FIbEI7QUFJRjtBQUNBZCxVQUFBQSxPQUFPLEVBQUVBO0FBTFA7QUFENEIsT0FBbkIsQ0FBbkI7QUFTQSxZQUFNZSxRQUFRLEdBQUcsTUFBTWQsTUFBTSxDQUFDYyxRQUFQLENBQWdCSixNQUFoQixDQUF1QjtBQUMxQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZJLFVBQUFBLElBQUksRUFBRSxFQURKO0FBRUZDLFVBQUFBLE9BQU8sRUFBRWQsSUFBSSxDQUFDTSxFQUZaO0FBR0Y7QUFDQVQsVUFBQUEsT0FBTyxFQUFFQTtBQUpQO0FBRG9DLE9BQXZCLENBQXZCO0FBUUFELE1BQUFBLEdBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYO0FBQ0FuQixNQUFBQSxHQUFHLENBQUNvQixJQUFKLENBQVM7QUFBQ0MsUUFBQUEsUUFBUSxFQUFFakIsSUFBSSxDQUFDTSxFQUFoQjtBQUFvQlksUUFBQUEsUUFBUSxFQUFFTixRQUFRLENBQUNOO0FBQXZDLE9BQVQ7QUFDSCxLQXBCRCxNQW9CTztBQUNILFlBQU0sdUJBQU47QUFDSDtBQUNKLEdBaENELENBZ0NFLE9BQU1hLENBQU4sRUFBUztBQUNQQyxJQUFBQSxPQUFPLENBQUNyQixHQUFSLENBQVlvQixDQUFaO0FBQ0F2QixJQUFBQSxHQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWDtBQUNBbkIsSUFBQUEsR0FBRyxDQUFDb0IsSUFBSixDQUFTO0FBQUNLLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBQVQ7QUFDSCxHQXBDRCxTQW9DVTtBQUNOLFVBQU12QixNQUFNLENBQUN3QixXQUFQLEVBQU47QUFDSDtBQUVKLENBM0MyQixDQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NraWxsZXItbmV4dGpzLy4vcGFnZXMvYXBpL3Rhc2tlcl9hcHAvY2FyZC9jcmVhdGUudHM/YzNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgYXV0aGVudGljYXRlZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvYXV0aFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhlbnRpY2F0ZWQoYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlLCB1c2VyX2lkOiBhbnkpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCB7bG9nOiBbXCJxdWVyeVwiXSB9KVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBjYXJkOiBjYXJkRGF0YSB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgdGFiID0gYXdhaXQgcHJpc21hLnRhYi5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNhcmREYXRhLnRhYl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHRhYi51c2VyX2lkID09IHVzZXJfaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBhd2FpdCBwcmlzbWEuY2FyZC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBjYXJkRGF0YS5oZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgIHRhYl9pZDogY2FyZERhdGEudGFiX2lkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGNhcmREYXRhLmNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtID0gYXdhaXQgcHJpc21hLmNhcmRJdGVtLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjYXJkX2lkOiBjYXJkLmlkLFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSlcbiAgICAgICAgICAgIHJlcy5qc29uKHtjYXJkRGJJZDogY2FyZC5pZCwgaXRlbURiSWQ6IGNhcmRJdGVtLmlkfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiVGFiIG5vdCBvd25lZCBieSB1c2VyXCJcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgcmVzLmpzb24oe2Vycm9yOiBcInVuYWJsZSB0byBzYXZlIGNhcmQgdG8gdGhlIGRhdGFiYXNlXCJ9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgfVxuXG59KSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJhdXRoZW50aWNhdGVkIiwicmVxIiwicmVzIiwidXNlcl9pZCIsInByaXNtYSIsImxvZyIsImNhcmQiLCJjYXJkRGF0YSIsImJvZHkiLCJ0YWIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInRhYl9pZCIsImNyZWF0ZSIsImRhdGEiLCJoZWFkZXIiLCJjb2xsYXBzZWQiLCJjYXJkSXRlbSIsInRleHQiLCJjYXJkX2lkIiwic3RhdHVzIiwianNvbiIsImNhcmREYklkIiwiaXRlbURiSWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/card/create.ts\n");

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