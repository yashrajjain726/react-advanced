import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartConText from './context/cartContext'
class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user" + username);
    const user = { name: "Yash" };
    this.setState({ currentUser: user });
  };
  state = { currentUser: null };
  render() {
    return (
      <CartConText.Provider value={{cart:[]}}>
        
      
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login/>
        </div>
      </UserContext.Provider>
      </CartConText.Provider>
    );
  }
}

export default App;
