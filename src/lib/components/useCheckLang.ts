export const useCheckLang = () => {
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
