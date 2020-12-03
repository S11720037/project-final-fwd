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
import NotFound from './home/NotFound';

function App(){

    return(
        <Router>
            <React.Fragment>
                <Navbar />

                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/about/">
                        <About />
                    </Route>
                    <Route path="/detail/">
                        <MovieInfo />
                    </Route>
                    <Route path="/404/">
                        <NotFound />
                    </Route>
                </Switch>
            </React.Fragment>
        </Router>
    )
}


export default App;