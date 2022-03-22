
import logo from './logo.svg';
import "./App.css"
//import Menu from "./components/Menu" //i orginally had this
import MenuApp from "./components/MenuApp"
import ButtonMessage from '.components/extra' //extra code 

function App() {
  let menuData = [
    {
      menuName: "Dinner",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "12",
          itemName: "Lasagne",
          itemDescription:
            "Meat and cheese layered between house-made pasta with bell peppers and onions.",
          itemPairing: "Suggested Pairing: Pair this with an acidic and fruity red wine like Dolcetto or Pinot Noir",
        },
        {
          itemId: 2,
          itemPrice: "10",
          itemName: "Cheese Ravioli",
          itemDescription: "Cheese-filled ravioli served with house red sauce.",
          itemPairing: "Suggested Pairing: Pair this with medium red wine or white wine, such as Zinfandel or Chianti",
        },
        {
          itemId: 3,
          itemPrice: "14",
          itemName: "Chicken Parmesan",
          itemDescription:
            "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti.",
          itemPairing: "Suggested Pairing: Pair this with a fruity and herbal red wine such as Chinanti Classico or Primitivo",

        }
      ]
    },
    {
      menuName: "Dessert",
      menuItems: [
        {
          itemId: 45,
          itemPrice: "10",
          itemName: "Chocolate Lava Cake",
          itemDescription: "Dark chocolate molten lava cake. Serves 2-3.",
          itemPairing: "Suggested Pairing: Pair this with a deep Bourbon or a red blend",

        },
        {
          itemId: 47,
          itemPrice: "8",
          itemName: "Tiramisu",
          itemDescription:
            "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder",
          itemPairing: "Suggested Pairing: Pair this with a dessert style wine like Moscato or a dark rum",

        },
        {
          itemId: 49,
          itemPrice: "5",
          itemName: "Cannolis",
          itemDescription:
            "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips.",
          itemPairing: "Suggested Pairing: Pair this with a German Riesling or a California Chardonnay",

        },
        {
          itemId: 50,
          itemPrice: "5",
          itemName: "Cappuccino",
          itemDescription: "Steamed milk with two ristretto shots of espresso.",
        },
      ]
    }
  ]
  
  
    return (
    <div className="App">
      <MenuApp data={menuData}></MenuApp>
    </div>
  );
}
 
//my new functional component here 
// function buttonMessage() {
//   alert('Item added to cart.');


//   return (
//     <button onClick={buttonMessage}>
//       Item added to cart
//     </button>
//   );
// }

// function ButtonMessage() {
//   const [cart, setCart] =
//   useState(true);

//   return (
//     <div className="buttonMessage">
//       { 
//         ( cart
//         ?
//           <>
//       <button onClick={()=> {setCart(false)}}>Add to Cart </button>
//       </>
//       :
//         alert('Item added to cart')
//       )
//     }
//     </div>
//   );
// }

  
export default App;  //original
//export ButtonMessage;
//export App;  
//export default {App, ButtonMessage}
