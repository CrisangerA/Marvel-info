import React, { Component } from 'react';
import Loading from './Loading.jsx';

export default class Series extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: `${props.url}series${props.apikey}${props.hash}`,
      loading: false,
      data: []
    }
  }

  getSeries() {
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
    this.getSeries();
  }

  render() {

    const series = this.state.data.map((serie, i) => {
      return(
        <div className="col-md-3">
          <div className="card mb-3">
          <img src={serie.thumbnail.path + '.' + serie.thumbnail.extension} className="img-fluid" />
            <div className="card-body">
              {serie.title}
            </div>
          </div>
        </div>
      )
    });

    if (this.state.loading) {
      return(
        <Loading></Loading>
      )
    }

    return (
      <div className="form-row">
        {series}
      </div>
    )
  }
}
