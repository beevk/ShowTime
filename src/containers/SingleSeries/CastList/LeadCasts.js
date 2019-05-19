import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const CastListItem = ({ cast }) => {
	const imgSrc = cast.person.image ? cast.person.image.medium : 'https://loremflickr.com/320/240/funny';

	return (
		<div>
			<img src={imgSrc} alt="actor" />
			<NavLink to={`/people/${cast.person.id}`}>
				<h4 className="noMargin"> {cast.person.name} </h4>
			</NavLink>
			<p className="noMargin"> as {cast.character.name} </p>
		</div>
	);
};

const LeadCasts = (props) => {
	const topCasts = props.casts.length > 4 ? props.casts.slice(0, 4) : props.casts;
	return (
		<div>
			{topCasts.map((cast) => <CastListItem cast={cast} key={cast.character.id} />)}
			{props.casts.length > 4 && (
				<div>
					<NavLink to={`/series/${props.showId}/cast`}>
						<p>See all cast...</p>
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default LeadCasts;
