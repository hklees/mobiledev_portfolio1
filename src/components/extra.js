
function ButtonMessage() {
    // const [cart, setCart] =
    // useState(true);
  
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