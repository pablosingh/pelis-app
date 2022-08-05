import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id);
    }
    render() {
        return (
            <div className="containerMovie">
                {
                    this.props.loading ? <h1>Cargando...</h1> :
                        <div className="movie-card">
                            <h1 className="titleCard">{this.props.movieDetail.Title}</h1>
                            <p>{this.props.movieDetail.Plot}</p>
                            <div className="img-And-Details">
                                    <img className="img-Movie" 
                                    src={`${this.props.movieDetail.Poster}`} 
                                    alt="Image not found"/>
                                <div className="details-Card">
                                    <span>Año : {this.props.movieDetail.Year}</span>
                                    <span>Tipo : {this.props.movieDetail.Type}</span>
                                    <span>Calificacion : {this.props.movieDetail.Rated}</span>
                                    <span>Realizada : {this.props.movieDetail.Released}</span>
                                    <span>Duracion : {this.props.movieDetail.Runtime}</span>
                                    <span>Genero : {this.props.movieDetail.Genre}</span>
                                    <span>Director : {this.props.movieDetail.Director}</span>
                                    <span>Escritor : {this.props.movieDetail.Writer}</span>
                                    <span>Actores : {this.props.movieDetail.Actors}</span>
                                    <span>Language : {this.props.movieDetail.Language}</span>
                                    <span>Pais : {this.props.movieDetail.Country}</span>
                                    <span>Premios : {this.props.movieDetail.Awards}</span>
                                    <span>Votos : {this.props.movieDetail.imdbVotes}</span>
                                    <span>Produccion : {this.props.movieDetail.Production}</span>
                                    <span>Web : {this.props.movieDetail.Website}</span>
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        movieDetail: state.movieDetail,
        loading: state.loading
    };
}

function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);