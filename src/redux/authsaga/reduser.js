import actions from "./action";

const initState = { idToken: null,loading:false };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: action.token,
        loading:false
      };
    case actions.LOGOUT:
      return initState;
    case actions.LODER_ON:
      return {
        ...state,
        loading:true
      };
    case actions.LODER_OFF:
        return {
          ...state,
          loading:false
      }
    default:
      return state;
  }
}