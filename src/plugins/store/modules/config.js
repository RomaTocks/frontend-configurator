export const configuration = {
  namespaced:true,
  state: {
    config: false,
    configLoader: false,

  },
  mutations: {
    closeDialog(state) {
      state.config = false;
    },
    dialog(state) {
      state.config = !state.config;
    },
    dialogLoader(state) {
      state.configLoader = !state.configLoader;
    }
  },
  getters: {
    getConfig: state => {
      return state.config;
    },
    getConfigLoader: state => {
      return state.configLoader;
    }
  },
  actions: {}
}
