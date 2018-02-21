import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Skills from './Components/Skills/Skills';
import Contacts from './Components/Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-container">
            <div className="logo">
              <h1>Sergey Kindyk</h1>
              <p>JS developer / QA engineer</p>
            </div>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
              </ul>  
            </nav>
          </div>
        </header>

        <div className='routes'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contacts' component={Contacts} />
              <Route path='/resume' component={Resume} />
              <Route path='/skills' component={Skills} />
            <Route path='*' render={() => {
              return(
                <Redirect to='/' />
              )}}
              />
          </Switch>
        </div>
        <footer>
          <div className="footer-container">
            <div className='contact-phone'>
              <div className='footer-icon'><FontAwesome name="phone-square" size="2x"/></div>
              <div className="footer-info">
                <p>Call me</p>
                <a href="tel:+38(093)7859688" title="Make a call">+38(093)7859688</a>
              </div>
            </div>
            <div className='contact-mail'>
              <div className='footer-icon'><FontAwesome name="envelope" size="2x"/></div>
              <div className="footer-info">
                <p>Mail me</p>
                <a href="mailto:skindyk@yandex.ru" title="Send mail">skindyk@yandex.ru</a>
              </div>
            </div>
            <div className='contact-social'>
              <div className="footer-icon"><FontAwesome name="plus-square" size="2x"/></div>
              <div className="footer-info">
                <p>Check my pages</p>
                <div className="social-media">
                  <a href="https://facebook.com" target="blank" title="Visit page">
                      <FontAwesome name="facebook" size="2x"/>
                  </a>
                  <a href="https://google.com" target="blank" title="Visit page">
                      <FontAwesome name="google" size="2x"/>
                  </a>
                  <a href="https://twitter.com" target="blank" title="Visit page">
                      <FontAwesome name="twitter" size="2x"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
