import React from "react";

class ListTodo extends React.Component{

    state = {
        listTodo:[
            {id:'1', title:'Doing Homework'},
            {id:'2', title:'Study Reacte'},
            {id:'3', title:'Play Game'},
        ]
    }

    render() {
        return (
            <>
                <div className="list-todo-container">
                    <div className="add-todo">
                        <input type="type" />
                        <button type="button" >Add</button>
                    </div>
                    <div className="list-todo-content">
                        
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;