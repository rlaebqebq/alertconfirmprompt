"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var Prompt = function Prompt(_ref) {
  var message = _ref.message,
    onClickOK = _ref.onClickOK,
    onClickCancel = _ref.onClickCancel,
    options = _ref.options;
  (0, _react.useEffect)(function () {
    var handleEscape = function handleEscape(e) {
      if (e.key === 'Escape') {
        onClickCancel();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return function () {
      return document.removeEventListener('keydown', handleEscape);
    };
  }, [onClickCancel]);
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var target = e.target;
    onClickOK(target.input.value);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "dialog-container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "overlay",
      onClickCapture: function onClickCapture(e) {
        return e.stopPropagation();
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      className: "dialog",
      onSubmit: handleSubmit,
      children: [(options === null || options === void 0 ? void 0 : options.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "title",
        children: options.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text",
        children: message
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "input",
        className: "input",
        type: "text",
        defaultValue: options === null || options === void 0 ? void 0 : options.defaultValue,
        placeholder: options === null || options === void 0 ? void 0 : options.placeholder
        // eslint-disable-next-line jsx-a11y/no-autofocus
        ,
        autoFocus: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "buttons",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "cancel",
          onClick: onClickCancel,
          children: "cancel"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "submit",
          children: "ok"
        })]
      })]
    })]
  });
};
var _default = exports["default"] = Prompt;