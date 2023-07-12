const initialState = {
    isLoggedIn: false,
    user: null,
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
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

const initialState = {
    todos: [],
},

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS': 
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
};
  
