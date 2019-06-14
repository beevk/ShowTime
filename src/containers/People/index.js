import React, { Component } from 'react';
import PersonList from '../../components/PersonList';
import Intro from '../../components/Intro';
import Loader from '../../components/Loader';
import { DebounceInput } from 'react-debounce-input';

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
			<div className="main">
				<Intro message="Some people just need a High-Five!" />
				<div className="search">
					<DebounceInput
						className="inputSection"
						minLength={2}
						debounceTimeout={500}
						element="input"
						onChange={this.onPersonsInputChange}
						value={personName}
					/>

					{persons.length === 0 &&
					personName.trim() === '' && (
						<p style={{ marginTop: 20 }}>Please enter the person name into the input.</p>
					)}
					{!isFetching &&
					persons.length === 0 &&
					personName.trim() !== '' && <p>No person Found with matching name!</p>}
					{isFetching && <Loader />}
					{!isFetching && <PersonList list={this.state.persons} />}
				</div>
			</div>
		);
	}
}

export default People;
