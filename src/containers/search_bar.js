import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


export default class SearchBar extends Component{
	//initializing state
	constructor(props){
		super(props);
		this.state = {term:''};
		this.onInputChange = this.onInputChange.bind(this); 
		this.onFormSubmit = this.onFormSubmit.bind(this); 

		//this instance of searchbar has a function called onInputChange. Bind that function to this(Search Bar)
	}

	onInputChange(event){ //onHover,onChange ect. uses event object
	//	console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault(); //don't submit the form. Enter won't work on the searchbar
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}

	render(){
		//when you press enter on a form element, 
		//the browser thinks you're submitting contents on a form
		return (
			<form onSubmit={this.onFormSubmit} className="input-group"> 
			
				<input 
					placeholder="Get a five day forecast in your favorite cities"
					className="form-control"
					value={this.state.term} //turns it into controlled component
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary"> Submit </button>
				</span>
			</form>
		);
	}

}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);