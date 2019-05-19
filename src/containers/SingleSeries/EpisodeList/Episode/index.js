import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeListItem = (props) => {
	const episodes = props.episodes;

	return (
		<div>
			{episodes.map((episode, i) => {
				return (
					<Link
						to={`/series/${props.seasonId}/episodes?season=${episode.season}&episode=${episode.number}`}
						key={i}
					>
						<div> {episode.name} </div>
					</Link>
				);
			})}
		</div>
	);
};

const SingleEpisode = (props) => {
	const episode = props.episode;
	const imgSrc = episode.image ? episode.image.medium : 'https://loremflickr.com/320/240/funny';

	const date = new Date(episode.airstamp);
	return (
		<div>
			<p>
				<img alt="episode" src={imgSrc} />
			</p>
			<h2>{episode.name}</h2>
			<p>Season: {episode.season}</p>
			<p>Episode: {episode.number}</p>
			<p>AirDate: {date.toLocaleDateString() || 'n/a'}</p>
			<p>AirTime: {date.toLocaleTimeString() || 'n/a'}</p>
			<p>Runtime: {episode.runtime || 'n/a'} mins.</p>
			<div>
				<span dangerouslySetInnerHTML={{ __html: episode.summary } || 'n/a'} />
			</div>
		</div>
	);
};

export { SingleEpisode, EpisodeListItem };
