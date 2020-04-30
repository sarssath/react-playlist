import React from 'react';
class Songs extends React.Component {
    render() {
        return (
            <div>
                <img className ="images" src={this.props.image}/>
                <p>{this.props.name}</p>
                <p>{this.props.artist}</p>
                <p>{this.props.length}</p>
                <a href={this.props.video}>Listen</a>
                <p>{this.props.release_year} </p>
            </div>
        );
    }
}
export default Songs;