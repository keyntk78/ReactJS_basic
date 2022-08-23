import React from "react";

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    render() {
        let {title} = this.state;
        return(
            <div className="add-todo">
                <input type="type" />
                <button className="add" type="button" >Add</button>
            </div>
        )
    }
}

export default AddTodo