module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/main */ "./components/layouts/main.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\project\\next-v-9\\components\\Landing.js";






var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Landing__Container",
  componentId: "sc-7746ay-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;background-color:#e3e3e3;"]);
var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea).withConfig({
  displayName: "Landing__TextBox",
  componentId: "sc-7746ay-1"
})([""]);
var ContainerBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Landing__ContainerBox",
  componentId: "sc-7746ay-2"
})(["width:500px;height:150px;background-color:white;border-radius:5px;"]);
var AvatarImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Landing__AvatarImg",
  componentId: "sc-7746ay-3"
})(["width:50px;border-radius:50%;"]);

var Landing = function Landing(_ref) {
  var user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AvatarImg, {
    src: user.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
};

var enhancer = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    user: state.auth.user
  };
}, {}));
/* harmony default export */ __webpack_exports__["default"] = (Object(_layouts_main__WEBPACK_IMPORTED_MODULE_4__["default"])(enhancer(Landing)));

/***/ }),

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _share_Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share/Field */ "./components/share/Field/index.js");
/* harmony import */ var _share_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share/Loading */ "./components/share/Loading.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ducks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ducks/auth */ "./ducks/auth/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/helper */ "./core/helper.js");
/* harmony import */ var _static_images_Twitter_bird_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/images/Twitter_bird.png */ "./static/images/Twitter_bird.png");
/* harmony import */ var _static_images_Twitter_bird_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_images_Twitter_bird_png__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "D:\\project\\next-v-9\\components\\Login.js";











var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "Login__Container",
  componentId: "sc-1tmy69m-0"
})(["position:relative;display:flex;justify-content:center;width:100vw;height:100vh;overflow:hidden;background:linear-gradient(to top,#1c92d2,#f2fcfe);"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Login__Form",
  componentId: "sc-1tmy69m-1"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;width:500px;height:400px;"]);
var CustomField = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_share_Field__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Login__CustomField",
  componentId: "sc-1tmy69m-2"
})(["margin:0 auto 30px;width:100%;max-width:300px;"]);
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_9__["Button"]).withConfig({
  displayName: "Login__Submit",
  componentId: "sc-1tmy69m-3"
})(["width:fit-content;margin:0 auto;"]);
var Error = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Login__Error",
  componentId: "sc-1tmy69m-4"
})(["color:red;margin-bottom:20px;"]);
var Twittee = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Login__Twittee",
  componentId: "sc-1tmy69m-5"
})(["transform:rotate3d(1,1,1,45deg);width:55px;margin-right:15px;"]);
var HeaderTopic = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Login__HeaderTopic",
  componentId: "sc-1tmy69m-6"
})(["margin-bottom:30px;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Login__Header",
  componentId: "sc-1tmy69m-7"
})(["font-size:20px;font-weight:bold;"]);

var validate = function validate(value) {
  var error = {};

  if (!value.email) {
    error.email = 'please fill email ';
  } else if (!Object(_core_helper__WEBPACK_IMPORTED_MODULE_10__["isEmail"])(value.email)) {
    error.email = 'email is incorrect pattern';
  }

  if (!value.password) {
    error.password = 'please fill password';
  }

  return error;
};

var Login = function Login(_ref) {
  var isLoading = _ref.isLoading,
      login = _ref.login,
      handleSubmit = _ref.handleSubmit,
      errorMessage = _ref.errorMessage,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["isLoading", "login", "handleSubmit", "errorMessage"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_share_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isLoading: isLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    onSubmit: handleSubmit(function (values) {
      return login(values);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderTopic, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Twittee, {
    src: _static_images_Twitter_bird_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "TWITTEE")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomField, {
    name: "email",
    type: "text",
    placeholder: "email",
    addonBefore: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      type: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomField, {
    name: "password",
    type: "password",
    placeholder: "password",
    addonBefore: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      type: "lock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), errorMessage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Error, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, errorMessage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submit, {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Submit"))));
};

var enhancer = Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return {
    isLoading: state.auth.isLoading,
    errorMessage: state.auth.errorMessage
  };
}, {
  login: _ducks_auth__WEBPACK_IMPORTED_MODULE_8__["login"],
  setDataUser: _ducks_auth__WEBPACK_IMPORTED_MODULE_8__["setDataUser"]
}), Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: 'login',
  validate: validate,
  onChange: function onChange(values, _, props) {
    props.errorMessage !== '' && props.setDataUser({
      errorMessage: ''
    });
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (enhancer(Login));

/***/ }),

/***/ "./components/layouts/main.js":
/*!************************************!*\
  !*** ./components/layouts/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! React */ "React");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ducks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ducks/auth */ "./ducks/auth/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _share_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/Button */ "./components/share/Button.js");
/* harmony import */ var _static_images_Twitter_bird_white_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/images/Twitter_bird_white.png */ "./static/images/Twitter_bird_white.png");
/* harmony import */ var _static_images_Twitter_bird_white_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_Twitter_bird_white_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\project\\next-v-9\\components\\layouts\\main.js";







