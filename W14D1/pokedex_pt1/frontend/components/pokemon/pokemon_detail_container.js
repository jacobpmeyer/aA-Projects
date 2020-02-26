import PokemonDetail from './pokemon_detail'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId]
  
  return {
    pokemon
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);