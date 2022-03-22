import React, {useState} from "react"; 


function ButtonMessage() {
    const [count, setCount] =
    useState(0);
  
    return (
//       <div className="buttonMessage">
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
        <button> onClick={() => setCount (count + 1)}
        Add to Cart</button>
    </div>
    );
}

  export default ButtonMessage;