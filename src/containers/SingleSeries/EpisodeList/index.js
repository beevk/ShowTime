import React from 'react';
import { EpisodeListItem } from './Episode';
import SeriesName from '../SeriesName';

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

	toggleVisibility(e) {
		e.preventDefault();
		var table = e.currentTarget.nextElementSibling;
		const symbol = e.currentTarget.childNodes[1];

		table.style.display = table.style.display === 'none' ? 'block' : 'none';
		symbol.innerText = symbol.innerText === '>' ? 'v' : '>';
	}

	render() {
		const { episodes } = this.state;

		return (
			<div className="main">
				<div className="episodesWrapper">
					<SeriesName id={this.props.match.params.id} />
					{episodes &&
						episodes.reverse().map((season, i) => {
							return (
								<div className="season" key={i}>
									<div onClick={this.toggleVisibility.bind(this)} className="seasonTitle">
										<h2>Season {season[i].season}</h2>
										<span
											style={{ border: '1px solid #fff', padding: '0px 20px', borderRadius: 4 }}
										>
											>
										</span>
									</div>
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
