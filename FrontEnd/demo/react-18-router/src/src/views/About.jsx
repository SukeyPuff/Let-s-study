import React from "react";

// class About extends React.Component {
//   componentDidMount() {
//     console.log("About：", this.props);
//   }

//   handleClick = () => {
//     const { history } = this.props;

//     history.push("/");
//   };

//   render() {
//     return (
//       <>
//         <p>About</p>
//         <button onClick={this.handleClick}>首页</button>
//       </>
//     );
//   }
// }

function About(props) {
  console.log("About：", props);

  const { history } = props;

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <p>About</p>
      <button onClick={handleClick}>首页</button>
    </>
  );
}

export default About;
