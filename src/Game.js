import React, { Component } from 'react'

export class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name1: "Player-1",
            name2: "Player-2",
        };
    }

    render() {
        return (
            <div>

                <div className="button">
                    New Game
                </div>
                <div className="name">
                    <label >Enter your name</label>
                    <input placeholder="Your name.." onChange={(e) => this.setState({ name1: e.target.value })} />
                    <br />
                    <label>Enter your name</label>
                    <input placeholder="Your name.." onChange={(e) => this.setState({ name2: e.target.value })} />

                </div>
            </div>
        )
    }
}

export default Game
