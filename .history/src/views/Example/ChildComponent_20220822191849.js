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
        console.log(">> Check render: ", this.props)
        let {name, age, adrress,arrJobs } = this.props;

        return (
            <>
                <div>ChildComponent: {name} - {age} tuổi - {adrress}</div>
                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent;