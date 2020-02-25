import React from 'react'

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
    return <ul>
      {this.props.pokemon.map(poke => {
        return <li key={poke.id}>
          {poke.name}
          <img src={poke.image_url} alt="image of pokemon" width="100px" />
        </li>
      })}
    </ul>
  }
}

export default PokemonIndex