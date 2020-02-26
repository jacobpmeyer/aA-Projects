import React from 'react'
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  return <li>
    <Link to={`/pokemon/${props.pokemon.id}`} >
      <img src={props.pokemon.image_url} alt="" width="20px"/>
      {props.pokemon.name}
    </Link>
  </li>
}

export default PokemonIndexItem