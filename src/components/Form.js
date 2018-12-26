import React, { Component } from 'react';
import Item from './Item'
import '../css/materialize.css';
class Form extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            msg: 0,
        }
    }
    onSubmit(e){
        e.preventDefault();
        const item = new Item(e.target.elements.name.value
            ,e.target.elements.type.value
            ,e.target.elements.restaurant.value
            ,e.target.elements.location.value
            ,e.target.elements.price.value
        );
        
        if(item.name && item.type && item.restaurant && item.location && item.price){
            this.props.addItem(item);
            e.target.elements.name.value = '';
            e.target.elements.type.value = '';
            e.target.elements.restaurant.value = '';
            e.target.elements.location.value = '';
            e.target.elements.price.value = '';

        }
        else{
            this.setState({msg:1});
        }
    }
    render() {
        return(
            <div className="row">
            <div className="col s12 m3"></div>
            <div className="col s12 m6 row z-depth-2">
            <form onSubmit={this.onSubmit}>
                <table>
                    <thead>
                        <tr><th>Item Name </th><th><input name = "name"type="text"/></th></tr>
                    </thead>
                    <thead>
                        <tr><th>Item Type </th><th><input name = "type"type="text"/></th></tr>
                    </thead>
                    <thead>
                        <tr><th>Restaurant Name </th><th><input name = "restaurant"type="text"/></th></tr>
                    </thead>
                    <thead>
                        <tr><th>Location </th><th><input name = "location"type="text"/></th></tr>
                    </thead>
                    <thead>
                        <tr><th>Price </th><th><input name = "price"type="text"/></th></tr>
                    </thead>
                    <thead>
                        {this.state.msg ?(<tr><th><p className="red" >Please fill up all field</p></th></tr>): ''}
                        <tr><th></th><th><button className="waves-effect waves-light btn-large">Add This Item</button></th></tr>
                    </thead>
            </table>
                
            </form>
            </div>
            
            </div>
        )
    }
}
export default Form;