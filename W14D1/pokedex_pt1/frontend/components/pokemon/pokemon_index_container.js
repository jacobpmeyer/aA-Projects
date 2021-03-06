import { connect } from 'react-redux'
import { selectAllPokemon } from '../../reducers/selectors'
import PokemonIndex from './pokemon_index'
import { requestAllPokemon } from '../../actions/pokemon_actions'

const mapStateToProps = (state) => {
  return { 
    pokemon: selectAllPokemon(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestAllPokemon: (id) => dispatch(requestAllPokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);