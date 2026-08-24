import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import heroCoffee from "./assets/hero-coffee.jpg"

function App() {
  const [cartCount,setCartCount] = useState(0);

  
  const profilename = "Starbucks";
  const navigationLinks = ["Home", "Menu", "Offers", "Contact","Rewards","store Locator"];
  function handleAddToCart(product){
    console.log("Added", product);
  
    setCartCount(previousValue => previousValue + 1);

  }
  const products = [
  {
    id: 1,
    name: "Cold Coffee",
    price: 250,
    image: heroCoffee,
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 280,
    image: heroCoffee,
  },
  {
    id: 3,
    name: "Cafe Latte",
    price: 260,
    image: heroCoffee,
  },
];
  return (
    <>
      <Header links={navigationLinks}  name={profilename}/>
       <p>Cart:{cartCount}</p>
      <Hero 
      title="Discover Your Perfect Coffee"
        description="Discover your favorite coffee and make every moment special."
        buttonText1= "Explore Menu"
        buttonText="Order Now"
        image = {heroCoffee}
         />
        <section>
          <h2>Popular Drinks</h2>
          <div>
            {products.map((product)=>(
              <ProductCard
                key={product.id}
                name ={product.name}
                price={product.price}
                image={product.image}
                onAddToCart={() => handleAddToCart(product)}
                />
            ))}
          </div>
        </section>
      <Footer />
    </>
  );
}

export default App;
