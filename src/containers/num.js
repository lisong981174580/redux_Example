import React from 'react';
import {connect} from 'react-redux';
import {addNum,reduceNum,addNumAsync} from "../redux/index.redux";

@connect(
    state=>({num:state.counter}),
    {addNum,reduceNum,addNumAsync}
)

class Num extends React.Component{
    render(){
        return(
            <div>
                <span>当前数字:{this.props.num}</span><br/>
                <button onClick={this.props.addNum}>加一个</button><br/>
                <button onClick={this.props.reduceNum}>减一个</button><br/>
                <button onClick={this.props.addNumAsync}>过两秒加一个</button>
            </div>
        )
    }
}

export default Num;