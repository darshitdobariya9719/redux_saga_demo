import auth from "./action";

const initState={
    isLogin:false,
    accesstoken:null,
}

export default function rootReducer(state=initState,action){
    switch(action.type){
        case auth.LOGIN:
        return {
            ...state,
            isLogin:true,
            accesstoken:action.accesstoken,
        };
        case auth.LOGOUT: return{
            ...state,
            isLogin:false,
            accesstoken:null,
        };
        default :
        return state
    }
}   

