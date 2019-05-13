import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';
import Error404 from '../App/Errors';

const main = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Series} exact />
			<Route path="/series/:id" component={SingleSeries} />
			<Route component={Error404} exact />
		</Switch>
	);
};

export default main;
