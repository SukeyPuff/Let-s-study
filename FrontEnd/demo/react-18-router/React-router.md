# React Router

## 1. 概览

### 1.1 Vue Router

- **路由组件的基础能力：**

1. 路由匹配
   > Route Matching
2. 嵌套路由
   > Nested Routes
3. 编程式导航
   > Programmatic Navigation
4. 命名路由
   > Named Routes
5. 命名视图
   > Named Views
6. 重定向和别名
   > Redirect and Alias
7. 路由传参
   > Passing Props to Route Components
8. 不同的历史模式
   > Different History modes

- **基于路由的高级实践：**

1. 导航守卫

   > Navigation guards

   > 类似 Node.js 中的中间件，实现对路由跳转前后的控制。

2. 路由元信息

   > Route Meta Fields

   > 将任意信息附加到路由的 `meta` 属性对象上。可以实现过渡名称、路由访问控制等功能。

3. 数据获取

   > Data Fetching

   > 基于导航守卫，可以实现在路由跳转之前获取数据。

4. 过渡动效

   > Transitions

5. 滚动行为

   > Scroll Behavior

   > 可以在路由跳转后控制滚动条的位置。

6. 路由懒加载

   > Lazy Loading Routes

7. 导航故障

   > Navigation Failures

8. 动态路由
   > Dynamic Routing

## 2. 关于路由的疑问

1. react-router 和 react-router-dom 的区别？

2. 为什么在 React-router V5 版本中，react-router 与 react-router-dom 中都导出了 BrowserRouter 和 HashRouter。

## 3. React Router API

1. 核心 Packages

   - history：

     负责**创建**路由、**监听**路由变化以及**改变**路由等功能。是 react-router 的核心部分。

   * react-router：

     负责在 history 改变路由后，**调度**和**派发**组件（视图）更新。

   * react-router-dom：

     在 react-router 的基础上，增加了 UI 层面的扩展（例如，用来点击跳转的链接，Link）。根部路由（BrowserRouter 与 HashRouter）也在这个 package 里面。

2. BrowserRouter & HashRouter

   - BrowserRouter 和 HashRouter

     这两个 api 都是 react-router-dom 提供的组件。分别用来开启 history 模式的路由以及 hash 模式的路由。

   - createBrowseHistory 和 createHashHistory

     BrowserRouter 和 HashRouter 实际上是 history 提供的 createBrowserHistory 与 createHashHistory 创建出来的 history 对象。

3. history.push

   - BrowserRouter 模式：

     BrowserRouter 模式下调用 history.push 改变路由，本质上是调用 window.history.pushState 方法。window.history.pushState 方法可以改变浏览器地址，并且并不会刷新页面。

   - HashRouter 模式：

     HashRouter 模式下改变路由，实际上调用的是 window.location.hash 方法。

4. this.props 的属性

   - history 对象：

     this.props.history 对象中保存着改变路由的方法 push、replace 与监听路由的方法 listen 等。

   - location 对象：

     this.props.location 对象中保存着当前路由的信息，包括 pathname 与 state 等。在 this.props.history 对象中的 location 属性中也保存着同样的信息。

   - match 对象：

     this.props.match 对象中保存着当前路由的匹配信息。

5. 路由组件

   - Router Component

     > Router 组件通过 Context 注入路由信息。

     ```jsx
     // HashRouter 同理

     import {BrowserRouter as Router} from 'react-router-dom'

     <Router>...</Router>

     // 相当于

      import {Router} from 'react-router-dom'
      import {createBrowserHistory as createHistory} from 'history'

      const history = createHistory()

      <Router history={history}>...</Router>
     ```

   - Route Component

     > Route 组件的重要作用是**匹配路由，渲染组件**。

     > 匹配路由：`path` 属性。

     > 渲染组件：`component` 属性、`render` 属性、 `children` 和 `render props` 形式都可以。

     ```jsx
      import {HashRouter as Router, Route, Switch} from 'react-router-dom'
      import Home from '...'
      import About from '...'
      import Login from '...'
      import Register from '...'

      const mes = {name: 'Tom', age: 20}

      <Router>
         <Switch>
            <Route path="/" component={<Home />} />
            <Route path="/about" render={(props) => <About {...props} {...mes} />}>
            <Route path="/login">
               <Login {...mes} />
            </Route>
            <Route path="/register">
               (props) => <Register {...props} {...mes} />
            </Route>
         </Switch>
      <Router>
     ```

     - 四种 Route 形式说明：

     | 形式              | 说明 |
     | ----------------- | ---- |
     | component 形式    | -    |
     | render 形式       | -    |
     | children 形式     | -    |
     | render props 形式 | -    |

   - Switch Component

     ```jsx
      // 如何理解下面两段代码的区别

      // ① 未使用 Switch Component
      <Router>
         <Route path="/" component={<Home />}>

         <Route path="/about">
            {
               (props) => <About {...props} />
            }
         </Route>
      </Router>

      // ② 使用 Switch Component
      <Router>
         <Switch>
            <Route path="/" component={<Home />}>

            <Route path="/about">
               {
                  (props) => <About {...props} />
               }
            </Route>
         </Switch>
      </Router>
     ```
