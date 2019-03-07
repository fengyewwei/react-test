import React,{ Component } from 'react';
import './item.css';

class Item extends Component {

    // 子组件要向父组件传值要调用父组件中的方法
    //(总结：不管是调用方法还是属性值都是同通过挂载到props上去传递的)
    delValue(){
        this.props.handDel(this.props.index)
    }
    render() {
        return (

            <li onClick={this.delValue.bind(this)}> {this.props.content }</li>    
        )
    }
}


export default Item;