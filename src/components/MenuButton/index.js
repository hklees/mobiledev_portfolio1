//this is to display how many times an item was added to cart when the
//user clicks the Add to Cart button

import React, {useState} from 'react'; 

//new functional component for button click
function ButtonClick() {
    const [count, setCount] = useState(0);
  
    return (
//       <div className="buttonClick">
//         { 
//           ( cart
//           ?
//             <>
//         <button onClick={()=> {setCart(false)}}>Add to Cart </button>
//         </>
//         :
//           alert('Item added to cart')
//         )
//       }
//       </div>
//     );
//   }
    <div>
        <p> Item has been added to cart {count} times.</p>
        <button onClick = {() => setCount (count + 1)}>
        Add to Cart </button>
    </div>
    );
}

  export default ButtonClick;