import React from "react";

class ChildComponent extends React.Component { 

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
                <div>ChildComponent</div>
            </>
        )
    }
}

export default ChildComponent;