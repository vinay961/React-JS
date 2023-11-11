import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {

    const {id} = useParams();
    const [pokemon,setPokemon] = useState({})
    
    async function downloadPokemonDetails() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({name:response.data.name,image:response.data.sprites.other.dream_world.front_default,weight:response.data.weight,height:response.data.height})
    }

    useEffect(() =>{
        downloadPokemonDetails()
    },[])
    return (
        <div className="pokemonDetails-wrapper">
            <div className="pokemonName">name:{pokemon.name}</div>
            <img className="pokemonImage" src={pokemon.image} />
            <div>height:{pokemon.height}</div>
            <div>weight:{pokemon.weight}</div>
        </div>
    )
}

export default PokemonDetails;