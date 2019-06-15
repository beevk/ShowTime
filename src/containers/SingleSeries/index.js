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
					<div className="seriesContainer">
						<h1>{show.name}</h1>
						<div className="seriesInfo">
							<img alt="Show" src={imageSrc} />
							<div className="seriesSummary">
								<span dangerouslySetInnerHTML={{ __html: show.summary } || 'n/a'} />
							</div>
							<div className="wiki">
								<h2>Show Info</h2>
								<span>
									<b>Premiered:</b> {show.premiered || 'n/a'}
								</span>

								<span>
									<b>Ratings:</b> {show.rating.average || 'n/a'} ⭐
								</span>
								<span>
									<b>Schedule: </b>
									{show.schedule.days.length ? show.schedule.days.join(', ') + ' at ' : ''}
									{show.schedule.time || 'n/a'}
									<span> {show.runtime ? `(${show.runtime} min)` : ''} </span>
								</span>
								<span>
									<b>Status:</b> {show.status || 'n/a'}
								</span>
								<span>
									<b>Total Episodes:</b> {show._embedded.episodes.length}
								</span>
								<span>
									<b>Language:</b> {show.language}
								</span>
								<span>
									<b>Genres:</b> {show.genres.join(', ') || 'n/a'}
								</span>
								<span>
									<b>Network:</b> {show.network ? show.network.name || 'n/a' : 'n/a'}
								</span>
								<span className="officialLink">
									{show.officialSite ? (
										<span>
											<b>Official Site: </b>
											<a href={show.officialSite} target="_blank" rel="noopener noreferrer">
												{show.officialSite.replace(/\.com.+/g, '.com')}
											</a>
										</span>
									) : (
										''
									)}
								</span>
							</div>
						</div>

						<div className="currentEpisodes">
							<EpisodeSummary
								href={show._links.previousepisode.href}
								pointInTime="Previous"
								id={show.id}
							/>
							{show._links.nextepisode && (
								<EpisodeSummary href={show._links.nextepisode.href} pointInTime="Next" id={show.id} />
							)}
						</div>

						<div className="recentEpisodes">
							<h3>Previously Aired Episodes </h3>
							<RecentEpisodes episodes={show._embedded.episodes} id={show.id} recent="true" />
						</div>

						<div className="impCasts">
							<h3>Casts </h3>
							<LeadCasts casts={show._embedded.cast} showId={show.id} />
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default SingleSeries;
