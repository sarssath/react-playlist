import React from 'react';
import logo from './logo.svg';
import Title from './Components/Title';
import Songs from './Components/Songs';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
            <div className="App">
            <Title header="My Playlist"/>
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
