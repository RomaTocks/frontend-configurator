export function Product() {
  this.namespaced = true;
  this.state = {
    current: null,
    filter: false,
    configFilter : false,
    currentShop: null
  };
  this.mutations = {
    setConfigFilter(state) {
      state.configFilter = !state.configFilter
    },
    setCurrentShop(state, id) {
      state.currentShop = id;
    },
    setCurrent(state, id) {
      if (state.current !== id) {
        state.current = id;
      } else {
        state.current = null;
      }
    },
    setFilter(state) {
      state.filter = !state.filter;
    }
  }
  this.getters = {
    getCurrentShop: state => {
      return state.currentShop
    },
    getCurrent: state => {
      return state.current;
    },
    getFilter: state => {
      return state.filter
    },
    getConfigFilter : state => {
      return state.configFilter
    }
  }
}
