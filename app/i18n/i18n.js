import ReactNative from 'react-native';
import I18n from 'react-native-i18n';


import en from './';
import he from './';
// Import all locales

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  he
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
};

export default I18n;


// import ReactNative from 'react-native';
// import I18n from 'react-native-i18n';
// import * as RNLocalize from "react-native-localize";
// import localization from './localization'


// const locales = RNLocalize.getLocales();

// if (Array.isArray(locales)) {
//   I18n.locale = locales[0].languageTag;
// }

// I18n.translations = localization;
// I18n.fallbacks = true;
// I18n.translations = {
//   en,
//   fr
// };

// export default I18n;



// Import all locales
// I18n.fallbacks = true;
// I18n.translations = localization;


// // Define the supported translations
// I18n.translations = {
//   en,
//   ru
// };

// const currentLocale = I18n.currentLocale();

// // Is it a RTL language?
// export const isRTL = currentLocale.indexOf('ru') === 0 || currentLocale.indexOf('ar') === 0;

// // Allow RTL alignment in RTL languages
// ReactNative.I18nManager.allowRTL(isRTL);

// // The method we'll use instead of a regular string
// export function strings(name, params = {}) {
//   return I18n.t(name, params);
// };

// export default I18n;

// import I18n from 'react-native-i18n';
// import localization from './localization';

// I18n.fallbacks = true;
// I18n.translations = localization;

// export default I18n;