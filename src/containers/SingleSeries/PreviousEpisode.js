import React from 'react';
import './index.css';

class PreviousEpisode extends React.Component {
	state = {
		information: null
	};

	componentDidMount() {
		const href = this.props.href;
		fetch(href).then((response) => response.json()).then((json) => {
			this.setState({ information: json });
		});
	}

	render() {
		const { information } = this.state;
		return (
			<div>
				<hr />
				<h4>Previsous Episode:</h4>
				{information && (
					<div className="prevEpisode">
						<p>{information.name || 'n/a'}</p>
						<p>
							S{information.season}e{information.number}
						</p>
						<p>AirTime: {information.airtime || 'n/a'}</p>
						<div>
							Plot: <span dangerouslySetInnerHTML={{ __html: information.summary } || 'n/a'} />
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default PreviousEpisode;
