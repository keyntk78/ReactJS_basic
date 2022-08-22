import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component { 

    state = {
        firstName:'',
        lastName: '',
        arrJobs:[
            {id: 'abcJob1', title: 'dev', salary:'500'},
            {id: 'abcJob2', title: 'Tes', salary:'400'},
            {id: 'abcJob3', title: 'p managers', salary:'1000'},
        ]
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
        alert('InFo');
    }

    render() {
        return (
            <>
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
                <ChildComponent 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={'25'}
                    adrress={'Ha noi'}
                    arrJobs = {this.state.arrJobs}
                />    
            </>
        )
    }
}

export default MyComponent;