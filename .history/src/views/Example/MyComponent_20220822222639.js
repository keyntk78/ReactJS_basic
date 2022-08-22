import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component { 

    state = {
        arrJobs:[
            {id: 'abcJob1', title: 'Developer', salary:'500'},
            {id: 'abcJob2', title: 'Tester', salary:'400'},
            {id: 'abcJob3', title: 'Project Manager', salary:'1000'},
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

    deleteAJob =(job) =>{
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs:currentJob
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
                    deleteAJob={this.deleteAJob}
                />    
            </>
        )
    }
}

export default MyComponent;