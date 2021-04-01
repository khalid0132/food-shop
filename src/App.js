import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
// import Home from "./Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import NoMatch from './components/NoMatch/NoMatch';
// import Admin from './components/Admin/Admin;

function App() {
  return (
    <div>
      {/* <p>Email: {email}</p> */}
         <Router>
            <Header></Header>
       <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            <Checkout />
          </Route>
          <Route path="/admin">
            <Admin />
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
