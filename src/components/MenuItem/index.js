import React from 'react'

export default class MenuItem extends React.Component {
    render() {
        return (
            <div class="menu-item" id={`menu-item-${this.props.itemId}`}>
                <p>${this.props.itemPrice}</p>
                <h2>{this.props.itemName}</h2>
                <p>{this.props.itemDescription}</p>
                <p>{this.props.itemPairing}</p>
                <button onClick={ButtonMessage}>Add to Cart</button>

            </div>
        )
    }
}
function ButtonMessage() {
    const [cart, setCart] =
    useState(true);
  
    return (
      <div className="buttonMessage">
        { 
          ( cart
          ?
            <>
        <button onClick={()=> {setCart(false)}}>Add to Cart </button>
        </>
        :
          alert('Item added to cart')
        )
      }
      </div>
    );
  }
  export default ButtonMessage;
