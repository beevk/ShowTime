import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Summary extends Component {
	state = {
		information: null
	};

	componentDidMount(props) {
		const href = this.props.href;
		// console.log(href);
		fetch(href).then((response) => response.json()).then((json) => {
			this.setState({ information: json });
		});
	}

	render() {
		const { information } = this.state;
		console.log(information);
		return (
			<div>
				{information && (
					<Link to={`/series/${information.id}`}>
						{information.image && <img src={information.image.medium} alt={information.name} />}
						<h4>{information.name}</h4>
						<p>{information.rating.average}</p>
					</Link>
				)}
			</div>
		);
	}
}

export default Summary;
