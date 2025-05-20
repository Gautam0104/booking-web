import axios from 'axios';

const API_BASE_URL = 'https://api.stayigo.com/v1.0';

export const signupUser = async (formData) => {
  const payload = {
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    userType: 'Guest',
    signupWith: 'Email'
  };

  const response = await axios.post(`${API_BASE_URL}/auth/signup`, payload);
  return response.data;
};




export const loginUser = async ({ identifier, password, userType = "Guest" }) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    identifier,
    password,
    userType
  });

  return response.data;
};



