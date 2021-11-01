import React from 'react';
import './Detail.css'

const HeroDetails = ({selectedHero, handleChangeName}) => {
    return (
        <div className="heroes-detail">
            <h2>
                <span>
                    {selectedHero.name} </span>
                Details
            </h2>
            <div><span>id: </span>{selectedHero.id}</div>
            <div>
                <label htmlFor="hero-name">Hero name: </label>
                <input
                    id="hero-name"
                    type="text"
                    placeholder= {selectedHero.name}
                    onChange={handleChangeName}
                />
            </div>
        </div>
    );
};

export default HeroDetails;