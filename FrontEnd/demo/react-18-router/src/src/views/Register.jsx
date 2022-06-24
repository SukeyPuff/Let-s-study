import React from "react";

class Register extends React.Component {
  componentDidMount() {
    console.log("Register：", this.props);
  }

  handleClick = () => {
    const { history } = this.props;

    history.push("/login");
  };

  toHome = () => {
    const { history } = this.props;

    history.push("/");
  };

  render() {
    return (
      <>
        <p>Register</p>
        <button style={{ marginRight: 10 }} onClick={this.handleClick}>
          登录
        </button>
        <button onClick={this.toHome}>首页</button>
      </>
    );
  }
}

export default Register;
