const keyboardRow1 = [
  'ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace'
];
const keyboardRow2 = [
  'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  '\\',
  'Del'
];
const keyboardRow3 = [
  'CapsLock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'Enter'
];
const keyboardRow4 = [
  'Shift',
  '\\',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '/',
  '^',
  'Shift'
];
const keyboardRow5 = [
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  '<',
  'v',
  '>'
];

const russianLowerCaseRow1 = [
  'ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace'
];
const russianLowerCaseRow2 = [
  'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  '\\',
  'Del'
];
const russianLowerCaseRow3 = [
  'Caps Lock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'Enter'
];
const russianLowerCaseRow4 = [
  'Shift',
  '\\',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '/',
  '^',
  'Shift'
];
const russianLowerCaseRow5 = [
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  '<',
  'v',
  '>'
];

const russianUpperCaseRow1 = [
  'Ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace'
];
const russianUpperCaseRow2 = [
  'Tab',
  'Й',
  'Ц',
  'У',
  'К',
  'Е',
  'Н',
  'Г',
  'Ш',
  'Щ',
  'З',
  'Х',
  'Ъ',
  '\\',
  'Del'
];
const russianUpperCaseRow3 = [
  'Caps Lock',
  'Ф',
  'Ы',
  'В',
  'А',
  'П',
  'Р',
  'О',
  'Л',
  'Д',
  'Ж',
  'Э',
  'Enter'
];
const russianUpperCaseRow4 = [
  'Shift',
  '\\',
  'Я',
  'Ч',
  'С',
  'М',
  'И',
  'Т',
  'Ь',
  'Б',
  'Ю',
  '/',
  '^',
  'Shift'
];
const russianUpperCaseRow5 = [
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  '<',
  'v',
  '>'
];

const englishLowerCaseRow1 = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace'
];
const englishLowerCaseRow2 = [
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'Del'
];
const englishLowerCaseRow3 = [
  'Caps Lock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter'
];
const englishLowerCaseRow4 = [
  'Shift',
  '\\',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  '^',
  'Shift'
];
const englishLowerCaseRow5 = [
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  '<',
  'v',
  '>'
];

const englishUpperCaseRow1 = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace'
];
const englishUpperCaseRow2 = [
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'Del'
];
const englishUpperCaseRow3 = [
  'Caps Lock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter'
];
const englishUpperCaseRow4 = [
  'Shift',
  '\\',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  '^',
  'Shift'
];
const englishUpperCaseRow5 = [
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  '<',
  'v',
  '>'
];

let currentLanguage = 'ru';
let currentCase = 'lower';
let altKeyIsPressed = false;
const main = document.createElement('main');
document.body.appendChild(main);
main.classList.add('page-wrapper');
const textContainer = document.createElement('div');
textContainer.classList.add('text-wrapper');
main.appendChild(textContainer);
const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-wrapper');
main.appendChild(keyboardContainer);

const changeLetterCase = function() {
  const buttons = document.querySelectorAll('.virtual-keyboard-button');
  if (currentCase === 'lower') {
    currentCase = 'upper';
    buttons.forEach(function(item) {
      if (item.innerHTML.length === 1) {
        item.innerHTML = item.innerHTML.toUpperCase();
      }
    });
  } else {
    currentCase = 'lower';
    buttons.forEach(function(item) {
      if (item.innerHTML.length === 1) {
        item.innerHTML = item.innerHTML.toLowerCase();
      }
    });
  }
};

const changeLanguage = function() {
  if (currentLanguage === 'ru') {
    currentLanguage = 'en';
    keyboardContainer.innerHTML = '';
    keyboardContainer.appendChild(
      drawKeyboardRow(englishLowerCaseRow1, 'row1')
    );
    keyboardContainer.appendChild(
      drawKeyboardRow(englishLowerCaseRow2, 'row2')
    );
    keyboardContainer.appendChild(
      drawKeyboardRow(englishLowerCaseRow3, 'row3')
    );
    keyboardContainer.appendChild(
      drawKeyboardRow(englishLowerCaseRow4, 'row4')
    );
    keyboardContainer.appendChild(
      drawKeyboardRow(englishLowerCaseRow5, 'row5')
    );
  } else {
    currentLanguage = 'ru';
    keyboardContainer.innerHTML = '';
    keyboardContainer.appendChild(
      drawKeyboardRow(russianLowerCaseRow1, 'row1')
    );
    keyboardContainer.appendChild(
      drawKeyboardRow(russianLowerCaseRow2, 'row2')
    );
    keyboardContainer.appendChild(
      drawKeyboardRow(russianLowerCaseRow3, 'row3')
    );
    keyboardContainer.appendChild(
      drawKeyboardRow(russianLowerCaseRow4, 'row4')
    );
    keyboardContainer.appendChild(
      drawKeyboardRow(russianLowerCaseRow5, 'row5')
    );
  }
};
const drawKeyboardRow = function(rowData, rowName) {
  const row = document.createElement('div');
  row.classList.add(rowName);
  rowData.forEach(element => {
    const button = document.createElement('button');
    button.classList.add('virtual-keyboard-button');
    button.innerHTML = element;
    row.appendChild(button);
  });
  return row;
};

keyboardContainer.appendChild(drawKeyboardRow(keyboardRow1, 'row1'));
keyboardContainer.appendChild(drawKeyboardRow(keyboardRow2, 'row2'));
keyboardContainer.appendChild(drawKeyboardRow(keyboardRow3, 'row3'));
keyboardContainer.appendChild(drawKeyboardRow(keyboardRow4, 'row4'));
keyboardContainer.appendChild(drawKeyboardRow(keyboardRow5, 'row5'));

document.addEventListener('keydown', event => {
  let code = event.code;
  let key = event.key;
  const buttons = document.querySelectorAll('.virtual-keyboard-button');
  buttons.forEach(function(item) {
    if (item.innerHTML === key) {
      item.classList.add('button__active');
      if (key.length === 1) {
        textContainer.innerHTML += key;
      } else if (key === 'CapsLock') {
        changeLetterCase();
      } else if (key === 'Alt') {
        altKeyIsPressed = true;
      } else if (key === 'Shift' && altKeyIsPressed) {
        changeLanguage();
        altKeyIsPressed = false;
      }
    }
  });
});
document.addEventListener('keyup', event => {
  let code = event.code;
  let key = event.key;
  const buttons = document.querySelectorAll('.virtual-keyboard-button');
  buttons.forEach(function(item) {
    if (item.innerHTML === key) {
      item.classList.remove('button__active');
      if (key === 'Alt') {
        altKeyIsPressed = false;
      }
    }
  });
});
document.addEventListener('mousedown', event => {
  if (event.target.classList.contains('virtual-keyboard-button')) {
    let item = event.target;
    let key = item.innerHTML;
    item.classList.add('button__active');
    if (key.length === 1) {
      textContainer.innerHTML += key;
    } else if (key === 'CapsLock') {
      changeLetterCase();
    } else if (key === 'Alt') {
      altKeyIsPressed = true;
    } else if (key === 'Shift' && altKeyIsPressed) {
      changeLanguage();
      altKeyIsPressed = false;
    }
  }
});
document.addEventListener('mouseup', event => {
  const buttons = document.querySelectorAll('.virtual-keyboard-button');
  buttons.forEach(function(item) {
    item.classList.remove('button__active');
    if (item.innerHTML === 'Alt') {
      altKeyIsPressed = false;
    }
  });
});
