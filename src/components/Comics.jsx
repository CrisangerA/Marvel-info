import React, { Component } from 'react';
import Loading from './Loading.jsx';

export default class Comics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${props.url}comics${props.apikey}${props.hash}`,
      loading: false,
      data: []
    }
  }

  getComics() {
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
    this.getComics();
  }

  render() {

    const comics = this.state.data.map((comic, i) => {
      return (
        <div className="col-md-6">
          <div key={i} className="card mb-3">
            <div className="row">
              <div className="col-md-3">
                <img src={comic.thumbnail.path + ".jpg"} className="img-fluid" />
              </div>
              <div className="col-md-9">
                <h4 className="card-title"> {comic.title} </h4>
              </div>
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
        {comics}
      </div>
    )
  }
}
