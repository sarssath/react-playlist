import React from 'react';
class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 className="Title">{this.props.header}</h1>
            </div>
        );
    }
}
export default Title;