import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import {Route,Redirect,Switch,HashRouter} from 'react-router-dom';
import Login from "./containers/login";
import Home from "./containers/home";

const  reduxDevtools=window.devToolsExtension?window.devToolsExtension():f=>f;
const store=createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

ReactDOM.render(
    <Provider  store={store}>
        <HashRouter>
            <div>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Redirect to='/home'></Redirect>
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.querySelector('#root')
)