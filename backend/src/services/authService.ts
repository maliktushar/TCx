import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData: any) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const verifyOtp = async (otpData: any) => {
  const response = await axios.post(`${API_URL}/auth/verify-otp`, otpData);
  return response.data;
};

export const loginUser = async (loginData: any) => {
  const response = await axios.post(`${API_URL}/auth/login`, loginData);
  return response.data;
};

export const forgotPassword = async (email: string) => {
  const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
  return response.data;
};

export const resetPassword = async (resetData: any) => {
  const response = await axios.post(`${API_URL}/auth/reset-password`, resetData);
  return response.data;
};

export const updateUserProfile = async (profileData: any, token: string) => {
  const response = await axios.put(`${API_URL}/profile`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
