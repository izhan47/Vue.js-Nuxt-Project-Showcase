import { baseURL } from "@/configs/urls";
export default app => {
  const $axios = app.$axios;
  // Set baseURL to something different
  $axios.setBaseURL(baseURL.API_URL);

  $axios.onRequest(config => {
    return config;
  });

  $axios.onResponse(response => {
    return response;
  });

  $axios.onError(err => {
    let errors = err.response.data.data;
    for (let item in errors) {
      if (errors.hasOwnProperty(item)){
        errors[item].forEach(err => {
          app.store.commit("SHOW_SNACKBAR", {
            snackbar: true,
            color: "red",
            message: err
          });
        });
      }
    }
    throw new Error(err);
  });
};