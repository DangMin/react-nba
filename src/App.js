import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link
} from 'react-router-dom'

import Home from './components/Home'
import Schedule from './components/Schedule'

import logo from './logo.svg';
import './App.css';

const routes = [
  { path: '/', component: Home },
  { path: '/schedule', component: Schedule },
]

const links = [
  { to: '/', name: 'Home' },
  { to: '/schedule', name: 'Schedule' }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <div style={{
            flex: 1,
            borderRight: '1px solid black'
          }}>
            <ul style={{
              listStyleType: 'none'
            }}>
              {links.map((link, index) =>
                <li key={index}><Link to={link.to} activeStyle={{
                  textDecoration: 'none',
                  color: 'red'
                }}>{link.name}</Link></li>
              )}
            </ul>
          </div>
          <div style={{ flex: 4, overflow: 'auto' }}>
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
