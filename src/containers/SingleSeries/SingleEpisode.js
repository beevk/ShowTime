import React from 'react';
import { DisplayEpisode } from '../SingleSeries/EpisodeList/Episode';

class SingleEpisode extends React.Component {
	state = {
		episode: null
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		const params = new URLSearchParams(this.props.location.search);
		const season = params.get('season');
		const episode = params.get('episode');

		fetch(`http://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${episode}`)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					episode: json
				});
			});
	}

	render() {
		const { episode } = this.state;

		return (
			<div className="main">
				<div className="episodesWrapper">
					<h1>Series Name</h1>
					{episode && <DisplayEpisode episode={episode} />}
				</div>
			</div>
		);
	}
}

export default SingleEpisode;
