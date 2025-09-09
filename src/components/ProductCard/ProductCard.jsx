import React from 'react'
import './ProductCard.css'

export const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="/images/cartaPokemon.png" alt="Carta Pokémon" className="card-image" />
      <h3 className="card-title">Carta Pokemon</h3>
      <p className="card-price">$120.00</p>
      <button className="card-button">Añadir al carrito</button>
    </div>
  )
}
