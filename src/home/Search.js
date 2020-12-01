import React from 'react';


class Search extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			text: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    	this.setState({text: event.target.value});
    	console.log(this.state.text);
  	}

  	handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.text);
    	event.preventDefault();
  	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					{/*<label for="search">Email address</label>*/}
					<input type="text" className="form-control" id="search" name="search" placeholder="Search Movie..." onChange={this.handleChange} />
				</div>
				<button type="submit" className="btn btn-primary">Search</button>
			</form>
		)
	}
}


export default Search;