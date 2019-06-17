import React from 'react';
// import fetch from 'whatwg-fetch';

class SeriesName extends React.Component {
	state = {
		show: null
	};

	componentDidMount() {
		const { id } = this.props;
		fetch(`http://api.tvmaze.com/shows/${id}`)
			.then((response) => response.json())
			.then((json) => this.setState({ show: json }));
	}

	render() {
		const { show } = this.state;
		return <React.Fragment>{show && <h1 className="seriesName">{show.name}</h1>}</React.Fragment>;
	}
}

export default SeriesName;
