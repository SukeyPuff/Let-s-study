import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './src/views/Home'
import About from './src/views/About'
import Login from './src/views/Login'
import Register from './src/views/Register'

//#region 文档版
// class App extends React.Component {
//   mes = {name: 'Tom', age: 20}

//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" render={(props) => <About {...props} {...this.mes} />} />
//           <Route path="/login">
//             <Login {...this.mes} />
//           </Route>
//           <Route path="/register">
//             {
//               (props) => <Register {...props} {...this.mes} />
//             }
//           </Route>
//         </Switch>
//       </Router>
//     )
//   }
// }
//#endregion

class App extends React.Component {
  mes = {name: 'Tom', age: 20}

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/about">
            {
              (props) => <About {...props} />
            }
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App;
