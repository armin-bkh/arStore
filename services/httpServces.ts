import axios from "axios";

axios.defaults.baseURL = "https://nodejs-post-app.herokuapp.com/api";

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
