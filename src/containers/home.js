import React from 'react';
import Num from "./num";
import {Link,Route,Redirect} from 'react-router-dom';
import List from "../components/list";
import Show from "../components/show";
import {connect} from 'react-redux';
import {logout} from "../redux/auth.redux";
import Query from './Query';


@connect(
    state=>state.auth,
    {logout}
)

class Home extends React.Component{
    render(){
        const match=this.props.match
        const app=(
            <div>
                <h3>home page</h3>
                <button onClick={this.props.logout}>退出登录</button>
                <ul>
                    <li><Link to={`${match.url}`} >首页</Link></li>
                    <li><Link to={`${match.url}/list`}>列表</Link></li>
                    <li><Link to={`${match.url}/show`}>详情</Link></li>
                </ul>
                <button><Link to={`${match.url}/query`}>查</Link></button>

                <Route path={`${match.url}`}  exact component={Num}></Route>
                <Route path={`${match.url}/list`} component={List}></Route>
                <Route path={`${match.url}/show`} component={Show}></Route>
                <Route path={`${match.url}/query`} component={Query}></Route>


            </div>
        )

        const RedirectLogin=<Redirect to='/login'></Redirect>
        return this.props.isAuth?app:RedirectLogin
    }
}

export default Home;