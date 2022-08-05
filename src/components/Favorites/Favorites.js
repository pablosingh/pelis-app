import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions';
import './Favorites.css';

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          { this.props.favourites.map( f => <li>{f.Title}
              <button onClick={()=>this.props.removeMovieFavorite(f.imdbID)}>
                X
              </button>
            </li>
           )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    favourites: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
