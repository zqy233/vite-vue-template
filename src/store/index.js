import { createStore } from "vuex"

export default createStore({
  state: {
    loading: false,
    requests: []
  },
  mutations: {
    loadStatus(state, boolean) {
      state.loading = boolean
    },
    addRequest(state, string) {
      state.requests.push(string)
    }
  }
})
