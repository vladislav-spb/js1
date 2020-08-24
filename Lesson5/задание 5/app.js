let app = {
    config: {
        rows: [8,7,6,5,4,3,2,1],
        colomn: ['a','b','c','d','e','f','g','h'],
    },
    work() {
        let board = this.generatedBoard();
        document.body.innerHTML = board;
    },

    generatedBoard() {
        let board = '';
        let rowStartColor = 'white';
        for (let i = 0;i<this.config.rows.length;i++) {
            let row = '';
            if (rowStartColor == 'white') {
                row = this.generatedRows(rowStartColor, this.config.rows[i]);
                rowStartColor = 'black';
            } else {
                row = this.generatedRows(rowStartColor, this.config.rows[i]);
                rowStartColor = 'white';
            }
            board += row;
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    generatedRows(startColor,rowsNumber){
        let colorClass = startColor;
        let row = '';
        for (let i = 0; i < this.config.colomn.length; i++) {
            let field = '';
            if(colorClass === 'white'){
                field = this.generationField('white', rowsNumber, this.config.colomn[i]);
                colorClass = 'black';
            } else {
                field = this.generationField('black', rowsNumber, this.config.colomn[i]);
                colorClass = 'white';
            }
            row += field; 
        }
        return `<tr>${row}</tr>`;
    },

    generationField(color, rowsNumber, colomnChar) {
        return `<td data-rownum="${rowsNumber}" data-colchar="${colomnChar}" class="${color}"></td>`;
    }
};

app.work();