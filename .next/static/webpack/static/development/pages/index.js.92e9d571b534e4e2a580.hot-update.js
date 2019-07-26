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
})(["position:fixed;display:flex;align-items:center;justify-content:flex-end;top:0;width:100%;height:80px;background:linear-gradient(to bottom,#1c92d2,#f2fcfe);"]);
var CustomButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_share_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "main__CustomButton",
  componentId: "sc-9rlwu4-2"
})(["color:black;margin:0 10px;background:linear-gradient(to bottom,#1c92d2,#f2fcfe);:hover{background:linear-gradient(to top,#43c6ac,#f8ffae);}"]);
var AvatarImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "main__AvatarImg",
  componentId: "sc-9rlwu4-3"
})(["width:50px;"]);
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
  console.log('sadsad', user);
  return React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomButton, {
    type: "primary",
    onClick: function onClick() {
      return logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Log out"));
});

var Layout = function Layout(WrappedComponent) {
  return function () {
    return React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderComponents, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), React__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.92e9d571b534e4e2a580.hot-update.js.map