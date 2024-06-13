"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _react = require("react");
var PromptContext = /*#__PURE__*/(0, _react.createContext)({
  prompt: function prompt() {
    return new _promise["default"](function (_, reject) {
      reject();
    });
  }
});
var _default = exports["default"] = PromptContext;