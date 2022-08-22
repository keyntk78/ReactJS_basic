import React from "react";

class AddComponent extends React.Component {
    render() {
        return(
                   <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text"
                        value={this.state.firstName}
                        onChange = {(event) => this.handleChangeFirstName(event)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br></br>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br/><br/>
                    <input type="submit" value="Submit"
                        onClick={(event)=> this.handleSubmit(event)}
                    />
                </form>
        )
    }
}

export default AddComponent