import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SeriesSummary extends Component {
	state = {
		information: null
	};

	componentDidMount(props) {
		const href = this.props.href;
		fetch(href).then((response) => response.json()).then((json) => {
			this.setState({ information: json });
		});
	}

	render() {
		const { information } = this.state;
		const imageSrc = information
			? information.image ? information.image.medium : 'https://via.placeholder.com/200?text=Image+Not+Found'
			: '';

		return (
			<React.Fragment>
				{information && (
					<div className="card">
						<img src={imageSrc} alt={information.name} />
						<Link className="cardTitle" to={`/series/${information.id}`}>
							<h4>{information.name}</h4>
							<span className="cardDescription">
								{information.rating.average ? (
									<span className="highlight">{information.rating.average}</span>
								) : (
									''
								)}
								<span style={{ marginLeft: 5 }}>{information.genres.join(', ')}</span>
							</span>
						</Link>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default SeriesSummary;
