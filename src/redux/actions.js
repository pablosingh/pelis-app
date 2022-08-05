export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const API_KEY = 'c1ab8a3e'

export function getMovies(titulo) {
    return function(dispatch) {
      console.log('Recibido : ',titulo);
      return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=}` + titulo)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
};

export function getMovieDetail(id){
  return function(dispatch) {
    dispatch({type: "LOADING"});
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=` + id)
      .then(response => response.json())
      .then(detail => {
        console.log(detail);
        dispatch({ type: GET_MOVIE_DETAIL, payload: detail });
      });
  };
}

export function addMovieFavorite(payload){
    return {
        type: ADD_MOVIE_FAVORITE,
        payload
    }
}

export function removeMovieFavorite(id){
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: id
  }
}

