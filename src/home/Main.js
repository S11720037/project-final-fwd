import React from 'react';
import './Main.css';
import Movie from './Movie';

import axios from 'axios';


class Main extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			success: false,
		}
	}

	componentDidMount(){
		// get trending movies for home page
		axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=44fe7789424456fbecf20efec24af7a4&page=1`)
      	.then(res => {
        	const result = res.data;
        	this.setState({
        		success: true,
        		movies: result,
        	});
      	})
	}


	render(){
		if(this.state.success === true){	
			return(
				<div className="container-sm mt-4">
					<div className="row row-cols-1 row-cols-md-3">
						{this.state.movies.results.map(i => <Movie key={i.id} name={i.title} overview={i.overview} poster={i.poster_path}/>)} 
					</div>
				</div>
			)
		}
		else{
			return(
				<div className="container-sm mt-4 main-background rounded shadow p-2">
				sabar
				</div>
			)
		}
	}
}

export default Main;