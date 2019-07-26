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
/* harmony import */ var _core_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/helper */ "./core/helper.js");

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
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    onSubmit: handleSubmit(function (values) {
      return login(values);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
        lineNumber: 65
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
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
        lineNumber: 71
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), errorMessage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Error, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, errorMessage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submit, {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "./node_modules/core-js/library/fn/parse-float.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/library/modules/es6.parse-float.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-float.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-float.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/library/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ })

})
//# sourceMappingURL=index.js.a2d8534011a413ba1a23.hot-update.js.map