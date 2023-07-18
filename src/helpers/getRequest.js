import axios from "axios";

const getRequest = (url) => {
  return axios({
    method: "get",
    url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export default getRequest;
