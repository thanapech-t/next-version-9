webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper */ "./ducks/helper.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
          checkToken = sessionStorage.getItem('loginPlayground');
          _context.next = 4;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/auth', {
            token: checkToken
          });

        case 4:
          response = _context.sent;
          console.log('response', response);

          if (!checkToken) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            isLogin: true
          }));

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);

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
  }, _marked, null, [[0, 11, 13, 17]]);
}
function loginSaga(_ref) {
  var data, response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function loginSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = _ref.payload.data;
          console.log('data', data);
          _context2.prev = 2;
          _context2.next = 5;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/auth', {
            data: data
          });

        case 5:
          response = _context2.sent;
          sessionStorage.setItem('loginPlayground', true);
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            user: {
              id: data.id
            },
            isLogin: true
          }));

        case 9:
          _context2.next = 13;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);

        case 13:
          _context2.prev = 13;
          _context2.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(setDataUser({
            isLoading: false
          }));

        case 16:
          return _context2.finish(13);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 11, 13, 17]]);
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
  routes: []
};
var reducer = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["createReducer"])(initial, function (state) {
  return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, SET_DATA_AUTH, function (_ref2) {
    var data = _ref2.data;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, data);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.6d3731f267c8c6d4c1b4.hot-update.js.map