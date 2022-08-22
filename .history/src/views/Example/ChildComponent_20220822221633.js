import React from "react";
import './demo.scss'

class ChildComponent extends React.Component { 

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        this.props.deleteAJob(job)
    }
    
    render() {
        let {showJobs} = this.state;
        let {arrJobs } = this.props;
        // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button 
                            className="btn-show"
                            onClick={()=>this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $ 
                                            <></> <span onClick={()=>this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={()=>this.handleShowHide()} >Hide</button>
                        </div>
                    </>
                }
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