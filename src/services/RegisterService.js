import axios from "axios";

const registerApi = (data, accountType) => {
  return new Promise((resolve, rejact) => {
    let url;
    if (accountType === "fan") {
      url = "/api/sign-up/fan";
    } else {
      url = "/api/sign-up/talent";
    }
    axios
      .post(url, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        rejact(error);
      });
  });
};

export { registerApi };
