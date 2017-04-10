// a reducer takes in two things, 

// 1. the action (info about what happened)
// 2. the copy of current state

// action, store

// You can only really have ONE reducer. We need to put
// them into what's call a Root Reducer, which handles it for
// us from there.

// EVERY REDUCER RUNS EVERYTIME THERE IS AN ACTION. WHETHER SOMETHING CHANGES IN STATE, IS UP TO YOU!
// EVERY REDUCER RUNS EVERYTIME THERE IS AN ACTION. WHETHER SOMETHING CHANGES IN STATE, IS UP TO YOU!
// EVERY REDUCER RUNS EVERYTIME THERE IS AN ACTION. WHETHER SOMETHING CHANGES IN STATE, IS UP TO YOU!


// In REDUX we use FUNCTIONAL programming. We do NOT mutate our state, and we use PURE functions.
// A pure function takes a copy and returns a new one. It does not use the passed copy.

export function posts(state = [], action) {
	
	switch(action.type){
		case 'INCREMENT_LIKES' : 

		const i = action.index;

		// return updated state
		console.log('incrementing likes');

		return [
			...state.slice(0, i), // before the one we are updating (we aren't changing them so it's fine)
			{...state[i], likes : state[i].likes + 1}, // the current one
			...state.slice(i + 1) // after the one we are updating (we aren't changing them so it's fine)
		]

		default : 
			return state;
	}
};

export default posts;