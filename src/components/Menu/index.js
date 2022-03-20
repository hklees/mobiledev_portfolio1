
import React from 'react'
import MenuItem from "../MenuItem"

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.menuName} Menu</h1>
                {this.props.menuItems.map((elem) => {
                    return (
                        <MenuItem {...elem}></MenuItem>
                        // <div className="App">
                        //     <h1>{elem.menuName}</h1>
                        //     <p>{elem.itemPrice}</p>
                        //     <h2>{elem.itemName}</h2>
                        //     <p>{elem.itemDescription}</p>
                        //     <button>Add to Cart</button>
                        // </div>
                    )
                })}
            </div>
        )
    }
}
