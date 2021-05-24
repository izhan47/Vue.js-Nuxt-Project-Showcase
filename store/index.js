import Vuex from "vuex";
import axios from "axios";
import { baseURL } from "@/configs/urls";
import { setAuthToken, resetAuthToken } from "@/configs/auth";

// import modules
import business from "./business";

const token = localStorage.getItem("x-access-token");
if (token) {
  setAuthToken(token);
} else {
  resetAuthToken();
}
axios.defaults.baseURL = baseURL.API_URL;
export default () => {
  return new Vuex.Store({
    state: {
      user: {
        bearerToken: null,
        isAuthenticated: false
      },
      pet_pro_list: [],
      category_list: [],
      review_list: [],
      product_review_category_list: [],
      pet_category_list: [],
      alert: {
        snackbar: false,
        color: "",
        message: ""
      },
      loader: false,
      total_page: "",
      current_path: ""
    },
    mutations: {
      SET_PET_PRO_LIST(state, data) {
        state.pet_pro_list = data;
      },
      SET_CATEGORY_LIST(state, data) {
        state.category_list = data;
      },
      SET_PRODUCT_REVIEW_LIST(state, data) {
        state.review_list = data;
      },
      SET_PRODUCT_REVIEW_CATEGORY_LIST(state, data) {
        state.product_review_category_list = data;
      },
      SET_PET_CATEGORY_LIST(state, data) {
        state.pet_category_list = data;
      },
      SHOW_SNACKBAR(state, data) {
        state.alert = data;
      },
      SHOW_LOADER(state, data) {
        state.loader = data;
      },

      SET_TOTAL_PAGE(state, data) {
        state.total_page = data;
      },

      SET_CURRENT_PATH(state, data) {
        state.current_path = data;
      },

      SET_USER(state, data) {
        state.user = {
          bearerToken: data.token,
          user: data.user,
          isAuthenticated: true
        };
      },
      RESET_USER(state) {
        (state.user = {
          bearerToken: null,
          user: null,
          isAuthenticated: false
        }),
          (state.current_path = "");
      }
    },
    actions: {
      //Pet Pro
      petProList({ commit }, { page, form }) {
        commit("SHOW_LOADER", true);
        axios({
          method: "POST",
          url: "pet-pro/get-list/" + page,
          data: form
        })
          .then(response => {
            commit("SET_PET_PRO_LIST", response.data.data.pet_pro_list);
            commit("SET_TOTAL_PAGE", response.data.data.total_page);
            commit("SHOW_LOADER", false);
          })
          .catch(e => {});
      },
      singlePetDetail({ dispatch }, slug) {
        return axios({
          method: "POST",
          url: "pet-pro/get-details/" + slug
        });
      },
      petCategories({ commit }) {
        axios({
          method: "POST",
          url: "pet-pro/get-category-list"
        }).then(response => {
          commit("SET_PET_CATEGORY_LIST", response.data.data.category_list);
        });
      },
      // Watch Learn
      categoryList({ commit }, data) {
        commit("SHOW_LOADER", true);
        axios({
          method: "POST",
          url: "watch-and-learn/get-list/" + data.page,
          data: data.form
        }).then(response => {
          commit("SET_CATEGORY_LIST", response.data.data.watch_and_learn_list);
          commit("SET_TOTAL_PAGE", response.data.data.total_page);
          commit("SHOW_LOADER", false);
        });
      },
      singleCategoryDetail({ commit }, slug) {
        commit("SHOW_LOADER", true);
        return axios({
          method: "POST",
          url: "watch-and-learn/get-details/" + slug
        });
      },
      watchCategories() {
        return axios({
          method: "POST",
          url: "watch-and-learn/get-category-list"
        });
      },
      //Comment
      comment({ commit }, data) {
        return axios({
          method: "POST",
          url: "watch-and-learn/store-comment",
          data
        });
      },
      //get Comment List
      getComment({ commit }, slug) {
        commit("SHOW_LOADER", true);
        return axios({
          method: "POST",
          url: "watch-and-learn/get-comments/" + slug + "/0/0"
        });
      },
      //Delete Comment
      deleteComment({ commit }, data) {
        commit("SHOW_LOADER", true);
        return axios({
          method: "POST",
          url: "watch-and-learn/delete-comment/" + data.slug + "/" + data.id
        });
      },
      //Product Reviews
      reviewList({ commit }, data) {
        commit("SHOW_LOADER", true);
        axios({
          method: "POST",
          url: "product-reviews/get-list/" + data.page,
          data: data.form
        }).then(response => {
          commit(
            "SET_PRODUCT_REVIEW_LIST",
            response.data.data.watch_and_learn_list
          );
          commit("SET_TOTAL_PAGE", response.data.data.total_page);
          commit("SHOW_LOADER", false);
        });
      },
      reviewCategories({ commit }) {
        axios({
          method: "POST",
          url: "product-reviews/get-category-list"
        }).then(response => {
          commit(
            "SET_PRODUCT_REVIEW_CATEGORY_LIST",
            response.data.data.category_list
          );
        });
      },
      //News Letter
      newsLetter({ commit }, data) {
        return axios({
          method: "POST",
          url: "store-newsletter",
          data
        });
      },
      //Login
      async login({ dispatch }, data) {
        return axios({
          method: "POST",
          url: "login",
          data
        }).then(response => {
          dispatch("setCurrentUser", response);
          return response;
        });
      },
      setCurrentUser: function({ commit }, response) {
        if (response.data) {
          commit("SET_USER", response.data);
          setAuthToken(response.data.token);
          localStorage.setItem("x-access-token", response.data.token);
        }
      },
      reset({ commit }) {
        commit("RESET_USER");
        resetAuthToken();
        // cookies.remove('x-access-token')
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("vuex");
        return Promise.resolve();
      },
      //Register
      async register({ dispatch }, data) {
        return axios({
          method: "POST",
          url: "register",
          data
        }).then(response => {
          dispatch("setCurrentUser", response.data);
          return response.data;
        });
      },
      //Forgot password
      forgotPassword({ commit }, data) {
        return axios({
          method: "POST",
          url: "forgot-password",
          data
        });
      },

      //Like Dislike
      like({ dispatch }, slug) {
        return axios({
          method: "POST",
          url: "pet-pro/like-dislike/" + slug
        });
      },

      //claim Dislike
      claim({ dispatch }, data) {
        return axios({
          method: "POST",
          url: "pet-pro/deal/claim/" + data.slug + "/" + data.pet_deal_id
        });
      },

      review({ dispatch }, data) {
        return axios({
          method: "POST",
          url: "pet-pro/review/" + data.slug,
          data: data.form
        });
      },
      getReview({ dispatch }, slug) {
        return axios({
          method: "POST",
          url: "pet-pro/get-reviews/" + slug
        });
      },
      deleteReview({ dispatch }, data) {
        return axios({
          method: "POST",
          url: "pet-pro/delete-review/" + data.slug + "/" + data.id
        });
      },

      //  Account Dashboard Section
      profileDetails() {
        return axios({
          method: "POST",
          url: "profile/get-details"
        });
      },
      updateProfile({ commit }, data) {
        return axios({
          method: "POST",
          url: "profile/update",
          data
        });
      },

      //Pet Profile Dashboard Section
      breedList() {
        return axios({
          method: "POST",
          url: "profile/get-breed-list"
        });
      },
      addPetProfile({ commit }, data) {
        return axios({
          method: "POST",
          url: "profile/add-pets",
          data
        });
      },
      getUserPet() {
        return axios({
          method: "POST",
          url: "profile/get-users-pets"
        });
      },
      deleteUserPet({ commit }, id) {
        return axios({
          method: "POST",
          url: "profile/delete-my-pet/" + id
        });
      },
      getLovedPet() {
        return axios({
          method: "POST",
          url: "profile/get-loved-pet-pros"
        });
      },

      updateVet({ commit }, data) {
        return axios({
          method: "POST",
          url: "profile/update-vet",
          data
        });
      }
    },
    modules: { business }
  });
};
