import Vuex from 'vuex';
import axios from 'axios'
import { baseURL } from '@/configs/urls'
import { setAuthToken, resetAuthToken } from '@/configs/auth'
const token = localStorage.getItem('x-access-token');
if (token) {
  setAuthToken(token)
} else {
  resetAuthToken()
}
axios.defaults.baseURL = baseURL.API_URL
export default () => {
  return new Vuex.Store({
    state: {
      user:{
        bearerToken : null,
        isAuthenticated:false
      },
      pet_pro_list:[],
      category_list:[],
      review_list:[],
      product_review_category_list:[],
      pet_category_list:[],
      alert:{
        snackbar:false,
        color:'',
        message:''
      },
    },
    mutations: {
      SET_PET_PRO_LIST(state, data) {
        state.pet_pro_list = data
      },
      SET_CATEGORY_LIST(state, data) {
        state.category_list = data
      },
      SET_PRODUCT_REVIEW_LIST(state, data) {
        state.review_list = data
      },
      SET_PRODUCT_REVIEW_CATEGORY_LIST(state, data) {
        state.product_review_category_list = data
      },
      SET_PET_CATEGORY_LIST(state, data) {
        state.pet_category_list = data
      },
      SHOW_SNACKBAR(state, data) {
        state.alert = data;
      },


      SET_USER (state, data) {
        console.log('mutate',data)
        state.user = { 'bearerToken': data.token, 'user': data.user , 'isAuthenticated':true }
      },
      RESET_USER (state) {
        state.user = { 'bearerToken': null,'user': null , 'isAuthenticated':false  }
      },
    },
    actions: {
      //Pet Pro
      petProList({commit},data) {
        axios({
          method: 'POST',
          url: 'pet-pro/get-map-list',
          data
        }).then(response => {
          commit('SET_PET_PRO_LIST',response.data.data.pet_pro_list)
        })
      },
      singlePetDetail({dispatch}, slug) {
        return axios({
          method: 'POST',
          url:'pet-pro/get-details/' + slug
        })
      },
      petCategories({commit}) {
       axios({
          method: 'POST',
          url: 'pet-pro/get-category-list',
        }).then(response => {
         commit('SET_PET_CATEGORY_LIST',response.data.data.category_list)
       })
      },
      // Watch Learn
      categoryList({commit},data) {
        axios({
          method: 'POST',
          url: 'watch-and-learn/get-list',
          data
        }).then(response => {
          commit('SET_CATEGORY_LIST',response.data.data.watch_and_learn_list)
        })
      },
      singleCategoryDetail({dispatch}, slug) {
        return axios({
          method: 'POST',
          url:'watch-and-learn/get-details/' + slug
        })
      },
      watchCategories() {
        return axios({
          method: 'POST',
          url: 'watch-and-learn/get-category-list',

        })
      },
      //Comment
      comment({commit}, data) {
        // console.log('news',data)
        return axios({
          method: 'POST',
          url: 'watch-and-learn/store-comment',
          data
        })
      },
      //Product Reviews
      reviewList({commit},data) {
        axios({
          method: 'POST',
          url: 'product-reviews/get-list',
          data
        }).then(response => {
          commit('SET_PRODUCT_REVIEW_LIST',response.data.data.watch_and_learn_list)
        })
      },
      reviewCategories({commit}) {
        axios({
          method: 'POST',
          url: 'product-reviews/get-category-list',
        }).then(response => {
          commit('SET_PRODUCT_REVIEW_CATEGORY_LIST',response.data.data.category_list)
        })
      },
      //News Letter
      newsLetter({commit}, data) {
        // console.log('news',data)
        return axios({
          method: 'POST',
          url: 'store-newsletter',
          data
        })
      },
      //Login
      async login({dispatch}, data) {
        // console.log('login',data)
        return axios({
          method: 'POST',
          url: 'login',
          data
        })
          .then(response => {
            dispatch('setCurrentUser', response)
            return response
          })
      },
      setCurrentUser: function ({ commit }, response) {
        console.log('set curr res',response)
        if (response.data){
          commit('SET_USER', response.data)
          setAuthToken(response.data.token)
          localStorage.setItem('x-access-token', response.data.token);
        }
      },
      reset ({ commit }) {
        commit('RESET_USER')
        resetAuthToken()
        // cookies.remove('x-access-token')
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('vuex');
        return Promise.resolve()
      },
      //Register
      async register({commit}, data) {
        return axios({
          method: 'POST',
          url: 'register',
          data
        });
      },
      //Forgot password
      forgotPassword({commit}, data) {
        console.log('ForgotPassword',data)
        return axios({
          method: 'POST',
          url: 'forgot-password',
          data
        })
      },




    },
    modules: {

    },
  });
};
