import './App.css';
import React, { useState, createContext } from "react";
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';
import Orders from './components/Orders/Orders';
// import Admin from './components/Admin/Admin;
export const UserContext = createContext();

function App() {
  const [signInUser, setSignInUser] = useState({})
  return (
    <UserContext.Provider value={[signInUser, setSignInUser]}>
      <p>User e-mail: {signInUser.email}</p>

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
          
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:_id">
            <Checkout/>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
