import React, { Component } from 'react';
import Loader from '../../components/Loader';
import EpisodeSummary from './SingleEpisode/EpisodeSummary';

const ListEpisodes = (props) => {
	console.log(props.item);
	return (
		// 	// /shows/:id/episodebynumber?season=:season&number=:number
		// 	// <Link to={`/series/${series.show.id}`}>
		<li>{props.item.name}</li>
	);
};

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
						<section>
							<h2>Previously Aired Episodes: </h2>
							<ul>
								{show._embedded.episodes.slice(-10, -1).reverse().map((episode) => {
									return <ListEpisodes item={episode} />;
								})}
							</ul>
						</section>
					</div>
				)}
			</div>
		);
	}
}

export default SingleSeries;
