import React, { Component, useContext } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';
class MovieList extends Component {
    state = {  }
    static contextType = UserContext;
    componentDidMount(){
        console.log("context",this.context)
    }
    render() { 
        
        return (
            <UserContext.Consumer>
                {userContext=><div>Movie List {userContext.currentUser?userContext.currentUser.name:" "}
                <MovieRow/></div>}
                
            </UserContext.Consumer>
          );
    }
}

export default MovieList;
