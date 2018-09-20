'use strict';

//создаем элементы в HTML

function Elem(teg) {
    this.teg = teg;
    var e = document.createElement(this.teg);
    this.documentInsert = function(parr) {
        return this.elem = parr.appendChild(e);
    }
}

// переменные для нумерации доски

var chessBoard = {
    cell: [],
    col: [],
    fig: [],
    lines: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '],
    columns: [' ', '1', '2', '3', '4', '5', '6', '7', '8']
}

// создаем доску

var tableChess = new Elem('table');
tableChess.documentInsert(document.body); 
tableChess.elem.classList = 'table-chessBoard';

for (var i = 0; i < 9; i++) {
    chessBoard.cell[i] = new Elem('tr');
    chessBoard.cell[i].documentInsert(tableChess.elem); // линии
    for (var j = 0; j < 9; j++) {
        chessBoard.col[j] = new Elem('td');
        chessBoard.col[j].documentInsert(chessBoard.cell[i].elem); // колонки
        chessBoard.col[j].elem.classList = 'cell-field';

        if (i == 8) {
            chessBoard.col[j].elem.innerHTML = chessBoard.columns[j]; // раставляем 1-8 на поле
            chessBoard.col[j].elem.classList.add('brim-columns');
        }
        if ((i != 8 && i % 2 == 0 && j % 2 == 0 && j != 0) || (i % 2 != 0 && j % 2 != 0 && j != 0)) chessBoard.col[j].elem.classList.add('black'); // выбираем сектора для зкраски без 1-8 и А-Н
    }
    chessBoard.col[0].elem.innerHTML = chessBoard.lines[i]; // расставляем А-Н
    chessBoard.col[0].elem.classList.add('brim-lines');
}