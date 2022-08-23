import React from "react";
import Color from "./HOC/Color";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }
  render() {
    return <div>Hello world from homepage with key</div>;
  }
}

export default Color(Home);
