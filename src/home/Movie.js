import React from 'react';
import {Link} from 'react-router-dom';

function Movie(props){

	// create excerpt
	let overview = null;

	if((props.overview.length) > 150) {
        overview = props.overview.substring(0,150) + "...";
    }
    else{
    	overview = props.overview;
    }

	return(
		<div className="col mb-4">
			<div className="card h-100 shadow-sm">
				<Link to={`/project-final-fwd/detail/${props.movie_id}/`}><img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} className="card-img-top" alt={props.name} /></Link>
				<div className="card-body">
					<h5 className="card-title text-center">{props.name}</h5>
					<p className="card-text">{overview}</p>
				</div>
			</div>
		</div>
	);
}

export default Movie;