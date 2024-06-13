"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const ConfirmContext = /*#__PURE__*/(0, _react.createContext)({
  confirm: () => new Promise((_, reject) => {
    reject();
  })
});
var _default = exports.default = ConfirmContext;