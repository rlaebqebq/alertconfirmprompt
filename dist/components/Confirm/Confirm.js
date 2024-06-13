"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useCheckLang = require("../useCheckLang");
var _jsxRuntime = require("react/jsx-runtime");
const Confirm = _ref => {
  let {
    message,
    onClickOK,
    onClickCancel,
    options
  } = _ref;
  const lang = (0, _useCheckLang.useCheckLang)();
  (0, _react.useEffect)(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClickCancel();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClickCancel]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "dialog-container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "overlay",
      onClickCapture: e => e.stopPropagation()
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "dialog",
      children: [(options === null || options === void 0 ? void 0 : options.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "title",
        children: options.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text",
        children: message
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "buttons",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "cancel",
          onClick: onClickCancel,
          children: lang === 'ko' ? 'Cancel' : 'OK'
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "confirm",
          onClick: onClickOK,
          autoFocus: true,
          children: lang === 'ko' ? '확인' : 'OK'
        })]
      })]
    })]
  });
};
var _default = exports.default = Confirm;