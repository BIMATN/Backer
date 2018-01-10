import React, {Component} from 'react';
import Axios from 'axios';

class SearchBar extends Component {

	constructor (props) {
		super(props);
		this.state = {
			search: ""
		};
	}

	changeHandler = event => {
		const {id, value} = event.target;
		this.setState ({
			[id]:value
		});
	};

	formSubmit = (event) => {
		event.preventDefault();
		const {search} = this.state;
		const wildSearch = "%"+search+"%";
		console.log(wildSearch);
		//Axios Request
	  	Axios({
	  	  method: 'post',
	  	  url: this.props.url,
	  	  data: {
	  	    "search": wildSearch
	  	  }
	  	}).then(function (response) {
	  		console.log(response)
	  	  })
	  	  .catch(function (error) {
	  	    console.log(error);
	  	    alert("There seems to be a problem. Please try again.");
	  	  });
	}

	render(props) {
		return(
			<div className="input-group mb-3">
			  <input type="text" className="form-control" id="search" placeholder="Find a product..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.search} onChange={this.changeHandler}></input>
			  <div className="input-group-append">
			    <button className="btn btn-secondary" type="button" onClick={this.formSubmit}>Search</button>
			  </div>
			</div>
		)
	}

}

export default SearchBar;