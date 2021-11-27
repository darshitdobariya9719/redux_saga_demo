import React from 'react'
import './login.css'
import action from '../redux/auth/action'
import {useSelector,useDispatch} from  'react-redux'
import AuthSagaActions from "../redux/authsaga/action";
import { Spin, Space } from 'antd';   
const {login,logout}=action;
const { loginSaga, logoutSaga } = AuthSagaActions;
const Login = () => {
    
    const dispatch = useDispatch();
    const isLogin = useSelector(state =>state.auth);
    const loading = useSelector((state) => {console.log(state,"ppddppddppdd");return state.authSaga.loading});
    console.log(isLogin.isLogin,"deta1",isLogin.accesstoken)
const loginfun=(props)=>{
    const accesstoken={token:'ddddddddddddddddd'};
    // dispatch(login(accesstoken));
    dispatch(loginSaga())
    // console.log(isLogin,"deta1")
    // setTimeout(()=>{console.log(isLogin,"deta2")},5000)
}
const logoutfun=()=>{
    // dispatch(logout())
    dispatch(logoutSaga())
    // console.log(isLogin,"deta1")
}

    return (
        <div>
        <div className="item">
            <button onClick={()=>loginfun()} >Login</button>
            <button onClick={()=>logoutfun()} >Logout</button>
        </div>
        {loading ? (
                    
            <div className="spinnerLod ml-3 d-inline-block">
              <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
              loding.......
            </div>
          
        ) : null}
        </div>
    )
}
export default Login;