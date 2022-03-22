import React from 'react'
import ButtonMessage from '../MenuButton' 
//import ButtonMessage from '../MenuButton' //extra code
import AddOn from '../MenuAddon'


export default class MenuItem extends React.Component {
    render() {
        return (
            <div class="menu-item" id={`menu-item-${this.props.itemId}`}>
                <p>${this.props.itemPrice}</p>
                <h2>{this.props.itemName}</h2>
                <p>{this.props.itemDescription}</p>
                <p>{this.props.itemPairing}</p> 
                <ButtonMessage></ButtonMessage>
                {/* <button>Add to Cart </button> */}
            </div>
        )
    }
}

