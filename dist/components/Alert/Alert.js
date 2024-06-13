"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var Alert = function Alert(_ref) {
  var message = _ref.message,
    onClose = _ref.onClose,
    options = _ref.options;
  (0, _react.useEffect)(function () {
    var handleEscape = function handleEscape(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return function () {
      return document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "dialog-container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "overlay",
      onClickCapture: function onClickCapture(e) {
        return e.stopPropagation();
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "dialog",
      children: [(options === null || options === void 0 ? void 0 : options.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "title",
        children: options.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text",
        children: message
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "buttons",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          onClick: onClose,
          autoFocus: true,
          children: "ok"
        })
      })]
    })]
  });
};
var _default = exports["default"] = Alert;