var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "main__Container",
  componentId: "sc-9rlwu4-0"
})(["position:relative;display:flex;justify-content:center;width:100vw;height:100vh;overflow:hidden;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "main__Header",
  componentId: "sc-9rlwu4-1"
})(["position:fixed;display:flex;align-items:center;justify-content:space-between;top:0;width:100%;height:80px;background:linear-gradient(to bottom,#1c92d2,#f2fcfe);"]);
var CustomButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_share_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "main__CustomButton",
  componentId: "sc-9rlwu4-2"
})(["color:black;margin:0 10px;background:linear-gradient(to bottom,#1c92d2,#f2fcfe);:hover{background:linear-gradient(to top,#43c6ac,#f8ffae);}"]);
var Twittee = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "main__Twittee",
  componentId: "sc-9rlwu4-3"
})(["transform:rotate3d(1,1,1,45deg);width:55px;margin:0 15px;filter:blur(0.5px);"]);
var ContainerUser = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "main__ContainerUser",
  componentId: "sc-9rlwu4-4"
})([""]);
var AvatarImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "main__AvatarImg",
  componentId: "sc-9rlwu4-5"
})(["width:50px;border-radius:50%;"]);
var enhancer = Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return {
    user: state.auth.user
  };
}, {
  logout: _ducks_auth__WEBPACK_IMPORTED_MODULE_2__["logout"]
}));
var HeaderComponents = enhancer(function (_ref) {
  var user = _ref.user,
      logout = _ref.logout;
  return React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Twittee, {
    src: _static_images_Twitter_bird_white_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerUser, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AvatarImg, {
    src: user.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomButton, {
    type: "primary",
    onClick: function onClick() {
      return logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Log out")));
});

var Layout = function Layout(WrappedComponent) {
  return function () {
    return React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderComponents, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/share/Button.js":
/*!************************************!*\
  !*** ./components/share/Button.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\project\\next-v-9\\components\\share\\Button.js";



var CustomButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Button"]).withConfig({
  displayName: "Button__CustomButton",
  componentId: "ss84zb-0"
})(["width:fit-context;margin:0 auto;"]);

var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/share/Field/Password.js":
/*!********************************************!*\
  !*** ./components/share/Field/Password.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\project\\next-v-9\\components\\share\\Field\\Password.js";



var CustomInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_4__["Input"]).withConfig({
  displayName: "Password__CustomInput",
  componentId: "sc-1xdvdda-0"
})([""]);

var Input = function Input(_ref) {
  var input = _ref.input,
      meta = _ref.meta,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["input", "meta"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomInput.Password, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/share/Field/TextArea.js":
/*!********************************************!*\
  !*** ./components/share/Field/TextArea.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\project\\next-v-9\\components\\share\\Field\\TextArea.js";



var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;
var CustomInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(TextArea).withConfig({
  displayName: "TextArea__CustomInput",
  componentId: "sc-10dazmv-0"
})([""]);

var Input = function Input(_ref) {
  var input = _ref.input,
      meta = _ref.meta,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["input", "meta"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomInput, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    rows: 4
  }, input, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/share/Field/TextInput.js":
/*!*********************************************!*\
  !*** ./components/share/Field/TextInput.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\project\\next-v-9\\components\\share\\Field\\TextInput.js";



var CustomInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_4__["Input"]).withConfig({
  displayName: "TextInput__CustomInput",
  componentId: "sc-19a97bm-0"
})([""]);

var Input = function Input(_ref) {
  var input = _ref.input,
      meta = _ref.meta,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["input", "meta"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomInput, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/share/Field/index.js":
/*!*****************************************!*\
  !*** ./components/share/Field/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextInput */ "./components/share/Field/TextInput.js");
/* harmony import */ var _Password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Password */ "./components/share/Field/Password.js");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextArea */ "./components/share/Field/TextArea.js");


var _jsxFileName = "D:\\project\\next-v-9\\components\\share\\Field\\index.js";







var Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Field__Container",
  componentId: "sc-8fa67f-0"
})(["width:100%;margin:0 auto 24px;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.label.withConfig({
  displayName: "Field__Label",
  componentId: "sc-8fa67f-1"
})([""]);
var ErrorContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Field__ErrorContainer",
  componentId: "sc-8fa67f-2"
})([""]);
var ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "Field__ErrorText",
  componentId: "sc-8fa67f-3"
})(["color:red;padding-left:5px;"]);

var TypeRenderer = function TypeRenderer(type, props) {
  switch (type) {
    case 'text':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }));

    case 'password':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Password__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }));

    case 'textarea':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TextArea__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));

    default:
      break;
  }
};

var FieldRenderer = function FieldRenderer(_ref) {
  var className = _ref.className,
      label = _ref.label,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["className", "label"]);

  var type = props.type,
      hideError = props.hideError,
      _props$meta = props.meta,
      error = _props$meta.error,
      touched = _props$meta.touched,
      asyncError = props.asyncError;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, label && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, label), TypeRenderer(type, props), !hideError && touched && (error || asyncError) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ErrorContainer, {
    className: "error-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ErrorText, {
    className: "error",
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, error || asyncError)));
};

var CustomField = function CustomField(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    component: FieldRenderer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
};

var enhancer = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])();
/* harmony default export */ __webpack_exports__["default"] = (enhancer(CustomField));

/***/ }),

/***/ "./components/share/Loading.js":
/*!*************************************!*\
  !*** ./components/share/Loading.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/loading.gif */ "./static/images/loading.gif");
/* harmony import */ var _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_loading_gif__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\project\\next-v-9\\components\\share\\Loading.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Loading__Container",
  componentId: "sc-1ak27nv-0"
})(["position:relative;"]);
var ContainerLoading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Loading__ContainerLoading",
  componentId: "sc-1ak27nv-1"
})(["position:fixed;display:flex;justify-content:center;align-items:center;left:0;top:0;width:100%;height:100%;z-index:999;background:rgba(255,255,255,0.8);"]);
var LoadingGif = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Loading__LoadingGif",
  componentId: "sc-1ak27nv-2"
})([""]);

