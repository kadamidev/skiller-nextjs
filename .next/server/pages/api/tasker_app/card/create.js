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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/auth */ \"./lib/auth.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authenticated)(async function (req, res, user_id) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      card: cardData\n    } = req.body;\n    const tab = await prisma.tab.findUnique({\n      where: {\n        id: cardData.tab_id\n      }\n    });\n\n    if (tab.user_id == user_id) {\n      const card = await prisma.card.create({\n        data: {\n          header: cardData.header,\n          tab_id: cardData.tab_id,\n          collapsed: cardData.collapsed,\n          user_id: user_id\n        }\n      });\n      const cardItem = await prisma.cardItem.create({\n        data: {\n          text: \"\",\n          card_id: card.id,\n          user_id: user_id\n        }\n      });\n      res.status(201);\n      res.json({\n        cardDbId: card.id,\n        itemDbId: cardItem.id\n      });\n    } else {\n      throw \"Tab not owned by user\";\n    }\n  } catch (e) {\n    console.log(e);\n    res.status(500);\n    res.json({\n      error: \"unable to save card to the database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGFza2VyX2FwcC9jYXJkL2NyZWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUdBLGlFQUFlQyx3REFBYSxDQUFDLGdCQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEQyxPQUEzRCxFQUFvRTtBQUM3RixRQUFNQyxNQUFNLEdBQUcsSUFBSUwsd0RBQUosQ0FBa0I7QUFBQ00sSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFOLEdBQWxCLENBQWY7O0FBRUEsTUFBSTtBQUNBLFVBQU07QUFBRUMsTUFBQUEsSUFBSSxFQUFFQztBQUFSLFFBQXFCTixHQUFHLENBQUNPLElBQS9CO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXQyxVQUFYLENBQXNCO0FBQ3BDQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsRUFBRSxFQUFFTCxRQUFRLENBQUNNO0FBRFY7QUFENkIsS0FBdEIsQ0FBbEI7O0FBTUEsUUFBSUosR0FBRyxDQUFDTixPQUFKLElBQWVBLE9BQW5CLEVBQTRCO0FBQ3hCLFlBQU1HLElBQUksR0FBRyxNQUFNRixNQUFNLENBQUNFLElBQVAsQ0FBWVEsTUFBWixDQUFtQjtBQUNsQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFVBQUFBLE1BQU0sRUFBRVQsUUFBUSxDQUFDUyxNQURmO0FBRUZILFVBQUFBLE1BQU0sRUFBRU4sUUFBUSxDQUFDTSxNQUZmO0FBR0ZJLFVBQUFBLFNBQVMsRUFBRVYsUUFBUSxDQUFDVSxTQUhsQjtBQUlGZCxVQUFBQSxPQUFPLEVBQUVBO0FBSlA7QUFENEIsT0FBbkIsQ0FBbkI7QUFRQSxZQUFNZSxRQUFRLEdBQUcsTUFBTWQsTUFBTSxDQUFDYyxRQUFQLENBQWdCSixNQUFoQixDQUF1QjtBQUMxQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZJLFVBQUFBLElBQUksRUFBRSxFQURKO0FBRUZDLFVBQUFBLE9BQU8sRUFBRWQsSUFBSSxDQUFDTSxFQUZaO0FBR0ZULFVBQUFBLE9BQU8sRUFBRUE7QUFIUDtBQURvQyxPQUF2QixDQUF2QjtBQU9BRCxNQUFBQSxHQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWDtBQUNBbkIsTUFBQUEsR0FBRyxDQUFDb0IsSUFBSixDQUFTO0FBQUNDLFFBQUFBLFFBQVEsRUFBRWpCLElBQUksQ0FBQ00sRUFBaEI7QUFBb0JZLFFBQUFBLFFBQVEsRUFBRU4sUUFBUSxDQUFDTjtBQUF2QyxPQUFUO0FBQ0gsS0FsQkQsTUFrQk87QUFDSCxZQUFNLHVCQUFOO0FBQ0g7QUFDSixHQTdCRCxDQTZCRSxPQUFNYSxDQUFOLEVBQVM7QUFDUEMsSUFBQUEsT0FBTyxDQUFDckIsR0FBUixDQUFZb0IsQ0FBWjtBQUNBdkIsSUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVg7QUFDQW5CLElBQUFBLEdBQUcsQ0FBQ29CLElBQUosQ0FBUztBQUFDSyxNQUFBQSxLQUFLLEVBQUU7QUFBUixLQUFUO0FBQ0gsR0FqQ0QsU0FpQ1U7QUFDTixVQUFNdkIsTUFBTSxDQUFDd0IsV0FBUCxFQUFOO0FBQ0g7QUFFSixDQXhDMkIsQ0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbGVyLW5leHRqcy8uL3BhZ2VzL2FwaS90YXNrZXJfYXBwL2NhcmQvY3JlYXRlLnRzP2MzYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZWQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2F1dGhcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoZW50aWNhdGVkKGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSwgdXNlcl9pZCkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoIHtsb2c6IFtcInF1ZXJ5XCJdIH0pXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGNhcmQ6IGNhcmREYXRhIH0gPSByZXEuYm9keVxuICAgICAgICBjb25zdCB0YWIgPSBhd2FpdCBwcmlzbWEudGFiLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBpZDogY2FyZERhdGEudGFiX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRhYi51c2VyX2lkID09IHVzZXJfaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBhd2FpdCBwcmlzbWEuY2FyZC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBjYXJkRGF0YS5oZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgIHRhYl9pZDogY2FyZERhdGEudGFiX2lkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGNhcmREYXRhLmNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlcl9pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBjYXJkSXRlbSA9IGF3YWl0IHByaXNtYS5jYXJkSXRlbS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2FyZF9pZDogY2FyZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlcl9pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpXG4gICAgICAgICAgICByZXMuanNvbih7Y2FyZERiSWQ6IGNhcmQuaWQsIGl0ZW1EYklkOiBjYXJkSXRlbS5pZH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIlRhYiBub3Qgb3duZWQgYnkgdXNlclwiXG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogXCJ1bmFibGUgdG8gc2F2ZSBjYXJkIHRvIHRoZSBkYXRhYmFzZVwifSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICAgIH1cblxufSkiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiYXV0aGVudGljYXRlZCIsInJlcSIsInJlcyIsInVzZXJfaWQiLCJwcmlzbWEiLCJsb2ciLCJjYXJkIiwiY2FyZERhdGEiLCJib2R5IiwidGFiIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJ0YWJfaWQiLCJjcmVhdGUiLCJkYXRhIiwiaGVhZGVyIiwiY29sbGFwc2VkIiwiY2FyZEl0ZW0iLCJ0ZXh0IiwiY2FyZF9pZCIsInN0YXR1cyIsImpzb24iLCJjYXJkRGJJZCIsIml0ZW1EYklkIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tasker_app/card/create.ts\n");

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