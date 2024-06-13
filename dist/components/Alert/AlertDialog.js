"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));
var _react = require("react");
var _Alert = _interopRequireDefault(require("./Alert"));
var _AlertContext = _interopRequireDefault(require("./AlertContext"));
var _jsxRuntime = require("react/jsx-runtime");
var AlertDialog = function AlertDialog(_ref) {
  var _state$options;
  var children = _ref.children;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var alert = (0, _react.useCallback)(function (message, options) {
    return new _promise["default"](function (resolve) {
      setState({
        message: message !== undefined ? "".concat(message) : '',
        onClose: function onClose() {
          setState(undefined);
          resolve(undefined);
        },
        options: {
          title: (options === null || options === void 0 ? void 0 : options.title) !== undefined ? "".concat(options === null || options === void 0 ? void 0 : options.title) : undefined
        }
      });
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AlertContext["default"].Provider, {
    value: (0, _react.useMemo)(function () {
      return {
        alert: alert
      };
    }, [alert]),
    children: [children, state && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert["default"], {
      options: {
        title: state === null || state === void 0 || (_state$options = state.options) === null || _state$options === void 0 ? void 0 : _state$options.title
      },
      message: state.message,
      onClose: state.onClose
    })]
  });
};
var _default = exports["default"] = AlertDialog;