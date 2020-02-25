import { RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions"


const itemsReducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      // THIS MIGHT NEED TO BE AN ARRAY!!!!!!!!
      // items = Object.values(action.items)
      // Object.assign({}, state, items)
      return Object.assign({}, state, action.items)
    default: 
      return state
  }
}

export default itemsReducer