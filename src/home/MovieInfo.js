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
				<div className="container-sm mt-4 rounded shadow">

					<div className="card mb-3" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${this.state.video.backdrop_path})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
						<div className="row no-gutters">
							<div className="col-md-4">
								<img src={`https://image.tmdb.org/t/p/w500/${this.state.video.poster_path}`} className="card-img" alt="..."/>
							</div>
							<div className="col-md-8 p-2">
								<div className="card-body bg-white rounded shadow-lg">
									<h2 className="card-title">Card title</h2>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
									<p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
								</div>
							</div>
						</div>
					</div>
{/*
				<div className="jumbotron" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${this.state.video.backdrop_path})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat', maxHeight:"200px"}}>

					<img src={`https://image.tmdb.org/t/p/w500/${this.state.video.poster_path}`} className="rounded mx-auto d-block" alt="..." style={{width:"50%"}}/>

				</div>*/}




				afadsfnaskdfjalks
				</div>
			)
		}
	}
}


export default MovieInfo;