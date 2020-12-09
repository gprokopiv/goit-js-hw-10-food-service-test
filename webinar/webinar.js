// const { parse } = require("handlebars");

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

//   console.log(JSON.stringify(Theme));
  const changeToObject = '{"LIGHT":"light-theme","DARK":"dark-theme"}';

console.log(JSON.parse(changeToObject));

console.log(localStorage);
localStorage.setItem('toggle-button', JSON.stringify(Theme));

const getToggledButton = localStorage.getItem('toggle-button');
console.log(JSON.parse(getToggledButton))








