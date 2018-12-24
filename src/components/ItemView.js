import React, { Component } from 'react';

class ItemView extends Component{
    constructor(props){
        super(props);
        this.state={
            vote: 0,
        }
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        
    }
    upVote(){
        this.setState(()=>{
          //  console.log(this.state.vote);
            return{
                vote: this.state.vote + 1,
            }
        });
    }
    downVote(){
        if(this.state.vote >0)
            this.setState(()=>{
                return{
                    vote: this.state.vote - 1,
                }
            });
    }
    render(){
        return(
            <div>
            <p> {this.props.item.name} </p>
            <p> ({this.props.item.type}) </p>
            <p>At {this.props.item.restaurant},{this.props.item.location} </p>
            <input value = {"+" + this.state.vote.toString() + " Votes"}  type="text"/>
            <button onClick={this.upVote}>+</button>
            <button onClick={this.downVote}>-</button>
            <hr/>

            </div>
        );
    }
}
export default ItemView;