import React from 'react'
import PokemonIndexItem from './pokemon_index_item'
import { HashRouter, Route } from "react-router-dom";
import PokemonDetailContainer from './pokemon_detail_container'

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.requestAllPokemon()
    
  }

  componentDidUpdate() {
  }

  render() {
    
    if (this.props.pokemon.length <= 2) return <ul></ul>
    return(<>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <section className="pokedex">
          <ul>
            {this.props.pokemon.map(poke => {
              return <PokemonIndexItem pokeId={poke.id} key={poke.id} pokemon={poke} />
            })}
          </ul>
        </section>
      </>
    ) 
  }
}

export default PokemonIndex