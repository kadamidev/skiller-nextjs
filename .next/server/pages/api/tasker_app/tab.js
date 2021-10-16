"use strict";
(() => {
var exports = {};
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 5831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ authenticated)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const authenticated = fn => async (req, res) => {
  try {
    const decodedHttp = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.authHttp, process.env.JWT_SECRET);
    const decoded = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.cookies.auth, process.env.JWT_SECRET);
    if (decoded && decodedHttp.key === decoded.key) return await fn(req, res, decodedHttp.sub);
  } catch (err) {
    console.log(err.stack);
    res.status(401).json({
      message: 'not authenticated'
    });
  }
};

/***/ }),

/***/ 2651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5831);
 // import { verify } from 'jsonwebtoken'


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .authenticated */ .x)(async function (req, res, user_id) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'Method not allowed'
    });
  }

  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log: ["query"]
  });

  try {
    const tabs = await prisma.tab.findMany({
      where: {
        user_id: user_id
      },
      include: {
        Card: {
          include: {
            items: true
          }
        }
      }
    });
    res.status(200);
    res.json({
      tabs
    });
  } catch (e) {
    res.status(500);
    res.json({
      error: "Unable to fetch tabs"
    });
  } finally {
    await prisma.$disconnect();
  }
}));

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2651));
module.exports = __webpack_exports__;

})();