import React from 'react';
import '../index.css';

class EpisodeSummary extends React.Component {
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
				<h4>{this.props.pointInTime} Episode:</h4>
				{information && (
					<div className="prevEpisode">
						<p>{information.name || 'n/a'}</p>
						<p>
							S{information.season}e{information.number}
						</p>
						<p>AirTime: {information.airtime || 'n/a'}</p>
						<div>
							<span dangerouslySetInnerHTML={{ __html: information.summary } || 'n/a'} />
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default EpisodeSummary;
