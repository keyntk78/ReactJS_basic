import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

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



    handleSubmit =(event) =>{
        event.preventDefault(event)
        alert('InFo');
    }

    render() {
        return (
            <>
                <AddComponent/>
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