"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAlertConfirmPrompt = exports.AlertConfirmPromptProvider = void 0;
var _react = require("react");
var _AlertDialog = _interopRequireDefault(require("./Alert/AlertDialog"));
var _ConfirmDialog = _interopRequireDefault(require("./Confirm/ConfirmDialog"));
var _PromptDialog = _interopRequireDefault(require("./Prompt/PromptDialog"));
var _ConfirmContext = _interopRequireDefault(require("./Confirm/ConfirmContext"));
var _AlertContext = _interopRequireDefault(require("./Alert/AlertContext"));
var _PromptContext = _interopRequireDefault(require("./Prompt/PromptContext"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
const useAlertConfirmPrompt = () => {
  const {
    alert
  } = (0, _react.useContext)(_AlertContext.default);
  const {
    confirm
  } = (0, _react.useContext)(_ConfirmContext.default);
  const {
    prompt
  } = (0, _react.useContext)(_PromptContext.default);
  return {
    alert,
    confirm,
    prompt
  };
};
exports.useAlertConfirmPrompt = useAlertConfirmPrompt;
const AlertConfirmPromptProvider = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AlertDialog.default, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConfirmDialog.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PromptDialog.default, {
        children: children
      })
    })
  });
};
exports.AlertConfirmPromptProvider = AlertConfirmPromptProvider;