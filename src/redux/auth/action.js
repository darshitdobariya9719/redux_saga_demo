const auth={
LOGIN:"LOGIN",
LOGOUT:"LOGOUT",

login:data=>{
return {
    type:auth.LOGIN,
    isLogin:true,
    accesstoken:data.token,
}
},
logout:data=>{
    return {
        type:auth.LOGOUT,
        isLogout:false,
        accesstoken:'',
    }
}


}

export default auth;