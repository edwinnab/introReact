import React from "react";


class Message extends  React.Component{

    constructor() {
        super();

        this.state = {
            message: 'Hello, testing the second component.'
        }

    }

    changeMessage() {
        this.setState({
            message: "Test Passed!!"
        })
    }

    render () {
        return (
            <div>
                <h1>
                    {this.state.message }
                </h1>
                <button onClick={ () => this.changeMessage()}>
                    Check Test
                </button>
                <br />
                <br />
            </div>
        )
    }
}


export default Message