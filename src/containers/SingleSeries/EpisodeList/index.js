import React from 'react';
import { EpisodeListItem } from './Episode';

class EpisodeList extends React.Component {
	state = {
		episodes: null
	};

	componentDidMount() {
		const { id } = this.props.match.params;

		fetch(`http://api.tvmaze.com/shows/${id}/episodes`).then((response) => response.json()).then((json) => {
			const episodesGroupedBySeason = json.reduce((newGroup, ep) => {
				newGroup[ep.season] = (newGroup[ep.season] || []).concat(ep);
				return newGroup;
			}, []);
			this.setState({ episodes: episodesGroupedBySeason });
		});
	}

	render() {
		const { episodes } = this.state;
		if (episodes) console.log(episodes);
		return (
			<div className="main">
				<div className="episodesWrapper">
					<h1>Series Name</h1>
					{episodes &&
						episodes.reverse().map((season, i) => {
							return (
								<div className="season" key={i}>
									<h2>Season {season[i].season}</h2>
									<EpisodeListItem episodes={season} seasonId={this.props.match.params.id} />
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default EpisodeList;
