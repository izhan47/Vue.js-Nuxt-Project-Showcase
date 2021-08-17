export default {
    namespaced:true,

    state: () => ({
      WAL_CATEGORY_LIST: [],
      WAL_LIST: [],
      WAL_LIST_TOTAL_PAGE: "",
      WAL:"",
      WAL_COMMENTS:"",
    }),
    
    getters: {
        GET_WAL_CATEGORY_LIST:function(state){
            return state.WAL_CATEGORY_LIST.map(function(item){
                return {
                    value: item.value,
                    text: item.label
                }
            });
        }
    },

    mutations:{
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
        SET_WAL_COMMENTS(state, data){
            state.WAL_COMMENTS = data;
        },
    },

    actions:{
        async FETCH_WAL_CATEGORY_LIST({ commit }) {
            try {
            commit("SHOW_LOADER", true, { root: true });
            const resp = await this.$axios.post("watch-and-learn/get-category-list")
            commit("SET_WAL_CATEGORY_LIST", resp.data.data.category_list);
            commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
            commit("SHOW_LOADER", false, { root: true });
            console.log(error);
            }
        },

        async POST_WAL_LIST({ commit }, data) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post(`watch-and-learn/get-list/${data.page}`, data.form);
                commit(
                "SET_WAL_LIST",
                resp.data.data.watch_and_learn_list
                );
                commit("SET_WAL_LIST_TOTAL_PAGE", resp.data.data.total_page);
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },
    
        async POST_WAL_DETAIL({ commit }, slug) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post(`watch-and-learn/get-details/${slug}`);
                commit(
                "SET_WAL",
                resp.data.data.watch_and_learn
                );
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },
    
        async POST_WAL_COMMENT({ commit }, data) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post("watch-and-learn/store-comment", data);
                commit("SHOW_SNACKBAR", {snackbar: true,color: "green",message: resp.data.message},{ root: true });
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },

        async POST_WAL_GET_COMMENT({ commit }, slug){
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post(`watch-and-learn/get-comments/${slug}/0/0`);
                commit("SET_WAL_COMMENTS", resp.data.data.comments);
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },

        async POST_WAL_DELETE_COMMENT({ commit }, data){
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post(`watch-and-learn/delete-comment/${data.slug}/${data.id}`);
                commit("SHOW_SNACKBAR", {snackbar: true,color: "green",message: resp.data.message},{ root: true });
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },
    }
}