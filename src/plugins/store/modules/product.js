export function Product() {
  this.namespaced = true;
  this.state = {
    current: null,
    filter: false
  };
  this.mutations = {
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
    getCurrent: state => {
      return state.current;
    },
    getFilter: state => {
      return state.filter
    }
  }
}
