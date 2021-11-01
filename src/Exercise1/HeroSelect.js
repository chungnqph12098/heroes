import React from "react";
import './HeroSelect.css'

const HeroSelect = ({hero, selectedHero, handleSelected}) => {
    console.log({handleSelected, selectedHero})
    return (
        <li style={{background: hero.id === selectedHero.id ? 'black' : 'grey'}}
            className="heroes"
            onClick={() => handleSelected(hero)}
        >
            <span className="badge">{hero.id}</span> {hero.name}
        </li>
    );
};

export default HeroSelect;
