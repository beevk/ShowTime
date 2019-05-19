import React from 'react';
// import './index.css';
import { Link } from 'react-router-dom';

const PersonListItem = ({ item }) => {
	// const img = series.show.image;
	return (
		<li>
			{/* <img src={img} alt="" /> */}
			<Link to={`/people/${item.person.id}`}>
				<div className="searchResult">
					{item.person.name} <br />
					<span className="mono">
						{item.person.birthday && <span> - {item.person.deathday} </span>}
						{item.person.country && <span> Country: {item.person.country.code} </span>}
					</span>
				</div>
			</Link>
		</li>
	);
};

const PersonList = (props) => {
	return (
		<div>
			{console.log(props.list.length)}
			<ul className="seriesList">
				{props.list.map((people) => <PersonListItem item={people} key={people.person.id} />)}
			</ul>
		</div>
	);
};

export default PersonList;
