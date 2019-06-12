import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/LogoMarvel.png';

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-wrapper">
        <div className="sidebar-heading">
          <img src={Logo} alt="Logo" className="" width="80px"/>
        </div>
          <div className="list-group list-group-flush">
          <Link to="Characters"><i className="fas fa-users"></i> Characters</Link>
          <Link to="Comics"><i className="fas fa-newspaper"></i> Comics </Link>
          <Link to="Events"><i className="fas fa-award" ></i> Events</Link>
          <Link to="Series"><i className="fab fa-twitch"></i> Series</Link>
          <Link to="/"><i className="fas fa-home"></i> Home</Link>
        </div>
      </div>
    )
  }
}