var Loading = function Loading(_ref) {
  var children = _ref.children,
      isLoading = _ref.isLoading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerLoading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingGif, {
    src: _static_images_loading_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./core/helper.js":
/*!************************!*\
  !*** ./core/helper.js ***!
  \************************/
/*! exports provided: isPassword, isPasswordNoon, isNull, isEmpty, isBlank, isPresent, isPhoneNumber, isEmail, isNumber, displayNumber, lessThan, inRange, validId, hiddenPhoneFormatter, creditCardFormatter, formatParser, numberParser, dateParser, idFormatter, ThaiDateFormatter, phoneFormatter, formatter, onlyEng, onlyThai, getValueFormOptions, url2Obj, obj2Url, normalizeDate, filterObj, removefilterObj, convertNaNtoZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPassword", function() { return isPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPasswordNoon", function() { return isPasswordNoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlank", function() { return isBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhoneNumber", function() { return isPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayNumber", function() { return displayNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThan", function() { return lessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inRange", function() { return inRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validId", function() { return validId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenPhoneFormatter", function() { return hiddenPhoneFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardFormatter", function() { return creditCardFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatParser", function() { return formatParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberParser", function() { return numberParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateParser", function() { return dateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idFormatter", function() { return idFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThaiDateFormatter", function() { return ThaiDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneFormatter", function() { return phoneFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatter", function() { return formatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyEng", function() { return onlyEng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyThai", function() { return onlyThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFormOptions", function() { return getValueFormOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url2Obj", function() { return url2Obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2Url", function() { return obj2Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDate", function() { return normalizeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterObj", function() { return filterObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removefilterObj", function() { return removefilterObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertNaNtoZero", function() { return convertNaNtoZero; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);



 // import moment from './moment-buddhist'
// import addressData from '../static/data/address_data.json'
// moment.locale('th')

var isPassword = function isPassword(value) {
  var upperRegex = /[A-Z]+/;
  var lowerRegex = /[a-z]+/;
  var alphabetRegex = /[0-9]+/;
  var scopeCharactorRegex = /^[A-Za-z0-9@#]+$/;
  return upperRegex.test(value) && lowerRegex.test(value) && alphabetRegex.test(value) && scopeCharactorRegex.test(value);
};
var isPasswordNoon = function isPasswordNoon(value) {
  var length = 6;
  return value.length >= length;
}; // export const getThaiDate = date => {
//   const d = new Date(date)
//   d.setFullYear(parseInt(d.getFullYear()) + 543)
//   return moment(d).format('ll')
// }

var isNull = function isNull(value) {
  return value === undefined || value === null;
};
var isEmpty = function isEmpty(value) {
  return value === '' || value instanceof Object && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(value).length === 0;
};
var isBlank = function isBlank(value) {
  return isNull(value) || isEmpty(value);
};
var isPresent = function isPresent(value) {
  return !isBlank(value);
};
var isPhoneNumber = function isPhoneNumber(value) {
  var s = value;

  if (!value) {
    return value;
  }

  if (s.length < 10) {
    return false;
  }

  var reg = /0[896][0-9]{8}/;
  return reg.test(s);
};
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var isEmail = function isEmail(value) {
  return emailRegex.test(value);
};
var intOrFloatRegex = /[+-]?[0-9][0-9]*/;
var isNumber = function isNumber(value) {
  return intOrFloatRegex.test(value);
}; // export const generateAddressStructure = addressData => {
//   var obj = []
//   addressData.map((province, i) =>
//     province[1].map((district, j) =>
//       district[1].map((subDistrict, k) =>
//         subDistrict[1].map((postcode, l) => {
//           var newObj = {
//             value: {
//               province: province[0],
//               district: district[0],
//               subDistrict: subDistrict[0],
//               postcode: `${postcode}`,
//             },
//             label: `${province[0]} >> ${district[0]} >> ${
//               subDistrict[0]
//             } >> ${postcode}`,
//           }
//           obj.push(newObj)
//         }),
//       ),
//     ),
//   )
//   return obj
// }
// export const addressStructure = generateAddressStructure(addressData)

var displayNumber = function displayNumber(value) {
  var nums = ('' + value).split('.');
  var onlyNums = nums[0].replace(/[^-\d]/g, '');
  var rgx = /(\d+)(\d{3})/;
  var x1 = onlyNums;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  if (nums.length > 1) x1 = x1 + '.' + nums[1];
  return x1;
};
var lessThan = function lessThan(value, maxValue) {
  var nums = ('' + value).split('.');
  var onlyNums = nums[0].replace(/[^\d]/g, '');
  var NewOnlyNums;
  if (onlyNums <= maxValue) NewOnlyNums = onlyNums;else NewOnlyNums = maxValue.toString();
  var rgx = /(\d+)(\d{3})/;
  var x1 = NewOnlyNums;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  if (nums.length > 1) x1 = x1 + '.' + nums[1];
  return x1;
};
var inRange = function inRange(a, b) {
  return function (value, previousValue) {
    if (!value) {
      return a;
    }

    if (_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(value) < a) {
      return a;
    }

    if (_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(value) > b) {
      return b;
    }

    var x1 = (!isNaN(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(value)) ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(value) : value) + '';
    return x1;
  };
};
var validId = function validId() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (id.length !== 13) return false;
  var checksum = id.split('').reduce(function (mem, _char, i) {
    if (i !== 12) {
      return mem + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(_char) * (13 - i);
    } else return mem;
  }, 0);
  checksum = (11 - checksum % 11) % 10;
  return checksum === _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(id[12]);
};
var hiddenPhoneFormatter = function hiddenPhoneFormatter(number) {
  if (!number) return ''; // NNN-NNN-NNNN

  var splitter = /.{1,3}/g;
  var hidden = /.{1,6}/;
  number = number.replace(/[^\d|^X]/g, '');
  if (number === '') return '';
  number = number.substring(0, 10);
  var arrayN = number.split('');

  var replaceX = function replaceX(collectX) {
    return collectX + 'X';
  };

  var collectArray = arrayN.reduce(replaceX, '');
  number = number.replace(hidden, collectArray.substring(0, 6));
  return number.substring(0, 7).match(splitter).join('-') + number.substring(7);
};
var creditCardFormatter = function creditCardFormatter(number) {
  var pattern = 'XXXX-XXXX-XXXX-XXXX';
  return formatter(pattern, number);
}; // Parser

var formatParser = function formatParser(string) {
  return string ? string.replace(/-/g, '') : '';
};
var numberParser = function numberParser(string) {
  return _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(string ? string.replace(/,/g, '') : '');
};
var dateParser = function dateParser(string) {
  return string ? string.replace(/\//g, '') : '';
}; // Formatter

var idFormatter = function idFormatter(number) {
  if (!number) return ''; // I-IIII-IIIII-II-I

  number = number.replace(/[^\d]/g, '');
  if (number === '') return '';
  var pattern = 'X-XXXX-XXXXX-XX-X';
  return formatter(pattern, number);
};
var ThaiDateFormatter = function ThaiDateFormatter(date) {
  if (!date) return '';
  date = date.replace(/[^\d]/g, '');
  if (date === '') return '';
  var pattern = 'XX/XX/XXXX';
  return formatter(pattern, date);
};
var phoneFormatter = function phoneFormatter(number) {
  if (!number) return ''; // NNN-NNN-NNNN

  var splitter = /.{1,3}/g;
  number = number.replace(/[^\d]/g, '');
  if (number === '') return '';
  number = number.substring(0, 10);
  return number.substring(0, 7).match(splitter).join('-') + number.substring(7);
};
var formatter = function formatter() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return pattern.split('').reduce(function (mem, c) {
    if (number.length < mem.i + 1) {
      return mem;
    }

    if (c === 'X') return {
      i: mem.i + 1,
      result: mem.result += number[mem.i]
    };else {
      return {
        i: mem.i,
        result: mem.result += c
      };
    }
  }, {
    i: 0,
    result: ''
  }).result;
};
var onlyEng = function onlyEng(value, previousValue) {
  var eng = /^[a-zA-Z]*$/;
  if (eng.test(value)) return value;
  return previousValue;
};
var onlyThai = function onlyThai(value, previousValue) {
  var eng = /^[ก-ฮะาิีึ์ุูโเแ์ำัฯืฺไใาๆ่้๊๋็]*$/;
  if (eng.test(value)) return value;
  return previousValue;
}; // export const getAge = birthdate =>
//   moment().diff(
//     typeof birthdate === 'string' && birthdate
//       ? moment(birthdate, 'DD-MM-BBBB')
//       : birthdate,
//     'years',
//   )

var getValueFormOptions = function getValueFormOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var selected = options.find(function (o) {
    return o.value === value;
  });
  if (selected) return selected.label;
  return '';
};
var url2Obj = function url2Obj(params) {
  return querystring__WEBPACK_IMPORTED_MODULE_3___default.a.parse(params);
};
var obj2Url = function obj2Url(params) {
  return querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
};
var normalizeDate = function normalizeDate(value) {
  return value;
};
var filterObj = function filterObj() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(object).filter(function (key) {
    return filter.includes(key);
  }).reduce(function (obj, key) {
    obj[key] = object[key];
    return obj;
  }, {});
};
var removefilterObj = function removefilterObj() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(object).filter(function (key) {
    return !filter.includes(key);
  }).reduce(function (obj, key) {
    obj[key] = object[key];
    return obj;
  }, {});
};
var convertNaNtoZero = function convertNaNtoZero(arg) {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(arg)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(arg);
};

