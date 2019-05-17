import React, { Component } from 'react';

class Person extends Component {
	render() {
		const { id } = this.props.match.params;
		return <div>Hello there indivisual person: {id} </div>;
	}
}

export default Person;
