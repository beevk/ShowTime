import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';
import Error404 from '../App/Errors';

const main = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Series} />
			<Route path="/series/:id" component={SingleSeries} />
			<Route exact component={Error404} />
		</Switch>
	);
};

export default main;
