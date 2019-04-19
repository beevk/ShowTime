import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';

const main = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Series} />
			<Route path="/series/:id" component={SingleSeries} />
		</Switch>
	);
};

export default main;
