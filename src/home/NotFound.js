import React from 'react';
import {Link} from 'react-router-dom';


function NotFound(){
	return(
		<div className="container-sm mt-4 main-background rounded shadow p-2 text-center">
				<h2>Not Found!</h2>
				<Link to="/">Back to home</Link>
		</div>
	)
}

export default NotFound;