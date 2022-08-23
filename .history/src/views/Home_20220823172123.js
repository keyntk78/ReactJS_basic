import React from "react";
import { withRouter } from "react-router";
import color from "./HOC/color";

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

export default color(Home);
