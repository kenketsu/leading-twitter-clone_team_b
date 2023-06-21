import axios from 'axios'

const BASE_URL = 'http://localhost:8000/accounts'

const signUpApi = {
  createUser: async (text) => {
    const response = await axios.post(`${BASE_URL}/`, {
      text,
    })
    return response.data
  },
  
}

export default signUpApi