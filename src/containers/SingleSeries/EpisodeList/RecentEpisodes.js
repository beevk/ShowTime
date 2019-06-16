import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeListItem = ({ episode, id }) => {
	return (
		<tr>
			<td>
				{' '}
				s{episode.season}e{episode.number}{' '}
			</td>
			<td>
				<Link to={`/series/${id}/episode?season=${episode.season}&episode=${episode.number}`}>
					{episode.name}
				</Link>
			</td>
			<td>{episode.airdate} </td>
		</tr>
	);
};

const RecentEpisodes = (props) => {
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
					{props.episodes.slice(-5, -1).reverse().map((ep, i) => {
						return (
							<React.Fragment key={i}>
								<EpisodeListItem episode={ep} id={props.id} />
							</React.Fragment>
						);
					})}
				</tbody>
			</table>
			<Link to={`/series/${props.id}/episodes`}>
				<span className="seeAll">
					<span>View Full Episodes List >></span>
				</span>
			</Link>
		</div>
	);
};

export default RecentEpisodes;
