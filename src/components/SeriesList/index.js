import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => {
	// const img = series.show.image;
	return (
		<li>
			{/* <img src={img} alt="" /> */}
			<Link to={`/series/${series.show.id}`}>
				<div className="searchResult">
					{series.show.name} <br />
					<span className="mono">
						{series.show.rating.average}
						<span> {series.show.genres.toString()} </span>
					</span>
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
