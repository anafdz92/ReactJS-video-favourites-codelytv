import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import List from './List';
import Detail from './Detail';

const Root = () => (
	<HashRouter>
		<div>
			<Route exact path="/" component={List}/>
			<Route exact path="/:id" component={Detail}/>
		</div>
	</HashRouter>
);

export default Root;