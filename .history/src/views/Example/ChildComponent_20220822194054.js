import React from "react";

class ChildComponent extends React.Component { 


    render() {
        let {name, age, adrress,arrJobs } = this.props;
        return (
            <>
                <div>ChildComponent: {name} - {age} tuổi - {adrress}</div>
                <div>Show</div>
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
                <div>Hide</div>
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