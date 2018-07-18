import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'The Empire Strikes Back',
    desc: 'The Best Space Movie'
  },
  {
    id: 2,
    title: 'Forest Gump'
  },
  {
    id: 3,
    title: 'Fight Club'
  }
];

class App extends Component {
  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=ececdbefc89c980fc44d7922eb16239f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} desc={movie.desc} />
        ))}
      </div>
    );
  }
}

export default App;
