import React, { useEffect, useState } from 'react';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState();
    const [id, setId] = useState(1);

    const handleAnterior = () => {
        setId(id-1);
    }

    const handleSiguiente = () => {
        setId (id+1);
    }
    

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then((resp) => {
    //         return resp.json();
    // })
            .then((resp)=> resp.json())
            .then((data)=>{
                setPokemon(data);
        })
    }, [] )

    

    return (
        <div>{
                pokemon && 
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                   
                </div>
        }  
                    <button onClick={handleAnterior}>Anterior</button>
                    <button onClick={handleSiguiente}>Siguente</button>
        </div>
    )
}

export default Pokemon;
