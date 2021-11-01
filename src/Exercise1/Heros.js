import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import HeroSelect from "./HeroSelect";
import HeroDetails from "./HeroDetails";
import HeroMessages from "./HeroMessages";
import './Hero.css';

const Heros = () => {
    const [heroes, setHeroes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [logger, setLogger] = useState([]);
    const [selectedHero, setSelectedHero] = useState({});
    let push = true;

    useEffect(() => {
        let canceled = false;
        axios({
            method: 'GET',
            url: 'https://61803d9d8bfae60017adfa3c.mockapi.io/heroes'
        }).then(response => {
            if (!canceled) {
                setHeroes(response.data);
                console.log("response", response);
                setLoading(false);
                setLogger(logger => logger.concat(["HeroService: fetched heroes"]));
            }
        }).catch(error => {
            if (!canceled) {
                setLoading(false);
                setErrorMessage(error.message);
            }
        })
        return () => {
            canceled = true;
        }
    }, []);

    const handleSelected = hero => {
        setSelectedHero(hero);
        push = true;
        setLogger(logger => logger.concat([`HeroComponent: Selected hero id=${hero.id}`]));
    }

    const handleChangeName = (event) => {
        let newHeroes = [...heroes];
        newHeroes[selectedHero.id - 1].name = event.target.value;
        setHeroes(newHeroes);
    };

    const handleClear = () => {
        push = false;
        setLogger([]);
    }

    return (
        <div className="app-container">
            <h1>Tour of Heroes</h1>
            <h2>My Heroes</h2>
            <div className="app-heroes">
                {heroes.map(hero => (
                    <HeroSelect
                        key={hero.id}
                        hero={hero}
                        selectedHero={selectedHero}
                        handleSelected={handleSelected}
                    />
                ))}
                <HeroDetails
                    selectedHero={selectedHero}
                    handleChangeName={handleChangeName}
                />
                {push &&
                <HeroMessages
                    logger={logger}
                    handleClear={handleClear}
                />
                }
            </div>
        </div>
    );
};


export default Heros;