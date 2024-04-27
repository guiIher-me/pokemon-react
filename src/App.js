/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const TOTAL_POKEMONS = 18;

const PokemonCards = () => {
    const [pokemons, setPokemons] = useState([]);
        useEffect(() => {
        getPokemons(TOTAL_POKEMONS);
    }, []);

    const getPokemons = (total) => {
        var endpoints = [];
        for (let i = 1; i <= total; i++)
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        
        axios
            .all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res.map((r) => r.data)));
    };

    return (
        <div className="container mb-2">
            <h1 id="page-title" className="text-center my-5 font-pokemon">
                React Pokémons
            </h1>
            <div className="row">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonCards;
