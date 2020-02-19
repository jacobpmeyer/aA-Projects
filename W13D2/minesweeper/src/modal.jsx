import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal">
            <div>
                <h3>New Game?</h3>
                <button onClick={props.newGame }>Create new game</button>
            </div>
            <div className="screen"></div>
        </div>
    )
}

export default Modal