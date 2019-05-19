import React from 'react';
import { EpisodeListItem, SingleEpisode } from './Episode';

class EpisodeList extends React.Component {
	state = {
		episodes: null,
		isSingleEpisode: false
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		const params = new URLSearchParams(this.props.location.search);
		const season = params.get('season');
		const episode = params.get('episode');

		if (season && episode) {
			fetch(`http://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${episode}`)
				.then((response) => response.json())
				.then((json) => {
					this.setState({
						episodes: json,
						isSingleEpisode: true
					});
				});
		} else {
			fetch(`http://api.tvmaze.com/shows/${id}/episodes`).then((response) => response.json()).then((json) => {
				const episodesGroupedBySeason = json.reduce((newGroup, ep) => {
					newGroup[ep.season] = (newGroup[ep.season] || []).concat(ep);
					return newGroup;
				}, []);
				this.setState({ episodes: episodesGroupedBySeason });
			});
		}
	}

	changeState(s, e) {
		this.setState({
			episodes: s[e],
			isSingleEpisode: true
		});
	}

	render() {
		const { episodes, isSingleEpisode } = this.state;
		return (
			<div>
				{episodes &&
					!isSingleEpisode &&
					episodes.reverse().map((season, i) => {
						return (
							<div className="season" key={i} onClick={this.changeState.bind(this, season, i)}>
								<h3>Season {season[i].season}</h3>
								<EpisodeListItem episodes={season} seasonId={this.props.match.params.id} />
							</div>
						);
					})}
				{episodes && isSingleEpisode && <SingleEpisode episode={episodes}>Single Episode </SingleEpisode>}
			</div>
		);
	}
}

export default EpisodeList;
