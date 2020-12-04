import React from 'react';
import axios from 'axios';
import './Search.css';


class Search extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			text: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    	this.setState({text: event.target.value});

    	if(event.target.value.length > 0){
    		axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=44fe7789424456fbecf20efec24af7a4&query=${this.state.text}`)
	      	.then(res => {
	        	const result = res.data;

	        	// send value to parent
	    		this.props.Callback(result);
	      	})
	      	.catch(err => {
	      		// clear console error for not found movie
	      		console.clear()
	      		console.log('Movie Not Found')
	      	});
    	}
    	else{
    		axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=44fe7789424456fbecf20efec24af7a4&page=1`)
	      	.then(res => {
	        	const result = res.data;
	        	
	        	this.props.Callback(result);
	      	})
    	}
  	}


	render(){
		return(
			<div className="input-group mb-3">
				<input type="text" className="form-control" id="search" name="search" placeholder="Search Movie..." onChange={this.handleChange} value={this.state.text}/>
			</div>
		)
	}
}


export default Search;