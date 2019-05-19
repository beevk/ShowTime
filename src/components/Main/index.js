import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';
import EpisodeList from '../../containers/SingleSeries/EpisodeList';
import CastList from '../../containers/SingleSeries/CastList';
import People from '../../containers/People';
import Person from '../../containers/People/Person';
import Error404 from '../App/Errors';

const main = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Series} />
			<Route exact path="/series" component={Series} />
			<Route exact path="/series/:id" component={SingleSeries} />
			<Route exact path="/series/:id/cast" component={CastList} />
			<Route path="/series/:id/episodes/" component={EpisodeList} />
			<Route exact path="/people" component={People} />
			<Route path="/people/:id" component={Person} />
			<Route exact component={Error404} />
		</Switch>
	);
};

export default main;
