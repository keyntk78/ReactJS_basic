import React from "react";

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

export default Home;
