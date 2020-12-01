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
		axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=44fe7789424456fbecf20efec24af7a4&page=1`)
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
			console.log(this.state.movies.results);
			for(var i of this.state.movies.results){
				console.log(i);
			}
			return(
				<div className="container-sm mt-4 main-background rounded shadow p-2">
				berhasil
				{this.state.movies.results.map(i => <Movie key={i.id} name={i.title} overview={i.overview} poster={i.poster_path}/>)} 
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