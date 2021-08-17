export default {
    namespaced:true,

    state: () => ({
        // Dashboard - Pet Profile
        PET_BREED_LIST: [],
        // Dashboard - Account
        USER_PETS:"",
        // Dashboard - Loved Pets
        LOVED_PETS:[],
    }),
    
    getters: {},
    mutations:{
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

    actions:{
        // DASHBOARD - Pet Profile
        async FETCH_USER_PET_PROFILE({commit}) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post("profile/get-users-pets");
            commit("SET_USER_PETS", resp.data.data.users_pets)
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },

        async FETCH_PET_BREED_LIST({commit }) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post("profile/get-breed-list");
            commit("SET_PET_BREED_LIST", resp.data.data.breed_list);
            commit("SHOW_LOADER", false, { root: true });
            return resp;
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },
      
        async POST_ADD_USER_PET_PROFILE({ commit, dispatch }, data) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post("profile/add-pets", data);
            commit("SHOW_SNACKBAR", {
                snackbar: true,
                color: "green",
                message: resp.data.message
            }, { root: true });
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },
      
        async POST_DELETE_USER_PET_PROFILE({ commit }, id) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post(`profile/delete-my-pet/${id}`);
            commit("SHOW_SNACKBAR", {
                snackbar: true,
                color: "green",
                message: resp.data.message
            }, { root: true });
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },

        // Account
        async POST_UPDATE_USER_PROFILE({ commit }, data) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post("profile/update", data,{
                headers:{
                "Content-Type": "multipart/form-data"
                }
            });
            commit("SHOW_LOADER", false, { root: true });
            commit("SHOW_SNACKBAR", {
                snackbar: true,
                color: "green",
                message: resp.data.message
            }, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },

        // Password
        async POST_UPDATE_USER_PASSWORD({ commit }, data) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post("profile/update-password", data);
            commit("SHOW_SNACKBAR", {
                snackbar: true,
                color: "green",
                message: resp.data.message
            }, { root: true });
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },

        // Loved pet
        async FETCH_GET_LOVED_PETS({commit}) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post("profile/get-loved-pet-pros");
            commit("SET_LOVED_PETS", resp.data.data.loved_pet_pros)
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },

        async POST_REMOVE_LOVED_PET({ commit }, slug) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post(`pet-pro/like-dislike/${slug}`);
            commit("SHOW_SNACKBAR", {
                snackbar: true,
                color: "green",
                message: resp.data.message
            }, { root: true });
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },

    }
}