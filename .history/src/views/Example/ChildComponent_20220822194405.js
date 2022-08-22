import React from "react";

class ChildComponent extends React.Component { 

    state = {
        showJobs: false
    }

    
    render() {
        let {showJobs} = this.state;
        let {name, age, adrress,arrJobs } = this.props;
        return (
            <>
                <div>ChildComponent: {name} - {age} tuổi - {adrress}</div>
                <div><button>Show</button></div>
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
                <div><button>Hide</button></div>
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