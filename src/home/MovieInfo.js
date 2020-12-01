import React from 'react';
import './MovieInfo.css';
import axios from 'axios';

class MovieInfo extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			success: false,
		}

		this.getVideoInfo = this.getVideoInfo.bind(this)
	}

	componentDidMount(){
		this.getVideoInfo()
	}

	getVideoInfo(){
		var video_id = window.location.href.split('/')[4]

		if(video_id !== undefined){
			axios.get(`https://api.themoviedb.org/3/movie/${video_id}?api_key=44fe7789424456fbecf20efec24af7a4`)
      		.then(res => {
        		const result = res.data;
        		this.setState({
        			success: true,
        			video: result,
        		})
      		})
		}
		else{
			console.log('tidak ada')
		}
	}


	render(){	
		console.log(this.state.success)
		if(this.state.success !== true){		
			return(
				<div className="container-sm mt-4 rounded shadow bg-white">
					sabar
				</div>
			)
		}
		else{
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
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}


export default MovieInfo;