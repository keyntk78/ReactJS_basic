import React from "react";

class MyComponent extends React.Component { 

    render() {
        return (
            <>
                <form>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value="John"/><br/>
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}

export default MyComponent;