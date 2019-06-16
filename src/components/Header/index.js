import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="headerWrapper">
				<div className="logo">
					<NavLink to="/">
						<p className="App-title">TvTime</p>
					</NavLink>
				</div>
				<nav>
					<NavLink to="/series" activeClassName="activeNow" className="navItem">
						<span> Series </span>
					</NavLink>
					<NavLink to="/people" activeClassName="activeNow" className="navItem">
						<span> People </span>
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
