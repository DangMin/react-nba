import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link
} from 'react-router-dom'

import Home from './components/Home'
import Schedule from './components/Schedule'
import Console from './components/Console'

import logo from './logo.svg';
import './App.css';

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
          <div className='sidebar'>
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
          <div className='content'>
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
