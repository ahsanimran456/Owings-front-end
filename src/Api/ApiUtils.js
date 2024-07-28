// apiUtils.js
import axios from "axios";
const baseUrl = 'http://192.168.100.25/owings/'; // replace with your actual base URL

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




// Handle user 
export const HandleLoginSignUp = async (formData, url) => {
  try {
    const data = await post(url, formData);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

// get all countries 
export const getCountries = async () => {
  try {
    const data = await get("api/get-countries");
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

// get cities 
export const getCities = async (id) => {
  try {
    const data = await get(`api/get-cities/${id}`);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};



// Handle ResendOTP 
export const ResendOTP = async (formData) => {
  try {
    const data = await post("api/resend-otp", formData);
    return { data, error: null };
  } catch (error) {
    // console.error("Error in resend otp :", error);
    return { data: null, error: error };
  }
};

// Handle HandleConfirmOPT 
export const HandleConfirmOPT = async (formData) => {
  try {
    const data = await post("api/verify-otp", formData);
    return { data, error: null };
  } catch (error) {
    // console.error("Error in resend otp :", error);
    return { data: null, error: error };
  }
};


// Handle HandleForgetPassword 
export const HandleForgetPassword = async (formData) => {
  try {
    const data = await post("api/forgot-password", formData);
    return { data, error: null };
  } catch (error) {
    // console.error("Error in resend otp :", error);
    return { data: null, error: error };
  }
};


export const HandleSetPassword = async (formData) => {
  try {
    const data = await post("api/reset-password", formData);
    return { data, error: null };
  } catch (error) {
    // console.error("Error in resend otp :", error);
    return { data: null, error: error };
  }
};
