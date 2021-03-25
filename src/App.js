import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import NotFound from "./components/pages/NotFound";
import GithubState from "./context/guthub/GithubState";
import AlertState from "./context/alert/AlertState";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  // Fetch user profiles on restart
  // useEffect(() => {
  //   setLoading(true);
  //   (async () => {
  //     let res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     console.log(res.data);
  //     setUsers(res.data);
  //     setLoading(false);
  //   })();
  //   //eslint-disable-next-line
  // }, []);

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
