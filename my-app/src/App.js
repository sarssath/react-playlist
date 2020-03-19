import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs:["BYF","Fu-Gee-La","Sin","Deja Vu", "Yosemite", "Unfair"], 
            imageLinks:'',
            artists:'',
            songLengths:'',
            links:'',
            releaseYear:'', 
        }
    }
    render() {
        return (
            <div className="App">
                <h1>My Playlist</h1>
                <div id="form">
                    <p>Add a new song:</p>
                    <input placeholder="Song Name" id="song"/>
                    <input placeholder="Artist Name" id="artist"/>
                    <input placeholder="Song Length" id="length"/>
                    <input placeholder="Image URL" id="image"/>
                    <input placeholder="Song Link Address" id="link"/>
                    <input placeholder="Release Year" id="year"/>
                    <button id="add">Add</button>
                </div>
            </div>
        );
    }
}

export default App;
