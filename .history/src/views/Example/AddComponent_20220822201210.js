import React from "react";

class AddComponent extends React.Component {

    state = {
        titleJob:'',
        salary: ''
    }

    handleChangetitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    render() {
        return(
                <form>
                    <label htmlFor="fname">Job Name:</label><br/>
                    <input 
                        type="text"
                        value={this.state.titleJob}
                        onChange = {(event) => this.handleChangetitleJob(event)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br></br>
                    <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(event) => this.handleChangesalary(event)}
                    /><br/><br/>
                    <input type="submit" value="Submit"
                        onClick={(event)=> this.handleSubmit(event)}
                    />
                </form>
        )
    }
}

export default AddComponent