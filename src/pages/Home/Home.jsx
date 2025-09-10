import React from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './Home.css';

const Home = () => {
    // Cartas destacadas para la página de inicio
    const featuredCards = [
        { 
            name: 'Dragón de Fuego', 
            type: 'Criatura', 
            rarity: 'Épica', 
            price: '150.00', 
            image: '/images/cartaPokemon.png' 
        },
        { 
            name: 'Guerrero Legendario', 
            type: 'Criatura', 
            rarity: 'Legendaria', 
            price: '300.00', 
            image: '/images/cartaPokemon.png' 
        },
        { 
            name: 'Espada del Destino', 
            type: 'Equipo', 
            rarity: 'Legendaria', 
            price: '400.00', 
            image: '/images/cartaPokemon.png' 
        },
        { 
            name: 'Fénix Renacido', 
            type: 'Criatura', 
            rarity: 'Épica', 
            price: '180.00', 
            image: '/images/cartaPokemon.png' 
        }
    ];

    const handleAddToCart = (card) => {
        console.log('Agregando al carrito:', card);
        // Aquí se implementaría la lógica del carrito
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Bienvenido a Geek Cards</h1>
                    <p className="hero-subtitle">Descubre las mejores cartas coleccionables del mundo geek</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Explorar Cartas</button>
                        <button className="btn-secondary">Ver Ofertas</button>
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <h2 className="section-title">Cartas Destacadas</h2>
                    <p className="section-subtitle">Las cartas más populares de nuestra colección</p>
                    
                    <div className="cards-grid">
                        {featuredCards.map((card, index) => (
                            <ProductCard 
                                key={index} 
                                card={card} 
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="categories-section">
                <div className="container">
                    <h2 className="section-title">Categorías</h2>
                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="category-icon">🃏</div>
                            <h3>Criaturas</h3>
                            <p>Dragones, bestias y seres mágicos</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">⚔️</div>
                            <h3>Equipos</h3>
                            <p>Armas, armaduras y objetos mágicos</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">✨</div>
                            <h3>Hechizos</h3>
                            <p>Magia y poderes sobrenaturales</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">🧪</div>
                            <h3>Consumibles</h3>
                            <p>Pociones y objetos especiales</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
