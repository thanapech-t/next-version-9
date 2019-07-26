webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _share_Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share/Field */ "./components/share/Field/index.js");
/* harmony import */ var _share_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share/Loading */ "./components/share/Loading.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _ducks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ducks/auth */ "./ducks/auth/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "D:\\project\\next-v-9\\components\\Login.js";









var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "Login__Container",
  componentId: "sc-1tmy69m-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;overflow:hidden;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Login__Form",
  componentId: "sc-1tmy69m-1"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
var CustomField = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_share_Field__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Login__CustomField",
  componentId: "sc-1tmy69m-2"
})(["margin:0 auto 30px;width:100%;max-width:300px;"]);
var Submit = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_9__["Button"]).withConfig({
  displayName: "Login__Submit",
  componentId: "sc-1tmy69m-3"
})(["width:fit-content;margin:0 auto;"]);
var Error = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Login__Error",
  componentId: "sc-1tmy69m-4"
})(["color:red;margin-bottom:15px;"]);

var validate = function validate(value) {
  console.log('value', value);
  var error = {};

  if (!value.email) {
    error.email = 'please fill';
  }

  if (!value.password) {
    error.password = 'please fill';
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
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    onSubmit: handleSubmit(function (values) {
      return login(values);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomField, {
    name: "email",
    type: "text",
    placeholder: "email",
    addonBefore: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      type: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
        lineNumber: 70
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), errorMessage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Error, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, errorMessage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submit, {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
  login: _ducks_auth__WEBPACK_IMPORTED_MODULE_8__["login"]
}), Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: 'login',
  validate: validate,
  onChange: function onChange(values, _, props) {
    props.errorMessage !== '' && props.setData({
      errorMessage: ''
    });
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (enhancer(Login));

/***/ })

})
//# sourceMappingURL=index.js.e86f2b34aed3815d0c39.hot-update.js.map