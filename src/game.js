class Cell {
    constructor(game, row, column) {
        this.game = game

        this.row = row;
        this.column = column;

        this.hasBomb = false;
        this.isOpen = false;
        this.nearBombCount = 0;
        
        this.flag = false;
      }

    index() {
        return this.row + ":" + this.column
    }
    press() {
        if (this.isOpen || this.flag) {
            return
        }
        if (this.hasBomb) {
            this.game.explosion();
        }
        this.isOpen = true;
    }

    probe() {
        if (this.isOpen) {
            return
        }
        if (this.hasBomb) {
            return
        }
        this.press()
    }
}

class Table {
    constructor(game, rows, columns, bombsCount) {
        this.game = game

        this.table = [];
        this.rows = rows;
        this.columns = columns;
        this.bombsCount = bombsCount;
        this.flagsCount = 0;
        
        for (let r = 0; r < rows; r++) {
            let row = [];
            for (let c = 0; c < columns; c++) {
                row.push(new Cell(game, r, c));
            }
            this.table.push(row);
        }

        this.isInitialized = false;
        this.buffer = {};
        
      }

    getCell(row, column) {
        if (row < 0 || row >= this.table.length) {
            return null
        }
        let r = this.table[row];
        if (column < 0 || column >= r.length) {
            return null
        }
        return this.table[row][column]
    }

    getNeighbors(cell) {
        let result = [];
        const combinations = [
            [-1,1],
            [-1,0],
            [-1,-1],
            [0,-1],
            // [0,0] the cell
            [0,1],
            [1,-1],
            [1,0],
            [1,1]
        ]
        
        for (let i = 0; i < combinations.length; i++) {
            const combination = combinations[i];
            const dx = combination[0];
            const dy = combination[1];
            let c = this.getCell(cell.row + dx, cell.column + dy);
            if (c != null) {
                result.push(c)
            }
        }
        return result;
    }
    
    getCellsList() {
        let result = [];
        for (let r = 0; r < this.table.length; r++) {
            const row = this.table[r];
            for (let c = 0; c < row.length; c++) {
                const cell = row[c];
                result.push(cell);
            }
        }
        return result;
    }

    setBomb(cell) {
        console.log(`set bomb for ${cell}`)
        cell.hasBomb = true;
        this.getNeighbors(cell).forEach(n=> {
            n.nearBombCount += 1
        });
    }

    checkInit(cell) {
        if (this.isInitialized) {
            return
        }
        console.log(`started table initialization`)
        let cellsForChoose = this.getCellsList().filter((c) => c != cell);
        if (cellsForChoose.length < this.bombsCount) {
            alert('invalid game init: bombs count more then available cells')
        }
        
        let cellsForFill = [];
        
        while (cellsForFill.length < this.bombsCount) {
            let i = Math.floor(Math.random() * cellsForChoose.length);
            let choosen = cellsForChoose[i];
            cellsForFill.push(choosen);
            cellsForChoose = cellsForChoose.filter((c) => c != choosen);
        }
        
        console.log(`cells for set bomb: ${cellsForFill}`)

        for (let i = 0; i < cellsForFill.length; i++) {
            const c = cellsForFill[i];
            this.setBomb(c);
        }

        this.isInitialized = true;

        console.log(`table is initialized`)
    }

    checkWinning() {
        let closedCells = this.getCellsList().filter((c) => !c.isOpen);
        if (closedCells.length == this.bombsCount) {
            this.game.win();
        }
    }

    press(row, column) {
        if (this.game.isFinished) {
            return
        }
        
        this.buffer = {};

        let cell = this.getCell(row, column);
        
        this.checkInit(cell);

        if (cell.isOpen || cell.flag) {
            return
        }
        
        cell.press();

        this.buffer[cell.index()] = true;

        // console.log(`added cell(${cell.index()}) into buffer (${this.buffer})`)

        let neighbors = this.getNeighbors(cell);
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            this.probe(neighbor);
        }

        this.checkWinning();
    }

    flag(row, column) {
        let cell = this.getCell(row, column)

        if (cell.isOpen) {
            return
        }

        if (this.flagsCount == this.bombsCount) {
            if (!cell.flag) {
                return
            }
            
        }

        if (cell.flag) {
            this.flagsCount -= 1
        } else {
            this.flagsCount += 1
        }

        cell.flag = !cell.flag;
    }

    probe(cell) {
        cell.probe();

        if (!(cell.index() in this.buffer)) {
            // console.log(`added cell(${cell.index()}) into buffer (${this.buffer})`)
            this.buffer[cell.index()] = true;
        }

        if (!(cell.isOpen && !cell.nearBombCount)) {
            return
        }

        let neighbors = this.getNeighbors(cell);

        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];

            if (neighbor.index() in this.buffer) {
                continue
            }

            this.probe(neighbor);
        }
    }
}

class Game {
    constructor(rows, columns, bombsCount) {
        this.rows = rows
        this.columns = columns
        this.bombsCount = bombsCount
        this.init()
    }

    init() {
        this.isFinished = false;
        this.isWin = false;
        this.isFailed = false;
        this.table = new Table(this, this.rows, this.columns, this.bombsCount)
    }

    explosion() {
        this.isFinished = true;
        this.isFailed = true;
        // alert('fail')
    }

    win() {
        this.isFinished = true;
        this.isWin = true;
        // alert('win!')
    }
}

export default Game;
