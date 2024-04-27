import React from 'react';
import PokemonTypeColors from './PokemonTypeColors'

const PokemonCard = ({ pokemon }) => {
    return <div key={pokemon.name} className="col-md-4 mb-4">
        <div className="card">
        <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            className="card-img-top"
            style={{background: `linear-gradient(${PokemonTypeColors[pokemon.types[0].type.name]}, #fff)`}}
            alt={pokemon.name}
        />
        <div className="card-body">
            <h4 className="card-title mx-1 font-pokemon" style={{color: PokemonTypeColors[pokemon.types[0].type.name] || '#5f5f5f'}}>{pokemon.name}</h4>
            <div className="card-text">{Object.values(pokemon.types).map(({ type }, index) => (<span key={index} className='badge mx-1' style={{backgroundColor: PokemonTypeColors[type.name] || '#5f5f5f'}}>{type.name}</span>))}</div>
        </div>
        </div>
    </div>
};

export default PokemonCard;