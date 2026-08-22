import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const profilename = "Starbucks";
  const navigationLinks = ["Home", "Menu", "Offers", "Contact","Rewards","store Locator"];
  return (
    <>
      <Header links={navigationLinks}  name={profilename}/>
      <Hero />
      <Footer />
    </>
  );
}

export default App;
