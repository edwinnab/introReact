import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    /*
    to change the state we need to use the setSate method;
    changing the state direct does not render it on the UI;
    thus, the need to use the setState method; allows re-rendering;

    after changing the state using the setState method using the callback methods

     */

    increment () {
        //this.state.count = this.state.count + 1
        this.setState( {
            count: this.state.count + 1
        }, () => {console.log('callback value: ', this.state.count)})
    }

    render ( ) {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                <br />
                <button onClick = { () => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter;