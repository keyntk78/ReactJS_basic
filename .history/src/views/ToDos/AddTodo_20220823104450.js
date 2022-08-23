import React from "react";

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnchangeTitle = (event) =>{
        this.setState({
            title:event.target.value
        })
    }

    handleAddTodo = () => {

    }

    render() {
        let {title} = this.state;
        return(
            <div className="add-todo">
                <input 
                type="type" 
                value={title} 
                onChange={(event) => this.handleOnchangeTitle(event)} 
            />
                <button 
                className="add" 
                type="button" 
                onClick={()=>this.handleAddTodo()}
                >
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo