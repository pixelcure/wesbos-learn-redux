// You can think of an ACTION as something that happens
// in your application.


// Whenever something happens, the action is DISPATCHED,
// and it keeps two things, the TYPE of action, and the
// PAYLOAD of information that is needed.
// Example, which comment got deleted, what photo was just liked

// Anything you fire off an action, or dispatch an action
// with Redux Devtools, you can "Time travel" and see different
// actions that have been dispatched throughout your state

// On the other end, a reducer takes care of actually updating and
// handling the action.


// If there are a lot of actions, it's common to break
// them out into multiple files. Since we only have a few,
// we will use one file.


// Actions are just objects that have two things, the TYPE, and some
// type of payload. 


// Why do we call them action creator?
// The action creator puts everything together to dispatch
// and access later on. We do this with "Reducers"

// increment
// passes us an index, and tells us which post needs to
// have it's "likes" incremented.
export function increment(index){
	return {
		type : 'INCREMENT_LIKES',
		index
	};
};

// add comment
export function addComment(postId, author, comment){
	return {
		type : 'ADD_COMMENT',
		postId,
		author,
		comment
	};
};


// remove comment
export function removeComment(postId, i){
	return {
		type : 'REMOVE_COMMENT',
		postId,
		i
	};
};