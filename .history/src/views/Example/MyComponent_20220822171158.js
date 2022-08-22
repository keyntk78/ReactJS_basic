import React from "react";

class MyComponent extends React.Component { 

    state = {
        name: '',
        address:'phu yen'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () =>{
        alert("Hello Key");
    }

    render() {
        return (
            <>
            
            </>
        )
    }
}

export default MyComponent;