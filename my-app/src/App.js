import React from 'react';
import logo from './logo.svg';
import Title from './Components/Title';
import Songs from './Components/Songs';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange= this.handleChange.bind(this);

        this.state = {
            inputText: '',
            inputText2: '',
            inputText3: '',
            inputText4: '',
            inputText5: '',
            inputText6: '',
            buttonText: 'Add!',
            songs: [
            {
                image: "https://upload.wikimedia.org/wikipedia/en/1/18/Cozy_Tapes_Too_Cozy_Cover_art.jpg",
                name: "BYF",
                artist: "A$AP Mob",
                length: "2:55",
                video:"https://www.youtube.com/watch?v=yGy2NIeJZa4",
                release_year:"2017",
            },
            {
                image: "https://cdn-images-1.medium.com/max/1600/0*0JesRLI1YbKPyZ4S.jpg",
                name: "Fu-Gee-La",
                artist: "Fugees",
                length:"4:20",
                video: "https://www.youtube.com/watch?v=MPlb9HoOCxs",
                release_year: "1996",
            },
            ]
        }
    }
    handleClick(e) {
        var song = {
            
            name:this.state.inputText,
            image:this.state.inputText2,
            artist: this.state.inputText3,
            length:this.state.inputText4,
            video:this.state.inputText5,
            release_year:this.state.inputText6,
        }
        console.log(song);
        var newSongsArray = this.state.songs;
        newSongsArray.push(song)
        this.setState (function(state,props){
            return {
            songs: newSongsArray
            }
        });
    }
     handleChange(e) {
        console.log(e.target);
        if (e.target.id == "song") {
            this.setState ({
            inputText: e.target.value,
            });
        } 
        if (e.target.id == "artist") {
            this.setState ({
            inputText2: e.target.value,
            });
        } 
        if (e.target.id == "length") {
            this.setState ({
            inputText3: e.target.value,
            });
        } 
        if (e.target.id == "image") {
            this.setState ({
            inputText4: e.target.value,
            });
        } 
        if (e.target.id == "link") {
            this.setState ({
            inputText5: e.target.value,
            });
        } 
        if (e.target.id == "year") {
            this.setState ({
            inputText6: e.target.value,
            });
        } 
    }
    render() {
        return (
            <div className="App">
            <Title header="My Playlist"/>
                <div id="form">
                    <p>Add a new song:</p>
                    <input value={this.state.inputText} onChange={this.handleChange}placeholder="Song Name" id="song"/>
                    <input value={this.state.inputText2} onChange={this.handleChange}placeholder="Artist Name" id="artist"/>
                    <input value={this.state.inputText3} onChange={this.handleChange}placeholder="Song Length" id="length"/>
                    <input value={this.state.inputText4} onChange={this.handleChange}placeholder="Image URL" id="image"/>
                    <input value={this.state.inputText5} onChange={this.handleChange}placeholder="Song Link Address" id="link"/>
                    <input value={this.state.inputText6} onChange={this.handleChange}placeholder="Release Year" id="year"/>
                    <button id="add" onClick={this.handleClick}>{this.state.buttonText}</button>
                </div>
            {this.state.songs.map(function(song) {
                return( <Songs
                        image={song.image}
                        name={song.name}
                        artist={song.artist}
                        length={song.length}
                        video={song.video}
                        release_year={song.release_year}
                />);
            }) }
            </div>
        );
    }
}

export default App;
