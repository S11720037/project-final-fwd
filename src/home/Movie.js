import React from 'react';


function Movie(props){

	return(
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} className="card-img" alt={props.name} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">{props.overview}</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Movie;