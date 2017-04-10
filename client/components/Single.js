import React from 'react';
import Photo from './Photo';
// import comments from './Comments'

const Single = React.createClass({
 
 render () {
 	
 	// index of the post
 	const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
 	
 	// Actual post object
 	const post = this.props.posts[i];

 	// get us the post
 	return (
 		<div className="single-photo">
 			<Photo i={i} post={post} {...this.props} />		
 		</div>
 	);
 }
});

export default Single;