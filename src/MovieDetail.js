import React, { Component } from 'react';

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=ececdbefc89c980fc44d7922eb16239f&language=en-US`,
      );
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
  }
}

export default MovieDetail;
