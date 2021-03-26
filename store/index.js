import Vuex from 'vuex';
import axios from 'axios'
import Drawer from './Drawer';
import { baseURL } from '@/configs/urls'


axios.defaults.baseURL = baseURL.API_URL
export default () => {
  return new Vuex.Store({
    state: {
      pet_pro_list:[],
      category_list:[],
    },
    mutations: {
      SET_PET_PRO_LIST(state, data) {
        state.pet_pro_list = data
      },
      SET_CATEGORY_LIST(state, data) {
        state.category_list = data
      },
    },
    actions: {
      //Pet Pro
      PetProList({commit}) {
        axios({
          method: 'POST',
          url: 'pet-pro/get-map-list',
        }).then(response => {
          // console.log('res',response.data.data.pet_pro_list)
          commit('SET_PET_PRO_LIST',response.data.data.pet_pro_list)
        })
      },
      SinglePetDetail({dispatch}, slug) {
       // console.log('pet slug',slug)
        return axios({
          method: 'POST',
          url:'pet-pro/get-details/' + slug
        })
      },
      // Watch Learn
      CategoryList({commit}) {
        axios({
          method: 'POST',
          url: 'watch-and-learn/get-list',
        }).then(response => {
          console.log('res',response.data.data.watch_and_learn_list)
          commit('SET_CATEGORY_LIST',response.data.data.watch_and_learn_list)
        })
      },
      SingleCategoryDetail({dispatch}, slug) {
        console.log('pet slug',slug)
        return axios({
          method: 'POST',
          url:'pet-pro/get-details/' + slug
        })
      },
    },
    modules: {
      Drawer
    },
  });
};
