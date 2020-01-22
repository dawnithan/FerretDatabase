import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { FerretsList, FerretsInsert, FerretsUpdate } from '../pages'

import NavBar from '../components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/ferrets/list" exact component={FerretsList} />
				<Route path="/ferrets/create" exact component={FerretsInsert} />
				<Route path="/ferrets/update/:id" exact component={FerretsUpdate} />
			</Switch>
		</Router>
	)
}

export default App;
