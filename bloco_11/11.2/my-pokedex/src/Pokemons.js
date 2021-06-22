import React from 'react';
import './Pokemons.css'

class Pokemons extends React.Component {
    render(){
        const { pokedex } = this.props
    return (
        <section className="pokemon"> 
    <h2 className="pokemon-container"> {pokedex.name}</h2>
    <h3 className="pokemon-container"> {pokedex.type}</h3>
    <p  className="pokemon-container"> {pokedex.averageWeight.value} {pokedex.averageWeight.measurementUnit}</p>
    <img src={pokedex.image} /> 
    </section>
    
    )
    } 
}

export default Pokemons