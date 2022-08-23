import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import {toast } from 'react-toastify';

class ListTodo extends React.Component{

    state = {
        listTodos:[
            {id:'1', title:'Doing Homework'},
            {id:'2', title:'Study Reacte'},
            {id:'3', title:'Play Game'},
        ]
    }

    addNewTodo = (todo) =>{
        this.setState({
            listTodos:[...this.state.listTodos, todo]
        })

        toast.success("Thêm Thành Công!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.map(item => item.id !== todo.id )
        console.log('check todo:', todo)
        this.setState({
            listTodos:currentTodos
        })
    }

    render() {
        let {listTodos} = this.state;

        return (
            <>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo = {this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return(
                                    <div className="todo-child" key={item.id}>
                                        <span>{index + 1} - {item.title}</span>
                                        <button className="edit">Edit</button>
                                        <button className="delete"
                                            onClick={()=>this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;