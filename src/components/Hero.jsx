import React from 'react'

function Hero({title, description , buttonText,buttonText1 , image}) {
  return (
    <section className="hero">
    <div classname="hero-content">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
      <button>{buttonText1}</button>
    </div>
    <div className="hero-image">
      <img src={image} alt="Coffe beverage" />
    </div>
    </section>
  )
}

export default Hero
