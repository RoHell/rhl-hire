import axios from "axios";
import router from "../../router";

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log(error.response.status);
    switch (error.response.status) {
      case 401:
        localStorage.clear();
        router.push({ name: "Logowanie" });
        break;
      case 500:
        router.push({ name: "internalError" });
        break;
    }
    return Promise.reject(error);
  }
)