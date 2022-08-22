import React from "react";
import './demo.scss'

class AddComponent extends React.Component {

    state = {
        title:'',
        salary: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit =(event) =>{
        event.preventDefault(event)
        if(!this.state.title || !this.state.salary){
            alert('Missing required paranms');
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title:'',
            salary:''
        })
    }


    render() {
        return(
                <form>
                    <label htmlFor="fname">Job Name:</label><br/>
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange = {(event) => this.handleChangeTitle(event)}
                    /><br/>
                    <label htmlFor="lname">Salary:</label><br></br>
                    <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    /><br/><br/>
                    <input className="btn-submit" type="submit" value="Submit"
                        onClick={(event)=> this.handleSubmit(event)}
                    />
                </form>
        )
    }
}

export default AddComponent