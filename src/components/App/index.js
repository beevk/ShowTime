import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series';
import 'whatwg-fetch';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">TV Series List</h1>
				</header>
				<Intro message="Here You can access all of your favourite Series!" />
				<Series />
			</div>
		);
	}
}

export default App;
