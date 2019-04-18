import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
	state = {
		series: []
	};

	// Called after render completes successfully
	componentDidMount() {
		fetch('http://api.tvmaze.com/search/shows?q=game')
			.then((response) => response.json())
			.then((json) => this.setState({ series: json }));
	}

	render() {
		return (
			<div>
				Series Container Length: {this.state.series.length}
				<SeriesList list={this.state.series} />
			</div>
		);
	}
}

export default Series;
