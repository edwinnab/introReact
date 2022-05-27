import React from "react";

/*extract the name and duty from the propsObject
Destructuring in Functional Components

1.example of destructuring in the parameter

const  Welcome = ({name, duty}) => {
        return (
            <h1>
                Welcome {name} a.ka {duty}
            </h1>
        )
}
2. destructuring in the function body

const  Welcome = props => {
    const { name, duty } = props
    return (
        <h1>
            Welcome {name} a.ka {duty}
        </h1>
    )
}
 */

/*
Destructuring in class components

 */

class Welcome extends React.Component{
    render() {
        const {name, duty} = this.props
        return (
            <div>
                <h1>
                    Welcome {name} this is your duty {duty}
                </h1>
            </div>
        )
    }
}
export default Welcome;