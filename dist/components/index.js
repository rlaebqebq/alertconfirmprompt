"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
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
var useAlertConfirmPrompt = exports.useAlertConfirmPrompt = function useAlertConfirmPrompt() {
  var _useContext = (0, _react.useContext)(_AlertContext["default"]),
    alert = _useContext.alert;
  var _useContext2 = (0, _react.useContext)(_ConfirmContext["default"]),
    confirm = _useContext2.confirm;
  var _useContext3 = (0, _react.useContext)(_PromptContext["default"]),
    prompt = _useContext3.prompt;
  return {
    alert: alert,
    confirm: confirm,
    prompt: prompt
  };
};
var AlertConfirmPromptProvider = exports.AlertConfirmPromptProvider = function AlertConfirmPromptProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AlertDialog["default"], {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConfirmDialog["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PromptDialog["default"], {
        children: children
      })
    })
  });
};