import React from 'react';
import data from './data';
import Pokemons from './Pokemons';

class Pokedex extends React.Component {
    render() {
        return (
            <section className="main-section"> 
        {
         data.map((dt) => <Pokemons pokedex={dt} />)
        }
            </section>
        )
    }
}
export default Pokedex;