import React, { Component } from 'react';
import Loader from '../../components/Loader';
import PreviousEpisode from './PreviousEpisode';

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
						<h2>{show.name}</h2>
						<p>Premiered: {show.premiered}</p>
						<p>Runtime: {show.runtime}</p>
						<p>Ratings: {show.rating.average || 'n/a'}</p>
						<p>Status: {show.status || 'n/a'}</p>
						<div>
							Plot: <span dangerouslySetInnerHTML={{ __html: show.summary } || 'n/a'} />
						</div>
						<p>Total Episodes: {show._embedded.episodes.length}</p>
						<p>Language: {show.language}</p>
						<PreviousEpisode href={show._links.previousepisode.href} />
					</div>
				)}
			</div>
		);
	}
}

export default SingleSeries;
