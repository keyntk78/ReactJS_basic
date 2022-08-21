import React from "react";

class MyComponent extends React.Component { 

    state = {
        name: 'Key',
        address:'phu yen'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        // let name = 'Tuan Kiet';

        return (
            <>
                <div>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is : {this.state.name}
                </div>
                <div>Tôi ở {this.state.address}</div>
            </>
        )
    }
}

export default MyComponent;