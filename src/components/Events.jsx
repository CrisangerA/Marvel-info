import React, { Component } from 'react';
import Loading from './Loading.jsx';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${props.url}events${props.apikey}${props.hash}`,
      loading: false,
      data: []
    }
  }

  getEvents() {
    this.setState({ loading: true })
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.data.results,
          loading: false
        });
      });
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {

    const events = this.state.data.map((event, i) => {
      return(
        <div className="col-md-4">
          <div className="card mb-3">
            <img src={event.thumbnail.path + '.' + event.thumbnail.extension} className="img-fluid" />
            <div className="card-body">
              <h3> {event.title} </h3>
              <p>
                {event.description}
              </p>
            </div>
          </div>
        </div>
      )
    })

    if (this.state.loading) {
      return(
        <Loading></Loading>
      )
    }

    return (
      <div className="form-row">
        {events}
      </div>
    )
  }
}
