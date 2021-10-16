"use strict";
(() => {
var exports = {};
exports.id = 884;
exports.ids = [884];
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

/***/ 996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5831);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .authenticated */ .x)(async function (req, res, user_id) {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log: ['query']
  });

  try {
    const {
      user: userData
    } = req.body;
    console.log(`api inserted id: ${userData.id}, auth id: ${user_id}`);

    if (user_id == userData.id) {
      //checks authed user id to ensure no deletion of other users
      const user = await prisma.user.delete({
        where: {
          id: userData.id
        }
      });
      res.status(201);
      res.json({
        message: `successfully deleted ${user.username}`
      });
    } else {
      res.status(400).json({
        error: `cant delete another user`
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({
      error: `Unable to delete user from the database`
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
var __webpack_exports__ = (__webpack_exec__(996));
module.exports = __webpack_exports__;

})();