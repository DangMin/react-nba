import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link
} from 'react-router-dom'

import Home from './components/Home'
import Schedule from './components/Schedule'
import Console from './components/Console'

// import logo from './logo.svg';
import './App.css'
import './index.css'

const routes = [
  { path: '/', component: Home },
  { path: '/schedule', component: Schedule },
  { path: '/console', component: Console }
]

const links = [
  { to: '/', name: 'Home' },
  { to: '/schedule', name: 'Schedule' },
  { to: '/console', name: 'Console' }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='sidebar flex-cell'>
            <ul style={{
              listStyleType: 'none'
            }}>
              {links.map((link, index) =>
                <Link key={index} to={link.to} activeStyle={{
                  textDecoration: 'none'
                }}><li>{link.name}</li></Link>
              )}
            </ul>
          </div>
          <div className='content flex-cell--9'>
            {routes.map((route, index) =>
              <Route
                key={index}
                path={route.path}
                exact
                component={route.component}
              />
            )}
          </div>
        </div>
      </Router>
    )}
}

export default App;
