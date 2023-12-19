import { defineStore } from 'pinia'

export const useYahtzeeStore = defineStore({
  id: 'yahtzee',


  state: () => ({
    scoreSheet: [],
    dices: [],
    turn: 0,
    partOne: 0,
    partTwo: 0, 
    bonus: 0,
    yahtzeeBonus: 0,
    regularYahtzee: false,
    total: 0,
    done: 0,
  }),


  getters: {
    getRandomNumber: (state) => (maxNum) => {
        return Math.floor(Math.random() * maxNum);
    },

    getDice: (state) => (number) => {
      return "bi:dice-" + number + "-fill";
    },

    getTotalPartOne: (state) => () => {
      return state.partOne + state.bonus;
    },

    getDiceTotal: (state) => (number) => {
      let times = 0;
      
      state.dices.forEach( (dice) => {
        if(dice.number == number){
          times++;
        }
      });

      return times * number;
    },

    getThreeScore: (state) => () => {
      var sum = 0,
          grouped = [],
          valid = false;

      state.dices.forEach( (dice) => {
        if(grouped[dice.number]){
          grouped[dice.number]++;
          
          if(grouped[dice.number] == 3){
            valid = true;
          }
        } else {
          grouped[dice.number] = 1;
        }
        sum += dice.number;
      });

      return (valid ? sum : 0);
    },

    getFourScore: (state) => () => {
      var sum = 0,
          grouped = [],
          valid = false;

      state.dices.forEach( (dice) => {
        if(grouped[dice.number]){
          grouped[dice.number]++;
          
          if(grouped[dice.number] == 4){
            valid = true;
          }
        } else {
          grouped[dice.number] = 1;
        }
        sum += dice.number;
      });

      return (valid ? sum : 0);
    },

    getFullHouseScore: (state) => () => {
      var grouped = [],
          valid = true;

      state.dices.forEach( (dice) => {
        if(grouped[dice.number]){
          grouped[dice.number]++;
          
          if(grouped[dice.number] == 4){
            valid = false;
          }
        } else {
          grouped[dice.number] = 1;

          if(grouped.filter(n => n).length > 2){
            valid = false;
          }
        }
      });

      return (valid ? 25 : 0);
    },

    getStreetScore: (state) => () => {
      let valid = false,
          consecutive = 0,
          sorted = JSON.parse(JSON.stringify(state.dices)).sort(function(a, b){return a.number-b.number});

      sorted.forEach( (dice, index) => {
        let prev = (sorted[index-1] ? sorted[index-1].number : 0),
            now = dice.number;

        if(now - prev == 1) {
          consecutive++;

          if(consecutive == 4){
            valid = true;
          }
        } else if(now != prev) {
          consecutive = 1;
        }
      });

      return (valid ? 30 : 0);
    },

    getBigStreetScore: (state) => () => {
      let valid = false,
          consecutive = 0,
          sorted = JSON.parse(JSON.stringify(state.dices)).sort(function(a, b){return a.number-b.number});

      sorted.forEach( (dice, index) => {
        let prev = (sorted[index-1] ? sorted[index-1].number : 0),
            now = dice.number;

        if(now - prev == 1) {
          consecutive++;

          if(consecutive == 5){
            valid = true;
          }
        } else {
          consecutive = 1;
        }
      });

      state.dices.forEach( (dice, index) => {

      });

      return (valid ? 40 : 0);
    },

    getYahtzeeScore: (state) => () => {
      var grouped = [],
          valid = false;

      state.dices.forEach( (dice) => {
        if(grouped[dice.number]){
          grouped[dice.number]++;
          
          if(grouped[dice.number] == 5){
            valid = true;
          }
        } else {
          grouped[dice.number] = 1;
        }
      });

      return (valid ? 50 : 0);
    },

    getChanceScore: (state) => () => {
      return state.dices.reduce( (total, item) => { return total + item.number }, 0);
    },


    getPartOne: (state) => () => {
      let totalPartOne = 0;
      state.scoreSheet.forEach((row) => {
        if(row.part == 1 && row.def){
          totalPartOne += row.score;
        }
      });

      return totalPartOne;
    },

    getPartTwo: (state) => () => {
      let totalPartTwo = 0;
      state.scoreSheet.forEach((row) => {
        if(row.part == 2 && row.def){
          totalPartTwo += row.score;
        }
      });

      return totalPartTwo;
    },

    getBonus: (state) => () => {
      return ( (state.partOne > 62) ? 35 : 0);
    },

    getTotal: (state) => () => {
      return state.partOne + state.bonus + state.yahtzeeBonus + state.partTwo;
    }
  },


  actions: {
    setDefaults() {
      this.partOne = 0;
      this.partTwo = 0; 
      this.total = 0;
      this.done = 0;
      this.turn = 0;
      this.bonus = 0;
      this.yahtzeeBonus = 0;
      this.regularYahtzee = false,
      this.dices = [];
      this.scoreSheet = [
          {def: false, score: 0, part: 1, name: 'Enen'},
          {def: false, score: 0, part: 1, name: 'Tweeën'},
          {def: false, score: 0, part: 1, name: 'Drieën'},
          {def: false, score: 0, part: 1, name: 'Vieren'},
          {def: false, score: 0, part: 1, name: 'Vijven'},
          {def: false, score: 0, part: 1, name: 'Zessen'},
          {def: false, score: 0, part: 2, type: 1, name: 'Three of a kind', subName: '3 dezelfde'},
          {def: false, score: 0, part: 2, type: 2, name: 'Carré', subName: '4 dezelfde'},
          {def: false, score: 0, part: 2, type: 3, name: 'Full house', subName: '3 + 2 dezelfde'},
          {def: false, score: 0, part: 2, type: 4, name: 'Kleine straat', subName: '4 opeenvolgende nummers'},
          {def: false, score: 0, part: 2, type: 5, name: 'Grote straat', subName: '5 opeenvolgende nummers'},
          {def: false, score: 0, part: 2, type: 6, name: 'Yahtzee', subName: '5 dezelfde'},
          {def: false, score: 0, part: 2, type: 7, name: 'Chance', subName: 'Vrije keuze'},
      ];

      for(let i = 0; i < 5; i++) {
        this.dices.push(
          {
            locked: false,
            number: 1
          }
        )
      }
    },

    rollDices() {
      let times = 1;
      let interval = setInterval(() => {
            if(times == 10){
              this.checkScores();

              if(this.turn != 3){
                this.turn++;
              }
              clearInterval(interval);
            } else {
              this.dices.forEach((dice) => {
                if(dice.locked == false) {
                  dice.number = this.getRandomNumber(6) + 1;
                }
              })
              times++;
            }
        }, 50);
    },

    resetScores() {
      this.scoreSheet.forEach((row, index) => {
        if(!row.def){
          row.score = 0;
        }
      });
    },

    checkScores() {
      this.scoreSheet.forEach((row, index) => {
        if(row.part == 1 && !row.def){
          row.score = this.getDiceTotal(index + 1);
        } else if(!row.def && row.part == 2){
          switch(row.type){
            case 1:
              row.score = this.getThreeScore();
              break;
            case 2:
              row.score = this.getFourScore();
              break;
            case 3:
              row.score = this.getFullHouseScore();
              break;
            case 4:
              row.score = this.getStreetScore();
              break;
            case 5:
              row.score = this.getBigStreetScore();
              break;              
            case 6:
              row.score = this.getYahtzeeScore();
              break;
            case 7:
              row.score = this.getChanceScore();
              break;
          }
        }
      });
    },

    lockScore(row) {
      row.def = true;
      this.partOne = this.getPartOne();
      this.partTwo = this.getPartTwo();
      this.bonus = this.getBonus();
      this.total = this.getTotal();
      this.turn = 0;

      if(this.getYahtzeeScore() && this.regularYahtzee){
        this.yahtzeeBonus += 100;
      }

      if(row.part == 2 && row.type == 6){
        this.regularYahtzee = true;
      }
      
      this.checkIfDone();
      this.clearDices();
      this.resetScores();
    },

    checkIfDone() {
      if(this.scoreSheet.filter(row => row.def === false).length === 0){
        this.done = true;
      }
    },

    clearDices() {
      this.dices.forEach((dice) => {
        dice.locked = false;
        dice.number = 1;
      })
    },

    resetGame() {
        this.setDefaults();
    },
  }  
});