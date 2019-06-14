import React, { Component } from 'react';
import Loader from '../../components/Loader';
import EpisodeSummary from './EpisodeList/Episode/EpisodeSummary';
import RecentEpisodes from './EpisodeList/RecentEpisodes';
import LeadCasts from './CastList/LeadCasts';

class SingleSeries extends Component {
	state = {
		show: null
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		fetch(`http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`)
			.then((response) => response.json())
			.then((json) => this.setState({ show: json }));
	}

	render() {
		const { show } = this.state;
		const imageSrc =
			show && show.image ? show.image.medium : 'https://via.placeholder.com/200?text=Image+Not+Found';
		return (
			<div className="main">
				{show === null && <Loader />}
				{show != null && (
					<div>
						<p>
							<img alt="Show" src={imageSrc} />
						</p>
						<h2>{show.name}</h2>
						<p>Premiered: {show.premiered || 'n/a'}</p>
						<p>Runtime: {show.runtime || 'n/a'}</p>
						<p>Ratings: {show.rating.average || 'n/a'}</p>
						<p>Status: {show.status || 'n/a'}</p>
						<div>
							<span dangerouslySetInnerHTML={{ __html: show.summary } || 'n/a'} />
						</div>
						<p>Total Episodes: {show._embedded.episodes.length}</p>
						<p>Language: {show.language}</p>
						<EpisodeSummary href={show._links.previousepisode.href} pointInTime="Previous" />
						{show._links.nextepisode && (
							<EpisodeSummary href={show._links.nextepisode.href} pointInTime="Next" />
						)}
						<h2>Previously Aired Episodes: </h2>
						<RecentEpisodes episodes={show._embedded.episodes} id={show.id} recent="true" />
						<h2>Casts:</h2>
						<LeadCasts casts={show._embedded.cast} showId={show.id} />
					</div>
				)}
			</div>
		);
	}
}

export default SingleSeries;
