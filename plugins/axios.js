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
    //    TODO:: will create the global error message
    return err;
  });
};
