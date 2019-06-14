import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Intro from '../../components/Intro';
import Loader from '../../components/Loader';
import { DebounceInput } from 'react-debounce-input';

class Series extends Component {
	state = {
		series: [],
		seriesName: '',
		isFetching: false
	};

	onSeriesInputChange = (e) => {
		if (this.state.typingTimeout) {
			this.setState({ typingTimeout: 0 });
		}

		this.setState({
			seriesName: e.target.value,
			isFetching: true
		});

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
					<DebounceInput
						className="inputSection"
						minLength={2}
						debounceTimeout={500}
						element="input"
						onChange={this.onSeriesInputChange}
						value={seriesName}
					/>

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
