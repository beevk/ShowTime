import React, { Component } from 'react';
import SeriesSummary from '../SingleSeries/Summary';

class Person extends Component {
	state = {
		info: null
	};

	componentDidMount() {
		const { id } = this.props.match.params;

		fetch(`http://api.tvmaze.com/people/${id}?embed=castcredits`)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					info: json
				});
			});
	}
	render() {
		const { info } = this.state;
		return (
			<div>
				{info && (
					<div>
						<img src={info.image.medium} alt={info.name} />
						<h3>{info.name}</h3>
						<p>
							<strong> Birthdate: </strong>
							{info.birthday}
						</p>
						<p>
							<strong>Country: </strong>
							{info.country.name}
						</p>
						{info.deathday && (
							<p>
								<strong>Died on</strong>
								{info.deathday}
							</p>
						)}
						<h3>Also Known for</h3>
						{info._embedded.castcredits.map((item, i) => {
							return <SeriesSummary href={item._links.show.href} key={i} />;
						})}
					</div>
				)}
			</div>
		);
	}
}

export default Person;
