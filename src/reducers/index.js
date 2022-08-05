import { GET_MOVIES, 
    GET_MOVIE_DETAIL, 
    ADD_MOVIE_FAVORITE, 
    REMOVE_MOVIE_FAVORITE  } from '../actions/index'

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    loading: false
  };

export default function rootReducer( state = initialState, action ) { 
      switch(action.type){
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload,
                loading: false
            };
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            };
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter( m => m.imdbID !== action.payload )
            };
        default:
            return state;
      }
}