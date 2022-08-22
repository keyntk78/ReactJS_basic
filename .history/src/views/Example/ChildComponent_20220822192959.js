import React from "react";

// class ChildComponent extends React.Component { 


//     render() {
//         console.log(">> Check render: ", this.props)
//         let {name, age, adrress,arrJobs } = this.props;

//         return (
//             <>
//                 <div>ChildComponent: {name} - {age} tuổi - {adrress}</div>
//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }

const ChildComponent = (props) => {
    return (
        <div>Hello arro function</div>
    )
}

export default ChildComponent;