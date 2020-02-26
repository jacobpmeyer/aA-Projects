import { RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions"


const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      // items = Object.values(action.items)
      // Object.assign({}, state, items)
      return Object.assign({}, state, action.pokemon.items)
    default: 
      return state
  }
}

export default itemsReducer