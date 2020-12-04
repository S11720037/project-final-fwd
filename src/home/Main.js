import React from 'react';
import './Main.css';
import Movie from './Movie';
import Search from './Search';
import axios from 'axios';

class Main extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			status: '',
		}
	}

	componentDidMount(){
		// get trending movies for home page
		axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=44fe7789424456fbecf20efec24af7a4&page=1`)
      	.then(res => {
        	const result = res.data;
        	this.setState({
        		status: 'top-movies',
        		movies: result,
        	});
      	})
	}

	// get callback value from search form
	// and replace "movies" data
	callbackFunction = (childData) => {
		this.setState({
			movies: childData,
			status: 'search',
		})
	}

	render(){
		if(this.state.status === 'top-movies'){
			// exclude when movies doesn't have poster
			const movies = this.state.movies.results.filter(i => i.poster_path!=null);
			return(
				<div className="container-sm mt-4">

					<Search Callback={this.callbackFunction} />

					<div className="row row-cols-1 row-cols-md-3">
						{movies.map(i => <Movie key={i.id} name={i.title} overview={i.overview} poster={i.poster_path} movie_id={i.id}/>)} 
					</div>
				</div>
			)
		}
		else if(this.state.status === 'search'){
			if(this.state.movies.results.length === 0){			
				return(
					<div className="container-sm mt-4 mb-3">

					<Search Callback={this.callbackFunction} />

					<div className="card text-white">
						<img src="https://pbs.twimg.com/media/C5uvTF-WMAADlB7?format=jpg&name=small" className="card-img" alt="Satania" />
					</div>
					<h3 className="text-center"><a href="https://animemoe.us/" target="_blank" rel="noreferrer">arter tendean</a></h3>
				</div>
				)
			}
			else{
				// exclude when movies doesn't have poster
				const movies = this.state.movies.results.filter(i => i.poster_path!=null);
				return(
					<div className="container-sm mt-4">

						<Search Callback={this.callbackFunction} />

						<div className="row row-cols-1 row-cols-md-3">
							{movies.map(i => <Movie key={i.id} name={i.title} overview={i.overview} poster={i.poster_path} movie_id={i.id}/>)} 
						</div>
					</div>
				)
			}
		}
		else{
			return(
				<div className="container-sm mt-4 main-background rounded shadow p-2">
						<h2 className="text-center">Please Wait</h2>
				</div>
			)
		}
	}
}


export default Main;