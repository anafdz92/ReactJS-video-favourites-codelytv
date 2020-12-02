import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import List from './List';
import Detail from './Detail';

const Root = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={List}/>
			<Route exact path="/:id" component={Detail}/>
		</Switch>
	</HashRouter>
);

export default Root;