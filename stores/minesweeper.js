import { defineStore } from 'pinia'

export const useMinesweeperStore = defineStore({
  id: 'minesweeper',


  state: () => ({
    grid: [],
    done: false,
    success: false,
    time: 0,
    mines: 10,
    markMines: false,
    total: 0
  }),


  getters: {
    getRandomNumber: (state) => (maxNum) => {
        return Math.floor(Math.random() * maxNum);
    },

    getAdjacentMines: (state) => (x, y) => {
      var count = 0;
      for(let i = -1;  i <= 1; i++){
        for(let j = -1; j <= 1; j++){
          const newX = x + i;
          const newY = y + j;

          if(newX >= 0 && newY >= 0 && newX < 10 && newY < 10 && state.grid[newX][newY].isMine){
            count++;
          }
        }
      }
       
      return count;
    },

    getFormattedMineCount: (state) => (mines) => {
      return mines.toString().padStart(3, '0');
    },
    
    getFormattedTime: (state) => (time) => {
      return time.toString().padStart(3, '0');
    },

    getNumberOfNormalCells: (state) => () => {
      var count = 0;
      
      state.grid.forEach((row) => {
        row.forEach((cell) => {
          if(!cell.revealed && !cell.isMine) {
            count++;
          }
        });
      });

      return count;
    }
  },


  actions: {
    setDefaults() {
      this.grid = [];
      this.done = false;
      this.success = false;
      this.mines = 10;
      this.markMines = false;
      this.total = 0;
      this.time = 0;

      this.buildGrid();
      for(let i = 0; i < 10; i++) {
        this.addRandomMine();
      }

      let interval = setInterval(() => {
        if(this.done || this.time == 999){
            clearInterval(interval);
        } else {
            this.time++;
        }
    }, 1000);
    },

    buildGrid() {
      for(let x = 0; x < 10; x++){
        this.grid.push([]);
        for(let y = 0; y < 10; y++){
          this.grid[x].push({
            revealed: false,
            isMine: false,
            flagged: false,
            count: 0
          });
        }
      }
    },

    addRandomMine() {
      let x = this.getRandomNumber(10),
          y = this.getRandomNumber(10),
          cell = this.grid[x][y];

      if(cell && !cell.isMine) {
        cell.isMine = true;
      } else {
        this.addRandomMine();
      }
    },

    checkCell(x, y) {
      if(this.markMines){
        var cell = this.grid[x][y];

        if(cell.flagged){
          cell.flagged = false;
          this.mines++;
        } else {
          cell.flagged = true;
          this.mines--;
        }
      } else {
        if(
          x >= 0 && y >= 0 &&
          x < 10 && y < 10 &&
          !this.grid[x][y].revealed
        ){
          var cell = this.grid[x][y];
          cell.revealed = true;
          
          if(cell.isMine){
            this.done = true;
            this.revealMines();
          } else {
            const normalCellCount = this.getNumberOfNormalCells();
            const minesCount = this.getAdjacentMines(x, y);
            
            if(normalCellCount === 0){
              this.done = true;
              this.success = true;
              this.total = 1000 - this.time;
            } else if(minesCount === 0) {
              for(let i = -1;  i <= 1; i++){
                for(let j = -1; j <= 1; j++){
                  this.checkCell(x + i, y + j);
                }
              }
            }

            cell.count = minesCount;
          }
        }
      }
    },

    revealMines() {
      this.grid.forEach( (row) => {
        row.forEach((cell) => {
          if(cell.isMine) {
            cell.revealed = true;
          }
        });
      })
    },
  }  
});