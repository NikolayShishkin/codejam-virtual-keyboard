const keyboardRow1 = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
const keyboardRow2 = ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del'];
const keyboardRow3 = ['Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'];
const keyboardRow4 = ['Shift','\\','я','ч','с','м','и','т','ь','б','ю','/','^','Shift'];
const keyboardRow5 = ['Ctrl','Win','Alt','Space','Alt','Ctrl','<','v','>'];

const main = document.createElement('main');
document.body.appendChild(main);
main.classList.add('page-wrapper');
const textContainer = document.createElement('div');
textContainer.classList.add('text-wrapper');
main.appendChild(textContainer);
const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-wrapper');
main.appendChild(keyboardContainer);

const drawKeyboardRow = function(rowData, rowName){
    const row = document.createElement('div');
    row.classList.add(rowName);
    rowData.forEach(element => {
        const button = document.createElement('button');
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

main.appendChild(keyboardContainer);

