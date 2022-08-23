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
        ], 
        editTodo:{}
    }

    addNewTodo = (todo) =>{
        this.setState({
            listTodos:[...this.state.listTodos, todo]
        })

        toast.success("Thêm Thành Công!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id )
        this.setState({
            listTodos:currentTodos
        })

        toast.success("Xóa Thành Công!");
    }

    handleEditTodo = (todo) =>{
        this.setState({
            editTodo:todo
        })
    }

    handleOnchaneEditTodo = (event) =>{
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo:editTodoCopy
        })
    }

    render() {
        let {listTodos, editTodo} = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0
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
                                        {isEmtyObj === true  ? 
                                            <span>{index + 1} - {item.title}</span>
                                        :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input 
                                                            onChange={(event)=>this.handleOnchaneEditTodo(event)}
                                                            value={editTodo.title} 
                                                        />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }

                                        <button className="edit" onClick={()=>this.handleEditTodo(item)}>
                                                
                                            {isEmtyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
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