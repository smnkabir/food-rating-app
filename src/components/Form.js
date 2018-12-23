import React, { Component } from 'react';
import Item from './Item'
class Form extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const item = new Item(e.target.elements.name.value
            ,e.target.elements.type.value
            ,e.target.elements.restaurant.value
            ,e.target.elements.location.value
            ,e.target.elements.price.value
        );
        e.target.elements.name.value = '';
        e.target.elements.type.value = '';
        e.target.elements.restaurant.value = '';
        e.target.elements.location.value = '';
        e.target.elements.price.value = '';
        this.props.addItem(item);
    }
    render() {
        return(
            <div>
            <form onSubmit={this.onSubmit}>
                <table>
                    <tr><th>Item Name </th><th><input name = "name"type="text"/></th></tr>
                    <tr><th>Item Type </th><th><input name = "type"type="text"/></th></tr>
                    <tr><th>Restaurant Name </th><th><input name = "restaurant"type="text"/></th></tr>
                    <tr><th>Location </th><th><input name = "location"type="text"/></th></tr>
                    <tr><th>Price </th><th><input name = "price"type="text"/></th></tr>
                    <tr><th></th><th><button>Add This Item</button></th></tr>
                </table>
            
            </form>
            </div>
        )
    }
}
export default Form;