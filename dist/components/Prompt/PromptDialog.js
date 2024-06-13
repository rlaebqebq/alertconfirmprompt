"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Prompt = _interopRequireDefault(require("./Prompt"));
var _PromptContext = _interopRequireDefault(require("./PromptContext"));
var _jsxRuntime = require("react/jsx-runtime");
const PromptDialog = _ref => {
  let {
    children
  } = _ref;
  const [state, setState] = (0, _react.useState)();
  const prompt = (0, _react.useCallback)((message, options) => {
    return new Promise(resolve => {
      setState({
        message: message !== null && message !== void 0 ? message : '',
        onClickOK: result => {
          setState(undefined);
          resolve(result);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(null);
        },
        options: {
          title: (options === null || options === void 0 ? void 0 : options.title) !== undefined ? "".concat(options === null || options === void 0 ? void 0 : options.title) : undefined,
          defaultValue: (options === null || options === void 0 ? void 0 : options.defaultValue) !== undefined ? "".concat(options === null || options === void 0 ? void 0 : options.defaultValue) : undefined,
          placeholder: (options === null || options === void 0 ? void 0 : options.placeholder) !== undefined ? "".concat(options === null || options === void 0 ? void 0 : options.placeholder) : undefined
        }
      });
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_PromptContext.default.Provider, {
    value: (0, _react.useMemo)(() => ({
      prompt
    }), [prompt]),
    children: [children, state && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Prompt.default, {
      message: state.message,
      onClickOK: state.onClickOK,
      onClickCancel: state.onClickCancel,
      options: state.options
    })]
  });
};
var _default = exports.default = PromptDialog;