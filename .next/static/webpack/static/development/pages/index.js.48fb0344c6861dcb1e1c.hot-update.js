webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layouts/main.js":
/*!************************************!*\
  !*** ./components/layouts/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! React */ "./node_modules/React/index.js");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ducks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ducks/auth */ "./ducks/auth/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _share_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/Button */ "./components/share/Button.js");
var _jsxFileName = "D:\\project\\next-v-9\\components\\layouts\\main.js";






var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "main__Container",
  componentId: "sc-9rlwu4-0"
})(["position:relative;display:flex;justify-content:center;width:100vw;height:100vh;overflow:hidden;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "main__Header",
  componentId: "sc-9rlwu4-1"
})(["position:fixed;display:flex;align-items:center;justify-content:flex-end;top:0;width:100%;height:80px;background:linear-gradient(to left,#2193b0,#6dd5ed);"]);
var CustomButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_share_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "main__CustomButton",
  componentId: "sc-9rlwu4-2"
})(["margin:0 10px;background:linear-gradient(to right,#43c6ac,#f8ffae);:hover{}"]);
var enhancer = Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return {};
}, {
  logout: _ducks_auth__WEBPACK_IMPORTED_MODULE_2__["logout"]
}));
var HeaderComponents = enhancer(function (_ref) {
  var logout = _ref.logout;
  return React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomButton, {
    type: "primary",
    onClick: function onClick() {
      return logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Log out"));
});

var Layout = function Layout(WrappedComponent) {
  return function () {
    return React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderComponents, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.48fb0344c6861dcb1e1c.hot-update.js.map