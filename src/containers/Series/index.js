import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Intro from '../../components/Intro';
import Loader from '../../components/Loader';

class Series extends Component {
	state = {
		series: [],
		seriesName: '',
		isFetching: false
	};

	// Called after render completes successfully
	// componentDidMount() {
	// }

	onSeriesInputChange = (e) => {
		// fetch('http://api.tvmaze.com/search/shows?q=game')
		this.setState({ seriesName: e.target.value, isFetching: true });
		fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
			.then((response) => response.json())
			.then((json) => this.setState({ series: json, isFetching: false }));
	};

	render() {
		const { series, seriesName, isFetching } = this.state;

		return (
			<div className="main">
				<Intro message="Track your show cuz there is so much GOOD on TV!" />
				<div className="search">
					<div className="inputSection">
						<input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
					</div>
					{series.length === 0 &&
					seriesName.trim() === '' && (
						<p style={{ marginTop: 20 }}>Please enter the series name into the input.</p>
					)}
					{!isFetching && series.length === 0 && seriesName.trim() !== '' && <p>No TV Series Found!</p>}
					{isFetching && <Loader />}
					{!isFetching && <SeriesList list={this.state.series} />}
				</div>
			</div>
		);
	}
}

export default Series;
