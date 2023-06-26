import axios from "axios";

const BASE_URL = "http://localhost:8000/accounts";

const signUpApi = {
  createUser: async (username, email, password, repassword) => {
    const data = {
      username,
      email,
      password,
      re_password: repassword,
    };
    const response = await axios.post(`${BASE_URL}/`, data);
    window.alert("ok!");
    return response.data;
  },
};

export default signUpApi;
