import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import heroCoffee from "./assets/hero-coffee.jpg"

function App() {
  const profilename = "Starbucks";
  const navigationLinks = ["Home", "Menu", "Offers", "Contact","Rewards","store Locator"];
  return (
    <>
      <Header links={navigationLinks}  name={profilename}/>
      <Hero 
      title="Discover Your Perfect Coffee"
        description="Discover your favorite coffee and make every moment special."
        buttonText1= "Explore Menu"
        buttonText="Order Now"
        image = {heroCoffee}
         />
      <Footer />
    </>
  );
}

export default App;
