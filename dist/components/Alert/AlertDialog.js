"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Alert = _interopRequireDefault(require("./Alert"));
var _AlertContext = _interopRequireDefault(require("./AlertContext"));
var _jsxRuntime = require("react/jsx-runtime");
const AlertDialog = _ref => {
  var _state$options;
  let {
    children
  } = _ref;
  const [state, setState] = (0, _react.useState)();
  const alert = (0, _react.useCallback)((message, options) => {
    return new Promise(resolve => {
      setState({
        message: message !== undefined ? "".concat(message) : '',
        onClose: () => {
          setState(undefined);
          resolve(undefined);
        },
        options: {
          title: (options === null || options === void 0 ? void 0 : options.title) !== undefined ? "".concat(options === null || options === void 0 ? void 0 : options.title) : undefined
        }
      });
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AlertContext.default.Provider, {
    value: (0, _react.useMemo)(() => ({
      alert
    }), [alert]),
    children: [children, state && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert.default, {
      options: {
        title: state === null || state === void 0 || (_state$options = state.options) === null || _state$options === void 0 ? void 0 : _state$options.title
      },
      message: state.message,
      onClose: state.onClose
    })]
  });
};
var _default = exports.default = AlertDialog;