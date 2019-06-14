import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
// import { NONAME } from 'dns';

const ratingStyle = {
	background: '#34D1BF',
	color: '#fff',
	padding: '0px 5px',
	borderRadius: 2
};

const premieredStyle = {
	marginLeft: 5,
	fontWeight: 'bold'
};

const SeriesListItem = ({ series }) => {
	const imageSrc = series.show.image
		? series.show.image.medium
		: 'https://via.placeholder.com/53x75?text=Image+Not+Found';
	return (
		<li>
			<Link to={`/series/${series.show.id}`} style={{ textDecoration: 'none' }}>
				<div className="searchResult">
					<img src={imageSrc} alt={series.show.name} style={{ height: 75 }} />
					<div className="resultItem">
						{series.show.name}
						<span className="mono">
							<span style={ratingStyle}> {series.show.rating.average || 'n/a'} </span>
							<span style={premieredStyle}> Premiered: </span>
							<span style={{ color: '#34D1BF' }}> {series.show.premiered || 'n/a'} </span>
						</span>
						<span className="mono">{series.show.genres.join(', ')} </span>
					</div>
				</div>
			</Link>
		</li>
	);
};

const SeriesList = (props) => {
	return (
		<div>
			<ul className="seriesList">
				{props.list.map((series) => <SeriesListItem series={series} key={series.show.id} />)}
			</ul>
		</div>
	);
};

export default SeriesList;
