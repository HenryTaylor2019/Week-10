// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://Henry.restful.training/api/blog",

    // use your own key
    params: {
        key: "e0960cf9bc8a5ba0c721b4488af5fb8a2b4a931f",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});