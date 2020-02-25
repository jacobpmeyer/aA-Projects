import React from 'react'
import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.requestAllPokemon()
    
  }

  render() {
    if (this.props.pokemon.length <= 2) return <ul></ul>
    return(
      <section className="pokedex">
        <ul>
          {this.props.pokemon.map(poke => {
            return <PokemonIndexItem key={poke.id} pokemon={poke} />
          })}
        </ul>
      </section>
    ) 
  }
}

export default PokemonIndex