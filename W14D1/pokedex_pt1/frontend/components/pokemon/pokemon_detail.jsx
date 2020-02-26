import React from 'react'

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {id: ""}
  }

  componentDidMount() {
    const id = this.props.match.params.pokemonId
    this.props.requestSinglePokemon(id)
  }

  componentDidUpdate(prevProps) {

    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      debugger
      this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }
  }

  render() {
    const pokemon = this.props.pokemon
    if (!pokemon) return <span>no pokemon</span>
    
    return (<>
      <h2>{pokemon.name}</h2>
      <ul>
      <li>Type: {pokemon.poke_type}</li>
      <li>Attack: {pokemon.attack}</li>
      <li>Defense: {pokemon.defense}</li>
      <li>Moves: {pokemon.moves}</li>
    </ul>
    </>) 
    
  }
}

export default PokemonDetail