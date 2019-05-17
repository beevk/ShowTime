import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeListItem = ({ episode, id }) => {
	return (
		<div>
			<Link to={`/series/${id}/episodes?season=${episode.season}&episode=${episode.number}`}>
				<div>
					<span> s{episode.season}</span>
					<span>e{episode.number} - </span>
					{episode.name}
					<span> Aired on: {episode.airdate} </span>
				</div>
			</Link>
		</div>
	);
};

const RecentEpisodes = (props) => {
	return (
		<div>
			{props.episodes.slice(-10, -1).reverse().map((ep, i) => {
				return <EpisodeListItem episode={ep} key={i} id={props.id} />;
			})}
			<Link to={`/series/${props.id}/episodes`}>
				<span>See all...</span>
			</Link>
		</div>
	);
};

export default RecentEpisodes;
