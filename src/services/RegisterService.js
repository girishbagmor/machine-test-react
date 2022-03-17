import axios from "axios";

const registerApi = (data, accountType) => {
  return new Promise((resolve, rejact) => {
    let url;
    if (accountType === "fan") {
      url = "http://wren.in:3200/api/sign-up/fan";
    } else {
      url = "http://wren.in:3200/api/sign-up/talent";
    }
    axios
      .post(url, data)
      .then((response) => {
        resolve({ msg: "Register Successfully" });
      })
      .catch((error) => {
        resolve({ msg: "Register Successfully" });
      });
  });
};

export { registerApi };
