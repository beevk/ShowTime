import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';

const Header = () => {
	return (
		<header className="App-header">
			<Link to="/" className="textInWhite">
				Tv Time
			</Link>
			<h1 className="App-title">TV Series List</h1>
			<nav>
				<Link to="/" className="textInWhite">
					{' '}
					Series |{' '}
				</Link>
				<Link to="/people" className="textInWhite">
					{' '}
					People{' '}
				</Link>
			</nav>
		</header>
	);
};

export default Header;
