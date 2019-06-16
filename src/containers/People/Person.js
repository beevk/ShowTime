import React, { Component } from 'react';
import SeriesSummary from '../SingleSeries/SeriesSummary';

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
		const imageSrc =
			info && info.image ? info.image.medium : 'https://via.placeholder.com/200?text=Image+Not+Found';

		return (
			<div className="main">
				{info && (
					<div className="personContainer">
						<h1>{info.name}</h1>
						<div className="personInfo">
							<img src={imageSrc} alt={info.name} />
							<div className="wiki">
								<h2>Basic Info.</h2>
								<span>
									<b> Name: </b>
									{info.name || 'n/a'}
								</span>
								<span>
									<b> Birthdate: </b>
									{info.birthday || 'n/a'}
								</span>

								<span>
									<b>Country: </b>
									{info.country ? info.country.name : 'n/a'}
								</span>

								{info.deathday && (
									<span>
										<b>Died on</b>
										{info.deathday}
									</span>
								)}
							</div>
						</div>
						<div className="castCredit">
							{info._embedded.castcredits.length ? <h3>Also Known for</h3> : ''}
							<div className="cards">
								{info._embedded.castcredits.map((item, i) => {
									return <SeriesSummary href={item._links.show.href} key={i} />;
								})}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Person;
