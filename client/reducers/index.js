import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import posts from './posts';
import comments from './comments';


// Creates one main reducer, which then redux handles.
// We need to also send them the routing, and the changes, and history.
// This way it all gets stores into our state.
const rootReducer = combineReducers({
	posts, comments, routing : routerReducer
});

export default rootReducer;


