import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// You can think of a store as an empty database, or an object where we will keep all our information.

// create an ojbect for the default data, allowed to not pass key since key/var name same. (es6 feature)
const defaultState = {
	posts, 
	comments
};


// store takes two things, a root reducer, as a well as a default state
const store = createStore(rootReducer, defaultState);

// History, this is kept track by the router, and we ar weaving in the store, to be accessible
export const history = syncHistoryWithStore(browserHistory, store);

export default store;