export default {
    namespaced:true,
    
    state: () => ({}),
    getters: {},
    mutations:{},

    actions:{
        async VALIDATE_LOGIN({ commit }, data) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                await this.$auth.loginWith("local", { data: data });
                this.$router.push("/profile");
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },

        async LOGOUT() {
            try {
                await this.$auth.logout();
                this.$router.push("/login");
            } catch (error) {
                console.log(error);
            }
        },

        async REGISTER_USER({ commit }, data) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                const mail_form = {...data};
                mail_form.address = data.email;

                let loginData =  {...data};
                delete loginData.name

                await this.$axios.post("register", data);
                await this.$axios.post("mail/send-mail",mail_form);
                await this.$auth.loginWith("local", { data: loginData });

                this.$router.push("/profile");

                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },

        async FORGOT_PASSWORD({ commit, dispatch }, data) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post("forgot-password", data);
                commit("SHOW_SNACKBAR", {
                    snackbar: true,
                    color: "green",
                    message: resp.data.message
                }, {root: true});
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },

        async RESET_PASSWORD({ commit }, data) {
            try {
                commit("SHOW_LOADER", true, { root: true });
                const resp = await this.$axios.post("reset-password", data);
                commit("SHOW_SNACKBAR", {
                    snackbar: true,
                    color: "green",
                    message: resp.data.message
                }, {root: true});
                commit("SHOW_LOADER", false, { root: true });
            } catch (error) {
                commit("SHOW_LOADER", false, { root: true });
                console.log(error);
            }
        },
    }
}