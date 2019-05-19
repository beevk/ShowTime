import React from 'react';
import { Link } from 'react-router-dom';
// import fetch from 'whatwg-fetch';

class CastList extends React.Component {
	state = {
		cast: null
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		fetch(`http://api.tvmaze.com/shows/${id}/cast`).then((response) => response.json()).then((json) => {
			this.setState({ cast: json });
		});
	}

	render() {
		const { cast } = this.state;

		return (
			<div>
				{cast &&
					cast.map((member, i) => {
						const imageSrc = member.character.image
							? member.character.image.medium
							: member.person.image ? member.person.image.medium : '';
						return (
							<Link to={`/people/${member.person.id}`} key={i}>
								<div>
									<img src={imageSrc} alt={member.person.name} />
									<h4>{member.person.name}</h4>
									<p>as {member.character.name}</p>
								</div>
							</Link>
						);
					})}
			</div>
		);
	}
}

export default CastList;
