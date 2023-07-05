// actions.js
import axios from 'axios'; // Import Axios library

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      // Make an API call to authenticate the user
      const response = await axios.post('/api/login', { username, password });

      // Assuming the API returns a success response with user data or token
      const userData = response.data;

      // Dispatch a login success action with the user data
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: userData,
      });

      // Optional: Save the user token in local storage or cookies

    } catch (error) {
      // Handle any errors during the API call or authentication process
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.message,
      });
    }
  };
};
