import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAllUsers = async (token: string) => {
  const response = await axios.get(`${API_URL}/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const getUserById = async (id: string, token: string) => {
  const response = await axios.get(`${API_URL}/admin/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const deleteUser = async (id: string, token: string) => {
  const response = await axios.delete(`${API_URL}/admin/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const addCourse = async (courseData: any, token: string) => {
  const response = await axios.post(`${API_URL}/admin/courses`, courseData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const editCourse = async (id: string, courseData: any, token: string) => {
  const response = await axios.put(`${API_URL}/admin/courses/${id}`, courseData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const deleteCourse = async (id: string, token: string) => {
  const response = await axios.delete(`${API_URL}/admin/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const addLiveProject = async (projectData: any, token: string) => {
  const response = await axios.post(`${API_URL}/admin/live-projects`, projectData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const editLiveProject = async (id: string, projectData: any, token: string) => {
  const response = await axios.put(`${API_URL}/admin/live-projects/${id}`, projectData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const deleteLiveProject = async (id: string, token: string) => {
  const response = await axios.delete(`${API_URL}/admin/live-projects/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
