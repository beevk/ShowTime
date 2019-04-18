import React from 'react';
import './index.css';

const SeriesListItem = ({ series }) => {
	return <li> {series.show.name}</li>;
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
