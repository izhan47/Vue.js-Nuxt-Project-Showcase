import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'images/error.jpg',
    loading: 'images/loading-spin.svg',
    attempt: 1
})