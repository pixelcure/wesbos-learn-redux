// React
import React from 'react';
// Render
import { render } from 'react-dom';
// CSS
import css from './styles/style.styl';

// Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// React Router Deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Connect react to redux (not together, redux can be used alone)
import { Provider } from 'react-redux';
import store, { history } from './store';


// In order to pass our state around (as opposed to passing it as props) we are using something called "React Connect". This allows us
// to access what we need wherever we are in our application

const router = (
	<Provider store={store}>	
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/post:id" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)
// Render
render(router, document.getElementById('root'));
