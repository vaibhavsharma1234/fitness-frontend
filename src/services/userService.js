import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL

export const authService = {
  // Signup action
  async signup(formData) {
    try {
      // Make an API call to your registration endpoint
      const response = await axios.post(`${API_BASE_URL}/v1/auth/register`, formData);
      console.log("response",response)

      if (response.status === 200) {
        // Registration successful, return user data
        return response.data;
      } else {
        // Handle other response statuses or error cases
        throw new Error('Registration failed.');
      }
    } catch (error) {
      // Handle network errors or other issues
      throw new Error('Registration failed. Please try again.');
    }
  },
  async login(formData){
    try{
      const response = await axios.post(`${API_BASE_URL}/v1/auth/login`, formData);
      console.log("response",response)
      return response.data

    }catch(e){
      throw new Error('Login failed. Please try again.');

    }
  }
};
