exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 4097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3655);
/* harmony import */ var _styles_app_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2__);





const Loader = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_app_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loaderContainer),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_app_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().circle)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_app_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().circle)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_app_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().circle)
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ 2559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9561);
/* harmony import */ var _styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4097);







const Login = props => {
  const Username = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const Password = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const Remember = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: Username.current.value,
          password: Password.current.value,
          remember: Remember.current.checked
        }
      })
    });
    const json = await response.json();
    setLoading(false);

    if (response.ok) {
      props.loginUser(json.user);
      props.toggleShow();
      return;
    }

    if (!response.ok) {
      setMessage('Wrong user/pw combination, try again');
      return;
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: props.darkMode ? [(_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loginContainer), (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().darkMode)].join(' ') : (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loginContainer),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: "Login"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeButton),
          onClick: props.toggleShow,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            src: "/img/app/delete.svg",
            height: 10,
            width: 10
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: loading ? (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loadingWrapper) : (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loadingWrapperHide),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: loading ? [(_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userForm), (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userFormHide)].join(' ') : (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userForm),
        action: "/api/user/login",
        method: "POST",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
          htmlFor: "username",
          children: "Username"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          ref: Username,
          type: "text",
          name: "user[username]",
          id: "username"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
          htmlFor: "password",
          children: "Password"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          ref: Password,
          type: "password",
          name: "user[password]",
          id: "password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bottomRow),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checkContainer),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              ref: Remember,
              className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().checkbox),
              id: "rememberCheck",
              type: "checkbox"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customCheckbox),
              htmlFor: "rememberCheck",
              children: "Remember Me"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: handleFormSubmit,
            children: "Login"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (_styles_app_Login_module_scss__WEBPACK_IMPORTED_MODULE_4___default().errorMsg),
        children: message
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ 3655:
/***/ ((module) => {

// Exports
module.exports = {
	"loaderContainer": "Loader_loaderContainer__2ixRL",
	"rotate": "Loader_rotate__1G_Mz",
	"circle": "Loader_circle__17-eM",
	"grow": "Loader_grow__3rFWg"
};


/***/ }),

/***/ 9561:
/***/ ((module) => {

// Exports
module.exports = {
	"loginContainer": "Login_loginContainer__1B-4E",
	"header": "Login_header__1Qjbb",
	"closeButton": "Login_closeButton__5txuI",
	"loadingWrapperHide": "Login_loadingWrapperHide__aQNT4",
	"loadingWrapper": "Login_loadingWrapper__1UpRi",
	"userForm": "Login_userForm__2G51C",
	"bottomRow": "Login_bottomRow__2Lf2m",
	"checkContainer": "Login_checkContainer__Pz7yq",
	"checkbox": "Login_checkbox__2fman",
	"customCheckbox": "Login_customCheckbox__37Dzv",
	"userFormHide": "Login_userFormHide__2R-GZ",
	"errorMsg": "Login_errorMsg__2LfJu",
	"darkMode": "Login_darkMode__2BPOy"
};


/***/ })

};
;