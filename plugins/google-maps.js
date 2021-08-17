import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBaxMfWKuh_m7up5CvIL-LF_EHJ_eWkRWI',
    libraries: 'places',
  },
})
