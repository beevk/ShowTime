import React, { Component } from 'react';
import PersonList from '../../components/PersonList';
import Intro from '../../components/Intro';
import Loader from '../../components/Loader';

class People extends Component {
	state = {
		persons: [],
		personName: '',
		isFetching: false
	};

	onPersonsInputChange = (e) => {
		this.setState({ personName: e.target.value, isFetching: true });

		fetch(`http://api.tvmaze.com/search/people?q=${e.target.value}`)
			.then((response) => response.json())
			.then((json) => this.setState({ persons: json, isFetching: false }));
	};

	render() {
		const { persons, personName, isFetching } = this.state;

		return (
			<div>
				<Intro message="Here You can look for all of your favourite Actors!" />
				<div className="inputSection">
					<input value={personName} type="text" onChange={this.onPersonsInputChange} />
				</div>
				{persons.length === 0 &&
				personName.trim() === '' && <p>Please enter the persons name into the input.</p>}
				{!isFetching &&
				persons.length === 0 &&
				personName.trim() !== '' && <p>No person Found with matching name!</p>}
				{isFetching && <Loader />}
				{!isFetching && <PersonList list={this.state.persons} />}
			</div>
		);
	}
}

export default People;
