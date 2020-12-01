import React from 'react';
import axios from 'axios';


class Search extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			text: this.props.searchMovie
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    	this.setState({text: event.target.value});
  	}

  	handleSubmit(event) {
    	event.preventDefault();

	    // search movie
	    // just work when textbox not empty
    	if((this.state.text.length) > 0){		
			axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=44fe7789424456fbecf20efec24af7a4&query=${this.state.text}`)
	      	.then(res => {
	        	const result = res.data;

	        	// send value to parent
	    		this.props.Callback(result);
	      	})
    	}
    	else{
    		alert('Can\'t empty')
    	}
  	}

	render(){
		return(
			<div className="input-group mb-3">
				<input type="text" className="form-control" id="search" name="search" placeholder="Search Movie..." onChange={this.handleChange} value={this.state.text}/>
				<div className="input-group-append">
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
				</div>
			</div>
		)
	}
}


export default Search;