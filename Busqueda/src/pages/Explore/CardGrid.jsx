import React from 'react';
import './CardGrid.css';

const CardGrid = ({ cards, currentPage, cardsPerPage, onPageChange }) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cards.slice(startIndex, endIndex);
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    return (
        <div className="card-grid-container">
            <div className="cards-grid">
                {currentCards.map((card, index) => (
                    <div key={index} className="card-item">
                        <div className="card-image">
                            <div className="card-placeholder">
                                <span className="card-symbol">🃏</span>
                            </div>
                        </div>
                        <div className="card-info">
                            <h3 className="card-name">{card.name}</h3>
                            <p className="card-type">{card.type}</p>
                            <p className="card-rarity">{card.rarity}</p>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="page-btn"
                    >
                        ← Anterior
                    </button>

                    <div className="page-numbers">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => onPageChange(page)}
                                className={`page-number ${currentPage === page ? 'active' : ''}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="page-btn"
                    >
                        Siguiente →
                    </button>
                </div>
            )}
        </div>
    );
};

export default CardGrid;
