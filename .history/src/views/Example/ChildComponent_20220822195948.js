import React from "react";

class ChildComponent extends React.Component { 

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    
    render() {
        let {showJobs} = this.state;
        let {firstName,lastName, age, adrress,arrJobs } = this.props;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        return (
            <>
                <div>ChildComponent: {firstName} {lastName} - {age} tuổi - {adrress}</div>
                {showJobs === false &&
                    <div>
                        <button onClick={()=>this.handleShowHide()}>Show</button>
                    </div>
                }
                
                :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={()=>this.handleShowHide()} >Hide</button>
                        </div>
                    </>
            </>
        )
    }
}

// const ChildComponent = (props) => {
//         let {name, age, adrress,arrJobs } = props;

//         return (
//             <>
//                 <div>ChildComponent: {name} - {age} tuổi - {adrress}</div>
//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
// }

export default ChildComponent;