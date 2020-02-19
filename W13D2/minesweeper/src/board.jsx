import React from 'react'

const Row = (props) => {

  return <div>{props.row.map((tile, i) => (
        <Tile key={i} tile={tile} updateGame={props.updateGame}/>
    ))}</div>
}

const Tile = (props) => {

    // if (props.tile.pos[0] === 0 && props.tile.pos[1] === 0) props.tile.explored = true
    // if (props.tile.pos[0] === 1 && props.tile.pos[1] === 0) props.tile.flagged = true
  const getTileType = (tile) => {
      
    if (tile.flagged) return { klass: "tile tile-flagged", content:"🚩" } 
    else if (tile.bombed) return { klass: "tile tile-bombed", content: "\uD83D\uDCA3" }; //tile.explored ?  :  "⬜"
    else if (tile.explored) return { klass: "tile tile-explored", content: tile.adjacentBombCount() > 0 ? tile.adjacentBombCount() : ""}
    else return { klass: "tile", content: "⬜"}
      
  }

  const handleClick = (event) => {

    if (event.altKey) return props.updateGame(props.tile, true)
    else return props.updateGame(props.tile, false)
  }

  const val = getTileType(props.tile)
  return (
    <span 
        className={val.klass} 
        onClick={handleClick}
    >
        {val.content}</span>
  )
};

const Board = (props) => {
    return <div>{props.board.grid.map ((row, i)=> (
        <Row key={i} row={row} updateGame={props.updateGame}/>  
    ))}</div> 
}

export default Board