import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './Components/Post/PostDetail/PostDetail';
import NoMatch from './Components/NoMatch/NoMatch';
import LogIn from './Components/LogIn/LogIn';
import LogOut from './Components/LogOut/LogOut';
function App() {
  return (
    <div className="app">
    

      <Router>

      <Header></Header>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/logout">
            <LogOut></LogOut>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>


      </Router>

    </div>
  );
}

export default App;
