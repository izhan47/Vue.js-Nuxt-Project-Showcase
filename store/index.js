import Vuex from "vuex";
import axios from "axios";
import { baseURL } from "@/configs/urls";
import { setAuthToken, resetAuthToken } from "@/configs/auth";

import business from "./business";

const token =process.browser ? localStorage.getItem("x-access-token") : null;

if (token) {
  setAuthToken(token);
} else {
  resetAuthToken();
}
axios.defaults.baseURL = baseURL.API_URL;
export default () => {
  return new Vuex.Store({
    state: {
      // Current path, loader, snackbar
      current_path: "",
      loader: false,
      alert: {
        snackbar: false,
        color: "",
        message: ""
      },
      // User
      USER: {
        bearerToken: null,
        isAuthenticated: false
      },
      // Pet Pro
      PET_PRO_LIST: [],
      PET_PRO_LIST_TOTAL_PAGE:"",
      PET_PRO:"",
      PET_PRO_CATEGORY_LIST: [],
      PET_PRO_REVIEW:"",
      // Watch And Learn
      WAL_CATEGORY_LIST: [],
      WAL_LIST: [],
      WAL_LIST_TOTAL_PAGE: "",
      WAL:"",
      // WAL Comments
      WAL_COMMENTS:"",
      // Product Review
      PRODUCT_REVIEW_CATEGORY_LIST: [],
      PRODUCT_REVIEW_LIST: [],
      PRODUCT_REVIEW_TOTAL_PAGE: "",
      // Dashboard - Pet Profile
      PET_BREED_LIST: [],
      // Dashboard - Account
      USER_PETS:"",
      // Dashboard - Loved Pets
      LOVED_PETS:[],
    },
    getters : {
      GET_WAL_CATEGORY_LIST:function(state){
        return state.WAL_CATEGORY_LIST.map(function(item){
          return {
            value: item.value,
            text: item.label
          }
        });
      }
    },
    mutations: {
      // Current path, loader, snackbar
      SET_CURRENT_PATH(state, data) {
        state.current_path = data;
      },
      SHOW_LOADER(state, data) {
        state.loader = data;
      },
      SHOW_SNACKBAR(state, data) {
        state.alert = data;
      },
      // User
      SET_USER_ONLY(state, user) {
        state.USER.user = user
      },
      SET_USER(state, data) {
        state.USER = {
          bearerToken: data.token,
          user: data.user,
          isAuthenticated: true
        };
      },
      RESET_USER(state) {
        (state.USER = {
          bearerToken: null,
          user: null,
          isAuthenticated: false
        }),
          (state.current_path = "");
      },
      // Pet Pro
      SET_PET_PRO_LIST(state, data) {
        state.PET_PRO_LIST = data;
      },
      SET_PET_PRO_LIST_TOTAL_PAGE(state, data) {
        state.PET_PRO_LIST_TOTAL_PAGE = data;
      },
      SET_PET_PRO(state, data){
        state.PET_PRO = data;
      },
      SET_PET_PRO_CATEGORY_LIST(state, data) {
        state.PET_PRO_CATEGORY_LIST = data;
      },
      SET_PET_PRO_REVIEW(state, data) {
        state.PET_PRO_REVIEW = data;
      },
      SET_PET_PRO_MORE_REVIEW(state, data){
        // state.PET_PRO_REVIEW.pet_pro_reviews
      },
      // Watch And Learn
      SET_WAL_CATEGORY_LIST(state, data) {
        state.WAL_CATEGORY_LIST = data;
      },
      SET_WAL_LIST(state, data) {
        state.WAL_LIST = data;
      },
      SET_WAL_LIST_TOTAL_PAGE(state, data) {
        state.WAL_LIST_TOTAL_PAGE = data;
      },
      SET_WAL(state, data){
        state.WAL = data;
      },
      // WAL Comments
      SET_WAL_COMMENTS(state, data){
        state.WAL_COMMENTS = data;
      },
      // Product Review
      SET_PRODUCT_REVIEW_CATEGORY_LIST(state, data) {
        let arr = [];
        data.forEach(item => {
          arr.push({
            value: item.value,
            text: item.label
          });
        });
        state.PRODUCT_REVIEW_CATEGORY_LIST = arr;
      },
      SET_PRODUCT_REVIEW_LIST(state, data) {
        state.PRODUCT_REVIEW_LIST = data;
      },
      SET_PRODUCT_REVIEW_TOTAL_PAGE(state, data) {
        state.PRODUCT_REVIEW_TOTAL_PAGE = data;
      },
      // Dashboard - User Pets
      SET_PET_BREED_LIST(state, data){
        let arr = [];
        data.forEach(item => {
          arr.push({
            value: item.value,
            text: item.label
          });
        });
        state.PET_BREED_LIST = arr;
      },
      SET_USER_PETS(state, data){ 
        state.USER_PETS = data;
      },
      // Dashboard - Loved Pets
      SET_LOVED_PETS(state, data){
        state.LOVED_PETS = data;
      }
    },
    actions: {

      // Pet Pro
      async FETCH_PET_PRO_CATEGORY_LIST({ commit }) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "pet-pro/get-category-list",
          });
          commit("SET_PET_PRO_CATEGORY_LIST", resp.data.data.category_list);
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async POST_PET_PRO_DETAIL({ commit }, slug) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "pet-pro/get-details/" + slug,
          });
          commit(
            "SET_PET_PRO",
            resp.data.data
          );
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async POST_PET_PRO_LIST({ commit }, data){
        try {
          if(process.browser){
            commit("SHOW_LOADER", true);
            const { business_id, category_id, latitude, longitude, search } = data.form;
            const formData = new FormData();
            formData.append("search", search);
            formData.append("longitude", longitude);
            formData.append("latitude", latitude);
            formData.append("category_id", category_id);
            formData.append("business_id", business_id);
            const resp = await axios({
              method: "POST",
              url: "pet-pro/get-list/" + data.page,
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data"
              }
            });
            commit("SET_PET_PRO_LIST", resp.data.data.pet_pro_list);
            commit("SET_PET_PRO_LIST_TOTAL_PAGE", resp.data.data.total_page);
            commit("SHOW_LOADER", false);
          }
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      // Pet Pro Reviews
      async POST_PET_PRO_REVIEW({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "pet-pro/review/" + data.slug,
            data: data.form
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      async POST_GET_REVIEWS({ commit }, slug) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "pet-pro/get-reviews/" + slug
          });
          commit("SET_PET_PRO_REVIEW", resp.data.data)
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      // async POST_GET_MORE_REVIEWS({ commit }, data) {
      //   try {
      //     commit("SHOW_LOADER", true);
      //     const resp = await axios({
      //       method: "POST",
      //       url: "pet-pro/get-reviews/" + data.slug + "/" + data.id
      //     });
      //     commit("SET_PET_PRO_MORE_REVIEW", resp.data.data)
      //     commit("SHOW_LOADER", false);
      //   } catch (error) {
      //     commit("SHOW_LOADER", false);
      //     console.log(error);
      //   }
      // },

      // Not used anywhere yet -  To be removed
      async deleteReview({ commit }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "pet-pro/delete-review/" + data.slug + "/" + data.id
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      // Watch Learn
      async FETCH_WAL_CATEGORY_LIST({ commit }) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "watch-and-learn/get-category-list",
          });
          commit("SET_WAL_CATEGORY_LIST", resp.data.data.category_list);
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async POST_WAL_LIST({ commit }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "watch-and-learn/get-list/" + data.page,
            data: data.form
          });
          commit(
            "SET_WAL_LIST",
            resp.data.data.watch_and_learn_list
          );
          commit("SET_WAL_LIST_TOTAL_PAGE", resp.data.data.total_page);
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },
      
      async POST_WAL_DETAIL({ commit }, slug) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "watch-and-learn/get-details/" + slug,
          });
          commit(
            "SET_WAL",
            resp.data.data.watch_and_learn
          );
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },
      
      // WAL Comment
      async POST_WAL_COMMENT({ commit }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "watch-and-learn/store-comment",
            data
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async POST_WAL_GET_COMMENT({ commit }, slug){
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "watch-and-learn/get-comments/" + slug + "/0/0"
          });
          commit("SET_WAL_COMMENTS", resp.data.data.comments);
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async POST_WAL_DELETE_COMMENT({ commit }, data){
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "watch-and-learn/delete-comment/" + data.slug + "/" + data.id
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      // Product Reviews
      async FETCH_PRODUCT_REVIEW_CATEGORIES({commit}){
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "product-reviews/get-category-list"
          });
          commit("SET_PRODUCT_REVIEW_CATEGORY_LIST", resp.data.data.category_list);
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async POST_PRODUCT_REVIEW_LIST({commit}, data){
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "product-reviews/get-list/" + data.page,
            data: data.form
          });
          commit(
            "SET_PRODUCT_REVIEW_LIST",
            resp.data.data.watch_and_learn_list
          );
          commit("SET_PRODUCT_REVIEW_TOTAL_PAGE", resp.data.data.total_page);
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      // Auth
      async VALIDATE_LOGIN({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "login",
            data
          });
          dispatch("SET_CURRENT_USER", resp);
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      async REGISTER_USER({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "register",
            data
          });
          dispatch("SET_CURRENT_USER", resp.data);
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      async SEND_MAIL_AFTER_REGISTER({commit}, data){
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "mail/send-mail",
            data
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async FORGOT_PASSWORD({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "forgot-password",
            data
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      async RESET_PASSWORD({ commit }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "reset-password",
            data
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      RESET({ commit }) {
        try {
          commit("RESET_USER");
          resetAuthToken();
          localStorage.removeItem("x-access-token");
          localStorage.removeItem("vuex");
          return Promise.resolve();  
        } catch (error) {
          console.log(error);
        }
      },

      // Helper Methods
      SHOW_ERRORS({ commit }, error){
        let errors = error.response.data.data;
          for (let item in errors) {
            if (errors.hasOwnProperty(item)){
              errors[item].forEach(err => {
                commit("SHOW_SNACKBAR", {
                  snackbar: true,
                  color: "red",
                  message: err
                });
              });
            }
          }
      },

      SET_CURRENT_USER: function({ commit }, response) {
        if (response.data) {
          commit("SET_USER", response.data);
          setAuthToken(response.data.token);
          localStorage.setItem("x-access-token", response.data.token);
        }
      },

      // DASHBOARD - Pet Profile
      async FETCH_USER_PET_PROFILE({commit}) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/get-users-pets"
          });
          commit("SET_USER_PETS", resp.data.data.users_pets)
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async FETCH_PET_BREED_LIST({commit }) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/get-breed-list"
          });
          commit("SET_PET_BREED_LIST", resp.data.data.breed_list);
          commit("SHOW_LOADER", false);
          return resp;
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },
      
      async POST_ADD_USER_PET_PROFILE({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/add-pets",
            data
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },
      
      async POST_DELETE_USER_PET_PROFILE({ commit, dispatch }, id) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/delete-my-pet/" + id
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      // DASHBOARD - Account

      // Not used anywhere yet -  To be removed
      async FETCH_USER_PROFILE_DETAIL({commit}){
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/get-details"
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async POST_UPDATE_USER_PROFILE({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/update",
            data,
            headers:{
              "Content-Type": "multipart/form-data"
            }
          });
          commit("SET_USER_ONLY", resp.data.data.user_details);
          commit("SHOW_LOADER", false);
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      // DASHBOARD - Password
      async POST_UPDATE_USER_PASSWORD({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/update-password",
            data
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      // Dashboard - Loved pet
      async FETCH_GET_LOVED_PETS({commit}) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/get-loved-pet-pros"
          });
          commit("SET_LOVED_PETS", resp.data.data.loved_pet_pros)
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
        }
      },

      async POST_REMOVE_LOVED_PET({ commit, dispatch }, slug) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "pet-pro/like-dislike/" + slug
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },
      
      async POST_CLAIM_DEAL({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "pet-pro/deal/claim/" + data.slug + "/" + data.pet_deal_id
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      async POST_CLAIM_PRODUCT_REVIEW({ commit, dispatch }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "product-reviews/deal/claim/" + data.slug + "/" + data.pet_deal_id
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

      // Not used anywhere yet -  To be removed
      async POST_UPDATE_VET({ commit }, data) {
        try {
          commit("SHOW_LOADER", true);
          const resp = await axios({
            method: "POST",
            url: "profile/update-vet",
            data
          });
          commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "green",
            message: resp.data.message
          });
          commit("SHOW_LOADER", false);
        } catch (error) {
          commit("SHOW_LOADER", false);
          console.log(error);
          dispatch("SHOW_ERRORS",error);
        }
      },

    },
    modules: { business }
  });
};