import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

axios.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
  Accept: "application/json"
};

Vue.use(VueAxios, axios);
