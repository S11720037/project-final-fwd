import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './home/Navbar';
import Main from './home/Main';

function App(){

    return(
        <React.Fragment>
            <Navbar />
            <Main />
        </React.Fragment>
    )
}


export default App;