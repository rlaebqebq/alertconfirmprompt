"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const AlertContext = /*#__PURE__*/(0, _react.createContext)({
  alert: () => new Promise((_, reject) => {
    reject();
  })
});
var _default = exports.default = AlertContext;