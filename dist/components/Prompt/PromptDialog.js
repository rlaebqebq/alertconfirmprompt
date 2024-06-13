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
var _Prompt = _interopRequireDefault(require("./Prompt"));
var _PromptContext = _interopRequireDefault(require("./PromptContext"));
var _jsxRuntime = require("react/jsx-runtime");
var PromptDialog = function PromptDialog(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var prompt = (0, _react.useCallback)(function (message, options) {
    return new _promise["default"](function (resolve) {
      setState({
        message: message !== null && message !== void 0 ? message : '',
        onClickOK: function onClickOK(result) {
          setState(undefined);
          resolve(result);
        },
        onClickCancel: function onClickCancel() {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_PromptContext["default"].Provider, {
    value: (0, _react.useMemo)(function () {
      return {
        prompt: prompt
      };
    }, [prompt]),
    children: [children, state && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Prompt["default"], {
      message: state.message,
      onClickOK: state.onClickOK,
      onClickCancel: state.onClickCancel,
      options: state.options
    })]
  });
};
var _default = exports["default"] = PromptDialog;