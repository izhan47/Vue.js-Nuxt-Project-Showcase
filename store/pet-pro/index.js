export default {
    namespaced:true,
    
    state: () => ({
        PET_PRO_LIST: [],
        PET_PRO_CATEGORY_LIST: [],
        PET_PRO_LIST_TOTAL_PAGE:"",
        PET_PRO:"",
        PET_PRO_REVIEW:"",
    }),

    getters: {},

    mutations:{
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
        // SET_PET_PRO_MORE_REVIEW(state, data){
        //     state.PET_PRO_REVIEW.pet_pro_reviews
        // },
    },

    actions:{
        async FETCH_PET_PRO_CATEGORY_LIST({ commit }) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post("pet-pro/get-category-list");
                commit("SET_PET_PRO_CATEGORY_LIST", resp.data.data.category_list);
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
              console.log(error);
            }
        },
    
        async POST_PET_PRO_DETAIL({ commit }, slug) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post(`pet-pro/get-details/${slug}`);
                commit(
                "SET_PET_PRO",
                resp.data.data
                );
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },
    
        async POST_PET_PRO_LIST({ commit }, data){
            try {
                if(process.browser){
                    commit("SHOW_LOADER", true, { root: true });
                    const { business_id, category_id, latitude, longitude, search } = data.form;
                    const formData = new FormData();
                    formData.append("search", search);
                    formData.append("longitude", longitude);
                    formData.append("latitude", latitude);
                    formData.append("category_id", category_id);
                    formData.append("business_id", business_id);
                    const resp = await this.$axios.post(`pet-pro/get-list/${data.page}`,formData,{
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                    });
                    commit("SET_PET_PRO_LIST", resp.data.data.pet_pro_list);
                    commit("SET_PET_PRO_LIST_TOTAL_PAGE", resp.data.data.total_page);
                    commit("SHOW_LOADER", false, { root: true });
                }
            } catch (error) {
              commit("SHOW_LOADER", false, { root: true });
              console.log(error);
            }
        },

        async POST_PET_PRO_REVIEW({ commit }, data) {
            try {
              commit("SHOW_LOADER", true, { root: true });
              const resp = await this.$axios.post(`pet-pro/review/${data.slug}`, data.form);
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
    
        async POST_GET_REVIEWS({ commit }, slug) {
            try {
              commit("SHOW_LOADER", true, { root: true });
              const resp = await this.$axios.post(`pet-pro/get-reviews/${slug}`);
              commit("SET_PET_PRO_REVIEW", resp.data.data)
              commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
              commit("SHOW_LOADER", false, { root: true });
              console.log(error);
            }
        },

        async POST_CLAIM_DEAL({ commit }, data) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post(`pet-pro/deal/claim/${data.slug}/${data.pet_deal_id}`);
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
    
        // async POST_GET_MORE_REVIEWS({ commit }, data) {
        //     try {
        //         commit("SHOW_LOADER", true, { root: true });
        //         const resp = await this.$axios({
        //         method: "POST",
        //         url: "pet-pro/get-reviews/" + data.slug + "/" + data.id
        //         });
        //         commit("SET_PET_PRO_MORE_REVIEW", resp.data.data)
        //         commit("SHOW_LOADER", false, { root: true });
        //     } catch (error) {
        //         commit("SHOW_LOADER", false, { root: true });
        //         console.log(error);
        //     }
        // },
    
    }
}