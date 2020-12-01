import React from 'react';
import './Navbar.css';


function Navbar(){
	return(
		<nav className="navbar navbar-expand-lg navbar-dark navbar-purple">
			<a className="navbar-brand" href="/">Navbar</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">Home</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="/">About</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;