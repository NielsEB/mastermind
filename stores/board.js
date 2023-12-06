import { defineStore } from 'pinia'

const colors = [
    'bg-yellow-500',
    'bg-orange-500',
    'bg-red-500',
    'bg-purple-500',
    'bg-blue-500',
    'bg-green-500',
];

export const useBoardStore = defineStore({
  id: 'board',
  state: () => ({
    answer: [],
    rows: [],
    guesses: 0,
    done: false,
    found: false,
    ready: false,
    peak: false,
    endScore: 0,
    time: 0
  }),
  getters: {
    getColor: (state) => (color) => {
        return colors[color];
    },

    getRandomNumber: (state) => (maxNum) => {
        return Math.floor(Math.random() * maxNum);
    }
  },
  actions: {
    setDefaults() {
        this.answer = [];
        this.rows = [];
        this.ready = false;
        this.done = false;
        this.found = false;
        this.peak = false;
        this.guesses = 0;
        this.endScore = 0;
        this.time = 0;

        for (let i = 0; i < 10; i++) {
            this.rows.push(
                {
                    checked: false,
                    colors: [],
                    score: []
                }
            )
        }

        for (let j = 0; j < 4; j++) {
            this.answer.push(this.getRandomNumber(6));
        }

        let interval = setInterval(() => {
            if(this.done || this.guesses == 10 || this.time == 1000){
                clearInterval(interval);
            } else {
                this.time++;
            }
        }, 1000);
    },

    undoLastColor() {
        this.rows[this.guesses].colors.splice(-1);
        this.ready = false;
    },

    setColor( color ){
        let colors = this.rows[this.guesses].colors,
            numColors = colors.length;
    
        if(numColors < 4) {
            colors.push(color);    
            
            if(numColors == 3){
                this.ready = true;
            }
        }
    },

    checkRow() {
        let checkAnswer = JSON.parse(JSON.stringify(this.answer)),
            answer = this.answer,
            checkedRow = this.rows[this.guesses];

        if(JSON.stringify(answer) == JSON.stringify(checkedRow.colors)){
            this.found = true;
            this.peak = true;
            this.done = true;
            this.ready = false;
            this.endScore = 1000 - (this.guesses * 10) - this.time;
            checkedRow.score = [1,1,1,1];
        } else {
            checkedRow.colors.forEach((color, index) => {
                if(color == answer[index]){
                    checkedRow.score.unshift('1');
                } else if(checkAnswer.includes(color)){
                    checkedRow.score.push('2');
                    checkAnswer.splice(checkAnswer.indexOf(color), 1);
                }
            });

            this.ready = false;
            this.guesses++;
        }

        if(this.guesses == 10) {
            this.done = true;
        }
    },

    resetGame() {
        this.setDefaults();
    },
  }  
});