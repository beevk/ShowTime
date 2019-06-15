import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

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
		const { id } = this.props;

		return (
			<div className="currentEpisodeSummary">
				<h3>{this.props.pointInTime} Episode</h3>
				{information && (
					<div className="epInfo">
						<Link to={`/series/${id}/episodes?season=${information.season}&episode=${information.number}`}>
							<span>
								{information.name || ''}
								<span className="highlight">
									s{information.season}e{information.number}
								</span>
							</span>
						</Link>
						<span className="mono">{information.airdate || ''}</span>
						<div>
							<span
								className="seriesSummary"
								dangerouslySetInnerHTML={{ __html: information.summary } || 'n/a'}
							/>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default EpisodeSummary;
