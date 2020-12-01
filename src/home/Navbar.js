import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";


function Navbar(){
	return(
		<nav className="navbar navbar-expand-lg navbar-dark navbar-purple">
			<Link className="navbar-brand disabled" to="/">S11720037</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/about">About</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;