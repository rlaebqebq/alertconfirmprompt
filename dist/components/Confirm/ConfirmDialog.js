"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Confirm = _interopRequireDefault(require("./Confirm"));
var _ConfirmContext = _interopRequireDefault(require("./ConfirmContext"));
var _jsxRuntime = require("react/jsx-runtime");
const ConfirmDialog = _ref => {
  var _state$options;
  let {
    children
  } = _ref;
  const [state, setState] = (0, _react.useState)();
  const confirm = (0, _react.useCallback)((message, options) => {
    return new Promise(resolve => {
      setState({
        message: message !== null && message !== void 0 ? message : '',
        onClickOK: () => {
          setState(undefined);
          resolve(true);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(false);
        },
        options: {
          title: (options === null || options === void 0 ? void 0 : options.title) !== undefined ? "".concat(options === null || options === void 0 ? void 0 : options.title) : undefined
        }
      });
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ConfirmContext.default.Provider, {
    value: (0, _react.useMemo)(() => ({
      confirm
    }), [confirm]),
    children: [children, state && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Confirm.default, {
      message: state.message,
      onClickOK: state.onClickOK,
      onClickCancel: state.onClickCancel,
      options: {
        title: state === null || state === void 0 || (_state$options = state.options) === null || _state$options === void 0 ? void 0 : _state$options.title
      }
    })]
  });
};
var _default = exports.default = ConfirmDialog;