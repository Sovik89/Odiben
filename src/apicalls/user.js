import { axiosInstance } from ".";

export const RegisterUser = async (payload) => {
  console.log("inside RegisterUSer");
  console.log(payload);
  try {
    const response = await axiosInstance.post('/odiben/api/user/register', payload);
    console.log(response);
    return response.data;
  } catch (err) {
    
    return err;
    //.throw err; // Throw the error to be caught in the React component
  }
};

export const LoginUser = async (payload) => {
  
  console.log("inside LoginUSer",payload);
  try {
    const response = await axiosInstance.post('/odiben/api/user/login', payload);
    console.log(response);
    return response.data;
  } catch (err) {
    
    return err;
    //.throw err; // Throw the error to be caught in the React component
  }
};

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/odiben/api/user/get-current-user', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });//token is added directly
    return response.data;
  } catch (err) {
    return err;
  }
};