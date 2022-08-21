import React from "react";

class MyComponent extends React.Component { 

    state = {
        name: 'Key',
        address:'phu yen'
    }

    render() {
        let name = 'Tuan Kiet';

        return (
            <>
                <div>Hello {this.state.name}</div>
                <div>Tôi ở {this.state.address}</div>
            </>
        )
    }
}

export default MyComponent;