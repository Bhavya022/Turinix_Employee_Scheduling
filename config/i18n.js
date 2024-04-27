const i18n = require('i18n');

i18n.configure({
  locales: ['en', 'fr', 'de'],
  defaultLocale: 'en', 
  directory: __dirname + '/locales', 
  queryParameter: 'lang',
  cookie: 'lang', 
});

module.exports = i18n;
