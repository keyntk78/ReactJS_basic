import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component { 

    state = {
        arrJobs:[
            {id: 'abcJob1', title: 'dev', salary:'500'},
            {id: 'abcJob2', title: 'Tes', salary:'400'},
            {id: 'abcJob3', title: 'p managers', salary:'1000'},
        ]
    }

    addNewJob = (job) => {
        console.log("check job from parent: ", job);

        // let currentJob = this.state.arrJobs;
        // currentJob.push(job);
        this.setState({
            // arrJobs:currentJob
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob = {this.addNewJob}
                />
                <ChildComponent 
                    arrJobs = {this.state.arrJobs}
                />    
            </>
        )
    }
}

export default MyComponent;