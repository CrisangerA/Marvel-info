import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar navbar-expand">
        <button className="btn btn-danger" onClick={this.props.toggle}>
          <i className="fas fa-bars" ></i>
        </button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    )
  }
}
