
//import React from "react"
import MenuItem from '../MenuItem'
import Menu from "../Menu"
import React from "react"


function MenuApp(props) {
    //hard coding is commented out below

    // let menuItem = [{
    //     "itemId": 1,
    //     "itemPrice": "12",
    //     "itemName": "Lasagne",
    //     "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions."
    // },
    // {
    //     "itemId": 1,
    //     "itemPrice": "12",
    //     "itemName": "Chicken Parmesan",
    //     "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions."
    // }
    // ]
    let menuElements = props.data.map((mi) => <Menu {...mi}></Menu>)
    return (
        <div className="App">
            {menuElements}
        </div>
    )
}

export default MenuApp
