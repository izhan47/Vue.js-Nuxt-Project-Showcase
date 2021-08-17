export default {
    namespaced:true,
    
    state: () => ({
        PRODUCT_REVIEW_CATEGORY_LIST: [],
        PRODUCT_REVIEW_LIST: [],
        PRODUCT_REVIEW_TOTAL_PAGE: "",
    }),

    getters: {},

    mutations:{
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
    },

    actions:{
        async FETCH_PRODUCT_REVIEW_CATEGORIES({commit}){
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post("product-reviews/get-category-list");
            commit("SET_PRODUCT_REVIEW_CATEGORY_LIST", resp.data.data.category_list);
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },

        async POST_PRODUCT_REVIEW_LIST({commit}, data){
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post(`product-reviews/get-list/${data.page}`,data.form);
            commit(
                "SET_PRODUCT_REVIEW_LIST",
                resp.data.data.watch_and_learn_list
            );
            commit("SET_PRODUCT_REVIEW_TOTAL_PAGE", resp.data.data.total_page);
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },
        
        async POST_CLAIM_PRODUCT_REVIEW({ commit }, data) {
            try {
              commit("SHOW_LOADER", true, { root: true });
              const resp = await this.$axios.post(`product-reviews/deal/claim/${data.slug}/${data.pet_deal_id}`);
              commit("SHOW_SNACKBAR", {
                snackbar: true,
                color: "green",
                message: resp.data.message
              },{ root: true });
              commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
              commit("SHOW_LOADER", false, { root: true });
              console.log(error);
            }
        },
    }
}