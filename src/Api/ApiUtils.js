// apiUtils.js
import axios from "axios";
const baseUrl = 'http://owings.co/'; // replace with your actual base URL

// headers and token
export const headers = () => {
  // const token = localStorage.getItem("schrankdesign-app-user-token");
  const token = null;

  // Check if the token exists before including it in headers
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

//API URL'S

//  GET REQUEST
export const get = async (url, params) => {
  try {
    const res = await axios.get(`${baseUrl}${url}`, {
      params,
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

//  POST REQUEST
export const post = async (url, data) => {
  try {
    const res = await axios.post(`${baseUrl}${url}`, data, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

//  PUT REQUEST
export const put = async (url, data) => {
  try {
    const res = await axios.put(`${baseUrl}${url}`, data, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

//  PATCH REQUEST
export const patch = async (url, data) => {
  try {
    const res = await axios.patch(`${baseUrl}${url}`, data, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

//  DELETE REQUEST
export const Delete = async (url) => {
  try {
    const res = await axios.delete(`${baseUrl}${url}`, {
      headers: headers(),
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

// get all countries 
export const getCountries = async () => {
  try {
    const data = await get("api/get-countries");
    return { data, error: null };
  } catch (error) {
    console.error("Error in  get country api", error);
    return { data: null, error: error?.response?.data };
  }
};





// Handle user 
export const HandleLoginSignUp = async (formData) => {
  try {
    const data = await post("api/get-countries", formData);
    return { data, error: null };
  } catch (error) {
    console.error("Error in Login SignUp :", error);
    return { data: null, error: error?.response?.data };
  }
};
