import React, { Component, div } from 'react';
import MovieList from './MovieList';
class MoviePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <MovieList/>
            </div>
         );
    }
}
 
export default MoviePage;