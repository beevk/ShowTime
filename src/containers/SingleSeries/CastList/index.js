import React from 'react';
import { Link } from 'react-router-dom';
import SeriesName from '../SeriesName';
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
			<div className="main">
				<div className="castWrapper">
					<SeriesName id={this.props.match.params.id} />
					<h2>Cast</h2>
					<div className="cards">
						{cast &&
							cast.map((member, i) => {
								const imageSrc = member.character.image
									? member.character.image.medium
									: member.person.image
										? member.person.image.medium
										: 'https://via.placeholder.com/200?text=Image+Not+Found';
								return (
									<div className="card" key={i}>
										<img src={imageSrc} alt={member.person.name} />
										<Link className="cardTitle" to={`/people/${member.person.id}`} key={i}>
											<h4>{member.person.name}</h4>
											<span className="cardDescription mono">as {member.character.name}</span>
										</Link>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		);
	}
}

export default CastList;
