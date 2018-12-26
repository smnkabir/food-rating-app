import React, { Component } from 'react';
import Form from './components/Form';
import ItemView from './components/ItemView';
import './App.css';
import './css/materialize.css';

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
        show: 0,
        buttonLabel : 'Show Form',
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
      <header>
        <h1>Food Rating</h1>
      </header>
      <main>
        {this.state.show ? <Form addItem = {this.addItem}/> : ''}
        <button className = "btn waves-effect waves-light" onClick = {this.handelClickAction}>{this.state.buttonLabel}</button>
        <h3>List Of All The Good Mood Foods</h3>
        <hr/>
        <div className="row">
          {this.state.itemList.map((item)=> <ItemView key = {item} item = {item}/>)}
        </div>
      </main>

        <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Nk Production</h5>
              <p className="grey-text text-lighten-4">Department of CSE,Southeast University,Banai,Dhaka.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Find Me</h5>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © Nk @2018
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
