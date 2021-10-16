"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 4336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6552);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log: ['query']
  });

  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Wrong Method'
    });
  }

  try {
    const {
      user: userData
    } = req.body;
    (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.hash)(userData.password, 10, async (err, hash) => {
      const user = await prisma.user.create({
        data: {
          username: userData.username,
          email: userData.email,
          avatar: userData.avatar,
          password: hash
        }
      });

      if (user) {
        const tab = await prisma.tab.create({
          data: {
            name: 'Untitled',
            user_id: user.id
          }
        });
      }

      res.status(201);
      res.json({
        user: {
          username: user.username,
          id: user.id
        }
      });
    });
  } catch (e) {
    res.status(500);
    res.json({
      error: `Unable to create user in the database e: ${e}`
    });
  } finally {
    await prisma.$disconnect();
  }
} //   model User {
//     id Int @id @default(autoincrement())
//     username String
//     email String
//     avatar String
//     createdAt DateTime @default(now())
//   }

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6552:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4336));
module.exports = __webpack_exports__;

})();