import React, { Component } from 'react';
import Form from './components/Form';
import ItemView from './components/ItemView';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: 0,
      buttonLabel: 'Show Form',
      itemList : [],

    }
    this.handelClickAction = this.handelClickAction.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem(item){
    //console.log(JSON.stringify(item));
   // let string = JSON.stringify(item);
    this.state.itemList.push(item);
    this.setState(()=>{
      return{
        itemList: this.state.itemList,
      }
    })
  }
  handelClickAction(){
    this.setState(()=>{
      if(this.state.show === 0)
        return {
          show : 1,
          buttonLabel : 'Hide',
        }
      else
        return {
          show : 0,
          buttonLabel : 'Show Form',
        }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.show ? <Form addItem = {this.addItem}/> : ''}
        <button onClick = {this.handelClickAction}>{this.state.buttonLabel}</button>
        <h1>List Of All The Good Mood Foods</h1>
        <hr/>
        {this.state.itemList.map((item)=> <ItemView key = {item} item = {item}/>)}
      </div>
    );
  }
}

export default App;
