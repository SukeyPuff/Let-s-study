import React, { createContext, useContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch
} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink to="/" label="Home" activeOnlyWhenExact />
        <OldSchoolMenuLink to="/about" label="About" />
      </div>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

function OldSchoolMenuLink({ to, label, activeOnlyWhenExact }) {
  console.log(activeOnlyWhenExact);

  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })

  console.log(match);

  return (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}
      <Link to={to}>{label}</Link>
    </div>
  )
}

function Home() {
  return (
    <h2>Home</h2>
  )
}

function About() {
  return (
    <h2>About</h2>
  )
}