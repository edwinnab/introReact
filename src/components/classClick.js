import React from "react";

class ClassClick extends React.Component {

    handleClick () {
        console.log('Testing the onClick event')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ClassClick;