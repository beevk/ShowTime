import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeListItem = (props) => {
	const episodes = props.episodes;

	return (
		<div style={{ overflowX: 'auto' }}>
			<table>
				<thead>
					<tr>
						<th>Episode</th>
						<th>Episode Name</th>
						<th>AirDate</th>
					</tr>
				</thead>
				<tbody>
					{episodes.map((episode, i) => {
						return (
							<React.Fragment key={i}>
								<tr>
									<td>
										s{episode.season}e{episode.number}
									</td>
									<td className="episodeTitle">
										<Link
											to={`/series/${props.seasonId}/episode?season=${episode.season}&episode=${episode.number}`}
										>
											{episode.name}
										</Link>
									</td>
									<td>{episode.airdate} </td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

const DisplayEpisode = (props) => {
	const episode = props.episode;
	const imgSrc = episode.image ? episode.image.original : 'https://via.placeholder.com/200?text=Image+Not+Found';

	const date = new Date(episode.airstamp);
	return (
		<div className="seriesContainer">
			<h2>{episode.name}</h2>
			<div className="seriesInfo">
				<img alt="episode" src={imgSrc} />
				<div className="seriesSummary">
					<span dangerouslySetInnerHTML={{ __html: episode.summary } || 'n/a'} />
				</div>
				<div className="wiki">
					<h2>Episode Info.</h2>
					<span>
						<b>Season:</b> {episode.season}
					</span>
					<span>
						<b>Episode:</b> {episode.number}
					</span>
					<span>
						<b>AirDate:</b> {date.toLocaleDateString() || 'n/a'}
					</span>
					<span>
						<b>AirTime:</b> {date.toLocaleTimeString() || 'n/a'}
					</span>
					<span>
						<b>Runtime:</b> {episode.runtime || 'n/a'} mins.
					</span>
				</div>
			</div>
		</div>
	);
};

export { DisplayEpisode, EpisodeListItem };
