export const filters = {
  namespaced:true,
  state: {
    filter: false,
    filterLoading: true,
    currentFilters: {},

  },
  mutations: {
    setFilter(state) {
      state.filter = !state.filter;
    },
    setFilterLoading(state, payload) {
      state.filterLoading = payload;
    },
    setCurrentFilters(state, payload) {
      state.currentFilters = payload;
    }

  },
  getters: {
    getFilter: state => {
      return state.filter
    },
    getFilterLoading: state => {
      return state.filterLoading;
    },
    getCurrentFilters: state => {
      return state.currentFilters;
    },
  },
  actions: {}
}
