import React, { Component } from 'react';
import Item from './Item.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:['金','木','水','火','土'],
      myValue:''
    }
    this.changeValue = this.changeValue.bind(this);
    this.addValue = this.addValue.bind(this);
  }

  changeValue(e){
    this.setState({
      myValue:e.target.value
    })
  }

  // 添加操作
  addValue(e){
   var copyList =  [...this.state.list];
   this.setState({
     list:[...copyList,this.state.myValue]
   })
  }

  //删除操作
  delValue(index){
    const copyList = [...this.state.list];
    copyList.splice(index,1);
    this.setState({
      list:copyList
    })
    console.log("ss",index);
  }

  render() {
    return (
      <React.Fragment>
      <div className="App">
      hello,fire~{this.state.myValue}  <br/>
      <input className="inp" value={this.state.myValue} onChange={this.changeValue} /><button className="add-btn" onClick={this.addValue}>添加</button>
      </div>
      <div className="App">
      <ul class="ul-list">
      {
        this.state.list.map((item,index)=>{

          return (
                <Item
                    key={index}  
                    content={item} 
                    index={index} 
                    handDel={this.delValue.bind(this)} 
                />
                )
        })
      }
      </ul>
      </div>
      </React.Fragment>  
    );
  }
}

export default App;
