// reducers.js
const initialState = {
    isLoggedIn: false,
    user: null,
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        // Perform your actual login authentication logic here
        // For this example, we're simply checking if the username and password are 'admin'
        if (action.payload.username === 'admin' && action.payload.password === 'admin') {
          return {
            ...state,
            isLoggedIn: true,
            user: action.payload.username,
          };
        } else {
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        }
      default:
        return state;
    }
  };
  