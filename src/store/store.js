import { reactive } from 'vue'
import data from '../cards.json'

// Реализация state менеджера, вместо pinia/vuex, т.к в ТЗ не было указано можно ли его использовать

const store = {
  state: reactive({
    count: null,
    data: data,
  }),
  getters: {
    getCount() {
      return store.state.data
    },
  },
  mutations: {
    incrementCount() {
      store.state.count++
    },
  },
  actions: {
    initializeCount() {
      store.state.count = 0
    },
  },
}
export default store
