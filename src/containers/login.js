import React from 'react';
import {connect}  from 'react-redux';
import {login} from "../redux/auth.redux";
import {Redirect} from 'react-router-dom'


@connect(
    state=>state.auth,
    {login}
)


class Login  extends React.Component{
    render(){
        return(
            <div>
                {this.props.isAuth?<Redirect to='/home'></Redirect>:null}
                <span>login page</span><br/>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Login;