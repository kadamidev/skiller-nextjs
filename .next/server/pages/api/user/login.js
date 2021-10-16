"use strict";
(() => {
var exports = {};
exports.id = 866;
exports.ids = [866];
exports.modules = {

/***/ 4634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(212);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(6552);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./pages/api/user/login.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction





/* harmony default export */ async function login(req, res) {
  const prisma = new client_.PrismaClient({
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
    const user = await prisma.user.findUnique({
      where: {
        username: userData.username
      }
    });
    (0,external_bcrypt_.compare)(userData.password, user.password, async (err, result) => {
      if (!err && result) {
        const key = (0,external_uuid_.v4)(); //issue 2 with matching keys so can optimistically logout without server issuing logout clearing http cookie

        const claimsHttp = {
          sub: user.id,
          type: 'http',
          key: key
        };
        const claims = {
          sub: user.id,
          type: 'reg',
          key: key
        };
        const jwtHttp = (0,external_jsonwebtoken_.sign)(claimsHttp, process.env.JWT_SECRET, {
          expiresIn: '30d'
        });
        const jwt = (0,external_jsonwebtoken_.sign)(claims, process.env.JWT_SECRET, {
          expiresIn: '30d'
        });
        const cookieSettings = {
          httpOnly: false,
          secure: true,
          sameSite: 'strict',
          path: '/'
        };
        const cookieSettingsHttp = {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          path: '/'
        }; // persist cookie past session if remember me

        if (userData.remember) cookieSettings['maxAge'] = 3600 * 24 * 30; //30 days

        if (userData.remember) cookieSettingsHttp['maxAge'] = 3600 * 24 * 30; //30 days

        res.setHeader('Set-Cookie', [external_cookie_default().serialize('authHttp', jwtHttp, cookieSettingsHttp), external_cookie_default().serialize('auth', jwt, cookieSettings)]); // res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, cookieSettings))
        // res.status(201).json({message: `Welcome back ${user.username}`})

        res.status(201).json({
          user: {
            username: user.username,
            id: user.id
          }
        });
      } else {
        res.json({
          message: 'Incorrect username/pw combination'
        });
      }
    });
  } catch (e) {
    res.status(500);
    res.json({
      error: `unable to login at the moment: ${e}`
    });
  } finally {
    await prisma.$disconnect();
  }
}

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6552:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1231:
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4634));
module.exports = __webpack_exports__;

})();