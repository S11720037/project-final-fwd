import React from 'react';
import './MovieInfo.css';
import axios from 'axios';
import Disquss from './Disqus';
import {Redirect} from 'react-router-dom';

class MovieInfo extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			status: 0,
		}

		this.getVideoInfo = this.getVideoInfo.bind(this)
	}

	componentDidMount(){
		this.getVideoInfo()
	}

	getVideoInfo(){
		var video_id = window.location.href.split('/')[5]

		if(video_id !== undefined){
			axios.get(`https://api.themoviedb.org/3/movie/${video_id}?api_key=44fe7789424456fbecf20efec24af7a4`)
      		.then(res => {
        		const result = res.data;
        		this.setState({
        			status: 200,
        			video: result,
        		})
      		})
      		.catch((err) => {
      			this.setState({
      				status: 404
      			})
      		});
		}
	}


	render(){
		if(this.state.status === 200){	

			// change window title
			document.title = this.state.video.original_title + " | S11720037"

			return(
				<div className="container-fluid pt-4">
					
					<div className="card mb-3">
						<div className="row no-gutters">
							<div className="col-md-4 p-2 shadow-sm">
								<img src={`https://image.tmdb.org/t/p/w500/${this.state.video.poster_path}`} className="card-img" alt="..."/>
							</div>
							<br />

							<div className="col-md-8">
								<div className="card-body">
									<h3 className="card-title text-center">{this.state.video.original_title}</h3>
									<hr className="p-0 m-0"/>
									<small className="text-muted label label-success">Release Date: {this.state.video.release_date}</small>

									<p className="card-text mt-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

									<p>
									Status:<br />
									<span className="btn btn-sm btn-danger m-1">{this.state.video.status}</span>
									<span className="btn btn-sm btn-danger m-1">{this.state.video.release_date}</span>
									</p>

									<p>
									Genre:<br />
									{this.state.video.genres.map(i => <span key={i.id} className="btn btn-success btn-sm m-1">{i.name}</span>)}
									</p>

									<p>
									Score:<br />
									<span className="btn btn-sm btn-primary">{this.state.video.vote_average} from {this.state.video.vote_count} users</span>
									</p>
								</div>
							</div>
						</div>
						<hr />
						<Disquss identifier={window.location.href.split('/')[4]}/>
					</div>
				</div>
			)	
		}
		else if(this.state.status === 404){
			return(
				<Redirect to="/project-final-fwd//404/" />
			)
		}
		else{


			return(
				<div className="text-center mt-5">
					<h2 className="text-center">Please wait...</h2>
				</div>
			)
		}
	}
}


export default MovieInfo;