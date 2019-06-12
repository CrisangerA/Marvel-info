import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Stlyes
import "./styles/simple-sidebar.css"

// Components
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Characters from './components/Characters.jsx';
import Comics from './components/Comics.jsx';
import Series from './components/Series.jsx';
import Events from './components/Events.jsx';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      url: 'http://gateway.marvel.com/v1/public/',
      key: '?ts=1&apikey=00874a8363a1d6713bc0bd759effb603',
      hash: '&hash=774a975e9826041b3da8f264370f7478'
    }
  }

  toggleMenu() {
    document.getElementById('wrapper').classList.toggle('toggled');
  }

  render() {
    return (
      <div className="d-flex" id="wrapper">
        <Sidebar></Sidebar>
        <div id="page-content-wrapper">
          <Navbar toggle={this.toggleMenu}></Navbar>
          <div id="container" className="container-fluid py-5">
            <Switch>
              <Route path="/Characters" component={ () => <Characters url={this.state.url} apikey={this.state.key} hash={this.state.hash}/> }/>
              <Route path="/Comics" component={ () => <Comics url={this.state.url} apikey={this.state.key} hash={this.state.hash}/> }/>
              <Route path="/Series" component={ () => <Series url={this.state.url} apikey={this.state.key} hash={this.state.hash}/> }/>
              <Route path="/Events" component={ () => <Events url={this.state.url} apikey={this.state.key} hash={this.state.hash}/> }/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}