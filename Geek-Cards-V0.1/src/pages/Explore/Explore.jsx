import React, { useState, useMemo } from 'react';
import CardGrid from './CardGrid';
import './Explore.css';

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedRarity, setSelectedRarity] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(12);

    // Datos de ejemplo de cartas
    const allCards = [
        { name: 'Dragón de Fuego', type: 'Criatura', rarity: 'Épica', price: '150.00', image: '/images/cartaPokemon.png' },
        { name: 'Hechizo de Curación', type: 'Hechizo', rarity: 'Común', price: '50.00', image: '/images/cartaPokemon.png' },
        { name: 'Guerrero Legendario', type: 'Criatura', rarity: 'Legendaria', price: '300.00', image: '/images/cartaPokemon.png' },
        { name: 'Armadura Mágica', type: 'Equipo', rarity: 'Rara', price: '200.00', image: '/images/cartaPokemon.png' },
        { name: 'Bola de Fuego', type: 'Hechizo', rarity: 'Común', price: '75.00', image: '/images/cartaPokemon.png' },
        { name: 'Fénix Renacido', type: 'Criatura', rarity: 'Épica', price: '180.00', image: '/images/cartaPokemon.png' },
        { name: 'Espada del Destino', type: 'Equipo', rarity: 'Legendaria', price: '400.00', image: '/images/cartaPokemon.png' },
        { name: 'Escudo Protector', type: 'Equipo', rarity: 'Rara', price: '160.00', image: '/images/cartaPokemon.png' },
        { name: 'Mago Arcano', type: 'Criatura', rarity: 'Rara', price: '120.00', image: '/images/cartaPokemon.png' },
        { name: 'Poción de Fuerza', type: 'Consumible', rarity: 'Común', price: '30.00', image: '/images/cartaPokemon.png' },
        { name: 'Dragón de Hielo', type: 'Criatura', rarity: 'Épica', price: '170.00', image: '/images/cartaPokemon.png' },
        { name: 'Teletransporte', type: 'Hechizo', rarity: 'Rara', price: '140.00', image: '/images/cartaPokemon.png' },
        { name: 'Golem de Piedra', type: 'Criatura', rarity: 'Común', price: '80.00', image: '/images/cartaPokemon.png' },
        { name: 'Anillo de Poder', type: 'Equipo', rarity: 'Legendaria', price: '350.00', image: '/images/cartaPokemon.png' },
        { name: 'Rayo Eléctrico', type: 'Hechizo', rarity: 'Común', price: '60.00', image: '/images/cartaPokemon.png' },
        { name: 'Hada Mágica', type: 'Criatura', rarity: 'Rara', price: '110.00', image: '/images/cartaPokemon.png' },
        { name: 'Botas de Velocidad', type: 'Equipo', rarity: 'Común', price: '90.00', image: '/images/cartaPokemon.png' },
        { name: 'Invisibilidad', type: 'Hechizo', rarity: 'Épica', price: '190.00', image: '/images/cartaPokemon.png' },
        { name: 'Lobo Salvaje', type: 'Criatura', rarity: 'Común', price: '70.00', image: '/images/cartaPokemon.png' },
        { name: 'Pergamino de Sabiduría', type: 'Consumible', rarity: 'Rara', price: '130.00', image: '/images/cartaPokemon.png' },
        { name: 'Demonio del Abismo', type: 'Criatura', rarity: 'Legendaria', price: '500.00', image: '/images/cartaPokemon.png' },
        { name: 'Escudo de Hielo', type: 'Equipo', rarity: 'Épica', price: '220.00', image: '/images/cartaPokemon.png' },
        { name: 'Curación Mayor', type: 'Hechizo', rarity: 'Rara', price: '150.00', image: '/images/cartaPokemon.png' },
        { name: 'Ángel Guardián', type: 'Criatura', rarity: 'Legendaria', price: '450.00', image: '/images/cartaPokemon.png' }
    ];

    const types = ['Todos', 'Criatura', 'Hechizo', 'Equipo', 'Consumible'];
    const rarities = ['Todas', 'Común', 'Rara', 'Épica', 'Legendaria'];

    // Filtrar cartas basado en los criterios de búsqueda
    const filteredCards = useMemo(() => {
        return allCards.filter(card => {
            const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType === '' || selectedType === 'Todos' || card.type === selectedType;
            const matchesRarity = selectedRarity === '' || selectedRarity === 'Todas' || card.rarity === selectedRarity;

            return matchesSearch && matchesType && matchesRarity;
        });
    }, [searchTerm, selectedType, selectedRarity]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset a la primera página al buscar
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setCurrentPage(1);
    };

    const handleRarityChange = (e) => {
        setSelectedRarity(e.target.value);
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedType('');
        setSelectedRarity('');
        setCurrentPage(1);
    };

    const handleAddToCart = (card) => {
        console.log('Agregando al carrito:', card);
        // Aquí se implementaría la lógica del carrito
    };

    return (
        <div className="explore-container">
            <div className="explore-header">
                <h1 className="explore-title">Explorar Cartas</h1>
                <p className="explore-subtitle">Descubre tu próxima carta perfecta</p>
            </div>

            <div className="search-filters">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar cartas..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <div className="search-icon">🔍</div>
                </div>

                <div className="filters-row">
                    <div className="filter-group">
                        <label>Tipo:</label>
                        <select value={selectedType} onChange={handleTypeChange} className="filter-select">
                            {types.map(type => (
                                <option key={type} value={type === 'Todos' ? '' : type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Rareza:</label>
                        <select value={selectedRarity} onChange={handleRarityChange} className="filter-select">
                            {rarities.map(rarity => (
                                <option key={rarity} value={rarity === 'Todas' ? '' : rarity}>
                                    {rarity}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button onClick={clearFilters} className="clear-filters-btn">
                        Limpiar Filtros
                    </button>
                </div>
            </div>

            <div className="results-info">
                <p>Mostrando {filteredCards.length} cartas</p>
                {filteredCards.length === 0 && (
                    <p className="no-results">No se encontraron cartas con los filtros seleccionados</p>
                )}
            </div>

            <CardGrid
                cards={filteredCards}
                currentPage={currentPage}
                cardsPerPage={cardsPerPage}
                onPageChange={handlePageChange}
                onAddToCart={handleAddToCart}
            />
        </div>
    );
};

export default Explore;
