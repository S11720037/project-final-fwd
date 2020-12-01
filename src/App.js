import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './home/Navbar';
import Main from './home/Main';
import About from './about/About';

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
                </Switch>
            </React.Fragment>
        </Router>
    )
}


export default App;