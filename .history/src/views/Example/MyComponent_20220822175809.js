import React from "react";
import ChildComponent from './Example/ChildComponent';

class MyComponent extends React.Component { 

    state = {
        firstName:'',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit =(event) =>{
        event.preventDefault(event)
        console.log(">> Check Data: ", this.state)
    }

    render() {
        return (
            <>
                <ChildComponent/>
            </>
        )
    }
}

export default MyComponent;