import React from "react";

class MyComponent extends React.Component { 

    state = {
        firstName:'',
        lastName: ''
    }

    render() {
        return (
            <>
                <form>
                    <label for="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName}/><br/>
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" value="Doe"/><br/><br/>
                    <input type="submit" value={this.state.lastName}/>
                </form>
            </>
        )
    }
}

export default MyComponent;