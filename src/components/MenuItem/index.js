import React from 'react'

export default class MenuItem extends React.Component {
    render() {
        return (
            <div class="menu-item" id={`menu-item-${this.props.itemId}`}>
                <p>${this.props.itemPrice}</p>
                <h2>{this.props.itemName}</h2>
                <p>{this.props.itemDescription}</p>
                <p>{this.props.itemPairing}</p>
                <button onClick={buttonMessage}>Add to Cart</button>
            </div>
        )
    }
}

