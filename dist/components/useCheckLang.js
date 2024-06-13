"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCheckLang = void 0;
const useCheckLang = () => {
  let locale = navigator.language;
  switch (locale) {
    case 'ko':
    case 'ko-KR':
      locale = 'ko';
      break;
    case 'en':
    case 'en-US':
      locale = 'en';
      break;
    default:
      locale = 'en';
  }
  return locale;
};
exports.useCheckLang = useCheckLang;