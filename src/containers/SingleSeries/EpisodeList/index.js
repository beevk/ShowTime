import React from 'react';
import { EpisodeListItem, SingleEpisode } from './Episode';

class EpisodeList extends React.Component {
	state = {
		episodes: null,
		singleEpisode: false
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		const params = new URLSearchParams(this.props.location.search);
		const season = params.get('season');
		const episode = params.get('episode');
		console.log(id, season, episode);

		if (season && episode) {
			fetch(`http://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${episode}`)
				.then((response) => response.json())
				.then((json) =>
					this.setState({
						episodes: json,
						singleEpisode: true
					})
				);
		} else {
			fetch(`http://api.tvmaze.com/shows/${id}/episodes`).then((response) => response.json()).then((json) => {
				this.setState({ episodes: json });
			});
		}
	}

	render() {
		const { episodes, singleEpisode } = this.state;
		return (
			<div>
				{episodes &&
					!singleEpisode &&
					episodes.reverse().map((episode, i) => {
						return <EpisodeListItem episode={episode} key={i} />;
					})}
				{episodes && singleEpisode && <SingleEpisode>Single Episode</SingleEpisode>}
			</div>
		);
	}
}

export default EpisodeList;
