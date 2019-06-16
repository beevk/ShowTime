import React from 'react';
// import './index.css';
import { Link } from 'react-router-dom';

const PersonListItem = ({ item }) => {
	const imageSrc = item.person.image
		? item.person.image.medium
		: 'https://via.placeholder.com/53x75?text=Image+Not+Found';

	const bdayStyle = {
		background: '#34D1BF',
		color: '#fff',
		padding: '0px 5px',
		borderRadius: 2
	};

	// const info = {
	// 	display: 'flex',
	// 	flexDirection: 'row',
	// 	justifyContent: 'center'
	// };

	const birthdaySVG = (
		<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 26 26" aria-labelledby="title">
			<title>Birthday</title>
			<path
				style={{}}
				d="M 12.71875 0.125 C 12.613281 1.535156 10.980469 2.40625 11.0625 4.0625 C 11.144531 5.71875 12.476563 5.921875 12.59375 5.96875 C 11.507813 3.339844 13.042969 3.78125 13.15625 2.28125 C 13.339844 3.332031 14.242188 4.171875 13.0625 5.96875 C 13.0625 5.96875 14.78125 5.511719 14.90625 4.0625 C 15.03125 2.613281 13.246094 0.414063 12.71875 0.125 Z M 15 6.59375 C 15 6.59375 14.429688 7 13.21875 7.25 C 12.007813 7.5 11.414063 7.324219 11 7.4375 C 9.921875 7.734375 9.15625 8.5625 9.15625 9.625 C 9.15625 10.6875 10 10.53125 10 10.53125 L 10 14.1875 C 6.660156 14.382813 5 15.011719 4.375 16.15625 C 4.535156 16.316406 4.664063 16.484375 4.78125 16.625 C 4.953125 16.835938 5.113281 17.03125 5.21875 17.03125 C 5.855469 17.03125 6.292969 17.539063 6.65625 17.96875 C 7.027344 18.40625 7.28125 18.6875 7.625 18.6875 C 7.890625 18.6875 8.0625 18.507813 8.375 18.09375 C 8.699219 17.667969 9.152344 17.09375 9.96875 17.09375 C 11.203125 17.09375 11.554688 18.214844 11.8125 19.03125 C 12.085938 19.90625 12.238281 19.90625 12.71875 19.90625 C 13.148438 19.90625 13.273438 20.015625 13.53125 19.09375 C 13.769531 18.238281 14.121094 17.0625 15.5 17.0625 C 16.261719 17.0625 16.753906 17.550781 17.1875 17.96875 C 17.554688 18.320313 17.851563 18.625 18.28125 18.625 C 18.921875 18.625 19.226563 18.230469 19.5625 17.71875 C 19.667969 17.554688 19.789063 17.398438 19.875 17.3125 C 20.25 16.933594 20.59375 16.910156 20.875 16.90625 C 20.578125 15.300781 18.984375 14.425781 15 14.1875 L 15 9.53125 C 15 8.417969 15.875 7.90625 15.875 7.40625 C 15.875 6.90625 15.550781 6.480469 15 6.59375 Z M 4.0625 17.875 C 4.042969 18.269531 4.066406 18.714844 4.15625 19.1875 L 4.96875 21.90625 C 5.417969 24.265625 6.398438 26 8.40625 26 L 16.59375 26 C 18.605469 26 19.582031 24.828125 20.03125 22.46875 L 20.84375 19.1875 C 20.894531 18.929688 20.917969 18.671875 20.9375 18.4375 C 20.769531 18.4375 20.679688 18.476563 20.5625 18.59375 C 20.511719 18.644531 20.46875 18.71875 20.40625 18.8125 C 20.09375 19.289063 19.511719 20.15625 18.28125 20.15625 C 17.449219 20.15625 16.902344 19.636719 16.46875 19.21875 C 16.074219 18.839844 15.84375 18.625 15.5 18.625 C 14.9375 18.625 14.757813 17.984375 14.5 18.90625 C 14.273438 19.714844 13.96875 21.125 12.71875 21.125 C 11.453125 21.125 11.101563 19.703125 10.84375 18.875 C 10.554688 17.949219 10.398438 18.625 9.96875 18.625 C 9.660156 18.625 9.453125 18.859375 9.15625 19.25 C 8.820313 19.691406 8.414063 20.25 7.625 20.25 C 6.792969 20.25 6.28125 19.636719 5.875 19.15625 C 5.640625 18.882813 5.394531 18.59375 5.21875 18.59375 C 4.679688 18.59375 4.351563 18.226563 4.0625 17.875 Z "
			/>
		</svg>
	);
	return (
		<li>
			<Link to={`/people/${item.person.id}`} style={{ textDecoration: 'none' }}>
				<div className="searchResult">
					<img src={imageSrc} alt={item.person.name} style={{ height: 75 }} />
					<div className="resultItem">
						{item.person.name}
						<span className="mono">
							{item.person.birthday && (
								<span>
									{birthdaySVG} <span style={bdayStyle}>{item.person.birthday.slice(0, 4)}</span>
								</span>
							)}
							{item.person.country && <span> Country: {item.person.country.code} </span>}
						</span>
					</div>
				</div>
			</Link>
		</li>
	);
};

const PersonList = (props) => {
	return (
		<div>
			<ul className="seriesList">
				{props.list.map((people) => <PersonListItem item={people} key={people.person.id} />)}
			</ul>
		</div>
	);
};

export default PersonList;
