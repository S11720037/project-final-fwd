import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './home/Navbar';
import Main from './home/Main';
import About from './about/About';
import MovieInfo from './home/MovieInfo';

function App(){

    return(
        <Router>
            <React.Fragment>
                <Navbar />

                <Switch>
                    <Route exact path="/project-final-fwd/">
                        <Main />
                    </Route>
                    <Route exact path="/project-final-fwd/about/">
                        <About />
                    </Route>
                    <Route path="/project-final-fwd/detail/">
                        <MovieInfo />
                    </Route>
                </Switch>
            </React.Fragment>
        </Router>
    )
}


export default App;