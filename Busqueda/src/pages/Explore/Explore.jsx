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
        { name: 'Dragón de Fuego', type: 'Criatura', rarity: 'Épica' },
        { name: 'Hechizo de Curación', type: 'Hechizo', rarity: 'Común' },
        { name: 'Guerrero Legendario', type: 'Criatura', rarity: 'Legendaria' },
        { name: 'Armadura Mágica', type: 'Equipo', rarity: 'Rara' },
        { name: 'Bola de Fuego', type: 'Hechizo', rarity: 'Común' },
        { name: 'Fénix Renacido', type: 'Criatura', rarity: 'Épica' },
        { name: 'Espada del Destino', type: 'Equipo', rarity: 'Legendaria' },
        { name: 'Escudo Protector', type: 'Equipo', rarity: 'Rara' },
        { name: 'Mago Arcano', type: 'Criatura', rarity: 'Rara' },
        { name: 'Poción de Fuerza', type: 'Consumible', rarity: 'Común' },
        { name: 'Dragón de Hielo', type: 'Criatura', rarity: 'Épica' },
        { name: 'Teletransporte', type: 'Hechizo', rarity: 'Rara' },
        { name: 'Golem de Piedra', type: 'Criatura', rarity: 'Común' },
        { name: 'Anillo de Poder', type: 'Equipo', rarity: 'Legendaria' },
        { name: 'Rayo Eléctrico', type: 'Hechizo', rarity: 'Común' },
        { name: 'Hada Mágica', type: 'Criatura', rarity: 'Rara' },
        { name: 'Botas de Velocidad', type: 'Equipo', rarity: 'Común' },
        { name: 'Invisibilidad', type: 'Hechizo', rarity: 'Épica' },
        { name: 'Lobo Salvaje', type: 'Criatura', rarity: 'Común' },
        { name: 'Pergamino de Sabiduría', type: 'Consumible', rarity: 'Rara' },
        { name: 'Demonio del Abismo', type: 'Criatura', rarity: 'Legendaria' },
        { name: 'Escudo de Hielo', type: 'Equipo', rarity: 'Épica' },
        { name: 'Curación Mayor', type: 'Hechizo', rarity: 'Rara' },
        { name: 'Ángel Guardián', type: 'Criatura', rarity: 'Legendaria' }
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
            />
        </div>
    );
};

export default Explore;
