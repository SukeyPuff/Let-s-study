import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    const { history } = this.props;

    this.history = history;
  }

  componentDidMount() {
    console.log("Home：", this.props);
  }

  handleClick = () => {
    this.history.push("/about");
  };

  toLogin = () => {
    this.history.push("/login");
  };

  toRegister = () => {
    this.history.push("/register");
  };

  render() {
    return (
      <>
        <p>React Router</p>
        <button onClick={this.handleClick}>关于</button>
        <button
          style={{ marginLeft: 10, marginRight: 10 }}
          onClick={this.toLogin}
        >
          登录
        </button>
        <button onClick={this.toRegister}>注册</button>
      </>
    );
  }
}

export default Home;