/***/ }),

/***/ "./ducks/auth/index.js":
/*!*****************************!*\
  !*** ./ducks/auth/index.js ***!
  \*****************************/
/*! exports provided: setDataUser, getUserInfo, login, logout, getUserInfoSaga, loginSaga, logoutSaga, authWatcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataUser", function() { return setDataUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfoSaga", function() { return getUserInfoSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSaga", function() { return loginSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSaga", function() { return logoutSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authWatcher", function() { return authWatcher; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper */ "./ducks/helper.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);




var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getUserInfoSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(loginSaga),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(logoutSaga),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(authWatcher);




var SET_DATA_AUTH = 'SET_DATA_AUTH';
var GET_DATA_AUTH = 'GET_DATA_AUTH';
var LOGIN = 'LOGIN';
var LOGOUT = 'LOGOUT';
var setDataUser = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["Creator"])(SET_DATA_AUTH, 'data');
var getUserInfo = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["Creator"])(GET_DATA_AUTH);
var login = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["Creator"])(LOGIN, 'data');
var logout = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["Creator"])(LOGOUT);
function getUserInfoSaga() {
  var checkToken, response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getUserInfoSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          checkToken = sessionStorage.getItem('twittee');
          _context.next = 4;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/auth', {
            params: {
              token: checkToken
            }
          });

        case 4:
          response = _context.sent;

          if (!checkToken) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            user: response.data,
            isLogin: true
          }));

        case 8:
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log('getUserInfoSaga error', _context.t0);

        case 13:
          _context.prev = 13;
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            initialized: true
          }));

        case 16:
          return _context.finish(13);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10, 13, 17]]);
}
function loginSaga(_ref) {
  var data, response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function loginSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _ref.payload.data;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            isLoading: true
          }));

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000);

        case 5:
          _context2.prev = 5;
          _context2.next = 8;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/auth', data);

        case 8:
          response = _context2.sent;
          sessionStorage.setItem('twittee', response.data.token);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            user: response.data,
            isLogin: true
          }));

        case 12:
          _context2.next = 25;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](5);
          _context2.t1 = _context2.t0.response.status;
          _context2.next = _context2.t1 === 401 ? 19 : 22;
          break;

        case 19:
          _context2.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            errorMessage: 'email or password is incorrect'
          }));

        case 21:
          return _context2.abrupt("break", 25);

        case 22:
          _context2.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            errorMessage: 'server has been down'
          }));

        case 24:
          return _context2.abrupt("break", 25);

        case 25:
          _context2.prev = 25;
          _context2.next = 28;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            isLoading: false
          }));

        case 28:
          return _context2.finish(25);

        case 29:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[5, 14, 25, 29]]);
}
function logoutSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function logoutSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          sessionStorage.clear();
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            isLogin: false
          }));

        case 4:
          _context3.next = 8;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);

        case 8:
          _context3.prev = 8;
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            isLoading: false
          }));

        case 11:
          return _context3.finish(8);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 6, 8, 12]]);
}
function authWatcher() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function authWatcher$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(GET_DATA_AUTH, getUserInfoSaga);

        case 2:
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(LOGIN, loginSaga);

        case 4:
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(LOGOUT, logoutSaga);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
var initial = {
  user: {},
  initialized: false,
  isLogin: false,
  isLoading: false,
  errorMessage: ''
};
var reducer = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["createReducer"])(initial, function (state) {
  return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, SET_DATA_AUTH, function (_ref2) {
    var data = _ref2.data;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, data);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./ducks/helper.js":
/*!*************************!*\
  !*** ./ducks/helper.js ***!
  \*************************/
/*! exports provided: createReducer, Creator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creator", function() { return Creator; });
function createReducer(initialState, handlers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    return handlers(state)[action.type] ? handlers(state)[action.type](action.payload) : state;
  };
}
function Creator(type) {
  for (var _len = arguments.length, argNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    argNames[_key - 1] = arguments[_key];
  }

  if (argNames.length > 0) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var payload = {};
      argNames.forEach(function (arg, index) {
        payload[argNames[index]] = args[index];
      });
      return {
        type: type,
        payload: payload
      };
    };
  }

  return function (payload) {
    return payload ? {
      type: type,
      payload: payload
    } : {
      type: type
    };
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Landing */ "./components/Landing.js");
var _jsxFileName = "D:\\project\\next-v-9\\pages\\index.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1a9z5du-0"
})(["display:flex;justify-content:center;align-items:center;"]);

