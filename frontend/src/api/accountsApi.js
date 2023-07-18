import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const signUpApi = {
  // eslint-disable-next-line camelcase
  createUser: async (username, email, password, re_password) => {
    const data = {
      username,
      email,
      password,
      // eslint-disable-next-line camelcase
      re_password,
    };
    const response = await axios.post(`${BASE_URL}/accounts/`, data);
    // eslint-disable-next-line no-console
    console.log(response);
    return response.data;
  },
};

export default signUpApi;
