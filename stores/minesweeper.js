import { defineStore } from 'pinia'

export const useMinesweeperStore = defineStore({
  id: 'minesweeper',


  state: () => ({
    field: [],
    done: 0,
  }),


  getters: {
    getRandomNumber: (state) => (maxNum) => {
        return Math.floor(Math.random() * maxNum);
    },
  },


  actions: {
    setDefaults() {
     
    },
  }  
});