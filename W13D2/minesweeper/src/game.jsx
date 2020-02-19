import React, {Component} from "react"
import * as Minesweeper from './minesweeper'
import Board from './board'
import Modal from './modal'

class Game extends Component{
    constructor(props) {
        super(props)
        this.state = {
            board: new Minesweeper.Board(20, 5)
        }
        this.updateGame = this.updateGame.bind(this)
        this.revealBombs = this.revealBombs.bind(this)
        this.newGame = this.newGame.bind(this)
        this.lost = this.lost.bind(this)
    }


    newGame() {
      const board = new Minesweeper.Board(20, 5)
      board.plantBombs();
      this.setState({ board: board })
    }

    revealBombs() {
      this.state.board.grid.forEach((row) => {
         row.forEach((tile) => {
           if (tile.bombed) {
             tile.explored = true
           }
         })
      })
    }

    updateGame(tile, altPressed){
        if (altPressed) tile.toggleFlag()
        else tile.explore()
        this.setState({ board: this.state.board })
    }

    lost() {
      const lose = this.state.board.lost()
      if (lose) this.revealBombs()
      return lose
    }
    
    render(){
        return (
            <>
                {this.state.board.won() ? (
                    <>
                        <h1>You Won</h1>
                        <Modal newGame={this.newGame}/>
                    </>
                ) : this.lost() ? (
                    <h1>you lost</h1>
                ) : <p></p>}
                <Board board={this.state.board} updateGame={this.updateGame} />
            </>
        )
    }
}

export default Game