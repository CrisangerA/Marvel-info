import React, { Component } from 'react';
import Loading from './Loading.jsx';

export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${props.url}characters${props.apikey}${props.hash}`,
      loading: false,
      data: []
    }
  }

  getCharacters() {
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
    this.getCharacters();
  }

  render() {

    const characters = this.state.data.map((character, i) => {
      return (
        <div key={i} className="col-md-3">
          <div className="card mb-3">
            <img src={character.thumbnail.path + '.' + character.thumbnail.extension} className="img-fluid" />
            <div className="card-body text-center">
              <h3> {character.name} </h3>
               <h6>comiscs: {character.comics.available}</h6>
               <h6>series: {character.series.available}</h6>
               <h6>stories: {character.stories.available}</h6>
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
        {characters}
      </div>
    )
  }
}
