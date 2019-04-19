import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
	state = {
		show: null
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
			.then((response) => response.json())
			.then((json) => this.setState({ show: json }));
	}

	render() {
		const { show } = this.state;
		return (
			<div>
				{show === null && <Loader />}
				{show != null && (
					<div>
						<p>
							<img alt="Show" src={show.image.medium} />
						</p>
						<p>
							<b>{show.name}</b>
						</p>
						<p>Premiered: {show.premiered}</p>
						<p>Runtime: {show.runtime}</p>
						<p>Ratings: {show.rating.average}</p>
						<p>Summary: {show.summary}</p>
						<p>Episodes: {show._embedded.episodes.length}</p>
					</div>
				)}
			</div>
		);
	}
}

export default SingleSeries;