var Auth = function Auth(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.isLogin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./static/images/Twitter_bird.png":
/*!****************************************!*\
  !*** ./static/images/Twitter_bird.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADLCAYAAABHyo41AAAABmJLR0QA/wD/AP+gvaeTAAAdYklEQVR4nO3daZxU5Zk28Os61QubC9oQt6rqFhC3mBh8TUa2qgYVRAzSVRVEMSHyw9HomIzzahLNDNEkmsTRGJ2oWXTcTVWDJihqxKqidYIa18QFBaGrmrhAg1Gbprc693xoybSEpmt/TlXd/y9oc855LqDvPqee8yyEUg4xNfzumBr2HpmCPRGwJhJyBIRjSRkpwEgAo9H/KwF0APgAkA6Au/77LQjXWeQbqd6qN+ILD2k3+edxEpoOoCqXL9w2nrAbSfEL6AfwmTw30U6Rp20Lq2nbq2Ohw9/M8/VLhha6Kh4R+lckT4KNRSBOg8Bd1PaJNoisBtFcZ3sfj4SYKmr7Bmmhq4JrfCA5znbJOSQWQTDOdJ5PbAZ4B1O4M7rA87bpMLk65a73Rv5h0Wc6Qcqefl8LXRWMb/mmL1m2dYUAc+Dc7zUBpEXEdW085H7MdJhMLVsm1ppjE1+jcHY06A0OdpxT//JVCWsMtzYKeQWARtNZMiHAWoh1VakUfGO4tRHkdQIcT2JpNOD91WDHaqGrvJnR3Hacbds3gZhmOksuBFgL2N+NBxviprPsiX95YjJsXIX/+0G60yV9B68OjftwsHO00FXOfOEto8jOqwBeDKDKdJ48ERJ3VtvWpY+H3NtNhwGAxnDbiQL7KhCnDvw6IQ9Eg/Vn7e1cLXSVE39zaxOENwI41HSWAtlC8pvRgOd+I62LsLE5McsW/n8S/j0dYoHTngx6ntrbZfJS6P7m1tNigfpV+biWKg1zV74zoqO79wYIlprOUiSP9EnN4qdCB28tRmO+OzYNw0jXAovyrwJ8di+HPh0LeqcOdb2cC90fScwA8ASIBbGAN5zr9ZTz+Zo3HUnbioA41nSW4mJSiKZ4wPN8oVqY1tw2wRJZSshiAAcOmQhyWjRY/+jQx+VChP7m5J8ATALQCVqNsYD72ZyuqRytsTl5loj8EsAo01kM6QLlG7FA/e35umB/H8fO+RAsAjED6dal4MVY0HPCYO/OB8qp0H3hRIBEZEDLW0VcJ8VD7g25XFc5ky+SuJzANdC+HQhw6xjxXJTt6LrZq9bXdnVUzwRxNsB5AIZnHoJfjoU8v0/n0Jz+wfzh5FpQvrTbl19zSd/kvXX1qxIjQl9z8noC3zQdxWEiddJxTiR0TE86B8++Z/2+O2trTyNlHgSzAeybQ9uPxILe09M9OOtC90U2+QgrNshvR+ukY3a6fwHKuSbd9nz1fgeMuV2Ac0xncSICD9eO7Ak8etqE7t1/LxgWV7u1+QSxZSYgM0hMBlCTh2a7U7Q+2xJwr88gZ3Z8keQKQs4c/Ai5v068iypp4kC56f9GbbsLIgtNZ3EyAZ7YZ1j1vO4PLPYM3/n/IK7JpJwIYBqA/fPdHik/jAbqr8zknKwGN5yyYsPY3pQM8djAs7YxuQMiS9PpLFDO024lboJQi3wIBE7u6OppxXAeQFguFPbb/c2RtTU/yvQkK5uW+lJV5wKoHuo4AZY0Lk/ekE0byixfOHkFhBeYzlE6OAaAq8CN9NCShSvnHtKZ6YlZFboAi9I+VnCJL5K8Opt2lBm+SOJ8Un5gOofajfA70ab6F7M5NePP6I0PJMeJS7J5fXZ5LOj9SRbnqSLyhxOTQPwR+ek0Unki4KPxgHtOth+DM76jSxXOyKYhAD/2hROXZHmuKoKZ4bf3Q/+4CC1yZ9mQkuqv5tLXlfmjuwzVCTc4Ej9rDCe+ne35qrBSqPoNgAbTOdRAslXEmp3rGPuMCn32qvW1AE7KpUEhrvFHEhn3GqrCagwnLwDRZDqH+pRO0DU3HyNNMyr0rp01JwAYlmujAL7jjyR+DpGKH0rpBI3htkOFcq3pHOpTekgsyNfckYzeozOFqXkszYv9zW0j68KyVAfVGMbUdQBzGY6p8msnIU3RwNCz0vZm9qr1tTs7audZFqyMCl2IL+TS8B6u+PV2JkfNXrX+3D0NIVSF51uemCk2FpjOof6uw7LkjCeb6gcbXj4kX/OmIy1xLenaYZ9Ly/6gqnPYFzK6P/sjidcAHJ1tgEEJWmpgnemUJXsqRTD8Wk07R/0ZwETTWRQAYDshc6PB+j9meuLcle+M+Lir50wKl4KYiv5X530Ua3I05H4u7Tv6pNuerwYwIdMAaSGm9cJ+Zlpz25xMBuqr3GzlqMXUIncI+TNT1vzoAm/aa8xPuTcxuqYapws5r6OrdxbBEZ8eGSNXRUPu54AMBsz4wxsngq516QfPynYLnDfU+lcqd76YVHFbcp2DNlSoZGGR4efFQ2M7hjrQt3zzYZC+L9PmPBA+DNbPJlhdB8+sXf1fad/RCevQIsxMOcCGPOFrTiyJB7z3FL65Ctae+ApALXKzegi5Ihrw/udgg2GmLm89uNrmFAGmQDAFdup4gBziFr25DzULB3Zyp13oNnFwkd6F1VJwly+SnOh7zf0fy5bRLk6zlWPZMrHWIPkd0zkqmQj+hCp+PTbf++qurwXD4nrfThxRVcUpIpgMYCpsHP73nwDpFWAPLCx4qunTA2zSrl1fpPVSgtele3xeCB63qlxnPzn/sG1FbbfM+SKJ0wmsNJ2jQnUD/IllYaUIxgvkSAiOgvAIUI4EUJvT1YlLYgHvz3f/ctp3dAvcp+iTyolT7ZT9YmO4LbirU0HljsC5pjNUMAHkStvG9z711XzMYafcEgvU/0ORAxmMjLOZ40+arIlHaLf4I8kLzbRfXnwPbtofwFzTOSrYMBRmcc2oHOj9l8F+M+1Cp2BEfvJkpRaQ//JHEvecctd7Iw3mKHnstULIzzBm5RzrXNI3P+5n32AHpD/WnTLkijJFcHbv8O7n/OHEJNNBSpg+tpeXzS4Lc4ZadTntQhfQKcs3Hw1ibWOk9UpfTMplQ7+iOGXFhrFgbrMPlaN8mBLrtNVN3o1DHZjJo7uTFnisFvBqbm17alpzW2FG65Whnr4aP3TzhXLRCVqntoTcf0nn4Eymqf4ty0CFQ/mSS+yXGpuT/6xTXodGyh5341Qlp5uQQCZTWDP5jN6eVaTCGykit/ibE6t892+qNx3G0bTQy0GXiDUvnY0VB8rk0f3dzDMVE2exynrNF0lc/skEHDVA/xhpHmE6h8pJJ8h58ZD7sUxPTP89uojDCx0AMILAtfuOHvOiL5yYYjqMkzBl53ktAVVkO8TCl2MBz+PZnJzBZ/SRpbNDKnEsiRZ/c/LXM1ZsHnKP6UoglKNMZ1BZ2wZaM+JN3tXZXiDtQo+HxnaAaMu2IQMIkfPsVGqdL5I4v9JfxRH62F6SiLZUSqbmunZcZss9C97IpTFD6gjcyvbkK/5wMts16UufiC4wUXpeS/VWTW5ZUJ9z3WW4rrs8n2uDBh0Nyu/8kWSsMdx2oukwRUccaTqCSp+Aj7qkb3LLWYfm5Sk6o0In+Uw+GjVLfEL7GX+k9b6ZyxOHm05TDL47Ng0DoH0VpYJy/Rhxzx1qWGtGl8zk4Knhd8dUsef9TM9zsB6Qd7MP10QXeNJeq6vU+O57p47VvTnt9KGKoltEvhEP1f8m3xfO6I7+VOjgrQReHfrIklEDkfPEJev8zcl7/c2JY0wHKgh2jzIdQQ1pk5BTClHkQBZ7r9nEI4UIYlgVRBZC8Gd/JLm8cXlrWb1ztl1V+5jOoAZHkYekyv5CPOApWB9Y5pss2mVZ6LtYgMwXmy/4w4nHGiOts5ctk6z2kHcSl8vWXVicinJ9NOidHz+zoaBzSTL+Jh4Dz1oA7xUgi7MQpwq4as2xybd8kdZLp9ybGG06UrYsmyX/w6ps2Xwzl+2Q05XxN0AkxBQo9xUijCMJxhG8rroGmxsjiV/5wps+bzpSplIiTppirAYg6CpGO1n9pBdb7s53kBIwQoAlpPWSP5x42hdJnH9quO0A06HSYrHLdAS1Z7ZlF+VpK6tG4qGGlyF4Md9hSgYxmcCtPbTfaQy3Puhvbm36ZO94R7L77B2mM6g9s2wWpaM0+58mxI15zFGqaoWcB2Fz146a9xsjiV/5w23Tg2EpyuNYusSqdepaAqpIsi70Oul4AHD6HPWi2k+AJaAdb2fyPX8kcWdjJBGcfc964z3eM14/aBsA3YPeiVicFXlzGuHmjyQuA/DjPGUpVz0CrLGAlX0iD7eE6jeZCOGPJDYDONRE22pv5EexYP0VhW4lp6mbo4ZV39zR1fuvAD6TpzzlqIbAyQKc7CJ/7m9ufYvCFgha4Eq1RJsOTxQnhmwAqIXuMBR+XIx2cir0lXMP6WyMJK4V4IZ8BSp7wiMEOALEEtgu+COJBIgWEWmh2E/Fgg1vFeS9KvkmBNPzfl1VEnJejOFA6fjFNo66UABddjk7XggWEVwEuuBvTn4kkcQrBP9Myis2+BI+Tr0aX9yQ0ysysfE6y2UqUhkRC53FaCfnQo+Ejunxh1u/BfLhfARS2JfAVECmigCEAKOsPn84sY6UV0G8LcBGi9gksDcemGrYPHAf7MFYlD9J2Uw6LB+02VuUdvJ1ocZw64NCzsvX9VTaegEkBNhEyGaQ7bBlK2m1i2AbabeL2NtSqdpOV1XfRuThh7vKI8H5sZD3l4VuJm//6DbkAoLTAJTGaLHyUQ1gPIHxAAEBQEIgn/wvAbrgqhp0/z1llHQUo5W8Db+LhxreI3lRvq6nVCUQ8qNitJPXcbbRgOd+AHfl85pKlTOXyLZitJP3AfWjhlVfACmrVWiUKpiUJR8Uo528F/rKuYd0imUHAThlm2WlHKvGSm0vRjsFmSIXDzSso8h8AD2FuL5S5WLb1r+V5h19l2ioPiqQrwOO2lddKSf5+IXzTyjKe/SCTnqPB+vvFcG3CtmGUiWLxdu4NO1C9zcnQtkslBgPeW8UyL9lep5SZc9mslhNpV+4grvXHJN4ydecnJdpwceD9f9J4F8A2JkGVKps0YmFDuwEeBxFHlxzTPJ1fzixdO7Kd0ake3I06L2J5DnQDjqlAACEFG134gwKnQNfl00EcVtHV2+brzl5kz+cmJTOFaIBz/0Q6xRAdHsgVfGEUrQ7etqTWvyRxBvAXnbkpLwF4UOWyENTX/c+u2wZB31Mb1y+0Qvb9aAAx2cWV6nyIRZOjjd5VxejrfQLPZx4AUS6WxV9IIKnCcZJ+5na7t5XHz1nwqfG9P5TuG34MMpPAbkwkxxKlQsRa0I85N5QjLbSnr1GSFLAdAt9NIm5gMwVEF21NeJvTmyk4A2bbIXYrZTUuyBWEfibCC/PJItSZaB7DA4r2vqBaReXTWsDsx/7QgjGCTCOIgDYfw8XHU2jKhOBt9JZMCRf0u6MswQbCxlEqUoiwBvFbC/tQrdBI8sUK1WO6NRCh4s69VSpPBHi9WK2l3ahx5sO2wxgcwGzKFUxUrbl0Ds6AALPFCqIUhWka8cH768rZoMZFboteLpQQZSqGMKXizU9dZdM7+ha6ErlivJcsZvMqNBjQc+L0M/pSuWEgueL3WZm88tJEfKhAmVRqiIIUs6+owOAZdsPFiKIUhXiw1iw4a1iN5pxoR8I7xqdZqpU1p4tyG65Q8i40CMhpgTWnYUIo1T54xoTrWa1OKSVwq3QZaGUyhhhx020m1WhRxd43obgsXyHUarMfWzXeYveEQfksNwzKTfnM4hS5U7Ap+N+GtnWNutCjwa8jwHFfx+oVKkiJG6q7ew3cCAF5JV5zKJUWbMsxoy1ncvJsYDncUCM9CIqVWK2TP2L+wVTjee+JZPFK6ArQim1VyRW7W1l5ELLudBjTd7/AXl7PsIoVa5s8Hcm28/LJos1Ni8D8H4+rqVUGeqGPawo67cPJi+F/njIvV3Ab+bjWkqVH4nFQ2M7TCbI27bJ8aDnAQiW5+t6SpULivV70xnyuj+6C33nAbostFID2ADLq9BXh8Z9SEuCALryeV2lSpc8FQ25/2o6RV4LHQCiTfUvCuTifF9XqZIkvM90BKAAhQ4A8WD9r4W4thDXVqqE9FpVLkf0WxWk0AEg3uT5LoB7C3V9pUrAH56cf9g20yGAAhY6SKmTjq9DsKpgbSjlZCKOeGwHClnoACKhY3q6YAUAPFLIdpRyoA7BCOO97bsUtNABYG3IvfOj7VvPBOT+QrellGOQvzU9SGagghc6ALxw/gm9deJdBOKXxWhPKdMs4jbTGQZisRv0hROXkLgOQFWx21aqGAi8FA16v2A6x0BFuaMPFA95b4RYMwFsKXbbShUF6bgn16IXOgDEQu41YrkmQfdyU+Wno7ar2zG97bsYKXSgf7/16a95phP4FoBOUzmUyivyt4+eM+Ej0zF2V/TP6HviC7eNJ+zfgJhmOotSOZCUWJ9rCbn/YjrI7hxR6AAAETYub1sgIj8E0GA6jlIZEzweC3lnmY6xJ8Ye3f8BKdGA5/466ThSIP8GoN10JKUyYvEG0xEG45w7+m5m37N+366a2iWw5GII6k3nUWqvhK/Egu7jTWygmA7HFvouwbC4tiJ5JolLAExGCWRWFemrsaD3LtMhBlNSReO7f1M9q6wQBF8B4agBCaqivVsnHfWR0DE9poMMpqQKfSBfuG28hdQskNMFmAZgrOlMqkIJL42FPNebjrE3JVvou8wMv71fCq4pQus8QuahDP5MqqS82yXWuLUh907TQfam6OPN/ZHEnQB2ErLBprXBZctbrqrednSM2vGHcw/asadz5q58Z8SH3alDq0UOssV2g9aREDkaxLEpYAIAi7pZjDKAwDVOL3LAzMSS9wBcJiAoApuAnaoGhnfDH0kAwAcgOiAYgf7Xf/t3dPXSBcAGABKA6H1bOcFf7Q77V6ZDpKPo79HFxbuHOGQ0BG4ABwIYDS1p5VBCuSa+uKEkVjwu/uy1+Z5XAbxc7HaVyi8mh4/o/bXpFOkyMjKOxC9MtKtU3tD+/qOnTeg2HSNdRgrd/ti+G8C7JtpWKmfCV6a/6v1v0zEyYaTQ44sbugjRu7oqTZRLTe51ng1jk1qqxfULAI6bt6vU3ohgZSzofdJ0jkwZK/THQ+7tgO7mokpKHyz7MtMhsmF0mmqXWD8D0WYyg1LpEvLWeKBhnekc2TBa6GtD7p0CfM9kBqXSI1tdlrXMdIpsGV94It7kuQuCFtM5lNobCi91yj5q2TBe6CAlZVlLADh+vLCqWE9Gg557TIfIhflCB9AScK+H8ErTOZTag64UrQucunJMuhxR6ABQB/eNAOOmcyg1ECE/bAm415vOkSvHFHokxJTV27cAwDumsygFACTeqB3Z+1PTOfLBMYUOAE8uPPx9EXwFQK/pLKripQTW4lIaz743jip0AIiHvE9TeInpHKqyCXhNLOB+1nSOfHFcoQNANOS5Raij5pQhghfHyMdXm46RT85d1EGE/ubkHQC+ajqKqihdIE6IBbyvmQ6ST468owMASKkTz3kAIqajqApCfrfcihxwcqGjvye+TjxnAXDswviqnDA+/VX3jaZTFIJzH90HEqG/OXEzwAtNR1Fl6/0+S45/qqm+LBdEcfQd/e9IiQXrvwHgcgAp03FU2UlRZGG5FjlQKoX+iVjQ+xNC5gL40HQWVT4IWRYN1UdN5yik0nh0340/vHEiaIUBHmc6iyp18lgs4D2t1MeyD6Wk7ui7xEKHvzlsZO+JIH6KT/Z1UCpzTEpvzaJyL3KgRO/oA/nDbdNB+3YAh5vOokpKJ8XyR0Pu50wHKYaSvKMPFAu513SJdSwh34POaVfpEZJLKqXIgTK4ow80M/y2x6brxwKGUAY/xFRhEPh+NOhdZjpHMZVVoe/ib04cQ5ErteDV7gh5IBrwLqyEz+UDlWWh79LfO+/6FoCFAPYxnUeZJs+OGlbTuHLuIZ2mkxRbWRf6Lr7wllFg5wICSwB+0XQeZcTmqj5+8YmzPBW5sElFFPpA08KtDRZ4Bom5AKbDzB7xqqhkq4jrpHjIvcF0ElMqrtAH8j24aX/2cjIsnggbJ4H4IvQRv9x8SEsao031L5oOYlJFF/o/EOG0B945rLqmd3wqhcNhcbwlqBNgPwhGgzgEwNGmY6q0dQrsOfFgQ9x0ENO00NPkC2/6PGk9AGCi6SwqLX0QNsVCnt+bDuIE+uopDf5wYilprYUWealICeRrWuT/Rzui9mLKvYnR1bW4Bf0r06rSkKJgcSxUf6/pIE6ij+6DaIwkTxHI7QAONZ1FpS1FclE04LnfdBCn0ULfjS+8ZRTZdS0gF0L/fkpJrwgWxkPeZtNBnEi/kQfwRRKnE7gZgNd0FpWRHiG/Eg94HjIdxKn0MzqAqctbD64S3qCfxUvSTgFC8YDnYdNBnKyi7+jB8Gs1WznyYoJXAtjfdB6Vse2EzI0G6/9oOojTVWyh+8Otc0D+DMB401lUVjZBUrNjocPfNB2kFFRcoc8It/6TTf4AQKPpLCpLghcF9px4qOE901FKRcUU+ozmtuNStv2DTyazqJIlj4mMCMZDYztMJyklZV/o/ua2L9JOfVvIM6AjAUvdbVLnuSjuZ5/pIKWmPAtdhL4VyRm08W0AM0zHUTnrFshF8WD9r00HKVVlVei+8JZRFroWCeUi6CyzcvFXsexAvKnhGdNBSllZFLo/nJgkFr9GkUUA9jOdR+WJ4H8EdkA73XJXsoV+yooNY3vtmrMpsliAz5rOo/KMcstH29oveeH8E3pNRykHJVXop6zYMLa3r3qeEAECfujIvnK0HZSlsUD9ctNByonjC31auO2zLqRmgZgDcAoAl+lMqlAYT/W5zm0569A200nKjeMKvXH5Rq8trqkEfRA5FcBhpjOpguul4N+nve75ybJl1L30CsBooc++Z/2+PbW1nxPIJIGcCHAqtLArCoH1tHj2k02eP5nOUs6KUugzVmw+MCW9E2hbRwAykeARQjkOwvHQQSyVqg+Un1d3Dvv3P5x70A7TYcod/eHkGUK5yOoflLBVyPcJboEtO4T8yIKkhLJDyB6XzW5bpFNcGA0ArhQoxP4CDJf+VVL3B7C/BdQJxA3iYAjdAIab/WMqRxG+IhaWxAOe501HqRQEPpmPbfNnAEKG86jythPA1VLn+akOYy2uTz26+5uTp0LkZujUTZV3jKfIpS0B93rTSSrRP3xG18UYVH4xSeLb0Sb3A5W2g6mTDNoZ57vvnTpW93wf4PnQd9cqcx0ivLYbvH5tyL3TdJhKN2Sv+4zmtuNE7B8KcHoxAqmS1wfIL6W35j/iCw9pNx1G9Uv79VpjpPUkAX4EcHohA6mS9ogluOzJkPd100HUp2X8Hr1/YwP7Kt1nXO1C4GFavEoHvThX1gNmfMsTM2nLlXqHr1hC4BGb/L6+D3e+nEfGNUZaT7JhXUnIrHxcTzmeAFgp5NVa4KUjb4U5I5w42rZwCQTnABiRr+sqx/gY4F2Qvpt0ieXSk/c7cP9rub6ln+xdphsUlr4NBP6rtrvn9kfPmfCR6TAqOwV71PbFpIrtbXMgshTELOjklVJiQ/AEIDdNf937qE4dLX1F+Uw9M/y2J2VVnQfh1wDxFKNNlZV1FNxpoe++1aFxSdNhVP4UtfNs2TKx1hy9eSppnyNAADrE1gFkq9D6LYA7tXOtfBnrJZ+9an1t147qOSBDEJwGYB9TWSrQdgKrBGz+aPuWVboAY/lzxOsw3x2bhnEkZ4BoAjgXQJ3pTGVoA8Hf2Ug9jLr6p3WaaGVxRKEPFAyLazsSJ9q0ZovILBKToB152egR4FkAj7gEK3VYamVzXKHv7tRw2wHdkJNJ8ZOYJoKjTGdyqC4InoOFOG1ZM3J4zTMr5x7SaTqUcgbHF/ruTlmxYWxvqmoKyWki8iWAnwMwzHQuA94D5GUBn6FYcdnR92x8cUOX6VDKmUqu0Hc36bbnq/cZfeAxIE8geAIgnwd4FIB9TWfLExuUDRC+TMFLNqyXgb6XdZsilYmSL/TB9L+7rz5KxD6W4EQIGkDUA/AAqDEcb3d9AJIQbISFjSLYaKH/V8HwN3UvcJWrsi30wSxbJtbTR288TFjttSkHAzhIhGMI+1CAYwGMhmBfEPug/6lgf2T292QD+BAAQHRAsA3AFpDtEGmHYBvIdkK22rC3VllWsu8AT1J7wVUh/S+ITuuN/D3T2gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/images/Twitter_bird_white.png":
/*!**********************************************!*\
  !*** ./static/images/Twitter_bird_white.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Twitter_bird_white-9b1a41bbd5e804237e94aaff5ab2fb10.png";

/***/ }),

/***/ "./static/images/loading.gif":
/*!***********************************!*\
  !*** ./static/images/loading.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/loading-66b15416f12a9338e4f0c53e26437474.gif";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\next-v-9\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "React":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("React");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map