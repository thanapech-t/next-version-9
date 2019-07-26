webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ducks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ducks/auth */ "./ducks/auth/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/main */ "./components/layouts/main.js");
var _jsxFileName = "D:\\project\\next-v-9\\components\\Landing.js";







var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Landing__Container",
  componentId: "sc-7746ay-0"
})(["display:flex;justify-content:center;align-items:center;"]);
var LogoutButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"]).withConfig({
  displayName: "Landing__LogoutButton",
  componentId: "sc-7746ay-1"
})(["width:fit-content;margin:0 auto;"]);

var Landing = function Landing(_ref) {
  var logout = _ref.logout;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoutButton, {
    type: "primary",
    onClick: function onClick() {
      return logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "LogoutButton"));
};

var enhancer = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return {};
}, {
  logout: _ducks_auth__WEBPACK_IMPORTED_MODULE_2__["logout"]
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(_layouts_main__WEBPACK_IMPORTED_MODULE_6__["default"])(enhancer(Landing)));

/***/ }),

/***/ "./components/layouts/header.js":
false,

/***/ "./components/layouts/main.js":
/*!************************************!*\
  !*** ./components/layouts/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "D:\\project\\next-v-9\\components\\layouts\\main.js";


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "main__Container",
  componentId: "sc-9rlwu4-0"
})(["position:relative;display:flex;justify-content:center;width:100vw;height:100vh;overflow:hidden;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "main__Header",
  componentId: "sc-9rlwu4-1"
})(["position:fixed;top:0;width:100%;height:50px;background-color:red;"]);

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), children);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.2c749a95fbd63668ea34.hot-update.js.map