import React, { Component } from 'react';
import '/home/nk/Desktop/web_app/food-rating-app/src/css/materialize.css';
import '../css/ItemView.css';
class ItemView extends Component{
    constructor(props){
        super(props);
        this.state={
            vote: this.props.item.vote,
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
                <div class="col s12 m4 z-depth-2">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">{this.props.item.name}</span>
                    <p>({this.props.item.type})</p>
                    <p>At {this.props.item.restaurant},{this.props.item.location}</p>
                    <input className="valing center" value = {"+" + this.state.vote.toString() + " Votes"}  type="text"/>
                    </div>
                    <div class="card-action">
                    <button className="waves-effect waves-light btn-large" onClick={this.upVote}>+</button>
                    <button className="waves-effect waves-light btn-large" onClick={this.downVote}>-</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default ItemView;