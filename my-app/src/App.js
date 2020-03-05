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
            <Header/>
            </div>
        );
    }
}

export default App;
