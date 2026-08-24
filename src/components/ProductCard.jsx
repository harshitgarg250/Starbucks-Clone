

function ProductCard({name , price , image ,onAddToCart}) {
  return (
    <article className="product-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
       
    </article>
  )
}

export default ProductCard;
