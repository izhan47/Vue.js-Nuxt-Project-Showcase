import Vuex from "vuex";
import petpro from "./pet-pro";
import watchandlearn from "./watch-and-learn";
import bestpetproducts from "./best-pet-products";
import dashboard from "./dashboard";
import user from "./user";


export default () => {
  return new Vuex.Store({
    state: {
      current_path: "",
      loader: false,
      alert: {
        snackbar: false,
        color: "",
        message: ""
      },
    },
    getters : {},
    mutations: {
      SET_CURRENT_PATH(state, data) {
        state.current_path = data;
      },
      SHOW_LOADER(state, data) {
        state.loader = data;
      },
      SHOW_SNACKBAR(state, data) {
        state.alert = data;
      },
    },
    actions: {},
    modules: { petpro, watchandlearn, bestpetproducts, dashboard, user }
  });
};