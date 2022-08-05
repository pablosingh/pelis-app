import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import './Buscador.css';

import { addMovieFavorite, getMovies } from '../redux/actions';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Por enviar : ',this.state.title);
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          { this.props.movies && this.props.movies.map( (m) => <li>
            <Link to={`/movie/${m.imdbID}`}>
              {m.Title}
            </Link>
            {console.log(m)} 
            <button onClick={()=>this.props.addMovieFavorite( m )}>
              Fav
            </button>
            </li>
            )}
        </ul>
      </div>
    );
  }
}

// -----------------------------------------------------------------------------------

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

// -----------------------------------------------------------------------------------

