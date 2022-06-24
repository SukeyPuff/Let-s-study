import React from "react";

class Login extends React.Component {
  componentDidMount() {
    console.log("Login：", this.props);
  }

  handleClick = () => {
    const { history } = this.props;

    history.push("/register");
  };

  toHome = () => {
    const { history } = this.props;

    history.push("/");
  };

  render() {
    return (
      <>
        <p>Login</p>
        <button style={{ marginRight: 10 }} onClick={this.handleClick}>
          注册
        </button>
        <button onClick={this.toHome}>首页</button>
      </>
    );
  }
}

export default Login;
