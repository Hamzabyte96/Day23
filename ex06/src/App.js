import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [],
    }

    removeCharacter =(index) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        })
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table characterData={characters}
                removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]});
    <Form handleSubmit={this.handleSubmit} />
}

submitForm = () => {
    this.props.handleSUbmit(this.state)
    this.setState(this.initialState)
    <input type="button" value="Submit" onClick={this.submitForm} />
}

export default App;