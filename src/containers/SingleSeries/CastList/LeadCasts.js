import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const CastListItem = ({ cast }) => {
	const imgSrc = cast.person.image
		? cast.person.image.medium
		: 'https://via.placeholder.com/200?text=Image+Not+Found';

	return (
		<div className="card">
			<img src={imgSrc} alt="actor" />
			<NavLink className="cardTitle" to={`/people/${cast.person.id}`}>
				<h4 className="noMargin"> {cast.person.name} </h4>
				<span className="cardDescription mono"> as {cast.character.name} </span>
			</NavLink>
		</div>
	);
};

const LeadCasts = (props) => {
	const topCasts = props.casts.length > 4 ? props.casts.slice(0, 4) : props.casts;
	return (
		<React.Fragment>
			<div className="cards">{topCasts.map((cast) => <CastListItem cast={cast} key={cast.character.id} />)}</div>
			{props.casts.length > 4 && (
				<div>
					<NavLink to={`/series/${props.showId}/cast`}>
						<span className="seeAll">
							<span>View all Cast >></span>
						</span>
					</NavLink>
				</div>
			)}
		</React.Fragment>
	);
};

export default LeadCasts;
